"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-muted/60">
          &copy; {new Date().getFullYear()} Balu Kosuri. All rights reserved.
        </p>
        <p className="text-xs font-mono text-muted/40">
          Built with Next.js, Framer Motion &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
