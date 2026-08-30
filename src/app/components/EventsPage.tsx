import { useState } from "react";
import svgPaths from "../../imports/Desktop-4/svg-dj2qhih453";
import imgScreening1 from "figma:asset/screening-01.png";
import imgScreening2 from "figma:asset/screening-02.png";
import imgScreening3 from "figma:asset/screening-03.png";
import imgVenue from "figma:asset/venue-private-events.png";
import { TestimonialsSection } from "./TestimonialsSection";
import { FadeIn } from "./animations/FadeIn";
import { submitContactForm } from "../../utils/contactApi";
import { ChefHat, MapPin, Palette, Music } from "lucide-react";

// ─── Icons ────────────────────────────────────────────────────────────────────

// Bespoke Catering icon
const CateringIcon = () => (
  <ChefHat size={24} color="#0282BF" strokeWidth={2} className="shrink-0 mt-0.5" />
);

// Secluded Venues icon
const VenueIcon = () => (
  <MapPin size={24} color="#0282BF" strokeWidth={2} className="shrink-0 mt-0.5" />
);

// Event Décor icon
const DecorIcon = () => (
  <Palette size={24} color="#0282BF" strokeWidth={2} className="shrink-0 mt-0.5" />
);

// DJ Services icon
const DJIcon = () => (
  <Music size={24} color="#0282BF" strokeWidth={2} className="shrink-0 mt-0.5" />
);

// ─── 1. Hero – Arena of Excellence ────────────────────────────────────────────

function EventsHero() {
  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 pt-[140px] pb-[60px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-center">

          {/* ── Left: text ── */}
          <FadeIn
            direction="left"
            className="flex flex-col gap-4 w-full lg:w-auto"
            style={{ maxWidth: "410px" }}
          >
            <span
              className="text-[#0282bf] uppercase tracking-[0.6px]"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "12px" }}
            >
              Sports &amp; Leisure
            </span>

            <h1
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 600,
                fontSize: "clamp(40px, 5.5vw, 60px)",
                lineHeight: 1.2,
              }}
            >
              <span className="block text-[#303330]">Arena of</span>
              <span className="block text-[#0282bf]">Excellence</span>
            </h1>

            <div
              className="text-[#4d4d4d] pt-1"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6, maxWidth: "512px" }}
            >
              <p className="mb-4">
                Experience the football thrill of the European Premier League (EPL) and UEFA Champions League (UCL) in
                an atmosphere designed for discerning fans.
              </p>
              <p>Catch every moment live with fellow supporters in a relaxed and vibrant setting.</p>
            </div>
          </FadeIn>

          {/* ── Right: video / hero image ── */}
          <FadeIn direction="right" className="flex-1 min-w-0 w-full">
            <div className="w-full h-[190px] md:h-[400px] lg:h-[552px] overflow-hidden rounded-2xl relative">
              <video
                autoPlay
                loop
                playsInline
                muted
                controls
                controlsList="nodownload"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/fox-and-hounds-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Curated Screenings ────────────────────────────────────────────────────

function CuratedScreenings() {
  return (
    <section className="bg-[#f6f6f3] w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px]">
        <div className="flex flex-col gap-10">

          {/* Header */}
          <FadeIn direction="up" className="flex flex-col gap-4">
            <h2
              className="text-[#0282bf]"
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 600,
                fontSize: "clamp(26px, 3vw, 36px)",
                lineHeight: "40px",
              }}
            >
              Curated Screenings
            </h2>
            <span
              className="text-[#5d605c] uppercase tracking-[1.2px]"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "12px" }}
            >
              Premier League • Champions League • World Cup
            </span>
          </FadeIn>

          {/* Images grid */}
          {/* Desktop: 2-col (showing 2 main + 1 as accent) | Tablet: 2-col | Mobile: stacked */}
          <FadeIn direction="up" delay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* Image 1 – full width on mobile, spans 1 col on md+ */}
            <div className="overflow-hidden rounded-lg w-full" style={{ height: "clamp(200px, 35vw, 500px)" }}>
              <img
                src={imgScreening1}
                alt="UEFA Champions League screening"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 + Image 3 stacked */}
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="overflow-hidden rounded-lg w-full" style={{ height: "clamp(95px, 16.5vw, 243px)" }}>
                <img
                  src={imgScreening2}
                  alt="Sports stars at Fox & Hounds"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg w-full" style={{ height: "clamp(95px, 16.5vw, 243px)" }}>
                <img
                  src={imgScreening3}
                  alt="World Cup screening event"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Private Events ────────────────────────────────────────────────────────

