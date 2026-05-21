"use client";
import { testimonials } from "@/lib/data";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="container-page">
        <AnimateIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">客戶真實評價</h2>
            <p className="section-subtitle">來自不同背景客戶的真實回饋，讓您申辦更安心。</p>
          </div>
        </AnimateIn>

        {/* 桌機版：四欄並排 */}
        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, i) => (
            <AnimateIn key={item.name} delay={i * 0.1} direction="up">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex gap-1 text-[#C99A2E]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="min-h-[112px] leading-7 text-slate-600">「{item.text}」</p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="font-black text-[#061B36]">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.role}</p>
                  <p className="mt-3 inline-flex rounded-full bg-[#F8F2E5] px-3 py-1 text-xs font-bold text-[#9B6F11]">
                    使用服務：{item.service}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* 手機版：單張切換 */}
        <div className="mt-10 md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-4 flex gap-1 text-[#C99A2E]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="leading-7 text-slate-600">「{testimonials[current].text}」</p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="font-black text-[#061B36]">{testimonials[current].name}</p>
                  <p className="mt-1 text-sm text-slate-500">{testimonials[current].role}</p>
                  <p className="mt-3 inline-flex rounded-full bg-[#F8F2E5] px-3 py-1 text-xs font-bold text-[#9B6F11]">
                    使用服務：{testimonials[current].service}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-[#C99A2E] hover:text-[#C99A2E]"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-[#C99A2E]" : "w-2 bg-slate-300"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-[#C99A2E] hover:text-[#C99A2E]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
