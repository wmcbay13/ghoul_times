// Inline SVG artwork, drawn in the flat style of the "ghoul times roll" flyer.
// Colors come from CSS custom properties so the palette lives in styles.css.

const ART = {
  ghost: () => `
    <svg viewBox="0 0 400 520" aria-hidden="true">
      <path fill="var(--cream)" d="M200 20 C120 20 80 90 80 170 L80 200 C40 190 10 220 20 250
        C30 282 70 272 86 260 L90 420 C90 460 100 490 120 502 C135 470 150 470 162 500
        C176 468 196 468 207 500 C222 468 242 468 256 496 C276 480 300 472 322 482
        C314 432 310 400 310 330 L312 262 C340 278 382 282 386 250 C390 218 350 200 315 212
        L315 170 C315 90 280 20 200 20 Z"/>
      <path fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"
        d="M86 236 C100 250 112 262 104 280 M196 400 C200 430 204 450 210 470 M250 395 C256 420 262 440 270 460"/>
      <g class="eyes" fill="var(--ink)">
        <ellipse cx="172" cy="140" rx="11" ry="28" transform="rotate(-6 172 140)"/>
        <ellipse cx="224" cy="140" rx="11" ry="28" transform="rotate(-6 224 140)"/>
      </g>
      <rect x="174" y="202" width="54" height="24" rx="12" fill="var(--ink)" transform="rotate(-8 200 214)"/>
    </svg>`,

  pumpkin: () => `
    <svg viewBox="0 0 300 250" aria-hidden="true">
      <path fill="var(--stem)" d="M138 66 C136 42 144 22 166 10 L176 22 C160 32 158 48 162 66 Z"/>
      <ellipse cx="150" cy="152" rx="140" ry="96" fill="var(--pumpkin)"/>
      <g fill="none" stroke="var(--pumpkin-rib)" stroke-width="5">
        <ellipse cx="100" cy="152" rx="60" ry="86"/>
        <ellipse cx="200" cy="152" rx="60" ry="86"/>
        <ellipse cx="150" cy="152" rx="30" ry="92"/>
      </g>
      <g class="jack-face">
        <path fill="var(--ink)" d="M80 128 L124 128 L102 90 Z M176 128 L220 128 L198 90 Z M140 160 L160 160 L150 142 Z
          M70 170 L95 178 L106 164 L120 180 L150 183 L180 180 L194 164 L205 178 L230 170
          Q218 224 150 228 Q82 224 70 170 Z"/>
        <path class="glow" fill="var(--glow)" d="M86 124 L118 124 L102 98 Z M182 124 L214 124 L198 98 Z M144 157 L156 157 L150 147 Z
          M80 176 L96 182 L106 170 L120 186 L150 189 L180 186 L194 170 L204 182 L220 176
          Q208 218 150 221 Q92 218 80 176 Z"/>
      </g>
    </svg>`,

  cat: () => {
    const shape = `
      <ellipse cx="110" cy="105" rx="62" ry="54"/>
      <path d="M56 88 L60 22 L104 58 Z"/>
      <path d="M116 58 L160 22 L164 88 Z"/>
      <path d="M66 140 C30 200 28 290 48 325 L172 325 C192 290 190 200 154 140 Z"/>
      <ellipse cx="84" cy="326" rx="27" ry="14"/>
      <ellipse cx="136" cy="326" rx="27" ry="14"/>`;
    const tail = "M160 318 C226 316 236 246 214 200 C202 176 212 152 232 146";
    return `
    <svg viewBox="0 0 250 350" aria-hidden="true">
      <g class="cat-tail" fill="none" stroke-linecap="round">
        <path d="${tail}" stroke="var(--cream)" stroke-width="30"/>
        <path d="${tail}" stroke="var(--ink-deep)" stroke-width="18"/>
      </g>
      <g stroke="var(--cream)" stroke-width="10" stroke-linejoin="round" fill="var(--cream)">${shape}</g>
      <g fill="var(--ink-deep)">${shape}</g>
      <path fill="var(--pink)" opacity="0.85" d="M66 76 L68 40 L94 60 Z M126 60 L152 40 L154 76 Z"/>
      <g class="cat-eyes">
        <ellipse cx="86" cy="104" rx="15" ry="18" fill="var(--lime)"/>
        <ellipse cx="134" cy="104" rx="15" ry="18" fill="var(--lime)"/>
        <g class="cat-pupils" fill="var(--ink-deep)">
          <ellipse cx="86" cy="104" rx="4" ry="14"/>
          <ellipse cx="134" cy="104" rx="4" ry="14"/>
        </g>
      </g>
      <path fill="var(--pink)" d="M103 128 L117 128 L110 136 Z"/>
      <g stroke="var(--cream)" stroke-width="2" stroke-linecap="round" opacity="0.7">
        <path d="M92 134 L52 128 M92 140 L54 144 M128 134 L168 128 M128 140 L166 144"/>
      </g>
    </svg>`;
  },

  eyeball: () => `
    <svg viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="96" fill="var(--cream)"/>
      <g class="iris">
        <circle cx="100" cy="100" r="54" fill="var(--lime)"/>
        <path fill="var(--lime)" d="M78 140 L78 166 a9 9 0 0 0 18 0 L96 150 Z M116 144 L116 156 a6 6 0 0 0 12 0 L128 136 Z"/>
        <circle cx="100" cy="100" r="36" fill="var(--ink)"/>
        <ellipse cx="116" cy="84" rx="10" ry="7" fill="var(--cream)" transform="rotate(-30 116 84)"/>
        <circle cx="128" cy="98" r="3.5" fill="var(--cream)"/>
      </g>
    </svg>`,

  moon: () => `
    <svg viewBox="0 0 200 200" aria-hidden="true">
      <path fill="var(--lime)" d="M120 14 A90 90 0 1 0 190 140 A72 72 0 0 1 120 14 Z"/>
    </svg>`,

  cloud: () => `
    <svg viewBox="0 0 260 130" aria-hidden="true">
      <path fill="var(--cream)" d="M40 120 C8 120 4 78 36 72 C34 40 80 30 100 52 C114 14 176 14 186 56
        C222 44 256 76 236 104 C252 118 232 126 214 120 Z"/>
    </svg>`,

  bat: () => `
    <svg viewBox="0 0 200 100" aria-hidden="true">
      <path fill="var(--pink)" d="M100 32 C96 22 91 18 89 28 L86 36 C72 20 40 14 4 34 C26 40 36 50 38 64
        C50 54 62 56 70 68 C78 60 88 62 94 74 L100 92 L106 74 C112 62 122 60 130 68
        C138 56 150 54 162 64 C164 50 174 40 196 34 C160 14 128 20 114 36 L111 28 C109 18 104 22 100 32 Z"/>
    </svg>`,

  sparkle: () => `
    <svg viewBox="-50 -50 100 100" aria-hidden="true">
      <path fill="var(--cream)" d="M0 -50 C4 -10 10 -4 50 0 C10 4 4 10 0 50 C-4 10 -10 4 -50 0 C-10 -4 -4 -10 0 -50 Z"/>
    </svg>`,

  spider: () => `
    <svg viewBox="-40 -800 80 840" aria-hidden="true">
      <line x1="0" y1="-800" x2="0" y2="-10" stroke="var(--cream)" stroke-width="1.5" opacity="0.6"/>
      <g stroke="var(--cream)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M-6 4 L-24 -10 L-32 4 M-6 10 L-28 6 L-36 22 M-6 14 L-24 22 L-28 38 M-4 18 L-14 32 L-14 46"/>
        <path d="M6 4 L24 -10 L32 4 M6 10 L28 6 L36 22 M6 14 L24 22 L28 38 M4 18 L14 32 L14 46"/>
      </g>
      <circle cx="0" cy="-2" r="8" fill="var(--ink-deep)" stroke="var(--cream)" stroke-width="2.5"/>
      <ellipse cx="0" cy="16" rx="12" ry="15" fill="var(--ink-deep)" stroke="var(--cream)" stroke-width="2.5"/>
      <circle cx="-3" cy="-3" r="1.8" fill="var(--pink)"/>
      <circle cx="3" cy="-3" r="1.8" fill="var(--pink)"/>
    </svg>`,

  // A corner web anchored at (0, 0): straight spokes fanning out, with sagging threads between them.
  web: () => {
    const size = 400;
    const spokes = 7;
    const rings = [60, 115, 175, 240, 310];
    const angle = (i) => (i / (spokes - 1)) * (Math.PI / 2);
    const pt = (a, r) => [Math.cos(a) * r, Math.sin(a) * r];
    let d = "";
    for (let i = 0; i < spokes; i++) {
      const [x, y] = pt(angle(i), size * 1.2);
      d += `M0 0 L${x.toFixed(1)} ${y.toFixed(1)} `;
    }
    for (const r of rings) {
      for (let i = 0; i < spokes - 1; i++) {
        const [x1, y1] = pt(angle(i), r);
        const [x2, y2] = pt(angle(i + 1), r);
        const [cx, cy] = pt((angle(i) + angle(i + 1)) / 2, r * 0.8);
        d += `M${x1.toFixed(1)} ${y1.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)} `;
      }
    }
    return `
    <svg viewBox="0 0 ${size} ${size}" aria-hidden="true">
      <path d="${d}" fill="none" stroke="var(--cream)" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
  },

  // Disco ball: rows of mirror tiles slide sideways inside a circle to fake rotation.
  // Each row is squeezed toward the poles, which also slows it down there, like a real sphere.
  disco: () => {
    const cx = 130, cy = 262, r = 124;
    const tile = 18, period = 15 * tile;
    const colors = ["#c9d1d8", "#8fa3b8", "#5d7590", "#e9dfc6", "#b8c4cc", "#f4efe2", "#7f8fa3", "#a9b6c2"];
    const hash = (a, b) => Math.abs(Math.sin(a * 12.9898 + b * 78.233) * 43758.5453) % 1;
    let rows = "";
    for (let row = 0, y = cy - r; y < cy + r; row++, y += tile) {
      const dy = Math.abs(y + tile / 2 - cy) / r;
      const k = Math.max(0.22, Math.sqrt(Math.max(0, 1 - dy * dy)));
      const xmin = cx - r / k - period, xmax = cx + r / k;
      let tiles = "";
      for (let col = Math.floor(xmin / tile); col * tile < xmax; col++) {
        const c = colors[Math.floor(hash(row, ((col % 15) + 15) % 15) * colors.length)];
        tiles += `<rect x="${col * tile + 1}" y="${y + 1}" width="${tile - 2}" height="${tile - 2}" rx="2" fill="${c}"/>`;
      }
      rows += `<g transform="translate(${cx} 0) scale(${k.toFixed(3)} 1) translate(${-cx} 0)"><g class="disco-row">${tiles}</g></g>`;
    }
    let chain = "";
    for (let y = 0; y < cy - r; y += 14) {
      chain += `<rect x="${cx - 4}" y="${y}" width="8" height="16" rx="4" fill="none" stroke="#9aa3ab" stroke-width="2.5"/>`;
    }
    return `
    <svg viewBox="0 0 260 400" aria-hidden="true">
      <defs>
        <clipPath id="disco-clip"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath>
        <radialGradient id="disco-shade" cx="0.38" cy="0.35" r="0.7">
          <stop offset="0" stop-color="#fff" stop-opacity="0.35"/>
          <stop offset="0.45" stop-color="#fff" stop-opacity="0"/>
          <stop offset="1" stop-color="#121210" stop-opacity="0.8"/>
        </radialGradient>
      </defs>
      ${chain}
      <rect x="${cx - 14}" y="${cy - r - 10}" width="28" height="16" rx="4" fill="#9aa3ab"/>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#3b4652"/>
      <g clip-path="url(#disco-clip)">${rows}</g>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#disco-shade)"/>
      <g fill="#fff">
        <path class="glint g1" d="M92 196 l4 16 l16 4 l-16 4 l-4 16 l-4 -16 l-16 -4 l16 -4 Z"/>
        <path class="glint g2" d="M168 300 l3 12 l12 3 l-12 3 l-3 12 l-3 -12 l-12 -3 l12 -3 Z"/>
        <path class="glint g3" d="M140 230 l2.5 10 l10 2.5 l-10 2.5 l-2.5 10 l-2.5 -10 l-10 -2.5 l10 -2.5 Z"/>
      </g>
    </svg>`;
  },
};
