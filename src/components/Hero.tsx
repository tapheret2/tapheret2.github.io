"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { socialLinks, techTags, personalInfo } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#06b6d4]/[0.07] blur-[100px] animate-[float_20s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/[0.06] blur-[100px] animate-[float_25s_ease-in-out_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#06b6d4]/[0.03] blur-[120px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#06b6d4]/30 shadow-lg shadow-cyan-500/10 mx-auto">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              width={112}
              height={112}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Terminal line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#06b6d4]/15 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#10b981] pulse-green" />
          <code className="text-[#94a3b8] text-xs md:text-sm font-mono">
            <span className="text-[#06b6d4]">const</span>{" "}
            <span className="text-[#e2e8f0]">developer</span>{" "}
            <span className="text-[#94a3b8]">=</span>{" "}
            <span className="text-[#10b981]">&quot;Phạm Tiến Phát&quot;</span>
            <span className="text-[#06b6d4] cursor-blink">|</span>
          </code>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6"
        >
          <span className="text-white">I build</span>
          <br />
          <span className="text-gradient">data systems</span>
          <br />
          <span className="text-white">that scale.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#94a3b8] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Data Engineering student crafting{" "}
          <span className="text-white font-medium">ETL pipelines</span>,{" "}
          <span className="text-white font-medium">ML models</span>, and{" "}
          <span className="text-white font-medium">scalable data solutions</span>.
          <br className="hidden md:block" />
          Based in Ho Chi Minh City, Vietnam.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group px-6 py-3 rounded-xl bg-[#06b6d4] text-white font-medium text-sm shadow-lg shadow-cyan-500/20 hover:bg-[#0891b2] hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            View My Work
            <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl glass border border-white/10 text-[#e2e8f0] font-medium text-sm hover:border-[#06b6d4]/30 hover:bg-[#06b6d4]/5 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex items-center justify-center gap-3"
        >
          {[
            { href: socialLinks.github, icon: <GitHubIcon size={17} />, label: "GitHub" },
            { href: socialLinks.linkedin, icon: <LinkedInIcon size={17} />, label: "LinkedIn" },
            { href: socialLinks.kaggle, icon: <ExternalLink size={17} />, label: "Kaggle" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[#64748b] hover:text-[#06b6d4] hover:bg-[#06b6d4]/8 border border-transparent hover:border-[#06b6d4]/20 transition-all duration-300"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Tech marquee */}
      <div className="absolute bottom-20 left-0 right-0 overflow-hidden opacity-30">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techTags, ...techTags].map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="mx-4 text-xs text-[#475569] font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-[#475569] hover:text-[#06b6d4] transition-colors">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
