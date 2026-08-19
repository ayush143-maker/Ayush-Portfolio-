"use client";
import Reveal from "./Reveal";

const SECTIONS = [
  {
    title: "LANGUAGES",
    items: [
      { name: "HTML", note: "home turf" },
      { name: "CSS", note: "my favorite fight" },
      { name: "JavaScript" },
      { name: "TypeScript", note: "warming up" },
      { name: "React" },
      { name: "Next.js" },
      { name: "C++", note: "school days" },
      { name: "Python" },
      { name: "Java" },
      { name: "C" },
      { name: "C#", note: "don't ask" },
      { name: "PHP", note: "it pays rent sometimes" },
    ],
  },
  {
    title: "DATABASES",
    items: [{ name: "MongoDB" }, { name: "Supabase" }, { name: "Firebase" }],
  },
  {
    title: "DEPLOYMENT",
    items: [{ name: "Vercel", note: "ship button" }, { name: "Cloudflare" }],
  },
];

export default function Stack() {
  return (
    <section className="stack wrap" id="stack">
      <Reveal>
        <h2 className="section-tag mono">04 — THE STACK</h2>
      </Reveal>
      <Reveal delay={120}>
        <div className="stack-sheet">
          <header className="ss-head">
            <h3 className="mono">SPEC SHEET / TOOLS &amp; MATERIALS</h3>
            <span className="stamp ss-stamp">SELF-VERIFIED</span>
          </header>

          {SECTIONS.map((sec) => (
            <div className="stack-group" key={sec.title}>
              <h4 className="mono">{sec.title}</h4>
              <ul className="stack-items">
                {sec.items.map((it) => (
                  <li key={it.name} className="stack-item mono">
                    <span className="check" aria-hidden="true">✓</span>
                    {it.name}
                    {"note" in it && it.note && (
                      <em className="hand stack-note">{it.note}</em>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <footer className="ss-foot hand">
            * proficiency levels: honest. some of these mean &ldquo;it compiles&rdquo;.
          </footer>
        </div>
      </Reveal>
    </section>
  );
}
