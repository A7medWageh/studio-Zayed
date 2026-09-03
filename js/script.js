document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");
  const mainNavLinks = document.querySelectorAll('#main-navigation .nav-links a[href^="#"]');
  const trackedSections = Array.from(mainNavLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean)
    .sort((firstSection, secondSection) => firstSection.offsetTop - secondSection.offsetTop);
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  const socialPackages = document.querySelector("#packages-social .pricing-grid");
  const packagePanes = document.querySelectorAll(".package-tab-pane");
  const newsletterForm = document.querySelector(".newsletter-form");
  const contactForm = document.querySelector(".contact-form");

  function toggleMobileMenu() {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  }

  function closeMobileMenu() {
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  function updateActiveNav() {
    const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;
    const activationLine = window.scrollY + headerHeight + window.innerHeight * 0.2;
    let activeSection = trackedSections[0];

    trackedSections.forEach((section) => {
      if (section.offsetTop <= activationLine) {
        activeSection = section;
      }
    });

    mainNavLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${activeSection.id}`;
      link.classList.toggle("is-active", isActive);
      link.classList.toggle("active", isActive);
      link.setAttribute("aria-current", isActive ? "page" : "false");
    });
  }

  function toggleAccordion(header) {
    const item = header.closest(".accordion-item");
    const isOpen = item.classList.contains("is-open");

    document.querySelectorAll(".accordion-item").forEach((entry) => {
      entry.classList.remove("is-open");
      entry
        .querySelector(".accordion-header")
        .setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("is-open");
      header.setAttribute("aria-expanded", "true");
    }
  }

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", toggleMobileMenu);
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileMenu();
        window.setTimeout(updateActiveNav, 250);
      });
    });
  }

  if (trackedSections.length) {
    window.addEventListener("scroll", updateActiveNav, { passive: true });
    window.addEventListener("resize", updateActiveNav);
    updateActiveNav();
  }

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => toggleAccordion(header));
  });

  if (socialPackages) {
    packagePanes.forEach((pane) => {
      if (pane.children.length === 0) {
        pane.appendChild(socialPackages.cloneNode(true));
      }
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
});
