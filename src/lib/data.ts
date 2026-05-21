import {
  BadgeDollarSign, Building2, Car, CircleDollarSign,
  Clock3, FileCheck2, HeartHandshake, Home, Landmark, LockKeyhole,
  MessageCircle, PhoneCall, ShieldCheck, Sparkles, UserCheck, WalletCards, Zap,
} from "lucide-react";

export const navItems = [
  { label: "首頁", href: "#home" },
  { label: "服務項目", href: "#services" },
  { label: "貸款流程", href: "#process" },
  { label: "成功案例", href: "#cases" },
  { label: "客戶評價", href: "#testimonials" },
  { label: "常見問題", href: "#faq" },
  { label: "關於我們", href: "#contact" },
];

export const heroFeatures = [
  { icon: Clock3, title: "快速核貸", text: "最快 1 天初審" },
  { icon: ShieldCheck, title: "安心保密", text: "個資嚴格保護" },
  { icon: BadgeDollarSign, title: "條件彈性", text: "多元方案評估" },
  { icon: LockKeyhole, title: "合法透明", text: "不收取不明費用" },
];

export const services = [
  {
    icon: WalletCards,
    title: "信用貸款",
    text: "上班族、自由業皆可初步評估，協助媒合合適額度。",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Home,
    title: "房屋貸款",
    text: "房屋增貸、轉貸、二胎方案，依條件規劃合適方向。",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Car,
    title: "汽車貸款",
    text: "汽車增貸、原車融資、短期資金需求皆可諮詢。",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: CircleDollarSign,
    title: "債務整合",
    text: "整合多筆負債，協助降低月付壓力與資金管理負擔。",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Building2,
    title: "企業貸款",
    text: "中小企業週轉、設備採購、營運資金規劃。",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: FileCheck2,
    title: "代辦服務",
    text: "專人協助文件確認、流程提醒與進度追蹤。",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
];

export const whyChooseUs = [
  { icon: ShieldCheck, title: "合法立案", text: "流程透明，拒絕不明收費與高風險話術。" },
  { icon: UserCheck, title: "專業顧問", text: "一對一評估條件，降低自行申請失敗率。" },
  { icon: Zap, title: "快速核貸", text: "資料齊全後，最快 1 天提供初步方向。" },
  { icon: Landmark, title: "透明收費", text: "申辦前清楚說明，不隱藏額外費用。" },
  { icon: HeartHandshake, title: "隱私放心", text: "全程保密，不任意外流個人資料。" },
];

export const processSteps = [
  { step: "01", title: "線上諮詢", text: "填寫表單或加入 LINE，描述資金需求。" },
  { step: "02", title: "資料評估", text: "由專人確認條件、收入與負債狀況。" },
  { step: "03", title: "準備文件", text: "依方案需求提供基本申請文件。" },
  { step: "04", title: "審核媒合", text: "協助送件、追蹤進度並回覆結果。" },
  { step: "05", title: "撥款完成", text: "核准後完成對保與撥款流程。" },
];

export const stats = [
  { value: "10+", label: "年專業經驗" },
  { value: "20,000+", label: "成功服務案例" },
  { value: "50億+", label: "累積媒合金額" },
  { value: "98%", label: "客戶滿意度" },
];

export const cases = [
  {
    title: "小資上班族 信貸成功",
    text: "原本卡循壓力過大，透過信用貸款整合月付支出。",
    tag: "核貸金額 30 萬元",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "房屋二胎 增貸成功",
    text: "運用名下不動產規劃資金，順利取得週轉資金。",
    tag: "核貸金額 200 萬元",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "汽車增貸 周轉成功",
    text: "保留原車使用權，快速處理短期資金需求。",
    tag: "核貸金額 50 萬元",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
  },
];

export const testimonials = [
  { name: "林先生", role: "台北｜上班族", text: "原本真的不知道該從哪裡開始，顧問一步一步協助整理資料，過程很安心。", service: "信用貸款" },
  { name: "陳小姐", role: "新北｜自營業", text: "多筆債務壓力很大，整合後月付壓力降低很多，溝通也很清楚。", service: "債務整合" },
  { name: "黃先生", role: "台中｜業務", text: "汽車增貸速度比想像中快，資料準備也都有專人提醒。", service: "汽車貸款" },
  { name: "劉小姐", role: "桃園｜店家", text: "需要週轉時有人協助評估，不會一直被推銷不適合的方案。", service: "房屋貸款" },
];

export const requirements = [
  { name: "林先生", role: "台北｜上班族", text: "原本真的不知道該從哪裡開始，顧問一步一步協助整理資料，過程很安心。", service: "信用貸款" },
  { name: "陳小姐", role: "新北｜自營業", text: "多筆債務壓力很大，整合後月付壓力降低很多，溝通也很清楚。", service: "債務整合" },
  { name: "黃先生", role: "台中｜業務", text: "汽車增貸速度比想像中快，資料準備也都有專人提醒。", service: "汽車貸款" },
  { name: "劉小姐", role: "桃園｜店家", text: "需要週轉時有人協助評估，不會一直被推銷不適合的方案。", service: "房屋貸款" },
];

export const faqs = [
  { q: "信用不好也可以貸款嗎？", a: "需依照實際信用狀況、收入、負債比例與擔保條件評估。建議先由顧問初步確認，不要自行重複送件。" },
  { q: "貸款最快多久可以撥款？", a: "若資料齊全且條件符合，部分方案最快 1 至 3 個工作天可完成初步審核與撥款流程。" },
  { q: "諮詢會收費嗎？", a: "初步諮詢與條件評估不收費，正式申辦前會清楚說明相關費用。" },
  { q: "需要準備哪些文件？", a: "基本會需要身分證明、收入證明、財力證明等文件，實際文件會依貸款類型不同而調整。" },
  { q: "如何確認不是詐騙？", a: "合法顧問不會要求提前匯款、不會索取提款卡密碼，也不會用不明帳戶收費。申辦前請確認公司資訊與合約內容。" },
];

export const contactMethods = [
  { icon: PhoneCall, title: "立即來電", text: "0800-123-456" },
  { icon: MessageCircle, title: "LINE 諮詢", text: "@safeloan" },
  { icon: Sparkles, title: "免費評估", text: "專人一對一回覆" },
];

