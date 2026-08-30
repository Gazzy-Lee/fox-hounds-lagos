import { useState } from "react";
import { Link } from "react-router";
import svgPaths from "../../imports/Desktop-3-3/svg-fj6ldntffn";
import imgExterior from "figma:asset/exterior-daytime.png";
import { FadeIn } from "./animations/FadeIn";
import { submitContactForm } from "../../utils/contactApi";

// ─── Contact Icons ─────────────────────────────────────────────────────────────

const ClockIcon = () => (
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" className="shrink-0 mt-0.5">
    <path d={svgPaths.p1b5e0f00} fill="#0282BF" />
  </svg>
);

const PinIcon = () => (
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

// ─── Info item ─────────────────────────────────────────────────────────────────

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | React.ReactNode;
  href?: string;
}

function InfoItem({ icon, label, value, href }: InfoItemProps) {
  const valueEl = href ? (
    <a
      href={href}
      className="text-[#303330] hover:text-[#0282bf] transition-colors"
      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "20px" }}
    >
      {value}
    </a>
  ) : (
    <span
      className="text-[#303330]"
      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "20px" }}
    >
      {value}
    </span>
  );

  return (
    <div className="flex gap-2 items-start w-full">
      {icon}
      <div className="flex flex-col gap-[2px] flex-1 min-w-0">
        <span
          className="text-[#5a6066] uppercase tracking-[1px]"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "15px" }}
        >
          {label}
        </span>
        {valueEl}
      </div>
    </div>
  );
}

// ─── 1. Hero ───────────────────────────────────────────────────────────────────

function ContactHero() {
  return (
    <section className="bg-white w-full">
      <FadeIn direction="up" className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 pt-[140px] pb-[60px] flex flex-col items-center gap-2 text-center">
        <span
          className="text-[#0282bf] uppercase tracking-[2.4px]"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "12px" }}
        >
          Connect with the Curator
        </span>
        <h1
          className="text-[#303330]"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 600,
            fontSize: "clamp(36px, 6vw, 60px)",
            lineHeight: 1.2,
          }}
        >
          Your escape begins{" "}
          <span className="block md:inline">
            with a <span className="text-[#0282bf]">conversation</span>
          </span>
        </h1>
      </FadeIn>
    </section>
  );
}

// ─── 2. Contact Info + Form ─────────────────────────────────────────────────────

function ContactInfoColumn() {
  return (
    <div className="flex flex-col gap-16 w-full lg:max-w-[500px]">
      {/* Contact details */}
      <div className="flex flex-col gap-6 pt-4">
        <InfoItem
          icon={<ClockIcon />}
          label="Opening Hours"
          value="Monday — Sunday: 8:00 AM — 12:00 AM"
        />
        <InfoItem
          icon={<PinIcon />}
          label="Location"
          value="No 9, Lapai Close, Thomas Estate, Ajah, Lagos State, Nigeria"
          href="https://maps.google.com/?q=Fox+%26+Hounds+Hotel+and+Sports+Bar+Lounge+Ajah+Lagos"
        />
        <InfoItem
          icon={<PhoneIcon />}
          label="Phone"
          value="+234 816 057 1765"
          href="tel:+2348160571765"
        />
        <InfoItem
          icon={<EmailIcon />}
          label="Email"
          value="info@foxandhoundslagos.com"
          href="mailto:info@foxandhoundslagos.com"
        />
      </div>

      {/* Exterior photo */}
      <div
        className="overflow-hidden rounded-lg shadow-[0px_20px_40px_0px_rgba(48,51,48,0.04)] w-full"
        style={{ height: "256px" }}
      >
        <img
          src={imgExterior}
          alt="Fox & Hounds Hotel exterior"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function ContactForm() {
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
        formType: "Contact",
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

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 700,
    fontSize: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#5a6066",
    lineHeight: "15px",
  };

  const inputBaseClass =
    "bg-[#f3f4f1] rounded-t-[4px] px-4 py-[17px] outline-none w-full text-[#303330] placeholder-[#6b7280] border-b-2 border-transparent focus:border-[#0282bf] transition-colors";
  const inputTextStyle: React.CSSProperties = {
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 400,
    fontSize: "14px",
  };

  return (
    <div
      className="bg-white rounded-lg flex-1 min-w-0 w-full relative shadow-[0px_25px_20px_rgba(0,0,0,0.1)] lg:max-w-[600px]"
      style={{ borderTop: "4px solid #0282bf" }}
    >
      <div className="flex flex-col gap-8 p-8 md:p-[60px]">
        <h2
          className="text-[#303330]"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "40px",
          }}
        >
          Send us a message
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name + Email: 2-col on sm+, 1-col on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label style={labelStyle}>Full Name</label>
              <input
                type="text"
                placeholder="e.g Alexander Cole"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputBaseClass}
                style={inputTextStyle}
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputBaseClass}
                style={inputTextStyle}
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label style={labelStyle}>Message</label>
            <textarea
              rows={5}
              placeholder="Reservation requirements or special occasion details..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${inputBaseClass} resize-none`}
              style={inputTextStyle}
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
              Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || submitted}
            className="w-full h-[60px] bg-[#0282bf] text-[#fff8f1] rounded-[4px] cursor-pointer hover:bg-[#0270a8] transition-colors shadow-[0px_20px_25px_-5px_rgba(120,90,26,0.2),0px_8px_10px_-6px_rgba(120,90,26,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "1.4px",
              textTransform: "uppercase",
            }}
          >
            {loading ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

function MainContentGrid() {
  return (
    <section
      className="w-full"
      style={{
        background:
          "radial-gradient(ellipse at top left, rgba(120,90,26,0.03) 0%, rgba(120,90,26,0) 50%), radial-gradient(ellipse at bottom right, rgba(120,90,26,0.03) 0%, rgba(120,90,26,0) 50%), linear-gradient(90deg, rgb(250,249,246) 0%, rgb(250,249,246) 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-20 py-16 md:py-20 lg:py-[100px]">
        {/* Desktop: side-by-side | Tablet/Mobile: stacked */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-start">
          <FadeIn direction="left" className="flex-1 w-full">
            <ContactInfoColumn />
          </FadeIn>
          <FadeIn direction="right" className="flex-1 w-full lg:max-w-[600px]">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Map Section ─────────────────────────────────────────────────────────────

function MapSection() {
  return (
    <section id="map" className="bg-white w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[60px] lg:px-20 py-16 md:py-20 lg:py-[100px]">
        <FadeIn direction="up" className="flex flex-col gap-6">
          <h2
            className="text-[#303330]"
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 600,
              fontSize: "clamp(26px, 3vw, 36px)",
              lineHeight: "40px",
            }}
          >
            Find us in Lagos
          </h2>

          {/* Map embed – real Fox & Hounds location */}
          <div className="w-full overflow-hidden rounded-lg" style={{ aspectRatio: "600/400" }}>
            <iframe
              title="Fox & Hounds Lagos Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3906938469745!2d3.570541274992515!3d6.4720952935196525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf75051c11995%3A0x4cacced8de66540f!2sFox%20%26%20Hounds%20Hotel%20and%20Sports%20Bar%20Lounge!5e0!3m2!1sen!2sng!4v1774361013583!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export function ContactPage() {
  return (
    <>
      <ContactHero />
      <MainContentGrid />
      <MapSection />
    </>
  );
}

// Re-export a typed Link-based "Book Now" button that pages can import for their CTAs
export function BookNowLink({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Link to="/contact" className={className}>
      {children}
    </Link>
  );
}