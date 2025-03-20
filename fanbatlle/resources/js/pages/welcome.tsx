import { Head, Link, usePage } from "@inertiajs/react";
import { type SharedData } from "@/types";
import logo from "../../img/logo.png";
import "../../css/app.css";
import LanguageSelector from "../components/LanguageSelector";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  en: {
    welcome: "Welcome to Article11",
    description: "We want to know what young Europeans think",
    see_more: "See more",
    sign_in: "Sign in",
    register: "Register",
  },
  fr: {
    welcome: "Bienvenue sur Article11",
    description: "Nous voulons savoir ce que les jeunes Européens pensent",
    see_more: "Voir plus",
    sign_in: "Se connecter",
    register: "S'inscrire",
  },
  de: {
    welcome: "Willkommen bei Article11",
    description: "Wir wollen wissen, was junge Europäer denken",
    see_more: "Mehr sehen",
    sign_in: "Anmelden",
    register: "Registrieren",
  },
};

export default function Welcome() {
  const { auth } = usePage<SharedData>().props;
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <Head title="Welcome" />

      <div className="min-h-screen flex flex-col md:flex-row">
        {}
        <div className="hidden md:flex w-full md:w-1/2 bg-white items-center justify-center py-8 md:py-0">
          <img src={logo} alt="Article11 Logo" className="w-64 md:w-96 h-64 md:h-96 object-contain" />
        </div>

        {}
        <div className="flex md:hidden min-h-screen w-full bg-[#111927] flex-col">
          <nav className="w-full flex justify-between p-4">
            <LanguageSelector onLanguageChange={setLanguage} /> {}
            {auth.user ? (
              <Link href="/dashboard" className="bg-white/90 hover:bg-white text-[#111927] px-4 py-1.5 rounded-md text-sm">
                Dashboard
              </Link>
            ) : (
              <div className="flex gap-2">
                <Link href="/login" className="bg-white/90 hover:bg-white text-[#111927] px-4 py-1.5 rounded-md text-sm">
                  {translations[language].sign_in}
                </Link>
                <Link href="/register" className="bg-[#D4AF37] hover:bg-yellow-400 text-[#111927] px-4 py-1.5 rounded-md text-sm">
                  {translations[language].register}
                </Link>
              </div>
            )}
          </nav>

          <div className="flex-1 flex flex-col items-center justify-center px-4">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8">
              <img src={logo} alt="Article11 Logo" className="w-24 h-24 object-contain" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4 text-center">{translations[language].welcome}</h1>
            <p className="text-yellow-400 text-sm mb-8 text-center">{translations[language].description}</p>
            <Link href="/about" className="bg-white text-[#111927] px-12 py-2 rounded-md text-base font-medium">
              {translations[language].see_more}
            </Link>
          </div>
        </div>

        {}
        <div className="hidden md:block w-full md:w-1/2 bg-[#111927] text-white relative min-h-screen md:min-h-full">
          <nav className="absolute w-full flex items-center justify-between px-4 md:px-12 pt-4 md:pt-6">
            <LanguageSelector onLanguageChange={setLanguage} /> {}
            <div className="flex items-center">
              {auth.user ? (
                <Link href="/dashboard" className="bg-white/90 hover:bg-white text-[#111927] px-3 md:px-4 py-1.5 rounded-md text-sm transition-colors">
                  Dashboard
                </Link>
              ) : (
                <div className="flex items-center gap-2 md:gap-3 mr-4">
                  <Link href="/login" className="bg-white/90 hover:bg-white text-[#111927] px-3 md:px-4 py-1.5 rounded-md text-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                    {translations[language].sign_in}
                  </Link>
                  <Link href="/register" className="bg-[#D4AF37] hover:bg-yellow-400 text-[#111927] px-3 md:px-4 py-1.5 rounded-md text-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                    {translations[language].register}
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <div className="flex flex-col items-center justify-center h-full space-y-4 md:space-y-6 px-4 md:px-8 pt-20 md:pt-0">
            <h1 className="text-3xl md:text-5xl font-bold text-center">{translations[language].welcome}</h1>
            <p className="text-lg md:text-xl text-yellow-400 text-center">{translations[language].description}</p>
            <Link href="/about" className="bg-white hover:bg-white/90 text-[#111927] px-6 md:px-8 py-2 rounded-full mt-4 md:mt-8 text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:scale-105">
              {translations[language].see_more}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
