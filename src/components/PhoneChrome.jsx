import React from 'react';

const PhoneChrome = ({ children }) => {
  return (
    <div className="relative mx-auto w-[min(440px,92vw)]">
      <div className="relative rounded-[2.2rem] border border-white/10 bg-gradient-to-b from-zinc-900 to-black shadow-[0_0_60px_rgba(0,255,195,0.25)] overflow-hidden">
        {/* top bar/speaker */}
        <div className="absolute left-1/2 -translate-x-1/2 top-2 h-6 w-28 rounded-full bg-zinc-800/80" />
        <div className="relative">{children}</div>
      </div>
      {/* glow ring */}
      <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] ring-1 ring-emerald-400/30" />
    </div>
  );
};

export default PhoneChrome;
