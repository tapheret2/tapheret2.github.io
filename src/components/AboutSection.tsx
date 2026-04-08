'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="section-shell py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]"
      >
        <div className="rounded-2xl border border-slate-800 bg-slate-900/55 p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">About Me</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Future Data Engineer in Training</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            I&apos;m currently pursuing my studies while building practical data engineering and
            analytics projects. My core focus is designing clean data flows, from ingestion and
            transformation to reporting and predictive modeling.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            Through projects like an event analytics pipeline and machine learning forecasting, I
            combine engineering discipline with analytical thinking. I&apos;m eager to contribute,
            learn from experienced teams, and grow into a strong Data Engineer.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/55 p-7">
          <h3 className="text-lg font-semibold text-white">Quick Snapshot</h3>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Target Role: Data Engineering Intern / Junior Data Engineer</li>
            <li>• Strengths: Python, SQL, ETL, ML workflows, backend systems</li>
            <li>• Active Platforms: GitHub + Kaggle</li>
            <li>• Mindset: Results-oriented, curious, fast learner</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
