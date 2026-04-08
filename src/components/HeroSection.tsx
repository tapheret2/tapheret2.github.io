'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Database, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="section-shell pt-16 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-8 shadow-glow backdrop-blur md:p-12"
      >
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1 text-sm font-medium text-sky-200">
          <Database className="h-4 w-4" />
          Open to Data Engineering Internships
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          Building reliable data pipelines and analytics systems that turn raw data into
          meaningful decisions.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          I&apos;m <span className="font-semibold text-white">Phạm Tiến Phát (Phat Pham)</span>, a
          student in Ho Chi Minh City passionate about ETL workflows, scalable backend systems,
          and data-driven problem solving.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            View Featured Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/phamtienphat/"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-100 transition hover:border-slate-500"
            rel="noreferrer"
          >
            <MapPin className="h-4 w-4" />
            Ho Chi Minh City, Vietnam
          </a>
        </div>
      </motion.div>
    </section>
  );
}
