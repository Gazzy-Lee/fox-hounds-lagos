import svgPaths from "./svg-qxij8qpnkc";
import imgImage from "./23c66232f9ca56bf8b939077a4b2da3ef78334af.png";
import imgImage1 from "./7da6661e6c2f77e43fbb66675b1ed6e57f6303a7.png";
import imgImage2 from "./3fa73fc6edc25bddc3720830f27931d3cb2199fd.png";
import imgImage3 from "./5865f734db17b11fd968704c8eb5411e8916af85.png";
import imgImage4X2 from "./65fab89ef39e30fdd07c75ed543a2525d0390284.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px]">{`SPORTS & LEISURE`}</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Noto_Serif:SemiBold',sans-serif] font-semibold h-[144px] justify-center leading-[0] relative shrink-0 text-[#303330] text-[0px] w-[363.97px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.2] mb-0 text-[60px]">Arena of</p>
        <p className="leading-[1.2] text-[#0282bf] text-[60px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Excellence
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] pt-[7.25px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[1.6] mb-0">Experience the football thrill of the European Premier League (EPL) and UEFA Champions League (UCL) in an atmosphere designed for discerning fans.</p>
        <p className="leading-[1.6] mb-0">​</p>
        <p className="leading-[1.6]">Catch every moment live with fellow supporters in a relaxed and vibrant setting.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[672px] relative shrink-0 w-[410px]" data-name="Container">
      <Container1 />
      <Heading />
      <Container2 />
    </div>
  );
}

function Image() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="Image">
      <video autoPlay className="absolute max-w-none object-cover rounded-[16px] size-full" controls controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/12e6437b09d223c2200dd80f04e774edbdaeeed4" />
      </video>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="content-stretch flex h-[552px] items-center overflow-clip relative shrink-0 w-[700px]" data-name="image container">
      <Image />
    </div>
  );
}

function HeroSectionArenaOfExcellence() {
  return (
    <div className="bg-white content-stretch flex gap-[60px] h-[752px] items-center overflow-clip px-[80px] py-[100px] relative shrink-0 w-[1280px]" data-name="Hero Section: Arena of Excellence">
      <Container />
      <ImageContainer />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[36px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[40px]">Curated Screenings</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5d605c] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Premier League • Champions League • World cup</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container5 />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[500px] relative rounded-[8px] shrink-0 w-[600px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[500px] relative rounded-[8px] shrink-0 w-[600px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[500px] relative rounded-[8px] shrink-0 w-[600px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage2} />
    </div>
  );
}

function Carousel() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Carousel">
      <Image1 />
      <Image2 />
      <Image3 />
    </div>
  );
}

function Container3() {
  return (
    <section className="content-stretch flex flex-col gap-[40px] h-[982px] items-start max-w-[1400px] shrink-0 sticky top-0 w-full" data-name="container">
      <Container4 />
      <Carousel />
    </section>
  );
}

function MatchScheduleSection() {
  return (
    <div className="bg-[#f6f6f3] content-stretch flex flex-col h-[812px] items-start px-[80px] py-[100px] relative shrink-0 w-[1280px]" data-name="Match Schedule Section">
      <Container3 />
    </div>
  );
}

function BlueShade() {
  return <div className="absolute bg-[rgba(2,130,191,0.4)] inset-[381.34px_-45.88px_-64px_219.22px] opacity-60" data-name="blue shade" />;
}

