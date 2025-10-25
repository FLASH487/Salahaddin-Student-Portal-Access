
document.body.style.opacity = 0;
window.addEventListener("load", () => {
  document.body.style.transition = "opacity 0.4s ease";
  document.body.style.opacity = 1;
  showToast("Welcome to Salahaddin University Portal 🌟");
});


const texts = {
  en: {
    title: "Salahaddin University",
    intro: "Easily access Salahaddin University’s official portals.",
    loginText: "Student System",
    websiteText: "Website",
    facebookText: "Facebook",
    linkedinText: "LinkedIn",
    langLabel: "🌍 Language:",
    credit: "Developed by Mustafa Masood © 2025"
  },
  ku: {
    title: "زانکۆی سه‌لاحه‌دین",
    intro: "بە ئاسانی دەستت پێدەگات بە پلاتفۆرمە فەرمییەکانی زانکۆ.",
    loginText: "سیستەمی خوێندکار",
    websiteText: "ماڵپه‌ڕ",
    facebookText: "فەیسبوک",
    linkedinText: "لینکدین",
    langLabel: "🌍 زمان:",
    credit: "دروستکراوە لەلایەن موستەفا مەسعود © ٢٠٢٥"
  },
  ar: {
    title: "جامعة صلاح الدين",
    intro: "الوصول بسهولة إلى بوابات الجامعة الرسمية.",
    loginText: "نظام الطلبة",
    websiteText: "الموقع الرسمي",
    facebookText: "فيسبوك",
    linkedinText: "لينكدإن",
    langLabel: "🌍 اللغة:",
    credit: "تم التطوير بواسطة مصطفى مسعود © 2025"
  }
};


function updateLanguage(lang) {
  const t = texts[lang];
  document.getElementById("title").innerText = t.title;
  document.getElementById("intro").innerText = t.intro;
  document.getElementById("loginText").innerText = t.loginText;
  document.getElementById("websiteText").innerText = t.websiteText;
  document.getElementById("facebookText").innerText = t.facebookText;
  document.getElementById("linkedinText").innerText = t.linkedinText;
  document.getElementById("langLabel").innerText = t.langLabel;
  document.getElementById("credit").innerText = t.credit;
}


const langSelect = document.getElementById("language");
langSelect.addEventListener("change", () => {
  const lang = langSelect.value;
  updateLanguage(lang);
  localStorage.setItem("selectedLang", lang);
});


const savedLang = localStorage.getItem("selectedLang") || "en";
langSelect.value = savedLang;
updateLanguage(savedLang);


const footer = document.querySelector(".footer");
const time = document.createElement("p");
time.style.fontSize = "0.75rem";
time.style.color = "#888";
setInterval(() => {
  time.textContent = `🕒 ${new Date().toLocaleTimeString()}`;
}, 1000);
footer.appendChild(time);


function showToast(msg) {
  const toast = document.createElement("div");
  toast.textContent = msg;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "#7a0010";
  toast.style.color = "white";
  toast.style.padding = "10px 16px";
  toast.style.borderRadius = "8px";
  toast.style.fontSize = "0.85rem";
  toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  toast.style.zIndex = "9999";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.5s";
    toast.style.opacity = "0";
  }, 2000);
  setTimeout(() => toast.remove(), 2500);
}
