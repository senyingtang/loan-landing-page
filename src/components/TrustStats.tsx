"use client";
import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "10+", label: "年專業經驗" },
  { value: "20,000+", label: "成功服務案例" },
  { value: "50億+", label: "累積媒合金額" },
  { value: "98%", label: "客戶滿意度" },
];

function parseNumber(val: string): { num: number; prefix: string; suffix: string } {
  const clean = val.replace(/,/g, "");
  const match = clean.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: val };
  return {
    prefix: match[1],
    num: parseFloat(match[2]),
    suffix: match[3],
  };
}

function formatNumber(num: number, original: string): string {
  if (original.includes(",")) {
    return Math.round(num).toLocaleString("en-US");
  }
  return Math.round(num).toString();
}

function CountUp({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");
  const [visible, setVisible] = useState(false);
  const { num, prefix, suffix } = parseNumber(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      const duration = 1800;
      const steps = 60;
      const interval = duration / steps;
      let current = 0;

      const tick = setInterval(() => {
        current += 1;
        const progress = current / steps;
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentVal = eased * num;
        setDisplay(formatNumber(currentVal, value));
        if (current >= steps) {
          setDisplay(formatNumber(num, value));
          clearInterval(tick);
        }
      }, interval);

      return () => clearInterval(tick);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [visible, num, value, delay]);

  return (
    <div
      ref={ref}
      className="px-6 py-8 text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      <p className="text-5xl font-black text-[#C99A2E]" style={{ fontFamily: "var(--font-noto-serif-tc), serif" }}>
        {prefix}{display}{suffix}
      </p>
      <p className="mt-3 font-bold text-slate-600">{label}</p>
    </div>
  );
}

export default function TrustStats() {
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <div className="grid divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
            {stats.map((item, i) => (
              <CountUp key={item.label} value={item.value} label={item.label} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
