"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function BenefitetECajitPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen relative">
      {/* Fixed background image */}
      <div className="fixed inset-0 h-screen w-full z-0 pointer-events-none">
        <Image
          src="/assets/main-8.png"
          alt="Background"
          fill
          className="object-cover opacity-30 w-full"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Content */}
      <section className="relative z-10 w-full px-5 lg:px-16 py-16">
        <div className="mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center font-foregen">Benefitet e Çajit<br />Lira Brand</h1>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text on the left */}
            <div className="flex-1 space-y-4 text-lg leading-tight font-armin">
              <p>
                Çaji Lira Brand është i pasur me antioksidantë që mbrojnë trupin dhe përmirësojnë 
                shëndetin e përgjithshëm.
              </p>
              
              <p>
                Ndihmon në përmirësimin e funksionit të trurit, rrit koncentrimin dhe ofron energji 
                të qëndrueshme.
              </p>
              
              <p>
                Ka veti anti-inflamatore dhe kontribuon në shëndetin e zemrës dhe uljen e presionit 
                të gjakut.
              </p>
              
              <p>
                Ndihmon në relaksim dhe reduktimin e stresit, duke sjellë shijen autentike të 
                traditës së çajit shqiptar.
              </p>
            </div>
            
            {/* Image on the right */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none">
                <Image
                  src="/assets/main-6.png"
                  alt="Benefitet e Çajit"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="mt-20" ref={benefitsRef}>
            <h2 className="text-3xl font-bold mb-12 text-center font-foregen">Përfitime të Tjera të Çajit të Zi</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Benefit 1 */}
              <motion.div 
                className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 md:p-6 min-h-[200px] sm:min-h-[220px] md:min-h-0 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={benefitsInView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-[#8B4513] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold font-foregen">1</span>
                </div>
                <h3 className="text-lg font-bold font-foregen mb-3 text-gray-900">Përmirësim i Metabolizmit</h3>
                <p className="text-gray-700 font-armin leading-tight text-sm">
                  Ndihmon në shkatërrimin e yndyrës dhe rrit shpejtësinë e metabolizmit, duke kontribuar në humbje peshe të shëndetshme.
                </p>
              </motion.div>

              {/* Benefit 2 */}
              <motion.div 
                className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 md:p-6 min-h-[200px] sm:min-h-[220px] md:min-h-0 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={benefitsInView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-[#8B4513] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold font-foregen">2</span>
                </div>
                <h3 className="text-lg font-bold font-foregen mb-3 text-gray-900">Forcim i Sistemit Imunitar</h3>
                <p className="text-gray-700 font-armin leading-tight text-sm">
                  Përmbajtja e lartë e antioksidantëve dhe vitaminave ndihmon në forcimin e sistemit imunitar dhe mbrojtjen nga infeksionet.
                </p>
              </motion.div>

              {/* Benefit 3 */}
              <motion.div 
                className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 md:p-6 min-h-[200px] sm:min-h-[220px] md:min-h-0 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={benefitsInView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-[#8B4513] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold font-foregen">3</span>
                </div>
                <h3 className="text-lg font-bold font-foregen mb-3 text-gray-900">Përmirësim i Shëndetit të Dhëmbëve</h3>
                <p className="text-gray-700 font-armin leading-tight text-sm">
                  Fluoridi dhe taninat në çaj ndihmojnë në reduktimin e plakës bakteriale dhe mbrojtjen e dhëmbëve nga kariesi.
                </p>
              </motion.div>

              {/* Benefit 4 */}
              <motion.div 
                className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 md:p-6 min-h-[200px] sm:min-h-[220px] md:min-h-0 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={benefitsInView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-[#8B4513] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold font-foregen">4</span>
                </div>
                <h3 className="text-lg font-bold font-foregen mb-3 text-gray-900">Rritje e Dendësisë së Kockave</h3>
                <p className="text-gray-700 font-armin leading-tight text-sm">
                  Fitokimikatët në çaj kontribuojnë në rritjen e dendësisë së kockave dhe reduktimin e rrezikut të osteoporozës.
                </p>
              </motion.div>

              {/* Benefit 5 */}
              <motion.div 
                className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 md:p-6 min-h-[200px] sm:min-h-[220px] md:min-h-0 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={benefitsInView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-12 h-12 bg-[#8B4513] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold font-foregen">5</span>
                </div>
                <h3 className="text-lg font-bold font-foregen mb-3 text-gray-900">Përmirësim i Shëndetit të Lëkurës</h3>
                <p className="text-gray-700 font-armin leading-tight text-sm">
                  Antioksidantët ndihmojnë në luftimin e plakjes së parakohshme dhe përmirësojnë shëndetin e përgjithshëm të lëkurës.
                </p>
              </motion.div>

              {/* Benefit 6 */}
              <motion.div 
                className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 md:p-6 min-h-[200px] sm:min-h-[220px] md:min-h-0 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={benefitsInView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
              >
                <div className="w-12 h-12 bg-[#8B4513] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold font-foregen">6</span>
                </div>
                <h3 className="text-lg font-bold font-foregen mb-3 text-gray-900">Reduktim i Rrezikut të Diabetit</h3>
                <p className="text-gray-700 font-armin leading-tight text-sm">
                  Studimet tregojnë se konsumi i rregullt i çajit të zi ndihmon në kontrollin e nivelit të sheqerit në gjak dhe reduktimin e rrezikut të diabetit tip 2.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

