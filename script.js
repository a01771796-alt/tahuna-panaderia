// Menú móvil reutilizable — patrón estándar de la skill landing-cafe-restaurante.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (toggle && nav) {
    const closeNav = () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    };
    const openNav = () => {
      toggle.setAttribute("aria-expanded", "true");
      nav.classList.add("is-open");
    };
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeNav() : openNav();
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });
    document.addEventListener("click", (event) => {
      const header = toggle.closest("header") || document;
      if (!header.contains(event.target)) closeNav();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNav();
    });
  }

  // Mapa bajo demanda — evita cargar el iframe de Google Maps hasta que se pide.
  const mapTrigger = document.getElementById("map-trigger");
  mapTrigger?.addEventListener("click", () => {
    const placeholder = document.getElementById("map-placeholder");
    const lat = "19.2612492";
    const lng = "-99.6168241";
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
    iframe.width = "100%";
    iframe.height = "340";
    iframe.style.border = "0";
    iframe.loading = "lazy";
    iframe.title = "Ubicación de Tahūna Bakery en Metepec";
    placeholder.replaceWith(iframe);
  });
});
