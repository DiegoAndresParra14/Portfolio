document.addEventListener("DOMContentLoaded", () => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const navLinks = Array.from(document.querySelectorAll("[data-nav-links] a"));
    const scrollButtons = Array.from(document.querySelectorAll("[data-scroll-target]"));
    const contactForm = document.querySelector("[data-contact-form]");
    const formMessage = document.querySelector("[data-form-message]");
    const revealTargets = Array.from(document.querySelectorAll(".tonal-card"));
    const sectionMap = new Map(sections.map((section) => [`#${section.id}`, section]));

    scrollButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetSelector = button.getAttribute("data-scroll-target");
            const target = targetSelector ? document.querySelector(targetSelector) : null;

            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");
            const target = href ? sectionMap.get(href) : null;

            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    if (sections.length && navLinks.length) {
        const updateActiveLink = (activeId) => {
            navLinks.forEach((link) => {
                const isActive = link.getAttribute("href") === `#${activeId}`;

                link.classList.toggle("text-[#0055FF]", isActive);
                link.classList.toggle("border-b-2", isActive);
                link.classList.toggle("border-[#0055FF]", isActive);
                link.classList.toggle("pb-1", isActive);
                link.classList.toggle("text-[#A1A1AA]", !isActive);
            });
        };

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleEntry?.target?.id) {
                    updateActiveLink(visibleEntry.target.id);
                }
            },
            {
                rootMargin: "-35% 0px -45% 0px",
                threshold: [0.2, 0.4, 0.6]
            }
        );

        sections.forEach((section) => sectionObserver.observe(section));
    }

    if (revealTargets.length) {
        revealTargets.forEach((element) => {
            element.setAttribute("data-reveal", "");
        });

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("is-revealed");
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.15
            }
        );

        revealTargets.forEach((element) => revealObserver.observe(element));
    }

    if (contactForm && formMessage) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const name = String(formData.get("name") || "").trim();
            const email = String(formData.get("email") || "").trim();
            const message = String(formData.get("message") || "").trim();

            if (!name || !email || !message) {
                formMessage.textContent = "Completa los tres campos antes de enviar el mensaje.";
                formMessage.classList.add("is-visible");
                return;
            }

            formMessage.textContent = "Formulario listo. Puedes conectarlo después a un backend o servicio de correo.";
            formMessage.classList.add("is-visible");
        });
    }
});
