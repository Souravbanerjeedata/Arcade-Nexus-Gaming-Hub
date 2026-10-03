# Arcade Nexus — Gaming Hub

A clean, modern platform to play browser games in one place.

**Live Demo:** [here](https://souravbanerjeedata.github.io/Arcade-Nexus-Gaming-Hub/)

---

## Features

- Dark neon gaming aesthetic
- Game cards with short descriptions
- Instant play via full-screen embedded iframe
- Back to Hub button + Escape key support
- Open in new tab option
- Fully responsive (desktop & mobile)
- Easy to expand with new games

---

## Games Included

| Game | Description | Live |
| --- | --- | --- |
| **Neon Snake** | Modern Snake with smooth animations, contrast fading & neon visuals | [Play](https://souravbanerjeedata.github.io/snake-game-in-javascript/) |
| **Point & Shoot** | Click/tap flying enemies across 6 enemies & 5 battlefields | [Play](https://souravbanerjeedata.github.io/point-and-shoot-game/) |
| **Leap Runner** | Fast-paced 2D endless runner — dodge enemies & jump obstacles | [Play](https://souravbanerjeedata.github.io/leap-runner/) |
| **Endless Runner** | Choose from City, Forest, Hills, Mushroom Valley, and Desert Run; dodge enemies and roll to score | [Play](https://souravbanerjeedata.github.io/endless-runner-game-in-js/) |
| **Metroidvania: Escape the Factory** | Explore a factory, unlock abilities, defeat bosses and escape | [Play](https://souravbanerjeedata.github.io/Metroidvania/) |
| **Neon Tetris** | Classic Tetris with glowing neon blocks and cyberpunk vibes | [Play](https://souravbanerjeedata.github.io/tetris/) |
| **Neon Pac-Man** | Neon-styled Pac-Man with glowing walls and classic maze action | [Play](https://souravbanerjeedata.github.io/pacman/) |
| **Gorillas — Rooftop Showdown** | Artillery duel — throw bananas across city rooftops | [Play](https://souravbanerjeedata.github.io/gorillas/) |
| **Tic-Tac-Toe — Paper Edition** | Minimal white paper aesthetic with handwriting-style marks | [Play](https://souravbanerjeedata.github.io/tic-tac-toe/) |

---

## How to Run Locally

```bash
# Clone the repo
git clone https://github.com/Souravbanerjeedata/Arcade-Nexus-Gaming-Hub.git
cd Arcade-Nexus-Gaming-Hub

# Open with any static server
npx serve .
# or
python -m http.server 8080
```

Then open `http://localhost:3000` (or `8080`) in your browser.

You can also just open `index.html` directly.

---

## Adding a New Game

Open `script.js` and add a new object to the `games` array:

```js
{
  id: "unique-id",
  title: "Game Title",
  description: "Short description of the game...",
  url: "https://your-game-live-url.com/",
  previewClass: "preview-snake",   // reuse or create a new CSS class
  previewHTML: `
    <!-- optional custom visual for the card -->
  `,
},
```

The new card will appear automatically.

---

## Tech Stack

- Pure HTML, CSS & vanilla JavaScript
- No frameworks or build tools required
- Google Fonts (Orbitron + Inter)

---

## License

MIT
