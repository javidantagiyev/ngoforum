// ----- Theme Toggle -----
const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  themeBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

  // ---------- Language Toggle ----------
  const langBtn = document.getElementById("lang-toggle");
  let currentLang = localStorage.getItem("lang") || "AZ";

  langBtn.textContent = currentLang;

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "AZ" ? "EN" : "AZ";
    langBtn.textContent = currentLang;
    localStorage.setItem("lang", currentLang);

    // Example translation logic
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.getAttribute("data-translate");
      el.textContent = translations[currentLang][key] || el.textContent;
    });
  });

  // Initial translation
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    el.textContent = translations[currentLang][key] || el.textContent;
  });