# Selbst-Audit - Fliesen Theo Galuschka | 09.09.2026

## Punkt 1: Blueprint-Check
- **Frage:** Sieht das aus wie ein Standard-Template (Bento + Cyan-Glow + Emoji-Kacheln)?
- **Antwort:** Nein. Die Seite folgt konsequent Grammatik 3 (The Craft Editorial). Warmes Dolomit-Kalkstein- & Tiefschiefer-Farbklima (`#F7F6F2`, `#161A1D`, `#B85028`), ruhige Playfair-Display- & Plus-Jakarta-Sans-Typografie, rotierender handwerklicher Meisterstempel und echte Baustellenfotos aus Ingolstadt. Keine Neonfarben, keine Emojis als Icons.
- **Versuche:** 1/3
- **Status:** PASS

## Punkt 2: Innovations-Check
- **Frage:** Einzigartiges Feature vorhanden, das lokaler Konkurrenz fehlt?
- **Feature:** „Der Ingolstädter Bad- & Terrassen-Sanierungs-Inspektor“ (Archetyp 3) mit interaktivem Vorher-Nachher-Schieberegler (echte Baustellen-Bilder vs. fertiges Meisterbad), dynamischer Bauzeit- und Richtwert-Berechnung und 1-Klick-WhatsApp-Direktübergabe an Theo Galuschka.
- **Versuche:** 1/3
- **Status:** PASS

## Punkt 3: Container 375px (iPhone SE)
- **Frage:** Kein horizontaler Overflow, keine abgeschnittenen Texte, kein Scrollbalken?
- **Test:** Alle Buttons und Container besitzen `max-width: 100%; box-sizing: border-box; word-break: break-word;`, `main { overflow-x: clip; }`, Touch-Targets $\ge 48\times 48\text{px}$.
- **Versuche:** 1/3
- **Status:** PASS

## Punkt 3B: Desktop-Navbar & Breakpoint-Safety (1024px & 1280px)
- **Frage:** Bricht die Navbar unschön um oder werden Menüpunkte gestaucht?
- **Test:** Dynamischer Breakpoint greift ab `max-width: 1024px` (Hamburger aktiviert). Bei 1280px und 1440px hat die Nav-Bar `white-space: nowrap` und eine Headerhöhe $\le 76\text{px}$.
- **Versuche:** 1/3
- **Status:** PASS

## Punkt 3C: Full-Canvas Raumnutzung & Widescreen-Harmonie (1280px & 1440px)
- **Frage:** Nutzt die Seite die volle Breite harmonisch aus oder klebt der Inhalt mittig als schmale Insel?
- **Test:** Container auf `max-width: 1440px` dimensioniert. Hero-Grid nutzt 1.14fr zu 0.86fr mit dyn. Gap (`clamp(2.5rem, 4vw, 4.5rem)`). Das Leistungsraster spannt sich im 4-Spalten-Grid (`repeat(4, 1fr)`) über die gesamte Breite.
- **Versuche:** 1/3
- **Status:** PASS

## Punkt 4: Motion- & Interaktions-System (MINDESTENS 5 Animationen & Maßschneiderung)
- **Frage:** Sind MINDESTENS 5 eigenständige, hochklassige Animationen/Interaktionen aktiv und passend zur Marke inszeniert?
- **Aktive Primitiven (8 aktiv):**
  1. Kinetic Typography (SplitType chars/words mit 3D rotateX)
  2. Scroll Reveal Fade-Up & Blur (`[data-animate="fade-up"]`)
  3. Native CSS-3D Perspective Tilt auf Leistungskarten
  4. Dynamic Stat & Rating Counters (5.0 Google Score, 25+ Jahre Erfahrung)
  5. Editorial Text-Scrubbing / Dim-to-Reveal auf das Meisterversprechen
  6. Interactive Before/After Slider mit Touch & Mouse Drag
  7. Continuous Rotating Seal (Qualitätsstempel dreht sich beim Scrollen)
  8. Navbar Hover Micro-Interactions
- **Unternehmens-Metapher:** Präzise handwerkliche Fugenflucht, Setzen der Fliese, Transparenz von Rohbau bis Vollendung.
- **Versuche:** 1/3
- **Status:** PASS

## Punkt 5: Daumen-Test & Funktional-Check 375px
- Navigation öffnet/schließt barrierefrei: PASS
- Mobile-Anchor-Scroll-Test: Menü schließt und scrollt nach 80ms zum Zielanker: PASS
- Ghost-Overlay Check: Pointer-Events unblockiert: PASS
- Scroll-Lock Deadlock Guard: Lenis und Body-Overflow nach Menüschließung frei: PASS
- Touch-Safe Hover Guard: `@media (hover: hover)` verhindert Sticky-Hover auf Touchscreens: PASS
- Signature Feature per Daumen bedienbar: PASS
- WhatsApp-Widget sichtbar und klickbar: PASS

## Punkt 6: Legal & SEO (Zero-Hallucination-Check)
- `favicon.svg` als physische Vektordatei im Root vorhanden: PASS
- Impressum § 5 DDG mit Inhaber Theo Galuschka, Schlichtstr. 31, HWK München & HwO: PASS
- Datenschutz Art. 13/14 vollständig: PASS
- Cookie-Banner mit gleichwertigen Buttons („Alle akzeptieren“ / „Nur notwendige“) & Re-Open Link: PASS
- Google Maps über `data-src` geblockt (Two-Click-Verfahren): PASS
- Schema.org JSON-LD (`HomeAndConstructionBusiness` + `FAQPage`): PASS
- Title (64 Zeichen) & Description (149 Zeichen): PASS
- Plausible / Clarity Platzhalter gesetzt: PASS
- `vercel.json` Security Headers & `manifest.webmanifest` PWA: PASS

## Punkt 7: Authentizität
- **Frage:** Keine KI-Phrasen („wir sind stolz darauf“, „höchste Qualitätsstandards“)?
- **Ergebnis:** Bodendständige, klare Sprache des Handwerks („akribische Vorarbeit“, „millimetergenaue 1mm-Fugenflucht“, „Staubschutz-Paket“, „keine Überzähne“).
- **Status:** PASS

## Gesamt-TODOS aus diesem Audit:
- [ ] [MANUELL PRUEFEN: Handwerkskammer-Eintragsnummer - Quelle: hwk-muenchen.de]
- [ ] SETUP: Formspree Form-ID in index.html eintragen
- [ ] SETUP: Plausible.io Domain eintragen
