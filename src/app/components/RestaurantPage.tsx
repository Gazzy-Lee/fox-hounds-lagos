import { useState } from "react";
import svgPaths from "../../imports/Desktop-2/svg-lz24hfg8dz";
import imgHeroFood from "figma:asset/restaurant-hero-food.png";
import imgLocalSoul from "figma:asset/local-soul-dish.png";
import imgCroaker from "figma:asset/grilled-croaker.png";
import imgJollof from "figma:asset/jollof-rice.png";
import imgNkwobi from "figma:asset/nkwobi-dish.png";
import imgBeef from "figma:asset/grilled-beef.png";
import imgBar from "figma:asset/bar-overview.png";
import { TestimonialsSection } from "./TestimonialsSection";
import { FadeIn } from "./animations/FadeIn";
import { submitContactForm } from "../../utils/contactApi";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ArrowRightBlueIcon = () => (
  <svg width="9" height="9" viewBox="0 0 8.74996 8.74996" fill="none">
    <path d={svgPaths.p398000} fill="#0282BF" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" className="shrink-0 mt-0.5">
    <path d={svgPaths.p1b5e0f00} fill="#0282BF" />
  </svg>
);

const LocationIcon = () => (
  <svg width="20" height="19" viewBox="0 0 20 19.0095" fill="none" className="shrink-0 mt-0.5">
    <path d={svgPaths.p28d827c0} fill="#0282BF" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="17" viewBox="0 0 20 17" fill="none" className="shrink-0 mt-0.5">
    <path d={svgPaths.p33049d00} fill="#0282BF" />
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" className="shrink-0 mt-0.5">
    <path d={svgPaths.p3f52f0c0} fill="#0282BF" />
  </svg>
);

// ─── 1. Hero Section ──────────────────────────────────────────────────────────

function RestaurantHero() {
  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 pt-[140px] pb-[60px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">

          {/* ── Left: text content ── */}
          <FadeIn direction="left" className="flex flex-col gap-4 flex-1 min-w-0 justify-center lg:py-8">
            {/* Label */}
            <span
              className="text-[#0282bf] uppercase tracking-[3.6px]"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "12px" }}
            >
              Fox &amp; Hounds Culinary
            </span>

            {/* Heading */}
            <h1 style={{ fontFamily: "'Noto Serif', serif", fontWeight: 600, fontSize: "clamp(40px, 5vw, 60px)", lineHeight: 1.2 }}>
              <span className="block text-[#131313]">A</span>
              <span className="block text-[#0282bf]">Culinary</span>
              <span className="block text-[#131313]">Journey</span>
            </h1>

            {/* Body */}
            <div
              className="text-[#4d4d4d] max-w-[448px]"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6 }}
            >
              <p className="mb-4">
                Experience a masterful fusion where Lagos's vibrant coastal heritage meets refined international
                flavours.
              </p>
              <p>Every dish tells a story of local soil and global soul.</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 md:gap-5 mt-2">
              <button
                onClick={() => {
                  const reserveSection = document.getElementById('reserve-table');
                  reserveSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#0282bf] text-white rounded-[4px] cursor-pointer hover:bg-[#0270a8] transition-colors flex items-center justify-center"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  padding: "16px 40px",
                  minWidth: "180px",
                }}
              >
                Reserve table
              </button>
              <a
                href="https://foxandhoundsmenu.framer.website"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[4px] cursor-pointer hover:bg-[rgba(2,130,191,0.2)] transition-colors flex items-center justify-center gap-3"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  padding: "16px 40px",
                  minWidth: "180px",
                  background: "rgba(2,130,191,0.15)",
                  color: "#0282bf",
                }}
              >
                View menu
                <ArrowRightBlueIcon />
              </a>
            </div>
          </FadeIn>

          {/* ── Right: hero image + floating quote ── */}
          <FadeIn direction="right" className="relative flex-1 min-w-0 w-full lg:min-h-[522px]">
            {/* Main image */}
            <div
              className="w-full overflow-hidden rounded-lg shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] bg-[#f4f4f0]"
              style={{ height: "clamp(300px, 45vw, 522px)" }}
            >
              <img
                src={imgHeroFood}
                alt="Signature dish at Fox & Hounds"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Floating quote card */}
            <div
              className="
                bg-white rounded-[4px] p-6 md:p-8
                shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]
                border border-[rgba(176,179,174,0.1)]
                w-[260px] md:w-[310px] lg:w-[350px]
                absolute bottom-[-30px] left-[-20px]
                md:bottom-[-40px] md:left-[-30px]
                hidden md:block
              "
            >
              <p
                className="text-[#303330]"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 800,
                  fontSize: "16px",
                  lineHeight: "29.25px",
                }}
              >
                &ldquo;The finest expression of Nigerian ingredients I&apos;ve ever experienced.&rdquo;
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Local Soul, Global Spirit ─────────────────────────────────────────────

