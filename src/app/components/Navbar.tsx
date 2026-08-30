import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import imgLogo from "figma:asset/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Rooms", path: "/rooms" },
  { label: "Restaurant", path: "/restaurant" },
  { label: "Lounge", path: "/lounge" },
  { label: "Events", path: "/events" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 shadow-sm"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="h-[60px] w-[140px] relative overflow-hidden shrink-0 block">
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
        </Link>

        {/* Desktop Nav Links */}
        <div
          className="hidden lg:flex items-center gap-8"
          style={{ fontFamily: "'Noto Serif', serif" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`flex flex-col items-center px-2 py-2 relative cursor-pointer ${
                isActive(link.path) ? "border-b border-[rgba(2,130,191,0.3)]" : ""
              }`}
            >
              <span
                className={`text-base tracking-[-0.4px] whitespace-nowrap transition-colors ${
                  isActive(link.path)
                    ? "font-bold text-[#0282bf]"
                    : "font-medium text-[#475569] hover:text-[#0282bf]"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Book Now Button (Desktop) */}
        <Link
          to="/contact"
          className="hidden lg:block bg-[#0282bf] text-[#fff8f1] font-bold text-xs tracking-[1.2px] uppercase px-6 py-2 rounded-[2px] cursor-pointer hover:bg-[#0270a8] transition-colors"
        >
          Book Now
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-[#131313] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-5 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`font-medium text-base cursor-pointer ${
                isActive(link.path) ? "text-[#0282bf]" : "text-[#475569]"
              }`}
              style={{ fontFamily: "'Noto Serif', serif" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#0282bf] text-[#fff8f1] font-bold text-xs tracking-[1.2px] uppercase px-6 py-2 rounded-[2px] cursor-pointer self-start mt-1 hover:bg-[#0270a8] transition-colors"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}