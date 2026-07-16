(function () {
  "use strict";

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Mobile nav toggle */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* Scroll-reveal animation */
  var animatedEls = document.querySelectorAll("[data-animate]");
  if ("IntersectionObserver" in window && animatedEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    animatedEls.forEach(function (el) { observer.observe(el); });
  } else {
    animatedEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* Contact form -> mailto fallback (no backend on static hosting) */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var company = form.company.value.trim();
      var message = form.message.value.trim();

      if (!name || !email || !message) {
        var note = document.getElementById("form-note");
        if (note) {
          note.textContent = "Please fill in your name, email and message before sending.";
          note.style.color = "#b91c1c";
        }
        return;
      }

      var subject = "Website enquiry from " + name;
      var bodyLines = [
        "Name: " + name,
        "Email: " + email,
        company ? "Company: " + company : null,
        "",
        message
      ].filter(function (line) { return line !== null; });

      var mailtoUrl =
        "mailto:a2isoftech@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailtoUrl;
    });
  }
})();
