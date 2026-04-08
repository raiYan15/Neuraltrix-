import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import VerticalSlider from "@/components/ui/vertical-slider";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Company", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [sliderOpen, setSliderOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 px-4 pt-3" data-testid="header">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between rounded-[1.75rem] border border-white/60 bg-[#D5EAF2]/90 px-4 shadow-[0_6px_20px_rgba(15,23,42,0.08)] backdrop-blur-md sm:px-5 md:px-6">
        <Link to="/" className="shrink-0" data-testid="header-logo">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#0B1B3D] text-lg font-bold text-white">
            N
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <button
            type="button"
            onClick={() => setSliderOpen(true)}
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-all",
              sliderOpen ? "bg-[#0B1B3D] text-white" : "text-[#334155] hover:bg-white/60 hover:text-[#0B1B3D]"
            )}
            aria-expanded={sliderOpen}
            aria-controls="product-slider"
          >
            Product
            <ChevronDown className="h-4 w-4" />
          </button>

          {navItems.map((item) => {
            const active = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "rounded-full px-4 py-2.5 text-sm font-semibold transition-all",
                  active ? "bg-[#0B1B3D] text-white" : "text-[#334155] hover:bg-white/60 hover:text-[#0B1B3D]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="hidden rounded-full border-slate-300 bg-white/70 text-slate-700 hover:bg-white lg:inline-flex"
          >
            <Link to="/contact">Talk to Sales</Link>
          </Button>

          <Button asChild className="rounded-full bg-[#3065E8] px-5 text-white hover:bg-[#2657d3]">
            <Link to={location.pathname === "/" ? "/#contact" : "/contact"}>
              <Sparkles className="mr-2 h-4 w-4" />
              Get Started
            </Link>
          </Button>

          <Button
            variant="ghost"
            className="rounded-full border border-slate-300 bg-white/70 text-slate-700 hover:bg-white lg:hidden"
            onClick={() => setSliderOpen(true)}
          >
            Product
          </Button>
        </div>
      </div>

      <VerticalSlider open={sliderOpen} onClose={() => setSliderOpen(false)} />
    </header>
  );
}