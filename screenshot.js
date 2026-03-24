const puppeteer = require('puppeteer');
const fs = require('fs');

const projects = [
  { url: 'https://play.google.com/store/apps/details?id=com.anonymous.yacineshoot', name: 'yacine_shoot' },
  { url: 'https://play.google.com/store/apps/details?id=com.yproviewer.ypro', name: 'ypro_viewer' },
  { url: 'https://www.barkopets.com/', name: 'barko_pets' },
  { url: 'http://hipoglobal.com/', name: 'hipo_global' },
  { url: 'https://www.propageseo.com/', name: 'propage_seo' },
  { url: 'https://www.shayonsmith.com/', name: 'shayon_smith' },
  { url: 'https://www.numatbamboo.com/', name: 'numat_bamboo' },
  { url: 'https://www.nubambu.com/', name: 'nubambu' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  
  if (!fs.existsSync('./public/projects')) {
    fs.mkdirSync('./public/projects', { recursive: true });
  }

  for (const project of projects) {
    try {
      console.log(`Navigating to ${project.url}...`);
      await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 15000 });
      await new Promise(r => setTimeout(r, 2000)); // wait for animations
      await page.screenshot({ path: `./public/projects/${project.name}.jpg` });
      console.log(`Saved screenshot for ${project.name}`);
    } catch (e) {
      console.error(`Failed to capture ${project.name}: ${e.message}`);
    }
  }

  await browser.close();
})();
