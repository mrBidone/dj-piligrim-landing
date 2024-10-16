document.addEventListener("DOMContentLoaded", () => {
  loadThemeSettings();
});

function loadThemeSettings() {
  fetch("../data/themes-data.json")
    .then((response) => response.json())
    .then((data) => {
      const currentTheme = data["current-theme"]; // Текущая тема берется из JSON
      applyTheme(currentTheme, data);
    })
    .catch((error) => console.error("Ошибка загрузки тем:", error));
}

function applyTheme(themeName, data) {
  const theme = data.themes[themeName];

  if (theme) {
    document.documentElement.style.setProperty(
      "--main-bg-color",
      theme.mainBgColor
    );
    document.documentElement.style.setProperty(
      "--accent-bg-color",
      theme.accentBgColor
    );
    document.documentElement.style.setProperty(
      "--sub-menu-bg-color",
      theme.subMenuBgColor
    );
    document.documentElement.style.setProperty(
      "--main-text-color",
      theme.mainTextColor
    );
    document.documentElement.style.setProperty(
      "--secondary-text-color",
      theme.secondaryTextColor
    );
    document.documentElement.style.setProperty(
      "--accent-secondary-text-color",
      theme.accentSecondaryTextColor
    );
    document.documentElement.style.setProperty(
      "--main-title-color",
      theme.mainTitleColor
    );
    document.documentElement.style.setProperty(
      "--grey-text-color",
      theme.greyTextColor
    );
    document.documentElement.style.setProperty(
      "--gradient-first-point",
      theme.gradientFirstPoint
    );
    document.documentElement.style.setProperty(
      "--backdrop-color",
      theme.backdropColor
    );
    document.documentElement.style.setProperty(
      "--offers-list-hover-color",
      theme.offersListHoverColor
    );
  } else {
    console.error("Тема не найдена:", themeName);
  }
}
