/*
 * HowItWorksSection — 如何使用步驟說明
 * 三步驟流程：加入 → 選擇服務 → 開始使用
 * 風格：橫向步驟流程 + 金色連接線
 */

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "免費加入會員",
    desc: "只需一個帳號，完成快速註冊，即成為口袋城市正式會員。",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 28c0-6.075 4.925-11 11-11s11 4.925 11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "選擇城市服務",
    desc: "從口袋城市旗下的服務中選擇您需要的，所有 Beta 版均免費開放。",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="17" y="4" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="17" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="17" y="17" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "立即開始使用",
    desc: "無縫切換各項服務，同一帳號登入，資料互通，體驗一站式便捷。",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M12 8l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 lg:py-32 relative">
      {/* 背景裝飾 */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, oklch(0.12 0.04 145) 0%, oklch(0.15 0.05 145) 50%, oklch(0.12 0.04 145) 100%)",
        }}
      />

      <div className="relative container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* 標題 */}
        <div className="text-center mb-16 lg:mb-20">
          <p
            className="text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c8a84b" }}
          >
            How It Works
          </p>
          <h2
            className="text-3xl lg:text-5xl font-semibold"
            style={{ fontFamily: "'Noto Serif TC', serif", color: "#e8d9b0" }}
          >
            三步驟，開始您的
            <br />
            <span className="text-gold-gradient">口袋城市之旅</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        {/* 步驟 */}
        <div className="relative">
          {/* 連接線（桌面版） */}
          <div
            className="absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px hidden lg:block"
            style={{ background: "linear-gradient(to right, oklch(0.72 0.12 80 / 40%), oklch(0.72 0.12 80 / 60%), oklch(0.72 0.12 80 / 40%))" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(32px)",
                  transition: `opacity 0.7s ease ${i * 0.2}s, transform 0.7s ease ${i * 0.2}s`,
                }}
              >
                {/* 圓形圖示 */}
                <div className="relative mb-6">
                  <div
                    className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center relative z-10"
                    style={{
                      background: "oklch(0.18 0.06 145)",
                      border: "1px solid oklch(0.72 0.12 80 / 40%)",
                      color: "#c8a84b",
                      boxShadow: "0 0 24px oklch(0.72 0.12 80 / 15%)",
                    }}
                  >
                    {step.icon}
                  </div>
                  {/* 步驟數字 */}
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold z-20"
                    style={{
                      background: "linear-gradient(135deg, #c8a84b, #e2c068)",
                      color: "oklch(0.12 0.04 145)",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* 步驟編號 */}
                <p
                  className="text-xs tracking-[0.3em] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.50 0.04 80)" }}
                >
                  STEP {step.num}
                </p>

                {/* 標題 */}
                <h3
                  className="text-lg lg:text-xl font-semibold mb-3"
                  style={{ fontFamily: "'Noto Serif TC', serif", color: "#e8d9b0" }}
                >
                  {step.title}
                </h3>

                {/* 說明 */}
                <p
                  className="text-sm leading-relaxed max-w-xs"
                  style={{ color: "oklch(0.62 0.03 80)", fontFamily: "'Noto Sans TC', sans-serif" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
