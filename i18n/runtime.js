/**
 * Lightweight client-side i18n for the static homepage.
 * Requires i18n/strings.js first.
 */
(function (global) {
  var I = global.ZonitedI18n;
  if (!I || !I.STRINGS) return;

  function t(key, lang) {
    var entry = I.STRINGS[key];
    if (!entry) return "";
    return entry[lang] || entry[I.DEFAULT_LANG] || "";
  }

  function getLang() {
    try {
      var stored = localStorage.getItem(I.STORAGE_KEY);
      if (stored && I.LOCALES.some(function (l) { return l.code === stored; })) {
        return stored;
      }
    } catch (e) { /* private mode */ }
    return I.DEFAULT_LANG;
  }

  function setStored(lang) {
    try {
      localStorage.setItem(I.STORAGE_KEY, lang);
    } catch (e) { /* ignore */ }
  }

  function localeByCode(code) {
    for (var i = 0; i < I.LOCALES.length; i++) {
      if (I.LOCALES[i].code === code) return I.LOCALES[i];
    }
    return I.LOCALES[0];
  }

  function syncLangControl(lang) {
    var current = document.getElementById("lang-current");
    var menu = document.getElementById("lang-menu");
    var locale = localeByCode(lang);
    if (current) current.textContent = locale.short;
    if (!menu) return;
    menu.querySelectorAll("[role='option']").forEach(function (opt) {
      var selected = opt.getAttribute("data-lang") === lang;
      opt.setAttribute("aria-selected", selected ? "true" : "false");
      opt.classList.toggle("is-selected", selected);
    });
  }

  function closeLangMenu() {
    var toggle = document.getElementById("lang-toggle");
    var menu = document.getElementById("lang-menu");
    if (menu) menu.hidden = true;
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  function openLangMenu() {
    var toggle = document.getElementById("lang-toggle");
    var menu = document.getElementById("lang-menu");
    if (menu) menu.hidden = false;
    if (toggle) toggle.setAttribute("aria-expanded", "true");
  }

  function toggleLangMenu() {
    var menu = document.getElementById("lang-menu");
    if (!menu) return;
    if (menu.hidden) openLangMenu();
    else closeLangMenu();
  }

  function apply(lang) {
    if (!I.LOCALES.some(function (l) { return l.code === lang; })) {
      lang = I.DEFAULT_LANG;
    }

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = t(key, lang);
      if (!value) return;
      el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      var value = t(key, lang);
      if (!value) return;
      el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr");
      if (!spec) return;
      spec.split(",").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length < 2) return;
        var attr = parts[0].trim();
        var key = parts.slice(1).join(":").trim();
        var value = t(key, lang);
        if (!value) return;
        el.setAttribute(attr, value);
        if (el.tagName === "TITLE" && attr === "text") {
          document.title = value;
        }
      });
    });

    var titleKey = document.querySelector("title[data-i18n]");
    if (titleKey) {
      document.title = t(titleKey.getAttribute("data-i18n"), lang);
    } else {
      var metaTitle = t("meta.title", lang);
      if (metaTitle) document.title = metaTitle;
    }

    document.querySelectorAll("[data-i18n-wa]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-wa");
      var prefill = t(key, lang);
      if (!prefill) return;
      el.setAttribute("href", I.WA_PREFIX + encodeURIComponent(prefill));
    });

    syncLangControl(lang);
    closeLangMenu();

    // Refresh open service tip if present
    var liveTip = document.getElementById("service-tip-live");
    var openChip = document.querySelector(".service-chip.is-open");
    if (liveTip && openChip && liveTip.classList.contains("is-visible")) {
      liveTip.textContent = openChip.getAttribute("data-tip") || "";
    }

    setStored(lang);
    I.currentLang = lang;
  }

  function setLang(lang) {
    apply(lang);
  }

  function initLangSwitch() {
    var toggle = document.getElementById("lang-toggle");
    var menu = document.getElementById("lang-menu");
    if (!toggle || !menu) return;

    menu.innerHTML = "";
    I.LOCALES.forEach(function (locale) {
      var opt = document.createElement("li");
      opt.setAttribute("role", "option");
      opt.setAttribute("data-lang", locale.code);
      opt.setAttribute("tabindex", "-1");
      opt.textContent = locale.label;
      opt.addEventListener("click", function () {
        setLang(locale.code);
      });
      menu.appendChild(opt);
    });

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleLangMenu();
    });

    document.addEventListener("click", function (e) {
      if (!menu.hidden && !menu.contains(e.target) && e.target !== toggle) {
        closeLangMenu();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLangMenu();
    });
  }

  function init() {
    initLangSwitch();
    apply(getLang());
  }

  I.t = t;
  I.getLang = getLang;
  I.setLang = setLang;
  I.apply = apply;
  I.init = init;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(typeof window !== "undefined" ? window : globalThis);
