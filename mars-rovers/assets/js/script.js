const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
  themeButton.hidden = false;

  themeButton.addEventListener("click", function () {
    const lightMode = document.body.classList.toggle("light-mode");

    themeButton.setAttribute("aria-pressed", String(lightMode));
    themeButton.textContent = lightMode ? "Dark mode" : "Light mode";
  });
}