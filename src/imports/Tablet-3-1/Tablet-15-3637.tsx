import svgPaths from "./svg-mc45e8506r";
import imgImage from "./517f13a4cc04c67c65a9706a04bc532e68ee7d0a.png";
import imgImage1 from "./7f74fadd1eb2d7e420a7d4fa73cb8620f329b5ae.png";
import imgImage2 from "./08491c4347cb508d257b18af2e164d413189df04.png";
import imgImage3 from "./81349560128f9b12afd3eb9dacf0765d48e7f7e0.png";
import imgImage4X2 from "./65fab89ef39e30fdd07c75ed543a2525d0390284.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">The Curated Vibe</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Noto_Serif:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131313] text-[60px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2] mb-0">The</p>
        <p className="leading-[1.2] mb-0 text-[#0282bf]">Lounge</p>
        <p className="leading-[1.2]">Sanctuary</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[500px] relative shrink-0 text-[#4d4d4d] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[1.6] mb-0">{`Our executive lounge at Fox & Hounds Lagos is designed for relaxation, socializing and refined comfort. Guests enjoy a stylish atmosphere for conversations, casual hangouts and unwinding with drinks & light entertainment.`}</p>
        <p className="leading-[1.6] mb-0">​</p>
        <p className="leading-[1.6] mb-0">{`With a well-stocked bar, fresh bites and thoughtfully designed interiors, the space blends elegance and warmth. Steady power, a secure environment and overnight stay options ensure a safe & enjoyable experience.`}</p>
        <p className="leading-[1.6] mb-0">​</p>
        <p className="leading-[1.6]">{`At Fox & Hounds Lagos, your comfort and leisure are always assured.`}</p>
      </div>
    </div>
  );
}

