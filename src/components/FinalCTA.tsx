import React from 'react';
import { Download, BookOpen, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FinalCTA: React.FC = () => {
  const { navigateToStarterGuide, navigateToShop } = useApp();

  return (
    <section className="py-20 sm:py-28 bg-[#173F32] text-[#FAF7F2] relative overflow-hidden" aria-label="Final Invitation">
      {/* Subtle radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2F5D50]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Closing Four Words */}
        <div className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] mb-6 leading-tight">
          <span>Your Journey. </span>
          <span className="text-[#C8A96A]">Faith. </span>
          <span>Focus. </span>
          <span className="text-[#C8A96A]">Growth.</span>
        </div>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#FAF7F2]/85 font-sans leading-relaxed mb-10">
          Make today the day you step into an intentional daily walk with God. Download your free starter guide or discover the guided journal crafted for you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-lg mx-auto">
          {/* Primary CTA */}
          <button
            type="button"
            onClick={navigateToStarterGuide}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-[#C8A96A] text-[#173F32] hover:bg-[#DFCA95] active:scale-[0.98] shadow-xl hover:shadow-2xl transition-all duration-200 border border-[#E0C792] focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#173F32]" aria-hidden="true" />
            <span>BEGIN YOUR FAITHWALK — FREE</span>
          </button>

          {/* Secondary CTA */}
          <button
            type="button"
            onClick={navigateToShop}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-[#2F5D50] hover:bg-[#3B6F60] text-white active:scale-[0.98] shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-[#C8A96A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#C8A96A]" aria-hidden="true" />
            <span>SHOP JOURNALS</span>
            <ArrowRight className="w-4 h-4 text-[#C8A96A]" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-8 text-xs text-[#FAF7F2]/60 font-sans tracking-wide">
          Instant digital PDF access • Compatible with all devices & printable
        </p>

      </div>
    </section>
  );
};

