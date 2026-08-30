import svgPaths from "./svg-0mzyam879z";
import imgImage from "./7d45aabfa29b94d33a62b38f8774b236a2bd3c01.png";
import imgImage1 from "./bea7621d5ae1cb779918b858a44f4122b4ebcf94.png";
import imgImage2 from "./7ecc181666aed4b4c4f884fe3b78f1082ca1189a.png";
import imgImage3 from "./5874cb5d35dd59749baf27dcc23c843f5d9d6098.png";
import imgImage4 from "./f22c63a99271b721aead0e7b85faba6f7b2f038d.png";
import imgImage5 from "./d3eb5566a7df1d1e2bf016fd434ea8694ceac99c.png";
import imgImage6 from "./fff047f7930e9395269bc3b52aff346ddd19baf0.png";
import imgImage4X2 from "./65fab89ef39e30fdd07c75ed543a2525d0390284.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[12px] tracking-[3.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">{`Fox & Hounds Culinary`}</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Noto_Serif:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131313] text-[60px] w-[395.81px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2] mb-0">A</p>
        <p className="leading-[1.2] mb-0 text-[#0282bf]">Culinary</p>
        <p className="leading-[1.2]">Journey</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[1.6] mb-0">{`Experience a masterful fusion where Lagos's vibrant coastal heritage meets refined international flavours. `}</p>
        <p className="leading-[1.6] mb-0">​</p>
        <p className="leading-[1.6]">Every dish tells a story of local soil and global soul.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[0.5px] relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">Reserve table</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[0.5px] relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[14px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">View menu</p>
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
          <path d={svgPaths.p398000} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="backdrop-blur-[6px] bg-[#0282bf] content-stretch flex gap-[12px] items-center justify-center px-[40px] py-[16px] relative rounded-[4px] shrink-0 w-[200px]" data-name="Primary Button">
        <Container4 />
      </div>
      <a className="backdrop-blur-[6px] bg-[rgba(2,130,191,0.15)] content-stretch cursor-pointer flex gap-[12px] items-center justify-center px-[40px] py-[16px] relative rounded-[4px] shrink-0 w-[200px]" href="https://foxandhoundsmenu.framer.website" target="_blank" data-name="Accent Button">
        <Container5 />
        <Container6 />
      </a>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Heading />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Image() {
  return (
    <div className="flex-[1_0_0] min-h-px opacity-90 relative w-full" data-name="image">
      <img alt="image of dish on table" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="absolute bg-[#f4f4f0] content-stretch flex flex-col inset-[0_0.33px_0_0] items-start justify-center overflow-clip rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Background+Shadow">
      <Image />
    </div>
  );
}

function OverlappingElementForAsymmetry() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-[-40px] content-stretch flex flex-col gap-[16.5px] items-start left-[calc(50%-137px)] p-[33px] rounded-[4px] w-[348px]" data-name="Overlapping element for asymmetry">
      <div aria-hidden="true" className="absolute border border-[rgba(176,179,174,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="absolute inset-[0_0_0.25px_0]" data-name="Overlapping element for asymmetry:shadow">
        <div className="absolute inset-[-16.26%_-14.37%_-48.78%_-14.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 253.75">
            <g filter="url(#filter0_d_12_3302)" id="Overlapping element for asymmetry:shadow">
              <path d="M50 25H398V178.75H50V25Z" fill="var(--fill-0, white)" fillOpacity="0.01" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="253.75" id="filter0_d_12_3302" width="448" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="25" />
                <feGaussianBlur stdDeviation="25" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_12_3302" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_12_3302" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Noto_Serif:Display_ExtraBold',sans-serif] font-extrabold justify-center leading-[0] min-w-full relative shrink-0 text-[#303330] text-[18px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[29.25px] mb-0">{`"The finest expression of`}</p>
        <p className="leading-[29.25px]">{`Nigerian ingredients I've ever experienced."`}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[522px] min-h-[500px] relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow />
      <OverlappingElementForAsymmetry />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Hero Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-start pb-[80px] pt-[100px] px-[60px] relative size-full">
          <Container />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[628px] min-w-[325px] relative rounded-[8px] shrink-0 w-[325px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="image container">
      <Image1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#303330] text-[36px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[48px] mb-0">Local Soul,</p>
        <p>
          <span className="leading-[48px] text-[#0282bf]">Global</span>
          <span className="leading-[48px]">{` Spirit`}</span>
        </p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">Item 7’ is ‘always’ a key highlight of any event in Nigeria, as guests look forward to great food. At Fox and Hounds Lagos, we provide international-standard catering by skilled chefs experienced in both local and continental dishes. This makes the event planning process seamless and stress-free.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">{`Our services include well-trained & professionally dressed waiting staffs who ensure a smooth organized service.`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">We also provide catering services for events all over Lagos.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[520px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Display_Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[30px] w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[36px]">30+</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-start relative size-full">
        <Container15 />
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a6066] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">Curated Wines</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Display_Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[30px] w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[36px]">0KM</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.5px] items-start relative size-full">
        <Container17 />
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a6066] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">Seafood Sourcing</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_59px] pt-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(176,179,174,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Container14 />
      <Container16 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-[325px] relative" data-name="Container">
      <Heading1 />
      <Container10 />
      <HorizontalBorder />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-full" data-name="Container">
      <ImageContainer />
      <Container9 />
    </div>
  );
}

