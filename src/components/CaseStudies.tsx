"use client";
import { cases } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CaseStudies() {
  return (
    <section id="cases" className="border-y border-slate-200 bg-[#F6F8FB] py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">成功案例</h2>
          <p className="section-subtitle">真實案例分享，見證安心又有效率的專業協助。</p>
        </div>
        <div className="mt-14 flex items-center gap-5">
          <button className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-[#C99A2E] hover:text-[#C99A2E] md:flex">
            <ChevronLeft size={20} />
          </button>
          <div className="grid flex-1 gap-6 md:grid-cols-3">
            {cases.map((item, i) => (
              <motion.article
                key={item.title}
                className="card-base overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="relative h-52 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B36]/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-[#061B36]">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-500">{item.text}</p>
                  <div className="mt-6 rounded-full bg-[#F8F2E5] px-4 py-2 text-center text-sm font-bold text-[#9B6F11]">
                    {item.tag}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <button className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-[#C99A2E] hover:text-[#C99A2E] md:flex">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
