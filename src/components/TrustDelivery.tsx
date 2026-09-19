import React from 'react';
import { FileText, Zap, ShieldCheck, CreditCard, DownloadCloud, Truck } from 'lucide-react';

export const TrustDelivery: React.FC = () => {
  const trustPoints = [
    {
      title: 'Digital PDF Journals',
      description: 'Optimized high-resolution PDF format designed for tablet note-taking (GoodNotes, Notability) or home printing.',
      icon: FileText,
    },
    {
      title: 'Instant Digital Access',
      description: 'Your download links are generated immediately upon completing your order so you can start right away.',
      icon: Zap,
    },
    {
      title: 'Secure Checkout',
      description: 'Orders are processed through bank-grade encryption to ensure complete privacy and transaction safety.',
      icon: ShieldCheck,
    },
    {
      title: 'PayFast Payment',
      description: 'Powered by PayFast, South Africa’s leading and trusted payment gateway supporting Cards, Instant EFT and more.',
      icon: CreditCard,
    },
    {
      title: 'Downloadable Products',
      description: 'All journals are permanent downloads with no recurring subscriptions or hidden membership fees.',
      icon: DownloadCloud,
    },
    {
      title: 'No Shipping Required',
      description: 'Zero shipping fees and zero delivery waiting times. Accessible worldwide directly from your screen.',
      icon: Truck,
    },
  ];

  return (
    <section id="digital-delivery" className="py-16 sm:py-24 bg-white border-t border-[#E8E2D5]" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#C8A96A] block mb-2">
            Peace of Mind
          </span>
          <h2 id="trust-heading" className="font-serif text-3xl sm:text-4xl font-bold text-[#173F32] tracking-tight">
            Digital Delivery & Trust
          </h2>
          <p className="mt-3 text-base text-[#52635B] font-sans">
            Every FaithWalk Journal is delivered digitally with instant access, transparent terms, and secure payment processing.
          </p>
        </div>

        {/* 6 Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#FAF7F2]/60 border border-[#E8E2D5] hover:border-[#C8A96A]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2F5D50] text-[#FAF7F2] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Icon className="w-6 h-6 text-[#C8A96A]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#173F32] mb-1">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52635B] leading-relaxed font-sans">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
