# Portfolio Design Architecture & Wireframe Specification

## 1. Executive Summary
This document outlines the structural layout, technical architecture, and design system for a premium developer portfolio. The goal of the portfolio is to present a high-end, futuristic, and highly skilled image to recruiters and freelance clients.

---

## 2. Technical Architecture
The application is built as a Single Page Application (SPA) utilizing a modern, high-performance tech stack:
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS v4 (using native `@theme` variables)
- **Animations:** Framer Motion (scroll-linked, physics-based springs)
- **3D Graphics:** Three.js / React Three Fiber (Custom background rendering)
- **Deployment:** Static hosting ready (Vercel, Netlify, or GitHub Pages)

### Performance Optimization Strategy
- **Z-Index Layering:** The 3D WebGL Canvas is fixed at `z-index: 0`, completely separated from the DOM painting of the main content (`z-index: 10`), preventing layout trashing.
- **Glassmorphism:** Heavy `backdrop-filter: blur` CSS properties are avoided over moving 3D elements to maintain a locked 60 FPS on integrated GPUs. Semi-transparent solid fills and inner shadows are used to simulate acrylic glass.

---

## 3. Design System
The visual identity relies on deep space aesthetics mixed with sharp, neon tech accents.

### Color Palette
- **Background:** `#050816` (Deep Void)
- **Surface (Glass):** `#0F172A` (Slate Dark)
- **Primary:** `#3B82F6` (Electric Blue) - Used for primary actions and active states.
- **Secondary:** `#8B5CF6` (Neon Purple) - Used for gradients and secondary highlights.
- **Accent:** `#06B6D4` (Cyan) - Used for typography accents and micro-interactions.
- **Text:** `#F8FAFC` (Pure White) and `#94A3B8` (Muted Slate).

### Typography
- **Headings (`font-heading`):** Space Grotesk (Sharp, geometric, modern).
- **Body (`font-body`):** Inter (Highly legible, neutral).

---

## 4. Wireframes & Structural Layout

### Global Layout (`Layout.tsx`)
- **Background Layer:** Fixed `GalaxyBackground.tsx` rendering a 3D starfield.
- **Header (`Navbar.tsx`):** Fixed to top.
  - *Left:* Logo (A**I**D)
  - *Right:* Navigation Links (About, Skills, Projects, Contact) + [Download CV] CTA.
- **Footer (`Footer.tsx`):** Sticky bottom.
  - *Left:* Copyright info.
  - *Right:* Social Icons (GitHub, LinkedIn, Email).

### 1. Hero Section (`Hero.tsx`)
*Focus: Instant impact and high-end aesthetic.*
- **Top:** Pulsing Status Badge ("Available for Opportunities").
- **Center:** Massive, bold name typography ("Ayeleso Inioluwa Daniel").
- **Below Name:** Short, impactful tagline emphasizing "scalable" and "high-performance".
- **Bottom:** Split CTA Buttons:
  - `[ Explore Work ]` (Primary, Animated fill).
  - `[ Download CV ]` (Secondary, Ghost outline).

### 2. About Section (`About.tsx`)
*Focus: Personal philosophy and background.*
- **Layout:** 2-Column Split Grid (on Desktop).
- **Header:** "01. About Me"
- **Left Column:** 
  - Text block describing engineering philosophy.
  - List of core competencies (Creative, Curious, Calm).
- **Right Column:** (Reserved for future profile image or interactive code snippet graphic).

### 3. Technologies & Skills (`Skills.tsx`)
*Focus: Technical proficiency at a glance.*
- **Layout:** 4-Column CSS Grid (Responsive to 2-col on mobile).
- **Header:** "02. Technologies"
- **Cards:** Glassmorphic squares detailing individual skills (React, Node, Prisma, etc.).
- **Interaction:** Hovering causes the card to tilt on a 3D axis (perspective) and emit a blue drop shadow.

### 4. Featured Project (`Project.tsx`)
*Focus: Demonstrating real-world capability.*
- **Layout:** Alternating Z-pattern (Image left, text right).
- **Header:** "03. Featured Work"
- **Visual:** A sleek, fake macOS browser window containing a screenshot of the project. Tracks mouse position for 3D tilt.
- **Details:** 
  - Project Title & Description.
  - Tech Stack Pill Tags.
  - Links (GitHub Repo, Live Demo).

