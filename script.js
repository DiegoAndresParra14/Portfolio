/**
 * ============================================================================
 * PORTFOLIO JAVASCRIPT — DIEGO ANDRES PARRA
 * Handles Smooth Nav, Active Links, Scroll Reveal, CV Modal & Contact UX
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
  const scrollButtons = Array.from(document.querySelectorAll("[data-scroll-target]"));
  const contactForm = document.querySelector("[data-contact-form]");
  const formStatus = document.querySelector("[data-form-status]");
  const mobileMenuBtn = document.querySelector("[data-mobile-menu-btn]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const mobileLinks = Array.from(document.querySelectorAll("[data-mobile-link]"));
  
  // CV Modal Elements
  const openCvButtons = Array.from(document.querySelectorAll("[data-open-cv]"));
  const closeCvBtn = document.querySelector("[data-close-cv]");
  const cvModal = document.getElementById("cv-modal");
  const printCvBtn = document.querySelector("[data-print-cv]");

  // 1. Mobile Menu Toggle
  if (mobileMenuBtn && mobileMenu) {
    const toggleMenu = () => {
      const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      mobileMenuBtn.setAttribute("aria-expanded", String(!isExpanded));
      mobileMenu.classList.toggle("hidden", isExpanded);
    };

    mobileMenuBtn.addEventListener("click", toggleMenu);

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // 2. Smooth Scroll for data-scroll-target buttons
  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetSelector = btn.getAttribute("data-scroll-target");
      if (!targetSelector) return;
      
      const target = document.querySelector(targetSelector);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // 3. Smooth Scroll for Nav Links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // 4. Active Navigation State with IntersectionObserver
  if (sections.length && navLinks.length) {
    const updateActiveNav = (currentId) => {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        const isActive = href === `#${currentId}`;
        
        if (isActive) {
          link.classList.remove("text-slate-400", "hover:text-white");
          link.classList.add("text-sky-400", "font-semibold");
        } else {
          link.classList.remove("text-sky-400", "font-semibold");
          link.classList.add("text-slate-400", "hover:text-white");
        }
      });
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio or proximity to viewport center
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const topEntry = visibleEntries[0];
          if (topEntry && topEntry.target.id) {
            updateActiveNav(topEntry.target.id);
          }
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.3, 0.6]
      }
    );

    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  // 5. Scroll Reveal Animations
  const revealCards = Array.from(document.querySelectorAll(".bento-card, [data-reveal-target]"));
  if (revealCards.length) {
    revealCards.forEach((el) => el.setAttribute("data-reveal", ""));

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealCards.forEach((el) => revealObserver.observe(el));
  }

  // 6. Interactive CV Modal
  const openModal = () => {
    if (!cvModal) return;
    cvModal.classList.remove("hidden");
    cvModal.classList.add("flex");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    if (!cvModal) return;
    cvModal.classList.add("hidden");
    cvModal.classList.remove("flex");
    document.body.style.overflow = "";
  };

  openCvButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeCvBtn) {
    closeCvBtn.addEventListener("click", closeModal);
  }

  if (cvModal) {
    cvModal.addEventListener("click", (e) => {
      if (e.target === cvModal) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cvModal && !cvModal.classList.contains("hidden")) {
      closeModal();
    }
  });

  if (printCvBtn) {
    printCvBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // 7. Interactive Project Filters
  const filterBtns = Array.from(document.querySelectorAll("[data-filter-btn]"));
  const projectCards = Array.from(document.querySelectorAll("[data-project-category]"));

  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter-btn");

        filterBtns.forEach((b) => {
          b.classList.remove("bg-sky-400/20", "text-sky-300", "border-sky-400/40");
          b.classList.add("bg-slate-900/60", "text-slate-400", "border-slate-800/80");
        });

        btn.classList.remove("bg-slate-900/60", "text-slate-400", "border-slate-800/80");
        btn.classList.add("bg-sky-400/20", "text-sky-300", "border-sky-400/40");

        projectCards.forEach((card) => {
          const category = card.getAttribute("data-project-category");
          if (filter === "all" || category.includes(filter)) {
            card.style.display = "";
            setTimeout(() => card.classList.add("is-revealed"), 50);
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // 8. Contact Form Handling with UX Feedback
  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const subject = String(formData.get("subject") || "").trim();
      const message = String(formData.get("message") || "").trim();

      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalBtnText = submitBtn ? submitBtn.innerHTML : "Enviar";

      // Basic client validation
      if (!name || !email || !message) {
        formStatus.innerHTML = `
          <div class="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 flex items-center gap-3">
            <span class="material-symbols-outlined text-red-400">error</span>
            <span>Por favor, completa los campos requeridos (Nombre, Correo y Mensaje).</span>
          </div>
        `;
        formStatus.classList.remove("hidden");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formStatus.innerHTML = `
          <div class="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 flex items-center gap-3">
            <span class="material-symbols-outlined text-red-400">error</span>
            <span>Ingresa una dirección de correo electrónico válida.</span>
          </div>
        `;
        formStatus.classList.remove("hidden");
        return;
      }

      // UI feedback: Loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-900 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          Procesando mensaje...
        `;
      }

      // Simulate sending to webhook/backend
      setTimeout(() => {
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }

        formStatus.innerHTML = `
          <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-start gap-3">
            <span class="material-symbols-outlined text-emerald-400 mt-0.5">check_circle</span>
            <div>
              <p class="font-semibold text-emerald-200">¡Mensaje enviado con éxito!</p>
              <p class="text-xs text-emerald-300/90 mt-1">Gracias por contactarme, ${name}. Te responderé a la brevedad a <strong>${email}</strong>.</p>
            </div>
          </div>
        `;
        formStatus.classList.remove("hidden");

        setTimeout(() => {
          formStatus.classList.add("hidden");
        }, 8000);
      }, 900);
    });
  }
});
