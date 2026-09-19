import React from 'react';
import { Download, CheckCircle2, Sparkles, BookOpen, Heart, ArrowRight, ExternalLink } from 'lucide-react';
import { FREE_STARTER_GUIDE_PRODUCT } from '../data/products';
import { useApp } from '../context/AppContext';

export const FreeStarterGuide: React.FC = () => {
  const guide = FREE_STARTER_GUIDE_PRODUCT;
  const { addToCart } = useApp();

  const keyFeatures = [
    {
      title: 'Scripture Centered',
      desc: 'Daily scripture anchors to guide your heart and meditation throughout the day.',
      icon: BookOpen,
    },
    {
      title: 'Guided Reflection',
      desc: 'Thoughtful prompts to help you slow down and hear what God is saying.',
      icon: Sparkles,
    },
    {
      title: 'Prayer & Gratitude',
      desc: 'Dedicated spaces to lift your praises, petitions, and heartfelt thanksgiving.',
      icon: Heart,
    },
    {
      title: 'Faith in Action',
      desc: 'Practical daily challenges to walk out biblical truth in your life and relationships.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="starter-guide" className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden" aria-labelledby="free-guide-heading">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2F5D50]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#C8A96A]/30 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-14">
            
            {/* Left Column: Product Cover Artwork */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group max-w-sm sm:max-w-md w-full">
                {/* Gold glow backing */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#C8A96A]/40 to-[#2F5D50]/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                
                {/* Journal Cover Frame */}
                <div className="relative rounded-xl overflow-hidden bg-[#173F32] shadow-2xl border-2 border-[#C8A96A]/60 aspect-[1/1.3] flex items-center justify-center">
                  <img
                    src={guide.imageUrl}
                    alt="FaithWalk Journey Starter Guide Free Christian Digital Journal Cover"
                    className="w-full h-full object-contain p-2 hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Free Ribbon Badge */}
                  <div className="absolute top-4 right-4 bg-[#C8A96A] text-[#173F32] text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-md tracking-wider border border-white/50">
                    100% Free
                  </div>
                </div>

                {/* Instant Digital Delivery Tag */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-[#2F5D50] tracking-wide uppercase bg-[#FAF7F2] py-2 px-4 rounded-full border border-[#C8A96A]/30 text-center">
                  <Download className="w-3.5 h-3.5 text-[#C8A96A]" />
                  <span>Instant PDF Download • No Expiry</span>
                </div>
              </div>
            </div>

            {/* Right Column: Copy, Value, and Direct CTA */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#173F32]/10 text-[#173F32] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A96A]" />
                <span>Special Invitation</span>
              </div>

              <h2 id="free-guide-heading" className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#173F32] tracking-tight leading-tight">
                FaithWalk Journey Starter Guide — <span className="text-[#C8A96A]">FREE</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#36433E] leading-relaxed font-sans">
                Begin your FaithWalk with a free digital starter guide designed around Scripture, reflection, prayer, gratitude and practical faith in action.
              </p>

              {/* 4 Pillars in a clean, non-slop 2x2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {keyFeatures.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div key={feat.title} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2]/80 border border-[#C8A96A]/20">
                      <div className="p-2 rounded-lg bg-[#173F32] text-[#C8A96A] flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#173F32]">{feat.title}</h3>
                        <p className="text-xs text-[#52635B] mt-0.5 leading-normal">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Area */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 border-t border-[#E8E2D5]">
                <button
                  type="button"
                  onClick={() => addToCart(guide)}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase bg-[#C8A96A] hover:bg-[#DFCA95] text-[#173F32] shadow-md hover:shadow-xl transition-all duration-200 border border-[#E0C792] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173F32] active:scale-[0.98]"
                >
                  <Download className="w-4 h-4 text-[#173F32]" />
                  <span>GET MY FREE STARTER GUIDE</span>
                  <ArrowRight className="w-4 h-4 text-[#173F32]" />
                </button>

                <a
                  href={guide.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#2F5D50] hover:text-[#173F32] font-semibold text-center sm:text-left inline-flex items-center gap-1"
                >
                  <span>Or open on WooCommerce</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

