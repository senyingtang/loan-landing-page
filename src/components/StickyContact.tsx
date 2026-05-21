"use client";
import { PhoneCall, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function StickyContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className="fixed bottom-8 right-6 z-50 flex flex-col gap-3 transition-all duration-500"
      style={{ opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(20px)", pointerEvents: show ? "auto" : "none" }}
    >
      <a
        href="https://line.me/R/ti/p/@safeloan"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-bold text-white shadow-xl transition hover:bg-green-700 hover:scale-105 hover:pr-6"
      >
        <MessageCircle size={20} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-xs">LINE 諮詢</span>
      </a>
      <a
        href="tel:0800123456"
        className="group flex items-center gap-2 rounded-full bg-[#061B36] px-5 py-3 font-bold text-white shadow-xl transition hover:bg-[#0B2A4A] hover:scale-105 hover:pr-6"
      >
        <PhoneCall size={20} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-xs">立即來電</span>
      </a>
    </div>
  );
}