function SectionTheVisionEditorialLayout() {
  return (
    <div className="bg-[#f6f6f3] relative shrink-0 w-full" data-name="Section - The Vision (Editorial Layout)">
      <div className="content-stretch flex flex-col items-start px-[60px] py-[80px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#303330] text-[12px] text-center tracking-[3.6px] uppercase w-[133.77px]">
        <p className="leading-[16px]">The Selection</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:Display_Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[36px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[48px]">Signature Creations</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Heading2 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#303330] text-[12px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Atlantic Selection</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container23 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Display_Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[24px] w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[36px] mb-0">Signature Grilled</p>
        <p className="leading-[36px]">Croaker</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading3 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[272.33px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-[268.61px]">
        <p className="leading-[1.6]">Marinated in heritage spices for 24 hours, flame-grilled over scent leaf charcoal and served with a zesty citrus reduction.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] h-[478px] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[32px] py-[48px] relative size-full">
        <Margin />
        <Heading3Margin />
        <Container24 />
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px overflow-clip relative" data-name="Container">
      <Image2 />
    </div>
  );
}

function Dish() {
  return (
    <div className="bg-white col-1 content-stretch flex items-center justify-self-stretch overflow-clip relative rounded-[8px] row-1 self-start shrink-0" data-name="Dish 1">
      <Container22 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container25 />
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image3 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#303330] text-[12px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Classic Nigerian</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Display_Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[24px] w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[36px]">Jollof Rice</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">{`Slowly cooked in a rich tomato & pepper blend, infused with spices, giving it a smoky flavourful finish.`}</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[32px] relative size-full">
        <Container28 />
        <Heading4 />
        <Container29 />
      </div>
    </div>
  );
}

function Dish1() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] row-2 self-start shrink-0" data-name="Dish 2">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Image4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px overflow-clip relative" data-name="Container">
      <Image4 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#303330] text-[12px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Eastern Delight</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container32 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Display_Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[24px] w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[36px]">Nkwobi</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading5 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">Tender cow foot pieces tossed in a rich palm oil sauce, seasoned with traditional spices and garnished for a bold authentic taste.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[32px] py-[48px] relative size-full">
        <Margin1 />
        <Heading3Margin1 />
        <Container33 />
      </div>
    </div>
  );
}

function Dish3() {
  return (
    <div className="bg-white col-1 content-stretch flex h-[465px] items-center justify-self-stretch overflow-clip relative rounded-[8px] row-3 shrink-0" data-name="Dish 4">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Image5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image5 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#303330] text-[12px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Flame Grill</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Display_Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[24px] w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[36px]">Grilled Beef</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">Juicy cuts of beef marinated in house spices, flame-grilled to perfection and served with a savory glaze.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[32px] relative size-full">
        <Container36 />
        <Heading6 />
        <Container37 />
      </div>
    </div>
  );
}

function Dish2() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col h-[465px] items-start justify-self-stretch overflow-clip relative rounded-[8px] row-4 shrink-0" data-name="Dish 3">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container21() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[_minmax(0,1.50fr)] grid-rows-[repeat(4,fit-content(100%))] relative shrink-0 w-full" data-name="Container">
      <Dish />
      <Dish1 />
      <Dish3 />
      <Dish2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start max-w-[1600px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container21 />
    </div>
  );
}

function SectionSignatureDishesBentoGrid() {
  return (
    <div className="bg-[#faf9f6] relative shrink-0 w-full" data-name="Section - Signature Dishes (Bento Grid)">
      <div className="content-stretch flex flex-col items-start px-[60px] py-[80px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a6066] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">premium drinks</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[36px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[40px]">Bar side view</p>
      </div>
    </div>
  );
}

function Caption() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Caption">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">{`A curated selection of cocktails, wines, spirits and refreshing beverages served in a relaxed & inviting atmosphere.`}</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[60px] relative size-full">
        <Container39 />
        <Heading7 />
        <Caption />
      </div>
    </div>
  );
}

