import { ShieldCheck } from "lucide-react";
import { navItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#061B36] text-[#C99A2E]">
            <ShieldCheck size={26} />
          </div>
          <div>
            <p className="text-xl font-bold leading-none text-[#061B36]">安心貸顧問</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">Safe Loan Consultant</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-600">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#C99A2E]">{item.label}</a>
          ))}
        </div>
        <div className="max-w-sm text-sm leading-7 text-slate-500 md:text-right">
          <p>© 2026 安心貸顧問 All Rights Reserved.</p>
          <p>本公司絕不主動要求匯款、交付存摺或提供提款卡密碼。</p>
        </div>
      </div>
    </footer>
  );
}
