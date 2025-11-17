import { motion } from 'framer-motion';

const logos = ['splunk','aws','github','cloudflare','crowdstrike','okta','elastic'];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-10 border-y border-white/5 bg-slate-900/60">
      <motion.div
        className="flex gap-14 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
      >
        {[...logos, ...logos].map((l, i) => (
          <div key={i} className="text-slate-400/70 text-sm tracking-widest uppercase">
            {l}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