### 5. Curriculum Vitae (`cv.tsx`)
*Focus: Professional timeline.*
- **Header:** "04. Curriculum Vitae"
- **Layout:** Centered glassmorphic container.
- **Content:** (Pending user content) Will contain expandable accordions or a timeline of work history and education.

### 6. Contact (`Contact.tsx`)
*Focus: Conversion and networking.*
- **Header:** "05. Get In Touch"
- **Layout:** Centered, narrow max-width form.
- **Inputs:** Name, Email, Message (with focus-ring glowing states).
- **Action:** `[ Send Message ]` button.

---

## 5. Visual Layout Wireframe (ASCII Diagram)

You can copy and paste this directly into your Word Document (just make sure to set the font to a monospace font like *Courier New* or *Consolas* so the boxes align perfectly).

```text
+-------------------------------------------------------------------------+
|  [ A I D ]                  About   Skills   Work           [ Contact ] |
+-------------------------------------------------------------------------+
|                                                                         |
|                       [ Available for Opportunities ]                   |
|                                                                         |
|                A Y E L E S O   I N I O L U W A   D A N I E L            |
|                                                                         |
|            Full-Stack Developer engineering scalable experiences.       |
|                                                                         |
|                     [ Explore Work ]   [ Download CV ]                  |
|                                                                         |
+-------------------------------------------------------------------------+
|                                                                         |
|  01. ABOUT ME                                                           |
|                                                                         |
|  +---------------------------------+   +-----------------------------+  |
|  | Engineering philosophy...       |   |                             |  |
|  | Core competencies:              |   |    [ Profile Graphic ]      |  |
|  | - Creative                      |   |                             |  |
|  | - Curious                       |   |                             |  |
|  +---------------------------------+   +-----------------------------+  |
|                                                                         |
+-------------------------------------------------------------------------+
|                                                                         |
|  02. TECHNOLOGIES                                                       |
|                                                                         |
|  +----------+   +----------+   +----------+   +----------+              |
|  | React    |   | Node.js  |   | Prisma   |   | Postgres |              |
|  +----------+   +----------+   +----------+   +----------+              |
|                                                                         |
+-------------------------------------------------------------------------+
|                                                                         |
|  03. FEATURED WORK                                                      |
|                                                                         |
|  +---------------------------------+   +-----------------------------+  |
|  |                                 |   | Project Title               |  |
|  |      [ Project Image ]          |   | Description of work...      |  |
|  |                                 |   | [ GitHub ]  [ Live Site ]   |  |
|  +---------------------------------+   +-----------------------------+  |
|                                                                         |
+-------------------------------------------------------------------------+
|                                                                         |
|  04. CURRICULUM VITAE                                                   |
|                                                                         |
|  +-------------------------------------------------------------------+  |
|  |  +-------------------------------------------------------------+  |  |
|  |  | [Icon] Role / Experience 1                     2024 - 2026  |  |  |
|  |  +-------------------------------------------------------------+  |  |
|  |  +-------------------------------------------------------------+  |  |
|  |  | [Icon] Education / Degree                      2020 - 2024  |  |  |
|  |  +-------------------------------------------------------------+  |  |
|  +-------------------------------------------------------------------+  |
|                                                                         |
+-------------------------------------------------------------------------+
|                                                                         |
|  05. GET IN TOUCH                                                       |
|                                                                         |
|                      +-----------------------------+                    |
|                      | Name                        |                    |
|                      +-----------------------------+                    |
|                      | Email                       |                    |
|                      +-----------------------------+                    |
|                      | Message                     |                    |
|                      +-----------------------------+                    |
|                      |     [ Send Message ]        |                    |
|                      +-----------------------------+                    |
|                                                                         |
+-------------------------------------------------------------------------+
|  (C) 2026 Ayeleso Inioluwa Daniel        [GitHub] [LinkedIn] [Email]    |
+-------------------------------------------------------------------------+
```
