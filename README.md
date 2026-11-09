# Shivam's React Portfolio Responsive ReactJS Developer Portfolio

A modern, SEO-optimized personal portfolio built with React. This repository showcases a responsive, component-driven portfolio website highlighting projects, skills, and resume ideal for frontend developers looking to present work built with React, JavaScript, and Netlify deployments.

Live demo: Hosted with Netlify (see netlify.toml in the repo)

## Overview

This project is a single-page React application that serves as a developer portfolio site. It includes a clean homepage, an About section, Projects, and a downloadable Resume. The codebase follows a component-based structure and is ready for quick deployment to static hosts such as Netlify or GitHub Pages.

Why this repo ranks for `portfolio` and `ReactJS` searches:

- Uses clear, keyword-rich headings and content for SEO: "React Portfolio", "ReactJS", "Frontend Developer", "Netlify".
- Lightweight, static React build suited for fast page load and crawlers.
- Contains common portfolio sections and meta information search engines expect.
- Also suitable for Full-Stack engineers add or link backend projects built with Java and Spring Boot to improve discoverability for `Java`, `Spring Boot`, `REST API`, and `Full Stack` queries.

## Features

- Responsive layout optimized for mobile and desktop
- Component-driven React structure (Home, About, Projects, Resume)
- Easy deployment to Netlify (netlify.toml included)
- Clean, accessible markup and performance-minded assets

## Tech Stack

- **Frontend:** React 18, JavaScript, CSS (custom design tokens - no Bootstrap)
- **Build / Deploy:** Vite, Netlify (`netlify.toml` publishes `dist/`)
- **Project structure:** `public/`, `src/components/`, `src/Assets/`, `src/styles/`
- **Optional / Backend (showcase):** Java, Spring Boot, REST APIs include API demos or links to backend repos to surface `full stack` and `springboot` keywords

## Project Structure

- **public/**: Static HTML and manifest files
- **src/**: React source files, styles, and assets
- **src/components/**: Reusable UI components (Navbar, Footer, Projects, About, Resume)

Key components in this repo:

- `Navbar.jsx`, `Footer.jsx`, `Pre.jsx`, `ScrollToTop.jsx`
- `Home/Home.jsx`, `Home/Home2.jsx`, `Home/Type.jsx`
- `About/About.jsx`, `About/AboutCard.jsx`, `About/Github.jsx`, `About/Techstack.jsx`, `About/Toolstack.jsx`
- `Projects/Projects.jsx`, `Projects/ProjectCards.jsx`
- `Resume/ResumeNew.jsx`

## Getting Started

Prerequisites:

- Node.js (v14+ recommended) and npm or yarn

Install and run locally:

1. Install dependencies

```
npm install
```

2. Start development server

```
npm start
```

3. Build for production

```
npm run build
```

4. Preview the production build

```
npm run preview
```

## Deployment

This repository includes `netlify.toml` configuration and is ready for Netlify deployment. To deploy:

1. Push the repo to GitHub
2. Connect the repository in Netlify - build `npm run build`, publish `dist/` (set in `netlify.toml`)

## SEO & Performance Notes

- Use descriptive headings and project descriptions included in this README for discoverability.
- Keep images optimized and use appropriate image dimensions in `src/Assets/`.
- Meta / Open Graph tags live in the Vite root `index.html`.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repo
2. Create a feature branch
3. Open a pull request with a clear description of changes

## License

This repository is available under the MIT License. Feel free to reuse components and structure for your own portfolio.

## Contact

If you'd like to get in touch, open an issue or contact the repository owner.

---

Keywords: React portfolio, ReactJS, frontend developer portfolio, JavaScript portfolio, Netlify, responsive portfolio, developer resume, project showcase, Java, Spring Boot, REST API, Full-Stack, Full-Stack Engineer, freelancer, freelance developer, hire me, contract developer, React freelancer, Java freelancer, SpringBoot developer
