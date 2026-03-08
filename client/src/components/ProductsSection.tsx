/*
 * ProductsSection — 產品展示區塊
 * 展示口袋相片（Beta）與口袋預約（即將上線）
 * 風格：玻璃態卡片 + 金色邊框 + 手機截圖
 */

import { toast } from "sonner";

const PHOTO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663413754587/TgZsh9WDBCkcE3sdpSsW6u/pocket-photo-card-26YmXqTeHDX34eBioU4h6v.webp";
const BOOKING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663413754587/TgZsh9WDBCkcE3sdpSsW6u/pocket-booking-card-jcDmWqVqk655n2FarSnkr9.webp";

const products = [
  {
    id: "photo",
    name: "口袋相片",
    nameEn: "Pocket Photo",
    status: "beta",
    statusLabel: "BETA",
    description: "專業相片管理與分享平台，輕鬆整理、展示您的精彩瞬間。支援高畫質上傳、智慧分類與私密相簿功能。",
    features: ["高畫質相片儲存", "智慧相簿分類", "一鍵分享連結", "私密相簿保護"],
    image: PHOTO_IMG,
    cta: "立即體驗",
    available: true,
  },
  {
    id: "booking",
    name: "口袋預約",
    nameEn: "Pocket Booking",
    status: "coming",
    statusLabel: "即將上線",
    description: "專為工作室、美業、實體店面設計的智慧預約系統。讓客戶隨時隨地完成預約，告別繁瑣的電話排程。",
    features: ["線上即時預約", "工作室 / 美業適用", "自動提醒通知", "多店面管理"],
    image: BOOKING_IMG,
    cta: "搶先登記",
    available: false,
  },
];

export default function ProductsSection() {
  const handleAction = (product: (typeof products)[0]) => {
    if (product.available) {
      toast("即將開放", { description: `${product.name} Beta 版即將開放，敬請期待！` });
    } else {
      toast("搶先登記成功", { description: `感謝您對 ${product.name} 的興趣，我們將優先通知您！` });
    }
  };

  return (
    <section id="products" className="py-24 lg:py-32 relative">
      {/* 背景紋理 */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663413754587/TgZsh9WDBCkcE3sdpSsW6u/city-texture-CTBAdxTKeX7PeqYHCzPvx9.webp)`,
          backgroundSize: "400px 400px",
        }}
      />

      <div className="relative container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* 區塊標題 */}
        <div className="text-center mb-16 lg:mb-20">
          <p
            className="text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c8a84b" }}
          >
            Our Products
          </p>
          <h2
            className="text-3xl lg:text-5xl font-semibold mb-4"
            style={{ fontFamily: "'Noto Serif TC', serif", color: "#e8d9b0" }}
          >
            城市旗下產品
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        {/* 產品卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`card-gold-border rounded-2xl overflow-hidden group transition-all duration-500 ${
                product.status === "coming" ? "opacity-80" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* 手機圖片 */}
                <div
                  className="relative lg:w-48 xl:w-56 flex-shrink-0 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.14 0.05 145) 0%, oklch(0.20 0.06 145) 100%)",
                    minHeight: "240px",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: "center top" }}
                  />
                  {/* 漸層遮罩 */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to right, transparent 60%, oklch(0.17 0.05 145 / 80%) 100%)",
                    }}
                  />
                </div>

                {/* 文字內容 */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    {/* 標題與狀態 */}
                    <div className="flex items-center gap-3 mb-3">
                      <h3
                        className="text-xl lg:text-2xl font-semibold"
                        style={{ fontFamily: "'Noto Serif TC', serif", color: "#e8d9b0" }}
                      >
                        {product.name}
                      </h3>
                      {product.status === "beta" ? (
                        <span className="badge-beta">{product.statusLabel}</span>
                      ) : (
                        <span className="badge-coming">{product.statusLabel}</span>
                      )}
                    </div>
                    <p
                      className="text-xs tracking-[0.15em] mb-4"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c8a84b" }}
                    >
                      {product.nameEn}
                    </p>
                    <p
                      className="text-sm leading-relaxed mb-5"
                      style={{ color: "oklch(0.65 0.03 80)", fontFamily: "'Noto Sans TC', sans-serif" }}
                    >
                      {product.description}
                    </p>

                    {/* 功能列表 */}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2 text-xs"
                          style={{ color: "oklch(0.70 0.03 80)", fontFamily: "'Noto Sans TC', sans-serif" }}
                        >
                          <span
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: "#c8a84b" }}
                          />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleAction(product)}
                    className={`w-full py-2.5 rounded-md text-sm font-semibold transition-all duration-300 ${
                      product.available
                        ? "btn-gold relative overflow-hidden"
                        : ""
                    }`}
                    style={
                      !product.available
                        ? {
                            border: "1px solid oklch(0.72 0.12 80 / 30%)",
                            color: "oklch(0.72 0.08 80)",
                            fontFamily: "'Noto Sans TC', sans-serif",
                          }
                        : {}
                    }
                    onMouseEnter={
                      !product.available
                        ? (e) => {
                            e.currentTarget.style.borderColor = "oklch(0.72 0.12 80 / 60%)";
                            e.currentTarget.style.color = "#c8a84b";
                          }
                        : undefined
                    }
                    onMouseLeave={
                      !product.available
                        ? (e) => {
                            e.currentTarget.style.borderColor = "oklch(0.72 0.12 80 / 30%)";
                            e.currentTarget.style.color = "oklch(0.72 0.08 80)";
                          }
                        : undefined
                    }
                  >
                    {product.available ? <span>{product.cta}</span> : product.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
