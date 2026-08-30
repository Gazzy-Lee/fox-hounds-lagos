import image_room_interior from '@/imports/WhatsApp_Image_2026-04-27_at_5.29.22_PM.jpeg'
import { Link } from "react-router";
import svgPaths from "../../imports/Desktop-1/svg-7vti9kfks4";
import imgStudio from "figma:asset/studio-apartment.png";
import imgMiniFlat from "figma:asset/mini-flat-interior.png";
import imgBungalow from "figma:asset/bungalow-interior.png";
import { TestimonialsSection } from "./TestimonialsSection";
import { FadeIn } from "./animations/FadeIn";

// ─── SVG Icon components ──────────────────────────────────────────────────────

/** Small star/sparkle used in the card amenities list */
const StarIconSm = () => (
  <svg width="11" height="11" viewBox="0 0 11.0802 11.3" fill="none">
    <path
      clipRule="evenodd"
      d={svgPaths.p10d848c0}
      fill="#0282BF"
      fillRule="evenodd"
      stroke="#0282BF"
      strokeWidth="0.3"
    />
    <path d={svgPaths.p2e5b29b2} fill="#0282BF" stroke="#0282BF" strokeWidth="0.3" />
  </svg>
);

/** Small WiFi icon in the card amenities list */
const WiFiSmIcon = () => (
  <svg width="14" height="10" viewBox="0 0 13.3717 9.29963" fill="none">
    <path d={svgPaths.p267b9b80} fill="#0282BF" />
  </svg>
);

/** Small lightning / power icon in the card amenities list */
const LightningSmIcon = () => (
  <svg width="9" height="11" viewBox="0 0 8.15536 10.9879" fill="none">
    <path d={svgPaths.p2b456d00} fill="#0282BF" />
  </svg>
);

/** Larger WiFi icon used in bento-card footers */
const WiFiLgIcon = () => (
  <svg width="23" height="16" viewBox="0 0 22.923 15.9422" fill="none">
    <path d={svgPaths.p2809e900} fill="#0282BF" />
  </svg>
);

/** Larger lightning / power icon used in bento-card footers */
const PowerLgIcon = () => (
  <svg width="14" height="19" viewBox="0 0 13.9806 18.8365" fill="none">
    <path d={svgPaths.pfc1d700} fill="#0282BF" />
  </svg>
);

/** Large star icon used in bento-card footers */
const StarIconLg = () => (
  <svg width="18" height="18" viewBox="0 0 17.9404 18.3" fill="none">
    <path
      clipRule="evenodd"
      d={svgPaths.p24b5440}
      fill="#0282BF"
      fillRule="evenodd"
      stroke="#0282BF"
      strokeWidth="0.3"
    />
    <path d={svgPaths.p2bea6500} fill="#0282BF" stroke="#0282BF" strokeWidth="0.3" />
  </svg>
);

/** Arrow right used on the Book Now button */
const ArrowRightIcon = () => (
  <svg width="9" height="9" viewBox="0 0 8.74996 8.74996" fill="none">
    <path d={svgPaths.p398000} fill="#FFF8F1" />
  </svg>
);

