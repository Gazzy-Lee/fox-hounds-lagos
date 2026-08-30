import imgAbout from "figma:asset/waiter-serving.png";
import { FadeIn } from "./animations/FadeIn";

export function AboutSection() {
  return (
    <section
      className="bg-[#f6f6f3] w-full"
      aria-label="About us"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Column */}
          <FadeIn direction="left" className="w-full lg:flex-1 flex-shrink-0">
            <div
              className="w-full rounded-[12px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] bg-[#201f1f]"
            >
              <img
                src={imgAbout}
                alt="Waiter holding wine tray to serve guests"
                className="w-full h-[280px] sm:h-[360px] md:h-[430px] lg:h-[504px] object-cover block"
              />
            </div>
          </FadeIn>

          {/* Text Column */}
          <FadeIn direction="right" className="w-full lg:flex-1 flex flex-col gap-4">
            {/* Label */}
            <span
              className="text-[#0282bf] text-xs tracking-[2.4px] uppercase"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}
            >
              about us
            </span>

            {/* Heading */}
            <h2
              className="text-[#131313]"
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.4,
              }}
            >
              Hospitality and
              <br />
              <span className="text-[#0282bf]">Comfort</span>{" "}
              Defined
            </h2>

            {/* Body Text */}
            <div
              className="flex flex-col gap-6 pt-2 text-[#4d4d4d] text-base"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, lineHeight: 1.6 }}
            >
              <p>
                At Fox &amp; Hounds Lagos, we create a refined hospitality experience
                where comfort, style and connection come together. As a boutique
                destination for relaxation, dining and social leisure, we offer
                thoughtfully designed spaces. These are for guests to unwind,
                enjoy great food and connect, whether for business or pleasure.
              </p>
              <p>
                With over 25 years of experience in hospitality &amp; hotel
                management, originating from Los Angeles, we bring international
                standards of service into a uniquely African context. This blend
                allows us to deliver a world-class experience tailored to the
                lifestyle &amp; expectations of Lagos and its global community.
              </p>
              <p>
                Located in the heart of Ajah, Fox &amp; Hounds Lagos represents a
                new era of boutique hospitality. One defined not by excess, but
                by intention. We believe true luxury lies in the warmth of our
                welcome and the precision of every detail.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex flex-col gap-1">
                <span
                  className="text-[#0282bf]"
                  style={{
                    fontFamily: "'Noto Serif', serif",
                    fontWeight: 400,
                    fontSize: "30px",
                    lineHeight: "36px",
                  }}
                >
                  24/7
                </span>
                <span
                  className="text-[#788087] text-xs tracking-[1.2px] uppercase"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}
                >
                  Elite Concierge
                </span>
              </div>

              {/* Divider */}
              <div className="w-px h-12 bg-[#484d51]" />

              <div className="flex flex-col gap-1">
                <span
                  className="text-[#0282bf] whitespace-nowrap"
                  style={{
                    fontFamily: "'Noto Serif', serif",
                    fontWeight: 400,
                    fontSize: "30px",
                    lineHeight: "36px",
                  }}
                >
                  25+
                </span>
                <span
                  className="text-[#788087] text-xs tracking-[1.2px] uppercase whitespace-nowrap"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}
                >
                  years of experience
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}