"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../language/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

const goTop = () => window.scrollTo(0, 0);

const footerBrands = [
  { href: "/products/lira-brand", label: "Lira Brand" },
  { href: "/products/kestrina", label: "Kestrina" },
  { href: "/products/natural", label: "Natural" },
  { href: "/products/frisch", label: "Frisch" },
];

function SimpleFooter({
  variant = "lira",
}: {
  variant?: "lira" | "kestrina" | "natural" | "frisch" | "contact";
}) {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const bg =
    variant === "kestrina"
      ? "bg-[#cf0207]"
      : variant === "natural"
        ? "bg-[#f1d13b]"
        : variant === "frisch"
          ? "bg-[#48bd4a]"
          : variant === "contact"
            ? "bg-[#e10600]"
            : "bg-[#c21c1e]";

  return (
    <footer className={`${bg} text-white`}>
      {(variant === "kestrina" ||
        variant === "natural" ||
        variant === "frisch" ||
        variant === "contact") && <div className="h-px bg-white/85" />}
      <p className="px-6 py-6 text-center text-sm sm:text-base">
        © {year} LIRA MARK. {t.footer.reserved}
      </p>
    </footer>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [showMap, setShowMap] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);

  if (pathname === "/products/lira-brand") {
    return <SimpleFooter variant="lira" />;
  }

  if (pathname === "/products/kestrina") {
    return <SimpleFooter variant="kestrina" />;
  }

  if (pathname === "/products/natural") {
    return <SimpleFooter variant="natural" />;
  }

  if (pathname === "/products/frisch") {
    return <SimpleFooter variant="frisch" />;
  }

  if (pathname === "/contact") {
    return <SimpleFooter variant="contact" />;
  }

  return (
    <footer className="w-full overflow-x-clip bg-[#e10600] text-white">
      <div className="px-6 py-12 sm:px-10 sm:py-14 lg:px-20 lg:py-16">
        <motion.p
          className="text-center text-sm font-bold uppercase tracking-[0.22em] sm:text-base"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease }}
        >
          Lira Mark L.L.C
        </motion.p>

        <div className="mt-6 h-px bg-white/90" />

        <motion.div
          className="mt-10 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wide sm:text-base">{t.footer.contact}</h3>
            <p className="mt-6 text-sm font-semibold">{t.footer.address}</p>
            <p className="mt-2 max-w-60 text-sm leading-relaxed text-white/95">
              RR.Epopeja e Jezercit, Ferizaj, Kosovo, 70000
            </p>
            <p className="mt-6 text-sm font-semibold">{t.footer.mobile}</p>
            <a href="tel:+38344779000" className="mt-2 block text-sm hover:underline">
              +383 44 779 000
            </a>
            <a href="tel:+38344171676" className="block text-sm hover:underline">
              +383 44 171 676
            </a>
            <p className="mt-6 text-sm font-semibold">{t.footer.email}</p>
            <a href="mailto:ntpshlira@yahoo.com" className="mt-2 block text-sm hover:underline">
              ntpshlira@yahoo.com
            </a>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wide sm:text-base">{t.footer.content}</h3>
            <nav className="mt-6 flex flex-col gap-1.5 text-sm">
              <Link href="/" onClick={goTop} className="hover:underline">
                {t.footer.home}
              </Link>
              <Link href="/about" onClick={goTop} className="hover:underline">
                {t.footer.about}
              </Link>
              <div>
                <button
                  type="button"
                  onClick={() => setBrandsOpen((open) => !open)}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-left hover:underline"
                  aria-expanded={brandsOpen}
                >
                  {t.nav.brands}
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                    className={`h-4 w-4 shrink-0 transition-transform duration-300 ${brandsOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {brandsOpen && (
                  <div className="mt-2 flex flex-col gap-1.5 border-l border-white/45 py-0.5 pl-3">
                    {footerBrands.map((brand) => (
                      <Link
                        key={brand.href}
                        href={brand.href}
                        onClick={() => {
                          goTop();
                          setBrandsOpen(false);
                        }}
                        className="text-white/95 hover:text-white hover:underline"
                      >
                        {brand.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/contact" onClick={goTop} className="hover:underline">
                {t.footer.contactLink}
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wide sm:text-base">{t.footer.social}</h3>
            <p className="mt-6 text-sm">{t.footer.follow}</p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://www.instagram.com/lirabrandtea/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Lirabrand"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-80"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.1C12.2 3 11 4.4 11 6.6v1.9H9v2.8h2V21h3.5v-9.7h2.3l.4-2.8h-2.7z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 h-px bg-white/90 sm:mt-16" />

        <div className="relative overflow-hidden py-8 text-center sm:py-10">
          <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] select-none whitespace-nowrap font-lemonmilk text-[12vw] uppercase leading-none text-white/15 sm:text-7xl lg:text-8xl">
            {t.footer.map}
          </span>
          <button
            type="button"
            onClick={() => setShowMap((open) => !open)}
            className="relative z-10 flex w-full cursor-pointer flex-col items-center rounded-lg transition duration-300 hover:opacity-90 active:opacity-80"
            aria-expanded={showMap}
          >
            <span className="font-lemonmilk text-lg uppercase tracking-wide transition duration-300 hover:tracking-wider sm:text-2xl">
              {t.footer.map}
            </span>
            <svg
              className={`mt-2 h-5 w-5 transition-transform duration-300 ${showMap ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {showMap && (
            <div className="relative z-10 mx-auto mt-6 h-80 w-full max-w-4xl overflow-hidden bg-white sm:h-[420px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.4422524543024!2d21.085321474998832!3d42.36922343452427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13547faaa67990d3%3A0x70d2ce2534fac529!2sR206%2C%2070000!5e1!3m2!1sen!2sus!4v1763922723112!5m2!1sen!2sus"
                title="Lira Mark location"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
        </div>

        <div className="h-px bg-white/90" />

        <p className="pt-8 text-center text-xs text-white/95 sm:text-sm">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
