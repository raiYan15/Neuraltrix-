import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "./button";
import VerticalSlider from "./vertical-slider";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import { serviceCategories } from "@/data/services";
import ProductDropdown from "./product-dropdown";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const location = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]?.key ?? "ai");

  const activeNavLink = useMemo(() => navLinks.find((link) => location.pathname.startsWith(link.href)), [location.pathname]);

  useEffect(() => {
    setMobileDrawerOpen(false);
  }, [location.pathname]);

  const openMobileDrawer = () => {
    setMobileDrawerOpen(true);
    if (!serviceCategories.find((category) => category.key === activeCategory)) {
      setActiveCategory(serviceCategories[0]?.key ?? "ai");
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-5 sm:px-8 lg:px-10">
          <Link to="/" className="text-xl font-semibold tracking-[-0.04em] text-slate-950">
            NeuralTrix AI
          </Link>

          <div className="hidden flex-1 items-center justify-center lg:flex">
            <NavigationMenu className="z-50">
              <NavigationMenuList className="items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 rounded-full bg-transparent px-4 text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-950 data-[state=open]:bg-white data-[state=open]:text-slate-950">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!left-1/2 !top-full !-translate-x-1/2 !mt-2 !w-auto !border-0 !bg-transparent !p-0 !shadow-none !overflow-visible">
                    <ProductDropdown />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navLinks.map((link) => {
                  const active = activeNavLink?.href === link.href;

                  return (
                    <NavigationMenuItem key={link.label}>
                      <Button
                        asChild
                        variant="ghost"
                        className={`rounded-full px-4 text-sm font-medium ${active ? "bg-white text-slate-950 shadow-sm" : "text-slate-600 hover:text-slate-950"}`}
                      >
                        <Link to={link.href}>{link.label}</Link>
                      </Button>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="hidden rounded-full border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50 lg:inline-flex"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button asChild className="rounded-full bg-[#0B1B3D] px-5 text-sm font-semibold text-white hover:bg-[#0B1B3D]/90">
              <Link to="/about#contact">Talk to AI Experts</Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full lg:hidden" onClick={openMobileDrawer} aria-label="Open navigation menu">
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </header>

      <VerticalSlider
        open={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        categories={serviceCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        navLinks={navLinks}
      />
    </>
  );
}