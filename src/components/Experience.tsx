"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Rocket, Calendar } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const timeline = [
  {
    year: "2022 – Present",
    title: "Bachelor of Computer Science",
    org: "University of Ho Chi Minh City",
    description:
      "Majoring in Computer Science with focus on Data Systems, Algorithms, and Database Design. Coursework covers distributed systems, statistical learning, and software engineering.",
    highlights: ["Database Systems", "Machine Learning", "Distributed Computing", "Software Engineering"],
    icon: <GraduationCap size={18} />,
    accent: "#06b6d4",
    isNow: false,
  },
  {
    year: "2024 – Present",
    title: "Independent Data Engineering Projects",
    org: "Self-directed / GitHub",
    description:
      "Building real-world data projects outside of university: ETL pipelines, ML forecasting models, blockchain contracts, and Kaggle competitions. Consistent GitHub activity with 5+ production-quality projects.",
    highlights: ["ETL Pipeline Design", "ML Model Deployment", "Smart Contract Development", "Kaggle Competitions"],
    icon: <BookOpen size={18} />,
    accent: "#8b5cf6",
    isNow: false,
  },
  {
    year: "Now",
    title: "Seeking Data Engineering Internship",
    org: "Open to Opportunities",
    description:
      "Actively looking for a Data Engineering or Data Science internship where I can contribute to real pipeline infrastructure, learn from senior engineers, and accelerate my growth in the field.",
    highlights: ["Available immediately", "Ho Chi Minh City & Remote", "Full-time intern schedule"],
    icon: <Rocket size={18} />,
    accent: "#10b981",
    isNow: true,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050a14]" />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="section-label"
        >
          <span className="text-[#06b6d4] text-xs font-medium tracking-widest uppercase">Experience & Education</span>
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold font-display text-white mb-12"
        >
          My <span className="text-gradient-static">Journey</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="absolute left-5 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-[#06b6d4]/40 via-[#8b5cf6]/25 to-[#10b981]/30 hidden md:block"
          />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center hidden md:flex"
                  style={{
                    background: `${item.accent}12`,
                    border: `2px solid ${item.accent}40`,
                    color: item.accent,
                    boxShadow: item.isNow ? `0 0 20px ${item.accent}30` : "none",
                  }}
                >
                  {item.icon}
                  {item.isNow && (
                    <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#10b981] pulse-green" />
                  )}
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl glass p-6 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
                  style={{
                    borderLeft: `2px solid ${item.accent}30`,
                  }}
                >
                  {/* Subtle corner gradient */}
                  <div
                    className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] pointer-events-none"
                    style={{ background: `${item.accent}06` }}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3 relative">
                    <div>
                      <h3 className="text-white font-semibold text-base leading-tight font-display">{item.title}</h3>
                      <p style={{ color: item.accent }} className="text-sm font-medium mt-0.5">
                        {item.org}
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 text-[11px] text-[#475569] whitespace-nowrap px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <Calendar size={10} />
                      {item.year}
                    </span>
                  </div>

                  <p className="text-[#64748b] text-[13px] leading-relaxed mb-4 relative">{item.description}</p>

                  <div className="flex flex-wrap gap-2 relative">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[11px] px-2.5 py-0.5 rounded-lg"
                        style={{
                          color: `${item.accent}bb`,
                          border: `1px solid ${item.accent}20`,
                          background: `${item.accent}08`,
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
