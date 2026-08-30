import imgTeam from "figma:asset/team-outdoor-lounge.png";
import { FadeIn } from "./animations/FadeIn";

// SVG paths from the design
const LEAF_PATH =
  "M11.8509 22.9325C10.4406 22.7615 9.03996 22.3862 7.64897 21.8067C6.25798 21.2271 5.008 20.3897 3.89903 19.2943C2.79007 18.199 1.88101 16.8132 1.17188 15.1369C0.462748 13.4606 0.0801341 11.4438 0.0240402 9.08647L0 7.95667L1.10576 7.98071C2.0721 8.00475 3.1358 8.18224 4.29686 8.51317C5.45792 8.84411 6.49197 9.29644 7.39902 9.87016C7.5769 8.19068 8.05445 6.44629 8.83169 4.637C9.60893 2.82771 10.5432 1.28205 11.6346 0C12.7259 1.28205 13.6602 2.83172 14.4374 4.64902C15.2146 6.46633 15.6922 8.21472 15.8701 9.8942C16.7531 9.34452 17.7671 8.89419 18.9121 8.54322C20.0572 8.19226 21.1329 8.00475 22.1393 7.98071L23.2691 7.95667L23.2451 9.11051C23.213 11.2435 22.8965 13.1061 22.2956 14.6982C21.6946 16.2903 20.8837 17.6421 19.8629 18.7534C18.8421 19.8648 17.649 20.7602 16.2836 21.4397C14.9182 22.1192 13.4407 22.6168 11.8509 22.9325ZM11.8125 21.0191C11.5833 17.5608 10.5572 14.9462 8.73433 13.1754C6.91141 11.4045 4.64579 10.3108 1.93745 9.89413C2.16662 13.4566 3.22391 16.1129 5.10933 17.8629C6.99475 19.6129 9.22912 20.665 11.8125 21.0191ZM13.6874 20.5287C14.5624 20.2387 15.4326 19.838 16.298 19.3268C17.1634 18.8156 17.9535 18.1425 18.6682 17.3076C19.3829 16.4726 19.9815 15.4486 20.4639 14.2355C20.9462 13.0223 21.2355 11.5752 21.3316 9.89413C19.3413 10.1858 17.5824 10.8669 16.0552 11.9374C14.528 13.0079 13.3925 14.3445 12.6489 15.947C12.8989 16.6137 13.1085 17.3148 13.2776 18.0504C13.4466 18.786 13.5832 19.6121 13.6874 20.5287Z";

const FOOD_PATH =
  "M3.25 2.75V9.75C3.25 10.5456 3.56607 11.3087 4.12868 11.8713C4.69129 12.4339 5.45435 12.75 6.25 12.75H7.25M7.25 12.75H8.25C9.04565 12.75 9.80871 12.4339 10.3713 11.8713C10.9339 11.3087 11.25 10.5456 11.25 9.75V2.75M7.25 12.75V2.75M7.25 12.75V21.25M20.75 21.25V14.75M20.75 14.75V3.286C20.75 3.14384 20.6935 3.00751 20.593 2.90699C20.4925 2.80647 20.3562 2.75 20.214 2.75C19.0301 2.75 17.8946 3.22031 17.0575 4.05748C16.2203 4.89464 15.75 6.03007 15.75 7.214V12.75C15.75 13.2804 15.9607 13.7891 16.3358 14.1642C16.7109 14.5393 17.2196 14.75 17.75 14.75H20.75Z";

const OUTDOOR_PATH1 =
  "M21.8397 10.344L20.9138 14.4616H18.511C17.2986 14.4616 16.3066 15.344 16.3066 16.4224V20.344H18.511V16.4224H20.7154V20.344H22.9198V15.5401L24 10.7362L21.8397 10.3538V10.344ZM7.48898 14.4616H5.08617L4.16032 10.344L2 10.7263L3.08016 15.5303V20.3342H5.28457V16.4126H7.48898V20.3342H9.69339V16.4126C9.69339 15.3342 8.7014 14.4518 7.48898 14.4518V14.4616Z";

