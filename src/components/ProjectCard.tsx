'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch } from 'lucide-react';

export type Project = {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  learnings: string;
  featured?: boolean;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
      className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm transition-colors hover:border-sky-400/40"
    >
      {project.featured ? (
        <span className="mb-4 inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-200">
          Featured
        </span>
      ) : null}

      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
        <p className="text-xs uppercase tracking-widest text-sky-300">What I learned</p>
        <p className="mt-2 text-sm text-slate-300">{project.learnings}</p>
      </div>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 font-medium text-sky-300 transition group-hover:text-sky-200"
      >
        <GitBranch className="h-4 w-4" />
        View Repository
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </motion.article>
  );
}
