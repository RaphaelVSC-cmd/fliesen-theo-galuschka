# Product Requirements Document (PRD) – Fliesen Theo Galuschka
**Tier: 1 (Gold)** | Erstellt: 09.09.2026 | Version: 6.1

---

## 1. Projekt-Überblick & Positionierung
- **Unternehmen:** Fliesen Theo Galuschka (Fliesenfachbetrieb)
- **Inhaber:** Theo Galuschka
- **Standort:** Schlichtstraße 31 / Gret-Gilm-Weg 1, 85055 Ingolstadt (Ortsteil Etting)
- **Kernziel:** Schaffung einer erstklassigen, redaktionell hochwertigen B2B-Web-Präsenz, die das veraltete Verzeichnisportal ablöst, Theos makellose 5,0-Sterne-Handwerksreputation sichtbar macht und profitable Komplettbad- und Terrassenprojekte (ab 8.000 € bis 35.000 €) direkt auf sein Telefon bringt.
- **Zielgruppe:** Haus- und Wohnungseigentümer in Ingolstadt, Etting, Gaimersheim, Friedrichshofen, Wettstetten, Lenting und Umgebung, die Wert auf persönliche Meisterbetreuung, Sauberkeit und millimetergenaue Fugenführung legen.

---

## 2. Strategie & B2B-Seiten-Grammatik

### Gewählte Grammatik: **Grammatik 3: The Craft Editorial (Tradition, Werte & Meisterliche Handschrift)**
- **Warum diese Grammatik?**
  Theo Galuschka ist kein unpersönlicher Großkonzern und kein hektischer Notdienst-Vermittler. Er steht für ehrliche Ingolstädter Handwerkskunst, über 25 Jahre Berufserfahrung und 100% zufriedene Kunden. Ein Editorial-Magazin-Layout mit edler Typografie, echten Baustellenbildern und transparenten Sanierungsphasen schafft das maximale Vertrauen für fünfstellige Bauvorhaben.
- **Vorschriften dieser Grammatik:**
  - Großzügige, ruhige Typografie mit Charakter (Instrument Serif / Plus Jakarta Sans).
  - Redaktionelle Struktur mit Leitbild, echten Werkzeug- und Bauphasen-Beweisen.
  - Haptische, spürbare Materialität statt steriler Vektorgrafiken.
- **Strenge Verbote:**
  - Keine grellen Dark-Mode-Neon-Farben.
  - Keine kitschigen Emojis oder generischen Stock-Illustrationen.
  - Keine schmalen, isolierten 900px-Container auf Widescreen-Monitoren.

---

## 3. Brand Climate & Farb-Architektur

