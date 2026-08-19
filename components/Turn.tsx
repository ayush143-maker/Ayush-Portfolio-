"use client";
import Reveal from "./Reveal";

export default function Turn() {
  return (
    <section className="turn wrap" id="turn">
      <Reveal>
        <p className="hand turn-pre">so, with zero backup plans left —</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="turn-big">
          SO I STARTED
          <br />
          BUILDING.
        </h2>
      </Reveal>
      <Reveal delay={220}>
        <div className="paper-card turn-note">
          <span className="tape tape-c" aria-hidden="true" />
          <p className="mono turn-course">WEB DESIGN COURSE</p>
          <p className="turn-duration">1.5 MONTHS</p>
          <p className="hand turn-side">no fluff. build, break, repeat.</p>
        </div>
      </Reveal>
    </section>
  );
}
