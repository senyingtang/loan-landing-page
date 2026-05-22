"use client";
import { useEffect, useRef } from "react";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    async function initGsap() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const items = itemRefs.current.filter(Boolean);
      ctx = gsap.context(() => {
        gsap.fromTo(
          items,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
              once: true,
            },
          }
        );
      });
    }

    initGsap();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#061B36] py-20 text-white">
      <div className="container-page">
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-black md:text-4xl"
            style={{ fontFamily: "var(--font-noto-serif-tc), serif" }}
          >
            為什麼選擇我們
          </h2>
          <p className="mt-3 text-slate-300">從諮詢到申請，每一步都讓您安心有保障。</p>
        </div>
        <div className="grid gap-8 md:grid-cols-5">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                ref={(el) => { itemRefs.current[index] = el; }}
                className="relative text-center opacity-0 md:px-4"
              >
                {index !== 0 && (
                  <div className="absolute left-0 top-4 hidden h-20 w-px bg-white/20 md:block" />
                )}
                <Icon className="mx-auto text-[#D6A73B]" size={36} />
                <h3 className="mt-5 text-lg font-black text-[#D6A73B]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