const OUTDOOR_PATH2 =
  "M20.8867 14.4V12H14.3138V8.4H23.6867C23.9062 8.4002 24.1223 8.35013 24.3151 8.25435C24.5079 8.15858 24.6713 8.02017 24.7904 7.85181C24.9094 7.68345 24.9802 7.49052 24.9964 7.29069C25.0126 7.09085 24.9736 6.89051 24.883 6.708C22.898 2.628 18.2313 0 12.9993 0C7.76729 0 3.10057 2.64 1.11557 6.708C1.02567 6.89056 0.987226 7.09074 1.00373 7.29032C1.02023 7.4899 1.09116 7.68255 1.21006 7.85072C1.32895 8.01889 1.49204 8.15724 1.68447 8.25317C1.87691 8.34911 2.09257 8.39958 2.31183 8.4H11.6847V12H5.11186V14.4H11.6847V24H14.3138V14.4H20.8867ZM12.9993 2.4C16.404 2.4 19.4932 3.768 21.3862 6H4.61233C6.49216 3.768 9.59454 2.4 12.9993 2.4Z";

const AWARD_STAR_PATH =
  "M1.33261 11.653L2.68652 11.5683C4.29639 11.468 5.91199 11.6189 7.47609 12.0156L9.74565 12.591C10.3476 12.744 10.8747 13.1102 11.2304 13.6226C11.5861 14.135 11.7466 14.7593 11.6826 15.3812C11.53 16.8887 10.137 17.9429 8.65783 17.6788L6.49587 17.2887L14.1204 18.666L22.0189 16.7783C22.633 16.6328 23.2792 16.7339 23.8205 17.0602C24.3618 17.3865 24.7557 17.9123 24.9185 18.5261C25.2315 19.7143 24.6191 20.9498 23.4902 21.4129L17.1707 23.9962C14.0982 25.2531 10.675 25.3323 7.54848 24.2189L1 21.8839M18.1294 1.57394C18.1975 1.40437 18.3143 1.25914 18.4649 1.15689C18.6155 1.05463 18.7929 1 18.9746 1C19.1562 1 19.3337 1.05463 19.4843 1.15689C19.6349 1.25914 19.7517 1.40437 19.8198 1.57394L20.9683 4.39766L24.085 4.67353C24.8989 4.74447 25.2159 5.77701 24.5839 6.29722L22.7311 7.83027C22.6017 7.93815 22.5041 8.07967 22.4489 8.23946C22.3937 8.39926 22.383 8.57123 22.418 8.7367L23.0324 11.5979C23.071 11.7768 23.0557 11.9634 22.9882 12.1335C22.9208 12.3036 22.8044 12.4495 22.654 12.5524C22.5036 12.6554 22.3261 12.7107 22.1442 12.7113C21.9624 12.7118 21.7845 12.6576 21.6335 12.5555L18.9746 10.7663L16.3157 12.5595C16.1645 12.6618 15.9864 12.7161 15.8043 12.7155C15.6222 12.715 15.4444 12.6595 15.2939 12.5562C15.1434 12.453 15.027 12.3067 14.9598 12.1362C14.8926 11.9658 14.8776 11.779 14.9167 11.5998L15.5311 8.7367C15.5657 8.57152 15.5549 8.39996 15.4997 8.24055C15.4445 8.08114 15.3471 7.93995 15.218 7.83224L13.3652 6.29919C13.2248 6.18353 13.1218 6.02831 13.0695 5.85338C13.0171 5.67845 13.0178 5.49178 13.0714 5.31723C13.1249 5.14268 13.229 4.98819 13.3702 4.87352C13.5114 4.75885 13.6834 4.68922 13.8641 4.67353L16.9809 4.39766L18.1294 1.57394Z";

// The star/award badge icon (p2dd77680) for the image overlay badge
const BADGE_STAR_PATH =
  "M65.5738 40.5431L71.0286 35.8556L74.3603 36.1441L68.2507 41.4344L70.0565 49.3555L67.2267 47.6364L65.5738 40.5431ZM62.3806 30.6461L60.8633 27.0865L62.1411 24L65.0574 30.897L62.3806 30.6461ZM52.4431 44.3191L57.1681 41.4691L61.8931 44.3566L60.6556 38.9566L64.8181 35.3566L59.3431 34.8691L57.1681 29.7691L54.9931 34.8316L49.5181 35.3191L53.6806 38.9566L52.4431 44.3191ZM49.0307 49.0238L51.1797 39.77L44 33.548L53.473 32.7259L57.1681 24L60.8633 32.7259L70.3363 33.548L63.1565 39.77L65.3056 49.0238L57.1681 44.1142L49.0307 49.0238Z";

