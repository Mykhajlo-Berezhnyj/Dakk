import { DEFAULT_LANG, SUPPORTED_LANG } from "../data/lang";

export function updateUrl(locale) {
  const path = globalThis.location.pathname.split("/").filter(Boolean);
  const firstSegmentIsLocale = SUPPORTED_LANG.includes(path[0]);

  if (locale === DEFAULT_LANG) {
    if (firstSegmentIsLocale) {
      path.shift();
    }
  } else {
    if (firstSegmentIsLocale) {
      path[0] = locale;
    } else {
      path.unshift(locale);
    }
  }
  const newPath = "/" + path.join("/");

  globalThis.history.pushState({}, "", newPath);
}
