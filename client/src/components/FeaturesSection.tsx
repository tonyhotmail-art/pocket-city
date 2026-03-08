/*
 * FeaturesSection — 平台特色功能區塊
 * 展示「一帳號通行」的核心優勢
 * 風格：圖示卡片 + 金色強調
 */

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "一帳號通行",
    titleEn: "Single Sign-On",
    desc: "成為口袋城市會員後，同一帳號即可使用旗下所有服務，無需重複註冊。",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 11h20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 16h4M9 19h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Beta 版搶先體驗",
    titleEn: "Early Beta Access",
    desc: "所有城市旗下產品 Beta 版均對會員開放，讓您搶先體驗最新功能。",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L17.5 10.5L25 11.5L19.5 17L21 24.5L14 21L7 24.5L8.5 17L3 11.5L10.5 10.5L14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "持續擴充生態",
    titleEn: "Growing Ecosystem",
    desc: "口袋城市持續開發新服務，加入即享受未來所有新上線產品的優先使用權。",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v4M14 20v4M4 14h4M20 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
    title: "統一資料管理",
    titleEn: "Unified Data Hub",
    desc: "跨產品的資料互通，一處管理所有服務的設定、通知與個人資料。",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 20l4-8 4 6 3-4 5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "專業 SaaS 品質",
    titleEn: "Professional SaaS",
    desc: "企業級穩定性與安全性，為個人用戶與商業客戶提供可靠的雲端服務。",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "隨時隨地使用",
    titleEn: "Always Available",
    desc: "行動裝置優先設計，無論手機或電腦，隨時隨地享受流暢的使用體驗。",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* 左側裝飾線 */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-64 hidden lg:block"
        style={{ background: "linear-gradient(to bottom, transparent, oklch(0.72 0.12 80 / 30%), transparent)" }}
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* 標題 */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <p
              className="text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c8a84b" }}
            >
              Platform Features
            </p>
            <h2
              className="text-3xl lg:text-5xl font-semibold"
              style={{ fontFamily: "'Noto Serif TC', serif", color: "#e8d9b0" }}
            >
              為什麼選擇
              <br />
              <span className="text-gold-gradient">口袋城市？</span>
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed max-w-sm"
            style={{ color: "oklch(0.62 0.03 80)", fontFamily: "'Noto Sans TC', sans-serif" }}
          >
            我們相信，好的工具應該讓生活更簡單。口袋城市整合多元服務，讓您專注在真正重要的事。
          </p>
        </div>

        {/* 功能卡片網格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className="glass-card rounded-xl p-6 group transition-all duration-500 hover:border-[oklch(0.72_0.12_80/50%)]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, border-color 0.3s ease, box-shadow 0.3s ease`,
              }}
            >
              {/* 圖示 */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "oklch(0.22 0.06 145)",
                  color: "#c8a84b",
                  border: "1px solid oklch(0.72 0.12 80 / 20%)",
                }}
              >
                {feat.icon}
              </div>

              {/* 標題 */}
              <h3
                className="text-base font-semibold mb-1"
                style={{ fontFamily: "'Noto Serif TC', serif", color: "#e8d9b0" }}
              >
                {feat.title}
              </h3>
              <p
                className="text-[10px] tracking-[0.15em] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c8a84b" }}
              >
                {feat.titleEn}
              </p>

              {/* 說明 */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.62 0.03 80)", fontFamily: "'Noto Sans TC', sans-serif" }}
              >
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
