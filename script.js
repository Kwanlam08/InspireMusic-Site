const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-text");
const shots = Array.from(document.querySelectorAll(".theme-shot"));
const metaTheme = document.querySelector('meta[name="theme-color"]');

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function getInitialTheme() {
  const stored = localStorage.getItem("inspire-theme");
  if (stored === "light" || stored === "dark") return stored;
  return prefersDark.matches ? "dark" : "light";
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeLabel.textContent = theme === "dark" ? "深色" : "浅色";
  toggle.setAttribute("aria-pressed", String(theme === "dark"));
  metaTheme.setAttribute("content", theme === "dark" ? "#020403" : "#eef5ec");

  for (const shot of shots) {
    const nextSrc = shot.dataset[theme];
    if (nextSrc && shot.getAttribute("src") !== nextSrc) {
      shot.setAttribute("src", nextSrc);
    }
  }
}

applyTheme(getInitialTheme());

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("inspire-theme", next);
  applyTheme(next);
});

prefersDark.addEventListener("change", (event) => {
  if (!localStorage.getItem("inspire-theme")) {
    applyTheme(event.matches ? "dark" : "light");
  }
});
