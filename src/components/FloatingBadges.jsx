import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

const FloatingBadges = () => {
  return (
    <div className="pointer-events-none fixed md:absolute bottom-6 md:bottom-auto md:top-6 left-1/2 -translate-x-1/2 flex gap-3 z-40">
      <div className="flex items-center gap-2 rounded-full bg-emerald-600/20 backdrop-blur px-3 py-1.5 text-emerald-200 text-xs font-semibold border border-emerald-300/30 shadow-lg">
        <Sparkles className="h-4 w-4" /> Neon Mode
      </div>
      <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-white/90 text-xs font-semibold border border-white/20 shadow-lg">
        <Rocket className="h-4 w-4" /> Made for phone
      </div>
    </div>
  );
};

export default FloatingBadges;
