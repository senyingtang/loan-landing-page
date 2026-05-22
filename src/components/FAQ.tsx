"use client";
import { faqs } from "@/lib/data";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="container-page">
        <AnimateIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">常見問題</h2>
            <p className="section-subtitle">您可能關心的問題，我們先幫您整理好。</p>
          </div>
        </AnimateIn>

        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {faqs.map((item, i) => (
            <AnimateIn key={item.q} delay={i * 0.07}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 p-6 text-left"
                  aria-expanded={open === i}
                >
                  <span className="text-lg font-black text-[#061B36]">{item.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="shrink-0 text-2xl text-[#C99A2E]"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-slate-200 px-6 pb-6 pt-4 leading-8 text-slate-500">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