// Amenity icons for the "Standard of Fox & Hounds" section
const PowerBigIcon = () => (
  <svg width="21" height="29" viewBox="0 0 20.9709 28.2547" fill="none">
    <path d={svgPaths.p14f62800} fill="#0282BF" />
  </svg>
);
const SecurityIcon = () => (
  <svg width="23" height="29" viewBox="0 0 22.4999 28.4133" fill="none">
    <path d={svgPaths.p305a3800} fill="#0282BF" />
  </svg>
);
const RoomServiceIcon = () => (
  <svg width="21" height="30" viewBox="0 0 20.9999 29.2499" fill="none">
    <path d={svgPaths.p3c064b80} fill="#0282BF" />
  </svg>
);
const LaundryIcon = () => (
  <svg width="23" height="29" viewBox="0 0 22.4999 28.4999" fill="none">
    <path d={svgPaths.p38d60e00} fill="#0282BF" />
  </svg>
);

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Footer row inside each bento room card */
function RoomCardFooter() {
  return (
    <div className="flex items-center justify-between pt-6" style={{ borderTop: "1px solid rgba(2,130,191,0.2)" }}>
      {/* Icons */}
      <div className="flex items-center gap-4">
        <WiFiLgIcon />
        <PowerLgIcon />
        <StarIconLg />
      </div>
      {/* Reserve link */}
      <Link
        to="/contact"
        className="relative text-[#0282bf] tracking-[1.4px] uppercase cursor-pointer"
        style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", borderBottom: "1px solid #0282bf" }}
      >
        Reserve now
      </Link>
    </div>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

/** 1. Page hero – white background, large headline */
function RoomsHero() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 pt-[140px] pb-[60px] flex flex-col gap-4">
        <FadeIn direction="up">
          {/* Label */}
          <span
            className="text-[#0282bf] uppercase tracking-[3px]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "10px" }}
          >
            Lodging &amp; Short-Lets
          </span>

          {/* Headline */}
          <h1
            className="text-[#131313] max-w-[650px]"
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 600,
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.2,
            }}
          >
            A <span className="text-[#0282bf]">leisure</span> getaway filled with{" "}
            <span className="text-[#0282bf]">hospitality</span> &amp;{" "}
            <span className="text-black">luxury</span>
          </h1>

          {/* Subtext */}
          <div
            className="max-w-[576px] text-[#4d4d4d]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6 }}
          >
            <p>A curated collection of private quarters designed for the modern traveller and local guests alike.</p>
            <br />
            <p>Each space blends traditional Lagos warmth with contemporary comfort.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/** 2a. The hero image + Rooms & Suites info card */
function RoomsSuitesBlock() {
  return (
    <FadeIn direction="up">
      <div className="flex flex-col lg:flex-row lg:items-center gap-0">
        {/* Image */}
        <div className="w-full lg:w-[652px] rounded-lg overflow-hidden shrink-0 lg:-mr-[140px] lg:z-0">
        <img
          src={image_room_interior}
          alt="Fox & Hounds Lagos room interior"
          className="w-full object-cover"
          style={{ height: "clamp(300px, 60vw, 881px)" }}
        />
      </div>

      {/* Info card */}
      <div
        className="
          bg-white rounded-lg
          shadow-[0px_20px_40px_0px_rgba(0,0,0,0.4)]
          p-8 md:p-12 lg:p-16
          w-full
          lg:w-[595px] lg:shrink-0 lg:z-10
        "
      >
        {/* "Lodgings" label */}
        <span
          className="block text-[#131313] uppercase tracking-[1.2px] mb-3"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "12px" }}
        >
          Lodgings
        </span>

        {/* Heading */}
        <h2
          className="text-[#0282bf] mb-3"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 400,
            fontSize: "clamp(26px, 3vw, 36px)",
            lineHeight: "48px",
          }}
        >
          Rooms &amp; Suites
        </h2>

        {/* Description */}
        <div
          className="text-[#4d4d4d] mb-4"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6 }}
        >
          <p className="mb-4">
            We offer a range of tastefully furnished, cozy and affordable rooms designed for comfort. Each room features
            comfort-size beds, bathrooms, Wi-Fi and essential amenities.
          </p>
          <p>
            While our executive suites include flat-screen TVs, a lounge area and a mini refrigerator. With
            contemporary design, guests can enjoy meals, pastries and cocktails prepared on request by our in-house
            chefs.
          </p>
        </div>

        {/* Amenities list */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 py-2 mb-6">
          {/* Essential Amenities */}
          <div className="flex items-center gap-2 h-5">
            <StarIconSm />
            <span
              className="text-[#0282bf] uppercase tracking-[1.2px] whitespace-nowrap"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "12px" }}
            >
              Essential Amenities
            </span>
          </div>
          {/* High-Speed WiFi */}
          <div className="flex items-center gap-2 h-5">
            <WiFiSmIcon />
            <span
              className="text-[#0282bf] uppercase tracking-[1.2px] whitespace-nowrap"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "12px" }}
            >
              High-Speed WiFi
            </span>
          </div>
          {/* 24/7 Power */}
          <div className="flex items-center gap-2 h-5">
            <LightningSmIcon />
            <span
              className="text-[#0282bf] uppercase tracking-[1.2px] whitespace-nowrap"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "12px" }}
            >
              24/7 Power
            </span>
          </div>
        </div>

        {/* Book Now button */}
        <Link
          to="/contact"
          className="w-full flex items-center justify-center gap-3 bg-[#0282bf] backdrop-blur-sm rounded-[4px] cursor-pointer hover:bg-[#0270a8] transition-colors"
          style={{ padding: "16px 40px" }}
        >
          <span
            className="text-white uppercase tracking-[1.2px]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "14px" }}
          >
            Book now
          </span>
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
    </FadeIn>
  );
}

