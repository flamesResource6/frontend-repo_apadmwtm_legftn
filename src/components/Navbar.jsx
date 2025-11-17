import { Menu, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#tracks", label: "Tracks" },
    { href: "#showcase", label: "Showcase" },
    { href: "#testimonials", label: "Stories" },
  ];

  return (
    <div className="sticky top-0 z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4"
      >
        <div className="backdrop-blur-xl bg-slate-900/60 border border-green-500/10 rounded-2xl shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)]">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#" className="flex items-center gap-2">
              <span className="relative grid place-items-center">
                <span className="absolute inset-0 rounded-xl bg-green-400/20 blur-md" />
                <ShieldCheck className="w-8 h-8 text-green-400" />
              </span>
              <div>
                <p className="font-bold text-white text-lg tracking-tight">SecLearns</p>
                <p className="text-xs text-green-300/70 -mt-1 flex items-center gap-1"><Sparkles className="w-3 h-3"/>Cybersecurity Academy</p>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="#cta" className="text-sm text-slate-300 hover:text-white">Sign in</a>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 text-slate-900 font-semibold shadow-lg hover:shadow-green-500/30 transition-shadow"
              >
                Get Started
              </a>
            </div>

            <button className="md:hidden p-2 rounded-lg border border-white/10 text-white" onClick={() => setOpen((v) => !v)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {open && (
            <div className="md:hidden px-5 pb-4 space-y-2 border-t border-white/5">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="block text-slate-300 hover:text-white">
                  {l.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 text-slate-900 font-semibold shadow-lg mt-2">
                Get Started
              </a>
            </div>
          )}
        </div>
      </motion.nav>
    </div>
  );
}
