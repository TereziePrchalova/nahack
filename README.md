# NA Structure Hackathon 2026

Landing page for the **Nucleic Acid Structure Annotation & Prediction Hackathon 2026**, Prague.

## Quick start

Make sure you have **Node.js 18+** installed, then:

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for production

```bash
npm run build       # outputs to /dist
npm run preview     # preview the production build locally
```

## Project structure

```
nahack2026/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # entry point
    ├── App.jsx               # root component
    ├── hooks/
    │   └── index.js          # useCountdown, useReveal
    ├── styles/
    │   ├── global.css        # reset, grid overlay, animations
    │   └── tokens.js         # color tokens + font helpers
    └── components/
        ├── UI.jsx            # SectionTag, SectionTitle, Pill
        ├── DnaHelix.jsx      # animated SVG decoration
        ├── Nav.jsx           # fixed nav + mobile drawer
        ├── Hero.jsx          # hero + countdown
        ├── About.jsx
        ├── Workstreams.jsx
        ├── Outcomes.jsx
        ├── Schedule.jsx
        ├── Who.jsx
        ├── Venue.jsx
        ├── Contact.jsx
        └── Footer.jsx
```
