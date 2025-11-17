import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Lock, Keyboard, Bug, Globe, Cpu } from 'lucide-react';
import { useRef } from 'react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Defense-First Curriculum',
    desc: 'Master blue-team tactics — from SIEM, SOAR to incident response — through real-world scenarios.',
    color: 'from-green-500/30 to-emerald-400/30',
  },
  {
    icon: Lock,
    title: 'Red vs Blue Labs',
    desc: 'Attack and defend in sandboxed ranges. Learn how exploits work — and how to stop them.',
    color: 'from-cyan-400/30 to-green-400/30',
  },
  {
    icon: Keyboard,
    title: 'Guided Paths',
    desc: 'Role-based tracks for SOC Analyst, Pentester, Cloud Security, and more.',
    color: 'from-emerald-400/30 to-lime-400/30',
  },
  {
    icon: Bug,
    title: 'Live Threat Feeds',
    desc: 'Train with the latest CVEs and TTPs. New labs weekly aligned to MITRE ATT&CK.',
    color: 'from-lime-400/30 to-green-500/30',
  },
  {
    icon: Globe,
    title: 'Cert Prep',
    desc: 'Prep for Security+, CEH, CySA+, and more with exam-mode question banks.',
    color: 'from-teal-400/30 to-emerald-400/30',
  },
  {
    icon: Cpu,
    title: 'AI Mentor',
    desc: 'On‑page hints, code reviews, and remediation coaching with our AI co‑pilot.',
    color: 'from-green-400/30 to-emerald-500/30',
  },
];

export default function Features() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} id="features" className="relative py-24">
      <motion.div style={{ y }} className="absolute inset-0 bg-[radial-gradient(80%_40%_at_50%_0%,rgba(16,185,129,0.15),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">Built for defenders, by defenders</h2>
          <p className="mt-4 text-slate-300/80">Everything you need to learn, practice, and certify — wrapped in immersive motion.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900/80 transition-colors"
            >
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${color} blur-2xl`} />
              <div className="relative">
                <div className="inline-flex items-center justify-center rounded-xl bg-green-400/10 border border-green-400/20 p-3">
                  <Icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-300/80">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
