import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { FooterSection } from "./FooterSection";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <div className="min-h-screen bg-white w-full">
      <ScrollToTop />
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
}
