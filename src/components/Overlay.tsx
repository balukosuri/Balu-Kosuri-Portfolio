"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: visible 0% - 20%
  const s1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.22], [0, 1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.22], [0, -150]);

  // Section 2: visible 25% - 50%
  const s2Opacity = useTransform(scrollYProgress, [0.25, 0.32, 0.42, 0.50], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.25, 0.50], [80, -80]);

  // Section 3: visible 55% - 80%
  const s3Opacity = useTransform(scrollYProgress, [0.55, 0.62, 0.72, 0.80], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.55, 0.80], [80, -80]);

  // CTA section: visible 82% - 100%
  const s4Opacity = useTransform(scrollYProgress, [0.82, 0.90, 1], [0, 1, 1]);
  const s4Y = useTransform(scrollYProgress, [0.82, 0.95], [60, 0]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-[500vh] z-10 pointer-events-none"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* Section 1 — Hero intro */}
        <motion.div
          style={{ opacity: s1Opacity, y: s1Y }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6"
        >
          <p className="text-accent font-mono text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Creative Developer
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-center leading-[0.9]">
            Balu
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-muted">
              Kosuri
            </span>
          </h1>
          <div className="mt-8 flex items-center gap-3">
            <span className="w-12 h-px bg-accent" />
            <p className="text-muted text-sm font-mono tracking-widest">
              SCROLL TO EXPLORE
            </p>
            <span className="w-12 h-px bg-accent" />
          </div>
        </motion.div>

        {/* Section 2 — Statement left-aligned */}
        <motion.div
          style={{ opacity: s2Opacity, y: s2Y }}
          className="absolute inset-0 flex items-center px-8 md:px-20 lg:px-32"
        >
          <div className="max-w-2xl">
            <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase block mb-4">
              01 / Philosophy
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              I build
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-400">
                digital
              </span>
              <br />
              experiences.
            </h2>
            <p className="mt-6 text-muted text-lg md:text-xl max-w-md leading-relaxed">
              Crafting interfaces that feel alive — where every pixel serves a purpose
              and every interaction tells a story.
            </p>
          </div>
        </motion.div>

        {/* Section 3 — Statement right-aligned */}
        <motion.div
          style={{ opacity: s3Opacity, y: s3Y }}
          className="absolute inset-0 flex items-center justify-end px-8 md:px-20 lg:px-32"
        >
          <div className="max-w-2xl text-right">
            <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase block mb-4">
              02 / Approach
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Bridging
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent">
                design
              </span>
              {" & "}
              <br />
              engineering.
            </h2>
            <p className="mt-6 text-muted text-lg md:text-xl max-w-md ml-auto leading-relaxed">
              From concept to code — transforming bold ideas into performant,
              production-ready digital products.
            </p>
          </div>
        </motion.div>

        {/* Section 4 — CTA at end */}
        <motion.div
          style={{ opacity: s4Opacity, y: s4Y }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-auto"
        >
          <p className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-6">
            03 / Featured Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-8">
            See what I&apos;ve built
          </h2>
          <motion.div
            className="w-10 h-10 border-2 border-accent/50 rounded-full flex items-center justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-4 h-4 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
