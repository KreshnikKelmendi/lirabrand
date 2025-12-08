"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MdArrowDropDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

// Brand configuration
const brandConfig: Record<string, { bgColor: string; logoText: string; linkColor: string; accentColor: string }> = {
  "lira-brand": {
    bgColor: "#ffffff",
    logoText: "LIRA BRAND",
    linkColor: "#a72b2b",
    accentColor: "#a72b2b",
  },
  "kestrina": {
    bgColor: "#cf0207",
    logoText: "KESTRINA",
    linkColor: "#ffffff",
    accentColor: "#2d5016",
  },
  "natural": {
    bgColor: "#d1b31e",
    logoText: "NATURAL",
    linkColor: "#ffffff",
    accentColor: "#8b6f47",
  },
  "frisch": {
    bgColor: "#167ea1",
    logoText: "FRISCH",
    linkColor: "#ffffff",
    accentColor: "#1a5490",
  },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Determine current brand from pathname
  const getCurrentBrand = () => {
    if (pathname.startsWith("/products/lira-brand")) return brandConfig["lira-brand"];
    if (pathname.startsWith("/products/kestrina")) return brandConfig["kestrina"];
    if (pathname.startsWith("/products/natural")) return brandConfig["natural"];
    if (pathname.startsWith("/products/frisch")) return brandConfig["frisch"];
    return null;
  };

  const currentBrand = getCurrentBrand();
  const isBrandPage = currentBrand !== null;
  const isLiraBrandPage = pathname.startsWith("/products/lira-brand");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b transition-all duration-300"
      style={{ 
        backgroundColor: isBrandPage ? currentBrand.bgColor : '#ffffff',
        borderColor: isBrandPage ? `${currentBrand.bgColor}40` : 'rgba(229, 231, 235, 0.6)'
      }}
    >
      <nav className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex h-24 items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="cursor-pointer flex items-center justify-center">
            <span 
              className="text-2xl sm:text-3xl lg:text-4xl font-lemonmilk uppercase transition-colors duration-300"
              style={{ color: isBrandPage ? currentBrand.linkColor : '#a72b2b' }}
            >
              {isBrandPage ? currentBrand.logoText : 'LIRA MARK'}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center space-x-6 lg:space-x-8">
            <Link
              href="/"
              className={`cursor-pointer text-base lg:text-lg font-lemonmilk-regular font-semibold uppercase tracking-wide transition-colors duration-300 ${
                pathname === "/" 
                  ? (isBrandPage ? "opacity-100" : "text-black") 
                  : (isBrandPage ? "text-white/80 hover:text-white" : "text-black hover:text-gray-700")
              }`}
              style={isBrandPage && pathname !== "/" ? { color: currentBrand.linkColor } : {}}
            >
              BALLINA
            </Link>
            <Link
              href="/about"
              className={`cursor-pointer text-base lg:text-lg font-lemonmilk-regular font-semibold uppercase tracking-wide transition-colors duration-300 ${
                pathname === "/about"
                  ? (isBrandPage ? "opacity-100" : "text-black")
                  : (isBrandPage ? "text-white/80 hover:text-white" : "text-black hover:text-gray-700")
              }`}
              style={isBrandPage && pathname !== "/about" ? { color: currentBrand.linkColor } : {}}
            >
              RRETH NESH
            </Link>

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className={`cursor-pointer flex items-center text-base lg:text-lg font-lemonmilk-regular font-semibold uppercase tracking-wide transition-all duration-300 ${
                  pathname.startsWith("/products")
                    ? (isBrandPage ? "opacity-100" : "text-black")
                    : (isBrandPage ? "text-white/80 hover:text-white" : "text-black hover:text-gray-700")
                }`}
                style={isBrandPage && !pathname.startsWith("/products") ? { color: currentBrand.linkColor } : {}}
              >
                BRENDET <MdArrowDropDown 
                  size={25} 
                  className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  style={isBrandPage ? { color: currentBrand.linkColor } : {}}
                />
              </button>

              {/* Dropdown Items - Redesigned with Modern Card Style */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -15 }}
                    transition={{ 
                      duration: 0.25,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="absolute mt-4 w-64 bg-white rounded-2xl overflow-hidden origin-top border border-gray-100"
                    style={{
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)"
                    }}
                  >
                    <div className="p-2">
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05, duration: 0.2 }}
                      >
                        <Link 
                          href="/products/lira-brand" 
                          className="cursor-pointer flex items-center px-4 py-3 rounded-xl text-sm font-lemonmilk-regular font-semibold text-gray-800 hover:bg-linear-to-r hover:from-red-50 hover:to-red-100/50 hover:text-[#cf0207] transition-all duration-300 group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="w-2 h-2 rounded-full bg-[#a72b2b] mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                          <span>LIRA BRAND</span>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                      >
                        <Link 
                          href="/products/kestrina" 
                          className="cursor-pointer flex items-center px-4 py-3 rounded-xl text-sm font-lemonmilk-regular font-semibold text-gray-800 hover:bg- -to-r hover:from-green-50 hover:to-green-100/50 hover:text-[#2d5016] transition-all duration-300 group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="w-2 h-2 rounded-full bg-[#2d5016] mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                          <span>KESTRINA</span>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.2 }}
                      >
                        <Link 
                          href="/products/natural" 
                          className="cursor-pointer flex items-center px-4 py-3 rounded-xl text-sm font-lemonmilk-regular font-semibold text-gray-800 hover:bg-linear-to-r hover:from-amber-50 hover:to-amber-100/50 hover:text-[#8b6f47] transition-all duration-300 group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="w-2 h-2 rounded-full bg-[#8b6f47] mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                          <span>NATURAL</span>
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.2 }}
                      >
                        <Link 
                          href="/products/frisch" 
                          className="cursor-pointer flex items-center px-4 py-3 rounded-xl text-sm font-lemonmilk-regular font-semibold text-gray-800 hover:bg-linear-to-r hover:from-blue-50 hover:to-blue-100/50 hover:text-[#1a5490] transition-all duration-300 group"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="w-2 h-2 rounded-full bg-[#1a5490] mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                          <span>FRISCH</span>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="h-6 w-1 transition-colors duration-300" 
              style={{ backgroundColor: isBrandPage ? currentBrand.linkColor : '#a72b2b' }}
            ></div>
            <Link
              href="/contact"
              className="cursor-pointer text-base lg:text-lg font-lemonmilk-regular font-semibold uppercase tracking-wide transition-colors duration-300"
              style={{ color: isBrandPage ? currentBrand.linkColor : '#a72b2b' }}
            >
              KONTAKTI
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden inline-flex items-center justify-center rounded-lg p-2.5 hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ${
              isLiraBrandPage
                ? "text-black hover:bg-gray-100 focus:ring-gray-300"
                : isBrandPage 
                  ? "text-white hover:bg-white focus:ring-white" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:ring-gray-200"
            }`}
            aria-expanded={isMenuOpen}
            aria-label="Hap menunë"
          >
            {!isMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 z-50 transition-opacity duration-500 ease-out ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ease-out ${isMenuOpen ? "opacity-100" : "opacity-0"}`}></div>

          <div
            className={`absolute right-0 top-0 h-full w-[70%] shadow-2xl transition-all duration-500 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            style={{ 
              backgroundColor: isBrandPage ? currentBrand.bgColor : '#ffffff',
              borderLeft: isBrandPage ? `1px solid ${currentBrand.bgColor}40` : 'none'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div 
                className="flex justify-end items-center p-5 border-b transition-colors duration-300"
                style={{ borderColor: isBrandPage ? `${currentBrand.linkColor}30` : 'rgba(229, 231, 235, 1)' }}
              >
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={`inline-flex items-center justify-center rounded-lg p-2.5 hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ${
                    isBrandPage ? 'hover:bg-white' : 'hover:bg-gray-100'
                  }`}
                  aria-label="Mbyll menunë"
                  style={{ 
                    color: isBrandPage ? currentBrand.linkColor : '#000000'
                  }}
                >
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-8 flex flex-col justify-center items-start space-y-6">
                <Link 
                  href="/" 
                  className="cursor-pointer text-2xl font-lemonmilk-regular font-semibold transition-colors duration-300" 
                  style={{ color: isBrandPage ? currentBrand.linkColor : '#000000' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  BALLINA
                </Link>
                <Link 
                  href="/about" 
                  className="cursor-pointer text-2xl font-lemonmilk-regular font-semibold transition-colors duration-300" 
                  style={{ color: isBrandPage ? currentBrand.linkColor : '#000000' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  RRETH NESH
                </Link>

                {/* Mobile Dropdown */}
                <div className="flex flex-col space-y-2 w-full">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center text-2xl font-lemonmilk-regular font-semibold transition-colors duration-300"
                    style={{ color: isBrandPage ? currentBrand.linkColor : '#000000' }}
                  >
                    BRENDET <MdArrowDropDown className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ 
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        className="overflow-hidden mt-2"
                      >
                        <div className="flex flex-col pl-4 space-y-2 w-full">
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05, duration: 0.2 }}
                          >
                            <Link 
                              href="/products/lira-brand" 
                              className={`cursor-pointer flex items-center text-lg font-lemonmilk-regular font-semibold transition-all duration-300 py-2 px-3 rounded-lg group ${
                                isBrandPage 
                                  ? `hover:opacity-80` 
                                  : 'text-gray-700 hover:text-[#a72b2b] hover:bg-red-50'
                              }`}
                              style={{ color: isBrandPage ? currentBrand.linkColor : undefined }}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className={`w-2 h-2 rounded-full mr-3 transition-transform duration-300 ${
                                isBrandPage ? 'bg-current' : 'bg-[#a72b2b]'
                              } group-hover:scale-125`}></span>
                              <span>LIRA BRAND</span>
                            </Link>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.2 }}
                          >
                            <Link 
                              href="/products/kestrina" 
                              className={`cursor-pointer flex items-center text-lg font-lemonmilk-regular font-semibold transition-all duration-300 py-2 px-3 rounded-lg group ${
                                isBrandPage 
                                  ? `hover:opacity-80` 
                                  : 'text-gray-700 hover:text-[#2d5016] hover:bg-green-50'
                              }`}
                              style={{ color: isBrandPage ? currentBrand.linkColor : undefined }}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className={`w-2 h-2 rounded-full mr-3 transition-transform duration-300 ${
                                isBrandPage ? 'bg-current' : 'bg-[#2d5016]'
                              } group-hover:scale-125`}></span>
                              <span>KESTRINA</span>
                            </Link>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15, duration: 0.2 }}
                          >
                            <Link 
                              href="/products/natural" 
                              className={`cursor-pointer flex items-center text-lg font-lemonmilk-regular font-semibold transition-all duration-300 py-2 px-3 rounded-lg group ${
                                isBrandPage 
                                  ? `hover:opacity-80` 
                                  : 'text-gray-700 hover:text-[#8b6f47] hover:bg-amber-50'
                              }`}
                              style={{ color: isBrandPage ? currentBrand.linkColor : undefined }}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className={`w-2 h-2 rounded-full mr-3 transition-transform duration-300 ${
                                isBrandPage ? 'bg-current' : 'bg-[#8b6f47]'
                              } group-hover:scale-125`}></span>
                              <span>NATURAL</span>
                            </Link>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.2 }}
                          >
                            <Link 
                              href="/products/frisch" 
                              className={`cursor-pointer flex items-center text-lg font-lemonmilk-regular font-semibold transition-all duration-300 py-2 px-3 rounded-lg group ${
                                isBrandPage 
                                  ? `hover:opacity-80` 
                                  : 'text-gray-700 hover:text-[#1a5490] hover:bg-blue-50'
                              }`}
                              style={{ color: isBrandPage ? currentBrand.linkColor : undefined }}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className={`w-2 h-2 rounded-full mr-3 transition-transform duration-300 ${
                                isBrandPage ? 'bg-current' : 'bg-[#1a5490]'
                              } group-hover:scale-125`}></span>
                              <span>FRISCH</span>
                            </Link>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  href="/contact" 
                  className="cursor-pointer text-2xl font-lemonmilk-regular font-semibold transition-colors duration-300" 
                  style={{ color: isBrandPage ? currentBrand.linkColor : '#a72b2b' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  KONTAKTI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
