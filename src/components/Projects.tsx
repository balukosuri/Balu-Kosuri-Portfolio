"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A high-performance online store with real-time inventory, smooth animations, and a conversion-optimized checkout flow.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    link: "#",
    year: "2025",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with interactive data visualizations, real-time updates, and a clean component architecture.",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    link: "#",
    year: "2025",
  },
  {
    title: "Creative Agency Site",
    description:
      "An award-worthy agency website featuring scroll-linked animations, WebGL transitions, and micro-interactions.",
    tags: ["Next.js", "GSAP", "Three.js", "Framer Motion"],
    link: "#",
    year: "2024",
  },
  {
    title: "Mobile Fitness App",
    description:
      "Cross-platform fitness application with workout tracking, social features, and personalized AI-driven recommendations.",
    tags: ["React Native", "Firebase", "TensorFlow", "Expo"],
    link: "#",
    year: "2024",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function Projects() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-20">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase block mb-4">
          Selected Projects
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Featured
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-400">
            {" "}
            Work
          </span>
        </h2>
        <p className="mt-4 text-muted text-lg max-w-lg">
          A curated selection of projects where design thinking meets technical
          execution.
        </p>
      </motion.div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 lg:p-10 transition-all duration-500 hover:border-accent/30 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(201,243,29,0.04)] block"
          >
            {/* Card top row */}
            <div className="flex items-start justify-between mb-6">
              <span className="text-accent font-mono text-xs tracking-widest">
                {project.year}
              </span>
              <svg
                className="w-5 h-5 text-muted group-hover:text-accent transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3 group-hover:text-white transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted text-sm lg:text-base leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full border border-white/[0.08] text-muted bg-white/[0.02]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-accent/[0.03] via-transparent to-transparent" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
