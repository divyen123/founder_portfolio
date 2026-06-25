<div align="center">

# 🚀 Raghav S — Aerospace Portfolio

**Founder & CEO, Ragas Aerospace**

A premium, cinematic portfolio showcasing aerospace innovation, UAV systems, and deep-tech engineering — built with cutting-edge web technologies.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-raghav--portfolio--steel.vercel.app-00BFFF?style=for-the-badge)](https://raghav-portfolio-steel.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

## ✨ Features

- 🎬 **Cinematic Scroll Animations** — GPU-composited zoom-out and fade transitions powered by Framer Motion
- 🛰️ **Aerospace-Themed UI** — Dark glassmorphism design with neon cyan/purple accents and holographic elements
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- 🧭 **Active Section Highlighting** — Navbar dynamically highlights the current section using IntersectionObserver
- 🎓 **Education & Certifications** — Interactive certificate viewer with full-screen modal overlay
- 🏆 **Achievements Showcase** — Animated cards displaying competition wins and recognitions
- 🗺️ **Startup Journey Timeline** — Visual roadmap of Ragas Aerospace's mission phases
- 🌍 **Animated Earth Hologram** — Pure CSS globe animation in the contact section
- ⚡ **Static Site Generation** — Pre-rendered pages for blazing-fast load times

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3.4 |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Utilities** | clsx, tailwind-merge |
| **Deployment** | Vercel (Auto CI/CD) |
| **Version Control** | Git & GitHub |

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── certifications/       # Professional certificate images
│   └── sequence/             # Hero frame-sequence assets
├── src/
│   ├── app/
│   │   ├── globals.css       # Design system & custom utilities
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── page.tsx          # Main page composition
│   └── components/
│       ├── CinematicSection.tsx   # Scroll-driven zoom wrapper
│       ├── Footer.tsx
│       ├── GlobalBackground.tsx   # Particle & grid background
│       ├── Navbar.tsx             # Active-section aware navbar
│       ├── ScrollyCanvas.tsx      # Hero frame-sequence animation
│       └── sections/
│           ├── About.tsx          # 01 — About & expertise
│           ├── Projects.tsx       # 02 — Engineering projects
│           ├── Achievements.tsx   # 03 — Competition milestones
│           ├── StartupJourney.tsx # 04 — Ragas Aerospace roadmap
│           ├── Education.tsx      # 05 — Education & certifications
│           └── Contact.tsx        # 06 — Contact information
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/divyen123/Raghav_portfolio.git

# Navigate to the project
cd Raghav_portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio locally.

### Build for Production

```bash
npm run build
npm start
```

---

## 📸 Sections Overview

| # | Section | Description |
|---|---|---|
| 01 | **About** | Introduction, expertise domains, and stats |
| 02 | **Projects** | Flagship and additional engineering projects |
| 03 | **Achievements** | Competition wins, workshops, and recognitions |
| 04 | **Journey** | Ragas Aerospace startup timeline and roadmap |
| 05 | **Education** | B.E. in Robotics & Automation, certifications viewer |
| 06 | **Contact** | Email, phone, LinkedIn, and startup website |

---

## 🎨 Design Highlights

- **Glassmorphism** — Frosted-glass card effects with `backdrop-blur`
- **Holographic Elements** — Animated borders and gradient overlays
- **Custom Color Palette** — Aerospace-inspired neon (`#00BFFF`), cyan (`#00FFFF`), and purple (`#8B5CF6`)
- **Micro-Animations** — Hover effects, staggered reveals, and spring transitions
- **Custom Scrollbar** — Styled to match the dark aerospace theme

---

## 📄 License

This project is for personal portfolio use.

---

<div align="center">

**Built with ❤️ by Raghav S | Ragas Aerospace**

</div>
