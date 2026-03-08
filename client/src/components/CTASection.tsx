/*
 * CTASection — 行動呼籲區塊
 * 金色漸層背景 + 強力 CTA
 */

import { toast } from "sonner";

export default function CTASection() {
  const handleJoin = () => {
    toast("功能即將上線", { description: "感謝您的興趣！口袋城市正式開放時將第一時間通知您。" });
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* 背景 */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, oklch(0.15 0.06 145) 0%, oklch(0.20 0.07 145) 50%, oklch(0.15 0.06 145) 100%)",
        }}
      />

      {/* 金色光暈裝飾 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.12 80 / 12%) 0%, transparent 70%)",
        }}
      />

      {/* 上下金線 */}
      <div className="absolute top-0 left-0 right-0 gold-divider" />
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />

      <div className="relative container mx-auto px-6 lg:px-8 max-w-4xl text-center">
        <p
          className="text-xs tracking-[0.35em] uppercase mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c8a84b" }}
        >
          Join Pocket City
        </p>

        <h2
          className="text-3xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-6"
          style={{ fontFamily: "'Noto Serif TC', serif", color: "#e8d9b0" }}
        >
          現在加入，
          <br />
          <span className="text-gold-gradient">搶先體驗城市生活</span>
        </h2>

        <p
          className="text-base lg:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: "oklch(0.65 0.03 80)", fontFamily: "'Noto Sans TC', sans-serif" }}
        >
          一個帳號，解鎖口袋城市旗下所有服務。
          <br className="hidden sm:block" />
          免費加入，立即體驗口袋相片 Beta 版，並搶先登記口袋預約。
        </p>

        {/* 按鈕組 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleJoin}
            className="btn-gold btn-gold-pulse px-10 py-4 rounded-md text-base font-semibold relative overflow-hidden w-full sm:w-auto"
          >
            <span>免費成為會員</span>
          </button>
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: "oklch(0.55 0.03 80)", fontFamily: "'Noto Sans TC', sans-serif" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9 4 10.5l.5-3.5L2 4.5 5.5 4 7 1z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
            </svg>
            免費加入 · 無需信用卡
          </div>
        </div>

        {/* 服務標籤 */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
          {["口袋相片 Beta", "口袋預約（即將）", "更多服務持續上線"].map((tag) => (
            <span
              key={tag}
              className="text-xs px-4 py-1.5 rounded-full"
              style={{
                border: "1px solid oklch(0.72 0.12 80 / 25%)",
                color: "oklch(0.65 0.04 80)",
                fontFamily: "'Noto Sans TC', sans-serif",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
