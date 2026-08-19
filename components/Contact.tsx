"use client";
import Reveal from "./Reveal";

/* ← replace these with real links */
const LINKS = [
  { label: "hello@ayush.dev", href: "mailto:hello@ayush.dev", aside: "← actual human replies" },
  { label: "github", href: "https://github.com/", aside: "where the chaos lives" },
  { label: "instagram", href: "https://instagram.com/", aside: "proof of life" },
  { label: "linkedin", href: "https://linkedin.com/", aside: "the serious one" },
];

export default function Contact() {
  return (
    <section className="ending wrap" id="contact">
      <Reveal>
        <div className="end-sheet">
          <p className="hand end-pre">ok — last page of the file,</p>
          <h2 className="end-big">
            STILL FIGURING IT OUT.
            <br />
            STILL BUILDING.
          </h2>
          <div className="end-div" aria-hidden="true">~ ~ ~</div>
          <h3 className="end-cta">LET&rsquo;S MAKE SOMETHING.</h3>
          <ul className="end-links">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a className="mono" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
                <span className="hand">{l.aside}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <footer className="site-foot mono">
        <span>printed at home · folded, not stapled · © 2026 ayush</span>
        <a href="#top">back to the top ↑</a>
      </footer>
    </section>
  );
}
