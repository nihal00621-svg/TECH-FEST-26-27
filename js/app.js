/**
 * ==============================================================================
 * INNOVA TECH FEST 2026 - MAIN APPLICATION SCRIPT
 * ==============================================================================
 * Connects centralized FEST_DATA to all UI components:
 * - Dynamic Rendering (Hero, Programs, Schedule, Venues, Coordinators, FAQs, etc.)
 * - Search & Multi-criteria Filtering
 * - Accessible Modal System (Program Details, Emergency Sheet, Lightbox)
 * - Real-Time Countdown Timer
 * - Lightweight Interactive Constellation Canvas
 * - Form Validation & Interactive Feedback
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Ensure FEST_DATA is loaded
  if (typeof FEST_DATA === "undefined") {
    console.error("FEST_DATA repository is missing! Check fest-data.js import.");
    return;
  }

  // Initialize modules
  initHeroAndGeneralConfig();
  initCountdownTimer();
  initBackgroundCanvas();
  initNavigation();
  initProgramsModule();
  initScheduleModule();
  initVenuesModule();
  initCoordinatorsModule();
  initHelpAndContactModule();
  initFaqModule();
  initGalleryModule();
  initSponsorsModule();
  initEmergencyComponents();
});

/* ==============================================================================
   1. HERO & GENERAL CONFIGURATION
   ============================================================================== */
