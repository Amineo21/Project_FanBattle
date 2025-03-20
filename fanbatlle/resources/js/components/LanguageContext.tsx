import React, { createContext, useContext, useState, ReactNode } from "react";

// Type des langues disponibles
type LanguageCode = "en" | "fr" | "de";

// Type du contexte
interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

// Création du contexte avec une valeur par défaut
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Hook personnalisé pour accéder facilement au contexte
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Provider qui englobe l'application et gère la langue
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
