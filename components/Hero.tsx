"use client";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero wrap" id="hello">
      <div className="hero-grid">
        <div className="hero-left">
          <Reveal>
            <p className="hero-kicker mono">file opened — hello, i am</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="hero-name">
              AYUSH
              <svg className="hero-underline" viewBox="0 0 360 24" aria-hidden="true">
                <path d="M4 14 C 44 4, 84 22, 124 12 S 204 6, 244 14 S 320 20, 356 10" />
              </svg>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-age mono">CURRENTLY 18.</p>
          </Reveal>
          <Reveal delay={240}>
            <p className="hero-lines">
              I&rsquo;M STILL FIGURING IT OUT.
              <br />
              STILL BUILDING.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <svg className="hero-arrow" viewBox="0 0 120 60" aria-hidden="true">
              <path d="M4 44 C 34 40, 60 30, 92 16 M92 16 l-16 -2 M92 16 l-4 14" />
            </svg>
            <p className="hero-scroll mono">scroll — the file continues ↓</p>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero-photo">
          <figure className="polaroid">
            <span className="tape tape-l" aria-hidden="true" />
            <span className="tape tape-r" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ayush.jpg"
              alt="Ayush, somewhere sunny"
              onError={(e) => {
                const el = e.currentTarget;
                if (!el.dataset.fb) {
                  el.dataset.fb = "1";
                  el.src = "https://picsum.photos/seed/ayush-portrait/520/620";
                }
              }}
            />
            <figcaption className="hand">that&rsquo;s me. →</figcaption>
          </figure>
          <span className="photo-note hand">taken by mom, obviously</span>
        </Reveal>
      </div>
    </section>
  );
}