function initHeroAndGeneralConfig() {
  const { config } = FEST_DATA;

  // Title & Brand updates
  document.title = `${config.festName} | ${config.collegeName}`;

  // Update DOM elements with data-bind attributes
  document.querySelectorAll("[data-bind]").forEach(el => {
    const key = el.getAttribute("data-bind");
    if (config[key] !== undefined) {
      el.textContent = config[key];
    }
  });

  // Render Stats
  const statsContainer = document.getElementById("hero-stats-container");
  if (statsContainer && config.stats) {
    statsContainer.innerHTML = config.stats.map(stat => `
      <div class="stat-card">
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join("");
  }
}

/* ==============================================================================
   2. REAL-TIME COUNTDOWN TIMER
   ============================================================================== */
function initCountdownTimer() {
  const targetDateStr = FEST_DATA.config.countdownTarget || "2026-10-16T09:00:00";
  const targetTime = new Date(targetDateStr).getTime();

  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minsEl = document.getElementById("cd-mins");
  const secsEl = document.getElementById("cd-secs");

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minsEl) minsEl.textContent = "00";
      if (secsEl) secsEl.textContent = "00";
      const titleEl = document.getElementById("countdown-status-text");
      if (titleEl) titleEl.textContent = "Fest is Live Now!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, "0");
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==============================================================================
   3. BACKGROUND PARTICLES CANVAS (CYBER CONSTELLATION)
   ============================================================================== */
function initBackgroundCanvas() {
  const canvas = document.getElementById("canvas-particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor((width * height) / 18000), 65);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? "rgba(0, 242, 254," : "rgba(157, 78, 221,"
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + "0.6)";
      ctx.fill();

      // Connect near particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const alpha = 0.25 * (1 - dist / 130);
          ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==============================================================================
   4. NAVIGATION & MOBILE DRAWER
   ============================================================================== */
function initNavigation() {
  const toggleBtn = document.getElementById("nav-toggle");
  const mobileDrawer = document.getElementById("mobile-nav");
  const mobileCloseBtn = document.getElementById("mobile-close-btn");
  const mobileLinks = document.querySelectorAll(".mobile-nav-links a");
  const navLinks = document.querySelectorAll(".nav-link");

  function openMenu() {
    mobileDrawer.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileDrawer.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (toggleBtn) toggleBtn.addEventListener("click", openMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener("click", closeMenu);
  mobileLinks.forEach(link => link.addEventListener("click", closeMenu));

  // Navbar scroll background change
  const navbarWrapper = document.querySelector(".navbar-wrapper");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbarWrapper.style.boxShadow = "0 8px 30px rgba(0,0,0,0.7)";
      navbarWrapper.style.borderBottomColor = "rgba(0, 242, 254, 0.2)";
    } else {
      navbarWrapper.style.boxShadow = "none";
      navbarWrapper.style.borderBottomColor = "rgba(255, 255, 255, 0.08)";
    }
  });

  // Active link scroll spy
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
        });
      }
    });
  });

  // Back to top button
  const bttBtn = document.getElementById("back-to-top");
  if (bttBtn) {
    bttBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* ==============================================================================
   5. PROGRAMS / EVENTS MODULE (CARDS, SEARCH, FILTER, MODAL)
   ============================================================================== */
let currentCategory = "all";
let currentSearchQuery = "";

function initProgramsModule() {
  const categoryPillsContainer = document.getElementById("category-pills");
  const programsGrid = document.getElementById("programs-grid");
  const searchInput = document.getElementById("programs-search");
  const searchClearBtn = document.getElementById("search-clear");
  const counterEl = document.getElementById("programs-count-display");

  // Render Category Filter Pills
  if (categoryPillsContainer) {
    categoryPillsContainer.innerHTML = FEST_DATA.categories.map(cat => `
      <button class="cat-pill ${cat.id === "all" ? "active" : ""}" data-category="${cat.id}">
        <span>${cat.name}</span>
      </button>
    `).join("");

    categoryPillsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".cat-pill");
      if (!btn) return;
      document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderFilteredPrograms();
    });
  }

  // Search Input Listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      if (searchClearBtn) {
        searchClearBtn.style.display = currentSearchQuery.length > 0 ? "block" : "none";
      }
      renderFilteredPrograms();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      currentSearchQuery = "";
      searchClearBtn.style.display = "none";
      renderFilteredPrograms();
    });
  }

  // Initial Render
  renderFilteredPrograms();
  setupProgramModalListeners();
}

function renderFilteredPrograms() {
  const grid = document.getElementById("programs-grid");
  const counter = document.getElementById("programs-count-display");
  if (!grid) return;

  const filtered = FEST_DATA.programs.filter(prog => {
    const matchesCategory = currentCategory === "all" || prog.categorySlug === currentCategory;
    const query = currentSearchQuery;
    const matchesSearch = !query || 
      prog.name.toLowerCase().includes(query) ||
      prog.category.toLowerCase().includes(query) ||
      prog.venueName.toLowerCase().includes(query) ||
      prog.coordinator.name.toLowerCase().includes(query) ||
      prog.shortDesc.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  if (counter) {
    counter.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${FEST_DATA.programs.length}</strong> programs`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem; color: var(--text-dim);">🔍</div>
        <h4 style="font-size: 1.4rem; color: #fff; margin-bottom: 0.5rem;">No programs match your search</h4>
        <p style="color: var(--text-muted); max-width: 480px; margin-inline: auto;">
          Try adjusting your search terms or select "All Programs" to explore all tech fest events.
        </p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prog => {
    // Status Badge Style
    let statusClass = "badge-open";
    if (prog.registrationStatus === "Filling Fast") statusClass = "badge-filling";
    if (prog.registrationStatus === "Closing Soon" || prog.registrationStatus === "Closed") statusClass = "badge-closed";

    return `
      <div class="program-card" data-program-id="${prog.id}">
        <div>
          <div class="program-card-header">
            <span class="badge badge-category">${prog.category}</span>
            <span class="badge ${statusClass}">${prog.registrationStatus}</span>
          </div>

          <h3 class="program-card-title">${prog.name}</h3>
          <p class="program-card-desc">${prog.shortDesc}</p>

          <div class="program-meta-list">
            <div class="program-meta-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>${prog.timeDisplay}</span>
            </div>
            <div class="program-meta-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>${prog.venueName}</span>
            </div>
            <div class="program-meta-item prize-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
              <span>${prog.prizes.first.split('+')[0]}</span>
            </div>
            <div class="program-meta-item coordinator-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span>Coord: ${prog.coordinator.name}</span>
            </div>
          </div>
        </div>

        <div class="program-card-footer">
          <button class="btn btn-outline-neon btn-sm btn-view-details" onclick="openProgramDetailsModal('${prog.id}')">
            <span>View Details</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
          <a href="https://wa.me/${prog.coordinator.whatsapp}?text=Hi%20${encodeURIComponent(prog.coordinator.name)}%2C%20I%20have%20a%20question%20regarding%20${encodeURIComponent(prog.name)}" target="_blank" rel="noopener" class="coordinator-quick-btn" title="Quick WhatsApp Coordinator" aria-label="WhatsApp Coordinator">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

/* ==============================================================================
   6. DETAILED PROGRAM MODAL CONTROLLER
   ============================================================================== */
function setupProgramModalListeners() {
  const modalOverlay = document.getElementById("program-modal-overlay");
  const modalCloseBtn = document.getElementById("program-modal-close");

  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener("click", () => closeModal(modalOverlay));
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal(modalOverlay);
    });
  }

  // Escape key closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".modal-overlay.active");
      if (activeModal) closeModal(activeModal);
    }
  });
}

function openProgramDetailsModal(programId) {
  const prog = FEST_DATA.programs.find(p => p.id === programId);
  if (!prog) return;

  const modalOverlay = document.getElementById("program-modal-overlay");
  const modalContent = document.getElementById("program-modal-dynamic-content");

  let statusClass = "badge-open";
  if (prog.registrationStatus === "Filling Fast") statusClass = "badge-filling";
  if (prog.registrationStatus === "Closing Soon" || prog.registrationStatus === "Closed") statusClass = "badge-closed";

  modalContent.innerHTML = `
    <!-- Header -->
    <div class="modal-header">
      <div>
        <div class="modal-badges">
          <span class="badge badge-category">${prog.category}</span>
          <span class="badge ${statusClass}">${prog.registrationStatus}</span>
          <span class="badge badge-venue">${prog.date}</span>
        </div>
        <h2 class="modal-title">${prog.name}</h2>
      </div>
      <button class="modal-close-btn" id="program-modal-close-inner" onclick="closeModal(document.getElementById('program-modal-overlay'))" aria-label="Close Modal">&times;</button>
    </div>

    <!-- Body -->
    <div class="modal-body">
      <!-- Quick Info Grid -->
      <div class="modal-info-grid">
        <div class="modal-info-card">
          <div class="modal-info-card-label">Timing</div>
          <div class="modal-info-card-val">${prog.timeDisplay}</div>
        </div>
        <div class="modal-info-card">
          <div class="modal-info-card-label">Venue</div>
          <div class="modal-info-card-val">${prog.venueName}</div>
        </div>
        <div class="modal-info-card">
          <div class="modal-info-card-label">Team Size</div>
          <div class="modal-info-card-val">${prog.teamSize}</div>
        </div>
        <div class="modal-info-card">
          <div class="modal-info-card-label">Registration Fee</div>
          <div class="modal-info-card-val" style="color: var(--neon-cyan);">${prog.registrationFee}</div>
        </div>
        <div class="modal-info-card">
          <div class="modal-info-card-label">Deadline</div>
          <div class="modal-info-card-val">${prog.registrationDeadline}</div>
        </div>
        <div class="modal-info-card">
          <div class="modal-info-card-label">Eligibility</div>
          <div class="modal-info-card-val">${prog.eligibility}</div>
        </div>
      </div>

      <!-- Description -->
      <div>
        <h4 class="modal-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          Event Overview
        </h4>
        <p class="modal-desc-text">${prog.fullDesc}</p>
      </div>

      <!-- Prizes -->
      <div>
        <h4 class="modal-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
          Awards & Cash Prizes
        </h4>
        <ul class="modal-list">
          <li><strong style="color: #fbbf24;">1st Prize:</strong> ${prog.prizes.first}</li>
          <li><strong style="color: #cbd5e1;">2nd Prize:</strong> ${prog.prizes.second}</li>
          ${prog.prizes.third ? `<li><strong style="color: #d97706;">3rd Prize:</strong> ${prog.prizes.third}</li>` : ''}
          ${prog.prizes.special ? `<li><strong style="color: var(--neon-cyan);">Special Recognition:</strong> ${prog.prizes.special}</li>` : ''}
        </ul>
      </div>

      <!-- Rules & Regulations -->
      <div>
        <h4 class="modal-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
          Rules & Regulations
        </h4>
        <ul class="modal-list">
          ${prog.rules.map(rule => `<li>${rule}</li>`).join("")}
        </ul>
      </div>

      <!-- Required Materials & Instructions -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
        <div>
          <h4 class="modal-section-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7h-7"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
            Required Equipment
          </h4>
          <ul class="modal-list">
            ${prog.requiredMaterials.map(m => `<li>${m}</li>`).join("")}
          </ul>
        </div>
        <div>
          <h4 class="modal-section-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
            Special Instructions
          </h4>
          <ul class="modal-list">
            ${prog.instructions.map(ins => `<li>${ins}</li>`).join("")}
          </ul>
        </div>
      </div>

      <!-- Coordinator Contact Card -->
      <div>
        <h4 class="modal-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          Event Coordinator Details
        </h4>
        <div class="modal-coordinator-card">
          <div class="modal-coordinator-info">
            <div class="coordinator-avatar-circle">
              ${prog.coordinator.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <h5 style="font-size: 1.1rem; color: #fff;">${prog.coordinator.name}</h5>
              <div style="font-size: 0.82rem; color: var(--neon-cyan);">${prog.coordinator.role} • ${prog.coordinator.department}</div>
              ${prog.facultyMentor ? `<div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 0.2rem;">Faculty Mentor: ${prog.facultyMentor}</div>` : ''}
            </div>
          </div>
          <div class="modal-coordinator-actions">
            <a href="tel:${prog.coordinator.phone}" class="btn btn-secondary btn-sm" title="Call Coordinator">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Call</span>
            </a>
            <a href="https://wa.me/${prog.coordinator.whatsapp}?text=Hello%20${encodeURIComponent(prog.coordinator.name)}%2C%20I%20have%20an%20inquiry%20regarding%20${encodeURIComponent(prog.name)}" target="_blank" rel="noopener" class="btn btn-outline-neon btn-sm" style="border-color: #25d366; color: #25d366;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span>WhatsApp</span>
            </a>
            <a href="mailto:${prog.coordinator.email}" class="btn btn-secondary btn-sm" title="Email Coordinator">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal(document.getElementById('program-modal-overlay'))">Close Window</button>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <a href="#venues" onclick="closeModal(document.getElementById('program-modal-overlay'))" class="btn btn-secondary">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>Find Venue</span>
        </a>
        <a href="#contact" onclick="closeModal(document.getElementById('program-modal-overlay'))" class="btn btn-primary">
          <span>Register / Ask Query</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>
      </div>
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove("active");
  document.body.style.overflow = "";
}

/* ==============================================================================
   7. SCHEDULE / TIMETABLE MODULE
   ============================================================================== */
let scheduleCurrentDay = 1;
let scheduleCurrentVenue = "all";
let scheduleCurrentCategory = "all";

function initScheduleModule() {
  const dayTabs = document.querySelectorAll(".day-tab-btn");
  const venueSelect = document.getElementById("schedule-venue-filter");
  const categorySelect = document.getElementById("schedule-category-filter");

  // Populate Venue Dropdown
  if (venueSelect) {
    venueSelect.innerHTML = `<option value="all">All Venues</option>` + 
      FEST_DATA.venues.map(v => `<option value="${v.id}">${v.shortName}</option>`).join("");
    
    venueSelect.addEventListener("change", (e) => {
      scheduleCurrentVenue = e.target.value;
      renderSchedule();
    });
  }

  // Populate Category Dropdown
  if (categorySelect) {
    categorySelect.innerHTML = `<option value="all">All Categories</option>` + 
      FEST_DATA.categories.filter(c => c.id !== "all").map(c => `<option value="${c.id}">${c.name}</option>`).join("");
    
    categorySelect.addEventListener("change", (e) => {
      scheduleCurrentCategory = e.target.value;
      renderSchedule();
    });
  }

  // Day Tabs listener
  dayTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      dayTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      scheduleCurrentDay = parseInt(tab.getAttribute("data-day"), 10);
      renderSchedule();
    });
  });

  renderSchedule();
}

