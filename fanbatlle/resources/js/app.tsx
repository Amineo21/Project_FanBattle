import "../css/app.css";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { initializeTheme } from "./hooks/use-appearance";
import axios from "axios";
import { LanguageProvider } from "./components/LanguageContext";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

const csrfToken = document.head.querySelector('meta[name="csrf-token"]')?.getAttribute("content");
if (csrfToken) {
  axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
}

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob("./pages/**/*.tsx")),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <LanguageProvider> {}
        <App {...props} />
      </LanguageProvider>
    );
  },
  progress: {
    color: "#4B5563",
  },
});

initializeTheme();