interface EventFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function EventFeature({ icon, title, description }: EventFeatureProps) {
  return (
    <div className="flex gap-4 items-start w-full">
      <div className="shrink-0 pt-0.5">{icon}</div>
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <h4
          className="text-[#303330]"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "20px" }}
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

function PrivateEventsSection() {
  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px] items-center">

          {/* ── Left: venue image ── */}
          <FadeIn direction="left" className="flex-1 min-w-0 w-full rounded-lg relative overflow-hidden">
            {/* Blue shade overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none rounded-lg"
              style={{ background: "rgba(2,130,191,0.12)" }} />
            <img
              src={imgVenue}
              alt="Private event venue at Fox & Hounds"
              className="w-full h-full object-cover"
              style={{ height: "clamp(280px, 45vw, 680px)" }}
            />
          </FadeIn>

          {/* ── Right: content ── */}
          <FadeIn direction="right" className="flex flex-col gap-8 flex-1 min-w-0">
            <h2
              className="text-[#0282bf]"
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 600,
                fontSize: "clamp(26px, 3vw, 36px)",
                lineHeight: "40px",
              }}
            >
              Let us host your private events
            </h2>

            <div
              className="text-[#4d4d4d]"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6 }}
            >
              <p className="mb-4">
                From intimate corporate milestones to celebratory soirées, Fox &amp; Hounds provides a backdrop of
                quiet luxury.
              </p>
              <p>
                Our curated gathering spaces offer privacy without isolation, tailored menus and a dedicated
                concierge.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-6 pt-4" style={{ borderTop: "1px solid rgba(176,179,174,0.2)" }}>
              <EventFeature
                icon={<CateringIcon />}
                title="Bespoke Catering"
                description="Menus crafted by our executive chef to match your event's profile."
              />
              <EventFeature
                icon={<VenueIcon />}
                title="Secluded Venues"
                description="Capacities from 10 to 40 guests in our most exclusive wings."
              />
              <EventFeature
                icon={<DecorIcon />}
                title="Event Décor"
                description="We provide custom decorations for our guest events."
              />
              <EventFeature
                icon={<DJIcon />}
                title="DJ Services"
                description="Enhance your event with our professional DJ services."
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── 4. Event Inquiry Form ────────────────────────────────────────────────────

function EventInquirySection() {
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
        formType: "Event",
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

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    borderBottom: "2px solid transparent",
    transition: "border-color 0.2s",
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderBottomColor = "#0282bf";
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderBottomColor = "transparent";
  };

  return (
    <section className="bg-[#f6f6f3] w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px] flex justify-center">

        {/* Card */}
        <FadeIn direction="up">
          <div
            className="bg-white rounded-lg w-full shadow-[0px_25px_40px_0px_rgba(0,0,0,0.1)] overflow-hidden"
            style={{ maxWidth: "896px", borderTop: "4px solid #0282bf" }}
        >
          <div className="flex flex-col gap-12 md:gap-16 items-center p-6 md:p-12 lg:p-20">

            {/* Header */}
            <div className="flex flex-col gap-4 items-center text-center">
              <h2
                className="text-[#0282bf]"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 600,
                  fontSize: "clamp(26px, 3vw, 36px)",
                  lineHeight: "40px",
                }}
              >
                Event Inquiry
              </h2>
              <p
                className="text-[#484d51] max-w-[448px]"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: 1.6 }}
              >
                Share your vision with us and our legacy concierge will respond within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    style={inputStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                    required
                  />
                </div>
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
                    style={inputStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
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
                  placeholder="Dietary requirements or special occasion details, etc"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#f3f4f1] rounded-t-[4px] px-4 py-4 outline-none w-full text-[#303330] placeholder-[#6b7280] resize-none"
                  style={inputStyle}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
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
                  Thank you! Your event inquiry has been received. Our team will respond within 24 hours.
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
                {loading ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function EventsPage() {
  return (
    <>
      <EventsHero />
      <CuratedScreenings />
      <PrivateEventsSection />
      <EventInquirySection />
      <TestimonialsSection />
    </>
  );
}