/** 2b. Studio Apartment bento card */
function StudioApartmentCard() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col md:flex-row h-[640px] md:h-[380px]">
      {/* Content pane */}
      <div className="flex-1 flex flex-col gap-4 p-6 md:p-8 lg:p-10 min-w-0">
        <h3
          className="text-[#0282bf] whitespace-nowrap"
          style={{ fontFamily: "'Noto Serif', serif", fontWeight: 400, fontSize: "clamp(20px, 2.5vw, 24px)", lineHeight: "32px" }}
        >
          Our Studio Apartments
        </h3>
        <p
          className="text-[#4d4d4d] flex-1"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6 }}
        >They are compact and stylish spaces designed for comfort & convenience. They are perfect for solo travellers or couples seeking a cozy stay.</p>
        <RoomCardFooter />
      </div>

      {/* Image pane */}
      <div className="flex-1 min-h-[240px] md:min-h-[0] overflow-hidden">
        <img
          src={imgStudio}
          alt="Studio apartment interior"
          className="w-full h-full object-cover"
          style={{ minHeight: "240px" }}
        />
      </div>
    </div>
  );
}

/** 2c. 1-Bed Mini Flat bento card (image on left) */
function MiniFlatCard() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col md:flex-row h-[640px] md:h-[380px]">
      {/* Image pane – left on desktop, top on mobile */}
      <div className="flex-1 min-h-[240px] md:min-h-[0] overflow-hidden">
        <img
          src={imgMiniFlat}
          alt="1-bed mini flat interior"
          className="w-full h-full object-cover"
          style={{ minHeight: "240px" }}
        />
      </div>

      {/* Content pane */}
      <div className="flex-1 flex flex-col gap-4 p-6 md:p-8 lg:p-10 min-w-0">
        <h3
          className="text-[#0282bf] whitespace-nowrap"
          style={{ fontFamily: "'Noto Serif', serif", fontWeight: 400, fontSize: "clamp(20px, 2.5vw, 24px)", lineHeight: "32px" }}
        >
          Our 1-bed Mini Flats
        </h3>
        <p
          className="text-[#4d4d4d] flex-1"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6 }}
        >
          We have well-designed one-bedroom apartments offering more space and privacy. These are ideal for guests who
          want a more comfortable home-like experience.
        </p>
        <RoomCardFooter />
      </div>
    </div>
  );
}

/** 2d. Bungalow bento card */
function BungalowCard() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col md:flex-row h-[640px] md:h-[380px]">
      {/* Content pane */}
      <div className="flex-1 flex flex-col gap-4 p-6 md:p-8 lg:p-10 min-w-0">
        <h3
          className="text-[#0282bf]"
          style={{ fontFamily: "'Noto Serif', serif", fontWeight: 400, fontSize: "clamp(20px, 2.5vw, 24px)", lineHeight: "32px" }}
        >
          Our Bungalows
        </h3>
        <p
          className="text-[#4d4d4d] flex-1"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6 }}
        >
          These are spacious &amp; fully equipped units, perfect for families or small groups looking for a relaxed
          and private stay.
        </p>
        <RoomCardFooter />
      </div>

      {/* Image pane */}
      <div className="flex-1 min-h-[240px] md:min-h-[0] overflow-hidden">
        <img
          src={imgBungalow}
          alt="Bungalow interior"
          className="w-full h-full object-cover"
          style={{ minHeight: "240px" }}
        />
      </div>
    </div>
  );
}

