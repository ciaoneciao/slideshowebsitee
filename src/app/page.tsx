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

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;

function submitNetlifyForm(form: HTMLFormElement, onDone: () => void) {
  try {
    const formData = new FormData(form);
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
      .then(() => onDone())
      .catch(() => onDone());
  } catch {
    onDone();
  }
}

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
    <div
      className="space-y-4 text-left max-w-md w-full mx-auto bg-black/35 backdrop-blur-sm px-5 py-4 rounded-lg"
      style={{ maxWidth: 520 }}
    >
      {items.map((it, i) => {
        const shown = i < index ? items[i].amount : (i === index ? currentValue : 0);
        const isPast = i < index;
        return (
          <div
            key={it.label}
            className={isPast ? '' : ''}
            style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', opacity: isPast ? 0.9 : 1 }}
          >
            <span className="lofi-subtitle text-lg sm:text-xl">{it.label}</span>
            <span className="neon-text text-2xl sm:text-3xl font-semibold">{Math.round(shown)}</span>
          </div>
        );
      })}
      <div className="h-px w-full bg-white/20 my-2" />
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <span className="lofi-title text-xl">Total</span>
        <span className="neon-text text-3xl sm:text-4xl font-bold">{Math.round(total)}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <span className="lofi-subtitle">To be split by 2</span>
        <span className="neon-text text-2xl font-bold">× 1/2</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [step, setStep] = useState<Step>(1);
  const containerStyle: React.CSSProperties = { position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' };
  const videoStyle: React.CSSProperties = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' };
  const overlayStyle: React.CSSProperties = { position: 'relative', zIndex: 10, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' };
  const neonStyle: React.CSSProperties = { textShadow: '0 0 6px rgba(255,255,255,0.6), 0 0 14px rgba(0,255,170,0.6), 0 0 28px rgba(0,150,255,0.5)' };

  return (
    <main className="relative w-screen vh-100 overflow-hidden psy-hue" style={containerStyle}>
      {/* Background video */}
      {step === 1 ? (
        <video
          className="fixed inset-0 w-full h-full object-cover video-zoom"
          style={videoStyle}
          src="/videos/oland1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : step === 2 ? (
        <video
          className="fixed inset-0 w-full h-full object-cover video-zoom"
          style={videoStyle}
          src="/videos/poland2.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : step === 3 || step === 4 ? (
        <video
          className="fixed inset-0 w-full h-full object-cover video-zoom"
          style={videoStyle}
          src="/videos/poland2.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : step === 5 || step === 6 ? (
        <video
          className="fixed inset-0 w-full h-full object-cover video-zoom"
          style={videoStyle}
          src="/videos/poland3.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <video
          className="fixed inset-0 w-full h-full object-cover video-zoom"
          style={videoStyle}
          src="/videos/oland1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-6" style={overlayStyle}>
        {step === 1 ? (
          <div className="space-y-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide neon-text rgb-shift lofi-title floaty" style={neonStyle}>
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold neon-text rgb-shift lofi-subtitle floaty" style={neonStyle}>
              <TypingText text="MY PREFERENCE IS: ..... Gdansk!!" />
            </h2>
            <button
              onClick={() => setStep(3)}
              className="inline-block btn-neon px-6 py-3 rounded-md text-base sm:text-lg font-semibold"
            >
              Continue
            </button>
          </div>
        ) : step === 3 ? (
          <SlideThree onBack={() => setStep(2)} onContinue={() => setStep(4)} />
        ) : step === 4 ? (
          <SlideFour onBack={() => setStep(3)} onContinue={() => setStep(5)} />
        ) : step === 5 ? (
          <SlideFive onBack={() => setStep(4)} onContinue={() => setStep(6)} />
        ) : step === 6 ? (
          <SlideSix onBack={() => setStep(5)} onFinish={() => setStep(7)} />
        ) : (
          <SlideSeven />
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

function SlideThree({ onBack, onContinue }: { onBack: () => void; onContinue: () => void }) {
  const [showForm, setShowForm] = useState(false);
  const [animDone, setAnimDone] = useState(false);
  const [method, setMethod] = useState<"paypal" | "bonifico" | "revolut">("paypal");

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 px-4" style={{ color: '#fff', textShadow: '0 0 8px rgba(255,255,255,0.7)' }}>
      {!showForm ? (
        <>
          <h3 className="text-center text-5xl sm:text-6xl md:text-7xl font-extrabold neon-text lofi-title">
            Costs Recap
          </h3>
          <CostsAnimator onFinished={() => setAnimDone(true)} />
          <div className="text-center mt-4">
            <button disabled={!animDone} onClick={() => setShowForm(true)} className="btn-neon px-8 py-3 rounded-md font-semibold" style={{ opacity: animDone ? 1 : 0.5 }}>
              Proceed to payment
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-center text-5xl sm:text-6xl md:text-7xl font-extrabold neon-text lofi-title">
            Payment method
          </h3>
          <p className="text-center lofi-subtitle" style={{ opacity: 0.95 }}>
            Where should I drop the cash? Send me one of these: your PayPal email,
            bank IBAN, or your Revolut number. I’ll wire it the slick way.
          </p>
          {/* Visible form */}
          <form
            name="payment"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              submitNetlifyForm(form, () => onContinue());
            }}
            className="space-y-5 bg-black/35 backdrop-blur-sm px-5 py-6 rounded-lg"
          >
            <input type="hidden" name="form-name" value="payment" />
            <p hidden aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
              <label>
                Leave this field blank: <input name="bot-field" />
              </label>
            </p>

            <div className="space-y-3">
              <label className="block text-sm opacity-90">Where do I send it?</label>
              <div className="flex gap-4 flex-wrap">
                <label className="flex items-center gap-2"><input type="radio" name="method" value="paypal" checked={method === 'paypal'} onChange={() => setMethod('paypal')} /> PayPal</label>
                <label className="flex items-center gap-2"><input type="radio" name="method" value="bonifico" checked={method === 'bonifico'} onChange={() => setMethod('bonifico')} /> Bank transfer</label>
                <label className="flex items-center gap-2"><input type="radio" name="method" value="revolut" checked={method === 'revolut'} onChange={() => setMethod('revolut')} /> Revolut</label>
              </div>
            </div>

            {method === 'paypal' && (
              <div className="space-y-2">
                <label className="block text-sm">PayPal Address</label>
                <input name="paypal_email" type="email" required className="w-full px-3 py-2 rounded bg-white/90 text-black" placeholder="name@example.com" />
              </div>
            )}

            {method === 'bonifico' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label className="block text-sm">Account Holder</label>
                  <input name="account_name" type="text" required className="w-full px-3 py-2 rounded bg-white/90 text-black" placeholder="Full name" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm">IBAN</label>
                  <input name="iban" type="text" required className="w-full px-3 py-2 rounded bg-white/90 text-black" placeholder="IT00 A123 4567 8901 2345 6789 012" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="block text-sm">BIC / SWIFT (optional)</label>
                  <input name="bic" type="text" className="w-full px-3 py-2 rounded bg-white/90 text-black" placeholder="ABCDEFGH" />
                </div>
              </div>
            )}

            {method === 'revolut' && (
              <div className="space-y-2">
                <label className="block text-sm">Revolut Phone</label>
                <input name="revolut_phone" type="tel" required className="w-full px-3 py-2 rounded bg-white/90 text-black" placeholder="+39 333 123 4567" />
              </div>
            )}

            <div className="flex items-center justify-between gap-4 pt-2">
              <button type="button" onClick={onBack} className="btn-neon px-4 py-2 rounded-md">Back</button>
              <button type="submit" className="btn-neon px-6 py-3 rounded-md font-semibold">Send</button>
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

function SlideFour({ onBack, onContinue }: { onBack: () => void; onContinue: () => void }) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 px-4">
      <h3 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold neon-text lofi-title" style={{ color: '#fff' }}>W33d money</h3>
      <p className="text-center text-xl sm:text-2xl lofi-subtitle" style={{ color: '#fff' }}>
        W33d money will be stealthy sent as 4th hotel payment gvng gvng.
      </p>
      <div className="flex items-center justify-center gap-4">
        <button onClick={onBack} className="btn-neon px-4 py-2 rounded-md">Back</button>
        <button onClick={onContinue} className="btn-neon px-6 py-3 rounded-md font-semibold">Next</button>
      </div>
    </div>
  );
}

function SlideFive({ onBack, onContinue }: { onBack: () => void; onContinue: () => void }) {
  const [choice, setChoice] = useState<'yes' | 'no'>('yes');
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 px-4">
      <h3 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold neon-text lofi-title" style={{ color: '#fff' }}>Spa session?</h3>
      <p className="text-center lofi-subtitle" style={{ color: '#fff' }}>Will it be possible to hit the spa (lowkey you got me craving it after you hyped it)?</p>

      <form
        name="spa"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget as HTMLFormElement;
          submitNetlifyForm(form, () => onContinue());
        }}
        className="space-y-4 bg-black/35 backdrop-blur-sm px-5 py-6 rounded-lg"
      >
        <input type="hidden" name="form-name" value="spa" />
        <p hidden aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
          <label>Leave this field blank: <input name="bot-field" /></label>
        </p>

        <div className="flex gap-6 items-center justify-center">
          <label className="flex items-center gap-2"><input type="radio" name="spa_ok" value="yes" checked={choice==='yes'} onChange={() => setChoice('yes')} /> Yes</label>
          <label className="flex items-center gap-2"><input type="radio" name="spa_ok" value="no" checked={choice==='no'} onChange={() => setChoice('no')} /> No</label>
        </div>

        <div className="space-y-2">
          <label className="block text-sm">Any additional notes?</label>
          <textarea name="notes" rows={4} className="w-full px-3 py-2 rounded bg-white/90 text-black" placeholder="Drop your notes here..." />
        </div>

        <div className="flex items-center justify-between gap-4 pt-2">
          <button type="button" onClick={onBack} className="btn-neon px-4 py-2 rounded-md">Back</button>
          <button type="submit" className="btn-neon px-6 py-3 rounded-md font-semibold">Next</button>
        </div>
      </form>

      <form name="spa" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="spa" />
        <input name="spa_ok" />
        <textarea name="notes" />
      </form>
    </div>
  );
}

function SlideSix({ onBack, onFinish }: { onBack: () => void; onFinish: () => void }) {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 px-4 text-center">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold neon-text lofi-title">One more spa day?</h3>
      <p className="lofi-subtitle text-xl">
        Could we slide for a day to those crazy dope thermal baths you showed me?
        I heard Poland got some fire ones.
      </p>
      <div className="flex items-center justify-center gap-4">
        <button onClick={onBack} className="btn-neon px-6 py-3 rounded-md font-semibold">Back</button>
        <button onClick={onFinish} className="btn-neon px-6 py-3 rounded-md font-semibold">Finish</button>
      </div>
    </div>
  );
}

function SlideSeven() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 px-4 text-center" style={{ color: '#fff' }}>
      <h3 className="text-5xl sm:text-6xl md:text-7xl font-extrabold neon-text lofi-title">THANKSSSS</h3>
      <p className="lofi-subtitle">You’re the best travel buddy. Poland here we go.</p>
    </div>
  );
}
