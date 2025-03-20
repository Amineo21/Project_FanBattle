import { Link } from "@inertiajs/react";
import Logo from "../../img/logo.png";
import "../../css/app.css";
import { useState } from "react";
import { useLanguage } from "../../components/LanguageContext";

const translations = {
  en: {
    welcome: "Welcome to Article11",
    slogan: '"Your opinion is our matter"',
    try_out: "Try out",
    debate_title: "Law/Subject to debate!",
    debate_topic: "Debate Topic",
    majority: "Majority",
    for: "For",
    neutral: "Neutral",
    against: "Against",
  },
  fr: {
    welcome: "Bienvenue sur Article11",
    slogan: '"Votre opinion compte pour nous"',
    try_out: "Essayer",
    debate_title: "Lois / Sujet à débattre !",
    debate_topic: "Sujet de débat",
    majority: "Majorité",
    for: "Pour",
    neutral: "Neutre",
    against: "Contre",
  },
  de: {
    welcome: "Willkommen bei Article11",
    slogan: '"Ihre Meinung ist uns wichtig"',
    try_out: "Ausprobieren",
    debate_title: "Gesetz / Thema zur Debatte!",
    debate_topic: "Debattenthema",
    majority: "Mehrheit",
    for: "Dafür",
    neutral: "Neutral",
    against: "Dagegen",
  },
};

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <>
      <header className="bg-[#111927] py-8 md:py-32 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
          {translations[language].welcome}
        </h1>
        <p className="mb-5 text-lg md:text-xl text-[#D4AF37]">
          {translations[language].slogan}
        </p>
        <button className="w-60 bg-[#D4AF37] hover:bg-yellow-400 text-[#111927] py-3 rounded-lg text-base font-medium text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
          {translations[language].try_out}
        </button>
      </header>

      <main className="p-8 pt-16 bg-white">
        <h2 className="text-4xl font-bold mb-12 text-[#111927] relative pl-4 after:content-[''] after:absolute after:bottom-0 after:left-4 after:w-24 after:h-1 after:bg-[#D4AF37]">
          {translations[language].debate_title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="cursor-pointer scale-transition hover-scale bg-white rounded-lg p-6 relative border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 rounded-md mb-4"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-gavel text-4xl text-[#D4AF37]/50"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#111927] border-b border-transparent hover:border-[#D4AF37] transition-all duration-300 inline-block">
                  {translations[language].debate_topic} {index + 1}
                </h3>
                <div className="flex flex-col mt-4">
                  <h4 className="text-lg font-medium text-left mb-2 text-[#111927]">
                    {translations[language].majority}
                  </h4>
                  <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-md">
                    <span className="text-green-600 font-medium flex items-center">
                      <i className="fas fa-check-circle mr-2"></i>
                      {translations[language].for}
                    </span>
                    <span className="text-[#111927] opacity-50">•</span>
                    <span className="text-[#111927] font-medium flex items-center">
                      <i className="fas fa-balance-scale mr-2"></i>
                      {translations[language].neutral}
                    </span>
                    <span className="text-[#111927] opacity-50">•</span>
                    <span className="text-red-600 font-medium flex items-center">
                      <i className="fas fa-times-circle mr-2"></i>
                      {translations[language].against}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
