import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import React from "react";
import Logo from "../../../img/logo.png";
import countries from "../../components/JSON/country.json";
import { useLanguage } from "../../components/LanguageContext";


const translations = {
  en: {
    title: "Create your account",
    name: "Name",
    email: "Email",
    password: "Password",
    birthday: "Date of Birth",
    country: "Country",
    register: "Register",
    already_account: "Already have an account?",
  },
  fr: {
    title: "Créer votre compte",
    name: "Nom",
    email: "Email",
    password: "Mot de passe",
    birthday: "Date de naissance",
    country: "Pays",
    register: "S'inscrire",
    already_account: "Vous avez déjà un compte ?",
  },
  de: {
    title: "Erstellen Sie Ihr Konto",
    name: "Name",
    email: "E-Mail",
    password: "Passwort",
    birthday: "Geburtsdatum",
    country: "Land",
    register: "Registrieren",
    already_account: "Sie haben bereits ein Konto?",
  },
};

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  birthday: string;
  country: string;
};

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
    name: "",
    email: "",
    password: "",
    birthday: "",
    country: "",
  });

  const { language } = useLanguage();

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route("register"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <>
      <Head title={translations[language].register} />
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
                {translations[language].name}
              </label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-0 placeholder-gray-600 text-black caret-black"
                placeholder={translations[language].name}
              />
            </div>

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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations[language].birthday}
              </label>
              <input
                type="date"
                value={data.birthday}
                onChange={(e) => setData("birthday", e.target.value)}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-0 placeholder-gray-600 text-black caret-black"
              />
              {errors.birthday && <p className="text-red-500 text-sm mt-1">{errors.birthday}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations[language].country}
              </label>
              <input
                type="text"
                list="country-list"
                value={data.country}
                onChange={(e) => setData("country", e.target.value)}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-0 text-black"
                placeholder={translations[language].country}
              />
              <datalist id="country-list">
                {countries.map((country) => (
                  <option key={country.code} value={country.name} />
                ))}
              </datalist>
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full bg-[#2F2F2F] text-white py-3 rounded-md hover:bg-[#1a1a1a] transition-colors"
            >
              {translations[language].register}
            </button>

            <div className="flex items-center justify-center text-sm">
              <Link href={route("login")} className="text-gray-600 hover:text-gray-800 underline">
                {translations[language].already_account}
              </Link>
            </div>

            {Object.keys(errors).map((field) => (
              <div key={field} className="text-red-500 text-sm mt-1">
                {errors[field as keyof RegisterForm]}
              </div>
            ))}
          </form>
        </div>
      </div>
    </>
  );
}
