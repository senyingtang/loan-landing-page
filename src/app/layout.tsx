import type { Metadata } from "next";
import { Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const notoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-serif-tc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "安心貸顧問｜貸款諮詢、整合負債、企業融資",
  description: "安心貸顧問提供信用貸款、房屋貸款、汽車貸款、債務整合與企業融資諮詢，專人協助媒合合適方案。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" className={notoSerifTC.variable}>
      <body>{children}</body>
    </html>
  );
}
