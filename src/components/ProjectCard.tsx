"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import {
  ExternalLink, ChevronDown, Radio, Workflow, TrendingUp,
  Building, Link, Trophy,
} from "lucide-react";
import { GitHubIcon } from "./Icons";
import { Project } from "@/lib/data";

const projectIconMap: Record<string, React.ReactNode> = {
  radio: <Radio size={18} />,
  workflow: <Workflow size={18} />,
  "trending-up": <TrendingUp size={18} />,
  building: <Building size={18} />,
  link: <Link size={18} />,
  trophy: <Trophy size={18} />,
};

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

const categoryLabels: Record<Project["category"], string> = {
  pipeline: "Data Pipeline",
  ml: "Machine Learning",
  system: "System Design",
  blockchain: "Blockchain",
  kaggle: "Kaggle",
};

export default function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--spot-x", `${x}px`);
    cardRef.current.style.setProperty("--spot-y", `${y}px`);
  }, []);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl glass overflow-hidden hover:-translate-y-1 transition-all duration-400"
    >
      {/* Cursor spotlight */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(350px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${project.accentColor}08, transparent 50%)`,
        }}
      />

      {/* Top accent line */}
      <div
        className="h-[2px] w-full"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}60, ${project.accentColor}10, transparent)` }}
      />

      <div className="p-5 relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `${project.accentColor}10`,
                border: `1px solid ${project.accentColor}20`,
                color: project.accentColor,
              }}
            >
              {projectIconMap[project.icon] || project.icon}
            </div>
            <div>
              <span
                className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full"
                style={{
                  color: project.accentColor,
                  background: `${project.accentColor}10`,
                  border: `1px solid ${project.accentColor}20`,
                }}
              >
                {categoryLabels[project.category]}
              </span>
              <h3 className="text-white font-bold text-sm mt-1.5 leading-tight group-hover:text-gradient-static transition-all">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-1.5 flex-shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub: ${project.title}`}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#475569] hover:text-white hover:bg-white/8 border border-white/[0.06] hover:border-white/15 transition-all duration-200"
              >
                <GitHubIcon size={14} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live: ${project.title}`}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#475569] hover:text-white hover:bg-white/8 border border-white/[0.06] hover:border-white/15 transition-all duration-200"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-[#64748b] text-[13px] leading-relaxed mb-4 group-hover:text-[#94a3b8] transition-colors duration-300">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="flex flex-col gap-2 mb-4">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-[12px] text-[#4a5568]">
              <div
                className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
                style={{ background: project.accentColor }}
              />
              <span className="group-hover:text-[#64748b] transition-colors duration-300">{h}</span>
            </li>
          ))}
        </ul>

        {/* What I Learned - expandable */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-[11px] font-medium mb-4 transition-colors duration-200"
          style={{ color: `${project.accentColor}99` }}
        >
          <ChevronDown
            size={12}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
          What I Learned
        </button>

        {expanded && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="text-[#475569] text-[12px] leading-relaxed mb-4 pl-4 border-l-2"
            style={{ borderColor: `${project.accentColor}30` }}
          >
            {project.whatILearned}
          </motion.p>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded-md font-medium"
              style={{
                color: `${project.accentColor}bb`,
                background: `${project.accentColor}08`,
                border: `1px solid ${project.accentColor}18`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
