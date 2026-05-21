"use client";
import { testimonials } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">申請條件與準備文件</h2>
          <p className="section-subtitle">條件不同，方案不同。專人會依您的狀況評估最合適方向。</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((group, i) => (
            <motion.div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
            >
              <h3 className="text-xl font-black text-[#061B36]">{group.title}</h3>
              <ul className="mt-6 space-y-4">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-600">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#C99A2E]" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          實際核貸條件仍依個人信用、收入、負債比例與金融機構審核結果為準。
        </p>
      </div>
    </section>
  );
}
