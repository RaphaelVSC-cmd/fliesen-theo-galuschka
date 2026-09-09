# Fliesen Theo Galuschka – Meisterbetrieb Ingolstadt

> **Bespoke B2B Web-Visitenkarte & Sanierungs-Plattform (v6.1 - Resilient Execution Engine)**  
> **Kunde:** Fliesen Theo Galuschka (Inhaber: Theo Galuschka)  
> **Standort:** Schlichtstraße 31 / Gret-Gilm-Weg 1, 85055 Ingolstadt  
> **Live-URL:** [https://fliesen-theo-galuschka.vercel.app](https://fliesen-theo-galuschka.vercel.app)  
> **GitHub Repository:** [https://github.com/RaphaelVSC-cmd/fliesen-theo-galuschka](https://github.com/RaphaelVSC-cmd/fliesen-theo-galuschka)  
> **Tier-Klassifikation:** TIER 1 (Gold-Standard)

---

## 🎯 Über das Projekt
Theo Galuschka ist ein angesehener Ingolstädter Fliesenlegermeister mit einer perfekten **5,0-Sterne-Bewertung auf Google**. Bislang verlinkte sein Google-Unternehmensprofil auf ein fremdes Branchenverzeichnis (`fliesenleger.io`), das sogar eine fremde Baufirma anzeigte.

Diese maßgeschneiderte Web-Präsenz schließt diese Lücke und positioniert Theo Galuschka als führenden Meisterbetrieb für Komplettbadsanierungen, barrierefreie Walk-In Duschen, Großformatverlegung und Terrassenbeläge in Ingolstadt und Umland.

---

## ✨ Technische & Konzeptionelle Highlights

1. **B2B-Seiten-Grammatik 3 (The Craft Editorial):**
   - Edles Dolomit-Kalkstein- & Tiefschiefer-Farbklima (`#F7F6F2`, `#161A1D`) mit warmem Terrakotta-Akzent (`#B85028`).
   - Typografie: *Playfair Display* & *Plus Jakarta Sans* für ruhige, meisterhafte Eleganz.
   - Kein billiger KI-Einheitsbrei, keine Krypto-Neonfarben.

2. **Signature Feature: Der Ingolstädter Sanierungs-Inspektor (Archetyp 3):**
   - Interaktiver Vorher-Nachher-Schieberegler mit echten Baustellen- und Projektfotos.
   - Dynamischer Flächen- und Richtwert-Kalkulator (Projektwahl: Bad, Großformatboden, Terrasse).
   - Vorqualifizierte 1-Klick WhatsApp-Übergabe aller Projektparameter direkt an Theo Galuschka.

3. **Motion- & Interaktions-System (8 aktive GSAP- & Lenis-Primitiven):**
   - *Lenis Smooth Scroll* mit nativer Touch-Entkopplung für Smartphones.
   - *Hero Kinetic Typography* mit 3D SplitType (`rotateX: -25deg`).
   - *Continuous Rotating Stamp:* Kreisrundes Meister-Qualitätssiegel, das sich kontinuierlich beim Scrollen dreht.
   - *Editorial Text-Scrubbing:* Apple-Style Dim-to-Reveal auf das Meisterversprechen.
   - *Native CSS-3D Perspective Tilt:* Feinfühlige 3D-Neigung aller Leistungskarten.
   - *Dynamic Stat Counters:* Hochzählen von Google-Score (5.0), Jahren Erfahrung (25+) und Projekten.

4. **100% Rechtskonform nach deutschem & EU-Recht:**
   - **§ 5 DDG Impressum** (Digitale-Dienste-Gesetz, hat TMG abgelöst) inkl. Handwerkskammer für München und Oberbayern sowie HwO-Verweis.
   - **DSGVO Art. 13/14 Datenschutzerklärung** mit allen Betroffenenrechten und Hoster-Transparenz.
   - **TDDDG Two-Click-Maps:** Google Maps lädt über `data-src` erst nach informierter Einwilligung im Consent-Banner oder Direktklick.
   - Physisches Vektor-Signet `favicon.svg` im Projektroot (kein Emoji, kein Data-URL).

5. **Performance & Mobile-First (Addy-Osmani-Suite):**
   - `content-visibility: auto` für maximalen Rendering-Boost auf Smartphones.
   - Hero-LCP-Bild mit `fetchpriority="high"` und Vorab-Preload.
   - Zero-Collision auf 375px (iPhone SE).
   - Dynamischer Nav-Breakpoint bei 1024px gegen unschöne Zeilenumbrüche.

---

## 📁 Projektstruktur
```
Projekte/fliesen-theo-galuschka/
├── index.html               # Semantische HTML5-Struktur mit Schema.org & Modals
├── style.css                # Design-System Tokens, 3D-Engine, Full-Canvas Layout
├── app.js                   # Lenis, GSAP, Consent-Manager, Inspektor-Logik
├── favicon.svg              # Geometrisches Vektor-Signet mit Fliesenraster
├── robots.txt               # SEO Crawler-Steuerung
├── sitemap.xml              # Google Sitemap
├── manifest.webmanifest     # Progressive Web App Manifest
├── vercel.json              # HTTP Security Headers (nosniff, SAMEORIGIN etc.)
├── assets/
│   └── images/              # Echte Baustellen- und Projektfotos
├── docs/
│   ├── lead-data.md         # Deep Discovery & Zero-Hallucination Fakten
│   ├── prd.md               # Product Requirements Document & Motion Budget
│   ├── review.md            # Selbst-Audit nach 7-Punkte-Plan
│   ├── audit-report.md      # 8-Säulen-Master-Audit (100% Grün)
│   └── ANLEITUNG.md         # Übergabe- & Einrichtungsanleitung für den Kunden
├── FINGERPRINTS.md          # Anti-Klischee-Differenzierungs-Manifest
├── TODOS.md                 # Offene Aufgaben & Kundendaten-Tracking
└── README.md
```
