import imgImage1 from "figma:asset/gallery-01.png";
import { FadeIn } from "./animations/FadeIn";
import imgImage2 from "figma:asset/gallery-02.png";
import imgImage3 from "figma:asset/gallery-03.png";
import imgImage4 from "figma:asset/lounge-card.png";
import imgImage5 from "figma:asset/bar-overview.png";
import imgImage6 from "figma:asset/gallery-06.png";
import imgImage7 from "figma:asset/gallery-07.png";
import imgImage8 from "figma:asset/gallery-08.png";
import imgImage9 from "figma:asset/gallery-09.png";
import imgImage10 from "figma:asset/gallery-10.png";
import imgImage11 from "figma:asset/gallery-11.png";
import imgImage12 from "figma:asset/gallery-12.png";
import imgImage13 from "figma:asset/gallery-13.png";
import imgImage14 from "figma:asset/gallery-14.png";
import imgImage15 from "figma:asset/gallery-15.png";
import imgFeatured from "../../imports/gallery-featured.png";
import { TestimonialsSection } from "./TestimonialsSection";

// ─── 1. Page Header ───────────────────────────────────────────────────────────

function GalleryHeader() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 pt-[140px] pb-[60px]">
        <FadeIn direction="up" className="flex flex-col gap-4 max-w-[672px]">
          <span
            className="text-[#0282bf] uppercase tracking-[2.4px]"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "12px" }}
          >
            Visual Journey
          </span>
          <h1
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 600,
              fontSize: "clamp(36px, 5vw, 54px)",
              lineHeight: 1.2,
            }}
          >
            <span className="block text-[#303330]">Our Curated</span>
            <span className="block text-[#0282bf]">Collections</span>
          </h1>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 2. Bento Grid Gallery ────────────────────────────────────────────────────

