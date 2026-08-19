"use client";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

/* ← swap these with your real projects whenever you're ready */
const PROJECTS = [
  {
    id: "01",
    name: "THE FIRST ONE",
    blurb:
      "a landing page built during the course. ugly in a lovable way — shipped anyway.",
    details:
      "my first real build. hand-written HTML, CSS that fought me back, and a deploy button pressed with both fingers crossed. it taught me more in two weeks than a semester of watching tutorials.",
    tools: ["HTML", "CSS", "a lot of hope"],
    img: "https://picsum.photos/seed/ayush-project-one/1200/750",
    link: "#",
  },
  {
    id: "02",
    name: "STILL LOADING…",
    blurb: "the thing i'm building right now. this very file is part of it.",
    details:
      "currently experimenting with React, Next.js and small full-stack things. this sheet stays open on purpose — the best project is always the next one.",
    tools: ["React", "Next.js", "curiosity"],
    img: "https://picsum.photos/seed/ayush-project-two/1200/750",
    link: "#",
  },
];

export default function Projects() {
  const [open, setOpen] = useState<(typeof PROJECTS)[number] | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="projects wrap" id="work">
      <Reveal>
        <h2 className="section-tag mono">03 — WORK ON THE DESK</h2>
        <p className="hand projects-hint">hover to lift · click to open the file</p>
      </Reveal>

      <div className="projects-desk">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={i * 140}>
            <button
              type="button"
              className="proj-sheet"
              style={{ ["--rot" as string]: i % 2 ? "2deg" : "-2.4deg" }}
              onClick={() => setOpen(p)}
            >
              <header className="proj-head">
                <span className="mono">PROJECT {p.id}</span>
                <span className="hand">do not bend</span>
              </header>
              <h3 className="proj-name">{p.name}</h3>
              <p className="proj-blurb">{p.blurb}</p>
              <div className="proj-shot">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={`screenshot of ${p.name}`} loading="lazy" />
              </div>
              <footer className="mono proj-open">OPEN FILE ↗</footer>
            </button>
          </Reveal>
        ))}
      </div>

      {open && (
        <div className="file-modal" onClick={() => setOpen(null)}>
          <div className="file-sheet" onClick={(e) => e.stopPropagation()}>
            <header className="fs-head">
              <span className="mono">CASE FILE — PROJECT {open.id}</span>
              <button className="fs-close mono" onClick={() => setOpen(null)}>
                ✕ close
              </button>
            </header>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="fs-img" src={open.img} alt={open.name} />
            <h3 className="fs-name">{open.name}</h3>
            <p className="fs-details">{open.details}</p>
            <ul className="fs-tools mono">
              {open.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <a className="fs-link mono" href={open.link}>
              VISIT ↗
            </a>
            <p className="hand fs-note">this file grows. check back soon.</p>
          </div>
        </div>
      )}
    </section>
  );
}
