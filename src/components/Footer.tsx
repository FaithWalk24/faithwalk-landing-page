import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface FooterProps {
  onContactClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const currentYear = new Date().getFullYear();
  const {
    navigateToHome,
    navigateToShop,
    navigateToAccount,
    navigateToApps,
    navigateToStarterGuide,
    setIsCartOpen,
  } = useApp();

  return (
    <footer className="bg-[#112F26] text-[#FAF7F2] border-t border-[#2F4F4F]/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-[#2F4F4F]/50">
          
          {/* Brand & Purpose (2 cols on large) */}
          <div className="lg:col-span-2">
            <button
              type="button"
              onClick={navigateToHome}
              className="inline-flex items-center gap-3 mb-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C5A46D]/60 bg-[#2F5D50] flex items-center justify-center">
                <img
                  src="https://faithwalk-journal.com/wp-content/uploads/2026/09/cropped-FaithWalk_Journal_app_icon_202606302133-180x180.jpeg"
                  alt="FaithWalk Journal Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="font-serif text-2xl font-bold text-[#FAF7F2] group-hover:text-[#C5A46D] transition-colors">
                FaithWalk <span className="text-[#C5A46D]">Journal</span>
              </span>
            </button>

            <p className="text-sm text-[#FAF7F2]/75 leading-relaxed font-sans max-w-sm mb-4">
              Christian digital journals and digital sanctuaries created to help believers cultivate a consistent daily rhythm of Scripture, reflection, prayer, gratitude, and purposeful faith in action.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#C5A46D]">
              <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
              <span>Instant Digital Delivery • PayFast Protected Checkout</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-serif text-base font-semibold text-[#C5A46D] uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={navigateToHome}
                  className="text-[#FAF7F2]/80 hover:text-[#C5A46D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={navigateToShop}
                  className="text-[#FAF7F2]/80 hover:text-[#C5A46D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded text-left cursor-pointer"
                >
                  Shop All Journals
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={navigateToApps}
                  className="text-[#FAF7F2]/80 hover:text-[#C5A46D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded text-left cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>Digital Apps</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={navigateToStarterGuide}
                  className="text-[#C5A46D] hover:text-[#DFCA95] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Free Starter Guide</span>
                  <span className="text-[10px] bg-[#C5A46D]/20 px-1.5 py-0.5 rounded border border-[#C5A46D]/40">
                    FREE
                  </span>
                </button>
              </li>
              <li>
                <a
                  href="#why-faithwalk"
                  className="text-[#FAF7F2]/80 hover:text-[#C5A46D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded"
                >
                  About FaithWalk
                </a>
              </li>
            </ul>
          </div>

          {/* Account & Customer Care */}
          <div>
            <h3 className="font-serif text-base font-semibold text-[#C5A46D] uppercase tracking-wider mb-4">
              Sanctuary Portal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={navigateToAccount}
                  className="text-[#FAF7F2]/80 hover:text-[#C5A46D] transition-colors inline-flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded text-left cursor-pointer"
                >
                  <span>Personal Sanctuary</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={navigateToAccount}
                  className="text-[#FAF7F2]/80 hover:text-[#C5A46D] transition-colors inline-flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded text-left cursor-pointer"
                >
                  <span>App Subscriptions</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(true)}
                  className="text-[#FAF7F2]/80 hover:text-[#C5A46D] transition-colors inline-flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded text-left cursor-pointer"
                >
                  <span>Shopping Cart</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onContactClick}
                  className="text-[#FAF7F2]/80 hover:text-[#C5A46D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded text-left cursor-pointer"
                >
                  Contact & Support
                </button>
              </li>
              <li>
                <a
                  href="/faithwalk-journal-app.zip"
                  download="faithwalk-journal-app.zip"
                  className="text-[#C5A46D] hover:text-[#DFCA95] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded text-left inline-flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 rotate-90" />
                  <span>Download Project (.ZIP)</span>
                </a>
              </li>
              <li>
                <a
                  href="#digital-delivery"
                  className="text-[#FAF7F2]/80 hover:text-[#C5A46D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded"
                >
                  Delivery FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h3 className="font-serif text-base font-semibold text-[#C5A46D] uppercase tracking-wider mb-4">
              Policies
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://faithwalk-journal.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAF7F2]/80 hover:text-[#C5A46D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded inline-flex items-center gap-1"
                >
                  <span>Privacy Policy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://faithwalk-journal.com/refund_returns/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAF7F2]/80 hover:text-[#C5A46D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded inline-flex items-center gap-1"
                >
                  <span>Refund & Returns Policy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60 font-sans">
          <p>
            © {currentYear} FaithWalk Journal (https://faithwalk-journal.com/). All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span>Walking daily in faith, grace & truth.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
