"use client";
import { useEffect, useRef } from "react";
import AnimateIn from "@/components/AnimateIn";

const steps = [
  {
    step: "01",
    title: "線上諮詢",
    text: "填寫表單或加入 LINE，描述資金需求與基本狀況。",
    tag: "最快當日回覆",
  },
  {
    step: "02",
    title: "準備文件",
    text: "依方案需求提供基本申請文件，專人提醒所需資料。",
    tag: null,
  },
  {
    step: "03",
    title: "撥款完成",
    text: "核准後完成對保與撥款流程，資金最快 1 天入帳。",
    tag: "最快 1 天撥款",
  },
];

export default function LoanProcess() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    async function initGsap() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const stepEls = stepsRef.current.filter(Boolean);
      ctx = gsap.context(() => {
        stepEls.forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: 24 },
            {
              opacity: 1,
              x: 0,
              duration: 0.55,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
              delay: i * 0.12,
            }
          );
        });
      });
    }

    initGsap();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="border-b border-slate-200 bg-white py-24">
      <div className="container-page">
        <div className="grid items-center gap-0 lg:grid-cols-[1fr_1.5fr]">

          {/* 左側：大數字 + 標語 */}
          <AnimateIn direction="left">
            <div className="pb-12 pr-0 lg:pb-0 lg:pr-16">
              <p
                className="hero-num text-[96px] font-black leading-none text-[#061B36]"
                style={{ fontFamily: "var(--font-noto-serif-tc), serif" }}
              >
                <span className="text-[#C99A2E]">3</span>
              </p>
              <p className="mt-2 text-2xl font-black text-[#061B36]">步驟快速申貸</p>
              <p className="mt-3 text-base leading-7 text-slate-500">
                填寫表單或聯繫專人，<br />
                最快 1 天完成初審與媒合。
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#C99A2E] bg-[#F8F2E5] px-4 py-2 text-sm font-semibold text-[#9B6F11]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C99A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                合法・透明・安心
              </div>
            </div>
          </AnimateIn>

          {/* 右側：步驟列表 */}
          <div className="border-t border-slate-200 lg:border-l lg:border-t-0 lg:pl-16">
            {steps.map((item, i) => (
              <div
                key={item.step}
                ref={(el) => { stepsRef.current[i] = el; }}
                className={`flex gap-5 py-7 opacity-0 ${i !== steps.length - 1 ? "border-b border-slate-200" : ""}`}
              >
                <div className="w-12 shrink-0 text-center">
                  <span
                    className="text-4xl font-black leading-none text-[#C99A2E]"
                    style={{ fontFamily: "var(--font-noto-serif-tc), serif" }}
                  >
                    {item.step}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-black text-[#061B36]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">{item.text}</p>
                  {item.tag && (
                    <span className="mt-3 inline-block rounded-full bg-[#061B36] px-3 py-1 text-xs font-semibold text-[#F6D58A]">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
