# Sai Keerthana — Portfolio Website

> Cybersecurity & Full-Stack Developer · Security Engineer Intern @ Appfend · ICFAI, Hyderabad

**Live Demo →** [patil1703.github.io/portfolio](https://patil1703.github.io/portfolio) &nbsp;|&nbsp; **LinkedIn →** [linkedin.com/in/sai-keerthana1703](https://linkedin.com/in/sai-keerthana1703) &nbsp;|&nbsp; **GitHub →** [github.com/Patil1703](https://github.com/Patil1703)

---

## About This Project

A modern, fully responsive personal portfolio website built with pure HTML5, CSS3, and Vanilla JavaScript — no frameworks, no build tools, no dependencies. Designed to showcase cybersecurity expertise, development projects, and professional experience in a recruiter-friendly format.

---

## Features

- **Dark / Light theme toggle** — detects OS preference on first visit, persists via localStorage
- **Typing animation** — cycles through professional titles in the hero section
- **Decorative terminal widget** — cybersecurity-themed hero background element
- **Certifications ticker** — auto-scrolling strip listing all certifications
- **Scroll reveal animations** — IntersectionObserver-based, no library needed
- **Animated skill bars** — fill on scroll to their proficiency level
- **Count-up stats** — animated numbers in the About section
- **Contact form** — real-time field validation with loading state and success message
- **Resume download** — direct PDF download from the nav and mobile menu
- **Reading progress bar** — thin accent line at the top of the page
- **3D tilt effect** — subtle perspective transform on project cards on hover
- **Fully responsive** — mobile, tablet, and desktop layouts
- **Accessible** — ARIA labels, semantic HTML, keyboard navigation, focus styles
- **SEO ready** — meta description, OpenGraph, and Twitter Card tags

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic elements, ARIA) |
| Styles | CSS3 (custom properties, Grid, Flexbox, keyframe animations) |
| Logic | Vanilla JavaScript ES6+ (no libraries) |
| Fonts | Syne (display) + DM Sans (body) + JetBrains Mono (code) |
| Hosting | GitHub Pages / Netlify |

---

## Folder Structure

```
portfolio/
├── index.html                    # Main HTML — all sections
├── css/
│   └── styles.css                # Design tokens, components, responsive styles
├── js/
│   └── script.js                 # All interactivity — loader, theme, typing, forms
├── assets/
│   └── sai_keerthana_resume.pdf  # Downloadable resume
└── README.md
```

---

## Sections

| Section | Content |
|---|---|
| **Hero** | Name, animated title, description, CTA buttons, social links, terminal widget |
| **About** | Bio, stats (3 internships, 5K readers, 92% ML accuracy), badges, avatar |
| **Certifications** | Auto-scrolling ticker — Microsoft AI-900, Razz Security, and more |
| **Skills** | Cybersecurity (OWASP, MITRE ATT&CK, Nmap), Development (Python, Flask), Tools |
| **Experience** | Timeline — Appfend, Eficens Systems, Unified Mentor, TheCyberDelta, ICFAI |
| **Projects** | PhishMap, URL Shortener, Linux Security Auditing |
| **Contact** | Email, phone, location, LinkedIn + validated contact form |

---

## Getting Started

No build step needed — just open in a browser.

```bash
git clone https://github.com/Patil1703/portfolio.git
cd portfolio
open index.html
# or use VS Code Live Server for hot reload
```

---

## Deployment

### GitHub Pages

```bash
git init
git add .
git commit -m "feat: launch portfolio v1.0"
git branch -M main
git remote add origin https://github.com/Patil1703/portfolio.git
git push -u origin main
```

Then: **GitHub → Repository Settings → Pages → Source: Deploy from branch → main → / (root) → Save**

Your site will be live at `https://patil1703.github.io/portfolio` within a few minutes.

### Netlify (alternative)

1. Go to [netlify.com](https://netlify.com) and log in
2. Click **Add new site → Import an existing project**
3. Connect your GitHub repo — Netlify auto-deploys on every push
4. Or drag-and-drop the project folder directly for instant deployment

---

## Contact Form Setup

The form currently simulates a submission (1.8s fake delay). To make it live, replace the `setTimeout` in `js/script.js` with one of these:

**Formspree (easiest — free tier available):**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Netlify Forms (if hosted on Netlify):**
```html
<form data-netlify="true" name="contact">
```

**EmailJS (keep the JS approach, no backend):**
```js
emailjs.send('service_id', 'template_id', formData);
```

---

## Git Commit History (Suggested)

```
feat: initial portfolio scaffold with semantic HTML structure
feat: add design system — CSS custom properties, dark/light themes
feat: hero section with typing animation and terminal widget
feat: certifications scrolling ticker strip
feat: skills section with animated progress bars
feat: experience and education timeline
feat: projects section with cybersecurity-themed cards
feat: contact section with real-time form validation
feat: scroll reveal, count-up stats, back-to-top button
feat: mobile navigation with hamburger menu
feat: reading progress bar and 3D card tilt effect
a11y: add ARIA labels, skip link, keyboard navigation
seo: add OpenGraph and Twitter Card meta tags
docs: add README with deployment guide
```

---

## Design System

| Token | Value |
|---|---|
| Primary accent | `#7c6af7` (violet) |
| Secondary accent | `#38c9a8` (teal) |
| Founder highlight | `#f0c060` (amber) |
| Font — Display | Syne, weight 700–800 |
| Font — Body | DM Sans, weight 300–500 |
| Font — Code | JetBrains Mono, weight 400–500 |

---

## Contact

**Sai Keerthana** · keerthanapatil17@gmail.com · +91 7995732076 · Hyderabad, India