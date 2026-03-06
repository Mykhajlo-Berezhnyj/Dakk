import { DEFAULT_LANG, SUPPORTED_LANG } from "../data/lang";

export function getLocaleFromURL() {
  const path = globalThis.location.pathname.split("/");
  const firstSegmentIsLocale = SUPPORTED_LANG.includes(path[0]);

  if (firstSegmentIsLocale) return path[0];

  return DEFAULT_LANG;
}
