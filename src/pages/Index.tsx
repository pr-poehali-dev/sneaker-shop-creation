import React from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import CategorySection from "@/components/sections/CategorySection";
import ProductSection from "@/components/sections/ProductSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Footer from "@/components/layout/Footer";
import { featuredProducts, popularCategories } from "@/data/productsData";
import { footerSections } from "@/data/footerData";
import { useCart } from "@/hooks/useCart";

const Index = () => {
  const { addToCart, getCartItemsCount } = useCart();

  const handleAddToCart = (id: string) => {
    addToCart(id);
    console.log(`Added product ${id} to cart`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItemsCount={getCartItemsCount()} />

      <main>
        <section className="container py-8">
          <HeroBanner
            title="Новая коллекция 2025"
            subtitle="Откройте для себя революционный комфорт и стиль с нашей новой коллекцией кроссовок. Специальное предложение: скидка 20% на предзаказ."
            backgroundImage="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            ctaText="Смотреть коллекцию"
            ctaLink="/collection/2025"
          />
        </section>

        <CategorySection
          title="Популярные категории"
          categories={popularCategories}
        />

        <ProductSection
          title="Популярные модели"
          products={featuredProducts}
          onAddToCart={handleAddToCart}
          viewAllLink="/products"
        />

        <NewsletterSection />
      </main>

      <Footer sections={footerSections} />
    </div>
  );
};

export default Index;
