"use client";

import { useEffect, useState } from "react";

function TypingText({ text, speed = 60, startDelay = 400 }: { text: string; speed?: number; startDelay?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let isCancelled = false;
    let index = 0;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        if (isCancelled) return;
        setDisplayed((prev) => prev + text.charAt(index));
        index += 1;
        if (index >= text.length) {
          clearInterval(interval);
        }
      }, speed);
    }, startDelay);

    return () => {
      isCancelled = true;
      clearTimeout(start);
    };
  }, [text, speed, startDelay]);

  return <span>{displayed}</span>;
}

export default function Home() {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      {/* Background video */}
      {step === 1 ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/oland1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/poland2.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-6">
        {step === 1 ? (
          <div className="space-y-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide">
              POLAND TRIP LOADING <span className="loading-dots" />
            </h1>
            <button
              onClick={() => setStep(2)}
              className="inline-block bg-white/90 text-black px-6 py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-white transition-colors"
              aria-label="Continue to next slide"
            >
              Continue
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              <TypingText text="MY PREFERENCE IS: ..... Gdansk!!" />
            </h2>
            <button
              onClick={() => setStep(1)}
              className="inline-block bg-black/60 text-white px-5 py-2 rounded-md text-sm sm:text-base hover:bg-black/80 transition-colors"
            >
              Replay
            </button>
          </div>
        )}
      </div>

      {/* Subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
    </main>
  );
}
