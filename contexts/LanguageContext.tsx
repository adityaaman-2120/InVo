import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { Language, TRANSLATIONS } from '@/constants/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => Promise<void>;
  t: (section: string, key: string, ...args: (string | number)[]) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'English',
  setLanguage: async () => {},
  t: (section, key) => `${section}.${key}`,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('English');

  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem('@invo_settings');
        if (saved) {
          const s = JSON.parse(saved);
          if (s.language) setLanguageState(s.language);
        }
      } catch {}
    })();
  }, []);

  const setLanguage = useCallback(async (lang: Language) => {
    setLanguageState(lang);
    try {
      const saved = await AsyncStorage.getItem('@invo_settings');
      const s = saved ? JSON.parse(saved) : {};
      s.language = lang;
      await AsyncStorage.setItem('@invo_settings', JSON.stringify(s));
    } catch {}
  }, []);

  const t = useCallback(
    (section: string, key: string, ...args: (string | number)[]): string => {
      const sectionMap = TRANSLATIONS[section];
      if (!sectionMap) return `${section}.${key}`;
      const entry = sectionMap[key];
      if (!entry) return `${section}.${key}`;
      let text = entry[language] || entry['English'] || key;
      if (args.length > 0) {
        let i = 0;
        text = text.replace(/%s/g, () => String(args[i++] ?? ''));
      }
      return text;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
