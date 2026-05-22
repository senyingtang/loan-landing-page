"use client";
import { useEffect, useRef, useState } from "react";
import { heroFeatures } from "@/lib/data";
import { PhoneCall, MessageCircle } from "lucide-react";

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    async function initGsap() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        if (bgRef.current && sectionRef.current) {
          gsap.to(bgRef.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }

    initGsap();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[#061B36]" />
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1800&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061B36] via-[#061B36]/90 to-white/10" />

      <div className="container-page relative grid min-h-[640px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="animate-fadeInUp mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#F6D58A]">
            合法透明・專人協助・快速評估
          </p>
          <h1 className="animate-fadeInUp delay-100 text-5xl font-black leading-tight tracking-tight text-white md:text-7xl" style={{ fontFamily: "var(--font-noto-serif-tc), serif" }}>
            您的資金需求
            <br />
            <span className="text-[#D6A73B]">我們全力協助</span>
          </h1>
          <p className="animate-fadeInUp delay-200 mt-6 max-w-2xl text-xl leading-9 text-slate-100">
            快速核貸、低利方案、安心保密，專人為您評估合適方案。
          </p>
          <div className="animate-fadeInUp delay-300 mt-10 flex flex-wrap gap-4">
            <a href="tel:0800123456" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/20 hover:scale-105 active:scale-100">
              <PhoneCall size={20} /> 立即來電諮詢
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-green-700 hover:scale-105 active:scale-100">
              <MessageCircle size={20} /> LINE 線上諮詢
            </a>
          </div>
          <div className="animate-fadeInUp delay-400 mt-12 grid max-w-3xl grid-cols-2 gap-5 md:grid-cols-4">
            {heroFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-l border-white/20 pl-4 transition hover:border-[#C99A2E]/60">
                  <Icon className="mb-3 text-[#D6A73B]" size={25} />
                  <p className="font-bold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="animate-fadeInRight delay-200 rounded-3xl border border-white/20 bg-white p-8 shadow-2xl">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="animate-scaleIn mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-black text-[#061B36]">已收到您的諮詢！</h3>
              <p className="mt-3 text-slate-500">我們將盡快由專人與您聯繫，請保持電話暢通。</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-[#C99A2E] underline">重新填寫</button>
            </div>
          ) : (
            <>
              <div className="text-center">
                <h2 className="text-3xl font-black text-[#061B36]">免費諮詢・快速申請</h2>
                <p className="mt-2 text-slate-500">專人為您規劃合適方案</p>
              </div>
              <div className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">姓名</label>
                  <input className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20" placeholder="請輸入您的姓名" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">電話</label>
                  <input className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20" placeholder="請輸入您的電話" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">諮詢項目</label>
                  <select className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20">
                    <option>請選擇諮詢項目</option>
                    <option>信用貸款</option>
                    <option>整合負債</option>
                    <option>房屋貸款</option>
                    <option>汽車貸款</option>
                    <option>企業貸款</option>
                  </select>
                </div>
                <button onClick={() => setSubmitted(true)} className="w-full rounded-lg bg-[#C99A2E] px-6 py-4 font-black text-white transition hover:bg-[#B88921] hover:scale-[1.02] active:scale-100">
                  立即送出
                </button>
                <p className="text-center text-xs text-slate-400">🔒 我們會妥善保護您的個人資料</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* 波浪底部分隔 */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" className="block w-full" preserveAspectRatio="none" style={{ height: 48 }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
