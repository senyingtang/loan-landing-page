"use client";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

function MarqueeTrack() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <div className="mt-14 overflow-hidden">
      <div
        className="flex gap-6"
        style={{
          animation: "marquee 28s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="w-72 shrink-0 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <div className="mb-4 flex gap-1 text-[#C99A2E]">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="leading-7 text-slate-600">「{item.text}」</p>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="font-black text-[#061B36]">{item.name}</p>
              <p className="mt-1 text-sm text-slate-500">{item.role}</p>
              <p className="mt-3 inline-flex rounded-full bg-[#F8F2E5] px-3 py-1 text-xs font-bold text-[#9B6F11]">
                使用服務：{item.service}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="container-page">
        <AnimateIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">客戶真實評價</h2>
            <p className="section-subtitle">來自不同背景客戶的真實回饋，讓您申辦更安心。</p>
          </div>
        </AnimateIn>
        <MarqueeTrack />
      </div>
    </section>
  );
}
