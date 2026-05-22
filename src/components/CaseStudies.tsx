"use client";
import { cases } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.025,1.025,1.025)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.15s ease", willChange: "transform" }}
    >
      {children}
    </div>
  );
}

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + cases.length) % cases.length);
  const next = () => setCurrent((c) => (c + 1) % cases.length);

  return (
    <section id="cases" className="border-y border-slate-200 bg-[#F6F8FB] py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">成功案例</h2>
          <p className="section-subtitle">真實案例分享，見證安心又有效率的專業協助。</p>
        </div>

        {/* 桌機版：三欄並排 + 3D tilt */}
        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-3 md:items-stretch">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TiltCard>
                <article className="card-base flex h-full flex-col overflow-hidden">
                  <div className="relative h-52 w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061B36]/60 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="text-xl font-black text-[#061B36]">{item.title}</h3>
                    <p className="mt-4 leading-7 text-slate-500">{item.text}</p>
                    <div className="flex-1" />
                    <div className="mt-6 rounded-full bg-[#F8F2E5] px-4 py-2 text-center text-sm font-bold text-[#9B6F11]">
                      {item.tag}
                    </div>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* 手機版：單張切換 */}
        <div className="mt-10 md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.article
                key={current}
                className="card-base overflow-hidden"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
              >
                <div className="relative h-52 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cases[current].image}
                    alt={cases[current].title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B36]/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#061B36]">{cases[current].title}</h3>
                  <p className="mt-4 leading-7 text-slate-500">{cases[current].text}</p>
                  <div className="mt-6 rounded-full bg-[#F8F2E5] px-4 py-2 text-center text-sm font-bold text-[#9B6F11]">
                    {cases[current].tag}
                  </div>
                </div>
              </motion.article>
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
              {cases.map((_, i) => (
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
