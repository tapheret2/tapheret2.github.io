"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Journey" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-2xl shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 group-hover:scale-110 transition-all duration-300">
              <Terminal size={14} className="text-white" />
            </div>
            <span className="font-bold text-white font-display tracking-tight text-sm">
              phat<span className="text-gradient-static">.dev</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`relative px-3.5 py-2 text-[13px] rounded-lg transition-all duration-200 ${
                  active === href
                    ? "text-[#06b6d4]"
                    : "text-[#94a3b8] hover:text-white"
                }`}
              >
                {active === href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#06b6d4]/8 rounded-lg border border-[#06b6d4]/15"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-4 py-2 text-[13px] font-medium rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white hover:opacity-90 transition-all duration-200 shadow-lg shadow-cyan-500/15 hover:shadow-cyan-500/30"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#94a3b8] hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass-strong shadow-2xl shadow-black/50 md:hidden"
          >
            <div className="flex flex-col p-4 gap-0.5">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                    active === href
                      ? "bg-[#06b6d4]/8 text-[#06b6d4] border border-[#06b6d4]/15"
                      : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white text-center shadow-lg shadow-cyan-500/15"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
