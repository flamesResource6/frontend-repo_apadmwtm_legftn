import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Tracks from './components/Tracks';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-400/30 selection:text-white">
      {/* global background accents */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(16,185,129,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.6)_10%,rgba(2,6,23,0.9))]" />
      </div>

      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Tracks />
      <Showcase />
      <CTA />

      <footer className="relative border-t border-white/5 mt-20">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} SecLearns. All rights reserved.</p>
          <div className="text-xs text-slate-500">Built with love for defenders.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
