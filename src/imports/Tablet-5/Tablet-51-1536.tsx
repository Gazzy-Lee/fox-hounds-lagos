import svgPaths from "./svg-u9ftjv57rb";
import imgImage from "./9392ff99ef49ab04baa54af6cb50b12588d44f8f.png";
import imgImage1 from "./d7bfc4e46bbf5730229f69c91133dc37abd593fb.png";
import imgImage2 from "./1a32ac58325a375fd97833428075853baca5385e.png";
import imgImage4X2 from "./65fab89ef39e30fdd07c75ed543a2525d0390284.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-start relative shrink-0 w-[174px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[10px] tracking-[3px] uppercase w-full">
        <p className="leading-[15px]">{`LODGING & SHORT-LETS`}</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[580px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Noto_Serif:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#131313] text-[0px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="text-[54px]">
          <span className="leading-[1.2]">{`A `}</span>
          <span className="leading-[1.2] text-[#0282bf]">leisure</span>
          <span className="leading-[1.2]">{` getaway filled with `}</span>
          <span className="leading-[1.2] text-[#0282bf]">hospitality</span>
          <span className="leading-[1.2]">{` & `}</span>
          <span className="leading-[1.2] text-black">luxury</span>
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[1.6] mb-0">{`A curated collection of private quarters designed for the modern traveller and local guests alike. `}</p>
        <p className="leading-[1.6] mb-0">​</p>
        <p className="leading-[1.6]">{`Each space blends traditional Lagos warmth with contemporary comfort. `}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pb-[60px] pt-[100px] px-[60px] relative size-full">
          <Container1 />
          <Heading />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[884px] relative shrink-0 w-full" data-name="image">
      <img alt="image of room interior" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#131313] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">lodgings</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[36px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[48px]">{`Rooms & Suites`}</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[1.6] mb-0">We offer a range of tastefully furnished, cozy and affordable rooms designed for comfort. Each room features comfort-size beds, bathrooms, Wi-Fi and essential amenities.</p>
        <p className="leading-[1.6] mb-0">​</p>
        <p className="leading-[1.6]">While our executive suites include flat-screen TVs, a lounge area and a mini refrigerator. With contemporary design, guests can enjoy meals, pastries and cocktails prepared on request by our in-house chefs.</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[11px] relative shrink-0 w-[10.78px]" data-name="Group">
      <div className="absolute inset-[-1.36%_-1.39%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0802 11.3">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p10d848c0} fill="var(--fill-0, #0282BF)" fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #0282BF)" strokeWidth="0.3" />
            <path d={svgPaths.p2e5b29b2} fill="var(--fill-0, #0282BF)" id="Vector_2" stroke="var(--stroke-0, #0282BF)" strokeWidth="0.3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Group />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Item">
      <Container5 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">essential amenities</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[9.3px] relative shrink-0 w-[13.372px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3717 9.29963">
        <g id="Container">
          <path d={svgPaths.p267b9b80} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Item">
      <Container6 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">High-Speed WiFi</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[10.988px] relative shrink-0 w-[8.155px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.15536 10.9879">
        <g id="Container">
          <path d={svgPaths.p2b456d00} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Item">
      <Container7 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">24/7 Power</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-center flex flex-wrap gap-[8px_16px] items-center py-[8px] relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[0.5px] relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">Book now</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
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

