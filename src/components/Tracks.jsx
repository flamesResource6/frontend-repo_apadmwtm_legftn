import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const tracks = [
  {
    name: 'SOC Analyst',
    desc: 'Blue-team fundamentals, SIEM, log analysis, IR playbooks',
    color: 'from-emerald-400/20 to-green-500/20',
  },
  {
    name: 'Pentesting',
    desc: 'Recon, exploitation, privilege escalation, reporting',
    color: 'from-green-400/20 to-lime-500/20',
  },
  {
    name: 'Cloud Security',
    desc: 'AWS/Azure hardening, IAM, container security, threat modeling',
    color: 'from-teal-400/20 to-emerald-500/20',
  },
  {
    name: 'Threat Hunting',
    desc: 'Hypothesis-driven hunts, ATT&CK mapping, detections',
    color: 'from-lime-400/20 to-green-400/20',
  },
];

export default function Tracks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} id="tracks" className="relative py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">Choose your path</h2>
          <p className="mt-4 text-slate-300/80">Step-by-step learning journeys designed by security engineers.</p>
        </div>

        <motion.div style={{ x }} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <div className={`absolute -inset-8 bg-gradient-to-br ${t.color} blur-3xl`} />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                <p className="mt-2 text-slate-300/80">{t.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-green-400/30 bg-slate-900/50 px-3 py-1 text-green-300 text-xs">
                  12 modules • 40+ labs
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
