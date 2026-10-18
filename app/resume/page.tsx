import Link from "next/link";
import { site, experience } from "@/content/site";
import { resume } from "@/content/resume";
import { Download, ArrowUpRight } from "lucide-react";
import { PrintButton } from "@/components/print-button";
import { HeroCosmos } from "@/components/hero-cosmos";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Resume",
  "An accessible web resume for Muhammad Usman with verified skills, project context, education, and contact links.",
  "/resume",
);
export default function ResumePage() {
  return (
    <article className="resume">
      <header className="resume-header cosmic-host">
        <HeroCosmos scene="resume" />
        <div>
          <span className="mono">Resume / {site.country}</span>
          <h1 tabIndex={-1}>{site.name}</h1>
          <h2>{resume.title}</h2>
          <p className="resume-availability">{resume.availability}</p>
          <div className="resume-contact">
            <a href={`mailto:${resume.email}`}>{resume.email}</a>
            <a href={resume.phoneHref}>{resume.phone}</a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="resume-actions">
          <a
            className="button button-primary resume-download"
            href={site.resumePdf}
            download
          >
            Download PDF <Download size={16} aria-hidden="true" />
          </a>
          <a
            className="resume-view"
            href={site.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            View original CV <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <PrintButton />
        </div>
      </header>
      <section className="resume-section">
        <h2>Profile</h2>
        <div>
          <p>{resume.summary}</p>
        </div>
      </section>
      <section className="resume-section">
        <h2>Capabilities</h2>
        <div className="resume-skills">
          {resume.skills.map((g) => (
            <div key={g.name}>
              <h3>{g.name}</h3>
              <p>{g.tools}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="resume-section">
        <h2>Experience</h2>
        <div>
          {experience.map((e) => (
            <article className="resume-project" key={e.company}>
              <span className="mono">{e.dates}</span>
              <h3>
                {e.role} · {e.company}
              </h3>
              <p>{e.responsibility}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="resume-section">
        <h2>Projects</h2>
        <div>
          {resume.projects.map((p) => (
            <article className="resume-project" key={p.name}>
              <h3>
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  {p.name} ↗
                </a>
              </h3>
              <span className="mono resume-project-type">{p.type}</span>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="resume-section">
        <h2>Leadership</h2>
        <ul className="resume-leadership">
          {resume.leadership.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-education">
          <h3>{site.education.subject}</h3>
          <p>{site.education.institution}</p>
          <p>{site.education.dates}</p>
        </div>
      </section>
      {site.studio.enabled && (
        <section className="resume-section">
          <h2>Studio</h2>
          <div>
            <p>
              {site.studio.role}:{" "}
              <a
                href={site.studio.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.studio.name} ↗
              </a>
            </p>
            <p>
              {site.emailLabel}:{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </section>
      )}
    </article>
  );
}
