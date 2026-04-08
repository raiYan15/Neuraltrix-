import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isActivePath = useMemo(
    () => (href) => {
      if (href === "/") return location.pathname === "/";
      return location.pathname.startsWith(href);
    },
    [location.pathname]
  );

  return (
    <header
      data-testid="header"
      className="sticky top-0 z-50 px-4 pt-3"
    >
      <div className="max-w-[1280px] mx-auto rounded-[2rem] bg-[#D5EAF2]/90 backdrop-blur-md border border-white/50 shadow-[0_6px_20px_rgba(15,23,42,0.08)] px-4 sm:px-5 md:px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          data-testid="header-logo"
          className="shrink-0"
        >
          <span className="w-12 h-12 rounded-full bg-[#0B1B3D] border border-white/30 flex items-center justify-center text-white text-lg font-bold">
            N
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className={`px-5 py-2.5 rounded-full text-[1.05rem] font-semibold tracking-tight transition-all ${
                isActivePath(l.href)
                  ? "bg-[#0B1B3D] text-white shadow-[0_4px_14px_rgba(11,27,61,0.25)]"
                  : "text-[#334155] hover:text-[#0B1B3D] hover:bg-white/60"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button
            data-testid="header-cta-button"
            asChild
            className="ml-2 rounded-full bg-[#3065E8] px-8 py-6 text-white text-[1.05rem] font-semibold hover:bg-[#2657d3]"
          >
            <Link to={location.pathname === "/" ? "/#contact" : "/contact"}>Get Started</Link>
          </Button>
        </nav>

        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden p-2 text-[#0B1B3D]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden mt-2 max-w-[1280px] mx-auto rounded-3xl bg-white border border-slate-200 px-6 pb-6"
        >
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-slate-700 hover:text-[#0B1B3D] border-b border-slate-100"
            >
              {l.label}
            </Link>
          ))}
          <Button
            data-testid="mobile-cta-button"
            asChild
            className="w-full mt-4 bg-[#3065E8] text-white hover:bg-[#2657d3] rounded-full text-sm font-semibold"
          >
            <Link to={location.pathname === "/" ? "/#contact" : "/contact"} onClick={() => setMobileOpen(false)}>
              Get Started
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