function Image4() {
  return (
    <div className="h-[680px] relative shrink-0 w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="bg-[#eeeeea] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="image container">
      <Image4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <BlueShade />
      <ImageContainer1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[36px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[40px]">Let us host your private events</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[1.6] mb-0">{`From intimate corporate milestones to celebratory soirées, Fox & Hounds provides a backdrop of quiet luxury. `}</p>
        <p className="leading-[1.6] mb-0">​</p>
        <p className="leading-[1.6]">Our curated gathering spaces offer privacy without isolation, tailored menus and a dedicated concierge.</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[21px] relative shrink-0 w-[24px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21">
        <g id="Margin">
          <path d={svgPaths.p10a578d8} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#303330] text-[18px] w-full">
        <p className="leading-[20px]">Bespoke Catering</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">{`Menus crafted by our executive chef to match your event's profile.`}</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Container">
      <Heading3 />
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Margin />
      <Container12 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[14.481px] relative shrink-0 w-[24px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 14.4807">
        <g id="Margin">
          <path d={svgPaths.p16681880} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#303330] text-[18px] w-full">
        <p className="leading-[20px]">Secluded Venues</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">Capacities from 10 to 40 guests in our most exclusive wings.</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Container">
      <Heading4 />
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Margin1 />
      <Container15 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[14.481px] relative shrink-0 w-[24px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 14.4807">
        <g id="Margin">
          <path d={svgPaths.p16681880} fill="var(--fill-0, #0282BF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#303330] text-[18px] w-full">
        <p className="leading-[20px]">Event Décor</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4d4d4d] text-[16px] w-full">
        <p className="leading-[1.6]">We provide custom decorations for our guest events.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Container">
      <Heading5 />
      <Container19 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Margin2 />
      <Container18 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16.6px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[31.4px] items-start min-w-px relative" data-name="Container">
      <Heading2 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[100px] items-center max-w-[1400px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function PrivateLegacySection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[80px] py-[100px] relative shrink-0 w-[1280px]" data-name="Private Legacy Section">
      <Container6 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[36px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[40px]">Event Inquiry</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484d51] text-[16px] text-center w-full">
        <p className="leading-[1.6]">Share your vision with us and our legacy concierge will respond within 24 hours.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container21 />
    </div>
  );
}

function Container23() {
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
      <Container23 />
    </div>
  );
}

function Container22() {
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

function Container24() {
  return (
    <div className="col-2 h-[79px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] left-[4px] text-[#5a6066] text-[10px] top-[7px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Email address</p>
      </div>
      <Options />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Dietary requirements or special occasion details, etc</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f3f4f1] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[64px] pt-[16px] px-[16px] relative size-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[9px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a6066] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Message</p>
      </div>
      <Textarea />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[0.5px] relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">send message</p>
        </div>
      </div>
    </div>
  );
}

function Form1() {
  return (
    <div className="gap-x-[32px] gap-y-[20px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[___fit-content(100%)_minmax(0,1fr)_fit-content(100%)] h-[302px] relative shrink-0 w-full" data-name="Form">
      <Container22 />
      <Container24 />
      <Container25 />
      <div className="backdrop-blur-[6px] bg-[#0282bf] col-[1/span_2] justify-self-stretch relative rounded-[4px] row-3 self-stretch shrink-0" data-name="Primary Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[40px] py-[16px] relative size-full">
            <Container27 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white max-w-[896px] relative rounded-[8px] shrink-0 w-full" data-name="Form">
      <div className="flex flex-col items-center justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center justify-center max-w-[inherit] p-[80px] relative size-full">
          <Container20 />
          <Form1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0282bf] border-solid border-t-4 inset-0 pointer-events-none rounded-[8px] shadow-[0px_25px_40px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function InquiryFormSection() {
  return (
    <div className="bg-[#f6f6f3] content-stretch flex flex-col items-center justify-center px-[80px] py-[100px] relative shrink-0 w-[1280px]" data-name="Inquiry Form Section">
      <Form />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[20px] tracking-[2.4px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">testimonials</p>
      </div>
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
        <p className="leading-[1.2]">{`"From the moment I walked in, I felt an overwhelming sense of peace. The staff was incredibly welcoming, and the ambiance was just perfect. I left feeling completely rejuvenated!"`}</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container33 />
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

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[208px] items-center max-w-[896px] min-w-[530px] relative shrink-0 w-[530px]" data-name="Container">
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
        <p className="leading-[1.2]">{`"I had the best time of my life here! The attention to detail and the calming atmosphere made it an unforgettable experience. That is why i keep coming back."`}</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase w-full whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">{`Ayo Adedoyin `}</p>
        <p className="leading-[20px]">(Gubernatorial Aspirant Kwara State)</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[186px] items-center max-w-[896px] min-w-[530px] relative shrink-0 w-[530px]" data-name="Container">
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
        <p className="leading-[1.2]">{`"Everything about this place screams luxury and relaxation. From the the cozy lounge area to the airy relaxation spots, it was exactly what I needed to unwind and relax after every of my busy activities."`}</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`George Okon- MD `}</p>
        <p className="leading-[20px] whitespace-pre">(Dlightsom Pharmacy Chairman)</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[208px] items-center max-w-[896px] min-w-[530px] relative shrink-0 w-[530px]" data-name="Container">
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
        <p className="leading-[1.2]">{`"I booked a weekend getaway here, and it was magical. The food was delicious, the rooms were spotless, and the environment was simply breathtaking."`}</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`Engr. Olanrewaju Adeyelore `}</p>
        <p className="leading-[20px] whitespace-pre">(Recognized Engineer)</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[186px] items-center max-w-[896px] min-w-[530px] relative shrink-0 w-[530px]" data-name="Container">
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
        <p className="leading-[1.2]">{`"If you're looking for a place to escape and recharge, this is it. The combination of nature, tranquility, and top-notch service is unmatched."`}</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`Past and Present `}</p>
        <p className="leading-[20px] whitespace-pre">(Chairmen of Thomas Estate)</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[186px] items-center max-w-[896px] min-w-[530px] relative shrink-0 w-[530px]" data-name="Container">
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
        <p className="leading-[1.2]">{`"Exceptional service! The team went above and beyond to make sure I was comfortable and satisfied. This place truly sets the standard for hospitality."`}</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#636669] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">DR CHRIS ONUOHA</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[166px] items-center max-w-[896px] min-w-[530px] relative shrink-0 w-[530px]" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[60px] items-start left-0 top-0" data-name="container">
      <Container30 />
      <Container34 />
      <Container38 />
      <Container42 />
      <Container46 />
      <Container50 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="h-[208px] relative shrink-0 w-full" data-name="testimonials">
      <Container29 />
    </div>
  );
}

function Container54() {
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
      <Container54 />
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

function Container55() {
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
      <Container55 />
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
      <HeroSectionArenaOfExcellence />
      <MatchScheduleSection />
      <PrivateLegacySection />
      <InquiryFormSection />
      <section aria-label="Testimonials" className="bg-[#f6f6f3] relative shrink-0 w-full" data-name="Section - Testimonials: Desktop">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[32px] items-center px-[80px] py-[100px] relative size-full">
            <Container28 />
            <Testimonials />
            <PageControl />
          </div>
        </div>
      </section>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[80px] relative shrink-0 w-[181px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="h-[70px] relative shrink-0 w-[158px]" data-name="Image@4x 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Fastline logo" className="absolute h-[115.79%] left-[-3.56%] max-w-none top-[-11.4%] w-[110.99%]" src={imgImage4X2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[16px] relative shrink-0 w-[740px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
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

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#737373] text-[14px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px] mb-0">{`© 2026 Fox & Hounds Lagos`}</p>
          <p className="leading-[16px]">NO 9, Lapai Close, Thomas Estate, Ajah, Lagos</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ccc] border-solid border-t inset-0 pointer-events-none" />
      <Container58 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="max-w-[672px] relative shrink-0 w-[672px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pt-[16px] relative size-full">
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-center p-[8px] relative shrink-0" data-name="Nav Link - desktop">
        <div className="flex flex-col font-['Noto_Serif:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#475569] text-[16px] tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="leading-[24px]">Home</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center p-[8px] relative shrink-0" data-name="Nav Link - desktop">
        <div className="flex flex-col font-['Noto_Serif:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#475569] text-[16px] tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="leading-[24px]">Rooms</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center p-[8px] relative shrink-0" data-name="Nav Link - desktop">
        <div className="flex flex-col font-['Noto_Serif:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#475569] text-[16px] tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="leading-[24px]">Restaurant</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center p-[8px] relative shrink-0" data-name="Nav Link - desktop">
        <div className="flex flex-col font-['Noto_Serif:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#475569] text-[16px] tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="leading-[24px]">Lounge</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center pb-[9px] pt-[8px] px-[8px] relative shrink-0" data-name="Nav Link - desktop">
        <div aria-hidden="true" className="absolute border-[rgba(2,130,191,0.3)] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0282bf] text-[16px] tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="leading-[24px]">Events</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center p-[8px] relative shrink-0" data-name="Nav Link - desktop">
        <div className="flex flex-col font-['Noto_Serif:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#475569] text-[16px] tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="leading-[24px]">Gallery</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0282bf] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fff8f1] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Book Now</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[48px] py-[4px] relative size-full">
          <div className="h-[75px] relative shrink-0 w-[170px]" data-name="logo">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="Fastline logo" className="absolute h-[115.79%] left-[-3.56%] max-w-none top-[-11.4%] w-[110.99%]" src={imgImage4X2} />
            </div>
          </div>
          <Container60 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Trigger() {
  return <div className="-translate-x-1/2 absolute h-[75px] left-[calc(50%-442px)] top-[1424px] w-[236px]" data-name="trigger" />;
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Desktop">
      <Main />
      <div className="bg-white content-stretch flex flex-col gap-[32px] items-center px-[80px] py-[40px] relative shrink-0 w-[1280px]" data-name="Footer">
        <Container56 />
        <Container57 />
        <Margin3 />
      </div>
      <div className="absolute h-[4149px] inset-0 pointer-events-none">
        <div className="backdrop-blur-[6px] bg-white content-stretch flex flex-col items-start pointer-events-auto sticky top-0" data-name="TopNavBar">
          <Container59 />
        </div>
      </div>
      <Trigger />
    </div>
  );
}