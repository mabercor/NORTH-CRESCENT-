document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // HEADER LOAD
  // =========================
  fetch("/components/header.html")
    .then(res => {
      if (!res.ok) throw new Error("Header failed to load");
      return res.text();
    })
    .then(data => {
      const header = document.getElementById("header-placeholder");
      if (header) header.innerHTML = data;

      initMenu(); // 🔥 CRÍTICO
    })
    .catch(err => console.error("Header error:", err));

  // =========================
  // FOOTER LOAD
  // =========================
  fetch("/components/footer.html")
    .then(res => {
      if (!res.ok) throw new Error("Footer failed to load");
      return res.text();
    })
    .then(data => {
      const footer = document.getElementById("footer-placeholder");
      if (footer) footer.innerHTML = data;
    })
    .catch(err => console.error("Footer error:", err));

  // =========================
  // MENU SYSTEM (ROBUSTO)
  // =========================
  function initMenu() {

    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-menu");
    const overlay = document.querySelector(".menu-overlay");

    if (!toggle || !nav || !overlay) {
      console.warn("Menu elements not found");
      return;
    }

    // Toggle menu
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      nav.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    // Close on overlay click
    overlay.addEventListener("click", closeMenu);

    // 🔥 CLOSE MENU ON LINK CLICK (IMPORTANTE)
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

});
