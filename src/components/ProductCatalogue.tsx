import React from 'react';
import { FAITHWALK_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProductCatalogue: React.FC = () => {
  const { navigateToShop } = useApp();

  return (
    <section id="shop-catalog" className="py-16 sm:py-24 bg-white relative border-y border-[#E8E2D5]" aria-labelledby="shop-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173F32]/10 text-[#173F32] text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#C8A96A]" />
            <span>Digital Journal Collection</span>
          </div>

          <h2 id="shop-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173F32] tracking-tight">
            SHOP FAITHWALK JOURNALS
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52635B] max-w-2xl mx-auto font-sans leading-relaxed">
            Thoughtfully crafted Christian digital journals designed to guide you into intentional, consistent daily rhythms of faith and prayer.
          </p>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#52635B] tracking-wide">
            <span>Store Currency: South African Rand (ZAR)</span>
            <span>•</span>
            <span>Instant PDF Access</span>
          </div>
        </div>

        {/* Product Cards Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {FAITHWALK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Store link footer callout */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#52635B] mb-3">
            Looking to filter by category or view all digital editions?
          </p>
          <button
            type="button"
            onClick={navigateToShop}
            className="inline-flex items-center gap-2 font-bold text-sm text-[#173F32] hover:text-[#C8A96A] transition-colors uppercase tracking-wider underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] rounded py-1 px-2"
          >
            <span>Explore the full FaithWalk Shop directory</span>
            <ArrowRight className="w-4 h-4 text-[#C8A96A]" />
          </button>
        </div>

      </div>
    </section>
  );
};
