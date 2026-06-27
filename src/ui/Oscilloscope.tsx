import { createSignal, createMemo } from '@fluixi/reactive/signal';
import { onMount, onCleanup } from '@fluixi/core';

// The hero instrument. A real fine-grained graph:
//   signals  freq, amp, phase   →   memo  wave (the SVG path)   →   the DOM updates.
// Dragging a control writes a signal; the memo recomputes; the bound attribute updates.
// The animation loop just nudges the `phase` signal each frame — same propagation, 60fps.
const W = 560;
const H = 280;
const MID = H / 2;
const N = 180;

function buildPath(freq: number, amp: number, phase: number): string {
  const a = amp * (MID - 18);
  let d = '';
  for (let i = 0; i <= N; i++) {
    const x = (i / N) * W;
    const k = (i / N) * Math.PI * 2 * freq;
    // fundamental + a quieter harmonic, so the trace feels alive rather than a pure sine
    const y = MID - Math.sin(k + phase) * a - Math.sin(k * 2.7 + phase * 1.35) * amp * 11;
    d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
  }
  return d.trim();
}

export default function Oscilloscope() {
  const [freq, setFreq] = createSignal(2.4);
  const [amp, setAmp] = createSignal(0.66);
  const [phase, setPhase] = createSignal(0);
  const [running, setRunning] = createSignal(true);

  const wave = createMemo(() => buildPath(freq(), amp(), phase()));
  const energy = createMemo(() => Math.round(freq() * amp() * 100) / 100);

  onMount(() => {
    if (typeof requestAnimationFrame === 'undefined') return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (running()) setPhase((p) => (p + dt * (1.1 + freq() * 0.35)) % (Math.PI * 200));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    onCleanup(() => cancelAnimationFrame(raf));
  });

  return (
    <div class="scope" aria-hidden="true">
      <div class="scope-head">
        <span class="scope-led" />
        <span class="scope-title">signal.scope</span>
        <button class="scope-run" onClick={() => setRunning((r) => !r)}>
          {() => (running() ? '❚❚ pause' : '▶ run')}
        </button>
      </div>

      <svg class="scope-screen" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" role="img">
        <defs>
          <linearGradient id="trace" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#5eead4" />
            <stop offset="0.5" stop-color="#7df9c0" />
            <stop offset="1" stop-color="#b39dff" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((g) => (
          <line class="scope-grid" x1="0" x2={W} y1={H * g} y2={H * g} />
        ))}
        {[0.2, 0.4, 0.6, 0.8].map((g) => (
          <line class="scope-grid" x1={W * g} x2={W * g} y1="0" y2={H} />
        ))}
        <line class="scope-axis" x1="0" x2={W} y1={MID} y2={MID} />
        <path class="scope-glow" d={() => wave()} vector-effect="non-scaling-stroke" />
        <path class="scope-trace" d={() => wave()} vector-effect="non-scaling-stroke" />
      </svg>

      <div class="scope-readout">
        <span class="rd"><i class="rd-k s">signal</i> freq <b>{() => freq().toFixed(2)}</b> Hz</span>
        <span class="rd"><i class="rd-k s">signal</i> amp <b>{() => amp().toFixed(2)}</b></span>
        <span class="rd"><i class="rd-k m">memo</i> energy <b>{() => energy().toFixed(2)}</b></span>
        <span class="rd"><i class="rd-k e">effect</i> draw <b>live</b></span>
      </div>

      <div class="scope-controls">
        <label class="ctl">
          <span>frequency</span>
          <input
            type="range"
            min="0.4"
            max="6"
            step="0.05"
            value={() => String(freq())}
            onInput={(e: any) => setFreq(+e.target.value)}
          />
        </label>
        <label class="ctl">
          <span>amplitude</span>
          <input
            type="range"
            min="0.05"
            max="1"
            step="0.01"
            value={() => String(amp())}
            onInput={(e: any) => setAmp(+e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
