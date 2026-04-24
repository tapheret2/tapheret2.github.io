"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Send, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { socialLinks } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const contactLinks = [
  {
    label: "Email",
    value: "phamtienphat2006@gmail.com",
    href: "mailto:phamtienphat2006@gmail.com",
    icon: <Send size={17} />,
    accent: "#06b6d4",
    description: "Best way to reach me",
  },
  {
    label: "LinkedIn",
    value: "/in/phamtienphat",
    href: socialLinks.linkedin,
    icon: <LinkedInIcon size={17} />,
    accent: "#0ea5e9",
    description: "Connect professionally",
  },
  {
    label: "GitHub",
    value: "github.com/tapheret2",
    href: socialLinks.github,
    icon: <GitHubIcon size={17} />,
    accent: "#8b5cf6",
    description: "View my code",
  },
  {
    label: "Kaggle",
    value: "kaggle.com/taphere",
    href: socialLinks.kaggle,
    icon: <ExternalLink size={17} />,
    accent: "#fb923c",
    description: "ML competitions & notebooks",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050a14]" />
      <div className="absolute inset-0 dots-bg opacity-30" />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="section-label"
        >
          <span className="text-[#06b6d4] text-xs font-medium tracking-widest uppercase">Contact</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-6 leading-tight"
            >
              Let&apos;s build{" "}
              <span className="text-gradient-static">something</span>{" "}
              together
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-[#94a3b8] text-[15px] leading-relaxed mb-6"
            >
              I&apos;m actively seeking a{" "}
              <span className="text-white font-semibold">Data Engineering Internship</span> and
              open to any data-driven role where I can contribute and grow. Whether it&apos;s about
              a job opportunity, a collaboration, or just to connect — I&apos;d love to hear from you.
            </motion.p>

            {/* Availability badge */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl glass border-[#10b981]/15"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10b981]" />
              </span>
              <div>
                <div className="text-white text-sm font-semibold">Available for Internship</div>
                <div className="text-[#64748b] text-[11px] flex items-center gap-1">
                  <MapPin size={9} /> Ho Chi Minh City, Vietnam · Remote OK
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: contact cards */}
          <div className="grid sm:grid-cols-2 gap-3">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group rounded-2xl glass p-5 hover:-translate-y-1 transition-all duration-300 block relative overflow-hidden"
              >
                {/* Hover color fill */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${link.accent}06, ${link.accent}03)` }}
                />

                <div className="relative z-10">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `${link.accent}10`,
                      border: `1px solid ${link.accent}20`,
                      color: link.accent,
                    }}
                  >
                    {link.icon}
                  </div>
                  <div className="text-white font-semibold text-sm mb-0.5">{link.label}</div>
                  <div className="text-[#475569] text-[11px] mb-1 group-hover:text-[#64748b] transition-colors truncate">
                    {link.value}
                  </div>
                  <div className="text-[#334155] text-[11px]">{link.description}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
