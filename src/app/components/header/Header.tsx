"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky bg-white top-0 z-50 w-full border-b border-gray-200/60">
      <nav className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex h-24 items-center justify-between py-4 relative">
          {/* Left Navigation Links - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-10 lg:space-x-12">
            <Link
              href="/"
              className="relative text-lg font-medium font-foregen text-black hover:text-gray-900 transition-all duration-300 group py-2"
            >
              Ballina
              <span className={`absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-300 rounded-full ${
                pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
            <Link
              href="/about"
              className="relative text-lg font-medium font-foregen text-black hover:text-gray-900 transition-all duration-300 group py-2"
            >
              Rreth Nesh
              <span className={`absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-300 rounded-full ${
                pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
            <Link
              href="/benefitet-e-cajit"
              className="relative text-lg font-medium font-foregen text-black hover:text-gray-900 transition-all duration-300 group py-2"
            >
              Benefitet e Çajit
              <span className={`absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-300 rounded-full ${
                pathname === "/benefitet-e-cajit" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          </div>

          {/* Logo - Left on Mobile, Center on Desktop */}
          <Link 
            href="/" 
            className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center group"
          >
            <div className="relative h-18 w-20 sm:h-20 sm:w-20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              <div className="absolute inset-0 opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full w-full p-2">
                <Image
                  src="/assets/lirabrand-logo-removebg-preview.png"
                  alt="LiraBrand Logo"
                  fill
                  className="object-cover transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Right Navigation Links - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-10 lg:space-x-12">
            <Link
              href="/products"
              className="relative text-lg font-medium font-foregen text-black hover:text-gray-900 transition-all duration-300 group py-2"
            >
              Produktet
              <span className={`absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-300 rounded-full ${
                pathname === "/products" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
            <Link
              href="/contact"
              className="relative text-lg font-medium font-foregen text-black hover:text-gray-900 transition-all duration-300 group py-2"
            >
              Kontakti
              <span className={`absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-300 rounded-full ${
                pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-2">
              <Link
                href="https://www.instagram.com/lirabrandtea/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/Lirabrand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button - Right Side */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all duration-200"
            aria-expanded={isMenuOpen}
            aria-label="Hap menunë"
          >
            <span className="sr-only">Hap menunë kryesore</span>
            {!isMenuOpen ? (
              <svg
                className="block h-6 w-6 transition-transform duration-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6 transition-transform duration-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu - Right Side Drawer */}
        <div 
          className={`md:hidden fixed inset-0 z-50 transition-opacity duration-500 ease-out ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ease-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}></div>
          
          {/* Drawer */}
          <div 
            className={`absolute right-0 top-0 h-full w-[70%] bg-white shadow-2xl transition-transform duration-500 ease-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Close button */}
              <div className="flex justify-end items-center p-5 border-b border-gray-200">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-lg p-2.5 text-black hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
                  aria-label="Mbyll menunë"
                >
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              
              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto px-5 py-8 flex items-center justify-center">
                <nav className="space-y-6 w-full">
                  <Link
                    href="/"
                    className="relative text-2xl font-medium font-foregen text-black hover:text-gray-700 transition-all duration-300 group py-3 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ballina
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-300 rounded-full ${
                      pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </Link>
                  <Link
                    href="/about"
                    className="relative text-2xl font-medium font-foregen text-black hover:text-gray-700 transition-all duration-300 group py-3 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Rreth Nesh
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-300 rounded-full ${
                      pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </Link>
                  <Link
                    href="/benefitet-e-cajit"
                    className="relative text-2xl font-medium font-foregen text-black hover:text-gray-700 transition-all duration-300 group py-3 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Benefitet e Çajit
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-300 rounded-full ${
                      pathname === "/benefitet-e-cajit" ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </Link>
                  <Link
                    href="/products"
                    className="relative text-2xl font-medium font-foregen text-black hover:text-gray-700 transition-all duration-300 group py-3 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Produktet
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-300 rounded-full ${
                      pathname === "/products" ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </Link>
                  <Link
                    href="/contact"
                    className="relative text-2xl font-medium font-foregen text-black hover:text-gray-700 transition-all duration-300 group py-3 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kontakti
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-300 rounded-full ${
                      pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </Link>
                </nav>
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center justify-center space-x-6 px-5 py-4 border-t border-gray-200">
                <Link
                  href="https://www.instagram.com/lirabrandtea/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-300 p-2"
                  aria-label="Instagram"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/Lirabrand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-300 p-2"
                  aria-label="Facebook"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
              </div>
              
              {/* Logo at the bottom */}
              <div className="flex justify-center items-center p-6 border-t border-gray-200">
                <Link 
                  href="/" 
                  className="flex items-center justify-center group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="relative h-16 w-16 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <div className="relative h-full w-full p-2">
                      <Image
                        src="/assets/lirabrand-logo-removebg-preview.png"
                        alt="LiraBrand Logo"
                        fill
                        className="object-cover transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
