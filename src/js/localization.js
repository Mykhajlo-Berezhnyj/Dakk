import { accordeon } from "../data/accordeon.js";
import { base } from "../data/base.js";
import { images } from "../data/images.js";
import { menu } from "../data/menu.js";
import { getLocaleFromURL } from "../utils/getLocaleFromURL.js";
import { updateUrl } from "../utils/updateUrl.js";

export function localization() {
  return {
    locale: getLocaleFromURL(),
    menu,
    base,
    accordeon,
    images,

    t(field) {
      return field?.[this.locale] || field.ua || field.en;
    },

    setLocale(lang) {
      this.locale = lang;
      updateUrl(lang);
    },
  };
}
