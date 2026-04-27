document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // LOAD COMPONENT (GENÉRICO)
  // =========================
  function loadComponent(path, placeholderId, callback) {
    fetch(path)
      .then(res => {
        if (!res.ok) throw new Error(`${path} failed`);
        return res.text();
      })
      .then(data => {
        const el = document.getElementById(placeholderId);
        if (el) el.innerHTML = data;

        if (callback) callback(); // 🔥 importante para menú
      })
      .catch(err => console.error(`${path} error:`, err));
  }

  // =========================
  // LOAD HEADER + FOOTER
  // =========================
  loadComponent("/components/header.html", "header-placeholder", () => {
    initMenu();
    setActiveNav(); // 🔥 NUEVO
  });

  loadComponent("/components/footer.html", "footer-placeholder");

  // =========================
  // MENU SYSTEM
  // =========================
  function initMenu() {

    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-menu");
    const overlay = document.querySelector(".menu-overlay");

    if (!toggle || !nav || !overlay) {
      console.warn("Menu elements not found");
      return;
    }

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      nav.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    overlay.addEventListener("click", closeMenu);

    document.querySelectorAll("#nav-menu a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    function closeMenu() {
      toggle.classList.remove("active");
      nav.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  }

  // =========================
  // ACTIVE NAV (PRO UX)
  // =========================
  function setActiveNav() {
    const current = window.location.pathname;

    document.querySelectorAll("#nav-menu a, .nav-desktop a").forEach(link => {
      const href = link.getAttribute("href");

      if (!href) return;

      if (current === href || current.includes(href.replace(".html",""))) {
        link.classList.add("active");
      }
    });
  }

});
