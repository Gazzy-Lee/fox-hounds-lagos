import { Link } from "react-router";
import imgLounge from "figma:asset/lounge-card.png";
import imgRestaurant from "figma:asset/restaurant-interior.png";
import imgRooms from "../../imports/essentials-rooms-card.png";
import { FadeIn } from "./animations/FadeIn";

const ArrowRightIcon = ({ color = "#8CDAFE" }: { color?: string }) => (
  <svg width="9" height="9" viewBox="0 0 8.74996 8.74996" fill="none" className="shrink-0">
    <path
      d="M7.07404 4.81247H0V3.93749H7.07404L3.75128 0.614729L4.37498 0L8.74996 4.37498L4.37498 8.74996L3.75128 8.13523L7.07404 4.81247V4.81247"
      fill={color}
    />
  </svg>
);

interface CardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkTo: string;
  gradientStart?: string;
}

function PillarCard({ image, imageAlt, title, description, linkText, linkTo, gradientStart = "60%" }: CardProps) {
  return (
    <Link to={linkTo} className="bg-[#201f1f] rounded-[8px] overflow-hidden relative w-full h-[300px] sm:h-[360px] lg:h-[427px] block">
      {/* Image */}
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover max-w-none"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0) ${gradientStart}, rgba(0,0,0,0.6) 70%)`,
        }}
      />

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col gap-2">
        <h3
          className="text-[#67cefe] text-2xl"
          style={{ fontFamily: "'Noto Serif', serif", fontWeight: 700, lineHeight: "36px" }}
        >
          {title}
        </h3>
        <p
          className="text-[#ccc] text-sm"
          style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, lineHeight: "20px" }}
        >
          {description}
        </p>
        <div className="flex items-center gap-2 pt-3 cursor-pointer group">
          <span
            className="text-[#8cdafe] text-xs tracking-[1.2px] uppercase group-hover:text-white transition-colors"
            style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}
          >
            {linkText}
          </span>
          <ArrowRightIcon />
        </div>
      </div>
    </Link>
  );
}

export function EssentialsSection() {
  return (
    <section className="bg-white w-full" aria-label="The essentials">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px] flex flex-col gap-16 md:gap-20 lg:gap-24">
        {/* Header Row */}
        <FadeIn direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            {/* Left: label + heading */}
            <div className="flex flex-col gap-4">
              <span
                className="text-[#0282bf] text-xs tracking-[1.2px] uppercase"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}
              >
                The Essentials
              </span>
              <h2
                className="text-[#131313]"
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 600,
                  fontSize: "clamp(30px, 4vw, 44px)",
                  lineHeight: 1.2,
                }}
              >
                Curated{" "}
                <span className="text-[#0282bf]">Spaces</span>
                {" "}for
                <br />
                the Discerning{" "}
                <span className="text-[#0282bf]">Guest</span>
              </h2>
            </div>

            {/* Right: description */}
            <p
              className="text-[#4d4d4d] text-base max-w-[400px]"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 400, lineHeight: 1.6 }}
            >
              Each corner of Fox &amp; Hounds is meticulously designed to provide
              an atmosphere of quiet luxury and vibrant social engagement.
            </p>
          </div>
        </FadeIn>

        {/* Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Lounge */}
          <FadeIn direction="up" delay={0.1} className="w-full lg:flex-1">
            <PillarCard
              image={imgLounge}
              imageAlt="Outdoor lounge area"
              title="Lounge"
              description="The pulse of Ajah nights. Premium spirits, curated playlists and elite company"
              linkText="Explore lounge"
              linkTo="/lounge"
              gradientStart="60%"
            />
          </FadeIn>

          {/* Restaurant - offset down on desktop */}
          <FadeIn direction="up" delay={0.2} className="w-full lg:flex-1 lg:pt-12">
            <PillarCard
              image={imgRestaurant}
              imageAlt="Dish on table at restaurant"
              title="Restaurant"
              description="A culinary journey blending local Nigerian flavors with international techniques"
              linkText="Explore Menu"
              linkTo="/restaurant"
              gradientStart="45%"
            />
          </FadeIn>

          {/* Rooms */}
          <FadeIn direction="up" delay={0.3} className="w-full lg:flex-1">
            <PillarCard
              image={imgRooms}
              imageAlt="Room interior"
              title="Lodging &amp; Short-lets"
              description="Bespoke suites featuring king-sized comfort and artisanal African decor"
              linkText="View Rooms"
              linkTo="/rooms"
              gradientStart="40%"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}