"use client";

import { motion } from "framer-motion";

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 lg:px-20 border-t border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase block mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s create something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-400">
              extraordinary
            </span>{" "}
            together.
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto mb-10">
            Have a project in mind? I&apos;d love to hear about it. Drop me a line
            and let&apos;s bring your vision to life.
          </p>
          <a
            href="mailto:hello@balukosuri.dev"
            className="inline-flex items-center gap-3 text-lg font-mono px-8 py-4 rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-background transition-all duration-300 group"
          >
            hello@balukosuri.dev
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 flex items-center justify-center gap-8"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-muted hover:text-accent transition-colors duration-300"
            >
              {social.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
