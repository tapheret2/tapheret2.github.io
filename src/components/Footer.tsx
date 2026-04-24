"use client";

import { Terminal, Heart, ArrowUp } from "lucide-react";
import { GitHubIcon, LinkedInIcon, KaggleIcon } from "./Icons";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.04] bg-[#030712]">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06b6d4]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center">
              <Terminal size={12} className="text-white" />
            </div>
            <span className="font-bold text-white font-display text-sm">
              phat<span className="text-gradient-static">.dev</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-[#334155] text-xs flex items-center gap-1.5">
            Built with{" "}
            <Heart size={10} className="text-[#8b5cf6]" fill="currentColor" />{" "}
            by Phạm Tiến Phát · {year}
          </p>

          {/* Right: socials + back to top */}
          <div className="flex items-center gap-2">
            {[
              { href: socialLinks.github, icon: <GitHubIcon size={14} />, label: "GitHub" },
              { href: socialLinks.linkedin, icon: <LinkedInIcon size={14} />, label: "LinkedIn" },
              { href: socialLinks.kaggle, icon: <KaggleIcon size={14} />, label: "Kaggle" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#334155] hover:text-[#94a3b8] hover:bg-white/[0.04] transition-all duration-200"
              >
                {icon}
              </a>
            ))}

            <div className="w-px h-4 bg-white/[0.06] mx-1" />

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#334155] hover:text-[#06b6d4] hover:bg-[#06b6d4]/[0.06] border border-transparent hover:border-[#06b6d4]/15 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
