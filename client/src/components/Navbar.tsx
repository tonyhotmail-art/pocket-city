/*
 * Navbar — 口袋城市頂部導航
 * 風格：透明背景，滾動後變為深墨綠半透明
 */

import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "產品", href: "#products" },
    { label: "特色", href: "#features" },
    { label: "如何使用", href: "#how-it-works" },
  ];

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    toast("功能即將上線", {
      description: "敬請期待更多口袋城市服務",
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.12_0.04_145/90%)] backdrop-blur-xl border-b border-[oklch(0.72_0.12_80/15%)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 lg:w-10 lg:h-10">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#c8a84b] to-[#8a6e28] opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[oklch(0.12_0.04_145)] font-bold text-sm lg:text-base" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                  口
                </span>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-sm lg:text-base font-semibold tracking-wide"
                style={{ fontFamily: "'Noto Serif TC', serif", color: "#e8d9b0" }}
              >
                口袋城市
              </span>
              <span
                className="text-[10px] lg:text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c8a84b" }}
              >
                Pocket City
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: "oklch(0.75 0.03 80)",
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a84b")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.75 0.03 80)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleComingSoon}
              className="text-sm px-4 py-2 rounded-md transition-all duration-200"
              style={{
                color: "oklch(0.75 0.03 80)",
                fontFamily: "'Noto Sans TC', sans-serif",
                border: "1px solid oklch(0.72 0.12 80 / 30%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#c8a84b";
                e.currentTarget.style.borderColor = "oklch(0.72 0.12 80 / 70%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "oklch(0.75 0.03 80)";
                e.currentTarget.style.borderColor = "oklch(0.72 0.12 80 / 30%)";
              }}
            >
              登入
            </button>
            <button
              onClick={handleComingSoon}
              className="btn-gold btn-gold-pulse text-sm px-5 py-2 rounded-md font-semibold relative overflow-hidden"
            >
              <span>免費加入</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="開啟選單"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ backgroundColor: "#c8a84b" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "#c8a84b" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ backgroundColor: "#c8a84b" }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: "oklch(0.72 0.12 80 / 20%)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-sm"
                style={{ color: "oklch(0.75 0.03 80)", fontFamily: "'Noto Sans TC', sans-serif" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <button
                onClick={handleComingSoon}
                className="w-full text-sm py-2.5 rounded-md"
                style={{
                  color: "oklch(0.75 0.03 80)",
                  border: "1px solid oklch(0.72 0.12 80 / 30%)",
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}
              >
                登入
              </button>
              <button
                onClick={handleComingSoon}
                className="btn-gold w-full text-sm py-2.5 rounded-md font-semibold relative overflow-hidden"
              >
                <span>免費加入</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