function LocalSoulSection() {
  return (
    <section className="bg-[#f6f6f3] w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">

          {/* Image */}
          <FadeIn direction="left" className="w-full lg:w-auto lg:shrink-0 overflow-hidden rounded-lg">
            <img
              src={imgLocalSoul}
              alt="Local ingredients and dishes at Fox & Hounds"
              className="w-full lg:w-[520px] object-cover rounded-lg"
              style={{ height: "clamp(300px, 50vw, 690px)" }}
            />
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" className="flex flex-col gap-8 flex-1 min-w-0">
            <h2 style={{ fontFamily: "'Noto Serif', serif", fontWeight: 600, fontSize: "clamp(28px, 3.5vw, 36px)", lineHeight: "48px" }}>
              <span className="block text-[#131313]">Local Soul,</span>
              <span className="text-[#0282bf]">Global </span>
              <span className="text-[#131313]">Spirit</span>
            </h2>

            <div className="flex flex-col gap-2" style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6, color: "#4d4d4d" }}>
              <p>
                Item 7&apos; is &apos;always&apos; a key highlight of any event in Nigeria, as guests look forward to
                great food. At Fox and Hounds Lagos, we provide international-standard catering by skilled chefs
                experienced in both local and continental dishes. This makes the event planning process seamless and
                stress-free.
              </p>
              <p>
                Our services include well-trained &amp; professionally dressed waiting staffs who ensure a smooth
                organized service.
              </p>
              <p>We also provide catering services for events all over Lagos.</p>
            </div>

            {/* Stats grid */}
            <div
              className="grid grid-cols-2 gap-x-8 gap-y-4 pt-4"
              style={{ borderTop: "1px solid rgba(176,179,174,0.2)" }}
            >
              {/* Stat 1 */}
              <div className="flex flex-col gap-1.5">
                <span
                  className="text-[#0282bf]"
                  style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontSize: "30px", lineHeight: "36px" }}
                >
                  30+
                </span>
                <span
                  className="text-[#5a6066] uppercase tracking-[1px]"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "10px" }}
                >
                  Curated Wines
                </span>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col gap-1.5">
                <span
                  className="text-[#0282bf]"
                  style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontSize: "30px", lineHeight: "36px" }}
                >0km</span>
                <span
                  className="text-[#5a6066] uppercase tracking-[1px]"
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "10px" }}
                >
                  Seafood Sourcing
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Signature Dishes (Bento Grid) ─────────────────────────────────────────

interface DishHorizontalProps {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  imageRight?: boolean;
}

function DishHorizontal({ image, imageAlt, category, title, description, imageRight = true }: DishHorizontalProps) {
  return (
    <div className={`bg-white rounded-lg overflow-hidden flex flex-col md:flex-row lg:flex-col h-full ${imageRight ? "" : "md:flex-row-reverse lg:flex-col"}`}>
      {/* Image pane - top on mobile/desktop, left/right on tablet */}
      <div className="flex-1 min-h-[240px] md:min-h-0 lg:min-h-0 overflow-hidden order-1 md:order-none">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
      </div>
      {/* Text pane */}
      <div className="flex flex-col gap-2 p-6 md:p-8 lg:p-8 flex-1 min-w-0 order-2">
        <span
          className="text-[#303330] uppercase tracking-[1px]"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "12px" }}
        >
          {category}
        </span>
        <h3
          className="text-[#0282bf]"
          style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontSize: "clamp(22px, 2.5vw, 28px)", lineHeight: "36px" }}
        >
          {title}
        </h3>
        <p
          className="text-[#4d4d4d] mt-1"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6 }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

