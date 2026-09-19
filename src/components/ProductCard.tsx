import React from 'react';
import { Download, ShoppingBag, ExternalLink, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, navigateToStarterGuide } = useApp();

  const handleAction = () => {
    if (product.isFree) {
      navigateToStarterGuide();
    } else {
      addToCart(product);
    }
  };

  return (
    <article
      id={`product-${product.id}`}
      className="flex flex-col h-full bg-white rounded-2xl border border-[#C8A96A]/30 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
    >
      {/* Product Image Frame */}
      <div className="relative aspect-[4/5] bg-[#FAF7F2] overflow-hidden flex items-center justify-center p-4 border-b border-[#E8E2D5]">
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

        {/* Digital PDF Tag */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#173F32] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#E8E2D5] shadow-xs flex items-center gap-1">
          <Download className="w-3 h-3 text-[#C8A96A]" />
          <span>Digital PDF</span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 justify-between bg-white">
        <div>
          {/* Header & Price */}
          <div className="flex items-baseline justify-between gap-2 mb-3">
            <span className="text-xl sm:text-2xl font-bold font-serif text-[#173F32] tracking-tight">
              {product.price}
            </span>
            <span className="text-xs text-[#2F5D50] font-semibold uppercase tracking-wider">
              {product.isFree ? 'Free Download' : 'ZAR • PayFast Checkout'}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#173F32] leading-snug group-hover:text-[#2F5D50] transition-colors mb-2">
            <a
              href={product.productUrl}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] rounded"
            >
              {product.productName}
            </a>
          </h3>

          {/* Short Description */}
          <p className="text-sm text-[#4A5550] leading-relaxed line-clamp-3 mb-6 font-sans">
            {product.description}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-3 border-t border-[#FAF7F2]">
          <button
            type="button"
            onClick={handleAction}
            className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] active:scale-[0.98] ${
              product.isFree
                ? 'bg-[#C8A96A] text-[#173F32] hover:bg-[#DFCA95] shadow-sm hover:shadow'
                : 'bg-[#173F32] text-[#FAF7F2] hover:bg-[#2F5D50] shadow-sm hover:shadow'
            }`}
          >
            {product.isFree ? (
              <>
                <Download className="w-4 h-4 text-[#173F32]" />
                <span>Get Free Starter Guide</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-[#C8A96A]" />
                <span>Add to Cart / Buy Now</span>
              </>
            )}
          </button>

          <a
            href={product.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-xs text-[#2F5D50] hover:text-[#173F32] font-semibold transition-colors"
          >
            <span>View full WooCommerce details</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </article>
  );
};
