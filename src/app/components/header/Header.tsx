"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../language/LanguageProvider";

const brands = [
  { href: "/products/lira-brand", label: "Lira Brand", image: "/assets/lira logo.png", wash: "bg-[#fff4f4]", accent: "#a72b2b" },
  { href: "/products/kestrina", label: "Kestrina", image: "/assets/kestrina logo.png", wash: "bg-[#fff1f1]", accent: "#cf0207" },
  { href: "/products/natural", label: "Natural", image: "/assets/natural logo.png", wash: "bg-[#fff8e8]", accent: "#b8960f" },
  { href: "/products/frisch", label: "Frisch", image: "/assets/frisch logo.png", wash: "bg-[#f2f9fb]", accent: "#167ea1" },
];

const navBaseClass =
  "cursor-pointer text-[11px] font-lemonmilk-regular uppercase tracking-[0.14em] transition-all duration-300 lg:text-[13px] xl:text-sm";

type BarVariant = "red" | "natural" | "frisch";

function navLinkClass(active: boolean, bar: BarVariant) {
  const activeColor =
    bar === "natural" ? "text-[#4a3600]" : bar === "frisch" ? "text-[#fff9c4]" : "text-[#ffe566]";
  if (active) {
    return `${navBaseClass} ${activeColor} font-semibold underline decoration-2 underline-offset-[7px] decoration-current opacity-100`;
  }
  return `${navBaseClass} text-white opacity-90 hover:opacity-65`;
}

function mobileNavClass(active: boolean, bar: BarVariant) {
  const activeColor =
    bar === "natural" ? "text-[#4a3600]" : bar === "frisch" ? "text-[#fff9c4]" : "text-[#ffe566]";
  if (active) {
    return `font-lemonmilk-regular text-lg uppercase tracking-wide ${activeColor} font-semibold underline decoration-2 underline-offset-4`;
  }
  return "font-lemonmilk-regular text-lg uppercase tracking-wide text-white/95";
}