// Shared image cell component
function GalleryCell({
  src,
  alt,
  rounded = false,
}: {
  src: string;
  alt: string;
  rounded?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden w-full h-full ${rounded ? "rounded-lg" : ""}`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
}

function BentoGrid() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 pb-6 md:pb-8 lg:pb-10">

        {/* ── Desktop: Full 12-column bento grid (lg+) ── */}
        <div
          className="hidden lg:grid gap-6"
          style={{
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            gridTemplateRows: "300px 300px 320px 300px 300px 200px 200px 180px 180px",
          }}
        >
          {/* img1: rows 1–2, cols 1–8 (big landscape) */}
          <div style={{ gridColumn: "1 / span 8", gridRow: "1 / span 2" }}>
            <GalleryCell src={imgImage1} alt="Fox & Hounds lounge scene" />
          </div>
          {/* img2: rows 1–2, cols 9–12 (portrait) */}
          <div style={{ gridColumn: "9 / span 4", gridRow: "1 / span 2" }}>
            <GalleryCell src={imgImage2} alt="Gallery wall with artworks" rounded />
          </div>
          {/* img3: row 3, cols 1–4 */}
          <div style={{ gridColumn: "1 / span 4", gridRow: "3" }}>
            <GalleryCell src={imgImage3} alt="Guests enjoying the lounge" />
          </div>
          {/* img4: row 3, cols 5–8 */}
          <div style={{ gridColumn: "5 / span 4", gridRow: "3" }}>
            <GalleryCell src={imgImage4} alt="Vibrant social gathering" />
          </div>
          {/* img12: row 3, cols 9–12 */}
          <div style={{ gridColumn: "9 / span 4", gridRow: "3" }}>
            <GalleryCell src={imgImage12} alt="Lounge interior detail" />
          </div>
          {/* img5: row 4, cols 1–8 (wide bar image) */}
          <div style={{ gridColumn: "1 / span 8", gridRow: "4" }}>
            <GalleryCell src={imgImage5} alt="Full bar with premium spirits" />
          </div>
          {/* img6: row 4, cols 9–12 */}
          <div style={{ gridColumn: "9 / span 4", gridRow: "4" }}>
            <GalleryCell src={imgImage6} alt="Lounge seating area" />
          </div>
          {/* img7: row 5, cols 1–5 */}
          <div style={{ gridColumn: "1 / span 5", gridRow: "5" }}>
            <GalleryCell src={imgImage7} alt="Portrait art piece" />
          </div>
          {/* img8: row 5, cols 6–12 */}
          <div style={{ gridColumn: "6 / span 7", gridRow: "5" }}>
            <GalleryCell src={imgImage8} alt="Guests relaxing at tables" />
          </div>
          {/* img10: rows 6–7, cols 1–4 */}
          <div style={{ gridColumn: "1 / span 4", gridRow: "6 / span 2" }}>
            <GalleryCell src={imgImage10} alt="Candid lounge moment" />
          </div>
          {/* img9: rows 6–7, cols 5–8 */}
          <div style={{ gridColumn: "5 / span 4", gridRow: "6 / span 2" }}>
            <GalleryCell src={imgImage9} alt="Fox & Hounds framed photo" />
          </div>
          {/* img11: rows 6–7, cols 9–12 */}
          <div style={{ gridColumn: "9 / span 4", gridRow: "6 / span 2" }}>
            <GalleryCell src={imgImage11} alt="Event gathering" />
          </div>
          {/* img13: rows 8–9, cols 1–4 */}
          <div style={{ gridColumn: "1 / span 4", gridRow: "8 / span 2" }}>
            <GalleryCell src={imgImage13} alt="Guests at the lounge" />
          </div>
          {/* img14: rows 8–9, cols 5–8 */}
          <div style={{ gridColumn: "5 / span 4", gridRow: "8 / span 2" }}>
            <GalleryCell src={imgImage14} alt="Friends enjoying the evening" />
          </div>
          {/* img15: rows 8–9, cols 9–12 */}
          <div style={{ gridColumn: "9 / span 4", gridRow: "8 / span 2" }}>
            <GalleryCell src={imgImage15} alt="Group portrait at Fox & Hounds" />
          </div>
        </div>

        {/* ── Tablet: 2-column asymmetric grid (md only) ── */}
        <div className="hidden md:grid lg:hidden gap-4" style={{ gridTemplateColumns: "3fr 2fr" }}>
          {/* Row 1: img1 (tall left) + img2 (tall right) */}
          <div className="overflow-hidden" style={{ height: "360px" }}>
            <GalleryCell src={imgImage1} alt="Fox & Hounds lounge scene" />
          </div>
          <div className="overflow-hidden rounded-lg" style={{ height: "360px" }}>
            <GalleryCell src={imgImage2} alt="Gallery wall with artworks" />
          </div>
          {/* Row 2: 3 images in a 2-col sub-grid */}
          <div
            className="col-[1/span_2] grid gap-4"
            style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
          >
            <div className="overflow-hidden" style={{ height: "240px" }}>
              <GalleryCell src={imgImage3} alt="Guests enjoying the lounge" />
            </div>
            <div className="overflow-hidden" style={{ height: "240px" }}>
              <GalleryCell src={imgImage4} alt="Vibrant social gathering" />
            </div>
            <div className="overflow-hidden" style={{ height: "240px" }}>
              <GalleryCell src={imgImage12} alt="Lounge interior detail" />
            </div>
          </div>
          {/* Row 3: img5 wide left + img6 right */}
          <div className="overflow-hidden" style={{ height: "280px" }}>
            <GalleryCell src={imgImage5} alt="Full bar with premium spirits" />
          </div>
          <div className="overflow-hidden" style={{ height: "280px" }}>
            <GalleryCell src={imgImage6} alt="Lounge seating area" />
          </div>
          {/* Row 4: img7 + img8 */}
          <div className="overflow-hidden col-[1/span_2]" style={{ gridTemplateColumns: "2fr 3fr", height: "300px", display: "grid", gap: "16px" }}>
            <div className="overflow-hidden" style={{ height: "300px" }}>
              <GalleryCell src={imgImage7} alt="Portrait art piece" />
            </div>
            <div className="overflow-hidden" style={{ height: "300px" }}>
              <GalleryCell src={imgImage8} alt="Guests relaxing at tables" />
            </div>
          </div>
          {/* Row 5: 3 equal images */}
          <div
            className="col-[1/span_2] grid gap-4"
            style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
          >
            <div className="overflow-hidden" style={{ height: "260px" }}>
              <GalleryCell src={imgImage10} alt="Candid lounge moment" />
            </div>
            <div className="overflow-hidden" style={{ height: "260px" }}>
              <GalleryCell src={imgImage9} alt="Fox & Hounds framed photo" />
            </div>
            <div className="overflow-hidden" style={{ height: "260px" }}>
              <GalleryCell src={imgImage11} alt="Event gathering" />
            </div>
          </div>
          {/* Row 6: 3 equal images */}
          <div
            className="col-[1/span_2] grid gap-4"
            style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
          >
            <div className="overflow-hidden" style={{ height: "240px" }}>
              <GalleryCell src={imgImage13} alt="Guests at the lounge" />
            </div>
            <div className="overflow-hidden" style={{ height: "240px" }}>
              <GalleryCell src={imgImage14} alt="Friends enjoying the evening" />
            </div>
            <div className="overflow-hidden" style={{ height: "240px" }}>
              <GalleryCell src={imgImage15} alt="Group portrait at Fox & Hounds" />
            </div>
          </div>
        </div>

        {/* ── Mobile: 1-column + 2-column alternating (below md) ── */}
        <div className="flex flex-col gap-3 md:hidden">
          {/* Hero pair */}
          <div className="grid grid-cols-5 gap-3" style={{ height: "240px" }}>
            <div className="col-[1/span_3] overflow-hidden">
              <GalleryCell src={imgImage1} alt="Fox & Hounds lounge scene" />
            </div>
            <div className="col-[4/span_2] overflow-hidden rounded-lg">
              <GalleryCell src={imgImage2} alt="Gallery wall with artworks" />
            </div>
          </div>
          {/* Triple row */}
          <div className="grid grid-cols-3 gap-3" style={{ height: "160px" }}>
            <div className="overflow-hidden"><GalleryCell src={imgImage3} alt="Guests enjoying the lounge" /></div>
            <div className="overflow-hidden"><GalleryCell src={imgImage4} alt="Vibrant social gathering" /></div>
            <div className="overflow-hidden"><GalleryCell src={imgImage12} alt="Lounge interior detail" /></div>
          </div>
          {/* Wide + narrow */}
          <div className="grid grid-cols-5 gap-3" style={{ height: "200px" }}>
            <div className="col-[1/span_3] overflow-hidden">
              <GalleryCell src={imgImage5} alt="Full bar with premium spirits" />
            </div>
            <div className="col-[4/span_2] overflow-hidden">
              <GalleryCell src={imgImage6} alt="Lounge seating area" />
            </div>
          </div>
          {/* Split row */}
          <div className="grid grid-cols-5 gap-3" style={{ height: "200px" }}>
            <div className="col-[1/span_2] overflow-hidden">
              <GalleryCell src={imgImage7} alt="Portrait art piece" />
            </div>
            <div className="col-[3/span_3] overflow-hidden">
              <GalleryCell src={imgImage8} alt="Guests relaxing at tables" />
            </div>
          </div>
          {/* Triple equal */}
          <div className="grid grid-cols-3 gap-3" style={{ height: "160px" }}>
            <div className="overflow-hidden"><GalleryCell src={imgImage10} alt="Candid lounge moment" /></div>
            <div className="overflow-hidden"><GalleryCell src={imgImage9} alt="Fox & Hounds framed photo" /></div>
            <div className="overflow-hidden"><GalleryCell src={imgImage11} alt="Event gathering" /></div>
          </div>
          {/* Triple equal */}
          <div className="grid grid-cols-3 gap-3" style={{ height: "160px" }}>
            <div className="overflow-hidden"><GalleryCell src={imgImage13} alt="Guests at the lounge" /></div>
            <div className="overflow-hidden"><GalleryCell src={imgImage14} alt="Friends enjoying the evening" /></div>
            <div className="overflow-hidden"><GalleryCell src={imgImage15} alt="Group portrait at Fox & Hounds" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Featured Collections Editorial ───────────────────────────────────────

function FeaturedCollections() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">

          {/* ── Left: main image ── */}
          <FadeIn direction="left" className="flex-1 min-w-0 w-full">
            <div className="overflow-hidden rounded-lg w-full" style={{ height: "clamp(300px, 50vw, 580px)" }}>
              <img
                src={imgFeatured}
                alt="Colourful abstract artwork at Fox & Hounds"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* ── Right: editorial text ── */}
          <FadeIn direction="right" className="flex flex-col gap-6 flex-1 min-w-0 text-left">
            <span
              className="text-[#0282bf] uppercase tracking-[2.4px]"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: "12px" }}
            >
              Artisanal Details
            </span>

            <h2
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 600,
                fontSize: "clamp(26px, 3vw, 36px)",
                lineHeight: "40px",
              }}
            >
              <span className="block text-[#303330]">Every Corner Tells a Story of</span>
              <span className="block text-[#0282bf]">Elegance</span>
            </h2>

            <div
              className="text-[#4d4d4d] max-w-[512px]"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: 1.6 }}
            >
              <p className="mb-4">
                From the hand-carved mahogany panels in our lounge to the thread count of our Egyptian linens, Fox
                &amp; Hounds Lagos is a testament to the beauty of detail.
              </p>
              <p>
                Our gallery captures the ephemeral moments of peace and the vibrant energy of our social spaces.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function GalleryPage() {
  return (
    <>
      <GalleryHeader />
      <BentoGrid />
      <FeaturedCollections />
      <TestimonialsSection />
    </>
  );
}
