import { Link } from "react-router";
import imgLogo from "figma:asset/logo.png";

const navLinks = [
  { label: "Rooms", href: "/rooms", external: false },
  { label: "Restaurant", href: "/restaurant", external: false },
  { label: "Lounge", href: "/lounge", external: false },
  { label: "Contact", href: "/contact", external: false },
  { label: "Instagram", href: "https://www.instagram.com/foxandhoundslagos/", external: true },
];

export function FooterSection() {
  return (
    <footer className="bg-white w-full" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-10 flex flex-col gap-8 items-center">
        {/* Logo */}
        <div className="h-[70px] w-[158px] relative overflow-hidden">
          <img
            src={imgLogo}
            alt="Fox & Hounds Lagos"
            className="absolute object-contain"
            style={{
              height: "115.79%",
              left: "-3.56%",
              top: "-11.4%",
              width: "110.99%",
              maxWidth: "none",
            }}
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a1a1a] text-xs tracking-[1.2px] uppercase opacity-80 hover:opacity-100 hover:text-[#0282bf] transition-all"
                style={{ fontWeight: 600 }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-[#1a1a1a] text-xs tracking-[1.2px] uppercase opacity-80 hover:opacity-100 hover:text-[#0282bf] transition-all"
                style={{ fontWeight: 600 }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Divider + Copyright */}
        <div className="w-full max-w-[672px] flex flex-col gap-4 items-center pt-4 border-t border-[#ccc]">
          <div
            className="text-[#737373] text-sm tracking-[1.2px] uppercase text-center"
            style={{ fontWeight: 600 }}
          >
            <p>© 2026 Fox &amp; Hounds Lagos</p>
            <p>NO 9, Lapai Close, Thomas Estate, Ajah, Lagos</p>
          </div>
        </div>
      </div>
    </footer>
  );
}