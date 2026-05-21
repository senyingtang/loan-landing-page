"use client";
import AnimateIn from "@/components/AnimateIn";
import { CheckCircle2 } from "lucide-react";

const groups = [
  {
    title: "申請條件",
    sub: "符合下列條件，提高核貸成功率",
    items: [
      "年滿 20 歲之中華民國國民",
      "有穩定收入來源",
      "具備基本還款能力",
      "提供身分證明文件",
      "信用狀況良好或可協助評估",
    ],
    illustration: (
      <svg width="80" height="88" viewBox="0 0 80 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="82" rx="24" ry="5" fill="#E2E8F0" />
        <circle cx="40" cy="26" r="17" fill="#C99A2E" fillOpacity="0.12" />
        <circle cx="40" cy="24" r="12" fill="#C99A2E" fillOpacity="0.22" />
        <circle cx="40" cy="24" r="8" fill="#C99A2E" />
        <path d="M36 24 L39 27 L45 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="20" y="44" width="40" height="32" rx="5" fill="#0B2A4A" />
        <rect x="25" y="50" width="30" height="3" rx="1.5" fill="#C99A2E" fillOpacity="0.7" />
        <rect x="25" y="56" width="22" height="2" rx="1" fill="white" fillOpacity="0.3" />
        <rect x="25" y="61" width="26" height="2" rx="1" fill="white" fillOpacity="0.3" />
        <rect x="25" y="66" width="18" height="2" rx="1" fill="white" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    title: "準備文件",
    sub: "請備以下文件，加快申辦流程",
    items: [
      "身分證正反面影本",
      "第二證件影本",
      "財力證明文件",
      "房屋／汽車相關文件",
      "其他專案所需文件",
    ],
    illustration: (
      <svg width="80" height="88" viewBox="0 0 80 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="82" rx="24" ry="5" fill="#E2E8F0" />
        <rect x="18" y="20" width="36" height="46" rx="4" fill="#F8F2E5" stroke="#C99A2E" strokeWidth="1.5" />
        <rect x="24" y="30" width="24" height="2.5" rx="1.25" fill="#C99A2E" fillOpacity="0.8" />
        <rect x="24" y="36" width="18" height="2" rx="1" fill="#94A3B8" />
        <rect x="24" y="41" width="21" height="2" rx="1" fill="#94A3B8" />
        <rect x="24" y="46" width="15" height="2" rx="1" fill="#94A3B8" />
        <rect x="24" y="51" width="20" height="2" rx="1" fill="#94A3B8" />
        <path d="M40 10 C40 10 30 15 30 22" stroke="#C99A2E" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M40 10 C40 10 50 15 50 22" stroke="#C99A2E" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="40" cy="9" r="5" fill="#C99A2E" />
        <path d="M37.5 9 L39.5 11 L43 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Requirements() {
  return (
    <section className="border-y border-slate-200 bg-[#F6F8FB] py-24">
      <div className="container-page">
        <AnimateIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-title">申請條件與準備文件</h2>
            <p className="section-subtitle">條件不同，方案不同。專人會依您的狀況評估最合適方向。</p>
          </div>
        </AnimateIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {groups.map((group, i) => (
            <AnimateIn key={group.title} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
              <div className="flex gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="shrink-0">{group.illustration}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-[#061B36]">{group.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{group.sub}</p>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-[#C99A2E]" size={17} />
                        <span className="text-sm leading-6">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <p className="mt-8 text-center text-sm text-slate-400">
            實際核貸條件仍依個人信用、收入、負債比例與金融機構審核結果為準。
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
