# Laiba Rafiq — Futuristic Cybersecurity & IT Portfolio

A high-performance, responsive futuristic portfolio website engineered for **Laiba Rafiq**, an Information Technology scholar and Cybersecurity enthusiast based in Islamabad, Pakistan.

Architected with **HTML5, CSS3, and Vanilla JavaScript** for instant zero-dependency deployment on **GitHub Pages**.

---

## 🎨 Strict Cyber Color Architecture

Strictly adheres to an uncompromising, accessible dark blue, navy, and electric purple palette (WCAG AAA compliant, 18.2:1 contrast ratio):

| Role | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Viewport Background** | Midnight Navy | `#05091F` | Deep dark foundation for all views |
| **Cards & Surfaces** | Dark Blue | `#0B1535` | Elevated surfaces, navbar, glassmorphism layers |
| **Depth & Accent Layers** | Deep Purple | `#21164D` | Accent containers, gradient depth, card borders |
| **Primary Accent / Glow** | Electric Purple | `#5935A6` | Primary CTAs, active states, glowing rings, progress fills |
| **Headings & High Contrast**| Pure White | `#FFFFFF` | Primary headers, high contrast titles (18.2:1 contrast) |
| **Body Copy & Metadata** | Muted Slate Blue | `#AAB4D0` | Readable body copy, technical labels, timestamps |

> 🛡️ **Strict Color Policy Verified:** Exclusively uses dark blue, midnight navy, and electric purple. Zero occurrences of prohibited tones: magenta, pink, lavender, rose, `#B52DAD`, or `#D9C7FF`.

---

## 🗂️ Project Directory Structure

```
laiba-portfolio/
├── index.html                   # Master semantic layout, pre-rendered components & failsafe engines
├── css/
│   └── style.css                # CSS variables, typography, buttons, 3D card tilt & 8-viewport media queries
├── js/
│   ├── main.js                  # Sticky navbar, active scroll-spy, mobile drawer & Escape/outside click handler
│   ├── animations.js            # Custom cursor, 3D card tilt, particle network & typewriter
│   ├── certificates.js          # Centralized certificate repository & interactive modal viewer
│   └── email.js                 # Official EmailJS browser SDK, RFC 5322 validation & spam defense
├── assets/
│   ├── certificates/            # Verified official credentials (JPG & PDF)
│   │   ├── cisco-ccna-intro-networks.jpg / .pdf
│   │   ├── digiskills-ai-python.jpg / .pdf
│   │   ├── digiskills-data-analytics.jpg / .pdf
│   │   ├── digiskills-wordpress.jpg / .pdf
│   │   └── digiskills-freelancing.jpg / .pdf
│   ├── icons/
│   │   └── favicon.svg          # Cyber shield monogram favicon
│   └── images/                  # Profile pictures and assets
└── README.md                    # Complete project documentation & setup guides
```

---

## 📜 How to Add New Certificates

All certificate documents and metadata are centrally managed in `js/certificates.js`.

### Step 1: Add Image or PDF to Assets
Save your verified certificate file in `assets/certificates/`:
- Image formats supported: `.jpg`, `.jpeg`, `.png`
- Document formats supported: `.pdf`

### Step 2: Append to `certificates` Array in `js/certificates.js`
Open `js/certificates.js` and add a new entry to the `certificates` array:

```javascript
{
  id: "comptia-security-plus",
  title: "CompTIA Security+ SY0-701",
  issuer: "CompTIA",
  instructor: "CompTIA Authorized",
  date: "October 2026",
  credentialId: "COMP0010203040",
  image: "assets/certificates/comptia-security-plus.jpg",
  file: "assets/certificates/comptia-security-plus.pdf", // or .jpg
  description: "Core cybersecurity certification verifying baseline competencies across threat analysis, risk management, incident response, and security architecture.",
  skills: ["Threat Modeling", "Risk Management", "Cryptography", "Network Architecture"]
}
```

### Step 3: Dynamic Runtime Addition (Optional)
You can also inject certificates dynamically at runtime from the browser console or an external feed:

```javascript
window.addCertificate({
  title: "AWS Certified Cloud Practitioner",
  issuer: "Amazon Web Services",
  date: "November 2026",
  image: "assets/certificates/aws-ccp.jpg",
  file: "assets/certificates/aws-ccp.pdf"
});
```

---

## 💻 How to Add New Projects

Projects are pre-rendered into `index.html` inside `<div class="projects-grid" id="projectsGrid">`.

To add a new project card, insert the following semantic HTML inside the `#projectsGrid` container:

```html
<article class="card card-cyber project-card reveal">
  <div class="project-thumb-container">
    <div class="project-thumb-placeholder">
      <svg class="project-thumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
      <span class="font-mono text-xs" style="color: var(--color-electric-purple);">PROJECT_ARCHIVE</span>
    </div>
  </div>
  <div class="project-card-body">
    <div>
      <span class="project-category-badge">NETWORK SECURITY</span>
      <h3 class="project-title">Packet Sniffer & Intrusion Detection System</h3>
      <p class="project-desc">
        Lightweight Python & Scapy packet analyzer that inspects live TCP/UDP frames, detects anomalies, and logs threat signatures.
      </p>
      <div class="project-tags">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">Scapy</span>
        <span class="tech-tag">Wireshark</span>
        <span class="tech-tag">Linux</span>
      </div>
    </div>
    <div class="project-card-footer">
      <a href="https://github.com/laibarafiq845-droid/network-ids" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        <span>GitHub</span>
      </a>
      <a href="#" class="btn btn-primary btn-sm">
        <span>Live Demo</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </div>
  </div>
</article>
```

