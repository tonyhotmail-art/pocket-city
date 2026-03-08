/*
 * Footer — 頁尾
 * 深墨綠背景 + 金色品牌標識 + 版權資訊
 */

import { toast } from "sonner";

export default function Footer() {
  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    toast("功能即將上線", { description: "敬請期待" });
  };

  return (
    <footer
      className="relative pt-16 pb-8"
      style={{ background: "oklch(0.10 0.04 145)", borderTop: "1px solid oklch(0.72 0.12 80 / 15%)" }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* 品牌區 */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#c8a84b] to-[#8a6e28]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-bold text-base"
                    style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.12 0.04 145)" }}
                  >
                    口
                  </span>
                </div>
              </div>
              <div>
                <div
                  className="text-base font-semibold"
                  style={{ fontFamily: "'Noto Serif TC', serif", color: "#e8d9b0" }}
                >
                  口袋城市
                </div>
                <div
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c8a84b" }}
                >
                  Pocket City
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: "oklch(0.55 0.03 80)", fontFamily: "'Noto Sans TC', sans-serif" }}
            >
              口袋城市是一個整合型 SaaS 平台，致力於為用戶提供便捷、高效的數位生活工具。一個帳號，通行所有城市服務。
            </p>
          </div>

          {/* 產品 */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c8a84b" }}
            >
              城市服務
            </h4>
            <ul className="space-y-3">
              {[
                { label: "口袋相片", badge: "Beta" },
                { label: "口袋預約", badge: "即將" },
                { label: "更多服務", badge: "規劃中" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <a
                    href="#products"
                    className="text-sm transition-colors duration-200"
                    style={{ color: "oklch(0.60 0.03 80)", fontFamily: "'Noto Sans TC', sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a84b")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.60 0.03 80)")}
                  >
                    {item.label}
                  </a>
                  <span
                    className="text-[9px] px-1.5 py-0.5 rounded"
                    style={{
                      border: "1px solid oklch(0.72 0.12 80 / 25%)",
                      color: "oklch(0.60 0.04 80)",
                    }}
                  >
                    {item.badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 關於 */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c8a84b" }}
            >
              關於
            </h4>
            <ul className="space-y-3">
              {["關於我們", "服務條款", "隱私政策", "聯絡我們"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={handleComingSoon}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "oklch(0.60 0.03 80)", fontFamily: "'Noto Sans TC', sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a84b")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.60 0.03 80)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 分隔線 */}
        <div className="gold-divider mb-8" />

        {/* 版權 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: "oklch(0.45 0.02 80)", fontFamily: "'Noto Sans TC', sans-serif" }}
          >
            © 2025 口袋城市 Pocket City. All rights reserved.
          </p>
          <p
            className="text-xs tracking-[0.1em]"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "oklch(0.45 0.04 80)" }}
          >
            Built with care · 用心打造
          </p>
        </div>
      </div>
    </footer>
  );
}
