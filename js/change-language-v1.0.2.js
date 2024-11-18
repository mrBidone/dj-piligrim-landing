const elements = {
  onlineStore: document.getElementById("onlineStore"),
  onlineStoreNotice: document.getElementById("onlineStoreNotice"),
  musicPlatforms: document.getElementById("musicPlatforms"),
  vkMusic: document.getElementById("vkMusic"),
  yaMusic: document.getElementById("yaMusic"),
  booking: document.getElementById("booking"),
  concertManager: document.getElementById("concertManager"),
  contactNumber: document.getElementById("contactNumber"),
  managerName: document.getElementById("managerName"),
  heroDescr: document.getElementById("hero-descr"),
};

function loadTranslations(callback) {
  fetch("language-data.json")
    .then((response) => response.json())
    .then(callback)
    .catch((error) => console.error("Ошибка загрузки переводов:", error));
}
function setInitialLanguage(translations) {
  const savedLang = localStorage.getItem("selectedLanguage");
  const browserLang = navigator.language.slice(0, 2);
  const initialLang =
    savedLang || (["ru", "uz"].includes(browserLang) ? browserLang : "en");

  document.documentElement.lang = initialLang;

  applyTranslation(initialLang, translations);
}

function setupLanguageButtons(translations) {
  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      applyTranslation(selectedLang, translations);
    });
  });
}

function applyTranslation(lang, translations) {
  const translation = translations[lang];

  if (!translation) return;
  Object.entries(elements).forEach(([key, elem]) => {
    if (elem && translation[key]) {
      if (key === "onlineStore" && elem.firstChild) {
        elem.firstChild.textContent = translation[key] + " ";
      } else {
        elem.textContent = translation[key];
      }
    }
  });
  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.classList.toggle("isActiveLangBtn", btn.dataset.lang === lang);
  });
  localStorage.setItem("selectedLanguage", lang);
}
document.addEventListener("DOMContentLoaded", () => {
  loadTranslations((translations) => {
    setInitialLanguage(translations);
    setupLanguageButtons(translations);
  });
});
