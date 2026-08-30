import { Link } from "react-router";
import { motion } from "motion/react";
import imgHero from "figma:asset/hero-exterior-dusk.png";
import imgHeroMobile from "../../imports/hero-mobile.png";

const ArrowRightIcon = ({ color = "#FFF8F1" }: { color?: string }) => (
  <svg
    width="9"
    height="9"
    viewBox="0 0 8.74996 8.74996"
    fill="none"
    className="shrink-0"
  >
    <path
      d="M7.07404 4.81247H0V3.93749H7.07404L3.75128 0.614729L4.37498 0L8.74996 4.37498L4.37498 8.74996L3.75128 8.13523L7.07404 4.81247V4.81247"
      fill={color}
    />
  </svg>
);

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden h-screen"
      aria-label="Hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Desktop & Tablet Background */}
        <img
          src={imgHero}
          alt="Fox & Hounds Lagos hotel exterior at dusk"
          className="hidden md:block absolute inset-0 w-full h-full object-cover max-w-none"
        />
        {/* Mobile Background */}
        <img
          src={imgHeroMobile}
          alt="Fox & Hounds Lagos"
          className="md:hidden absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-[24px] pt-0 md:pt-[60px] pb-[0px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center gap-5 w-full max-w-[880px] text-center"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white text-center w-full"
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 700,
              fontSize: "clamp(40px, 5vw, 60px)",
              lineHeight: 1,
            }}
          >
            FOX &amp; HOUNDS LAGOS
          </motion.h1>

          {/* Address */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#ebf8ff] text-xs tracking-[2px] uppercase"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
          >
            No 9, Lapai Close, Thomas Estate, Ajah, Lagos State, Nigeria
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#f4f5f5] text-center w-full max-w-[640px]"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: 1.5,
            }}
          >
            Experience the pinnacle of Lagosian hospitality.{" "}
            An intimate boutique retreat where heritage architecture meets
            contemporary luxury.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center gap-6 pt-2 flex-wrap justify-center"
          >
            <Link to="/contact" className="flex items-center gap-3 bg-[#0282bf] backdrop-blur-sm px-8 md:px-10 py-4 rounded-[4px] cursor-pointer hover:bg-[#0270a8] transition-colors">
              <span
                className="text-white text-sm tracking-[1.2px] uppercase"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
              >
                Book your stay
              </span>
              <ArrowRightIcon />
            </Link>
            <Link to="/rooms" className="relative flex items-center gap-3 backdrop-blur-sm px-8 md:px-10 py-4 rounded-[4px] cursor-pointer hover:bg-white/10 transition-colors border border-white">
              <span
                className="text-white text-sm tracking-[1.2px] uppercase"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
              >
                Explore suites
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}