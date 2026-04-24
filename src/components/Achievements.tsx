"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { Trophy, ExternalLink } from "lucide-react";
import { GitHubIcon } from "./Icons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const achievements = [
  {
    platform: "Kaggle",
    icon: "🏅",
    accent: "#fb923c",
    title: "Active Kaggle Competitor",
    description:
      "Competing in real-world ML competitions including irrigation prediction and classification challenges. Currently building a stacked ensemble model targeting top-tier scores.",
    stats: [
      { label: "Competitions", value: "3+" },
      { label: "Notebooks", value: "10+" },
    ],
    link: "https://www.kaggle.com/taphere",
    linkLabel: "Kaggle Profile",
  },
  {
    platform: "GitHub",
    icon: "⭐",
    accent: "#06b6d4",
    title: "Consistent Open Source Builder",
    description:
      "5+ production-quality repositories spanning data pipelines, ML models, system design, and blockchain contracts. Continuous commits demonstrating real engineering discipline.",
    stats: [
      { label: "Repositories", value: "5+" },
      { label: "Focus", value: "Data Eng" },
    ],
    link: "https://github.com/tapheret2",
    linkLabel: "GitHub Profile",
  },
  {
    platform: "Projects",
    icon: "🔬",
    accent: "#8b5cf6",
    title: "Self-Directed Learning",
    description:
      "From ETL pipelines to smart contracts — I build projects that go beyond tutorials. Each one solves a real problem and demonstrates production-oriented thinking.",
    stats: [
      { label: "Tech Domains", value: "4+" },
      { label: "Lines of Code", value: "10K+" },
    ],
    link: "#projects",
    linkLabel: "View Projects",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/15 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="section-label"
        >
          <span className="text-[#06b6d4] text-xs font-medium tracking-widest uppercase">Achievements</span>
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold font-display text-white mb-12"
        >
          What I&apos;ve{" "}
          <span className="text-gradient-static">Accomplished</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5">
          {achievements.map((ach, i) => (
            <ShineCard key={ach.platform} ach={ach} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShineCard({
  ach,
  index,
  inView,
}: {
  ach: (typeof achievements)[number];
  index: number;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--shine-x", `${x}%`);
    cardRef.current.style.setProperty("--shine-y", `${y}%`);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      custom={index + 2}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl glass p-6 flex flex-col hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Shine effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(250px circle at var(--shine-x, 50%) var(--shine-y, 50%), ${ach.accent}10, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        {/* Icon + platform */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
            style={{
              background: `${ach.accent}10`,
              border: `1px solid ${ach.accent}20`,
            }}
          >
            {ach.icon}
          </div>
          <Trophy size={14} style={{ color: ach.accent + "50" }} />
        </div>

        <h3 className="text-white font-semibold text-sm mb-2 leading-tight font-display">{ach.title}</h3>
        <p className="text-[#64748b] text-[13px] leading-relaxed flex-1 mb-5 group-hover:text-[#94a3b8] transition-colors">
          {ach.description}
        </p>

        {/* Stats */}
        <div className="flex gap-5 mb-5">
          {ach.stats.map((s) => (
            <div key={s.label}>
              <div className="text-xl font-bold font-display" style={{ color: ach.accent }}>
                {s.value}
              </div>
              <div className="text-[10px] text-[#475569] uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Link */}
        <a
          href={ach.link}
          target={ach.link.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[11px] font-medium transition-colors"
          style={{ color: ach.accent + "90" }}
        >
          {ach.link.startsWith("http") ? (
            <ExternalLink size={11} />
          ) : (
            <GitHubIcon size={11} />
          )}
          <span className="hover:underline">{ach.linkLabel} →</span>
        </a>
      </div>
    </motion.div>
  );
}
