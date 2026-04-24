"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Target, Sparkles } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const stats = [
  { value: "5+", label: "Projects Built", color: "#06b6d4" },
  { value: "3+", label: "Kaggle Competitions", color: "#8b5cf6" },
  { value: "ETL", label: "Pipeline Design", color: "#10b981" },
  { value: "ML", label: "Model Builder", color: "#f59e0b" },
];

const infoChips = [
  { icon: <MapPin size={13} />, text: "Ho Chi Minh City, Vietnam" },
  { icon: <GraduationCap size={13} />, text: "Data Science Student" },
  { icon: <Target size={13} />, text: "Seeking DE Internship" },
  { icon: <Sparkles size={13} />, text: "Kaggle Competitor" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="section-label"
        >
          <span className="text-[#06b6d4] text-xs font-medium tracking-widest uppercase">About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Text — 3 cols */}
          <div className="lg:col-span-3">
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 text-white leading-tight"
            >
              Passionate about{" "}
              <span className="text-gradient-static">turning data</span>{" "}
              into decisions
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-[#94a3b8] text-[15px] leading-relaxed mb-4"
            >
              I&apos;m a Data Science student at VNUHCM — University of Science, with a deep focus on
              <span className="text-white font-medium"> Data Engineering</span> and
              <span className="text-white font-medium"> Machine Learning</span>. I love building
              systems that move, transform, and unlock the value of data at scale.
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-[#94a3b8] text-[15px] leading-relaxed mb-8"
            >
              From designing modular ETL pipelines and predictive ML models to experimenting on
              Kaggle and exploring blockchain data storage — I approach every project with engineering
              rigour and a bias for clean, scalable solutions. I&apos;m actively seeking a
              <span className="text-[#06b6d4] font-medium"> Data Engineering Internship</span> where
              I can contribute to real data infrastructure while growing fast.
            </motion.p>

            {/* Info chips */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-wrap gap-2.5"
            >
              {infoChips.map(({ icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-[#94a3b8] text-xs hover:text-white hover:border-[#06b6d4]/20 transition-all duration-300"
                >
                  <span className="text-[#06b6d4]">{icon}</span>
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Bento grid — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Stats grid */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map(({ value, label, color }) => (
                <div
                  key={label}
                  className="rounded-2xl glass p-5 text-center group hover:-translate-y-0.5 transition-all duration-300"
                  style={{ borderColor: `${color}15` }}
                >
                  <div
                    className="text-3xl font-bold font-display mb-1"
                    style={{ color }}
                  >
                    {value}
                  </div>
                  <div className="text-[#475569] text-[11px] group-hover:text-[#94a3b8] transition-colors uppercase tracking-wider">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Focus card */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="rounded-2xl p-5 border border-[#06b6d4]/10 bg-gradient-to-br from-[#06b6d4]/[0.04] to-[#8b5cf6]/[0.04] relative overflow-hidden"
            >
              {/* Subtle corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#06b6d4]/[0.06] rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />

              <div className="flex items-start gap-4 relative">
                <div className="w-10 h-10 rounded-xl bg-[#06b6d4] flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/15">
                  <Target size={17} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">My Focus</h3>
                  <p className="text-[#64748b] text-[13px] leading-relaxed">
                    Building reliable, scalable data infrastructure — ETL pipelines,
                    data models, and ML systems that teams can trust and build upon.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
