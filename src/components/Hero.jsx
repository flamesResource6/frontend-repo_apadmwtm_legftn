import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-slate-900/50 px-3 py-1 text-green-300 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" /> Live now: Intro to Threat Modeling
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
            Learn Cybersecurity with mind‑blowing interactivity
          </h1>
          <p className="mt-6 text-lg text-slate-300/90">
            Hands-on labs, real attack simulations, and guided paths from beginner to pro. Secure your future with SecLearns.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-slate-900 font-semibold px-6 py-3 shadow-lg hover:shadow-green-500/30 transition-shadow">Start Free</a>
            <a href="#showcase" className="inline-flex items-center justify-center rounded-xl border border-white/10 text-white px-6 py-3 hover:bg-white/5">See Showcase</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full bg-green-500/10 blur-3xl" />
    </section>
  );
}
