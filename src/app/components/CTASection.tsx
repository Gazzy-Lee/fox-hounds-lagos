import { Link } from "react-router";
import imgCTA from "figma:asset/bar-overview.png";
import { FadeIn } from "./animations/FadeIn";

export function CTASection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "450px" }}
      aria-label="Call to action"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={imgCTA}
          alt="Fox & Hounds Lagos outdoor venue"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full min-h-[450px] flex items-center justify-center px-6 md:px-10 lg:px-20 py-20 md:py-24">
        <FadeIn direction="up" className="flex flex-col items-center gap-8 w-full max-w-[900px] text-center">
          {/* Text */}
          <div className="flex flex-col gap-3 items-center">
            <h2
              className="text-white"
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 600,
                fontSize: "clamp(24px, 4vw, 44px)",
                lineHeight: 1.2,
              }}
            >
              We look forward to seeing you
            </h2>
            <p
              className="text-[#ebf8ff] text-xs tracking-[2px] uppercase"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800 }}
            >
              No 9, Lapai Close, Thomas Estate, Ajah, Lagos State, Nigeria
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Link to="/contact" className="flex items-center gap-3 bg-[#0282bf] backdrop-blur-sm px-8 md:px-10 py-4 rounded-[4px] w-[200px] justify-center cursor-pointer hover:bg-[#0270a8] transition-colors">
              <span
                className="text-white text-sm tracking-[1.2px] uppercase"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
              >
                Contact us
              </span>
            </Link>
            <Link to="/contact#map" className="relative flex items-center gap-3 backdrop-blur-sm rounded-[4px] w-[200px] justify-center cursor-pointer hover:bg-white/10 transition-colors border border-white px-[12px] py-[16px]">
              <span
                className="text-white text-sm tracking-[1.2px] uppercase"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
              >Get directions</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}