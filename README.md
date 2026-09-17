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

| Game              | Description                                                         | Live                                                                   |
| ----------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Neon Snake**    | Modern Snake with smooth animations, contrast fading & neon visuals | [Play](https://souravbanerjeedata.github.io/snake-game-in-javascript/) |
| **Point & Shoot** | Click/tap flying enemies across 6 enemies & 5 battlefields          | [Play](https://souravbanerjeedata.github.io/point-and-shoot-game/)     |

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
