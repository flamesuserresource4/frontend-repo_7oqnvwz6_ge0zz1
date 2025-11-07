import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero3D = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div className="relative h-[56vh] sm:h-[66vh] md:h-[78vh] w-full">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* overlays (don't block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(80% 50% at 50% 15%, rgba(0,255,195,0.18) 0%, rgba(0,0,0,0) 60%)'
        }} />
      </div>

      {/* Copy overlay */}
      <div className="absolute inset-0 flex items-end md:items-center justify-center">
        <div className="text-center px-6 pb-10 md:pb-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,255,195,0.35)]">
            Hey Organisers
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-white/80 max-w-xl mx-auto">
            Futuristic, holographic vibes for your next event. Optimized for a wild, buttery-smooth phone experience.
          </p>
          <div className="mt-6 inline-flex items-center gap-3">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-300/90">Interactive 3D ticket scene</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
