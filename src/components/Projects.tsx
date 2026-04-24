"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { GitHubIcon } from "./Icons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const categories = [
  { key: "all", label: "All" },
  { key: "pipeline", label: "Pipeline" },
  { key: "ml", label: "ML" },
  { key: "system", label: "System" },
  { key: "blockchain", label: "Blockchain" },
  { key: "kaggle", label: "Kaggle" },
] as const;

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/15 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="section-label"
        >
          <span className="text-[#06b6d4] text-xs font-medium tracking-widest uppercase">Projects</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-3xl md:text-4xl font-bold font-display text-white"
          >
            Featured{" "}
            <span className="text-gradient-static">Work</span>
          </motion.h2>
          <motion.a
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            href="https://github.com/tapheret2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#64748b] hover:text-[#06b6d4] transition-colors"
          >
            <GitHubIcon size={15} />
            View all on GitHub →
          </motion.a>
        </div>

        {/* Filter tabs */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-3.5 py-1.5 text-xs rounded-lg border transition-all duration-200 ${
                filter === key
                  ? "bg-[#06b6d4]/10 border-[#06b6d4]/25 text-[#06b6d4]"
                  : "border-white/[0.06] text-[#64748b] hover:text-white hover:border-white/15"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
