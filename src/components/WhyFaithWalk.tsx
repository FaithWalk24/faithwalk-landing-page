import React from 'react';
import { BookOpen, Compass, Heart, Footprints } from 'lucide-react';

export const WhyFaithWalk: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'READ',
      subtitle: 'Scripture',
      description: 'Anchor your heart and mind in God’s unchanging Word each day with purposeful biblical verses.',
      icon: BookOpen,
    },
    {
      step: '02',
      title: 'REFLECT',
      subtitle: 'Consider what God is teaching you',
      description: 'Pause the noise of life. Meditate on biblical truth and discern how God is speaking to your current season.',
      icon: Compass,
    },
    {
      step: '03',
      title: 'PRAY',
      subtitle: 'Respond in prayer',
      description: 'Bring your honest petitions, thanksgiving, and surrendered heart before God in focused, written communion.',
      icon: Heart,
    },
    {
      step: '04',
      title: 'LIVE',
      subtitle: 'Put your faith into action',
      description: 'Translate revelation into obedience. Walk out genuine kindness, courage, and faith in your daily routine.',
      icon: Footprints,
    },
  ];

  return (
    <section id="why-faithwalk" className="py-20 sm:py-28 bg-[#FAF7F2] relative" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-[#C8A96A] block mb-2 font-sans">
            The Daily FaithWalk Rhythm
          </span>
          <h2 id="why-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173F32] tracking-tight">
            How FaithWalk Guides Your Walk with God
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52635B] font-sans leading-relaxed">
            Spiritual growth is not about overwhelming complexity. It is built upon a faithful, quiet daily rhythm that transforms your inner life day by day.
          </p>
        </div>

        {/* 4-Step Pathway Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E8E2D5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group"
              >
                {/* Top Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#173F32] text-[#C8A96A] flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-2xl font-serif font-bold text-[#C8A96A]/50 group-hover:text-[#C8A96A] transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#173F32] tracking-wide mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-bold tracking-wider uppercase text-[#C8A96A] mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-sm text-[#52635B] leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="w-12 h-0.5 bg-[#C8A96A]/40 mt-6 group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
