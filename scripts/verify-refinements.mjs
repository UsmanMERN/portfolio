import puppeteer from "puppeteer";
import assert from "node:assert/strict";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3077";
const browser = await puppeteer.launch({
  headless: true,
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  args: ["--no-sandbox"],
});
const results = [];
const errors = [];
const check = async (name, fn) => {
  try {
    await fn();
    results.push({ name, pass: true });
  } catch (e) {
    results.push({ name, pass: false, error: e.message });
  }
};
await mkdir("artifacts/screenshots", { recursive: true });
const p = await browser.newPage();
p.on("pageerror", (e) => errors.push(e.message));
await p.setCacheEnabled(false);
const ready = async (route) => {
  await p.goto(base + route, { waitUntil: "domcontentloaded" });
  await p.evaluate(() => document.fonts.ready);
  await p.waitForSelector(".cosmos-control");
  await p.waitForFunction(() => document.documentElement.dataset.motion);
};
try {
  for (const theme of ["dark", "light"]) {
    await p.evaluateOnNewDocument(
      (t) => localStorage.setItem("mu-theme", t),
      theme,
    );
    for (const width of [360, 390, 768, 1024, 1280, 1440, 1920, 2560]) {
      await p.setViewport({ width, height: width < 600 ? 844 : 1000 });
      for (const route of ["/", "/resume/", "/services/", "/contact/"]) {
        await check(
          `${theme} ${route} ${width}px fits without clipping`,
          async () => {
            await ready(route);
            const layout = await p.evaluate(() => ({
              overflow: document.documentElement.scrollWidth > innerWidth + 1,
              headings: [
                ...document.querySelectorAll("main h1,main h2,main h3"),
              ]
                .filter(
                  (e) =>
                    e.getBoundingClientRect().width &&
                    (e.getBoundingClientRect().right > innerWidth + 1 ||
                      e.getBoundingClientRect().left < -1),
                )
                .map((e) => e.textContent),
              broken: [...document.images]
                .filter((i) => i.complete && !i.naturalWidth)
                .map((i) => i.src),
            }));
            assert.deepEqual(layout, {
              overflow: false,
              headings: [],
              broken: [],
            });
            if ((width === 390 || width === 1440) && route != "/contact/")
              await p.screenshot({
                path: `artifacts/screenshots/refined-${theme}-${route === "/" ? "home" : route.split("/")[1]}-${width}.png`,
                fullPage: route === "/resume/",
              });
          },
        );
      }
    }
  }
  await p.setViewport({ width: 1440, height: 1000 });
  await ready("/resume/");
  await check("Original PDF is byte-identical and served as PDF", async () => {
    const href = await p.$eval(".resume-download", (a) => a.href);
    const response = await fetch(href);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type"), /application\/pdf/);
    const original = await readFile("public/resume/Muhammad-Usman-Resume.pdf");
    const hash = (b) => createHash("sha256").update(b).digest("hex");
    assert.equal(
      hash(Buffer.from(await response.arrayBuffer())),
      hash(original),
    );
    assert.ok(
      await p.$eval(".resume-download", (a) => a.hasAttribute("download")),
    );
    assert.equal(await p.$eval(".resume-view", (a) => a.target), "_blank");
  });
  await check("Résumé includes the complete supplied CV context", async () => {
    const text = await p.$eval("main", (e) => e.innerText);
    for (const term of [
      "100+",
      "15+",
      "Codevpk",
      "KlickStock",
      "Seeraht",
      "PumpV2",
      "HipoGlobal",
      "Pivott",
      "Shoot 11",
      "WooCommerce",
      "Prisma",
      "Lablab.ai",
      "usman853136@gmail.com",
    ])
      assert.ok(text.includes(term), term);
  });
  await check(
    "Print hides screen actions and preserves readable text",
    async () => {
      await p.emulateMediaType("print");
      assert.equal(
        await p.$eval(".resume-actions", (e) => getComputedStyle(e).display),
        "none",
      );
      assert.equal(
        await p.$eval(".hero-cosmos", (e) => getComputedStyle(e).display),
        "none",
      );
      await p.pdf({
        path: "artifacts/resume-review/web-resume-print.pdf",
        format: "A4",
        printBackground: true,
        margin: { top: "16mm", bottom: "16mm", left: "14mm", right: "14mm" },
      });
      await p.emulateMediaType("screen");
    },
  );
  await ready("/services/");
  await p.bringToFront();
  await check(
    "Interior orbit changes a perspective matrix across both cursor axes",
    async () => {
      await p.waitForFunction(
        () => document.querySelector(".hero-cosmos").dataset.running === "true",
      );
      await p.mouse.move(100, 160);
      await new Promise((r) => setTimeout(r, 650));
      const a = await p.$eval(
        ".cosmos-orrery",
        (e) => getComputedStyle(e).transform,
      );
      await p.mouse.move(1340, 470);
      await new Promise((r) => setTimeout(r, 650));
      const b = await p.$eval(
        ".cosmos-orrery",
        (e) => getComputedStyle(e).transform,
      );
      assert.match(a, /matrix3d/);
      assert.match(b, /matrix3d/);
      assert.notEqual(a, b);
      const matrix = b.slice(9, -1).split(",").map(Number);
      assert.ok(Math.abs(matrix[2]) > 0.05 && Math.abs(matrix[6]) > 0.05);
      await p.click(".cosmos-control");
      assert.equal(
        await p.$eval(".hero-cosmos", (e) => e.dataset.running),
        "false",
      );
    },
  );
  await ready("/");
  await check(
    "Live WebGL follows the cursor across the text side of the hero",
    async () => {
      await p.waitForSelector(".orbital.live-ready canvas", { timeout: 20000 });
      await p.click(".cosmos-control");
      await p.mouse.move(70, 160);
      await new Promise((r) => setTimeout(r, 700));
      const clip = await p.$eval(".canvas-wrap canvas", (e) => {
        const box = e.getBoundingClientRect();
        const x = Math.max(0, box.left + 24);
        const y = Math.max(0, box.top + 24);
        return {
          x,
          y,
          width: Math.min(innerWidth, box.right - 24) - x,
          height: Math.min(innerHeight, box.bottom - 100) - y,
        };
      });
      const a = await p.screenshot({ clip });
      await p.mouse.move(650, 450);
      await new Promise((r) => setTimeout(r, 700));
      const b = await p.screenshot({
        clip,
        path: "artifacts/screenshots/refined-3d-cursor.png",
      });
      assert.notEqual(
        createHash("sha256").update(a).digest("hex"),
        createHash("sha256").update(b).digest("hex"),
      );
      assert.equal(await p.$eval(".orbital", (e) => e.dataset.running), "true");
      await p.click(".orbit-controls button");
      await p.waitForFunction(
        () => document.querySelector(".orbital").dataset.running === "false",
      );
      await p.mouse.move(70, 160);
      // Let the cursor trail and button hover transition settle outside the crop.
      await new Promise((r) => setTimeout(r, 500));
      const still = await p.screenshot({
        clip,
        path: "artifacts/screenshots/paused-before.png",
      });
      await p.mouse.move(650, 450);
      await new Promise((r) => setTimeout(r, 250));
      const after = await p.screenshot({
        clip,
        path: "artifacts/screenshots/paused-after.png",
      });
      const changed = await p.evaluate(
        async ({ before, after }) => {
          const pixels = async (base64) => {
            const image = new Image();
            image.src = `data:image/png;base64,${base64}`;
            await image.decode();
            const canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            const context = canvas.getContext("2d");
            context.drawImage(image, 0, 0);
            return context.getImageData(0, 0, canvas.width, canvas.height).data;
          };
          const a = await pixels(before),
            b = await pixels(after);
          let changes = 0;
          // Ignore 1–2 level compositor rounding; actual motion changes edges strongly.
          for (let i = 0; i < a.length; i++)
            if (Math.abs(a[i] - b[i]) > 2) changes++;
          return changes;
        },
        {
          before: Buffer.from(still).toString("base64"),
          after: Buffer.from(after).toString("base64"),
        },
      );
      assert.equal(changed, 0, "Paused scene has no visibly changing pixels");
    },
  );
  await check(
    "Reduced motion removes cursor rotation and live rendering",
    async () => {
      await p.emulateMediaFeatures([
        { name: "prefers-reduced-motion", value: "reduce" },
      ]);
      await ready("/");
      await p.waitForFunction(
        () => document.querySelector(".hero-cosmos").dataset.reduced === "true",
      );
      assert.equal(await p.$(".canvas-wrap canvas"), null);
      await p.mouse.move(1200, 500);
      assert.equal(
        await p.$eval(".hero-cosmos", (e) =>
          e.style.getPropertyValue("--orbit-ry"),
        ),
        "",
      );
    },
  );
  await check("No browser runtime errors", async () =>
    assert.deepEqual(errors, []),
  );
} finally {
  await browser.close();
}
await writeFile(
  "artifacts/refinements-verification.json",
  JSON.stringify({ results, errors }, null, 2),
);
console.log(
  JSON.stringify(
    {
      passed: results.filter((r) => r.pass).length,
      total: results.length,
      failures: results.filter((r) => !r.pass),
      errors,
    },
    null,
    2,
  ),
);
if (results.some((r) => !r.pass)) process.exitCode = 1;
