(() => {
  const STAGE_W = 1920;
  const STAGE_H = 1080;
  const stage = document.getElementById("stage");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const rand = (min, max) => min + Math.random() * (max - min);

  // Scale the fixed 1920x1080 stage to fit whatever screen it's on.
  function fit() {
    const s = Math.min(window.innerWidth / STAGE_W, window.innerHeight / STAGE_H);
    stage.style.transform = `translate(-50%, -50%) scale(${s})`;
  }
  window.addEventListener("resize", fit);
  fit();

  // Draw every [data-art] placeholder.
  document.querySelectorAll("[data-art]").forEach((el) => {
    el.innerHTML = ART[el.dataset.art]();
  });

  // Desync repeated pieces so twins don't blink or flicker in lockstep.
  document.querySelectorAll(".jack-face .glow, .ghost .eyes").forEach((el) => {
    el.style.animationDelay = `${rand(-6, 0).toFixed(2)}s`;
  });

  // Sparkles: hand-placed so they sit in open sky, with random timing.
  const sparkles = [
    [120, 470, 44], [640, 420, 30], [930, 560, 50], [1270, 690, 34], [90, 980, 40],
    [640, 760, 26], [1420, 620, 46], [1880, 760, 32], [1000, 790, 28], [1150, 330, 24],
    [380, 1030, 30], [1900, 1020, 26], [760, 330, 22], [1830, 390, 30], [560, 560, 22],
    [1080, 1000, 34], [60, 300, 26],
  ];
  const sparkleLayer = document.getElementById("sparkles");
  for (const [x, y, size] of sparkles) {
    const el = document.createElement("div");
    el.className = "sparkle";
    el.style.cssText = `left:${x}px; top:${y}px; width:${size * 1.5}px; height:${size * 1.5}px;
      animation-duration:${rand(2.8, 5.5).toFixed(2)}s; animation-delay:${rand(-5, 0).toFixed(2)}s;`;
    el.innerHTML = ART.sparkle();
    sparkleLayer.appendChild(el);
  }

  // Fly-bys: every so often a little flock of bats or a ghost drifts across.
  const flyLayer = document.getElementById("flybys");

  function launch(art, { y, size, duration, delay = 0, reverse = false, className = "" }) {
    const el = document.createElement("div");
    el.className = `flyby ${className} ${reverse ? "reverse" : ""}`;
    el.style.cssText = `top:${y}px; width:${size}px; animation-duration:${duration}s; animation-delay:${delay}s;`;
    el.innerHTML = `<div class="flyby-inner">${ART[art]()}</div>`;
    el.addEventListener("animationend", (e) => {
      if (e.target === el) el.remove();
    });
    flyLayer.appendChild(el);
  }

  function batFlock() {
    const reverse = Math.random() < 0.5;
    const baseY = rand(330, 640);
    const count = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      launch("bat", {
        y: baseY + rand(-90, 90),
        size: rand(70, 130),
        duration: rand(14, 20),
        delay: i * rand(0.6, 1.6),
        reverse,
        className: "bat",
      });
    }
  }

  function ghostDrift() {
    launch("ghost", {
      y: rand(380, 620),
      size: rand(110, 170),
      duration: rand(26, 34),
      reverse: Math.random() < 0.5,
      className: "drift-ghost",
    });
  }

  function scheduleFlyby() {
    setTimeout(() => {
      if (!reduceMotion.matches && !document.hidden) {
        (Math.random() < 0.6 ? batFlock : ghostDrift)();
      }
      scheduleFlyby();
    }, rand(20000, 45000));
  }

  if (!reduceMotion.matches) setTimeout(batFlock, 3000);
  scheduleFlyby();

  // Hide the cursor when nothing's moving, so a TV shows a clean screen.
  let idleTimer;
  function wake() {
    document.body.classList.remove("idle");
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => document.body.classList.add("idle"), 2500);
  }
  window.addEventListener("pointermove", wake);
  wake();
})();
