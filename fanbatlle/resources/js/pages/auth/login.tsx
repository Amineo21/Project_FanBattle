import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import React from "react";
import Logo from "../../../img/logo.png";
import { useLanguage } from "../../components/LanguageContext"; // ✅ Utilisation du contexte pour la langue globale

// Traductions
const translations = {
  en: {
    title: "Connect to your account",
    email: "Email",
    password: "Password",
    sign_in: "Sign In",
    forgot_password: "Forgot password?",
    no_account: "Don't have an account yet?",
  },
  fr: {
    title: "Connectez-vous à votre compte",
    email: "Email",
    password: "Mot de passe",
    sign_in: "Se connecter",
    forgot_password: "Mot de passe oublié ?",
    no_account: "Pas encore de compte ?",
  },
  de: {
    title: "Melden Sie sich bei Ihrem Konto an",
    email: "E-Mail",
    password: "Passwort",
    sign_in: "Anmelden",
    forgot_password: "Passwort vergessen?",
    no_account: "Noch kein Konto?",
  },
};

interface LoginProps {
  status?: string;
  canResetPassword: boolean;
}

// Type du formulaire
type FormData = {
  email: string;
  password: string;
  remember: boolean;
};

export default function Login({ status, canResetPassword }: LoginProps) {
  const { data, setData, post, processing } = useForm<FormData>({
    email: "",
    password: "",
    remember: false,
  });

  const { language } = useLanguage(); // ✅ On garde la langue globale, mais on ne met plus de bouton

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route("login"));
  };

  return (
    <>
      <Head title={translations[language].sign_in} />

      <div className="min-h-screen flex items-center justify-center bg-[#111927] p-4">
        <div className="w-full max-w-md bg-white rounded-2xl p-8">
          <div className="text-center">
            <img src={Logo} alt="Article11 Logo" className="w-32 h-32 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-[#111927] mb-8">
              {translations[language].title}
            </h2>
          </div>

          <form onSubmit={submit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations[language].email}
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-0 placeholder-gray-600 text-black caret-black"
                placeholder={translations[language].email}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations[language].password}
              </label>
              <input
                type="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-0 placeholder-gray-600 text-black caret-black"
                placeholder={translations[language].password}
              />
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full bg-[#2F2F2F] text-white py-3 rounded-md hover:bg-[#1a1a1a] transition-colors"
            >
              {translations[language].sign_in}
            </button>

            <div className="flex items-center justify-between text-sm">
              {canResetPassword && (
                <Link href={route("password.request")} className="text-blue-600 hover:text-blue-800 underline">
                  {translations[language].forgot_password}
                </Link>
              )}
              <Link href={route("register")} className="text-gray-600 hover:text-gray-800 underline">
                {translations[language].no_account}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