const features = [
  {
    id: "comfort",
    icon: (
      <svg viewBox="0 0 24 23" fill="none" className="w-[22px] h-[22px]">
        <path d={LEAF_PATH} fill="#0282BF" />
      </svg>
    ),
    title: "Refined Comfort & Boutique Experience",
    description:
      "Enjoy a carefully curated environment designed for relaxation, where every detail, from our rooms to our lounge, is tailored to your comfort and peace of mind.",
  },
  {
    id: "dining",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d={FOOD_PATH} stroke="#0282BF" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
    title: "Dining That Delivers",
    description:
      "From local favourites to satisfying continental dishes, our restaurant offers a well-rounded dining experience perfect for both casual meals and special moments.",
  },
  {
    id: "lounge",
    icon: (
      <svg viewBox="0 0 25 24" fill="none" className="w-[25px] h-6">
        <path d={OUTDOOR_PATH1} fill="#0282BF" />
        <path d={OUTDOOR_PATH2} fill="#0282BF" />
      </svg>
    ),
    title: "A Space to Unwind & Connect",
    description:
      "Whether you're meeting friends, hosting informal business conversations, or watching live matches, our lounge provides the perfect setting to relax and socialize.",
  },
  {
    id: "trusted",
    icon: (
      <svg viewBox="0 0 26 26" fill="none" className="w-[26px] h-[26px]">
        <defs>
          <clipPath id="clip-star">
            <rect fill="white" height="26" width="26" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip-star)">
          <path d={AWARD_STAR_PATH} stroke="#0282BF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    ),
    title: "Trusted by Lagos's Notable Crowd",
    description:
      "A preferred destination for professionals, creatives and influencers, Fox & Hounds Lagos combines quality service with an atmosphere people love to return to.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-white w-full" aria-label="Why choose us">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-20 lg:py-[100px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <FadeIn direction="left" className="w-full lg:flex-1 flex flex-col gap-4">
            {/* Label */}
            <span
              className="text-[#0282bf] text-xs tracking-[2.4px] uppercase"
              style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500 }}
            >
              Why choose us
            </span>

            {/* Heading */}
            <h2
              className="text-[#131313]"
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.2,
              }}
            >
              We are{" "}
              <span className="text-[#0282bf]">excellence</span>
            </h2>

            {/* Features */}
            <div className="flex flex-col gap-6 pt-4">
              {features.map((feature) => (
                <div key={feature.id} className="flex gap-6 items-start">
                  <div className="shrink-0 mt-1 w-7 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <h3
                      className="text-[#303330]"
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 600,
                        fontSize: "18px",
                        lineHeight: "28px",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-[#4d4d4d] text-base"
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 400,
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: Image with badge */}
          <FadeIn direction="right" className="w-full lg:shrink-0 lg:w-[528px] flex items-center justify-center">
            {/* Outer wrapper: relative, no overflow-hidden so badge shows */}
            <div className="relative w-full max-w-[528px]">
              <img
                src={imgTeam}
                alt="Guests gathered in an outdoor lounge"
                className="w-full lg:w-[528px] lg:h-[528px] h-[300px] sm:h-[400px] object-cover rounded-[12px] block"
              />
              {/* Blue award badge - positioned top-left corner */}
              <div
                className="absolute bg-[#0282bf] rounded-xl flex items-center justify-center shadow-xl"
                style={{
                  top: "-16px",
                  left: "-16px",
                  width: "78px",
                  height: "73px",
                }}
              >
                <svg
                  viewBox="44 22 28 30"
                  fill="none"
                  className="w-9 h-9"
                >
                  <path d={BADGE_STAR_PATH} fill="white" />
                </svg>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}