"use client";
import { whyChooseUs } from "@/lib/data";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#061B36] py-20 text-white">
      <div className="container-page">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black md:text-4xl" style={{ fontFamily: "var(--font-noto-serif-tc), serif" }}>為什麼選擇我們</h2>
          <p className="mt-3 text-slate-300">從諮詢到申請，每一步都讓您安心有保障。</p>
        </div>
        <div className="grid gap-8 md:grid-cols-5">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="relative text-center md:px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {index !== 0 && <div className="absolute left-0 top-4 hidden h-20 w-px bg-white/20 md:block" />}
                <Icon className="mx-auto text-[#D6A73B]" size={36} />
                <h3 className="mt-5 text-lg font-black text-[#D6A73B]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