### Dolomit-Kalkstein & Tiefschiefer mit Terrakotta-/Cotto-Akzent (`data-theme="light"`)
- **`--sc-canvas`:** `#F7F6F2` (Feinster warmer Kalkstein-Ton)
- **`--sc-surface`:** `#FFFFFF` (Kristallines Reinst-Weiß mit dezenten Fugenlinien)
- **`--sc-surface-alt`:** `#EFECE5` (Getönte Werkstoff-Fläche)
- **`--sc-ink`:** `#161A1D` (Tiefes Schiefer-Graphit für kompromisslosen WCAG-Kontrast > 11:1)
- **`--sc-ink-muted`:** `#5C646B` (Getöntes Mineralgrau, niemals flaches #888)
- **`--sc-accent`:** `#B85028` (Warmer Terrakotta-/Cotto-Ton, inspiriert von italienischen Bodenfliesen)
- **`--sc-accent-hover`:** `#9E401D`
- **`--sc-accent-glow`:** `rgba(184, 80, 40, 0.12)`
- **`--sc-border`:** `rgba(22, 26, 29, 0.08)`
- **`--sc-border-strong`:** `rgba(22, 26, 29, 0.16)`

---

## 4. Das Motion- & Interaktions-System (7 eigenständige Animationen)

Die Choreographie orientiert sich an der handwerklichen Präzision des Fliesenlegens (Fugenflucht, Setzen der Fliese, haptische Oberfläche):

1. **Hero Kinetic Typography (3D SplitType):**
   Die Headline teilt sich in Zeichen und Worte und rotiert mit 3D-Perspektive (`rotateX: -25deg`, Stagger 0.02s) in den Viewport ein.
2. **Continuous Rotating Stamp / Seal:**
   Kreisrundes Meister-Qualitätssiegel (`.rotating-seal`) mit der Aufschrift „FLIESEN THEO GALUSCHKA • INGOLSTADT • 5.0 STERNE • SEIT ÜBER 25 JAHREN •“, das sich kontinuierlich um die eigene Achse dreht.
3. **Editorial Text-Scrubbing (Apple-Style Dim-to-Reveal):**
   Das Qualitäts- und Staubschutz-Versprechen ist anfangs auf `opacity: 0.2` gedimmt und wird beim Herunterscrollen Wort für Wort auf 100% Deckkraft aufgedeckt.
4. **Interactive Before/After Slider (Vorher-Nachher-Vergleich):**
   Interaktiver Ziehregler mit Trennlinie: Rohbau-Stadium (Trockenbau, Estrich, unverputzte Nischen) vs. vollendetes Meisterbad mit exakter Fugenflucht.
5. **Native CSS-3D Perspective Tilt & Parallax (0 KB Payload):**
   Die Leistungskarten neigen sich bei Mausbewegung feinfühlig im 3D-Raum (`perspective: 1200px`), Icons und Güte-Badges schweben mit `translateZ(30px)` davor. Auf Mobilgeräten: Sanfter Scroll-Tilt.
6. **Dynamic Stat & Rating Counters:**
   Beim Eintritt in den Viewport zählen die Kennzahlen hoch: `5.0` Sterne, `25+` Jahre Erfahrung, `100%` Termintreue, `0` Staub-Kompromisse.
7. **Navbar Micro-Interactions & Scroll Morph:**
   Die Header-Leiste morpht beim ersten Scrollen in eine edle Glasmorphismus-Pille (`backdrop-filter: blur(16px)`), Nav-Links haben gleitende Hover-Unterstriche.

---

## 5. Das maßgeschneiderte Signature Feature (Archetyp 3)

### „Der Ingolstädter Bad- & Terrassen-Sanierungs-Inspektor“
- **Löst das Kernproblem:** Bauherren wissen selten, was ein Sanierungsvorhaben im Detail beinhaltet und welche Schritte nötig sind.
- **Interaktive Phasen:**
  1. **Bereich & Projekt:**
     - *Komplettbad & Barrierefreie Walk-In Dusche*
     - *Boden- & Wandverfliesung Großformat (Wohnen/Küche)*
     - *Terrasse & Balkon (frostsichere Outdoor-Platten)*
     - *Gewerbe-, Keller- & Hauswirtschaftsraum*
  2. **Interaktiver Vorher/Nachher-Inspektor:**
     - Echter Bildervergleich (z. B. unfertige Wanne/Trockenbau vs. vollendetes Meisterbad).
     - Zuschaltbare Sanierungs-Details (Untergrundausgleich Knauf Brio, DIN 18534 Verbundabdichtung, Lasereinmessung, Jolly-Gehrung).
  3. **Material- & Fugen-Präferenz:**
     - *Feinsteinzeug Großformat (60x120 / 120x120 cm)*
     - *Naturstein- & Travertin-Optik*
     - *Moderne Metro- / Mosaikfliesen*
     - *Robuste Terrassen-Keramik (R11 Trittsicherheit)*
  4. **Kalkulations-Richtwert & WhatsApp-1-Klick-Übergabe:**
     - Flächen-Schieberegler (10 m² bis 120 m²).
     - Berechnung von Richtzeitfenster (z. B. 4-7 Werktage für Komplettbad) und Vor-Ort-Aufmaß-Anfrage direkt im WhatsApp-Chat an Theo Galuschka.

---

## 6. Tageszeit-Personalisierung

Integrierte Begrüßungs-Engine im Hero (`initTimeGreeting`):
- **06:00 – 11:59 Uhr:** „Guten Morgen — Fliesen Theo Galuschka heißt Sie willkommen.“
- **12:00 – 17:59 Uhr:** „Guten Tag — Ihr Meisterbetrieb für Fliesen & Badsanierung in Ingolstadt.“
- **18:00 – 05:59 Uhr:** „Guten Abend — Planen Sie Ihr neues Traumbad? Schreiben Sie uns direkt per WhatsApp.“

---

## 7. Full-Canvas Raumnutzungs-Gesetz (Anti-Insel-Architektur)
- Containerbreite: `max-width: 1440px` (fluid: `min(94vw, 1440px)`).
- Hero-Widescreen-Balance: Spaltengröße 54% Text/CTA, 46% Bildbühne mit dynamischem Gap (`clamp(2rem, 4vw, 4.5rem)`).
- Leistungs- und Phasenraster: 4 Spalten auf Desktop (`repeat(4, 1fr)`), 2 Spalten auf Tablet, 1 Spalte mobil.

---

## 8. Rechtliche & Technische Guardrails
- **§ 5 DDG Impressum:** Theo Galuschka, Schlichtstraße 31 / Gret-Gilm-Weg 1, 85055 Ingolstadt, Tel. 0841 57321 / 01590 1772970, E-Mail theo.fliesen@gmail.com, Handwerkskammer für München und Oberbayern, Handwerksordnung (HwO), § 36 VSBG.
- **DSGVO Art. 13/14:** Datenschutzerklärung mit Vercel-Hosting, jsDelivr CDN, Google Maps nach Einwilligung (TDDDG), Formspree.
- **Two-Click-Maps:** Google Maps geblockt via `data-src`, Consent-Banner mit gleichwertigen Buttons („Alle akzeptieren“ / „Nur notwendige“) und Re-Open Link im Footer.
- **Vektor-Favicon:** Handgefertigtes geometrisches Fliesen-Signet `favicon.svg`.
- **100% Mobile-First:** Getestet auf 375px ohne horizontalen Scroll.
