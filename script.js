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
  {
    id: "endless-runner",
    title: "Endless Runner",
    description:
      "Choose from five worlds—City, Forest, Hills, Mushroom Valley, or Desert Run. Dodge animated enemies, roll to score, and reach 150 points for victory.",
    url: "https://souravbanerjeedata.github.io/endless-runner-game-in-js/",
    previewClass: "preview-endless",
    previewHTML: `
      <div class="endless-visual">
        <div class="endless-worlds" aria-label="Five destinations">
          <span>🏙️</span><span>🌲</span><span>⛰️</span><span>🍄</span><span>🏜️</span>
        </div>
        <span class="endless-dog">🐕</span>
        <span class="endless-enemy">🕷️</span>
        <span class="endless-ground"></span>
      </div>
    `,
  },
  {
    id: "metroidvania",
    title: "Metroidvania: Escape the Factory",
    description:
      "Explore a sprawling factory, unlock abilities, defeat bosses and find your way out. Classic Metroidvania exploration and combat in pure JavaScript.",
    url: "https://souravbanerjeedata.github.io/Metroidvania/",
    previewClass: "preview-metroidvania",
    previewHTML: `
      <div class="metroid-visual">
        <span class="metroid-player">🦾</span>
        <span class="metroid-door">🚪</span>
      </div>
    `,
  },
  {
    id: "neon-tetris",
    title: "Neon Tetris",
    description:
      "Classic Tetris reborn with glowing neon blocks, smooth controls and a cyberpunk atmosphere. Clear lines and chase high scores!",
    url: "https://souravbanerjeedata.github.io/tetris/",
    previewClass: "preview-tetris",
    previewHTML: `
      <div class="tetris-visual">
        <div class="tetromino">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
    `,
  },
  {
    id: "neon-pacman",
    title: "Neon Pac-Man",
    description:
      "A neon-styled Pac-Man with glowing walls, power pellets and classic maze-chasing action. Eat dots, avoid ghosts, and clear the board!",
    url: "https://souravbanerjeedata.github.io/pacman/",
    previewClass: "preview-pacman",
    previewHTML: `
      <div class="pacman-visual">
        <span class="pac">🟡</span>
        <span class="ghost">👻</span>
      </div>
    `,
  },
  {
    id: "gorillas",
    title: "Gorillas — Rooftop Showdown",
    description:
      "Classic artillery duel! Two gorillas on city rooftops take turns throwing bananas. Adjust angle and power to hit your opponent.",
    url: "https://souravbanerjeedata.github.io/gorillas/",
    previewClass: "preview-gorillas",
    previewHTML: `
      <div class="gorillas-visual">
        <span>🦍</span>
        <span class="banana">🍌</span>
        <span>🦍</span>
      </div>
    `,
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe — Paper Edition",
    description:
      "Minimal white paper aesthetic with handwriting-style X and O. Feels like two players drawing on a real piece of paper.",
    url: "https://souravbanerjeedata.github.io/tic-tac-toe/",
    previewClass: "preview-tictactoe",
    previewHTML: `
      <div class="ttt-visual">
        <span>✕</span>
        <span>○</span>
        <span>✕</span>
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
