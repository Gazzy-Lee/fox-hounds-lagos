import { useState } from "react";
import { FadeIn } from "./animations/FadeIn";

const QUOTE_PATH =
  "M3.4 24L8 16V16V16C5.8 16 3.91667 15.2167 2.35 13.65C0.783333 12.0833 0 10.2 0 8C0 5.8 0.783333 3.91667 2.35 2.35C3.91667 0.783333 5.8 0 8 0C10.2 0 12.0833 0.783333 13.65 2.35C15.2167 3.91667 16 5.8 16 8C16 8.76667 15.9083 9.475 15.725 10.125C15.5417 10.775 15.2667 11.4 14.9 12L8 24H3.4V24M21.4 24L26 16V16V16C23.8 16 21.9167 15.2167 20.35 13.65C18.7833 12.0833 18 10.2 18 8C18 5.8 18.7833 3.91667 20.35 2.35C21.9167 0.783333 23.8 0 26 0C28.2 0 30.0833 0.783333 31.65 2.35C33.2167 3.91667 34 5.8 34 8C34 8.76667 33.9083 9.475 33.725 10.125C33.5417 10.775 33.2667 11.4 32.9 12L26 24H21.4V24";

const ARROW_LEFT =
  "M1.67592 4.81247H8.74996V3.93749H1.67592L4.99868 0.614729L4.37498 0L0 4.37498L4.37498 8.74996L4.99868 8.13523L1.67592 4.81247V4.81247";

const ARROW_RIGHT =
  "M7.07404 4.81247H0V3.93749H7.07404L3.75128 0.614729L4.37498 0L8.74996 4.37498L4.37498 8.74996L3.75128 8.13523L7.07404 4.81247V4.81247";

const QuoteIcon = () => (
  <svg width="34" height="24" viewBox="0 0 34 24" fill="none" className="shrink-0">
    <path d={QUOTE_PATH} fill="#0282BF" />
  </svg>
);

const testimonials = [
  {
    id: 1,
    quote:
      '"From the moment I walked in, I felt an overwhelming sense of peace. The staff was incredibly welcoming and the ambiance was just perfect. I left feeling completely rejuvenated!"',
    name: "Collins Enebeni",
    title: "(Don Jazzy's Dad)",
  },
  {
    id: 2,
    quote:
      '"I had the best time of my life here! The attention to detail and the calming atmosphere made it an unforgettable experience. That is why I keep coming back."',
    name: "Ayo Adedoyin",
    title: "(Gubernatorial Aspirant Kwara State)",
  },
  {
    id: 3,
    quote:
      '"Everything about this place screams luxury and relaxation. From the cozy lounge area to the airy relaxation spots, it was exactly what I needed to unwind and relax after every of my busy activities."',
    name: "George Okon- MD",
    title: "(Dlightsom Pharmacy Chairman)",
  },
  {
    id: 4,
    quote:
      '"I booked a weekend getaway here, and it was magical. The food was delicious, the rooms were spotless, and the environment was simply breathtaking."',
    name: "Engr. Olanrewaju Adeyelore",
    title: "(Recognized Engineer)",
  },
  {
    id: 5,
    quote:
      '"If you\'re looking for a place to escape and recharge, this is it. The combination of nature, tranquility, and top-notch service is unmatched."',
    name: "Past and Present",
    title: "(Chairmen of Thomas Estate)",
  },
  {
    id: 6,
    quote:
      '"Exceptional service! The team went above and beyond to make sure I was comfortable and satisfied. This place truly sets the standard for hospitality."',
    name: "DR CHRIS ONUOHA",
    title: "",
  },
];

// Desktop: 3 pages (2 testimonials per page)
// Mobile/Tablet: 6 pages (1 testimonial per page)
const DESKTOP_PAGES = 3;
const MOBILE_PAGES = 6;

