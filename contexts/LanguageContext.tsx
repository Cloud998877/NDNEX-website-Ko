
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language } from '../types';
import { GET_CONTENT } from '../constants';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  content: ReturnType<typeof GET_CONTENT>;
  t: ReturnType<typeof GET_CONTENT>['UI'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const content = GET_CONTENT(language);

  // You could add logic here to detect browser language or persist to localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('ndnex-lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ko')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('ndnex-lang', lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ko' : 'en';
    handleSetLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleSetLanguage, 
      toggleLanguage,
      content,
      t: content.UI
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
