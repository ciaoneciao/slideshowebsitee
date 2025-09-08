"use client";

import { useEffect, useMemo, useState } from "react";

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

type Step = 1 | 2 | 3;

function CostsAnimator({ onFinished }: { onFinished: () => void }) {
  const items = useMemo(() => (
    [
      { label: "Hotel Warsaw", amount: 90 },
      { label: "Gdansk", amount: 130 },
      { label: "Warsaw", amount: 71 },
    ]
  ), []);

  const [index, setIndex] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [accumulated, setAccumulated] = useState<number[]>([]);
  const total = accumulated.reduce((s, n) => s + n, 0) + (items[index]?.amount ? currentValue : 0);
  const perPerson = total / 2;

  useEffect(() => {
    let cancelled = false;
    if (index >= items.length) {
      const t = setTimeout(() => !cancelled && onFinished(), 800);
      return () => { cancelled = true; clearTimeout(t); };
    }

    const target = items[index].amount;
    const durationMs = Math.min(2000, 40 * target);
    const steps = Math.max(20, Math.floor(durationMs / 30));
    const increment = target / steps;
    let stepCount = 0;
    setCurrentValue(0);

    const interval = setInterval(() => {
      stepCount += 1;
      const next = stepCount >= steps ? target : Math.round((stepCount * increment) * 100) / 100;
      setCurrentValue(next);
      if (stepCount >= steps) {
        clearInterval(interval);
        setAccumulated((prev) => [...prev, target]);
        setIndex((i) => i + 1);
      }
    }, 30);

    return () => { cancelled = true; clearInterval(interval); };
  }, [index, items, onFinished]);

  return (
    <div className="space-y-4 text-left max-w-md w-full mx-auto bg-black/35 backdrop-blur-sm px-5 py-4 rounded-lg">
      {items.map((it, i) => {
        const shown = i < index ? items[i].amount : (i === index ? currentValue : 0);
        const isPast = i < index;
        return (
          <div key={it.label} className={`flex items-baseline justify-between ${isPast ? 'opacity-80' : ''}`}>
            <span className="lofi-subtitle text-lg sm:text-xl">{it.label}</span>
            <span className="neon-text text-2xl sm:text-3xl font-semibold">{Math.round(shown)}</span>
          </div>
        );
      })}
      <div className="h-px w-full bg-white/20 my-2" />
      <div className="flex items-baseline justify-between">
        <span className="lofi-title text-xl">Total</span>
        <span className="neon-text text-3xl sm:text-4xl font-bold">{Math.round(total)}</span>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="lofi-subtitle">Diviso 2</span>
        <span className="neon-text text-2xl font-bold">{Math.round(perPerson)}</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [step, setStep] = useState<Step>(1);

  return (
    <main className="relative w-screen vh-100 overflow-hidden psy-hue">
      {/* Background video */}
      {step === 1 ? (
        <video
          className="fixed inset-0 w-full h-full object-cover video-zoom"
          src="/videos/oland1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : step === 2 ? (
        <video
          className="fixed inset-0 w-full h-full object-cover video-zoom"
          src="/videos/poland2.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <video
          className="fixed inset-0 w-full h-full object-cover video-zoom"
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide neon-text rgb-shift lofi-title floaty">
              POLAND TRIP LOADING <span className="loading-dots"/>
            </h1>
            <button
              onClick={() => setStep(2)}
              className="inline-block btn-neon px-6 py-3 rounded-md text-base sm:text-lg font-semibold"
              aria-label="Continue to next slide"
            >
              Continue
            </button>
          </div>
        ) : step === 2 ? (
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold neon-text rgb-shift lofi-subtitle floaty">
              <TypingText text="MY PREFERENCE IS: ..... Gdansk!!" />
            </h2>
            <button
              onClick={() => setStep(3)}
              className="inline-block btn-neon px-6 py-3 rounded-md text-base sm:text-lg font-semibold"
            >
              Continue
            </button>
          </div>
        ) : (
          <SlideThree onBack={() => setStep(2)} />
        )}
      </div>

      {/* Overlays: scanlines + vignette + blobs */}
      <div className="pointer-events-none fixed inset-0 scanlines" />
      <div className="pointer-events-none fixed inset-0 vignette" />

      <div className="pointer-events-none fixed inset-0">
        <div className="blob blob-a" style={{ top: '10%', left: '-10%' }} />
        <div className="blob blob-b" style={{ bottom: '5%', right: '-15%' }} />
        <div className="blob blob-c" style={{ top: '40%', left: '50%' }} />
      </div>
    </main>
  );
}

function SlideThree({ onBack }: { onBack: () => void }) {
  const [showForm, setShowForm] = useState(false);
  const [method, setMethod] = useState<"paypal" | "bonifico" | "revolut">("paypal");

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 px-4">
      {!showForm ? (
        <>
          <h3 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold neon-text lofi-title">Costs Recap</h3>
          <CostsAnimator onFinished={() => setShowForm(true)} />
          <div className="text-center">
            <button onClick={() => setShowForm(true)} className="btn-neon px-6 py-3 rounded-md font-semibold">Go to payment</button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold neon-text lofi-title">Metodo di pagamento</h3>
          {/* Visible form */}
          <form name="payment" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/success" className="space-y-5 bg-black/35 backdrop-blur-sm px-5 py-6 rounded-lg">
            <input type="hidden" name="form-name" value="payment" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="space-y-3">
              <label className="block text-sm opacity-90">Metodo</label>
              <div className="flex gap-4 flex-wrap">
                <label className="flex items-center gap-2"><input type="radio" name="method" value="paypal" checked={method === 'paypal'} onChange={() => setMethod('paypal')} /> PayPal</label>
                <label className="flex items-center gap-2"><input type="radio" name="method" value="bonifico" checked={method === 'bonifico'} onChange={() => setMethod('bonifico')} /> Bonifico</label>
                <label className="flex items-center gap-2"><input type="radio" name="method" value="revolut" checked={method === 'revolut'} onChange={() => setMethod('revolut')} /> Revolut</label>
              </div>
            </div>

            {method === 'paypal' && (
              <div className="space-y-2">
                <label className="block text-sm">Indirizzo PayPal</label>
                <input name="paypal_email" type="email" required className="w-full px-3 py-2 rounded bg-white/90 text-black" placeholder="name@example.com" />
              </div>
            )}

            {method === 'bonifico' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label className="block text-sm">Intestatario</label>
                  <input name="account_name" type="text" required className="w-full px-3 py-2 rounded bg-white/90 text-black" placeholder="Nome e Cognome" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm">IBAN</label>
                  <input name="iban" type="text" required className="w-full px-3 py-2 rounded bg-white/90 text-black" placeholder="IT00 A123 4567 8901 2345 6789 012" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="block text-sm">BIC / SWIFT (opzionale)</label>
                  <input name="bic" type="text" className="w-full px-3 py-2 rounded bg-white/90 text-black" placeholder="ABCDEFGH" />
                </div>
              </div>
            )}

            {method === 'revolut' && (
              <div className="space-y-2">
                <label className="block text-sm">Telefono Revolut</label>
                <input name="revolut_phone" type="tel" required className="w-full px-3 py-2 rounded bg-white/90 text-black" placeholder="+39 333 123 4567" />
              </div>
            )}

            <div className="flex items-center justify-between gap-4 pt-2">
              <button type="button" onClick={onBack} className="btn-neon px-4 py-2 rounded-md">Indietro</button>
              <button type="submit" className="btn-neon px-6 py-3 rounded-md font-semibold">Invia</button>
            </div>
          </form>

          {/* Hidden form to help Netlify pick up fields at build time */}
          <form name="payment" data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="hidden" name="form-name" value="payment" />
            <input name="method" />
            <input name="paypal_email" />
            <input name="account_name" />
            <input name="iban" />
            <input name="bic" />
            <input name="revolut_phone" />
          </form>
        </>
      )}
    </div>
  );
}
