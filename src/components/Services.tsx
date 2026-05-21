"use client";
import { services } from "@/lib/data";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="border-b border-slate-200 bg-white py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">我們的服務</h2>
          <p className="section-subtitle">多元貸款方案，滿足不同資金需求。</p>
        </div>

        <div className="mt-14 grid gap-5 grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="group relative h-56 overflow-hidden rounded-2xl cursor-pointer shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061B36]/90 via-[#061B36]/45 to-transparent transition-all duration-300 group-hover:from-[#061B36]/97 group-hover:via-[#061B36]/65 group-hover:to-[#061B36]/20" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg border border-[#C99A2E]/40 bg-[#C99A2E]/20 backdrop-blur-sm">
                    <Icon size={18} className="text-[#F6D58A]" />
                  </div>

                  <h3 className="text-base font-bold text-white">{item.title}</h3>

                  <p className="mt-0 max-h-0 overflow-hidden text-sm leading-6 text-slate-200 opacity-0 transition-all duration-350 group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100">
                    {item.text}
                  </p>

                  <div className="mt-0 flex items-center gap-1 text-xs font-semibold text-[#F6D58A] opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:opacity-100">
                    了解更多
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
