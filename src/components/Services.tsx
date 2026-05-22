"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WalletCards, Home, Car, CircleDollarSign, Building2, FileCheck2 } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const services = [
  {
    icon: WalletCards,
    title: "信用貸款",
    sub: "靈活運用，快速周轉首選",
    points: [
      "免擔保品，依個人信用核定額度",
      "申辦快速，資料齊全最快當日初審",
      "資金運用彈性，無指定用途限制",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Home,
    title: "房屋貸款",
    sub: "活化不動產，取得低利資金",
    points: [
      "房屋增貸、轉貸、二胎方案一次評估",
      "利率相對較低，適合大額資金需求",
      "專人協助規劃，找出最合適方向",
    ],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Car,
    title: "汽車貸款",
    sub: "保留用車權，靈活取得資金",
    points: [
      "原車繼續使用，不影響日常生活",
      "汽車增貸、融資方案彈性配合",
      "審核快速，短期資金需求最佳解方",
    ],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: CircleDollarSign,
    title: "債務整合",
    sub: "化繁為簡，減輕每月負擔",
    points: [
      "多筆負債整合為一筆，管理更輕鬆",
      "降低整體利率，減少每月還款壓力",
      "專人分析現況，規劃最佳整合方案",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Building2,
    title: "企業貸款",
    sub: "支援營運資金，助力企業成長",
    points: [
      "中小企業週轉金、設備採購融資",
      "依企業營運狀況量身規劃方案",
      "快速審核，不影響正常營運節奏",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: FileCheck2,
    title: "代辦服務",
    sub: "全程陪伴，讓申請不再複雜",
    points: [
      "專人協助整理文件，降低退件風險",
      "流程進度即時追蹤，不讓您等到茫然",
      "從諮詢到撥款，每個環節都有人陪",
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  },
];

const features = [
  { icon: "shield", title: "安全可靠", sub: "嚴格把關，保障客戶隱私" },
  { icon: "clock", title: "快速核貸", sub: "專業團隊，高效審核" },
  { icon: "user", title: "專人服務", sub: "一對一諮詢，量身規劃方案" },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const item = services[active];
  const Icon = item.icon;

  return (
    <section id="services" className="border-b border-slate-200 bg-white py-24">
      <div className="container-page">
        <AnimateIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">我們的服務</h2>
            <p className="section-subtitle">多元貸款方案，滿足不同資金需求。</p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mt-14 hidden overflow-hidden rounded-2xl border border-slate-200 shadow-lg lg:grid lg:grid-cols-[280px_1fr]">

            {/* 左側 Tab 列表 */}
            <div className="bg-[#061B36]">
              {services.map((s, i) => {
                const TabIcon = s.icon;
                return (
                  <button
                    key={s.title}
                    onClick={() => setActive(i)}
                    className={`flex w-full items-center gap-4 border-l-4 px-5 py-5 text-left transition-all duration-200 ${
                      active === i
                        ? "border-[#C99A2E] bg-[#C99A2E]/10"
                        : "border-transparent hover:bg-white/5"
                    }`}
                  >
                    <TabIcon
                      size={20}
                      className={active === i ? "text-[#C99A2E]" : "text-white/50"}
                    />
                    <span
                      className={`flex-1 text-sm font-semibold ${
                        active === i ? "text-white" : "text-white/70"
                      }`}
                    >
                      {s.title}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={active === i ? "text-[#C99A2E]" : "text-white/20"}
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                );
              })}
            </div>

            {/* 右側內容 */}
            <div className="flex flex-col bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-1 flex-col"
                >
                  {/* 圖片區 */}
                  <div className="relative h-56 overflow-hidden lg:h-64">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#061B36]/60 to-transparent" />
                    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#061B36]">
                      <Icon size={26} className="text-[#C99A2E]" />
                    </div>
                  </div>

                  {/* 文字區 */}
                  <div className="flex-1 p-7">
                    <h3 className="text-2xl font-black text-[#061B36]">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#C99A2E]">{item.sub}</p>
                    <ul className="mt-5 space-y-3">
                      {item.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3 text-sm text-slate-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C99A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#061B36] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0B2A4A] hover:scale-[1.02]"
                    >
                      立即諮詢
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                  </div>

                  {/* 底部特色 */}
                  <div className="grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200">
                    {features.map((f) => (
                      <div key={f.title} className="flex items-center gap-3 px-5 py-4">
                        {f.icon === "shield" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C99A2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                        {f.icon === "clock" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C99A2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                        {f.icon === "user" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C99A2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                        <div>
                          <p className="text-xs font-bold text-[#061B36]">{f.title}</p>
                          <p className="text-xs text-slate-400">{f.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </AnimateIn>

        {/* 手機版：橫向 scroll tab */}
        <div className="mt-10 lg:hidden">
          {/* Tab 列 */}
          <div className="grid grid-cols-3 gap-2">
            {services.map((s, i) => {
              const TabIcon = s.icon;
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={`flex w-full items-center justify-center gap-1.5 rounded-xl border px-2 py-2.5 text-xs font-semibold transition-all duration-200 ${
                    active === i
                      ? "border-[#061B36] bg-[#061B36] text-[#F6D58A]"
                      : "border-slate-200 bg-white text-slate-500 hover:border-[#C99A2E] hover:text-[#C99A2E]"
                  }`}
                >
                  <TabIcon size={13} />
                  {s.title}
                </button>
              );
            })}
          </div>

          {/* 內容卡片 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {/* 圖片區 */}
              <div className="relative h-44 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={services[active].image}
                  alt={services[active].title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061B36]/75 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="text-base font-black text-white">{services[active].title}</p>
                  <p className="text-xs font-semibold text-[#F6D58A]">{services[active].sub}</p>
                </div>
              </div>

              {/* 列表 */}
              <div className="p-4">
                <ul className="space-y-2.5">
                  {services[active].points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C99A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#061B36] py-3 text-sm font-bold text-white transition hover:bg-[#0B2A4A]"
                >
                  立即諮詢
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </a>
              </div>

              {/* 底部三欄 */}
              <div className="flex divide-x divide-slate-200 border-t border-slate-200">
                {features.map((f) => (
                  <div key={f.title} className="flex flex-1 flex-col items-center py-2.5">
                    {f.icon === "shield" && <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C99A2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                    {f.icon === "clock" && <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C99A2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                    {f.icon === "user" && <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C99A2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                    <p className="mt-1 text-[10px] font-bold text-[#061B36]">{f.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
