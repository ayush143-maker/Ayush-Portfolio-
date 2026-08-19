"use client";
import Reveal from "./Reveal";

const ATTEMPTS = [
  { id: "01", name: "JEE MAIN / 01", note: "didn't cut it. cried a little, ate, moved on." },
  { id: "02", name: "JEE MAIN / 02", note: "round two. the paper won again." },
  { id: "03", name: "IMU", note: "no sea life for me, apparently." },
  { id: "04", name: "NDA", note: "no uniform either." },
];

export default function Story() {
  return (
    <section className="story wrap" id="story">
      <Reveal>
        <h2 className="section-tag mono">02 — THE STORY</h2>
      </Reveal>

      <div className="story-grid">
        <Reveal className="story-edu">
          <div className="paper-card edu-card">
            <span className="tape tape-c" aria-hidden="true" />
            <h3 className="mono card-head">EDUCATION</h3>
            <ul className="edu-list">
              <li>
                <span>CLASS 10</span>
                <span className="dots" aria-hidden="true" />
                <span className="circled">
                  89.8%
                  <svg viewBox="0 0 100 44" aria-hidden="true">
                    <path d="M8 24 C 10 8, 60 4, 88 12 C 104 20, 92 38, 52 40 C 18 41, 4 34, 8 22" />
                  </svg>
                </span>
              </li>
              <li>
                <span>CLASS 12</span>
                <span className="dots" aria-hidden="true" />
                <span className="circled">
                  95%
                  <svg viewBox="0 0 100 44" aria-hidden="true">
                    <path d="M10 26 C 6 10, 66 2, 90 14 C 102 24, 86 40, 46 40 C 16 40, 8 34, 10 24" />
                  </svg>
                </span>
              </li>
              <li>
                <span>STREAM</span>
                <span className="dots" aria-hidden="true" />
                <span>PCM</span>
              </li>
            </ul>
            <p className="hand edu-note">the marks were fine. the plan wasn&rsquo;t.</p>
          </div>
        </Reveal>

        <div className="story-attempts">
          <Reveal>
            <h3 className="attempts-title">THE EXAM YEARS</h3>
          </Reveal>
          <ol className="attempt-list">
            {ATTEMPTS.map((a, i) => (
              <Reveal as="li" key={a.id} delay={i * 120}>
                <div className="attempt">
                  <span className="attempt-no mono">{a.id}</span>
                  <div className="attempt-txt">
                    <h4>{a.name}</h4>
                    <p className="hand">{a.note}</p>
                  </div>
                  <span className="stamp">FAILED</span>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <p className="attempts-outro hand">
              four closed doors later → one open window: the internet ↓
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