const menuEase = [0.16, 1, 0.3, 1] as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className={`h-4 w-4 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "rotate-180" : ""}`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileBrandsOpen, setIsMobileBrandsOpen] = useState(false);
  const { lang, t, changeLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const brandsCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openBrandsMenu = () => {
    if (brandsCloseTimerRef.current) {
      clearTimeout(brandsCloseTimerRef.current);
      brandsCloseTimerRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const scheduleCloseBrandsMenu = () => {
    if (brandsCloseTimerRef.current) clearTimeout(brandsCloseTimerRef.current);
    brandsCloseTimerRef.current = setTimeout(() => setIsDropdownOpen(false), 140);
  };

  const handleBrandsPointerEnter = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover) and (min-width: 1024px)").matches) {
      openBrandsMenu();
    }
  };

  const handleBrandsPointerLeave = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover) and (min-width: 1024px)").matches) {
      scheduleCloseBrandsMenu();
    }
  };
  const isHome = pathname === "/";
  const isNatural = pathname === "/products/natural";
  const isFrisch = pathname === "/products/frisch";
  const barColor = isNatural ? "bg-[#e4bc28]" : isFrisch ? "bg-[#48bd4a]" : "bg-[#e10600]";
  const barVariant: BarVariant = isNatural ? "natural" : isFrisch ? "frisch" : "red";
  const isAboutActive = pathname === "/about";
  const isBrandsActive = pathname.startsWith("/products");
  const isContactActive = pathname === "/contact";
  const langActiveClass =
    barVariant === "natural"
      ? "text-[#4a3600] font-semibold opacity-100"
      : barVariant === "frisch"
        ? "text-[#fff9c4] font-semibold opacity-100"
        : "text-[#ffe566] font-semibold opacity-100";
  const langIdleClass = "text-white opacity-45 hover:opacity-70";

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileBrandsOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (brandsCloseTimerRef.current) clearTimeout(brandsCloseTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsDropdownOpen(false);
      }
      if (headerRef.current && !headerRef.current.contains(target)) {
        setIsMenuOpen(false);
        setIsMobileBrandsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  return (
    <>
      <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 px-2.5 pt-2.5 sm:px-3.5 sm:pt-3.5 lg:px-5 lg:pt-5">
        {(isDropdownOpen || isMenuOpen) && (
          <button
            type="button"
            aria-label={t.nav.closeMenu}
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => {
              setIsDropdownOpen(false);
              setIsMenuOpen(false);
              setIsMobileBrandsOpen(false);
            }}
          />
        )}
        <nav
          className={`relative z-50 flex items-center justify-between rounded-2xl px-4 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:rounded-[18px] sm:px-7 sm:py-4 lg:px-12 lg:py-10 xl:py-12 ${barColor}`}
        >
          <div className="hidden items-center gap-6 md:flex lg:gap-9 xl:gap-12">
            <Link href="/" className={navLinkClass(isHome, barVariant)} aria-current={isHome ? "page" : undefined}>
              {t.nav.home}
            </Link>
            <Link href="/about" className={navLinkClass(isAboutActive, barVariant)} aria-current={isAboutActive ? "page" : undefined}>
              {t.nav.about}
            </Link>
            <div
              className="relative flex items-center self-stretch"
              ref={dropdownRef}
              onMouseEnter={handleBrandsPointerEnter}
              onMouseLeave={handleBrandsPointerLeave}
            >
              <button
                type="button"
                onClick={() => setIsDropdownOpen((open) => !open)}
                className={`${navLinkClass(isBrandsActive, barVariant)} inline-flex items-center gap-1`}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                aria-current={isBrandsActive ? "true" : undefined}
              >
                {t.nav.brands}
                <Chevron open={isDropdownOpen} />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 18, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 14, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: menuEase }}
                    className="absolute left-0 top-full z-50 w-[min(460px,calc(100vw-2.5rem))] pt-3 lg:w-[min(620px,calc(100vw-3rem))]"
                  >
                    <div className="rounded-3xl bg-white p-4 shadow-[0_32px_70px_rgba(0,0,0,0.2)] ring-1 ring-black/5 lg:p-6">
                      <div className="grid grid-cols-2 gap-3 lg:gap-4">
                        {brands.map((brand, index) => (
                          <motion.div
                            key={brand.href}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.04 + index * 0.07,
                              duration: 0.42,
                              ease: menuEase,
                            }}
                          >
                            <Link
                              href={brand.href}
                              onClick={() => setIsDropdownOpen(false)}
                              className={`group flex flex-col items-center justify-center rounded-2xl px-4 py-6 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] lg:py-8 ${brand.wash} ${pathname === brand.href ? "ring-2 ring-[#e10600]/35 ring-offset-2 ring-offset-white" : ""}`}
                              aria-current={pathname === brand.href ? "page" : undefined}
                            >
                              <Image
                                src={brand.image}
                                alt={brand.label}
                                width={160}
                                height={80}
                                className="h-16 w-auto object-contain transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] lg:h-24"
                              />
                              <span
                                className="mt-4 font-lemonmilk text-sm uppercase tracking-wide transition duration-500 group-hover:tracking-wider lg:text-base"
                                style={{ color: brand.accent }}
                              >
                                {brand.label}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative z-10 mr-auto shrink-0 rounded-xl outline-none transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:absolute md:left-1/2 md:top-1/2 md:mr-0 md:-translate-x-1/2 md:-translate-y-1/2 focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            <span
              className="pointer-events-none absolute -inset-2 rounded-xl bg-white/0 transition duration-500 group-hover:bg-white/10 group-active:bg-white/5"
              aria-hidden
            />
            <Image
              src="/assets/logo/logo-liramark.png"
              alt="Lira Mark"
              width={266}
              height={55}
              priority
              className="relative h-7 w-auto transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] group-hover:drop-shadow-[0_6px_18px_rgba(0,0,0,0.22)] group-active:scale-[0.98] sm:h-8 lg:h-11 xl:h-12"
            />
          </Link>

          <div className="hidden items-center gap-4 md:flex lg:gap-5">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => changeLanguage("eng")}
                className={`${navBaseClass} ${lang === "eng" ? langActiveClass : langIdleClass}`}
              >
                Eng
              </button>
              <button
                type="button"
                onClick={() => changeLanguage("alb")}
                className={`${navBaseClass} ${lang === "alb" ? langActiveClass : langIdleClass}`}
              >
                Alb
              </button>
            </div>
            <span className="h-4 w-px bg-white/90" />
            <Link
              href="/contact"
              className={navLinkClass(isContactActive, barVariant)}
              aria-current={isContactActive ? "page" : undefined}
            >
              {t.nav.contact}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsMenuOpen((open) => !open);
              setIsMobileBrandsOpen(false);
            }}
            className="relative z-10 inline-flex h-10 w-10 items-center justify-center text-white md:hidden"
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`relative z-50 mt-2 overflow-hidden rounded-2xl text-white md:hidden ${barColor}`}
            >
              <div className="flex flex-col gap-5 px-6 py-6">
                <Link
                  href="/"
                  className={mobileNavClass(isHome, barVariant)}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isHome ? "page" : undefined}
                >
                  {t.nav.home}
                </Link>
                <Link
                  href="/about"
                  className={mobileNavClass(isAboutActive, barVariant)}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isAboutActive ? "page" : undefined}
                >
                  {t.nav.about}
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMobileBrandsOpen((open) => !open)}
                  className={`inline-flex items-center gap-1 text-left ${mobileNavClass(isBrandsActive, barVariant)}`}
                  aria-expanded={isMobileBrandsOpen}
                  aria-current={isBrandsActive ? "true" : undefined}
                >
                  {t.nav.brands}
                  <Chevron open={isMobileBrandsOpen} />
                </button>
                <AnimatePresence initial={false}>
                  {isMobileBrandsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="-mt-2 overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-2.5 border-l border-white/35 py-1 pl-4 sm:gap-3">
                        {brands.map((brand, index) => (
                          <motion.div
                            key={brand.href}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 + index * 0.06, duration: 0.38, ease: menuEase }}
                          >
                            <Link
                              href={brand.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileBrandsOpen(false);
                              }}
                              className={`flex flex-col items-center rounded-xl px-2 py-3 transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] ${brand.wash} ${pathname === brand.href ? "ring-2 ring-white/70" : ""}`}
                              aria-current={pathname === brand.href ? "page" : undefined}
                            >
                              <Image
                                src={brand.image}
                                alt={brand.label}
                                width={120}
                                height={64}
                                className="h-11 w-auto object-contain sm:h-12"
                              />
                              <span
                                className="mt-2 text-center font-lemonmilk-regular text-[10px] uppercase tracking-wide sm:text-xs"
                                style={{ color: brand.accent }}
                              >
                                {brand.label}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => changeLanguage("eng")}
                    className={`font-lemonmilk-regular uppercase tracking-wide ${lang === "eng" ? langActiveClass : langIdleClass}`}
                  >
                    Eng
                  </button>
                  <button
                    type="button"
                    onClick={() => changeLanguage("alb")}
                    className={`font-lemonmilk-regular uppercase tracking-wide ${lang === "alb" ? langActiveClass : langIdleClass}`}
                  >
                    Alb
                  </button>
                  <span className="h-4 w-px bg-white" />
                  <Link
                    href="/contact"
                    className={mobileNavClass(isContactActive, barVariant)}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isContactActive ? "page" : undefined}
                  >
                    {t.nav.contact}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {!isHome && <div className="h-[78px] sm:h-[92px] lg:h-[168px] xl:h-[188px]" />}
    </>
  );
}
