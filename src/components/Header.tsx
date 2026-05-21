"use client";
import { PhoneCall, ShieldCheck, Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map(i => i.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <header className={`fixed left-0 top-0 z-50 w-full border-b border-slate-200 transition-all duration-400 ${scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur"}`}>
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#home" onClick={(e) => handleNav(e, "#home")} className="flex items-center gap-3 transition hover:opacity-80">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#061B36] text-[#C99A2E]">
            <ShieldCheck size={26} />
          </div>
          <div>
            <p className="text-xl font-bold leading-none text-[#061B36]">安心貸顧問</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">Safe Loan Consultant</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className={`relative text-sm font-semibold transition-colors duration-200 ${isActive ? "text-[#C99A2E]" : "text-slate-700 hover:text-[#C99A2E]"}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#C99A2E]" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <div className="flex items-center gap-2 text-[#061B36]">
            <PhoneCall size={18} />
            <div>
              <p className="text-lg font-bold leading-none">0800-123-456</p>
              <p className="mt-1 text-xs text-slate-500">服務時間 09:00-21:00</p>
            </div>
          </div>
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="animate-pulse-gold rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-green-700"
          >
            LINE 線上諮詢
          </a>
        </div>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="animate-slideDown border-t border-slate-100 bg-white px-6 pb-6 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="block py-3 text-sm font-semibold text-slate-700 hover:text-[#C99A2E]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
