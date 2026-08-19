"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const N = 28;

function makeTear(seed: number): [number, number][] {
  let s = seed;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const pts: [number, number][] = [];
  for (let i = 0; i <= N; i++) {
    const x = i / N;
    const y = 0.5 + (rnd() - 0.5) * 0.075 + Math.sin(i * 2.3) * 0.006;
    pts.push([x, y]);
  }
  return pts;
}

function CoverFace() {
  return (
    <div className="cover-face">
      <span className="cover-stamp mono tl">AYUSH / 18</span>
      <span className="cover-stamp mono tr">FILE № 001</span>
      <span className="cover-stamp mono bl">WEB · DESIGN · CODE</span>
      <span className="cover-stamp mono br">2026</span>

      <div className="cover-center">
        <svg className="cover-ring" viewBox="0 0 640 200" aria-hidden="true">
          <path d="M42 118 C30 62 128 26 320 22 C512 18 612 58 616 108 C620 162 512 186 316 188 C140 190 46 166 38 128" />
          <path d="M90 176 C240 196 460 192 566 160" />
        </svg>
        <h1 className="cover-title">
          {"PORTFOLIO".split("").map((c, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${((i % 3) - 1) * 1.4}deg) translateY(${
                  (i % 2) * 4 - 2
                }px)`,
              }}
            >
              {c}
            </span>
          ))}
        </h1>
        <p className="cover-sub hand">handle with care (or don't)</p>
      </div>

      <div className="tear-hint mono">
        TEAR TO ENTER <span className="hint-arrow">→</span>
      </div>
      <p className="cover-skip mono">(in a hurry? press enter)</p>
      <div className="dog-ear" aria-hidden="true" />
    </div>
  );
}

export default function PaperTear() {
  const pts = useMemo(() => makeTear(11), []);
  const [progress, setProgress] = useState(0);
  const [torn, setTorn] = useState(false);
  const [gone, setGone] = useState(false);
  const [dragging, setDragging] = useState(false);
  const progressRef = useRef(0);
  const draggingRef = useRef(false);

  const fmt = (p: [number, number]) =>
    `${(p[0] * 100).toFixed(2)}% ${(p[1] * 100).toFixed(2)}%`;

  const topPoly = useMemo(
    () =>
      `polygon(0% 0%, 100% 0%, ${[...pts].reverse().map(fmt).join(", ")})`,
    [pts]
  );
  const botPoly = useMemo(
    () => `polygon(${pts.map(fmt).join(", ")}, 100% 100%, 0% 100%)`,
    [pts]
  );
  const edgePath = useMemo(
    () =>
      `M ${pts
        .map((p) => `${(p[0] * 100).toFixed(2)} ${(p[1] * 100).toFixed(2)}`)
        .join(" L ")}`,
    [pts]
  );

  useEffect(() => {
    document.body.style.overflow = gone ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [gone]);

  const finish = () => {
    if (torn) return;
    setTorn(true);
    setTimeout(() => setGone(true), 1100);
  };

  const advance = (clientX: number) => {
    const p = Math.max(0, Math.min(1, clientX / window.innerWidth));
    if (p > progressRef.current) {
      progressRef.current = p;
      setProgress(p);
      if (p >= 0.985) finish();
    }
  };

  const playTear = () => {
    if (torn) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      progressRef.current = 1;
      setProgress(1);
      finish();
      return;
    }
    const from = progressRef.current;
    const dur = 900 * (1 - from) + 150;
    const start = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - start) / dur);
      const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      const v = from + (1 - from) * e;
      progressRef.current = v;
      setProgress(v);
      if (k < 1) requestAnimationFrame(step);
      else finish();
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !torn) playTear();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [torn]);

  const onDown = (e: React.PointerEvent) => {
    if (torn) return;
    draggingRef.current = true;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    advance(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!draggingRef.current || torn) return;
    advance(e.clientX);
  };
  const onUp = () => {
    draggingRef.current = false;
    setDragging(false);
    if (progressRef.current > 0.65) playTear();
  };

  if (gone) return null;

  const t = progress;
  const edgeSvg = (
    <svg
      className="tear-edge"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={edgePath} className="edge-dark" />
      <path d={edgePath} className="edge-light" />
    </svg>
  );

  return (
    <div
      className={`tear-overlay ${torn ? "is-torn" : ""} ${
        progress > 0.02 ? "is-tearing" : ""
      } ${dragging ? "is-dragging" : ""}`}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      aria-label="Paper cover — tear to enter"
    >
      <div
        className="half half-top"
        style={{
          clipPath: topPoly,
          transform: torn
            ? "translate(-6vw,-118vh) rotate(-9deg)"
            : `translate(${-t * 1.2}vw, ${-t * 4.4}vh) rotate(${-t * 2.1}deg)`,
          filter: `drop-shadow(0 ${4 + t * 20}px ${6 + t * 26}px rgba(40,32,18,${
            0.1 + t * 0.22
          }))`,
        }}
      >
        <CoverFace />
        {edgeSvg}
      </div>

      <div
        className="half half-bottom"
        style={{
          clipPath: botPoly,
          transform: torn
            ? "translate(5vw,118vh) rotate(7deg)"
            : `translate(${t * 1}vw, ${t * 4.4}vh) rotate(${t * 1.7}deg)`,
          filter: `drop-shadow(0 ${6 + t * 22}px ${8 + t * 28}px rgba(40,32,18,${
            0.12 + t * 0.24
          }))`,
        }}
      >
        <CoverFace />
        {edgeSvg}
      </div>

      {!torn && progress < 0.03 && (
        <svg
          className="tear-guide"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={edgePath} className="guide-line" />
        </svg>
      )}
      {!torn && progress < 0.03 && (
        <span
          className="guide-scissors"
          style={{ top: `${pts[0][1] * 100}%` }}
          aria-hidden="true"
        >
          ✂
        </span>
      )}
    </div>
  );
}
