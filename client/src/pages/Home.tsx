/*
 * 口袋城市首頁
 * 設計風格：沉浸式深色奢華（Immersive Dark Luxury）
 * 主色：極深墨綠 + 金色光澤
 * 字型：Noto Serif TC（標題）/ Noto Sans TC（內文）/ Cormorant Garamond（英文裝飾）
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}
