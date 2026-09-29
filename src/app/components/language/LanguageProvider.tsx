"use client";

import { createContext, useContext, useEffect, useState, useTransition, type ReactNode } from "react";
import { translations, type Lang } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  t: (typeof translations)[Lang];
  isSwitching: boolean;
  changeLanguage: (next: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("alb");
  const [isSwitching, setIsSwitching] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const saved = window.localStorage.getItem("lira-lang");
    if (saved === "eng" || saved === "alb") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "eng" ? "en" : "sq";
  }, [lang]);

  const changeLanguage = (next: Lang) => {
    if (next === lang || isSwitching) return;
    const scrollY = window.scrollY;
    setIsSwitching(true);
    window.setTimeout(() => {
      startTransition(() => {
        setLang(next);
        window.localStorage.setItem("lira-lang", next);
      });
      window.scrollTo(0, scrollY);
      setIsSwitching(false);
    }, 700);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], isSwitching, changeLanguage }}>
      {children}
      {isSwitching && (
        <div className="fixed inset-0 z-80 flex items-center justify-center bg-white/60">
          <div
            className="h-12 w-12 animate-spin rounded-full border-4 border-[#e10600]/20 border-t-[#e10600]"
            role="status"
            aria-label={lang === "eng" ? "Loading" : "Duke u ngarkuar"}
          />
        </div>
      )}
    </LanguageContext.Provider>
  );
}
