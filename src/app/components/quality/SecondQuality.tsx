"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SecondQuality() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="w-full relative overflow-hidden">
      {/* First Section: Image Left, Text Right */}
      <div className=" mx-auto px-5 lg:px-16" ref={ref1}>
        <div className="flex flex-col lg:flex-row items-stretch min-h-[500px] lg:min-h-[70vh]">
          {/* Left Side - Image */}
          <motion.div
            className="relative w-full lg:w-1/2 h-[400px] lg:h-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/assets/220823091124-01-turkey-tea-rize-cup.png"
                alt="Lira Brand Natyral"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side - Text Panel with Fill Animation */}
          <motion.div
            className="relative w-full lg:w-1/2 bg-white overflow-hidden"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={inView1 ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          >
            <div className="h-full flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-16 relative">
              {/* Water Droplet Icon */}
              <motion.div
                className="mb-4 sm:mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <svg
                  width="32"
                  height="40"
                  viewBox="0 0 24 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#8B4513]"
                >
                  <path
                    d="M12 0C8.686 0 6 2.686 6 6C6 8.5 8 12 12 18C16 12 18 8.5 18 6C18 2.686 15.314 0 12 0ZM12 2C14.209 2 16 3.791 16 6C16 7.5 14.5 10.5 12 15C9.5 10.5 8 7.5 8 6C8 3.791 9.791 2 12 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 20C7.582 20 4 23.582 4 28C4 30.209 5.791 32 8 32H16C18.209 32 20 30.209 20 28C20 23.582 16.418 20 12 20Z"
                    fill="currentColor"
                  />
                </svg>
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-foregen text-[#8B4513] mb-6 sm:mb-8"
                initial={{ opacity: 0, x: 30 }}
                animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                Nga Vetë Natyra
              </motion.h2>

              {/* Paragraph Text */}
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-tight font-armin max-w-2xl"
                initial={{ opacity: 0, x: 30 }}
                animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.7, delay: 1.2 }}
              >
                Ne në Lira Brand besojmë në fuqinë e natyrës dhe respektimin e mjedisit. Çdo produkt
                ynë është krijuar me dashuri dhe kujdes, duke respektuar traditën dhe duke mbrojtur
                planetin tonë për brezat e ardhshëm.
              </motion.p>

              {/* Abstract Line Art Graphic - Right Side */}
              <motion.div
                className="absolute top-0 right-0 w-32 sm:w-40 lg:w-48 h-full pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <svg
                  viewBox="0 0 200 400"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0 Q100 50 150 150 T200 300 Q180 350 150 400"
                    stroke="#8B4513"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <path
                    d="M20 20 Q80 60 120 140 T180 280 Q170 320 140 380"
                    stroke="#8B4513"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Second Section: Text Left, Image Right */}
      <div className="mx-auto px-5 lg:px-16" ref={ref2}>
        <div className="flex flex-col lg:flex-row items-stretch min-h-[500px] lg:min-h-[70vh]">
          {/* Left Side - Text Panel with Fill Animation */}
          <motion.div
            className="relative w-full lg:w-1/2 bg-[#E5C8B5] overflow-hidden"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={inView2 ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          >
            <div className="h-full flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-16 relative">
              {/* Icon */}
              <motion.div
                className="mb-4 sm:mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#8B4513]"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-foregen text-[#8B4513] mb-6 sm:mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                Traditë dhe Inovacion
              </motion.h2>

              {/* Paragraph Text */}
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-black leading-tight font-armin max-w-2xl"
                initial={{ opacity: 0, x: -30 }}
                animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7, delay: 1.2 }}
              >
                Lira Brand kombinon traditën e lashtë shqiptare me inovacionin modern. <br/> <br/> Ne besojmë
                që çdo produkt duhet të pasqyrojë cilësinë më të lartë dhe respektin për natyrën.
                Kjo është arsyeja pse ne zgjedhim me kujdes çdo përbërës dhe procesim.
              </motion.p>

              {/* Abstract Line Art Graphic - Right Side */}
              <motion.div
                className="absolute top-0 right-0 w-32 sm:w-40 lg:w-48 h-full pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <svg
                  viewBox="0 0 200 400"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0 Q100 50 150 150 T200 300 Q180 350 150 400"
                    stroke="#8B4513"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <path
                    d="M20 20 Q80 60 120 140 T180 280 Q170 320 140 380"
                    stroke="#8B4513"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative w-full lg:w-1/2 h-[400px] lg:h-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/assets/487786048_1265413888917456_4464519389769385379_n.png"
                alt="Lira Brand Traditë"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