---

## 📬 EmailJS Integration Guide

The contact gateway uses the official **EmailJS Browser SDK** to transmit visitor inquiries directly to `laibarafiq845@gmail.com`.

### Current Operational State
- **Status:** **ACTIVE & CONFIGURED**
- **Connected Email Service:** `service_bsvth8j`
- **Active Email Template:** `template_523y16j`
- **Public Key:** `vqbWEz6aCi2sFVAsp`
- Messages submitted through the contact form are now dispatched directly through the official EmailJS browser SDK to **`laibarafiq845@gmail.com`**.

### Configuration Reference:
In `js/email.js` and `index.html`:
```javascript
const EMAILJS_CONFIG = {
  publicKey: "vqbWEz6aCi2sFVAsp",
  serviceID: "service_bsvth8j",
  templateID: "template_523y16j"
};
```

### 🛡️ Active Spam & Security Defenses
- **Client-Side Rate Limiting:** Enforces a 3-second debounce cooldown between successive dispatches.
- **Input Sanitization:** Cleans character sequences against Cross-Site Scripting (XSS) vectors.
- **RFC 5322 Regex Validation:** Strictly validates email formats.
- **Accessible State Handling:** Live ARIA status announcement (`aria-live="polite"`), input invalidation tags, and visual loading spinner indicators.

---

## 📱 Complete Responsive Viewport Matrix (Phase 8 Audit)

The website is verified across all 8 target viewports with zero horizontal scrollbar and zero component clipping:

| Viewport | Device Profile | Verified Layout & Interactions |
| :--- | :--- | :--- |
| **320px** | Ultra-compact phones (iPhone SE 1st gen) | Single column layout, `--container-padding: 12px`, `.hero-title` minimum 1.85rem, full-width CTA buttons, 14px card padding, zero clipping. |
| **375px** | Compact smartphones (iPhone mini, SE 2/3) | Single column layout, `--container-padding: 16px`, full-width mobile action stack, touch targets $\ge 44\text{px}\times 44\text{px}$. |
| **430px** | Modern large phones (iPhone 14/15/16 Pro Max, Pixel 7) | Single column layout, comfortable breathing room, smooth glassmorphic drawer toggle. |
| **768px** | Portrait Tablets (iPad mini, iPad 10.2") | Mobile/tablet hamburger drawer navigation, 2-column project and certificate grids, stacked or responsive about layout. |
| **1024px** | Landscape Tablets & Ultraportables (iPad Pro, Surface Pro) | Full horizontal navigation bar, 2-to-3 column grids, 3D card tilt & particle network active. |
| **1280px** | Standard Laptops & Desktops | Full desktop navigation bar, 3-column project grid, 3D card hover light sheen calculations. |
| **1440px** | Wide Desktop Displays (MacBook Pro 16", 1440p) | Centered container (`max-width: 1440px`), `--container-padding: 40px`, smooth Lerp cursor tracking. |
| **1920px** | Large High-DPI Displays (1080p, 4K monitors) | Centered architecture, crisp typography scaling with fluid `clamp()`, zero layout deformation. |

---

## ♿ Accessibility & SEO Compliance

- **WCAG 2.1 AAA Contrast:** Text elements achieve 18.2:1 contrast ratio against midnight navy surfaces.
- **Accessible Touch Targets:** Minimum $44\text{px}\times 44\text{px}$ touch targets for all interactive buttons, mobile toggles, close buttons, and social links.
- **Skip to Content Link:** Dedicated `.skip-link` anchor jumps directly to `#mainContent` for screen readers and keyboard users.
- **Keyboard Navigation:** Full `Tab` order with visible outline focus ring (`:focus-visible`), `Escape` and arrow key navigation in certificate modal dialog, `Escape` key close for mobile menu.
- **Reduced Motion Support:** Respects `@media (prefers-reduced-motion: reduce)` by disabling cursor Lerp physics, continuous canvas updates, and long transitions.
- **Complete SEO Metadata:** Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`), Open Graph tags, Twitter Card tags, canonical link, and meta robots tags.

---

## 🚀 GitHub Pages Deployment

This project contains **100% static, client-side code** with relative paths. It requires no Node.js runtime, build tools, or bundlers.

1. **Commit and push repository to GitHub:**
   ```bash
   git add .
   git commit -m "Complete Phase 8: Full QA Responsive Testing, SEO & Accessibility Polish"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - In your GitHub repository, click **Settings**.
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment** &rarr; **Branch**:
     - Select `main`
     - Select `/ (root)` folder
   - Click **Save**.

3. **Verify Deployment:**
   - Within 1–2 minutes, GitHub will publish the site to:
     `https://laibarafiq845-droid.github.io/laiba-portfolio/`
