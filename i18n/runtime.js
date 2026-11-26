/**
 * Lightweight client-side i18n for the static homepage.
 * Requires i18n/strings.js first.
 */
(function (global) {
  var I = global.ZonitedI18n;
  if (!I || !I.STRINGS) return;

  var MOBILE_MQ = "(max-width: 860px)";

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

  function isMobile() {
    return window.matchMedia(MOBILE_MQ).matches;
  }

  function syncSelectLabels(select) {
    if (!select) return;
    var useShort = isMobile();
    I.LOCALES.forEach(function (locale) {
      var opt = select.querySelector('option[value="' + locale.code + '"]');
      if (opt) opt.textContent = useShort ? locale.short : locale.label;
    });
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

    var select = document.getElementById("lang-select");
    if (select) {
      select.value = lang;
      syncSelectLabels(select);
    }

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

  function initSelect(select) {
    if (!select) return;
    select.innerHTML = "";
    I.LOCALES.forEach(function (locale) {
      var opt = document.createElement("option");
      opt.value = locale.code;
      opt.textContent = isMobile() ? locale.short : locale.label;
      select.appendChild(opt);
    });
    select.value = getLang();
    select.addEventListener("change", function () {
      setLang(select.value);
    });
    window.matchMedia(MOBILE_MQ).addEventListener("change", function () {
      syncSelectLabels(select);
    });
  }

  function init() {
    var select = document.getElementById("lang-select");
    initSelect(select);
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
