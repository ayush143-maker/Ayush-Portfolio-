"use client";
import { useState } from "react";
import Reveal from "./Reveal";

type TFile = { name: string; body: string };
type TFolder = { name: string; files: TFile[] };

const TREE: TFolder[] = [
  {
    name: "ABOUT",
    files: [
      { name: "me.txt", body: "hi. ayush, 18. failed a few big exams, started building instead. drinks too much chai. still doesn't know what he wants to be — but he's building while deciding." },
      { name: "photo.jpg", body: "[ image: one (1) slightly confused teenager, smiling ]" },
    ],
  },
  {
    name: "EDUCATION",
    files: [
      { name: "10th.txt", body: "score: 89.8% — 'not bad, kid.'" },
      { name: "12th.txt", body: "score: 95% — PCM. the peak. enjoy the view while it lasts." },
    ],
  },
  {
    name: "ATTEMPTS",
    files: [
      { name: "jee-01.txt", body: "result: FAILED.\nnotes: the syllabus won." },
      { name: "jee-02.txt", body: "result: FAILED.\nnotes: round two. it won again." },
      { name: "imu.txt", body: "result: FAILED.\nnotes: not the sea life." },
      { name: "nda.txt", body: "result: FAILED.\nnotes: not the uniform life." },
    ],
  },
  {
    name: "WORK",
    files: [
      { name: "web-design.txt", body: "status: 1.5 months in.\nsomething finally clicked. pixels obey me (sometimes)." },
    ],
  },
  {
    name: "PROJECTS",
    files: [
      { name: "project-01", body: "this one lives in the big sheets above ↑" },
      { name: "project-02", body: "also above ↑ go hover them, they lift." },
    ],
  },
  {
    name: "STACK",
    files: [
      { name: "languages.txt", body: "html, css, js, ts, react, next, c++, python, java, c, c#, php — yes, i collect them." },
      { name: "databases.txt", body: "mongodb, supabase, firebase." },
      { name: "deployment.txt", body: "vercel + cloudflare. press the ship button." },
    ],
  },
];

export default function FileTree() {
  const [open, setOpen] = useState<string[]>(["ABOUT"]);
  const [active, setActive] = useState<{ folder: string; file: TFile } | null>(null);

  const toggle = (n: string) =>
    setOpen((o) => (o.includes(n) ? o.filter((x) => x !== n) : [...o, n]));

  return (
    <section className="filetree wrap" id="files">
      <Reveal>
        <h2 className="section-tag mono">05 — THE FOLDER</h2>
        <p className="hand ft-hint">click a folder to unfold it, click a file to read it</p>
      </Reveal>

      <div className="ft-grid">
        <Reveal>
          <div className="tree mono">
            <p className="tree-root">
              /AYUSH<span className="cursor">▌</span>
            </p>
            {TREE.map((folder) => {
              const isOpen = open.includes(folder.name);
              return (
                <div key={folder.name} className="tree-block">
                  <button
                    className="tree-folder"
                    aria-expanded={isOpen}
                    onClick={() => toggle(folder.name)}
                  >
                    <span className="tw" aria-hidden="true">{isOpen ? "▾" : "▸"}</span>
                    /{folder.name.toLowerCase()}
                    {!isOpen && <span className="hand tree-aside">closed</span>}
                  </button>
                  <div className={`files ${isOpen ? "open" : ""}`}>
                    <div>
                      {folder.files.map((file) => (
                        <button
                          key={file.name}
                          className={`tree-file ${
                            active?.file.name === file.name ? "on" : ""
                          }`}
                          onClick={() => setActive({ folder: folder.name, file })}
                        >
                          <span className="twig" aria-hidden="true">└─</span>
                          {file.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="file-preview">
            {active ? (
              <>
                <p className="mono fp-head">
                  /AYUSH/{active.folder.toLowerCase()}/{active.file.name}
                  <span> · opened just now</span>
                </p>
                <div className="fp-body hand">{active.file.body}</div>
                <span className="stamp fp-stamp">READ</span>
              </>
            ) : (
              <p className="fp-empty hand">← pick a file. they don&rsquo;t bite.</p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
