# INNOVA TECH FEST 2026 — Official College Portal

A modern, futuristic, responsive, and accessible digital portal designed for college annual technology festivals. Engineered specifically for guests, participants, coordinators, and visitors.

---

## 🚀 Key Highlights & Architecture

- **Futuristic Cyber-Tech Aesthetic**: Deep dark theme with glowing neon accents (cyan, purple, emerald, amber), subtle ambient grid patterns, and lightweight interactive constellation particle canvas.
- **100% Admin-Friendly Centralized Data**: All programs, timetable schedules, coordinators, venues, emergency numbers, FAQs, sponsors, and college details are defined in a single configuration file (`js/fest-data.js`). Changing details here dynamically updates the entire website without touching HTML.
- **Fast & Zero-Dependency**: Vanilla HTML5, modern CSS3, and ES6 JavaScript. No npm installs, build tools, or server-side runtimes required. Works immediately in any browser by double-clicking `index.html`.
- **Fully Responsive**: Optimized for mobile phones (with slide-out drawer, touch-friendly tap targets, and sticky emergency quick-dial), tablets, and high-resolution desktop screens.
- **Accessible & Interactive**:
  - Live real-time digital countdown timer.
  - Multi-category event filtering and instant search across event names, venues, and coordinators.
  - Accessible modal dialog for detailed program rules, eligibility, equipment requirements, prizes, and coordinator contacts.
  - Master multi-day schedule with Day 1 / Day 2 / All Days tabs, category filters, and venue filters.
  - Campus wayfinding guide with walking directions, room/floor numbers, and Google Maps integration.
  - Dedicated Coordinators Directory with direct one-tap Call (`tel:`), Email (`mailto:`), and WhatsApp links.
  - Dedicated Emergency & Quick Help system with top announcement bar and floating quick-dial sheet.
  - Photo gallery with filterable tags and fullscreen lightbox preview.
  - Interactive guest help contact form with real-time feedback.
  - Expandable FAQ accordions and visitor instructions.

---

## 📁 Project Structure

```text
tech-fest-website/
├── index.html            # Main semantic HTML5 document
├── css/
│   └── styles.css        # Futuristic theme, design tokens, animations & responsive rules
├── js/
│   ├── fest-data.js      # Centralized event data repository (single source of truth)
│   └── app.js            # Reactive rendering, search, modals, countdown, canvas & events
└── README.md             # Documentation & customization guide
```

---

## 🛠️ How to Customize for Your College

To customize the website for your own college festival, open **`js/fest-data.js`**. The file is organized into clearly commented sections:

1. **`FEST_DATA.config`**:
   - `festName`: e.g. `"CYBERPULSE 2026"`
   - `collegeName`: e.g. `"National Institute of Technology"`
   - `tagline`: e.g. `"Where Technology Meets Innovation"`
   - `eventDate`: e.g. `"October 16 – 17, 2026"`
   - `venue`: e.g. `"East Campus Auditorium & Tech Park"`
   - `collegeAddress`: Complete postal address
   - `collegeEmail`: Inquiries email address
   - `collegePhone`: Help desk phone number
   - `whatsappNumber`: Phone number with country code (e.g. `919876543210`)
   - `countdownTarget`: ISO date string for timer (e.g. `"2026-10-16T09:00:00"`)

2. **`FEST_DATA.venues`**:
   - Add, edit, or remove campus locations. Each venue has building name, floor, room number, directions, capacity, and Google Maps search query.

3. **`FEST_DATA.programs`**:
   - Each event card contains: title, category, schedule time, venue, team size, registration fee, prizes (1st, 2nd, 3rd), eligibility, rules, required equipment, and assigned coordinator.

4. **`FEST_DATA.schedule`**:
   - Master timetable with Day 1 and Day 2 sessions.

5. **`FEST_DATA.coordinators`**:
   - Grouped into Overall Leads, Faculty Conveners, Student Leads, Program In-Charges, and Technical Support with direct call and WhatsApp buttons.

6. **`FEST_DATA.emergency`**:
   - Quick help desk, security control, medical emergency room, and technical support.

7. **`FEST_DATA.faqs` & `FEST_DATA.importantInfo`**:
   - Expandable FAQ accordions and visitor guidelines.

---

## 💻 How to Run the Website

### Option 1: Direct File Open
Simply double-click **`index.html`** or right-click & choose **Open with Google Chrome / Microsoft Edge / Firefox / Safari**.

### Option 2: Live Server (VS Code)
If using Visual Studio Code:
1. Install the "Live Server" extension.
2. Right-click `index.html` and choose **"Open with Live Server"**.

### Option 3: Python (Optional)
If Python is installed:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.

---

## 📱 Mobile & Accessibility Best Practices
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<dialog>` / `role="dialog"`).
- Keyboard accessible modal navigation (press `Escape` to close, `ArrowLeft` / `ArrowRight` in lightbox).
- One-tap dial links (`tel:`) and instant WhatsApp chat pre-fills (`https://wa.me/...`) for mobile users.
- Fast-loading pure CSS and vanilla JS without heavy external third-party script overhead.
