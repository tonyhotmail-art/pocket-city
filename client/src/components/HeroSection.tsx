/*
 * HeroSection — 全螢幕英雄區塊
 * 背景：城市夜景圖 + 深墨綠漸層疊加 + 光點粒子動畫
 * 文字：暖白 + 金色漸層標題
 */

import { useEffect, useRef } from "react";
import { toast } from "sonner";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663413754587/TgZsh9WDBCkcE3sdpSsW6u/hero-bg-fiZn2D8EusZxTtpCnQUQvK.webp";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacityDir: number;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // 初始化粒子
    const count = Math.floor(window.innerWidth / 8);
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.3,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      opacityDir: Math.random() > 0.5 ? 0.005 : -0.005,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacityDir;
        if (p.opacity > 0.8 || p.opacity < 0.1) p.opacityDir *= -1;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 168, 75, ${p.opacity})`;
        ctx.fill();
      });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  const handleJoin = () => {
    toast("功能即將上線", { description: "敬請期待口袋城市正式開放" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景圖 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* 深色漸層疊加 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.10 0.04 145 / 75%) 0%, oklch(0.10 0.04 145 / 85%) 60%, oklch(0.12 0.04 145 / 98%) 100%)",
        }}
      />
      {/* 光點粒子 Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* 內容 */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-7xl text-center">
        {/* 英文副標 */}
        <p
          className="animate-fade-up text-xs lg:text-sm tracking-[0.35em] uppercase mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c8a84b" }}
        >
          Pocket City · SaaS Platform
        </p>

        {/* 主標題 */}
        <h1
          className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight mb-6"
          style={{ fontFamily: "'Noto Serif TC', serif", color: "#e8d9b0" }}
        >
          一個帳號
          <br />
          <span className="text-gold-gradient">通行所有城市服務</span>
        </h1>

        {/* 副標題 */}
        <p
          className="animate-fade-up-delay-2 text-base lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "oklch(0.72 0.03 80)", fontFamily: "'Noto Sans TC', sans-serif" }}
        >
          加入口袋城市，即可使用旗下所有 Beta 版服務。
          <br className="hidden sm:block" />
          口袋相片、口袋預約，更多精彩持續上線。
        </p>

        {/* CTA 按鈕組 */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleJoin}
            className="btn-gold btn-gold-pulse px-8 py-3.5 rounded-md text-sm font-semibold relative overflow-hidden w-full sm:w-auto"
          >
            <span>免費成為會員</span>
          </button>
          <a
            href="#products"
            className="flex items-center gap-2 text-sm px-8 py-3.5 rounded-md transition-all duration-300 w-full sm:w-auto justify-center"
            style={{
              color: "oklch(0.80 0.04 80)",
              border: "1px solid oklch(0.72 0.12 80 / 30%)",
              fontFamily: "'Noto Sans TC', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "oklch(0.72 0.12 80 / 70%)";
              e.currentTarget.style.color = "#c8a84b";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "oklch(0.72 0.12 80 / 30%)";
              e.currentTarget.style.color = "oklch(0.80 0.04 80)";
            }}
          >
            探索產品
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* 統計數字 */}
        <div
          className="animate-fade-up-delay-3 mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { num: "1", label: "帳號通行" },
            { num: "2+", label: "旗下產品" },
            { num: "Beta", label: "搶先體驗" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="text-2xl lg:text-3xl font-semibold text-gold-gradient mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {item.num}
              </div>
              <div
                className="text-xs tracking-wider"
                style={{ color: "oklch(0.60 0.03 80)", fontFamily: "'Noto Sans TC', sans-serif" }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部滾動提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-[0.2em]" style={{ color: "oklch(0.55 0.04 80)" }}>
          SCROLL
        </span>
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, oklch(0.72 0.12 80 / 60%), transparent)" }} />
      </div>
    </section>
  );
}
