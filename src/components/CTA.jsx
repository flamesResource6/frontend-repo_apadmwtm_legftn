import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(80%_40%_at_50%_0%,rgba(16,185,129,0.12),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">Ready to secure your future?</h2>
          <p className="mt-4 text-slate-300/80">Join thousands leveling up their careers with immersive cybersecurity learning.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-slate-900 font-semibold px-6 py-3 shadow-lg hover:shadow-green-500/30 transition-shadow">Start Free</a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/10 text-white px-6 py-3 hover:bg-white/5">Book a demo</a>
          </div>
          <p className="mt-4 text-xs text-green-300/80">7‑day free trial • Cancel anytime</p>
        </motion.div>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-24 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{ background: 'conic-gradient(from 0deg, rgba(52,211,153,0.0), rgba(52,211,153,0.2), rgba(59,130,246,0.1), rgba(52,211,153,0.0))', filter: 'blur(80px)' }}
        />
      </div>
    </section>
  );
}
