import React from 'react';

type LanguageCode = 'en' | 'fr' | 'de';

interface LanguageSelectorProps {
  onLanguageChange: (language: LanguageCode) => void;
}

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
];

export default function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
  return (
    <select
      onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
      className="bg-white text-[#111927] px-4 py-2 rounded-md text-sm"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}
