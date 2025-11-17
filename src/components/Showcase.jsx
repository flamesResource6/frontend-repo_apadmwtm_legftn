import { motion, useScroll, useSpring } from 'framer-motion';

const cards = Array.from({ length: 6 }).map((_, i) => ({
  title: `Hands-on Lab ${i + 1}`,
  desc: 'Simulate real attacks and apply mitigations in a safe range.',
}));

export default function Showcase() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="showcase" className="relative py-24">
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-emerald-400 to-green-600 z-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">Cinematic scrolling labs</h2>
          <p className="mt-4 text-slate-300/80">Each module choreographs content with motion so learning feels alive.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_40%_0%,rgba(16,185,129,0.18),transparent)]" />
              <div className="relative">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 mb-4 group-hover:scale-[1.02] transition-transform" />
                <h3 className="text-white font-semibold">{c.title}</h3>
                <p className="text-slate-300/80 text-sm mt-1">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
