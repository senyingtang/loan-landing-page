"use client";
import { whyChooseUs } from "@/lib/data";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rowRef.current) return;
    const items = rowRef.current.querySelectorAll(".why-item");
    const circles = rowRef.current.querySelectorAll(".why-circle");

    gsap.fromTo(items,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: rowRef.current, start: "top 80%", once: true },
      }
    );

    circles.forEach((circle) => {
      const len = (circle as SVGCircleElement).getTotalLength?.() ?? 160;
      gsap.set(circle, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(circle, {
        strokeDashoffset: 0, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: rowRef.current, start: "top 80%", once: true },
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="bg-[#061B36] py-20 text-white">
      <div className="container-page">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black md:text-4xl" style={{ fontFamily: "var(--font-noto-serif-tc), serif" }}>
            為什麼選擇我們
          </h2>
          <p className="mt-3 text-slate-300">從諮詢到申請，每一步都讓您安心有保障。</p>
        </div>

        <div ref={rowRef}>
          {/* 桌機版：5欄 */}
          <div className="hidden md:grid md:grid-cols-5 md:gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="why-item relative text-center md:px-4" style={{ opacity: 0 }}>
                  {index !== 0 && (
                    <div className="absolute left-0 top-4 hidden h-20 w-px bg-white/20 md:block" />
                  )}
                  <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center">
                    <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 64 64">
                      <circle className="why-circle" cx="32" cy="32" r="28" fill="none" stroke="#C99A2E" strokeWidth="1.5" />
                    </svg>
                    <Icon className="text-[#D6A73B]" size={28} />
                  </div>
                  <h3 className="text-lg font-black text-[#D6A73B]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* 手機版：直列條目帶數字 */}
          <div className="overflow-hidden rounded-2xl border border-white/10 md:hidden">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              const num = String(index + 1).padStart(2, "0");
              return (
                <div
                  key={item.title}
                  className={`why-item flex items-center gap-4 bg-white/[0.04] px-5 py-4 ${
                    index !== whyChooseUs.length - 1 ? "border-b border-white/[0.08]" : ""
                  }`}
                  style={{ opacity: 0 }}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C99A2E]/15">
                    <span
                      className="text-base font-black text-[#C99A2E]"
                      style={{ fontFamily: "var(--font-noto-serif-tc), serif" }}
                    >
                      {num}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-black text-[#F6D58A]">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{item.text}</p>
                  </div>
                  <Icon className="shrink-0 text-[#C99A2E]/40" size={18} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
