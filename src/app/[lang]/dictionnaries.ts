import "server-only";

const dictionnaries = {
  fr: () =>
    import("../../features/dictionnaries/fr.json").then(
      (module) => module.default,
    ),
  pt: () =>
    import("../../features/dictionnaries/pt.json").then(
      (module) => module.default,
    ),
  es: () =>
    import("../../features/dictionnaries/es.json").then(
      (module) => module.default,
    ),
  en: () =>
    import("../../features/dictionnaries/en.json").then(
      (module) => module.default,
    ),
};

export type Locale = keyof typeof dictionnaries;

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionnaries;

export const getDictionnary = async (locale: Locale) => {
  return dictionnaries[locale]?.() ?? dictionnaries.fr();
};
