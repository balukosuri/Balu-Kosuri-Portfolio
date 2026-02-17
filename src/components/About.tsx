"use client";

import { motion } from "framer-motion";

const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js / WebGL",
  "PostgreSQL",
  "AWS / Vercel",
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase block mb-4">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            Creative at heart,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-400">
              engineer
            </span>{" "}
            by craft.
          </h2>
          <div className="space-y-5 text-muted text-base md:text-lg leading-relaxed">
            <p>
              I&apos;m a developer who thrives at the intersection of design and
              technology. With a deep love for clean interfaces and performant
              code, I turn complex ideas into elegant, user-centered digital
              products.
            </p>
            <p>
              My work spans from interactive web experiences with scroll-driven
              animations to full-stack applications powering real businesses.
              Every project is an opportunity to push boundaries.
            </p>
          </div>
        </motion.div>

        {/* Right column — Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase block mb-4">
            Tech Stack
          </span>
          <h3 className="text-2xl font-bold tracking-tight mb-8">
            Tools I work with
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center gap-3 py-3 px-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-accent/20 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
                <span className="text-sm font-mono text-muted group-hover:text-foreground transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { number: "5+", label: "Years Exp." },
              { number: "30+", label: "Projects" },
              { number: "100%", label: "Passion" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-accent">{stat.number}</p>
                <p className="text-xs font-mono text-muted mt-1 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
