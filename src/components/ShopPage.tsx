import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Download,
  ShoppingBag,
  ArrowRight,
  ExternalLink,
  Search,
  Filter,
  CheckCircle2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { FAITHWALK_PRODUCTS, FREE_STARTER_GUIDE_PRODUCT } from '../data/products';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

export const ShopPage: React.FC = () => {
  const { addToCart, navigateToHome, navigateToStarterGuide } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  // Filter products based on category and search
  const filteredProducts = useMemo(() => {
    let list = [...FAITHWALK_PRODUCTS];

    // Category filter
    if (selectedCategory === 'adult') {
      list = list.filter((p) => p.id.includes('adult') || p.id.includes('family'));
    } else if (selectedCategory === 'youth') {
      list = list.filter((p) => p.id.includes('young') || p.id.includes('teens'));
    } else if (selectedCategory === 'kids') {
      list = list.filter((p) => p.id.includes('kids'));
    } else if (selectedCategory === 'free') {
      list = list.filter((p) => p.isFree);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.productName.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.priceAmount - b.priceAmount);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.priceAmount - a.priceAmount);
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <main className="min-h-[85vh] bg-[#FAF7F2] py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#173F32]/70">
          <button
            type="button"
            onClick={navigateToHome}
            className="hover:text-[#173F32] hover:underline"
          >
            Home
          </button>
          <span>/</span>
          <span className="font-semibold text-[#173F32]">Shop Journals</span>
        </nav>

        {/* Shop Header Banner */}
        <div className="bg-[#173F32] text-white rounded-2xl p-6 sm:p-10 mb-10 shadow-xl border border-[#2F5D50] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F5D50] text-[#C8A96A] text-xs font-bold uppercase tracking-wider mb-4 border border-[#C8A96A]/40">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Official FaithWalk Collection</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F2] tracking-tight mb-3">
              FaithWalk Journal Shop
            </h1>
            <p className="text-sm sm:text-base text-[#FAF7F2]/85 leading-relaxed font-sans">
              Discover our guided Christian digital journals for adults, families, youth, teens, and kids. Each edition provides structured Scripture, reflection, prayer, and gratitude prompts.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-[#C8A96A]">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Instant Digital PDF
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> PayFast Secure ZAR Checkout
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Print or Tablet Ready
              </span>
            </div>
          </div>
        </div>

        {/* Controls Bar: Search, Category Filters, Sort */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#2F5D50]/15 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#173F32]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search journals (Adult, Teens, Family...)"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#2F5D50]/20 bg-[#FAF7F2]/40 text-sm text-[#173F32] placeholder-[#173F32]/50 focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <label htmlFor="shop-sort" className="text-xs font-bold text-[#173F32] uppercase tracking-wider">
                Sort:
              </label>
              <select
                id="shop-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-xl border border-[#2F5D50]/20 bg-[#FAF7F2] text-xs font-medium text-[#173F32] focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20 cursor-pointer"
              >
                <option value="featured">Featured Collection</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#2F5D50]/10">
            <span className="text-xs font-bold text-[#173F32] uppercase tracking-wider mr-1 hidden sm:inline">
              Category:
            </span>
            {[
              { id: 'all', label: 'All Journals' },
              { id: 'adult', label: 'Adult & Family' },
              { id: 'youth', label: 'Youth & Teens' },
              { id: 'kids', label: 'Kids Devotional' },
              { id: 'free', label: 'Free Starter Guide' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#173F32] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#FAF7F2] text-[#173F32] hover:bg-[#2F5D50]/15'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Free Starter Guide Callout Banner */}
        <div className="mb-10 bg-gradient-to-r from-[#2F5D50] to-[#173F32] rounded-2xl p-5 sm:p-6 border border-[#C8A96A]/40 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-[#C8A96A] text-[#173F32] flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
              FREE
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#FAF7F2]">
                New to Christian Daily Journaling?
              </h3>
              <p className="text-xs text-[#FAF7F2]/80">
                Download the FaithWalk Journey Starter Guide free of charge before purchasing an edition.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={navigateToStarterGuide}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#C8A96A] text-[#173F32] hover:bg-[#DFCA95] transition-all shadow-sm flex-shrink-0"
          >
            <Download className="w-3.5 h-3.5 text-[#173F32]" />
            <span>Get Free Starter Guide</span>
          </button>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#2F5D50]/15 p-8">
            <p className="font-serif text-lg font-bold text-[#173F32] mb-2">
              No journals match your search
            </p>
            <p className="text-xs text-[#173F32]/70 mb-4">
              Try adjusting your category filter or search keywords.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-[#173F32] text-white text-xs font-bold uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={`shop-product-${product.id}`}
                className="bg-white rounded-2xl border border-[#2F5D50]/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/5] bg-[#FAF7F2] overflow-hidden flex items-center justify-center p-4 border-b border-[#2F5D50]/10">
                  <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://faithwalk-journal.com/wp-content/uploads/2026/09/FaithWalk-Journal-Cover-One.png';
                    }}
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border shadow-sm ${
                          product.isFree
                            ? 'bg-[#C8A96A] text-[#173F32] border-[#DFCA95]'
                            : 'bg-[#173F32] text-[#FAF7F2] border-[#2F5D50]'
                        }`}
                      >
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Instant Download Tag */}
                  <div className="absolute bottom-3 right-3 bg-white/95 text-[#173F32] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#2F5D50]/15 shadow-xs flex items-center gap-1">
                    <Download className="w-3 h-3 text-[#C8A96A]" />
                    <span>Instant PDF</span>
                  </div>
                </div>

                {/* Body & Actions */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <span className="text-xl sm:text-2xl font-bold font-serif text-[#173F32]">
                        {product.price}
                      </span>
                      <span className="text-xs text-[#2F5D50] font-semibold uppercase tracking-wider">
                        {product.isFree ? 'Free Download' : 'ZAR • PayFast Checkout'}
                      </span>
                    </div>

                    <h2 className="font-serif text-lg font-bold text-[#173F32] group-hover:text-[#2F5D50] transition-colors leading-snug mb-2">
                      {product.productName}
                    </h2>

                    <p className="text-xs text-[#173F32]/75 leading-relaxed font-sans line-clamp-3 mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-[#FAF7F2]">
                    {/* Primary Button: Add to Cart & Open Drawer */}
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-sm active:scale-[0.98] ${
                        product.isFree
                          ? 'bg-[#C8A96A] text-[#173F32] hover:bg-[#DFCA95]'
                          : 'bg-[#173F32] text-[#FAF7F2] hover:bg-[#2F5D50]'
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4 text-[#C8A96A]" />
                      <span>{product.isFree ? 'Get Free Guide' : 'Add to Cart / Buy Now'}</span>
                    </button>

                    {/* Secondary Link: Real WooCommerce Product Page */}
                    <a
                      href={product.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-xs text-[#2F5D50] hover:text-[#173F32] font-semibold transition-colors"
                    >
                      <span>View details on WooCommerce listing</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Security & Checkout Guarantees */}
        <div className="mt-16 p-6 bg-white rounded-2xl border border-[#2F5D50]/15 text-center shadow-xs">
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-[#173F32]/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2F5D50]" />
              <span className="font-semibold">PayFast Secure ZAR Gateway</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5 text-[#2F5D50]" />
              <span className="font-semibold">Instant Digital PDF Download</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#2F5D50]" />
              <span className="font-semibold">Lifetime Access in My Account</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