interface DishVerticalProps {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
}

function DishVertical({ image, imageAlt, category, title, description }: DishVerticalProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="overflow-hidden" style={{ height: "256px" }}>
        <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
      </div>
      {/* Text */}
      <div className="flex flex-col gap-2 p-6 md:p-8 flex-1">
        <span
          className="text-[#303330] uppercase tracking-[1px]"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "12px" }}
        >
          {category}
        </span>
        <h3
          className="text-[#0282bf]"
          style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontSize: "clamp(22px, 2.5vw, 28px)", lineHeight: "36px" }}
        >
          {title}
        </h3>
        <p
          className="text-[#4d4d4d] mt-1"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6 }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function SignatureDishesSection() {
  return (
    <section className="bg-[#faf9f6] w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px] flex flex-col gap-16 md:gap-20">

        {/* Heading block */}
        <FadeIn direction="up" className="flex flex-col gap-4 items-center text-center">
          <span
            className="text-[#303330] uppercase tracking-[3.6px]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "12px" }}
          >
            The Selection
          </span>
          <h2
            className="text-[#0282bf]"
            style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 36px)", lineHeight: "48px" }}
          >
            Signature Creations
          </h2>
        </FadeIn>

        {/* Mobile: single-column stacked cards - 540px height */}
        <FadeIn direction="up" delay={0.1} className="flex flex-col gap-6 md:hidden">
          <div className="h-[540px]">
            <DishVertical
              image={imgCroaker}
              imageAlt="Signature Grilled Croaker"
              category="Atlantic Selection"
              title="Signature Grilled Croaker"
              description="Marinated in heritage spices for 24 hours, flame-grilled over scent leaf charcoal and served with a zesty citrus reduction."
            />
          </div>
          <div className="h-[540px]">
            <DishVertical
              image={imgJollof}
              imageAlt="Jollof Rice"
              category="Classic Nigerian"
              title="Jollof Rice"
              description="Slowly cooked in a rich tomato & pepper blend, infused with spices, giving it a smoky flavourful finish."
            />
          </div>
          <div className="h-[540px]">
            <DishVertical
              image={imgNkwobi}
              imageAlt="Nkwobi"
              category="Eastern Delight"
              title="Nkwobi"
              description="Tender cow foot pieces tossed in a rich palm oil sauce, seasoned with traditional spices and garnished for a bold authentic taste."
            />
          </div>
          <div className="h-[540px]">
            <DishVertical
              image={imgBeef}
              imageAlt="Grilled Beef"
              category="Flame Grill"
              title="Grilled Beef"
              description="Juicy cuts of beef marinated in house spices, flame-grilled to perfection and served with a savoury glaze."
            />
          </div>
        </FadeIn>

        {/* Tablet: single-column stacked cards - 440px height */}
        <FadeIn direction="up" delay={0.1} className="hidden md:flex lg:hidden flex-col gap-6">
          <div className="h-[440px]">
            <DishHorizontal
              image={imgCroaker}
              imageAlt="Signature Grilled Croaker"
              category="Atlantic Selection"
              title="Signature Grilled Croaker"
              description="Marinated in heritage spices for 24 hours, flame-grilled over scent leaf charcoal and served with a zesty citrus reduction."
            />
          </div>
          <div className="h-[440px]">
            <DishHorizontal
              image={imgJollof}
              imageAlt="Jollof Rice"
              category="Classic Nigerian"
              title="Jollof Rice"
              description="Slowly cooked in a rich tomato & pepper blend, infused with spices, giving it a smoky flavourful finish."
            />
          </div>
          <div className="h-[440px]">
            <DishHorizontal
              image={imgNkwobi}
              imageAlt="Nkwobi"
              category="Eastern Delight"
              title="Nkwobi"
              description="Tender cow foot pieces tossed in a rich palm oil sauce, seasoned with traditional spices and garnished for a bold authentic taste."
              imageRight={false}
            />
          </div>
          <div className="h-[440px]">
            <DishHorizontal
              image={imgBeef}
              imageAlt="Grilled Beef"
              category="Flame Grill"
              title="Grilled Beef"
              description="Juicy cuts of beef marinated in house spices, flame-grilled to perfection and served with a savoury glaze."
            />
          </div>
        </FadeIn>

        {/* Desktop: 2x2 grid - 470px height per card */}
        <FadeIn direction="up" delay={0.1} className="hidden lg:grid gap-8 grid-cols-2">
          <div className="h-[470px]">
            <DishVertical
              image={imgCroaker}
              imageAlt="Signature Grilled Croaker"
              category="Atlantic Selection"
              title="Signature Grilled Croaker"
              description="Marinated in heritage spices for 24 hours, flame-grilled over scent leaf charcoal and served with a zesty citrus reduction."
            />
          </div>
          <div className="h-[470px]">
            <DishVertical
              image={imgJollof}
              imageAlt="Jollof Rice"
              category="Classic Nigerian"
              title="Jollof Rice"
              description="Slowly cooked in a rich tomato & pepper blend, infused with spices, giving it a smoky flavourful finish."
            />
          </div>
          <div className="h-[470px]">
            <DishVertical
              image={imgNkwobi}
              imageAlt="Nkwobi"
              category="Eastern Delight"
              title="Nkwobi"
              description="Tender cow foot pieces tossed in a rich palm oil sauce, seasoned with traditional spices and garnished for a bold authentic taste."
            />
          </div>
          <div className="h-[470px]">
            <DishVertical
              image={imgBeef}
              imageAlt="Grilled Beef"
              category="Flame Grill"
              title="Grilled Beef"
              description="Juicy cuts of beef marinated in house spices, flame-grilled to perfection and served with a savoury glaze."
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 4. Bar Side View ─────────────────────────────────────────────────────────

function BarSection() {
  return (
    <section className="w-full">
      <div className="max-w-[1280px] mx-auto py-16 md:py-20 lg:py-[100px] flex flex-col gap-10">
        {/* Text header */}
        <FadeIn direction="up" className="flex flex-col gap-2 px-6 md:px-10 lg:px-20">
          <span
            className="text-[#5a6066] uppercase tracking-[0.6px]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "12px" }}
          >
            Premium Drinks
          </span>
          <h2
            className="text-[#0282bf]"
            style={{ fontFamily: "'Noto Serif', serif", fontWeight: 600, fontSize: "clamp(28px, 3.5vw, 36px)", lineHeight: "40px" }}
          >
            Bar side view
          </h2>
          <p
            className="text-[#4d4d4d] max-w-[700px]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6 }}
          >
            A curated selection of cocktails, wines, spirits and refreshing beverages served in a relaxed &amp;
            inviting atmosphere.
          </p>
        </FadeIn>

        {/* Full-width bar image */}
        <FadeIn direction="up" delay={0.1} className="w-full overflow-hidden" style={{ height: "clamp(280px, 40vw, 614px)" }}>
          <img
            src={imgBar}
            alt="Fox & Hounds bar"
            className="w-full h-full object-cover"
          />
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 5. Reserve Your Table ────────────────────────────────────────────────────

interface ContactRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function ContactRow({ icon, label, value }: ContactRowProps) {
  return (
    <div className="flex gap-2 items-start w-full">
      {icon}
      <div className="flex flex-col gap-0.5 flex-1">
        <span
          className="text-[#5a6066] uppercase tracking-[1px]"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "10px", lineHeight: "15px" }}
        >
          {label}
        </span>
        <span
          className="text-[#303330]"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px" }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

function ReserveTableSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        formType: "Restaurant",
      });

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reserve-table" className="bg-white w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px]">
        {/* Card */}
        <FadeIn direction="up">
          <div
            className="bg-white rounded-lg w-full max-w-[1200px] mx-auto shadow-[0px_25px_40px_0px_rgba(0,0,0,0.1)]"
            style={{ borderTop: "4px solid #0282bf" }}
          >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 p-6 md:p-10 lg:p-20 items-start">

            {/* ── Left: info ── */}
            <div className="flex flex-col gap-6 flex-1 min-w-0">
              <h2
                className="text-[#303330]"
                style={{ fontFamily: "'Noto Serif', serif", fontWeight: 600, fontSize: "clamp(26px, 3vw, 36px)", lineHeight: "40px" }}
              >
                Reserve Your Table
              </h2>
              <p
                className="text-[#484d51]"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: 1.6 }}
              >
                Kindly make your reservation enquiries by sending us a message through the contact form. We recommend
                reaching out at least 48 hours in advance for weekend dining.
              </p>

              {/* Contact details */}
              <div className="flex flex-col gap-6 pt-4" style={{ borderTop: "1px solid rgba(176,179,174,0.2)" }}>
                <ContactRow
                  icon={<ClockIcon />}
                  label="Opening Hours"
                  value="Monday — Sunday: 8:00 AM — 12:00 AM"
                />
                <ContactRow
                  icon={<LocationIcon />}
                  label="Location"
                  value="9 Lapai Close. Thomas Estate, Ajah, Lagos State, Nigeria"
                />
                <ContactRow
                  icon={<PhoneIcon />}
                  label="Phone"
                  value="+234 816 057 1765"
                />
                <ContactRow
                  icon={<EmailIcon />}
                  label="Email"
                  value="info@foxandhoundslagos.com"
                />
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="flex flex-col gap-4 flex-1 min-w-0 w-full">
              <h3
                className="text-[#303330]"
                style={{ fontFamily: "'Noto Serif', serif", fontWeight: 600, fontSize: "20px", lineHeight: "40px" }}
              >
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[#5a6066] uppercase tracking-[1px]"
                      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "10px" }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g Alexander Cole"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#f3f4f1] rounded-t-[4px] px-4 py-4 outline-none w-full text-[#303330] placeholder-[#6b7280]"
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        borderBottom: "2px solid transparent",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#0282bf")}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[#5a6066] uppercase tracking-[1px]"
                      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "10px" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#f3f4f1] rounded-t-[4px] px-4 py-4 outline-none w-full text-[#303330] placeholder-[#6b7280]"
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        borderBottom: "2px solid transparent",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#0282bf")}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[#5a6066] uppercase tracking-[1px]"
                    style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "10px" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Reservation requirements or special occasion details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#f3f4f1] rounded-t-[4px] px-4 py-4 outline-none w-full text-[#303330] placeholder-[#6b7280] resize-none"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      borderBottom: "2px solid transparent",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#0282bf")}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
                    required
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div
                    className="p-4 rounded-[4px] bg-red-50 border border-red-200 text-red-800"
                    style={{ fontFamily: "'Manrope', sans-serif", fontSize: "14px", lineHeight: 1.5 }}
                  >
                    {error}
                  </div>
                )}

                {/* Success Message */}
                {submitted && (
                  <div
                    className="p-4 rounded-[4px] bg-green-50 border border-green-200 text-green-800"
                    style={{ fontFamily: "'Manrope', sans-serif", fontSize: "14px", lineHeight: 1.5 }}
                  >
                    Thank you! Your reservation request has been sent. We'll confirm within 24 hours.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="w-full bg-[#0282bf] text-white rounded-[4px] cursor-pointer hover:bg-[#0270a8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    padding: "16px 40px",
                  }}
                >
                  {loading ? "Sending..." : submitted ? "Message Sent!" : "Send message"}
                </button>
              </form>
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function RestaurantPage() {
  return (
    <>
      <RestaurantHero />
      <LocalSoulSection />
      <SignatureDishesSection />
      <BarSection />
      <TestimonialsSection />
      <ReserveTableSection />
    </>
  );
}