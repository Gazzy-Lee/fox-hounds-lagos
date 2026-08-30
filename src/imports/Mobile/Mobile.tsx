import svgPaths from "./svg-g30yvrlqhn";
import imgHotelExterior from "./5f8222e217005b02d4bb2124c3faf01ca09208c1.png";
import imgImage from "./c84d3d9a9da6b9e8693da5f9c5eb49c3ee21ed48.png";
import imgImage1 from "./301910aa321b577ce2063e4ecc08fe4b18b1120a.png";
import imgImage2 from "./42a59d8b298d68be3153a6009c28053c1c05a8e7.png";
import imgImage3 from "./f6bf48294cea7ca3d153fc756e5d024582378e0d.png";
import imgImage4 from "./08491c4347cb508d257b18af2e164d413189df04.png";
import imgImage5 from "./fff047f7930e9395269bc3b52aff346ddd19baf0.png";
import imgImage4X2 from "./65fab89ef39e30fdd07c75ed543a2525d0390284.png";

function HotelExterior() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Hotel Exterior">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="hero background image" className="absolute h-full left-[-19.58%] max-w-none top-0 w-[341.83%]" src={imgHotelExterior} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.35)] inset-0" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Container">
      <HotelExterior />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-center text-white w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-none">{`FOX & HOUNDS LAGOS`}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#ebf8ff] text-[12px] text-center tracking-[2px] uppercase w-full">
        <p className="leading-[15px]">No 9, Lapai Close, Thomas Estate, AjaH, Lagos State, Nigeria</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f4f5f5] text-[16px] text-center w-full">
        <p className="leading-[1.5]">Experience the pinnacle of Lagosian hospitality. An intimate boutique retreat where heritage architecture meets contemporary luxury.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[0.5px] relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">Book your stay</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[8.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.74996 8.74996">
        <g id="Container">
          <path d={svgPaths.p398000} fill="var(--fill-0, #FFF8F1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[0.5px] relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">Explore suites</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-center flex flex-wrap gap-[12px_24px] items-center justify-center pt-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="backdrop-blur-[6px] bg-[#0282bf] content-stretch flex gap-[12px] items-center justify-center px-[40px] py-[16px] relative rounded-[4px] shrink-0 w-[200px]" data-name="Primary Button">
        <Container5 />
        <Container6 />
      </div>
      <div className="backdrop-blur-[2px] content-stretch flex flex-col items-center justify-center px-[41px] py-[17px] relative rounded-[4px] shrink-0 w-[200px]" data-name="Ghost Button">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
        <Container7 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center justify-center min-w-px relative" data-name="Container">
      <Heading />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function HeroSection() {
  return (
    <section aria-label="Hero" className="h-[627px] relative shrink-0 w-full" data-name="Hero Section">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pt-[60px] px-[20px] relative size-full">
          <Container />
          <Container1 />
        </div>
      </div>
    </section>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-[110px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">The Essentials</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131313] text-[0px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="text-[32px]">
          <span className="leading-[1.2]">{`Curated `}</span>
          <span className="leading-[1.2] text-[#0282bf]">Spaces</span>
          <span className="leading-[1.2]">{` for the Discerning `}</span>
          <span className="leading-[1.2] text-[#0282bf]">Guest</span>
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Heading1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">{`Each corner of Fox & Hounds is meticulously designed to provide an atmosphere of quiet luxury and vibrant social engagement.`}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[1120px] min-w-[335px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container11 />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[426.67px] relative shrink-0 w-full" data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="image of outdoor lounge area" className="absolute max-w-none object-cover size-full" src={imgImage} />
        <div className="absolute bg-gradient-to-b from-[60.898%] from-[rgba(0,0,0,0)] inset-0 to-[70%] to-[rgba(0,0,0,0.6)]" />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#67cefe] text-[20px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[36px]">Lounge</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ccc] text-[14px] w-full">
        <p className="leading-[20px] mb-0">The pulse of Ajah nights. Premium spirits,</p>
        <p className="leading-[20px]">curated playlists and elite company</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[8.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.74996 8.74996">
        <g id="Container">
          <path d={svgPaths.p398000} fill="var(--fill-0, #8CDAFE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center pt-[12px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8cdafe] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Explore lounge</p>
      </div>
      <Container14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[8px] items-start left-0 p-[20px] right-[-0.34px]" data-name="Container">
      <Heading2 />
      <Container13 />
      <Link />
    </div>
  );
}

function Lounge() {
  return (
    <div className="bg-[#201f1f] content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Lounge">
      <Image />
      <Container12 />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[426.66px] relative shrink-0 w-full" data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="image of dish on table" className="absolute h-full left-[-12.5%] max-w-none top-0 w-[125%]" src={imgImage1} />
        </div>
        <div className="absolute bg-gradient-to-b from-[45%] from-[rgba(0,0,0,0)] inset-0 to-[70%] to-[rgba(0,0,0,0.6)]" />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#67cefe] text-[20px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[36px]">Restaurant</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ccc] text-[14px] w-full">
        <p className="leading-[20px] mb-0">A culinary journey blending local Nigerian</p>
        <p className="leading-[20px]">flavors with international techniques</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 size-[8.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.74996 8.74996">
        <g id="Container">
          <path d={svgPaths.p398000} fill="var(--fill-0, #8CDAFE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[12px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#8cdafe] text-[12px] tracking-[1.2px] uppercase w-[104.05px]">
        <p className="leading-[16px]">Explore Menu</p>
      </div>
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[8px] items-start left-0 p-[20px] right-[-0.33px]" data-name="Container">
      <Heading3 />
      <Container16 />
      <Link1 />
    </div>
  );
}

function Restaurant() {
  return (
    <div className="bg-[#201f1f] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Restaurant">
      <Image1 />
      <Container15 />
    </div>
  );
}

function RestaurantMargin() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Restaurant:margin">
      <Restaurant />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[426.66px] relative shrink-0 w-full" data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="image of room interior" className="absolute max-w-none object-cover size-full" src={imgImage2} />
        <div className="absolute bg-gradient-to-b from-[40%] from-[rgba(0,0,0,0)] inset-0 to-[70%] to-[rgba(0,0,0,0.6)]" />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#67cefe] text-[20px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[36px]">{`Lodging & Short-lets`}</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ccc] text-[14px] w-full">
        <p className="leading-[20px] mb-0">Bespoke suites featuring king-sized</p>
        <p className="leading-[20px]">comfort and artisanal African decor</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[8.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.74996 8.74996">
        <g id="Container">
          <path d={svgPaths.p398000} fill="var(--fill-0, #8CDAFE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[12px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#8cdafe] text-[12px] tracking-[1.2px] uppercase w-[86.03px]">
        <p className="leading-[16px]">View Rooms</p>
      </div>
      <Container20 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[8px] items-start left-0 p-[20px] right-[-0.33px]" data-name="Container">
      <Heading4 />
      <Container19 />
      <Link2 />
    </div>
  );
}

function Rooms() {
  return (
    <div className="bg-[#201f1f] content-stretch flex flex-col items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Rooms">
      <Image2 />
      <Container18 />
    </div>
  );
}

function BentoInspiredPillarGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[1120px] relative shrink-0 w-full" data-name="Bento-inspired Pillar Grid">
      <Lounge />
      <RestaurantMargin />
      <Rooms />
    </div>
  );
}