function BackgroundShadow() {
  return (
    <div className="bg-white drop-shadow-[0px_20px_20px_rgba(0,0,0,0.4)] relative rounded-[8px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[64px] relative size-full">
        <Container3 />
        <Heading1 />
        <Container4 />
        <List />
        <div className="backdrop-blur-[6px] bg-[#0282bf] relative rounded-[4px] shrink-0 w-full" data-name="Primary Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[12px] items-center justify-center px-[40px] py-[16px] relative size-full">
              <Container8 />
              <Container9 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoomsSuites() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Rooms & Suites">
      <Image />
      <BackgroundShadow />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">short-let apartments</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[36px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[48px]">{`Studio apartments, 1-bed mini flats & bungalows`}</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[740px] py-[4px] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[1.6] mb-0">{`Fox & Hounds Lagos also offers short-let serviced apartments in select locations, available for a few days or weeks. Ideal for families, small groups & travellers, these spaces provide a more flexible and home-like alternative to traditional hotel stays. `}</p>
        <p className="leading-[1.6] mb-0">​</p>
        <p className="leading-[1.6]">Our guests can enjoy comfort, privacy and a true home-away-from-home experience.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[450px] pb-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">{`They are compact and stylish spaces designed for comfort & convenience. They are perfect for solo travellers or couples seeking a cozy stay.`}</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[15.942px] relative shrink-0 w-[22.923px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.923 15.9422">
          <path d={svgPaths.p2809e900} fill="var(--fill-0, #0282BF)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[18.836px] relative shrink-0 w-[13.981px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9806 18.8365">
          <path d={svgPaths.pfc1d700} fill="var(--fill-0, #0282BF)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[17.641px]" data-name="Group">
      <div className="absolute inset-[-0.83%_-0.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9404 18.3">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p24b5440} fill="var(--fill-0, #0282BF)" fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #0282BF)" strokeWidth="0.3" />
            <path d={svgPaths.p2bea6500} fill="var(--fill-0, #0282BF)" id="Vector_2" stroke="var(--stroke-0, #0282BF)" strokeWidth="0.3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[18px]" data-name="Container">
      <Group1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container14 />
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#0282bf] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <a className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap" href="https://www.figma.com/design/alez8w6z5jYJps7HbV9Lm2?node-id=43-10404" target="_blank">
          <p className="cursor-pointer leading-[20px]">Reserve now</p>
        </a>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(2,130,191,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[25px] relative size-full">
          <Container13 />
          <Link />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] h-[380px] min-w-[260px] relative z-[2]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] px-[32px] py-[40px] relative size-full">
        <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="leading-[32px]">Our Studio Apartments</p>
        </div>
        <Container12 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="flex-[1_0_0] h-[380px] min-w-[260px] relative" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[260px] overflow-clip relative z-[1]" data-name="image container">
      <Image1 />
    </div>
  );
}

function StudioApartment() {
  return (
    <div className="bg-white content-stretch flex h-[380.98px] isolate items-start min-w-[520px] relative rounded-bl-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[680px]" data-name="Studio apartment">
      <Container11 />
      <ImageContainer />
    </div>
  );
}

function Image2() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-[260px] overflow-clip relative" data-name="image container">
      <Image2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[450px] pb-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">We have well-designed one-bedroom apartments offering more space and privacy. These are ideal for guests who want a more comfortable home-like experience.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[15.942px] relative shrink-0 w-[22.923px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.923 15.9422">
          <path d={svgPaths.p2809e900} fill="var(--fill-0, #0282BF)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[18.836px] relative shrink-0 w-[13.981px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9806 18.8365">
          <path d={svgPaths.pfc1d700} fill="var(--fill-0, #0282BF)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[17.641px]" data-name="Group">
      <div className="absolute inset-[-0.83%_-0.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9404 18.3">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p24b5440} fill="var(--fill-0, #0282BF)" fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #0282BF)" strokeWidth="0.3" />
            <path d={svgPaths.p2bea6500} fill="var(--fill-0, #0282BF)" id="Vector_2" stroke="var(--stroke-0, #0282BF)" strokeWidth="0.3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[18px]" data-name="Container">
      <Group2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container20 />
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#0282bf] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-[20px]">Reserve now</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(2,130,191,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[25px] relative size-full">
          <Container19 />
          <Link1 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-w-[260px] relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] px-[32px] py-[40px] relative size-full">
        <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="leading-[32px]">Our 1-bed Mini Flats</p>
        </div>
        <Container18 />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function RoomMiniFlat() {
  return (
    <div className="bg-white content-stretch flex items-center min-w-[520px] relative rounded-[8px] shrink-0 w-full" data-name="Room mini flat">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <ImageContainer1 />
      </div>
      <Container17 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[450px] pb-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">{`These are spacious & fully equipped accomodations, perfect for families or small groups looking for a relaxed and private stay.`}</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[15.942px] relative shrink-0 w-[22.923px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.923 15.9422">
          <path d={svgPaths.p2809e900} fill="var(--fill-0, #0282BF)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[18.836px] relative shrink-0 w-[13.981px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9806 18.8365">
          <path d={svgPaths.pfc1d700} fill="var(--fill-0, #0282BF)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[17.641px]" data-name="Group">
      <div className="absolute inset-[-0.83%_-0.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9404 18.3">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p24b5440} fill="var(--fill-0, #0282BF)" fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #0282BF)" strokeWidth="0.3" />
            <path d={svgPaths.p2bea6500} fill="var(--fill-0, #0282BF)" id="Vector_2" stroke="var(--stroke-0, #0282BF)" strokeWidth="0.3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[18px]" data-name="Container">
      <Group3 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container26 />
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#0282bf] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
          <p className="leading-[20px]">Reserve now</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(2,130,191,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pt-[25px] relative size-full">
          <Container25 />
          <Link2 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] min-w-[260px] relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] px-[32px] py-[40px] relative size-full">
        <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="leading-[32px]">Our Bungalows</p>
        </div>
        <Container24 />
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function ImageContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px overflow-clip relative" data-name="image container">
      <Image3 />
    </div>
  );
}

