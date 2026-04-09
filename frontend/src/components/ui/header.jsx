import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Building2, Briefcase, FileText, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { servicesSections } from "@/data/servicesData";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const companyItems = [
  {
    title: "About Neuraltrix",
    description: "Our vision, leadership, and product philosophy.",
    href: "/about",
    icon: Building2,
  },
  {
    title: "Careers",
    description: "Join the team building AI-first platforms.",
    href: "/careers",
    icon: Briefcase,
  },
  {
    title: "Case Studies",
    description: "See outcomes delivered across industries.",
    href: "/case-studies",
    icon: FileText,
  },
  {
    title: "Contact Us",
    description: "Talk with experts about your roadmap.",
    href: "/contact",
    icon: Users,
  },
];

export default function Header() {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const servicesScrollRef = useRef(null);
  const servicesTrackRef = useRef(null);
  const isDraggingThumbRef = useRef(false);
  const companyScrollRef = useRef(null);
  const [menuValue, setMenuValue] = useState("");
  const [thumbHeight, setThumbHeight] = useState(20);
  const [thumbTop, setThumbTop] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuValue("");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleServiceNavigate = (slug) => {
    navigate(`/services/${slug}`);
    setMenuValue("");
    setMobileOpen(false);
  };

  const handleLinkNavigate = (href) => {
    navigate(href);
    setMenuValue("");
  };

  const slugify = (value) =>
    value
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  const syncThumbFromScroll = () => {
    const el = servicesScrollRef.current;
    if (!el) return;

    if (el.scrollHeight <= el.clientHeight) {
      setThumbHeight(100);
      setThumbTop(0);
      return;
    }

    const ratio = el.clientHeight / el.scrollHeight;
    const nextHeight = Math.max(ratio * 100, 14);
    const scrollRatio = el.scrollTop / (el.scrollHeight - el.clientHeight);
    const nextTop = scrollRatio * (100 - nextHeight);

    setThumbHeight(nextHeight);
    setThumbTop(nextTop);
  };

  const updateScrollFromPointer = (clientY) => {
    const el = servicesScrollRef.current;
    const track = servicesTrackRef.current;
    if (!el || !track) return;

    const rect = track.getBoundingClientRect();
    const offsetY = Math.min(Math.max(clientY - rect.top, 0), rect.height);
    const percentage = rect.height === 0 ? 0 : offsetY / rect.height;
    el.scrollTop = percentage * (el.scrollHeight - el.clientHeight);
  };

  const handleDragStart = (event) => {
    event.preventDefault();
    isDraggingThumbRef.current = true;
  };

  const handleTrackMouseDown = (event) => {
    updateScrollFromPointer(event.clientY);
    isDraggingThumbRef.current = true;
  };

  useEffect(() => {
    const onMouseMove = (event) => {
      if (!isDraggingThumbRef.current) return;
      updateScrollFromPointer(event.clientY);
    };

    const onMouseUp = () => {
      isDraggingThumbRef.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  useEffect(() => {
    if (servicesScrollRef.current) {
      servicesScrollRef.current.scrollTop = 0;
    }
    syncThumbFromScroll();
  }, [menuValue]);

  const showThumb = thumbHeight < 99;

  return (
    <header className="sticky top-0 z-30 pt-3" data-testid="header">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative flex h-20 items-center justify-between rounded-[1.75rem] border border-white/60 bg-[#D5EAF2]/90 px-4 shadow-[0_6px_20px_rgba(15,23,42,0.08)] backdrop-blur-md sm:px-5 md:px-6">
          <div className="flex min-w-0 items-center gap-6">
            <Link to="/" className="shrink-0" data-testid="header-logo">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#0B1B3D] text-lg font-bold text-white">
                N
              </span>
            </Link>

            <nav className="hidden items-center lg:flex" ref={menuRef}>
              <div className="flex items-center gap-6">
              <NavigationMenu
                withViewport={false}
                value={menuValue}
                onValueChange={setMenuValue}
                className="static z-40 flex-none max-w-none"
              >
                <NavigationMenuList className="space-x-0">
                  <NavigationMenuItem value="services" className="static">
                <NavigationMenuTrigger
                  onClick={() => setMenuValue((prev) => (prev === "services" ? "" : "services"))}
                  className={cn(
                    "h-auto rounded-full px-4 py-2.5 text-sm font-semibold transition-all",
                    menuValue === "services"
                      ? "bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]"
                      : "bg-transparent text-[#334155] hover:bg-white/60 hover:text-[#0B1B3D]"
                  )}
                >
                  Services
                </NavigationMenuTrigger>

                <NavigationMenuContent className="absolute left-0 right-0 top-full z-50 mt-3 flex justify-center px-2 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out">
                  <div className="animate-in zoom-in-95 fade-in duration-200">
                    <div className="h-[360px] w-[1000px] max-w-[95vw] overflow-hidden rounded-xl border border-slate-700/60 bg-[#0F172A]/95 px-4 py-5 text-slate-100 shadow-2xl backdrop-blur-xl">
                      <div className="relative h-full">
                        <div
                          ref={servicesScrollRef}
                          onScroll={syncThumbFromScroll}
                          className="h-full overflow-y-scroll pr-4 scroll-smooth shadow-inner [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                        >
                          <div className="ml-0 grid min-h-[500px] grid-cols-4 gap-6 pl-0">
                            {servicesSections.map((section, index) => (
                              <div
                                key={section.title}
                                className={cn(
                                  "flex flex-col items-start gap-3",
                                  index !== servicesSections.length - 1 && "border-r border-slate-700/70 pr-3"
                                )}
                              >
                                <h3 className="text-lg font-semibold text-sky-400">{section.title}</h3>

                                <div className="flex flex-col gap-3">
                                  {section.items.map((item) => (
                                    <button
                                      key={item}
                                      type="button"
                                      onClick={() => handleServiceNavigate(slugify(item))}
                                      className="text-left text-[15px] leading-7 text-slate-200 transition hover:text-sky-300 md:text-base"
                                    >
                                      {item}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="absolute right-1 top-0 h-full w-[8px]">
                          <div
                            ref={servicesTrackRef}
                            className="bg-white/20 h-full rounded-full relative"
                            onMouseDown={handleTrackMouseDown}
                          >
                            <div
                              className="absolute w-full bg-white/70 rounded-full cursor-pointer transition hover:bg-white"
                              style={{
                                height: `${thumbHeight}%`,
                                top: `${thumbTop}%`,
                                display: showThumb ? "block" : "none",
                              }}
                              onMouseDown={handleDragStart}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem value="company" className="static">
                <NavigationMenuTrigger
                  onClick={() => setMenuValue((prev) => (prev === "company" ? "" : "company"))}
                  className={cn(
                    "h-auto rounded-full px-4 py-2.5 text-sm font-semibold transition-all",
                    menuValue === "company"
                      ? "bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]"
                      : "bg-transparent text-[#334155] hover:bg-white/60 hover:text-[#0B1B3D]"
                  )}
                >
                  Company
                </NavigationMenuTrigger>

                <NavigationMenuContent className="absolute left-0 right-0 top-full z-50 mt-3 flex justify-center px-2 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out">
                  <div className="animate-in zoom-in-95 fade-in duration-200">
                    <div className="h-[420px] w-[900px] max-w-[95vw] overflow-hidden rounded-xl border border-slate-700/60 bg-[#0F172A]/95 p-6 text-slate-100 shadow-2xl backdrop-blur-xl">
                      <div className="flex h-full flex-col">
                        <h3 className="sticky top-0 z-10 mb-4 bg-[#0F172A]/95 py-1 text-sm font-semibold text-slate-100 backdrop-blur-sm">
                          Company
                        </h3>
                        <div
                          ref={companyScrollRef}
                          className="overflow-y-auto pr-2 scroll-smooth [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-500/40 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1.5"
                        >
                          <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
                            {companyItems.map((item) => {
                              const Icon = item.icon;

                              return (
                                <button
                                  key={item.title}
                                  type="button"
                                  onClick={() => handleLinkNavigate(item.href)}
                                  className="flex items-start gap-3 rounded-lg p-2 text-left transition cursor-pointer hover:bg-slate-800/80"
                                >
                                  <div className="size-10 shrink-0 flex items-center justify-center rounded-md border border-slate-600 bg-slate-900/70">
                                    <Icon className="size-5 text-slate-200" />
                                  </div>
                                  <div className="flex flex-col">
                                    <p className="text-sm font-medium leading-none text-slate-100">{item.title}</p>
                                    <p className="mt-1 text-xs leading-snug text-slate-400">{item.description}</p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center gap-6">
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
              </div>
            </div>
          </nav>
          </div>

          <div className="flex items-center gap-3">
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

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="rounded-full border border-slate-300 bg-white/70 text-slate-700 hover:bg-white lg:hidden"
              >
                Services
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-none bg-[#0F172A] text-slate-100">
              <SheetTitle className="text-white">Services</SheetTitle>
              <div className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  {servicesSections.map((section) => (
                    <AccordionItem key={section.title} value={section.title} className="border-slate-700">
                      <AccordionTrigger className="text-base font-semibold text-slate-100 hover:no-underline">
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid gap-2 pb-2">
                          {section.items.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => handleServiceNavigate(slugify(item))}
                              className="rounded-md border border-slate-700 bg-slate-900/60 p-3 text-left hover:bg-slate-800"
                            >
                              <p className="text-sm font-medium text-white">{item}</p>
                            </button>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </div>
    </header>
  );
}