function SectionTheTriplePillarsAsymmetricLayout() {
  return (
    <section aria-label="The essentials" className="bg-white relative shrink-0 w-full" data-name="Section - The Triple Pillars (Asymmetric Layout)">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[20px] py-[60px] relative size-full">
        <Container8 />
        <BentoInspiredPillarGrid />
      </div>
    </section>
  );
}

function Image3() {
  return (
    <div className="h-[350px] relative rounded-[12px] shrink-0 w-full" data-name="image">
      <img alt="Waiter holding wine in tray to serve" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage3} />
    </div>
  );
}

function FeatureOverlapPattern() {
  return (
    <div className="bg-[#201f1f] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Feature Overlap Pattern">
      <Image3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <FeatureOverlapPattern />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[12px] tracking-[2.4px] uppercase w-full">
        <p className="leading-[16px]">about us</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[0px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="font-['Noto_Serif:SemiBold',sans-serif] font-semibold leading-[1.4] mb-0 text-[#131313] text-[28px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Hospitality and
        </p>
        <p className="text-[28px]">
          <span className="font-['Noto_Serif:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#0282bf]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Comfort
          </span>
          <span className="leading-[1.4]">{` `}</span>
          <span className="font-['Noto_Serif:SemiBold',sans-serif] font-semibold leading-[1.4] text-[#131313]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Defined
          </span>
        </p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[24px] items-start leading-[0] pt-[16px] relative shrink-0 text-[#4d4d4d] text-[16px] w-full" data-name="Container">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.6]">{`At Fox & Hounds Lagos, we create a refined hospitality experience where comfort, style and connection come together. As a boutique destination for relaxation, dining and social leisure, we offer thoughtfully designed spaces. These are for guests to unwind, enjoy great food and connect, whether for business or pleasure.`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.6]">{`With over 25 years of experience in hospitality & hotel management, originating from Los Angeles, we bring international standards of service into a uniquely African context. This blend allows us to deliver a world-class experience tailored to the lifestyle & expectations of Lagos and its global community.`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.6]">{`Located in the heart of Ajah, Fox & Hounds Lagos represents a new era of boutique hospitality. One defined not by excess, but by intention. We believe true luxury lies in the warmth of our welcome and the precision of every detail.`}</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal h-[36px] justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[30px] w-[58.95px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[36px]">24/7</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#788087] text-[12px] tracking-[1.2px] uppercase w-[118.14px]">
        <p className="leading-[16px]">Elite Concierge</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-[118.14px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[30px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[36px]">25+</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#788087] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">years of experience</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-[149px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[32px] items-center pt-[32px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <div className="bg-[#484d51] h-[48px] shrink-0 w-px" data-name="Vertical Divider" />
      <Container30 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Heading5 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function SectionAboutUsHospitalityComfort() {
  return (
    <section aria-label="About us" className="bg-[#f6f6f3] relative shrink-0 w-full" data-name="Section - About Us: Hospitality & Comfort">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[60px] relative size-full">
          <Container21 />
        </div>
      </div>
    </section>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[12px] tracking-[2.4px] uppercase w-full">
        <p className="leading-[16px]">Why choose us</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131313] text-[44px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p>
          <span className="leading-[1.2]">{`We are `}</span>
          <span className="leading-[1.2] text-[#0282bf]">excellence</span>
        </p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#303330] text-[18px] w-full">
        <p className="leading-[28px]">{`Refined Comfort & Boutique Experience`}</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">Enjoy a carefully curated environment designed for relaxation, where every detail, from our rooms to our lounge, is tailored to your comfort and peace of mind.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Container">
      <Heading7 />
      <Container39 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[0_3.05%_4.45%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.2691 22.9325">
            <path d={svgPaths.p1318df98} fill="var(--fill-0, #0282BF)" id="Icon" />
          </svg>
        </div>
      </div>
      <Container38 />
    </div>
  );
}

function ProiconsFood() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="proicons:food">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="proicons:food">
          <path d={svgPaths.p1e3efd00} id="Vector" stroke="var(--stroke-0, #0282BF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#303330] text-[18px] w-[183.52px]">
        <p className="leading-[28px]">Dining That Delivers</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">From local favourites to satisfying continental dishes, our restaurant offers a well-rounded dining experience perfect for both casual meals and special moments.</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Container">
      <Heading8 />
      <Container42 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <ProiconsFood />
      <Container41 />
    </div>
  );
}

function BoxiconsOutdoorDining() {
  return (
    <div className="h-[24px] relative shrink-0 w-[25px]" data-name="boxicons:outdoor-dining">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 24">
        <g id="boxicons:outdoor-dining">
          <path d={svgPaths.pebffa00} fill="var(--fill-0, #0282BF)" id="Vector" />
          <path d={svgPaths.pce24900} fill="var(--fill-0, #0282BF)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#303330] text-[18px] w-full">
        <p className="leading-[28px]">{`A Space to Unwind & Connect`}</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">{`Whether you're meeting friends, hosting informal business conversations, or watchng live matches, our lounge provides the perfect setting to relax and socialize.`}</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Container">
      <Heading9 />
      <Container45 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <BoxiconsOutdoorDining />
      <Container44 />
    </div>
  );
}

function StreamlineFlexGiveStar() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="streamline-flex:give-star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g clipPath="url(#clip0_2_2193)" id="streamline-flex:give-star">
          <path d={svgPaths.p267ca180} id="Vector" stroke="var(--stroke-0, #0282BF)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_2_2193">
            <rect fill="white" height="26" width="26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#303330] text-[18px] w-full">
        <p className="leading-[28px]">Trusted by Lagos’s Notable Crowd</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">{`A preferred destination for professionals, creatives and influencers, Fox & Hounds Lagos combines quality service with an atmosphere people love to return to.`}</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Container">
      <Heading10 />
      <Container48 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <StreamlineFlexGiveStar />
      <Container47 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container40 />
      <Container43 />
      <Container46 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Heading6 />
      <Container36 />
    </div>
  );
}

function Image4() {
  return (
    <div className="aspect-square relative rounded-[12px] shrink-0 w-full" data-name="image">
      <img alt="Guests gathered in an outdoor ounge" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage4} />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[73.356px] left-[-16px] top-[-16px] w-[78.36px]" data-name="Container">
      <div className="absolute inset-[0_-25.06%_-54.04%_-25.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118 113">
          <g id="Container">
            <rect fill="var(--fill-0, #0282BF)" height="73.3555" rx="12" width="78.3603" x="20" />
            <g filter="url(#filter0_dd_2_2182)" id="Overlay+Shadow">
              <rect fill="var(--fill-0, white)" fillOpacity="0.01" height="73" rx="12" shapeRendering="crispEdges" width="78" x="20" />
            </g>
            <path d={svgPaths.p2dd77680} fill="var(--fill-0, white)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="113" id="filter0_dd_2_2182" width="118" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="6" result="effect1_dropShadow_2_2182" />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_2182" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="5" result="effect2_dropShadow_2_2182" />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="12.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_2_2182" mode="normal" result="effect2_dropShadow_2_2182" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_2_2182" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Image4 />
      <Container50 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container49 />
    </div>
  );
}

function SectionServiceAtmosphere() {
  return (
    <section aria-label="Why choose us" className="bg-white relative shrink-0 w-full" data-name="Section - Service & Atmosphere">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[60px] relative size-full">
          <Container33 />
        </div>
      </div>
    </section>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[20px] tracking-[2.4px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">testimonials</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[24px] relative shrink-0 w-[34px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 24">
        <g id="Container">
          <path d={svgPaths.p3df59e80} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"From the moment I walked in, I felt an overwhelming sense of peace. The staff was incredibly welcoming and the ambiance was just perfect. I left feeling completely rejuvenated!"`}</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">
          Collins Enebeni
          <br aria-hidden="true" />
          {`(Don Jazzy's Dad)`}
        </p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[300px]" data-name="Container">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[24px] relative shrink-0 w-[34px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 24">
        <g id="Container">
          <path d={svgPaths.p3df59e80} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"I had the best time of my life here! The attention to detail and the calming atmosphere made it an unforgettable experience. That is why I keep coming back."`}</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase w-full whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">{`Ayo Adedoyin `}</p>
        <p className="leading-[20px]">(Gubernatorial Aspirant Kwara State)</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[186px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[300px]" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[24px] relative shrink-0 w-[34px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 24">
        <g id="Container">
          <path d={svgPaths.p3df59e80} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"Everything about this place screams luxury and relaxation. From the the cozy lounge area to the airy relaxation spots, it was exactly what I needed to unwind and relax after every of my busy activities."`}</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`George Okon- MD `}</p>
        <p className="leading-[20px] whitespace-pre">(Dlightsom Pharmacy Chairman)</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[208px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[300px]" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[24px] relative shrink-0 w-[34px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 24">
        <g id="Container">
          <path d={svgPaths.p3df59e80} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"I booked a weekend getaway here, and it was magical. The food was delicious, the rooms were spotless, and the environment was simply breathtaking."`}</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`Engr. Olanrewaju Adeyelore `}</p>
        <p className="leading-[20px] whitespace-pre">(Recognized Engineer)</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[186px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[300px]" data-name="Container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[24px] relative shrink-0 w-[34px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 24">
        <g id="Container">
          <path d={svgPaths.p3df59e80} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"If you're looking for a place to escape and recharge, this is it. The combination of nature, tranquility, and top-notch service is unmatched."`}</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`Past and Present `}</p>
        <p className="leading-[20px] whitespace-pre">(Chairmen of Thomas Estate)</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[186px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[300px]" data-name="Container">
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[24px] relative shrink-0 w-[34px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 24">
        <g id="Container">
          <path d={svgPaths.p3df59e80} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"Exceptional service! The team went above and beyond to make sure I was comfortable and satisfied. This place truly sets the standard for hospitality."`}</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">DR CHRIS ONUOHA</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[166px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[300px]" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex gap-[60px] items-start left-[8px] top-0" data-name="container">
      <Container53 />
      <Container57 />
      <Container61 />
      <Container65 />
      <Container69 />
      <Container73 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="h-[269px] relative shrink-0 w-full" data-name="testimonials">
      <Container52 />
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 size-[8.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.74996 8.74996">
        <g id="Container">
          <path d={svgPaths.p320d2dc0} fill="var(--fill-0, #FFF8F1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(99,114,122,0.3)] content-stretch flex items-center justify-center p-[12px] relative rounded-[4px] shrink-0" data-name="Primary Button">
      <Container77 />
    </div>
  );
}

function No() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(2,130,191,0.1)] content-stretch flex items-center justify-center px-[17px] py-[11px] relative rounded-[4px] shrink-0" data-name="no 1">
      <div aria-hidden="true" className="absolute border border-[rgba(2,130,191,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[14px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function No1() {
  return (
    <div className="backdrop-blur-[6px] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[4px] shrink-0" data-name="no 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function No2() {
  return (
    <div className="backdrop-blur-[6px] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[4px] shrink-0" data-name="no 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">3</p>
      </div>
    </div>
  );
}

function Numbers() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="numbers">
      <No />
      <No1 />
      <No2 />
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 size-[8.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.74996 8.74996">
        <g id="Container">
          <path d={svgPaths.p398000} fill="var(--fill-0, #FFF8F1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryButton1() {
  return (
    <button className="backdrop-blur-[6px] bg-[#0282bf] content-stretch cursor-pointer flex items-center justify-center p-[12px] relative rounded-[4px] shrink-0" data-name="Primary Button">
      <Container78 />
    </button>
  );
}

function PageControl() {
  return (
    <div className="relative shrink-0 w-full" data-name="Page control">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[40px] items-center p-[12px] relative size-full">
          <PrimaryButton />
          <Numbers />
          <PrimaryButton1 />
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center leading-[0] relative shrink-0 text-center w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] text-white w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">We look forward to seeing you</p>
      </div>
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center relative shrink-0 text-[#ebf8ff] text-[12px] tracking-[2px] uppercase w-full">
        <p className="leading-[15px]">No 9, Lapai Close, Thomas Estate, Ajah, Lagos State, Nigeria</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[0.5px] relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">Contact us</p>
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[0.5px] relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">Get directions</p>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-center flex flex-wrap gap-[12px_24px] items-center justify-center pt-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="backdrop-blur-[6px] bg-[#0282bf] content-stretch flex gap-[12px] items-center justify-center px-[40px] py-[16px] relative rounded-[4px] shrink-0 w-[200px]" data-name="Primary Button">
        <Container81 />
      </div>
      <div className="backdrop-blur-[2px] content-stretch flex flex-col items-center justify-center px-[41px] py-[17px] relative rounded-[4px] shrink-0 w-[200px]" data-name="Ghost Button">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
        <Container82 />
      </div>
    </div>
  );
}

function Image5() {
  return (
    <section className="flex-[1_0_0] h-[450px] min-w-px relative" data-name="image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage5} />
        <div className="absolute bg-[rgba(0,0,0,0.7)] inset-0" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[20px] py-[60px] relative size-full">
          <Container79 />
          <Container80 />
        </div>
      </div>
    </section>
  );
}

function SectionCallToAction() {
  return (
    <section aria-label="Call to action" className="content-stretch flex h-[450px] items-center justify-center py-[100px] relative shrink-0 w-full" data-name="Section - Call to action">
      <Image5 />
    </section>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Main">
      <HeroSection />
      <SectionTheTriplePillarsAsymmetricLayout />
      <SectionAboutUsHospitalityComfort />
      <SectionServiceAtmosphere />
      <section aria-label="Testimonials" className="bg-[#f6f6f3] h-[550px] relative shrink-0 w-full" data-name="Section - Testimonials: Phone">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[32px] items-center px-[20px] py-[100px] relative size-full">
            <Container51 />
            <Testimonials />
            <PageControl />
          </div>
        </div>
      </section>
      <SectionCallToAction />
    </div>
  );
}

function Container83() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[60px] relative shrink-0 w-[136px]" data-name="Image@4x 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Fastline logo" className="absolute h-[115.79%] left-[-3.56%] max-w-none top-[-11.4%] w-[110.99%]" src={imgImage4X2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="relative shrink-0 w-[335px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[16px_24px] items-start justify-center relative size-full">
        <div className="content-stretch flex flex-col h-[16px] items-start justify-center opacity-80 px-[2px] relative shrink-0" data-name="Link">
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Rooms</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[16px] items-start justify-center opacity-80 px-[2px] relative shrink-0" data-name="Link">
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Restaurant</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[16px] items-start justify-center opacity-80 px-[2px] relative shrink-0" data-name="Link">
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Lounge</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[16px] items-start justify-center opacity-80 px-[2px] relative shrink-0" data-name="Link">
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Contact</p>
          </div>
        </div>
        <a className="content-stretch cursor-pointer flex flex-col h-[16px] items-start justify-center opacity-80 px-[2px] relative shrink-0" href="https://www.instagram.com/foxandhoundslagos/" target="_blank" data-name="Link">
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[12px] text-left tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Instagram</p>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex flex-col h-[16px] items-start justify-center opacity-80 px-[2px] relative shrink-0" href="https://www.youtube.com/watch?v=oHbsRI-XUN8" target="_blank" data-name="Link">
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#333] text-[12px] text-left tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Youtube</p>
          </div>
        </a>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#737373] text-[12px] text-center tracking-[1.2px] uppercase w-full whitespace-pre-wrap">
          <p className="leading-[16px] mb-0">{`© 2026 Fox & Hounds Lagos `}</p>
          <p className="leading-[16px]">No9, Lapai Close, Thomas Estate, Ajah, Lagos</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ccc] border-solid border-t inset-0 pointer-events-none" />
      <Container85 />
    </div>
  );
}

function Margin() {
  return (
    <div className="max-w-[672px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center max-w-[inherit] pt-[16px] relative size-full">
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[38px] relative shrink-0 w-[86px]" data-name="logo">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[50px] left-[calc(50%-0.5px)] top-1/2 w-[113px]" data-name="Image@4x 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Fastline logo" className="absolute h-[115.79%] left-[-3.56%] max-w-none top-[-11.4%] w-[110.99%]" src={imgImage4X2} />
        </div>
      </div>
    </div>
  );
}

function MenuButton1() {
  return (
    <div className="absolute inset-[26.56%_18.75%]" data-name="Menu button">
      <div className="-translate-x-1/2 absolute bg-black h-[2px] left-1/2 rounded-[2px] top-[-0.5px] w-[20px]" />
      <div className="-translate-x-1/2 absolute bg-black h-[2px] left-1/2 rounded-[2px] top-[5.5px] w-[20px]" />
      <div className="-translate-x-1/2 absolute bg-black h-[2px] left-1/2 rounded-[2px] top-[11.5px] w-[20px]" />
    </div>
  );
}

function MenuButton() {
  return (
    <button aria-label="menu" className="block cursor-pointer overflow-clip relative shrink-0 size-[32px]" data-name="menu button">
      <MenuButton1 />
    </button>
  );
}

function Container86() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] pl-[20px] pr-[28px] py-[10px] relative size-full">
          <Logo />
          <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0" data-name="Menu">
            <MenuButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Mobile">
      <Main />
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-center px-[20px] py-[40px] relative shrink-0 w-[375px]" data-name="Footer">
        <Container83 />
        <Container84 />
        <Margin />
      </div>
      <div className="absolute h-[6518.990234375px] inset-0 pointer-events-none">
        <nav className="backdrop-blur-[6px] bg-white content-stretch flex flex-col items-start pointer-events-auto sticky top-0" data-name="TopNavBar">
          <Container86 />
        </nav>
      </div>
    </div>
  );
}