function Bungalow() {
  return (
    <div className="bg-white content-stretch flex items-center min-w-[520px] relative rounded-[8px] shrink-0 w-full" data-name="Bungalow">
      <Container23 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <ImageContainer2 />
      </div>
    </div>
  );
}

function BentoGridForDeluxeAndStudio() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[1280px] py-[12px] relative shrink-0 w-full" data-name="Bento Grid for Deluxe and Studio">
      <StudioApartment />
      <RoomMiniFlat />
      <Bungalow />
    </div>
  );
}

function ShortLets() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Short-lets">
      <Container10 />
      <Heading2 />
      <Text />
      <BentoGridForDeluxeAndStudio />
    </div>
  );
}

function RoomSectionsAsymmetricLayout() {
  return (
    <div className="bg-[#f6f6f3] relative shrink-0 w-full" data-name="Room Sections - Asymmetric Layout">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[100px] items-start px-[60px] py-[100px] relative size-full">
          <RoomsSuites />
          <ShortLets />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[36px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p>
          <span className="leading-[48px]">{`The Standard of `}</span>
          <span className="leading-[48px] text-[#0282bf]">{`Fox & Hounds`}</span>
        </p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[800px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484d51] text-[16px] text-center w-full">
        <p className="leading-[1.6]">Every room is curated with our signature amenities to ensure your comfort is prioritized.</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container31 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[28.255px] relative shrink-0 w-[20.971px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9709 28.2547">
        <g id="Container">
          <path d={svgPaths.p14f62800} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#303330] text-[12px] text-center tracking-[1.2px] uppercase w-[196.03px]">
        <p className="leading-[16px]">24/7 Uninterrupted Power</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#808080] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Dual Industrial Generators</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="container">
      <Heading4 />
      <Container36 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col h-[95px] items-center justify-between opacity-95 relative shrink-0 w-[220px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[28.413px] relative shrink-0 w-[22.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4999 28.4133">
        <g id="Container">
          <path d={svgPaths.p305a3800} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#303330] text-[12px] text-center tracking-[1.2px] uppercase w-[154.08px]">
        <p className="leading-[16px]">High-Grade Security</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#808080] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">{`24-Hour Personnel & Tech`}</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="container">
      <Heading5 />
      <Container40 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col h-[95px] items-center justify-between opacity-95 relative shrink-0 w-[220px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[29.25px] relative shrink-0 w-[21px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9999 29.2499">
        <g id="Container">
          <path d={svgPaths.p3c064b80} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#303330] text-[12px] text-center tracking-[1.2px] uppercase w-[100.31px]">
        <p className="leading-[16px]">Room Service</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#808080] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Curated Midnight Menu</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="container">
      <Heading6 />
      <Container44 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col h-[95px] items-center justify-between opacity-95 relative shrink-0 w-[220px]" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[22.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4999 28.4999">
        <g id="Container">
          <path d={svgPaths.p38d60e00} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#303330] text-[12px] text-center tracking-[1.2px] uppercase w-[133.56px]">
        <p className="leading-[16px]">Same-Day Laundry</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#808080] text-[10px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Professional Care</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[220px]" data-name="container">
      <Heading7 />
      <Container47 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[95px] items-center justify-between opacity-95 relative shrink-0">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-start flex flex-wrap gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container37 />
      <Container41 />
      <Frame />
    </div>
  );
}

function Container29() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[64px] items-center max-w-[inherit] relative size-full">
        <Container30 />
        <Container32 />
      </div>
    </div>
  );
}

function SectionSignatureAmenitiesGrid() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section - Signature Amenities Grid">
      <div aria-hidden="true" className="absolute border-[rgba(79,70,50,0.05)] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[60px] py-[81px] relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[20px] tracking-[2.4px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">testimonials</p>
      </div>
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
        <p className="leading-[1.2]">{`"From the moment I walked in, I felt an overwhelming sense of peace. The staff was incredibly welcoming, and the ambiance was just perfect. I left feeling completely rejuvenated!"`}</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container53 />
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

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
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
        <p className="leading-[1.2]">{`"I had the best time of my life here! The attention to detail and the calming atmosphere made it an unforgettable experience. That is why i keep coming back."`}</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase w-full whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">{`Ayo Adedoyin `}</p>
        <p className="leading-[20px]">(Gubernatorial Aspirant Kwara State)</p>
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
        <p className="leading-[1.2]">{`"Everything about this place screams luxury and relaxation. From the the cozy lounge area to the airy relaxation spots, it was exactly what I needed to unwind and relax after every of my busy activities."`}</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`George Okon- MD `}</p>
        <p className="leading-[20px] whitespace-pre">(Dlightsom Pharmacy Chairman)</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[208px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
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
        <p className="leading-[1.2]">{`"I booked a weekend getaway here, and it was magical. The food was delicious, the rooms were spotless, and the environment was simply breathtaking."`}</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`Engr. Olanrewaju Adeyelore `}</p>
        <p className="leading-[20px] whitespace-pre">(Recognized Engineer)</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[186px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container67() {
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

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"If you're looking for a place to escape and recharge, this is it. The combination of nature, tranquility, and top-notch service is unmatched."`}</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`Past and Present `}</p>
        <p className="leading-[20px] whitespace-pre">(Chairmen of Thomas Estate)</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[186px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
      <Container67 />
      <Container68 />
    </div>
  );
}

function Container71() {
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

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[18px] text-center w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2]">{`"Exceptional service! The team went above and beyond to make sure I was comfortable and satisfied. This place truly sets the standard for hospitality."`}</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">DR CHRIS ONUOHA</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[166px] items-center max-w-[896px] min-w-[300px] relative shrink-0 w-[380px]" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[60px] items-start left-0 top-0" data-name="container">
      <Container50 />
      <Container54 />
      <Container58 />
      <Container62 />
      <Container66 />
      <Container70 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="h-[230px] relative shrink-0 w-full" data-name="testimonials">
      <Container49 />
    </div>
  );
}

function Container74() {
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
      <Container74 />
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

function Container75() {
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
      <Container75 />
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

function Container76() {
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

function Container77() {
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

function Container78() {
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

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ccc] border-solid border-t inset-0 pointer-events-none" />
      <Container78 />
    </div>
  );
}

function Margin() {
  return (
    <div className="max-w-[672px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center max-w-[inherit] pt-[16px] relative size-full">
        <HorizontalBorder3 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Main">
      <Container />
      <RoomSectionsAsymmetricLayout />
      <SectionSignatureAmenitiesGrid />
      <section aria-label="Testimonials" className="bg-[#f6f6f3] h-[550px] relative shrink-0 w-full" data-name="Section - Testimonials: Tablet">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[32px] items-center px-[60px] py-[100px] relative size-full">
            <Container48 />
            <Testimonials />
            <PageControl />
          </div>
        </div>
      </section>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-center px-[60px] py-[40px] relative shrink-0 w-[800px]" data-name="Footer">
        <Container76 />
        <Container77 />
        <Margin />
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

function Container79() {
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
      <div className="absolute h-[5230.97998046875px] inset-0 pointer-events-none">
        <div className="backdrop-blur-[6px] bg-white content-stretch flex flex-col items-start pointer-events-auto sticky top-0" data-name="TopNavBar">
          <Container79 />
        </div>
      </div>
    </div>
  );
}