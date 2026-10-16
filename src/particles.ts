// The hero name as three.js particles, the same renderer and parameters as the approved design.
// Client only: started from Hero's onMount, three.js is loaded on demand, and the returned
// function tears everything down.
export function startParticles(stage: HTMLElement, canvas: HTMLCanvasElement): () => void {
  let disposed = false;
  let teardown = () => {};

  import('three').then((THREE) => {
    if (disposed) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: InstanceType<typeof THREE.WebGLRenderer>;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch {
      return; // no WebGL: the heading stays as text
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 1, 5000);
    let points: InstanceType<typeof THREE.Points> | undefined;
    let geo: InstanceType<typeof THREE.BufferGeometry> | undefined;
    let home = new Float32Array(0);
    let vel = new Float32Array(0);
    let count = 0;
    let built = false;

    // Round, soft sprite for each particle.
    const dot = document.createElement('canvas');
    dot.width = dot.height = 64;
    const g = dot.getContext('2d')!;
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.45, 'rgba(255,255,255,.9)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    const sprite = new THREE.CanvasTexture(dot);

    const css = (n: string) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
    const heading = stage.querySelector('h1')!;

    function build() {
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.position.z = h / 2 / Math.tan((camera.fov * Math.PI) / 180 / 2);
      camera.updateProjectionMatrix();

      // Draw the name at the heading's size, then sample its pixels.
      const cs = getComputedStyle(heading);
      const off = document.createElement('canvas');
      off.width = w;
      off.height = h;
      const c = off.getContext('2d', { willReadFrequently: true })!;
      const size = parseFloat(cs.fontSize);
      const twoLines = w < 720;
      c.font = `${cs.fontWeight} ${size}px ${cs.fontFamily}`;
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillStyle = '#fff';
      if ('letterSpacing' in c) (c as any).letterSpacing = size * -0.04 + 'px';
      if (twoLines) {
        c.fillText('Ibrahima', w / 2, h / 2 - size * 0.48);
        c.fillText('Touré', w / 2, h / 2 + size * 0.48);
      } else c.fillText('Ibrahima Touré', w / 2, h / 2);
      const data = c.getImageData(0, 0, w, h).data;
      const step = Math.max(3, Math.round(Math.sqrt((w * h) / 52000)));
      const pts: number[] = [];
      for (let y = 0; y < h; y += step)
        for (let x = 0; x < w; x += step)
          if (data[(y * w + x) * 4 + 3] > 128)
            pts.push(
              x - w / 2 + (Math.random() - 0.5) * step * 0.6,
              h / 2 - y + (Math.random() - 0.5) * step * 0.6,
              (Math.random() - 0.5) * 30,
            );

      count = pts.length / 3;
      home = new Float32Array(pts);
      vel = new Float32Array(pts.length);
      const pos = new Float32Array(pts.length);
      const col = new Float32Array(pts.length);
      const ink = new THREE.Color(css('--ink'));
      const accent = new THREE.Color(css('--accent'));
      for (let i = 0; i < count; i++) {
        // Start scattered in depth, then assemble.
        const r = Math.max(w, h) * (0.6 + Math.random());
        const a = Math.random() * Math.PI * 2;
        const b = (Math.random() - 0.5) * Math.PI;
        pos[i * 3] = reduce ? home[i * 3] : Math.cos(a) * Math.cos(b) * r;
        pos[i * 3 + 1] = reduce ? home[i * 3 + 1] : Math.sin(b) * r * 0.6;
        pos[i * 3 + 2] = reduce ? home[i * 3 + 2] : Math.sin(a) * Math.cos(b) * r;
        const cc = Math.random() < 0.07 ? accent : ink;
        col[i * 3] = cc.r;
        col[i * 3 + 1] = cc.g;
        col[i * 3 + 2] = cc.b;
      }
      if (points) {
        scene.remove(points);
        geo!.dispose();
        (points.material as InstanceType<typeof THREE.Material>).dispose();
      }
      geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
      const mat = new THREE.PointsMaterial({
        size: step * 1.15,
        map: sprite,
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        sizeAttenuation: true,
        opacity: 0.95,
      });
      points = new THREE.Points(geo, mat);
      scene.add(points);
      stage.classList.add('live');
      built = true;
    }

    // Pointer in scene units (the camera makes 1 unit = 1 css px on the z=0 plane).
    let mx = 1e6;
    let my = 1e6;
    let inside = false;
    const onMove = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      mx = e.clientX - r.left - r.width / 2;
      my = r.height / 2 - (e.clientY - r.top);
      inside = true;
    };
    const onLeave = () => {
      inside = false;
      mx = my = 1e6;
    };
    stage.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerleave', onLeave);

    const t0 = performance.now();
    let tiltX = 0;
    let tiltY = 0;
    let raf = 0;
    let visible = true;

    function frame(now: number) {
      raf = 0;
      if (!built || !visible) return;
      const t = (now - t0) / 1000;
      const p = geo!.attributes.position.array as Float32Array;
      const w = stage.clientWidth;
      const R = Math.min(w, 900) * 0.11;
      const R2 = R * R;
      for (let i = 0; i < count; i++) {
        const ix = i * 3;
        const x = p[ix], y = p[ix + 1], z = p[ix + 2];
        const hx = home[ix], hy = home[ix + 1];
        const hz = home[ix + 2] + (reduce ? 0 : Math.sin(t * 1.3 + hx * 0.012) * 6);
        let vx = vel[ix] + (hx - x) * 0.045;
        let vy = vel[ix + 1] + (hy - y) * 0.045;
        let vz = vel[ix + 2] + (hz - z) * 0.045;
        if (inside && !reduce) {
          const dx = x - mx, dy = y - my, d2 = dx * dx + dy * dy;
          if (d2 < R2) {
            const f = (1 - d2 / R2) * 9, d = Math.sqrt(d2) || 1;
            vx += (dx / d) * f;
            vy += (dy / d) * f;
            vz += f * 2.2;
          }
        }
        vx *= 0.82; vy *= 0.82; vz *= 0.82;
        p[ix] = x + vx; p[ix + 1] = y + vy; p[ix + 2] = z + vz;
        vel[ix] = vx; vel[ix + 1] = vy; vel[ix + 2] = vz;
      }
      geo!.attributes.position.needsUpdate = true;
      if (!reduce) {
        tiltX += ((inside ? my / w : 0) * 0.25 - tiltX) * 0.05;
        tiltY += ((inside ? mx / w : 0) * 0.35 - tiltY) * 0.05;
        points!.rotation.x = -tiltX;
        points!.rotation.y = tiltY;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    }
    const kick = () => {
      if (!raf && visible) raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      kick();
    });
    io.observe(stage);

    let resizeTimer = 0;
    let lastW = 0;
    const ro = new ResizeObserver(() => {
      if (stage.clientWidth === lastW) return;
      lastW = stage.clientWidth;
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        build();
        kick();
      }, 200);
    });

    const cs = getComputedStyle(heading);
    const fontReady = document.fonts?.load
      ? document.fonts.load(`${cs.fontWeight} 100px ${cs.fontFamily}`)
      : Promise.resolve();
    fontReady
      .catch(() => {})
      .then(() => {
        if (disposed) return;
        build();
        lastW = stage.clientWidth;
        ro.observe(stage);
        kick();
      });

    teardown = () => {
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      io.disconnect();
      ro.disconnect();
      stage.removeEventListener('pointermove', onMove);
      stage.removeEventListener('pointerleave', onLeave);
      geo?.dispose();
      sprite.dispose();
      renderer.dispose();
    };
  });

  return () => {
    disposed = true;
    teardown();
  };
}
