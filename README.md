# ADAML-KMU.github.io

ADAML (Advanced Design and Analysis of Materials Laboratory) - Kookmin University

## Tech Stack

- React 18
- Vite 5
- React Router v6 (Hash Router)
- CSS (Pretendard Font)

## Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

The deployment is handled by GitHub Actions (see `.github/workflows/deploy.yml`).

## Project Structure

```
project-root/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components (Header, Footer, Layout)
│   │   └── common/          # Common components (ArticleCard, PageTitle)
│   ├── pages/               # Page components
│   ├── data/                # JSON data files
│   ├── styles/              # CSS files
│   ├── App.jsx              # Main App component with routing
│   └── main.jsx             # Entry point
├── public/
│   └── image/               # Static images
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
└── package.json             # Project dependencies
```

## License

© ADAML, Kookmin University