function renderSchedule() {
  const container = document.getElementById("schedule-timeline-container");
  if (!container) return;

  const filtered = FEST_DATA.schedule.filter(item => {
    const matchesDay = scheduleCurrentDay === 0 || item.day === scheduleCurrentDay;
    const matchesVenue = scheduleCurrentVenue === "all" || item.venueId === scheduleCurrentVenue;
    const matchesCategory = scheduleCurrentCategory === "all" || item.categorySlug === scheduleCurrentCategory;

    return matchesDay && matchesVenue && matchesCategory;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; background: var(--bg-card); border-radius: var(--border-radius-lg); border: 1px solid var(--border-subtle);">
        <p style="color: var(--text-muted); font-size: 1.05rem;">No timetable sessions match the selected filters.</p>
        <button class="btn btn-secondary btn-sm" style="margin-top: 1rem;" onclick="resetScheduleFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="timeline-item">
      <div class="timeline-time-col">
        <span class="timeline-time">${item.time}</span>
        <span class="timeline-day-label">Day ${item.day} • ${item.dayDate.split(",")[0]}</span>
      </div>

      <div class="timeline-details-col">
        <h4>${item.programName}</h4>
        <p class="timeline-desc">${item.description}</p>
        <div class="timeline-meta-chips">
          <span class="badge badge-venue">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${item.venue}
          </span>
          <span class="badge badge-category">${item.category}</span>
        </div>
      </div>

      <div>
        ${item.programId ? `
          <button class="btn btn-outline-neon btn-sm" onclick="openProgramDetailsModal('${item.programId}')">
            <span>Details</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        ` : `
          <span class="badge badge-open">General Session</span>
        `}
      </div>
    </div>
  `).join("");
}

function resetScheduleFilters() {
  scheduleCurrentDay = 1;
  scheduleCurrentVenue = "all";
  scheduleCurrentCategory = "all";

  const venueSelect = document.getElementById("schedule-venue-filter");
  const categorySelect = document.getElementById("schedule-category-filter");
  const dayTabs = document.querySelectorAll(".day-tab-btn");

  if (venueSelect) venueSelect.value = "all";
  if (categorySelect) categorySelect.value = "all";
  dayTabs.forEach((tab, index) => {
    tab.classList.toggle("active", index === 0);
  });

  renderSchedule();
}

/* ==============================================================================
   8. VENUES MODULE
   ============================================================================== */
function initVenuesModule() {
  const grid = document.getElementById("venues-grid");
  if (!grid) return;

  grid.innerHTML = FEST_DATA.venues.map(v => `
    <div class="venue-card" id="${v.id}">
      <div>
        <div class="venue-badge-bar">
          <span class="badge badge-venue">${v.floor}</span>
          <span class="badge badge-open">${v.capacity}</span>
        </div>
        <h3 class="venue-name">${v.name}</h3>
        <div class="venue-building">${v.building} • ${v.roomNumber}</div>
        
        <div class="venue-directions-box">
          <strong style="color: #fff; display: block; margin-bottom: 0.2rem;">🚶 Directions:</strong>
          ${v.directions}
        </div>

        <div style="font-size: 0.8rem; color: var(--text-dim); margin-bottom: 0.5rem; text-transform: uppercase; font-family: var(--font-mono);">
          Facilities & Tech Spec:
        </div>
        <div class="venue-facilities-list">
          ${v.facilities.map(fac => `<span class="facility-pill">${fac}</span>`).join("")}
        </div>
      </div>

      <div style="padding-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;">
        <span style="font-size: 0.82rem; color: var(--text-muted);">
          Key events: <strong style="color: var(--neon-cyan);">${v.highlightEvents[0]}</strong>
        </span>
        <a href="https://maps.google.com/?q=${encodeURIComponent(v.name + ' ' + FEST_DATA.config.collegeName)}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" title="Open in Maps">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>Map</span>
        </a>
      </div>
    </div>
  `).join("");
}

/* ==============================================================================
   9. COORDINATORS MODULE
   ============================================================================== */
let coordCurrentFilter = "all";

function initCoordinatorsModule() {
  const tabsContainer = document.getElementById("coord-filter-tabs");
  if (tabsContainer) {
    tabsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".coord-filter-btn");
      if (!btn) return;
      document.querySelectorAll(".coord-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      coordCurrentFilter = btn.getAttribute("data-group");
      renderCoordinators();
    });
  }

  renderCoordinators();
}

function renderCoordinators() {
  const grid = document.getElementById("coordinators-grid");
  if (!grid) return;

  const filtered = FEST_DATA.coordinators.filter(c => {
    return coordCurrentFilter === "all" || c.group === coordCurrentFilter;
  });

  grid.innerHTML = filtered.map(c => `
    <div class="coordinator-card">
      <div>
        <div class="coord-avatar" style="background: ${c.avatarBg};">
          ${c.name.split(" ").map(n => n[0]).join("")}
        </div>
        <h3 class="coord-name">${c.name}</h3>
        <div class="coord-role-badge">${c.role}</div>
        <div class="coord-dept">${c.department}</div>
        <div class="coord-domain">${c.programHandled}</div>
      </div>

      <div class="coord-contact-actions">
        <a href="tel:${c.phone}" class="coord-action-icon" title="Call ${c.name}" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
        <a href="https://wa.me/${c.whatsapp}?text=Hello%20${encodeURIComponent(c.name)}%2C%20I%20am%20reaching%20out%20regarding%20INNOVA%20Tech%20Fest" target="_blank" rel="noopener" class="coord-action-icon whatsapp" title="WhatsApp ${c.name}" aria-label="WhatsApp">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
        <a href="mailto:${c.email}" class="coord-action-icon" title="Email ${c.name}" aria-label="Email">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
      </div>
    </div>
  `).join("");
}

/* ==============================================================================
   10. GUEST HELP & CONTACT FORM
   ============================================================================== */
function initHelpAndContactModule() {
  const form = document.getElementById("guest-contact-form");
  const feedbackEl = document.getElementById("form-feedback-msg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const phone = document.getElementById("contact-phone").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const subject = document.getElementById("contact-subject").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !phone || !email || !message) {
        showToast("⚠️ Please fill in all required fields.");
        return;
      }

      // Simulate submission loading
      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending inquiry...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        if (feedbackEl) {
          feedbackEl.className = "form-feedback success";
          feedbackEl.innerHTML = `
            <strong>✅ Thank you, ${name}!</strong> Your inquiry has been dispatched to the Tech Fest Help Desk. A coordinator will contact you at <code>${phone}</code> shortly.
          `;
          feedbackEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }

        showToast("Message sent successfully! Help Desk will reach out soon.");
      }, 900);
    });
  }
}

/* ==============================================================================
   11. IMPORTANT INFO & FAQS
   ============================================================================== */
function initFaqModule() {
  // Render Important Info Cards
  const infoContainer = document.getElementById("important-info-grid");
  if (infoContainer && FEST_DATA.importantInfo) {
    infoContainer.innerHTML = FEST_DATA.importantInfo.map(item => `
      <div class="info-card">
        <div class="info-card-header">
          <span class="info-card-icon">⚡</span>
          <span class="badge badge-category">${item.badge}</span>
        </div>
        <h4 class="info-card-title">${item.title}</h4>
        <p class="info-card-desc">${item.details}</p>
      </div>
    `).join("");
  }

  // Render FAQ Accordion
  const faqContainer = document.getElementById("faq-accordion-container");
  if (faqContainer && FEST_DATA.faqs) {
    faqContainer.innerHTML = FEST_DATA.faqs.map((faq, index) => `
      <div class="faq-item ${index === 0 ? "active" : ""}">
        <button class="faq-question-btn" type="button" aria-expanded="${index === 0}">
          <span>${faq.question}</span>
          <span class="faq-icon-arrow">▾</span>
        </button>
        <div class="faq-answer-panel" style="${index === 0 ? "max-height: 250px;" : ""}">
          <div class="faq-answer-content">
            <p>${faq.answer}</p>
          </div>
        </div>
      </div>
    `).join("");

    faqContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".faq-question-btn");
      if (!btn) return;
      const item = btn.parentElement;
      const panel = item.querySelector(".faq-answer-panel");
      const isExpanded = item.classList.contains("active");

      // Close all others
      document.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("active");
        const otherPanel = other.querySelector(".faq-answer-panel");
        if (otherPanel) otherPanel.style.maxHeight = null;
      });

      if (!isExpanded) {
        item.classList.add("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

/* ==============================================================================
   12. GALLERY & LIGHTBOX MODULE
   ============================================================================== */
let currentLightboxIndex = 0;

function initGalleryModule() {
  const grid = document.getElementById("gallery-grid");
  if (!grid || !FEST_DATA.gallery) return;

  grid.innerHTML = FEST_DATA.gallery.map((img, idx) => `
    <div class="gallery-card" onclick="openLightbox(${idx})">
      <img src="${img.thumbnail}" alt="${img.title}" loading="lazy" />
      <div class="gallery-overlay">
        <h4>${img.title}</h4>
        <p>${img.category} • ${img.tags.join(" / ")}</p>
      </div>
    </div>
  `).join("");

  // Setup Lightbox Listeners
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
  if (lightboxNext) lightboxNext.addEventListener("click", () => navigateLightbox(1));
  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!lightboxModal.classList.contains("active")) return;
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
    if (e.key === "Escape") closeLightbox();
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  const modal = document.getElementById("lightbox-modal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateLightboxContent() {
  const item = FEST_DATA.gallery[currentLightboxIndex];
  if (!item) return;

  const imgEl = document.getElementById("lightbox-image");
  const captionEl = document.getElementById("lightbox-caption-text");

  if (imgEl) {
    imgEl.src = item.fullImage;
    imgEl.alt = item.title;
  }
  if (captionEl) {
    captionEl.innerHTML = `<strong>${item.title}</strong> — ${item.description}`;
  }
}

function navigateLightbox(dir) {
  currentLightboxIndex = (currentLightboxIndex + dir + FEST_DATA.gallery.length) % FEST_DATA.gallery.length;
  updateLightboxContent();
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
}

/* ==============================================================================
   13. SPONSORS MODULE
   ============================================================================== */
function initSponsorsModule() {
  const container = document.getElementById("sponsors-container");
  if (!container || !FEST_DATA.sponsors) return;

  container.innerHTML = FEST_DATA.sponsors.map(tier => `
    <div class="sponsors-tier-block">
      <div class="sponsors-tier-title">${tier.tierTag} — ${tier.tier}</div>
      <div class="sponsors-grid">
        ${tier.items.map(item => `
          <div class="sponsor-logo-card">
            <div class="sponsor-brand-text">${item.logoPlaceholder}</div>
            <div class="sponsor-type-label">${item.type}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/* ==============================================================================
   14. EMERGENCY DIRECTORY & FLOATING QUICK HELP
   ============================================================================== */
function initEmergencyComponents() {
  // Populate Emergency Top Bar
  const topContactsContainer = document.getElementById("emergency-top-contacts");
  if (topContactsContainer && FEST_DATA.emergency) {
    topContactsContainer.innerHTML = FEST_DATA.emergency.slice(0, 3).map(e => `
      <a href="${e.tel}" class="emergency-chip ${e.role.includes('Medical') ? 'urgent' : ''}">
        <span>${e.role}: <strong>${e.phone}</strong></span>
      </a>
    `).join("") + `
      <button class="emergency-chip" onclick="openEmergencySheet()">
        <span>More Help ▾</span>
      </button>
    `;
  }

  // Populate Emergency Sheet Modal
  const sheetList = document.getElementById("emergency-sheet-list");
  if (sheetList && FEST_DATA.emergency) {
    sheetList.innerHTML = FEST_DATA.emergency.map(e => `
      <div class="emergency-contact-card">
        <div>
          <h5>${e.role}</h5>
          <p>${e.contactPerson} • ${e.location}</p>
          <span style="font-size: 0.75rem; color: var(--neon-cyan);">${e.availability}</span>
        </div>
        <div class="emergency-contact-actions">
          <a href="${e.tel}" class="btn btn-primary btn-sm">Call</a>
          <a href="${e.whatsapp}" target="_blank" rel="noopener" class="btn btn-outline-neon btn-sm" style="border-color: #25d366; color: #25d366;">WhatsApp</a>
        </div>
      </div>
    `).join("");
  }

  // Trigger button listener
  const floatTrigger = document.getElementById("floating-emergency-btn");
  if (floatTrigger) {
    floatTrigger.addEventListener("click", openEmergencySheet);
  }

  const sheetModal = document.getElementById("emergency-sheet-modal");
  const sheetClose = document.getElementById("emergency-sheet-close");
  if (sheetClose && sheetModal) {
    sheetClose.addEventListener("click", closeEmergencySheet);
    sheetModal.addEventListener("click", (e) => {
      if (e.target === sheetModal) closeEmergencySheet();
    });
  }
}

function openEmergencySheet() {
  const sheet = document.getElementById("emergency-sheet-modal");
  if (sheet) {
    sheet.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeEmergencySheet() {
  const sheet = document.getElementById("emergency-sheet-modal");
  if (sheet) {
    sheet.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/* ==============================================================================
   15. TOAST NOTIFICATION UTILITY
   ============================================================================== */
let toastTimeout;
function showToast(message) {
  let toast = document.getElementById("site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "site-toast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>${message}</span>`;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}