/** 2. The full asymmetric room sections (Rooms & Suites + Short-lets) */
function RoomSectionsLayout() {
  return (
    <section className="bg-[#f6f6f3] w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 lg:pr-[140px] py-16 md:py-20 lg:py-[100px] flex flex-col gap-20 md:gap-[120px] lg:gap-[160px]">

        {/* ── Rooms & Suites ── */}
        <RoomsSuitesBlock />

        {/* ── Short-let Apartments ── */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Section label */}
          <span
            className="text-black uppercase tracking-[1.2px]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "12px" }}
          >
            Short-Let Apartments
          </span>

          {/* Section heading */}
          <h2
            className="text-[#0282bf] max-w-[740px]"
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 400,
              fontSize: "clamp(26px, 3vw, 36px)",
              lineHeight: "48px",
            }}
          >
            Studio apartments, 1-bed mini flats &amp; bungalows
          </h2>

          {/* Intro text */}
          <div
            className="text-[#4d4d4d] max-w-[740px] py-1"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6 }}
          >
            <p className="mb-4">
              Fox &amp; Hounds Lagos also offers short-let serviced apartments in select locations, available for a few
              days or weeks. Ideal for families, small groups &amp; travellers, these spaces provide a more flexible and
              home-like alternative to traditional hotel stays.
            </p>
            <p>Our guests can enjoy comfort, privacy and a true home-away-from-home experience.</p>
          </div>

          {/* Bento Grid */}
          <div className="flex flex-col gap-5 mt-3 md:mt-4">
            <FadeIn direction="up" delay={0.1}>
              <StudioApartmentCard />
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <MiniFlatCard />
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <BungalowCard />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 3. The Standard of Fox & Hounds – signature amenities grid */
function SignatureAmenitiesSection() {
  const amenities = [
    {
      icon: <PowerBigIcon />,
      title: "24/7 Uninterrupted Power",
      subtitle: "Dual Industrial Generators",
    },
    {
      icon: <SecurityIcon />,
      title: "High-Grade Security",
      subtitle: "24-Hour Personnel & Tech",
    },
    {
      icon: <RoomServiceIcon />,
      title: "Room Service",
      subtitle: "Curated Midnight Menu",
    },
    {
      icon: <LaundryIcon />,
      title: "Same-Day Laundry",
      subtitle: "Professional Care",
    },
  ];

  return (
    <section className="bg-white w-full" style={{ borderTop: "1px solid rgba(79,70,50,0.05)", borderBottom: "1px solid rgba(79,70,50,0.05)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px] flex flex-col gap-16 items-center">
        {/* Heading block */}
        <FadeIn direction="up" className="flex flex-col gap-4 items-center text-center max-w-[800px]">
          <h2
            className="text-[#0282bf] w-full"
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 400,
              fontSize: "clamp(26px, 3vw, 36px)",
              lineHeight: "48px",
            }}
          >
            The Standard of{" "}
            <span className="text-[#0282bf]">Fox &amp; Hounds</span>
          </h2>
          <p
            className="text-[#484d51]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: 1.6 }}
          >
            Every room is curated with our signature amenities to ensure your comfort is prioritized.
          </p>
        </FadeIn>

        {/* Amenities grid */}
        <FadeIn direction="up" delay={0.1} className="flex flex-wrap items-start justify-center gap-8 md:gap-10 lg:gap-12 w-full">
          {amenities.map((a) => (
            <div
              key={a.title}
              className="flex flex-col items-center gap-4 w-[160px] md:w-[180px] lg:w-[220px] opacity-95"
            >
              {/* Icon */}
              <div className="flex items-center justify-center h-8">{a.icon}</div>
              {/* Title + subtitle */}
              <div className="flex flex-col gap-2 items-center text-center w-full">
                <span
                  className="text-[#303330] uppercase tracking-[1.2px] text-center"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "12px", lineHeight: "16px" }}
                >
                  {a.title}
                </span>
                <span
                  className="text-[#808080] uppercase tracking-[1.2px] whitespace-nowrap"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "10px", lineHeight: "16px" }}
                >
                  {a.subtitle}
                </span>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function RoomsPage() {
  return (
    <>
      <RoomsHero />
      <RoomSectionsLayout />
      <SignatureAmenitiesSection />
      <TestimonialsSection />
    </>
  );
}
