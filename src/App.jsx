import React from 'react';
import Hero3D from './components/Hero3D';
import PhoneChrome from './components/PhoneChrome';
import EventFormMobile from './components/EventFormMobile';
import FloatingBadges from './components/FloatingBadges';

function App() {
  const handleFormSubmit = (data) => {
    // This demo handler just logs; in a real flow, you'd POST to your API
    console.log('Form submitted:', data);
    alert('This is a visual prototype. Hook up your backend to submit.');
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero3D />

      <FloatingBadges />

      {/* phone preview zone */}
      <section className="relative py-10 md:py-16 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Build events that feel from the future
              </h2>
              <p className="mt-3 text-white/70 max-w-prose">
                A clean, crazy-cool phone experience with neon accents, elastic motion, and a fixed action button. Fully responsive and designed around your holographic ticket.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-emerald-300/80">
                <li>• Mobile-first layout with sticky CTA</li>
                <li>• Accessible inputs with clear visual focus</li>
                <li>• Smooth gradients and tasteful glow</li>
              </ul>
            </div>

            <PhoneChrome>
              <EventFormMobile onSubmit={handleFormSubmit} />
            </PhoneChrome>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-white/50">
        Crafted with neon love. Bring your own API endpoint to wire it up.
      </footer>
    </div>
  );
}

export default App;
