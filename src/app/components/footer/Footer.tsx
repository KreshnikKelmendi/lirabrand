"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <footer className="mx-5 lg:mx-16 mt-10 lg:mt-20">
      <div className="mx-auto py-12 lg:py-16">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start mb-8">
          {/* Logo Section - Top Left */}
          <div className="flex flex-col">
            <h1 className="text-2xl lg:text-4xl font-lemonmilk font-semibold text-gray-300 mb-4">
              LIRA MARK
            </h1>
          </div>

          {/* Contact Information - KONTAKTI */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl sm:text-3xl font-lemonmilk-regular text-black font-sans mb-4">KONTAKTI</h3>
            
            {/* Address */}
            <div className="flex flex-col">
              <p className="text-sm text-black font-sans mb-1 font-armin">Adresa</p>
              <p className="text-sm text-black font-armin">
                Rr.Epopeja e Jezercit, Ferizaj, Kosovo, 70000
              </p>
            </div>

            {/* Mobile - Two numbers */}
            <div className="flex flex-col font-armin">
              <p className="text-sm text-black font-armin mb-1">Mobil</p>
              <Link
                href="tel:+38344779000"
                className="text-sm text-black hover:text-gray-600 transition-colors duration-300 font-armin"
              >
                +383 44 779 000
              </Link>
              <Link
                href="tel:+38344171676"
                className="text-sm text-black hover:text-gray-600 transition-colors duration-300 font-armin"
              >
                +383 44 171 676
              </Link>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <p className="text-sm text-black font-armin mb-1">Email</p>
              <Link
                href="mailto:ntpshlira@yahoo.com"
                className="text-sm text-black hover:text-gray-600 transition-colors duration-300 font-armin"
              >
                ntpshlira@yahoo.com
              </Link>
            </div>
          </div>

          {/* Content Section - PERMBAJTJA */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl sm:text-3xl font-lemonmilk-regular text-black font-sans mb-4">PËRMBAJTJA</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-black hover:text-gray-600 transition-colors duration-300 font-armin"
              >
                Ballina
              </Link>
              <Link
                href="/about"
                className="text-sm text-black hover:text-gray-600 transition-colors duration-300 font-armin"
              >
                Rreth Nesh
              </Link>
              <Link
                href="/"
                className="text-sm text-black hover:text-gray-600 transition-colors duration-300 font-armin"
              >
                Brendet
              </Link>
              <Link
                href="/contact"
                className="text-sm text-black hover:text-gray-600 transition-colors duration-300 font-armin"
              >
                Kontakti
              </Link>
            </nav>

            {/* Social Media Section */}
            <div className="mt-6">
              <p className="text-sm text-black font-sans mb-3 font-lemonmilk-regular">Na ndiqni në:</p>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://www.instagram.com/lirabrandtea/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/Lirabrand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-400 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Location on Map Section */}
        <div className="flex flex-col items-center mb-8">
          <button
            onClick={toggleMap}
            className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            <h3 className="text-2xl sm:text-3xl text-black font-lemonmilk-regular mb-2">
              Vendndodhja në hartë
            </h3>
            <svg 
              className={`w-6 h-6 text-red-600 transition-transform duration-300 ${showMap ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Map Container - Show/Hide */}
          {showMap && (
            <div className="w-full mt-6 mb-4">
              <div className="bg-white/90 backdrop-blur-sm p-4 lg:p-6 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-lemonmilk-regular text-gray-900 mb-2">
                  Lokacioni Ynë
                </h2>
                <p className="text-sm font-armin text-amber-900 mb-3 leading-tight">
                  Na vizitoni në adresën tonë në Ferizaj.
                </p>
                <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.4422524543024!2d21.085321474998832!3d42.36922343452427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13547faaa67990d3%3A0x70d2ce2534fac529!2sR206%2C%2070000!5e1!3m2!1sen!2sus!4v1763922723112!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lira Brand Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Copyright Section */}
        <div className="pt-4">
          <p className="text-sm text-black font-armin">
            ©2025 LIRA MARK. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
}