function Image6() {
  return (
    <div className="h-[449px] relative shrink-0 w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function SectionDrinks() {
  return (
    <section className="content-stretch flex flex-col gap-[40px] items-start max-w-[1280px] py-[80px] relative shrink-0 w-full" data-name="Section - Drinks">
      <Container38 />
      <Image6 />
    </section>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[20px] tracking-[2.4px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">testimonials</p>
      </div>
    </div>
  );
}

function Container43() {
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

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"From the moment I walked in, I felt an overwhelming sense of peace. The staff was incredibly welcoming, and the ambiance was just perfect. I left feeling completely rejuvenated!"`}</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container45 />
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

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container47() {
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

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"I had the best time of my life here! The attention to detail and the calming atmosphere made it an unforgettable experience. That is why i keep coming back."`}</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase w-full whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">{`Ayo Adedoyin `}</p>
        <p className="leading-[20px]">(Gubernatorial Aspirant Kwara State)</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[186px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container51() {
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

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"Everything about this place screams luxury and relaxation. From the the cozy lounge area to the airy relaxation spots, it was exactly what I needed to unwind and relax after every of my busy activities."`}</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`George Okon- MD `}</p>
        <p className="leading-[20px] whitespace-pre">(Dlightsom Pharmacy Chairman)</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[208px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container55() {
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

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"I booked a weekend getaway here, and it was magical. The food was delicious, the rooms were spotless, and the environment was simply breathtaking."`}</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`Engr. Olanrewaju Adeyelore `}</p>
        <p className="leading-[20px] whitespace-pre">(Recognized Engineer)</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[186px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container59() {
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

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"If you're looking for a place to escape and recharge, this is it. The combination of nature, tranquility, and top-notch service is unmatched."`}</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`Past and Present `}</p>
        <p className="leading-[20px] whitespace-pre">(Chairmen of Thomas Estate)</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[186px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container63() {
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

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"Exceptional service! The team went above and beyond to make sure I was comfortable and satisfied. This place truly sets the standard for hospitality."`}</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">DR CHRIS ONUOHA</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[166px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[60px] items-start left-0 top-0" data-name="container">
      <Container42 />
      <Container46 />
      <Container50 />
      <Container54 />
      <Container58 />
      <Container62 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="h-[230px] relative shrink-0 w-full" data-name="testimonials">
      <Container41 />
    </div>
  );
}

function Container66() {
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
      <Container66 />
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

function Container67() {
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
      <Container67 />
    </button>
  );
}

function PageControl() {
  return (
    <div className="content-stretch flex gap-[40px] items-center p-[12px] relative shrink-0" data-name="Page control">
      <PrimaryButton />
      <Numbers />
      <PrimaryButton1 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#303330] text-[36px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[40px]">Reserve Your Table</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484d51] text-[16px] w-full">
        <p className="leading-[1.6]">Kindly make your reservation enquiries by sending us a message through the contact form. We recommend reaching out at least 48 hours in advance for weekend dining.</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
        <g id="Container">
          <path d={svgPaths.p1b5e0f00} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a6066] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Opening Hours</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#303330] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Tue — Sun: 12:00 PM — 11:00 PM</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col h-[35px] items-start relative shrink-0 w-[214px]" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[19.01px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.0095">
        <g id="Container">
          <path d={svgPaths.p28d827c0} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a6066] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Location</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#303330] text-[14px] w-full">
        <p className="leading-[20px]">9 Lapai Close. Thomas Estate, Aja, Lagos State, Nigeria</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container79 />
      <Container80 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[17px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
        <g id="Container">
          <path d={svgPaths.p33049d00} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a6066] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">phone</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#303330] text-[14px] w-full">
        <p className="leading-[20px]">+234 812 345 6789</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container82 />
      <Container83 />
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[15px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
        <g id="Container">
          <path d={svgPaths.p3f52f0c0} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a6066] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">email</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#303330] text-[14px] w-full">
        <p className="leading-[20px]">concierge@foxandhounds.ng</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container89 />
      <Container90 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container76 />
      <Container81 />
      <Container86 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[440px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container69 />
      <Container70 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Display_SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#303330] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[40px]">Send us a message</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">e.g Alexander Cole</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f4f1] content-stretch flex items-start justify-center left-0 overflow-clip px-[16px] py-[17px] right-[0.34px] rounded-tl-[4px] rounded-tr-[4px] top-[23px]" data-name="Input">
      <Container93 />
    </div>
  );
}

function Container92() {
  return (
    <div className="col-1 h-[79px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[4px] text-[#5a6066] text-[10px] top-[7px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Full Name</p>
      </div>
      <Input />
    </div>
  );
}

function ImageFill() {
  return <div className="absolute h-[56px] left-0 top-0 w-[298.67px]" data-name="image fill" />;
}