function Container4() {
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

function Container5() {
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

function Container3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <div className="backdrop-blur-[6px] bg-[#0282bf] content-stretch flex gap-[12px] items-center justify-center px-[40px] py-[16px] relative rounded-[4px] shrink-0 w-[200px]" data-name="Primary Button">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Heading />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Image() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Image1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function AbsoluteElementForAsymmetry() {
  return (
    <div className="absolute bg-white bottom-[-48.33px] content-stretch flex flex-col h-[320px] items-start justify-center left-[-48px] p-[16px] rounded-[4px] w-[256px]" data-name="Absolute element for asymmetry">
      <Image1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[608px] items-start relative shrink-0 w-full" data-name="Container">
      <Image />
      <AbsoluteElementForAsymmetry />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Hero Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[100px] items-start px-[60px] py-[80px] relative size-full">
          <Container />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Image3() {
  return (
    <div className="flex-[1_0_0] min-h-px pointer-events-none relative w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage3} />
      <div aria-hidden="true" className="absolute border-20 border-solid border-white inset-[-20px]" />
    </div>
  );
}

function AbsoluteElementForAsymmetry1() {
  return (
    <div className="absolute bg-white bottom-[-48.33px] content-stretch flex flex-col h-[320px] items-start justify-center left-[-48px] p-[16px] rounded-[4px] w-[256px]" data-name="Absolute element for asymmetry">
      <Image3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Image2 />
      <AbsoluteElementForAsymmetry1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#303330] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">Atmosphere</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[36px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[40px]">Chill Out Sanctuaries</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start py-[4px] relative size-full">
        <div className="relative shrink-0 size-[26.875px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.875 26.875">
            <path d={svgPaths.p264a4000} fill="var(--fill-0, #0282BF)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#303330] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Golden Hour Lighting</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">Natural sunlight filters through the open space, creating a calm and inviting atmosphere from afternoon into the evening.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Container">
      <Heading2 />
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start py-[8px] relative size-full">
        <div className="h-[21.562px] relative shrink-0 w-[21.25px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2499 21.5624">
            <path d={svgPaths.p199a2c00} fill="var(--fill-0, #0282BF)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#303330] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Bespoke Comfort</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">Comfortable outdoor seating surrounded by greenery offers a relaxed space to unwind and enjoy quiet moments or casual conversations.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-w-px relative" data-name="Container">
      <Heading3 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[24px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start py-[8px] relative size-full">
        <div className="h-[21.01px] relative shrink-0 w-[13.678px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6778 21.0095">
            <path d={svgPaths.p1676e280} fill="var(--fill-0, #0282BF)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#303330] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">Curated Soundscape</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">A peaceful garden setting enhanced by fresh air, soft sounds and a laid-back ambiance perfect for relaxation and socializing.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-w-px relative" data-name="Container">
      <Heading4 />
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[24px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container16 />
      <Container20 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Heading1 />
      <Container11 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function SectionChillOutSanctuaries() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section - Chill Out Sanctuaries">
      <div className="content-stretch flex flex-col items-start px-[60px] py-[80px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[20px] tracking-[2.4px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">testimonials</p>
      </div>
    </div>
  );
}

function Container27() {
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

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"From the moment I walked in, I felt an overwhelming sense of peace. The staff was incredibly welcoming, and the ambiance was just perfect. I left feeling completely rejuvenated!"`}</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container29 />
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

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container31() {
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

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"I had the best time of my life here! The attention to detail and the calming atmosphere made it an unforgettable experience. That is why i keep coming back."`}</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase w-full whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">{`Ayo Adedoyin `}</p>
        <p className="leading-[20px]">(Gubernatorial Aspirant Kwara State)</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[186px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container35() {
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

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"Everything about this place screams luxury and relaxation. From the the cozy lounge area to the airy relaxation spots, it was exactly what I needed to unwind and relax after every of my busy activities."`}</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`George Okon- MD `}</p>
        <p className="leading-[20px] whitespace-pre">(Dlightsom Pharmacy Chairman)</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[208px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container39() {
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

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"I booked a weekend getaway here, and it was magical. The food was delicious, the rooms were spotless, and the environment was simply breathtaking."`}</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`Engr. Olanrewaju Adeyelore `}</p>
        <p className="leading-[20px] whitespace-pre">(Recognized Engineer)</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[186px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
      <Container39 />
      <Container40 />
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
        <p className="leading-[1.2]">{`"If you're looking for a place to escape and recharge, this is it. The combination of nature, tranquility, and top-notch service is unmatched."`}</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`Past and Present `}</p>
        <p className="leading-[20px] whitespace-pre">(Chairmen of Thomas Estate)</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[186px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
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
        <p className="leading-[1.2]">{`"Exceptional service! The team went above and beyond to make sure I was comfortable and satisfied. This place truly sets the standard for hospitality."`}</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">DR CHRIS ONUOHA</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[166px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[60px] items-start left-0 top-0" data-name="container">
      <Container26 />
      <Container30 />
      <Container34 />
      <Container38 />
      <Container42 />
      <Container46 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="h-[230px] relative shrink-0 w-full" data-name="testimonials">
      <Container25 />
    </div>
  );
}

function Container50() {
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
      <Container50 />
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

function Container51() {
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
      <Container51 />
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

function Main() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Main">
      <HeroSection />
      <SectionChillOutSanctuaries />
      <section aria-label="Testimonials" className="bg-[#f6f6f3] h-[550px] relative shrink-0 w-full" data-name="Section - Testimonials: Tablet">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[32px] items-center px-[60px] py-[100px] relative size-full">
            <Container24 />
            <Testimonials />
            <PageControl />
          </div>
        </div>
      </section>
    </div>
  );
}

function Container52() {
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

function Container53() {
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

function Container54() {
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

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ccc] border-solid border-t inset-0 pointer-events-none" />
      <Container54 />
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

function Container55() {
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

export default function Tablet() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Tablet">
      <Main />
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-center px-[60px] py-[40px] relative shrink-0 w-[800px]" data-name="Footer">
        <Container52 />
        <Container53 />
        <Margin />
      </div>
      <div className="absolute h-[3692px] inset-0 pointer-events-none">
        <div className="backdrop-blur-[6px] bg-white content-stretch flex flex-col items-start pointer-events-auto sticky top-0" data-name="TopNavBar">
          <Container55 />
        </div>
      </div>
    </div>
  );
}