function TestimonialCard({ quote, name, title }: { quote: string; name: string; title: string }) {
  return (
    <div className="flex flex-col gap-6 items-center flex-1">
      <QuoteIcon />
      <div className="flex flex-col gap-8 items-center">
        <p
          className="text-[#131313] text-center"
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: 1.6,
          }}
        >
          {quote}
        </p>
        <div
          className="text-[#636669] text-center tracking-[1.4px] uppercase"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "20px" }}
        >
          <p>{name}</p>
          {title && <p>{title}</p>}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [desktopPage, setDesktopPage] = useState(0);
  const [mobilePage, setMobilePage] = useState(0);

  const handleDesktopPrev = () => setDesktopPage((p) => Math.max(0, p - 1));
  const handleDesktopNext = () => setDesktopPage((p) => Math.min(DESKTOP_PAGES - 1, p + 1));

  const handleMobilePrev = () => setMobilePage((p) => Math.max(0, p - 1));
  const handleMobileNext = () => setMobilePage((p) => Math.min(MOBILE_PAGES - 1, p + 1));

  // Desktop: 2 per page; mobile: 1 per page
  const desktopStart = desktopPage * 2;
  const mobileIndex = mobilePage;

  return (
    <section
      className="bg-[#f6f6f3] w-full"
      aria-label="Testimonials"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px] flex flex-col gap-8 items-center overflow-hidden">
        {/* Section Label */}
        <FadeIn direction="up">
          <span
            className="text-[#0282bf] tracking-[2.4px] uppercase text-center"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: "20px" }}
          >
            testimonials
          </span>
        </FadeIn>

        {/* Testimonial Content */}
        <FadeIn direction="up" delay={0.1} className="w-full min-h-[200px] flex items-start justify-center gap-10 md:gap-14">
          {/* Desktop: show 2 per page */}
          <div className="hidden lg:flex gap-14 w-full">
            {testimonials.slice(desktopStart, desktopStart + 2).map((t) => (
              <TestimonialCard key={t.id} quote={t.quote} name={t.name} title={t.title} />
            ))}
          </div>

          {/* Mobile/tablet: show 1 per page */}
          <div className="flex lg:hidden w-full max-w-[600px] mx-auto">
            <TestimonialCard
              quote={testimonials[mobileIndex].quote}
              name={testimonials[mobileIndex].name}
              title={testimonials[mobileIndex].title}
            />
          </div>
        </FadeIn>

        {/* Desktop Page Controls */}
        <div className="hidden lg:flex items-center gap-10 p-3">
          {/* Prev Button */}
          <button
            onClick={handleDesktopPrev}
            disabled={desktopPage === 0}
            className={`backdrop-blur-sm p-3 rounded-[4px] transition-all cursor-pointer ${
              desktopPage === 0
                ? "bg-[rgba(99,114,122,0.15)] opacity-40 cursor-not-allowed"
                : "bg-[#0282bf] hover:bg-[#0270a8]"
            }`}
            aria-label="Previous testimonial"
          >
            <svg width="9" height="9" viewBox="0 0 8.74996 8.74996" fill="none">
              <path d={ARROW_LEFT} fill="#FFF8F1" />
            </svg>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1">
            {Array.from({ length: DESKTOP_PAGES }).map((_, i) => (
              <button
                key={i}
                onClick={() => setDesktopPage(i)}
                className={`flex items-center justify-center px-4 py-2 rounded-[4px] cursor-pointer transition-all ${
                  desktopPage === i
                    ? "bg-[rgba(2,130,191,0.1)] border border-[rgba(2,130,191,0.2)]"
                    : "hover:bg-gray-100"
                }`}
              >
                <span
                  className={`tracking-[1.2px] uppercase text-sm ${
                    desktopPage === i ? "text-[#0282bf]" : "text-black"
                  }`}
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
                >
                  {i + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleDesktopNext}
            disabled={desktopPage === DESKTOP_PAGES - 1}
            className={`backdrop-blur-sm p-3 rounded-[4px] transition-all cursor-pointer ${
              desktopPage === DESKTOP_PAGES - 1
                ? "bg-[#0282bf] opacity-40 cursor-not-allowed"
                : "bg-[#0282bf] hover:bg-[#0270a8]"
            }`}
            aria-label="Next testimonial"
          >
            <svg width="9" height="9" viewBox="0 0 8.74996 8.74996" fill="none">
              <path d={ARROW_RIGHT} fill="#FFF8F1" />
            </svg>
          </button>
        </div>

        {/* Mobile/Tablet Page Controls */}
        <div className="flex lg:hidden items-center justify-center gap-4 md:gap-6 p-3 w-full">
          {/* Prev Button */}
          <button
            onClick={handleMobilePrev}
            disabled={mobilePage === 0}
            className={`backdrop-blur-sm p-3 rounded-[4px] transition-all cursor-pointer shrink-0 ${
              mobilePage === 0
                ? "bg-[rgba(99,114,122,0.15)] opacity-40 cursor-not-allowed"
                : "bg-[#0282bf] hover:bg-[#0270a8]"
            }`}
            aria-label="Previous testimonial"
          >
            <svg width="9" height="9" viewBox="0 0 8.74996 8.74996" fill="none">
              <path d={ARROW_LEFT} fill="#FFF8F1" />
            </svg>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1 shrink-0">
            {Array.from({ length: MOBILE_PAGES }).map((_, i) => (
              <button
                key={i}
                onClick={() => setMobilePage(i)}
                className={`flex items-center justify-center px-3 md:px-4 py-2 rounded-[4px] cursor-pointer transition-all shrink-0 ${
                  mobilePage === i
                    ? "bg-[rgba(2,130,191,0.1)] border border-[rgba(2,130,191,0.2)]"
                    : "hover:bg-gray-100"
                }`}
              >
                <span
                  className={`tracking-[1.2px] uppercase text-sm ${
                    mobilePage === i ? "text-[#0282bf]" : "text-black"
                  }`}
                  style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}
                >
                  {i + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleMobileNext}
            disabled={mobilePage === MOBILE_PAGES - 1}
            className={`backdrop-blur-sm p-3 rounded-[4px] transition-all cursor-pointer shrink-0 ${
              mobilePage === MOBILE_PAGES - 1
                ? "bg-[#0282bf] opacity-40 cursor-not-allowed"
                : "bg-[#0282bf] hover:bg-[#0270a8]"
            }`}
            aria-label="Next testimonial"
          >
            <svg width="9" height="9" viewBox="0 0 8.74996 8.74996" fill="none">
              <path d={ARROW_RIGHT} fill="#FFF8F1" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
