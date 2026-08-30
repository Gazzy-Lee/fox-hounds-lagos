import image_lounge_hero from '@/imports/lounge-hero-interior.png'
import image_lounge_chill from '@/imports/lounge-chill-out-area.png'
import { Link } from "react-router";
import svgPaths from "../../imports/Desktop-3-1/svg-64yme7pupo";
import { TestimonialsSection } from "./TestimonialsSection";
import { FadeIn } from "./animations/FadeIn";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ArrowRightIcon = () => (
  <svg width="9" height="9" viewBox="0 0 8.74996 8.74996" fill="none">
    <path d={svgPaths.p398000} fill="#FFF8F1" />
  </svg>
);

// Sun / Golden Hour icon
const SunIcon = () => (
  <svg width="27" height="27" viewBox="0 0 26.875 26.875" fill="none" className="shrink-0">
    <path d={svgPaths.p264a4000} fill="#0282BF" />
  </svg>
);

// Chair / Bespoke Comfort icon
const ChairIcon = () => (
  <svg width="22" height="22" viewBox="0 0 21.2499 21.5624" fill="none" className="shrink-0">
    <path d={svgPaths.p199a2c00} fill="#0282BF" />
  </svg>
);

// Music note / Curated Soundscape icon
const MusicIcon = () => (
  <svg width="14" height="22" viewBox="0 0 13.6778 21.0095" fill="none" className="shrink-0">
    <path d={svgPaths.p1676e280} fill="#0282BF" />
  </svg>
);


// ─── Feature item ─────────────────────────────────────────────────────────────

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconPaddingTop?: number;
}

function FeatureItem({ icon, title, description, iconPaddingTop = 4 }: FeatureItemProps) {
  return (
    <div className="flex gap-6 items-start w-full">
      <div className="shrink-0" style={{ paddingTop: iconPaddingTop, minWidth: "28px" }}>
        {icon}
      </div>
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <h4
          className="text-[#303330]"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "28px" }}
        >
          {title}
        </h4>
        <p
          className="text-[#4d4d4d]"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6 }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

// ─── 1. Hero Section ──────────────────────────────────────────────────────────

function LoungeHero() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 pt-[140px] pb-[60px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px] items-start">

          {/* ── Left: text ── */}
          <FadeIn direction="left" className="flex flex-col gap-4 flex-1 min-w-0">
            <span
              className="text-[#0282bf] uppercase tracking-[0.6px]"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px" }}
            >
              The Curated Vibe
            </span>

            <h1
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 600,
                fontSize: "clamp(40px, 5.5vw, 60px)",
                lineHeight: 1.2,
              }}
            >
              <span className="block text-[#131313]">The</span>
              <span className="block text-[#0282bf]">Lounge</span>
              <span className="block text-[#131313]">Sanctuary</span>
            </h1>

            <div
              className="text-[#4d4d4d] max-w-[500px]"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6 }}
            >
              <p className="mb-4">
                Our executive lounge at Fox &amp; Hounds Lagos is designed for relaxation, socializing and refined
                comfort. Guests enjoy a stylish atmosphere for conversations, casual hangouts and unwinding with drinks
                &amp; light entertainment.
              </p>
              <p className="mb-4">
                With a well-stocked bar, fresh bites and thoughtfully designed interiors, the space blends elegance and
                warmth. Steady power, a secure environment and overnight stay options ensure a safe &amp; enjoyable
                experience.
              </p>
              <p>At Fox &amp; Hounds Lagos, your comfort and leisure are always assured.</p>
            </div>

            <div className="mt-2">
              <Link
                to="/contact"
                className="bg-[#0282bf] text-white rounded-[4px] cursor-pointer hover:bg-[#0270a8] transition-colors flex items-center justify-center gap-3 whitespace-nowrap"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  padding: "16px 40px",
                  minWidth: "200px",
                }}
              >
                Reserve a table
                <ArrowRightIcon />
              </Link>
            </div>
          </FadeIn>

          {/* ── Right: single image ── */}
          <FadeIn direction="right" className="w-full lg:w-[562px] shrink-0">
            <img
              src={image_lounge_hero}
              alt="Fox & Hounds lounge interior"
              className="w-full h-full object-cover rounded-lg"
              style={{ height: "clamp(280px, 45vw, 660px)" }}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Chill Out Sanctuaries ─────────────────────────────────────────────────

function ChillOutSanctuaries() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">

          {/* ── Left: image grid ── */}
          <FadeIn direction="left" className="w-full lg:w-[562px] shrink-0">
            <img
              src={image_lounge_chill}
              alt="Chill out areas at Fox & Hounds"
              className="w-full h-full object-cover rounded-lg"
              style={{ height: "clamp(280px, 45vw, 660px)" }}
            />
          </FadeIn>

          {/* ── Right: features ── */}
          <FadeIn direction="right" className="flex flex-col gap-6 flex-1 min-w-0">
            <div className="flex flex-col gap-2">
              <span
                className="text-[#303330] uppercase tracking-[0.6px]"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "16px" }}
              >
                Atmosphere
              </span>
              <h2
                className="text-[#0282bf]"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 600,
                  fontSize: "clamp(26px, 3vw, 36px)",
                  lineHeight: "40px",
                }}
              >
                Chill Out Sanctuaries
              </h2>
            </div>

            {/* Feature items */}
            <div
              className="flex flex-col gap-8 pt-6"
              style={{ borderTop: "1px solid rgba(176,179,174,0.2)" }}
            >
              <FeatureItem
                icon={<SunIcon />}
                title="Golden Hour Lighting"
                description="Natural sunlight filters through the open space, creating a calm and inviting atmosphere from afternoon into the evening."
                iconPaddingTop={4}
              />
              <FeatureItem
                icon={<ChairIcon />}
                title="Bespoke Comfort"
                description="Comfortable outdoor seating surrounded by greenery offers a relaxed space to unwind and enjoy quiet moments or casual conversations."
                iconPaddingTop={8}
              />
              <FeatureItem
                icon={<MusicIcon />}
                title="Curated Soundscape"
                description="A peaceful garden setting enhanced by fresh air, soft sounds and a laid-back ambiance perfect for relaxation and socializing."
                iconPaddingTop={8}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function LoungePage() {
  return (
    <>
      <LoungeHero />
      <ChillOutSanctuaries />
      <TestimonialsSection />
    </>
  );
}
