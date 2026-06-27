// Client-only ambience, wired from the page's onMount. A pointer-tracked spotlight (written to a
// CSS variable, so the paint stays on the GPU) and a scroll-reveal observer for `[data-reveal]`.
export function initAmbient(): () => void {
  if (typeof document === 'undefined') return () => {};
  const root = document.documentElement;
  let raf = 0;
  let tx = 0;
  let ty = 0;

  const onMove = (e: PointerEvent) => {
    tx = e.clientX;
    ty = e.clientY;
    if (!raf)
      raf = requestAnimationFrame(() => {
        raf = 0;
        root.style.setProperty('--mx', tx + 'px');
        root.style.setProperty('--my', ty + 'px');
      });
  };
  window.addEventListener('pointermove', onMove, { passive: true });

  const io = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

  return () => {
    window.removeEventListener('pointermove', onMove);
    if (raf) cancelAnimationFrame(raf);
    io.disconnect();
  };
}
