import React from 'react';
import { ArrowRight, BookOpen, Download } from 'lucide-react';

interface HeroProps {
  onShopClick?: () => void;
  onFreeGuideClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onFreeGuideClick }) => {
  const handleFreeGuide = (e: React.MouseEvent) => {
    if (onFreeGuideClick) {
      e.preventDefault();
      onFreeGuideClick();
    }
  };

  const handleShop = (e: React.MouseEvent) => {
    if (onShopClick) {
      e.preventDefault();
      onShopClick();
    }
  };

  return (
    <section className="relative w-full bg-[#173F32] overflow-hidden" aria-label="FaithWalk Hero Showcase">
      {/* Edge-to-edge Hero Artwork Container with precise aspect-ratio preservation */}
      <div className="relative w-full max-w-[1920px] mx-auto overflow-hidden">
        {/* 
          Clean artwork ratio: 1600 width by 819 height.
          - The old embedded navigation bar at the top has been removed.
          - The unclickable embedded buttons in the PNG have been cleanly removed from the artwork.
          - Preserves sunrise, mountain landscape, pathway, FaithWalk branding, headline, 
            Scripture / Reflection / Prayer / Growth messaging, and journal imagery.
        */}
        <div className="relative w-full aspect-[1600/819] overflow-hidden bg-[#173F32]">
          <picture>
            <source srcSet="/assets/faithwalk-hero-clean.png" type="image/png" />
            <img
              src="/assets/faithwalk-hero-clean.png"
              alt="FaithWalk Christian Digital Journals — Sunrise landscape over pathway with guided journal"
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              loading="eager"
              decoding="async"
            />
          </picture>

          {/* Desktop & Tablet Overlay for Lower Central CTA Buttons */}
          <div className="hidden sm:flex absolute inset-x-0 bottom-0 pb-6 sm:pb-8 md:pb-10 lg:pb-12 pt-16 flex-col items-center justify-end bg-gradient-to-t from-[#173F32]/90 via-[#173F32]/40 to-transparent">
            {/* Tagline reassurance */}
            <p className="text-xs sm:text-sm md:text-base font-serif italic text-[#FAF7F2] drop-shadow-md mb-3 sm:mb-4 tracking-wide text-center px-4">
              Begin your daily rhythm of Scripture, reflection, prayer & gratitude.
            </p>

            {/* Real Clickable HTML Buttons - Styled with exact Covenant Gold & Deep Forest */}
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xl px-4 z-10">
              {/* Primary CTA: Covenant Gold background, Deep Forest text */}
              <a
                href="#starter-guide"
                onClick={handleFreeGuide}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-[#C5A46D] text-[#173F32] hover:bg-[#D4B886] active:scale-[0.98] shadow-lg hover:shadow-xl transition-all duration-200 border border-[#D4B886] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#173F32]"
              >
                <Download className="w-4 h-4 text-[#173F32]" aria-hidden="true" />
                <span>GET MY FREE STARTER GUIDE</span>
              </a>

              {/* Secondary CTA: Deep Forest background, Covenant Gold border, White text */}
              <a
                href="#shop-catalog"
                onClick={handleShop}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-[#173F32] text-white hover:bg-[#2F4F4F] active:scale-[0.98] shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-[#C5A46D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#173F32]"
              >
                <BookOpen className="w-4 h-4 text-[#C5A46D]" aria-hidden="true" />
                <span>SHOP FAITHWALK JOURNALS</span>
                <ArrowRight className="w-4 h-4 text-[#C5A46D]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Dedicated CTA Panel (Prevents any overlap with artwork text on small screens) */}
        <div className="sm:hidden bg-[#173F32] px-4 pt-4 pb-6 border-t border-[#2F4F4F]/60 text-center">
          <p className="text-xs font-serif italic text-[#FAF7F2]/90 mb-3.5">
            Begin your daily rhythm of Scripture, reflection, prayer & gratitude.
          </p>

          <div className="flex flex-col gap-2.5">
            {/* Primary CTA: Covenant Gold background, Deep Forest text */}
            <a
              href="#starter-guide"
              onClick={handleFreeGuide}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase bg-[#C5A46D] text-[#173F32] hover:bg-[#D4B886] active:scale-[0.98] shadow-md transition-all border border-[#D4B886]"
            >
              <Download className="w-4 h-4 text-[#173F32]" aria-hidden="true" />
              <span>GET MY FREE STARTER GUIDE</span>
            </a>

            {/* Secondary CTA: Deep Forest background, Covenant Gold border, White text */}
            <a
              href="#shop-catalog"
              onClick={handleShop}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase bg-[#173F32] text-white hover:bg-[#2F4F4F] active:scale-[0.98] shadow-md transition-all border-2 border-[#C5A46D]"
            >
              <BookOpen className="w-4 h-4 text-[#C5A46D]" aria-hidden="true" />
              <span>SHOP FAITHWALK JOURNALS</span>
              <ArrowRight className="w-4 h-4 text-[#C5A46D]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
