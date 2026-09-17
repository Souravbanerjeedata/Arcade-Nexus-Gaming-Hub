/* =========================================================
   Arcade Nexus — Game Hub
   To add a new game later, just push another object into
   the `games` array below. Everything else updates automatically.
   ========================================================= */

const games = [
  {
    id: "snake",
    title: "Neon Snake",
    description:
      "A modern, visually intense Snake game with smooth sliding animations, a contrast-fading board, and glowing neon visuals. Eat apples to restore visibility!",
    url: "https://souravbanerjeedata.github.io/snake-game-in-javascript/",
    previewClass: "preview-snake",
    previewHTML: `
      <div class="snake-visual">
        <div class="seg"></div>
        <div class="seg"></div>
        <div class="seg"></div>
        <div class="apple"></div>
      </div>
    `,
  },
  {
    id: "point-shoot",
    title: "Point & Shoot",
    description:
      "Click or tap flying enemies before they escape! Choose from 6 enemies and 5 atmospheric battlefields. 5 lives, rising speed, explosions & sound.",
    url: "https://souravbanerjeedata.github.io/point-and-shoot-game/",
    previewClass: "preview-shoot",
    previewHTML: `
      <div class="shoot-visual">
        <span>🦇</span>
        <span>👁️</span>
        <span>💀</span>
      </div>
    `,
  },
  {
    id: "leap-runner",
    title: "Leap Runner",
    description:
      "A fast-paced 2D side-scrolling endless runner. Dodge enemies, jump over obstacles, and see how high you can score!",
    url: "https://souravbanerjeedata.github.io/leap-runner/",
    previewClass: "preview-runner",
    previewHTML: `
      <div class="runner-visual">
        <span class="runner-emoji">🏃</span>
        <span class="runner-ground"></span>
      </div>
    `,
  },
];

/* ---------- DOM ---------- */
const hub = document.getElementById("hub");
const player = document.getElementById("player");
const gamesGrid = document.getElementById("gamesGrid");
const gameFrame = document.getElementById("gameFrame");
const playerTitle = document.getElementById("playerTitle");
const openExternal = document.getElementById("openExternal");
const backBtn = document.getElementById("backBtn");

/* ---------- Render Cards ---------- */
function renderGames() {
  gamesGrid.innerHTML = games
    .map(
      (game) => `
    <article class="game-card" data-id="${game.id}">
      <div class="card-preview ${game.previewClass}">
        ${game.previewHTML}
      </div>
      <div class="card-body">
        <h2 class="card-title">${game.title}</h2>
        <p class="card-desc">${game.description}</p>
        <button class="play-btn" data-id="${game.id}">
          ▶ Play Now
        </button>
      </div>
    </article>
  `
    )
    .join("");

  // Attach click listeners
  document.querySelectorAll(".play-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const game = games.find((g) => g.id === id);
      if (game) openGame(game);
    });
  });
}

/* ---------- Open / Close Game ---------- */
function openGame(game) {
  playerTitle.textContent = game.title;
  openExternal.href = game.url;
  gameFrame.src = game.url;

  hub.classList.add("hidden");
  player.classList.remove("hidden");

  // Optional: prevent body scroll
  document.body.style.overflow = "hidden";
}

function closeGame() {
  gameFrame.src = ""; // stop the game
  player.classList.add("hidden");
  hub.classList.remove("hidden");
  document.body.style.overflow = "";
}

/* ---------- Events ---------- */
backBtn.addEventListener("click", closeGame);

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !player.classList.contains("hidden")) {
    closeGame();
  }
});

/* ---------- Init ---------- */
renderGames();
