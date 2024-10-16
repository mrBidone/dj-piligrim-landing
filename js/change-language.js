// const onlineStoreElem = document.getElementById("onlineStore");
// const onlineStoreNoticeElem = document.getElementById("onlineStoreNotice");
// const musicPlatformsElem = document.getElementById("musicPlatforms");
// const vkMusicElem = document.getElementById("vkMusic");
// const yaMusicElem = document.getElementById("yaMusic");
// const bookingElem = document.getElementById("booking");
// const concertManagerElem = document.getElementById("concertManager");
// const contactNumberElem = document.getElementById("contactNumber");
// const managerNameElem = document.getElementById("managerName");

// function setupLanguageButtons(translations) {
//   document.querySelectorAll(".language-btn").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const selectedLang = btn.getAttribute("data-lang");
//       applyTranslation(selectedLang, translations);
//     });
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   loadTranslations(function (translations) {
//     setInitialLanguage(translations);
//     setupLanguageButtons(translations);
//   });
// });

// function loadTranslations(callback) {
//   fetch("language-data.json")
//     .then((response) => response.json())
//     .then((data) => callback(data))
//     .catch((error) => console.error("Ошибка загрузки переводов:", error));
// }

// function setInitialLanguage(translations) {
//   const savedLang = localStorage.getItem("selectedLanguage");
//   const browserLang = navigator.language.slice(0, 2);

//   let initialLang =
//     savedLang || (["ru", "uz"].includes(browserLang) ? browserLang : "en");

//   applyTranslation(initialLang, translations);
// }

// function applyTranslation(lang, translations) {
//   if (onlineStoreElem) {
//     onlineStoreElem.firstChild.textContent =
//       translations[lang].onlineStore + " ";
//   }

//   if (onlineStoreNoticeElem) {
//     onlineStoreNoticeElem.textContent = translations[lang].onlineStoreNotice;
//   }

//   if (musicPlatformsElem)
//     musicPlatformsElem.textContent = translations[lang].musicPlatforms;
//   if (vkMusicElem) vkMusicElem.textContent = translations[lang].vkMusic;
//   if (yaMusicElem) yaMusicElem.textContent = translations[lang].yaMusic;
//   if (bookingElem) bookingElem.textContent = translations[lang].booking;
//   if (concertManagerElem)
//     concertManagerElem.textContent = translations[lang].concertManager;
//   if (contactNumberElem)
//     contactNumberElem.textContent = translations[lang].contactNumber;
//   if (managerNameElem)
//     managerNameElem.textContent = translations[lang].managerName;

//   document
//     .querySelectorAll(".language-btn")
//     .forEach((btn) => btn.classList.remove("isActiveLangBtn"));
//   document
//     .querySelector(`.language-btn[data-lang="${lang}"]`)
//     .classList.add("isActiveLangBtn");

//   localStorage.setItem("selectedLanguage", lang);
// }

const onlineStoreElem = document.getElementById("onlineStore");
const onlineStoreNoticeElem = document.getElementById("onlineStoreNotice");
const musicPlatformsElem = document.getElementById("musicPlatforms");
const vkMusicElem = document.getElementById("vkMusic");
const yaMusicElem = document.getElementById("yaMusic");
const bookingElem = document.getElementById("booking");
const concertManagerElem = document.getElementById("concertManager");
const contactNumberElem = document.getElementById("contactNumber");
const managerNameElem = document.getElementById("managerName");

const lablesToTranslate = [
  { class: "new", key: "new" },
  { class: "single", key: "single" },
  { class: "bandlink", key: "bandlink" },
  { class: "firstToListen", key: "firstToListen" },
  { class: "watch", key: "watch" },
  { class: "hit", key: "hit" },
  { class: "yourChoice", key: "yourChoice" },
  { class: "favourite", key: "favourite" },
];

function setupLanguageButtons(translations) {
  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      applyTranslation(selectedLang, translations);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadTranslations(function (translations) {
    setInitialLanguage(translations);
    setupLanguageButtons(translations);
  });
});

function loadTranslations(callback) {
  fetch("../data/language-data.json")
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error("Ошибка загрузки переводов:", error));
}

function setInitialLanguage(translations) {
  const savedLang = localStorage.getItem("selectedLanguage");
  const browserLang = navigator.language.slice(0, 2);

  let initialLang =
    savedLang || (["ru", "uz"].includes(browserLang) ? browserLang : "en");

  applyTranslation(initialLang, translations);
}

function applyTranslation(lang, translations) {
  if (onlineStoreElem) {
    onlineStoreElem.firstChild.textContent =
      translations[lang].onlineStore + " ";
  }

  if (onlineStoreNoticeElem) {
    onlineStoreNoticeElem.textContent = translations[lang].onlineStoreNotice;
  }

  if (musicPlatformsElem)
    musicPlatformsElem.textContent = translations[lang].musicPlatforms;
  if (vkMusicElem) vkMusicElem.textContent = translations[lang].vkMusic;
  if (yaMusicElem) yaMusicElem.textContent = translations[lang].yaMusic;
  if (bookingElem) bookingElem.textContent = translations[lang].booking;
  if (concertManagerElem)
    concertManagerElem.textContent = translations[lang].concertManager;
  if (contactNumberElem)
    contactNumberElem.textContent = translations[lang].contactNumber;
  if (managerNameElem)
    managerNameElem.textContent = translations[lang].managerName;

  lablesToTranslate.forEach(({ class: className, key }) => {
    document.querySelectorAll(`.${className}`).forEach((elem) => {
      elem.textContent = translations[lang][key];
    });
  });
  document
    .querySelectorAll(".language-btn")
    .forEach((btn) => btn.classList.remove("isActiveLangBtn"));
  document
    .querySelector(`.language-btn[data-lang="${lang}"]`)
    .classList.add("isActiveLangBtn");

  localStorage.setItem("selectedLanguage", lang);
}
