"use client";
import { faqs } from "@/lib/data";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">常見問題</h2>
          <p className="section-subtitle">您可能關心的問題，我們先幫您整理好。</p>
        </div>
        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {faqs.map((item, i) => (
            <motion.details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <summary className="cursor-pointer list-none text-lg font-black text-[#061B36]">
                <div className="flex items-center justify-between gap-6">
                  <span>{item.q}</span>
                  <span className="text-2xl text-[#C99A2E] transition-transform duration-300 group-open:rotate-45">+</span>
                </div>
              </summary>
              <p className="mt-4 border-t border-slate-200 pt-4 leading-8 text-slate-500">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
