# Umanah Systems Group — Website Mockup

A professional, fully responsive one-page marketing website for **Umanah Systems Group**, a dual-use technology company building mission-critical systems for defense and civil infrastructure.

---

## ✅ Completed Features

| Section | Description |
|---|---|
| **Navigation** | Fixed top bar with smooth-scroll links, scroll-aware glass styling, mobile hamburger menu |
| **Hero** | Full-viewport hero with animated grid background, glowing orbs, badge, headline, CTA buttons, and stat chips |
| **Value Props** | 4-column highlights: Mission-Critical Focus, Governed Execution, Sovereign Manufacturing, Dual-Use Deployment |
| **About** | Two-column layout with animated orbital card stack (Compute, Sensing, Propulsion, Power) and company description |
| **Crucible** | Platform section with header, description, and 3 feature cards (Controlled Production, Stress Validation, Traceable Configuration) |
| **Reydious** | Two-column layout with platform description and 3 pillar cards (Rule Enforcement, Real-Time Monitoring, Integration-Ready) |
| **Core Capabilities** | 5-item card grid covering all major capability areas |
| **Mission** | Large centered pull-quote section |
| **Contact** | Two-column layout with company info, email link, and functional contact form (with simulated send + success state) |
| **Footer** | Brand logo, nav links, copyright |
| **Scroll Reveal** | All content sections animate in on scroll with stagger delay |
| **Parallax** | Hero glow orbs move subtly on scroll |
| **Responsive Design** | Fully responsive for desktop, tablet, and mobile |

---

## 🗂️ Project Structure

```
index.html          — Self-contained single-file website (HTML + CSS + JS)
css/style.css       — Standalone CSS (also embedded in index.html)
js/main.js          — Standalone JS (also embedded in index.html)
README.md           — This file
```

> **Note:** `index.html` is fully self-contained (styles and scripts are inlined) to ensure correct rendering in all environments. The `css/` and `js/` files are also provided for reference.

---

## 🔗 Entry Points

| Path | Description |
|---|---|
| `/` → `index.html` | Main one-pager website |
| `#about` | About / company overview section |
| `#crucible` | Crucible platform section |
| `#reydious` | Reydious platform section |
| `#capabilities` | Core capabilities section |
| `#contact` | Contact section with form |

---

## 🎨 Design System

- **Color palette:** Dark base (`#08090c`), orange accent (`#e8611a`), blue accent (`#5b8dee`)
- **Typography:** Space Grotesk (display/headings) + Inter (body)
- **Icons:** Font Awesome 6 Free (via jsDelivr CDN)
- **Animations:** CSS keyframes + IntersectionObserver scroll reveals

---

## 🚧 Features Not Yet Implemented

- [ ] Real form backend / email delivery (requires server-side or third-party service like Formspree)
- [ ] Blog / news section
- [ ] Team / leadership profiles
- [ ] Case studies or project portfolio
- [ ] Press / media kit page
- [ ] Careers section

---

## 💡 Recommended Next Steps

1. **Connect contact form** to a service like [Formspree](https://formspree.io), [EmailJS](https://emailjs.com), or [Web3Forms](https://web3forms.com)
2. **Add a favicon** using the USG brand identity
3. **Replace placeholder content** with final approved copy and real photography/renders
4. **SEO setup** — add `<meta>` description, Open Graph tags, and structured data
5. **Deploy** via the Publish tab for a live URL
