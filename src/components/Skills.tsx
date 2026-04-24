"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories, techTags } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

function AnimatedBar({ level, delay }: { level: number; delay: number }) {
  return (
    <div className="flex gap-[3px] h-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + i * 0.05 }}
          className={`flex-1 rounded-full origin-left ${
            i < level
              ? "bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]"
              : "bg-white/[0.06]"
          }`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050a14]" />
      <div className="absolute inset-0 dots-bg opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="section-label"
        >
          <span className="text-[#06b6d4] text-xs font-medium tracking-widest uppercase">Skills</span>
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold font-display text-white mb-12"
        >
          Technical{" "}
          <span className="text-gradient-static">Expertise</span>
        </motion.h2>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              custom={ci + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="rounded-2xl glass p-6 group hover:border-[#06b6d4]/15 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-white font-semibold text-sm tracking-wide font-display">{cat.category}</h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{skill.icon}</span>
                        <span className="text-[#cbd5e1] text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-[#475569] text-[11px] uppercase tracking-wider">
                        {["", "Basic", "Familiar", "Proficient", "Advanced", "Expert"][skill.level]}
                      </span>
                    </div>
                    <AnimatedBar level={skill.level} delay={ci * 0.15 + si * 0.05} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated tech marquee */}
        <motion.div
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 relative overflow-hidden"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050a14] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050a14] to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap py-3">
            {[...techTags, ...techTags].map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="mx-3 px-3.5 py-1.5 text-xs rounded-full glass text-[#64748b] hover:text-[#06b6d4] hover:border-[#06b6d4]/20 transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