function Options() {
  return (
    <div className="absolute bg-[#f3f4f1] h-[56px] left-0 right-[0.33px] rounded-tl-[4px] rounded-tr-[4px] top-[23px]" data-name="Options">
      <ImageFill />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[16px] text-[#6b7280] text-[14px] top-[28px] whitespace-nowrap">
        <p className="leading-[normal]">Enter your email address</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="col-2 h-[79px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[4px] text-[#5a6066] text-[10px] top-[7px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Email address</p>
      </div>
      <Options />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Reservation requirements or special occasion details...</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f3f4f1] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[64px] pt-[16px] px-[16px] relative size-full">
          <Container96 />
        </div>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[9px] items-start relative row-2 self-start shrink-0 w-[520px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a6066] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Message</p>
      </div>
      <Textarea />
    </div>
  );
}

function Container97() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[0.5px] relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">Reserve table</p>
        </div>
      </div>
    </div>
  );
}

function Form1() {
  return (
    <div className="gap-x-[32px] gap-y-[20px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-full" data-name="Form">
      <Container92 />
      <Container94 />
      <Container95 />
      <div className="backdrop-blur-[6px] bg-[#0282bf] col-[1/span_2] justify-self-stretch relative rounded-[4px] row-3 self-stretch shrink-0" data-name="Primary Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[40px] py-[16px] relative size-full">
            <Container97 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Form1 />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white drop-shadow-[0px_25px_20px_rgba(0,0,0,0.1)] max-w-[1200px] relative rounded-[8px] shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#0282bf] border-solid border-t-4 inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[inherit] p-[60px] relative size-full">
        <Container68 />
        <Container91 />
      </div>
    </div>
  );
}

function ReservationSection() {
  return (
    <section className="bg-white relative shrink-0 w-full" data-name="Reservation Section">
      <div className="content-stretch flex flex-col items-start px-[80px] py-[100px] relative size-full">
        <Form />
      </div>
    </section>
  );
}

function Container98() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[70px] relative shrink-0 w-[159px]" data-name="Image@4x 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Fastline logo" className="absolute h-[115.79%] left-[-3.56%] max-w-none top-[-11.4%] w-[110.99%]" src={imgImage4X2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-y-[16px] items-center justify-between relative size-full">
        <div className="content-stretch flex flex-col h-[16px] items-start justify-center opacity-80 px-[2px] relative shrink-0" data-name="Link">
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Rooms</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[16px] items-start justify-center opacity-80 px-[2px] relative shrink-0" data-name="Link">
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Restaurant</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[16px] items-start justify-center opacity-80 px-[2px] relative shrink-0" data-name="Link">
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Lounge</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[16px] items-start justify-center opacity-80 px-[2px] relative shrink-0" data-name="Link">
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Contact</p>
          </div>
        </div>
        <a className="content-stretch cursor-pointer flex flex-col h-[16px] items-start justify-center opacity-80 px-[2px] relative shrink-0" href="https://www.instagram.com/foxandhoundslagos/" target="_blank" data-name="Link">
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[12px] text-left tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Instagram</p>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex flex-col h-[16px] items-start justify-center opacity-80 px-[2px] relative shrink-0" href="https://www.youtube.com/watch?v=oHbsRI-XUN8" target="_blank" data-name="Link">
          <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[12px] text-left tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Youtube</p>
          </div>
        </a>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] text-center tracking-[1.2px] uppercase w-full">
          <p className="leading-[16px] mb-0">{`© 2026 Fox & Hounds Lagos`}</p>
          <p className="leading-[16px]">No 9, Lapai Close, Thomas Estate, Ajah, Lagos</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ccc] border-solid border-t inset-0 pointer-events-none" />
      <Container100 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="max-w-[672px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center max-w-[inherit] pt-[16px] relative size-full">
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Main">
      <HeroSection />
      <SectionTheVisionEditorialLayout />
      <SectionSignatureDishesBentoGrid />
      <SectionDrinks />
      <section aria-label="Testimonials" className="bg-[#f6f6f3] h-[550px] relative shrink-0 w-full" data-name="Section - Testimonials: Tablet">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[32px] items-center px-[60px] py-[100px] relative size-full">
            <Container40 />
            <Testimonials />
            <PageControl />
          </div>
        </div>
      </section>
      <ReservationSection />
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-center px-[60px] py-[40px] relative shrink-0 w-[800px]" data-name="Footer">
        <Container98 />
        <Container99 />
        <Margin2 />
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

function Container101() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] pl-[20px] pr-[28px] py-[4px] relative size-full">
          <div className="h-[60px] relative shrink-0 w-[136px]" data-name="logo">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="Fastline logo" className="absolute h-[115.79%] left-[-3.56%] max-w-none top-[-11.4%] w-[110.99%]" src={imgImage4X2} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0" data-name="Menu">
            <MenuButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Tablet() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Tablet">
      <Main />
      <div className="absolute h-[7011px] inset-0 pointer-events-none">
        <div className="backdrop-blur-[6px] bg-white content-stretch flex flex-col items-start pointer-events-auto sticky top-0" data-name="TopNavBar">
          <Container101 />
        </div>
      </div>
    </div>
  );
}