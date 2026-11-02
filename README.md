# RVCR.tech React Multi-Page Application

This project is a high-performance React multi-page replica of [rvcr.tech](http://rvcr.tech/), replacing the legacy WordPress + Elementor build with a modern, maintainable, lightning-fast web application.

---

## 🚀 Key Features Replicated

1. **Exact 11-Page Structure**:
   - **Home (`/`)**: Hero section, 10 teaser modules with anchor jumps and "Read More" links, interactive Contact Us section.
   - **What is RVCR? (`/what-is-rvcr`)**: Machine heart kinematics, introduction, history, background.
   - **RVCR Specifics (`/rvcr-specifics`)**: Bent-piston, toroidal casing, mechanism comparisons, and 5 video animations.
   - **How RVCR Works (`/how-rvcr-works`)**: Twin-rotor sequence, shuttle valve kinematics, variable compression, and 6 video animations.
   - **RVCR Applications (`/rvcr-applications`)**: Prime movers, fluid handling, hydrogen prime movers, renewable energy motors.
   - **RVCR Feasibility (`/rvcr-feasibility`)**: Kinematic, thermodynamic, physical engineering, and assembly feasibility with 14 video animations.
   - **RVCR Viability (`/rvcr-viability`)**: Techno-commercial viability, 2-level business cases, and product realization.
   - **RVCR Value (`/rvcr-value`)**: Multi-parameter value matrix for equipment OEMs, system integrators, and regulators.
   - **Broader Impact (`/broader-impact`)**: Green fuel economy, hydrogen transition, and carbon footprint reduction.
   - **Strategic Advantages (`/strategic-advantages`)**: Early adoption advantages, core competency, and market leapfrogging.
   - **About Us / R&D (`/about-us`)**: GYATK company background, R&D strategy, and technology structure.

2. **100% Asset Parity**:
   - All **187 original images and schematics** located in `/public/assets/images/`.
   - All **34 original 3D CAD simulation video animations** located in `/public/assets/videos/`.

3. **Design & UX System**:
   - **Typography**: Google Fonts (*Fjalla One*, *Inter*, *Oxygen*).
   - **Color Palette**: Technical navy/electric blues, deep slates, cyan highlights, and clean contrast cards.
   - **Header**: Top notification bar (phone, email, social links), sticky navigation bar with a dropdown menu, smooth scroll anchors, and mobile responsive drawer.
   - **Footer**: Full company credentials, CIN, Google Maps address, complete site index, and social channels.
   - **Interactive Form**: Client-validated contact form ready for EmailJS or serverless webhook connection.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Media**: HTML5 Video Player with simulation badges, full-screen, loop, and playback controls

---

## 💻 Getting Started

### 1. Development Server
Run the local dev server:
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 2. Production Build
Build optimized static assets:
```bash
npm run build
```

### 3. Production Preview
Test the production build locally:
```bash
npm run preview
```
