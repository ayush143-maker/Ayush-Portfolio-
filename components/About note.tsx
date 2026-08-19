"use client";
import Reveal from "./Reveal";

export default function AboutNote() {
  return (
    <section className="about wrap" id="about">
      <Reveal>
        <h2 className="section-tag mono">06 — A NOTE LEFT BEHIND</h2>
      </Reveal>
      <Reveal delay={120}>
        <div className="about-note">
          <span className="tape tape-c" aria-hidden="true" />
          <p>CURRENTLY 18.</p>
          <p>
            NO PERFECT PLAN.
            <br />
            NO PERFECT STORY.
          </p>
          <p>
            JUST LEARNING,
            <br />
            BUILDING,
            <br />
            BREAKING THINGS,
            <br />
            AND BUILDING THEM AGAIN.
          </p>
          <p className="about-sign">— a.</p>
        </div>
      </Reveal>
    </section>
  );
}
