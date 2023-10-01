interface Language {
  label: string;
  icon: string;
}

const languages: Record<string, Language> = {
  en: {
    label: "English",
    icon: "🇬🇧",
  },
  zhHK: {
    label: "繁體中文",
    icon: "🇭🇰",
  },
};

export default languages;