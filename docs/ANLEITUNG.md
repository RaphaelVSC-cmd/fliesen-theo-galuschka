# Übergabe- & Einrichtungsanleitung – Fliesen Theo Galuschka

Sehr geehrter Herr Galuschka,  
herzlich willkommen zu Ihrer neuen, maßgeschneiderten Website! Dieses Dokument erklärt Ihnen in einfachen Schritten, wie Ihre Web-Präsenz aufgebaut ist und wie Sie die wichtigsten Funktionen bei Bedarf anpassen können.

---

## 1. Was wurde gebaut?
Ihre Website wurde nach modernsten Standards für das Bau- und Ausbauhandwerk als **digitales Meistermagazin (Craft Editorial)** entwickelt.

Das Herzstück ist **„Der Ingolstädter Sanierungs-Inspektor“**:
- Ihre Kunden können interaktiv zwischen Vorher- und Nachher-Zuständen einer Sanierung wechseln und die handwerkliche Qualität (Verbundabdichtung, Trockenbau, Estrich) direkt sehen.
- Über einen intuitiven Flächenschieberegler wählen Interessenten ihr Projekt (Komplettbad, Großformatboden, Terrasse) und erhalten sofort transparente Richtwerte für Bauzeit und Kostenkorridore.
- Mit einem Klick auf den grünen WhatsApp-Button wird die gesamte Konfiguration sauber vorformuliert direkt an Ihr Smartphone gesendet – so sparen Sie zeitraubende Vorgespräche und erhalten qualifizierte Anfragen.

---

## 2. Das Kontaktformular aktivieren (Formspree – in 4 Schritten)
Das Kontaktformular auf Ihrer Website ist für den Dienst **Formspree** vorbereitet, der Anfragen direkt an Ihre E-Mail (`theo.fliesen@gmail.com`) weiterleitet.

1. Gehen Sie auf [https://formspree.io](https://formspree.io) und registrieren Sie sich kostenlos mit Ihrer E-Mail-Adresse.
2. Klicken Sie auf **„+ New Form“**, vergeben Sie den Namen `Galuschka Anfragen` und tragen Sie Ihre Ziel-E-Mail ein.
3. Kopieren Sie die generierte Endpoint-ID (z. B. `xpzvabcd`).
4. Öffnen Sie `index.html` und ersetzen Sie in Zeile 426 `YOUR_FORM_ID` durch Ihren Code:
   ```html
   <form id="contactForm" action="https://formspree.io/f/xpzvabcd" method="POST" ...>
   ```

---

## 3. Besucher-Statistiken aktivieren (Plausible.io oder Microsoft Clarity)
Ihre Website enthält vorbereitete, datenschutzkonforme Platzhalter für Besucherstatistiken.

### Option A: Plausible.io (Empfohlen – 100% DSGVO-konform ohne Cookie-Banner)
1. Account auf [https://plausible.io](https://plausible.io) erstellen und Ihre Domain hinzufügen (z. B. `fliesen-galuschka.de`).
2. In `index.html` im `<head>`-Bereich (ca. Zeile 35) die Kommentarzeichen `<!--` und `-->` um folgende Zeile entfernen:
   ```html
   <script defer data-domain="fliesen-galuschka.de" src="https://plausible.io/js/script.js"></script>
   ```

### Option B: Microsoft Clarity (Kostenlos mit Live-Heatmaps & Klick-Aufzeichnungen)
1. Projekt auf [https://clarity.microsoft.com](https://clarity.microsoft.com) anlegen.
2. Ihre Projekt-ID in den vorbereiteten Skriptblock in `index.html` eintragen und einkommentieren.

---

## 4. Eigene Domain aufschalten (z. B. www.fliesen-galuschka.de)
Um Ihre Website unter Ihrer eigenen Wunsch-Domain laufen zu lassen:
1. Melden Sie sich bei Ihrem Domain-Provider (z. B. Strato, IONOS, All-Inkl) an.
2. Gehen Sie in die **DNS-Einstellungen** Ihrer Domain.
3. Fügen Sie folgenden CNAME-Eintrag hinzu:
   - **Typ:** `CNAME`
   - **Subdomain:** `www`
   - **Ziel / Wert:** `cname.vercel-dns.com`
4. Für die Hauptdomain (ohne www):
   - **Typ:** `A`
   - **Ziel / Wert:** `76.76.21.21`

---

## 5. Was Sie selbst anpassen können
Alle Texte und Kontaktdaten liegen in der Datei `index.html` und können einfach mit einem beliebigen Texteditor bearbeitet werden:
- **Telefonnummern:** Suchen Sie nach `0841 57321` oder `01590 1772970`.
- **Öffnungszeiten:** Suchen Sie nach `Öffnungszeiten` oder `07:30 – 18:00`.
- **Preise im Inspektor:** Die Richtwerte können in `app.js` unter `projectConfig` in Zeile 360 jederzeit angepasst werden.

---

## 6. Ihr persönlicher Support & Wartung
Haben Sie Fragen, möchten neue Fotos einpflegen lassen oder eine Textänderung vornehmen?

- **Ansprechpartner:** Raphael Neumeier (Webdesign & B2B-Entwicklung, Ingolstadt)
- **Telefon / WhatsApp:** +49 176 23509349
- **Reaktionszeit (SLA):** Änderungen werden werktags innerhalb von 24 Stunden zuverlässig umgesetzt.
