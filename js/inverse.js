// Inverse AI — site script. Menu, reveal-on-scroll, hero film.
(function () {
  var root = document.documentElement;
  root.classList.add("js");

  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Hero film: skip on reduced motion or data saver; the poster stays.
  var vid = document.querySelector(".hero video");
  if (vid) {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var saver = navigator.connection && navigator.connection.saveData;
    if (reduce || saver) {
      vid.remove();
    } else {
      var src = vid.getAttribute("data-src");
      if (src) { vid.src = src; }
      var p = vid.play();
      if (p && p.catch) p.catch(function () {});
    }
  }

  // Year in footer
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
