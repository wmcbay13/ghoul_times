// Optional ambient music: public-domain 78rpm recordings (1915–1925), played in a loop.
// Browsers only allow audio after a user gesture, so it starts off and the toggle turns it on.
(() => {
  const PLAYLIST = [
    { src: "audio/danse-macabre-1.mp3", title: "Danse Macabre (part 1)", credit: "Philadelphia Orchestra, 1925" },
    { src: "audio/danse-macabre-2.mp3", title: "Danse Macabre (part 2)", credit: "Philadelphia Orchestra, 1925" },
    { src: "audio/dance-of-the-skeletons.mp3", title: "Dance of the Skeletons", credit: "Sodero's Band, 1915" },
    { src: "audio/witchs-dance.mp3", title: "Witch's Dance", credit: "Váša Příhoda, 1922" },
    { src: "audio/mountain-king.mp3", title: "In the Hall of the Mountain King", credit: "Band of H.M. Scots Guards, 1922" },
    { src: "audio/dance-of-the-goblins.mp3", title: "Dance of the Goblins", credit: "Billy Whitlock, 1923" },
    { src: "audio/skeleton-dance.mp3", title: "Skeleton Dance", credit: "Leonard Derby, 1924" },
  ];
  const VOLUME = 0.8;

  const button = document.getElementById("music-toggle");
  const label = button.querySelector(".music-label");
  const nowPlaying = document.getElementById("now-playing");
  const audio = new Audio();
  audio.preload = "none";

  let index = 0;
  let playing = false;
  let fadeTimer, captionTimer;

  function fadeTo(target, ms, done) {
    clearInterval(fadeTimer);
    const step = (target - audio.volume) / (ms / 50);
    fadeTimer = setInterval(() => {
      const next = audio.volume + step;
      if ((step >= 0 && next >= target) || (step < 0 && next <= target)) {
        audio.volume = target;
        clearInterval(fadeTimer);
        if (done) done();
      } else {
        audio.volume = next;
      }
    }, 50);
  }

  function showCaption(track) {
    nowPlaying.innerHTML = `<span class="np-title">${track.title}</span><span class="np-credit">${track.credit}</span>`;
    nowPlaying.classList.add("show");
    clearTimeout(captionTimer);
    captionTimer = setTimeout(() => nowPlaying.classList.remove("show"), 8000);
  }

  function load(i) {
    index = (i + PLAYLIST.length) % PLAYLIST.length;
    audio.src = PLAYLIST[index].src;
  }

  function play() {
    if (!audio.src) load(index);
    audio.volume = 0;
    audio.play().then(() => {
      fadeTo(VOLUME, 2000);
      showCaption(PLAYLIST[index]);
    }).catch(() => setPlaying(false));
  }

  function setPlaying(on) {
    playing = on;
    button.setAttribute("aria-pressed", String(on));
    document.body.classList.toggle("music-on", on);
    label.textContent = on ? "music on" : "play music";
  }

  function toggle() {
    if (playing) {
      setPlaying(false);
      nowPlaying.classList.remove("show");
      fadeTo(0, 800, () => audio.pause());
    } else {
      setPlaying(true);
      play();
    }
  }

  audio.addEventListener("ended", () => {
    load(index + 1);
    if (playing) play();
  });
  // Skip a track that fails to load rather than going silent, but give up if they all fail.
  let failures = 0;
  audio.addEventListener("playing", () => { failures = 0; });
  audio.addEventListener("error", () => {
    if (!playing) return;
    if (++failures >= PLAYLIST.length) {
      setPlaying(false);
      return;
    }
    load(index + 1);
    setTimeout(play, 1000);
  });

  button.addEventListener("click", toggle);

  // TV remotes and keyboards: M, play/pause, or OK/Enter when nothing else has focus.
  document.addEventListener("keydown", (e) => {
    const onButton = e.target === button && (e.key === "Enter" || e.key === " ");
    if (onButton) return;
    if (["m", "M", "MediaPlayPause", "Enter", " "].includes(e.key)) {
      e.preventDefault();
      toggle();
    } else if (e.key === "MediaTrackNext" && playing) {
      load(index + 1);
      play();
    }
  });

  setPlaying(false);
})();
