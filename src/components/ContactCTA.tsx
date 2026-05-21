"use client";
import { PhoneCall, MessageCircle, QrCode } from "lucide-react";
import { useState } from "react";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-[#061B36] py-10 text-white">
      <div className="container-page">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-2xl font-black text-white">已收到您的諮詢！</h3>
            <p className="mt-3 text-slate-300">我們將盡快由專人與您聯繫，請保持電話暢通。</p>
            <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-[#C99A2E] underline">重新填寫</button>
          </div>
        ) : (
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.4fr_0.9fr_0.5fr]">

            {/* 左側：標題 + 聯絡方式 */}
            <div className="border-r border-white/10 pr-8">
              <h2 className="text-xl font-black leading-tight" style={{ fontFamily: "var(--font-noto-serif-tc), serif" }}>
                立即諮詢，讓專業團隊協助您！
              </h2>
              <p className="mt-1 text-sm text-slate-300">免費諮詢・量身規劃・快速核貸</p>

              <div className="mt-5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <PhoneCall size={16} className="text-green-400 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">立即來電</p>
                    <p className="text-lg font-black text-[#C99A2E]">0800-123-456</p>
                    <p className="text-xs text-slate-400">服務時間：9:00-21:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle size={16} className="text-green-400 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">LINE 諮詢</p>
                    <p className="font-bold text-white">ID：@safeloan</p>
                    <p className="text-xs text-slate-400">24小時線上服務</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 中間：表單 */}
            <div className="border-r border-white/10 pr-8">
              <div className="grid grid-cols-2 gap-3">
                <input
                  className="rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-slate-400 outline-none transition focus:border-[#C99A2E] focus:bg-white/15"
                  placeholder="請輸入姓名"
                />
                <input
                  className="rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-slate-400 outline-none transition focus:border-[#C99A2E] focus:bg-white/15"
                  placeholder="請輸入電話"
                />
                <select className="col-span-2 rounded-lg border border-white/20 bg-[#0B2A4A] px-4 py-2.5 text-sm text-slate-300 outline-none transition focus:border-[#C99A2E]">
                  <option value="">請選擇諮詢項目</option>
                  <option>信用貸款</option>
                  <option>整合負債</option>
                  <option>房屋貸款</option>
                  <option>汽車貸款</option>
                  <option>企業貸款</option>
                </select>
                <button
                  onClick={() => setSubmitted(true)}
                  className="col-span-2 rounded-lg bg-[#C99A2E] py-3 text-sm font-black text-white transition hover:bg-[#B88921] hover:scale-[1.02] active:scale-100"
                >
                  立即送出
                </button>
              </div>
            </div>

            {/* 地圖佔位 */}
            <div className="overflow-hidden rounded-xl border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8!2d121.517!3d25.045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAyJzQyLjAiTiAxMjHCsDMxJzAxLjIiRQ!5e0!3m2!1szh-TW!2stw!4v1"
                width="100%"
                height="130"
                style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* QR Code 佔位 */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-28 w-28 items-center justify-center rounded-xl border border-white/20 bg-white p-2">
                <QrCode size={88} className="text-[#061B36]" />
              </div>
              <p className="text-center text-xs text-slate-400">LINE 線上諮詢</p>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}
