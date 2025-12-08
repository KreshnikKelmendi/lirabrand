"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const mapVariants = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="min-h-screen relative">
     
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="w-full px-5 lg:px-16 py-8 lg:py-12">
          <div className="mx-auto" ref={heroRef}>
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={textVariants}
              className="text-center mb-8"
            >
              <h1 className="text-4xl lg:text-4xl font-bold font-lemonmilk text-gray-900 mb-3">
                Kontakti
              </h1>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-3"></div>
             
            </motion.div>
          </div>
        </section>

        {/* Main Content Section - Split Layout */}
        <section className="w-full px-5 lg:px-16 pb-8" ref={contentRef}>
          <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Side - Contact Information */}
              <motion.div
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="space-y-4"
              >
                {/* Description Text */}
                <motion.div variants={itemVariants} className="mb-6">
                  <h2 className="text-3xl sm:text-4xl font-lemonmilk-regular text-gray-900 mb-3">
                    Na Kontaktoni
                  </h2>
                  <div className="space-y-2">
                    <p className="text-base sm:text-lg md:text-xl font-armin text-amber-900 leading-tight">
                      Ne vlerësojmë komunikimin me klientët tanë. Nëse keni pyetje rreth produkteve tona, 
                      porosive, ose thjesht dëshironi të mësoni më shumë rreth markës sonë, jemi këtu për t'ju ndihmuar.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-armin text-amber-900 leading-tight">
                      Na kontaktoni nëpërmjet email-it, telefonit, ose vizitoni lokacionin tonë në Ferizaj. 
                      Gjithashtu, na ndiqni në rrjetet sociale për lajmet dhe përditësimet më të fundit.
                    </p>
                  </div>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div variants={itemVariants} className="space-y-3">
                  {/* Email */}
                  <motion.a
                    href="mailto:ntpshlira@yahoo.com"
                    className="group flex items-start gap-3 p-4 bg-white/90 backdrop-blur-sm border-l-4 border-amber-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="p-2 bg-amber-50 group-hover:bg-amber-100 transition-colors duration-300 shrink-0">
                      <svg
                        className="h-6 w-6 text-amber-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1 font-armin">
                        Email
                      </h3>
                      <p className="text-lg font-armin text-gray-900 group-hover:text-amber-600 transition-colors duration-300 break-all">
                        ntpshlira@yahoo.com
                      </p>
                    </div>
                  </motion.a>

                  {/* Phone */}
                  <motion.a
                    href="tel:044779000"
                    className="group flex items-start gap-3 p-4 bg-white/90 backdrop-blur-sm border-l-4 border-amber-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="p-2 bg-amber-50 group-hover:bg-amber-100 transition-colors duration-300 shrink-0">
                      <svg
                        className="h-6 w-6 text-amber-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1 font-armin">
                        Telefon
                      </h3>
                      <p className="text-lg font-armin text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                        044 779 000
                      </p>
                    </div>
                  </motion.a>

                  {/* Location */}
                  <motion.div
                    className="group flex items-start gap-3 p-4 bg-white/90 backdrop-blur-sm border-l-4 border-amber-600"
                  >
                    <div className="p-2 bg-amber-50 shrink-0">
                      <svg
                        className="h-6 w-6 text-amber-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1 font-armin">
                        Lokacioni
                      </h3>
                      <p className="text-lg font-armin text-gray-900 leading-tight">
                        RR.Epopeja e Jezercit, Ferizaj, Kosovo, 70000
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Social Media */}
                <motion.div variants={itemVariants} className="pt-4">
                  <h3 className="text-xl sm:text-2xl font-foregen text-gray-900 mb-2">
                    Na Ndiqni
                  </h3>
                  <p className="text-base font-armin text-amber-900 mb-3 leading-tight">
                    Lidhuni me ne në rrjetet sociale për lajmet dhe përditësimet më të fundit
                  </p>
                  <div className="flex items-center gap-4">
                    <motion.a
                      href="https://www.instagram.com/lirabrandtea/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 px-6 py-3 bg-linear-to-r from-amber-600 to-amber-800 text-white hover:from-amber-700 hover:to-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                      aria-label="Instagram"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                      <span className="font-armin font-medium">Instagram</span>
                    </motion.a>
                    <motion.a
                      href="https://www.facebook.com/Lirabrand"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 px-6 py-3 bg-linear-to-r from-amber-700 to-amber-900 text-white hover:from-amber-800 hover:to-amber-950 transition-all duration-300 shadow-lg hover:shadow-xl"
                      aria-label="Facebook"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                      <span className="font-armin font-medium">Facebook</span>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - Map */}
              <motion.div
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                variants={mapVariants}
                className="lg:sticky lg:top-24 h-fit"
              >
                <div className="bg-white/90 backdrop-blur-sm p-4 lg:p-6 shadow-xl">
                  <h2 className="text-2xl sm:text-3xl font-foregen text-gray-900 mb-2">
                    Lokacioni Ynë
                  </h2>
                  <p className="text-base font-armin text-amber-900 mb-3 leading-tight">
                    Na vizitoni në adresën tonë në Ferizaj.
                  </p>
                  <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden shadow-lg">
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
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
