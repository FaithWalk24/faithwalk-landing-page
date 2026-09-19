import React, { useState } from 'react';
import { ShoppingBag, Menu, X, User, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    view,
    cartTotalCount,
    setIsCartOpen,
    isLoggedIn,
    customer,
    navigateToHome,
    navigateToShop,
    navigateToAccount,
    navigateToApps,
    navigateToStarterGuide,
  } = useApp();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateToHome();
  };

  const handleShopClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateToShop();
  };

  const handleAppsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateToApps();
  };

  const handleGuideClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateToStarterGuide();
  };

  const handleAccountClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateToAccount();
  };

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setIsCartOpen(true);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#173F32] text-white shadow-md border-b border-[#2F4F4F]/50">
      {/* Top micro announcement bar */}
      <div className="bg-[#112F26] text-[#C5A46D] text-xs py-1.5 px-4 text-center tracking-wider uppercase font-medium border-b border-[#2F4F4F]/30">
        <span>Instant Digital PDF Downloads • FaithWalk Digital Sanctuary • PayFast Secure Checkout</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo / Identity */}
          <a
            href="/"
            onClick={handleHomeClick}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded-lg p-1"
            aria-label="FaithWalk Journal Homepage"
          >
            {/* Real FaithWalk icon */}
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C5A46D]/60 shadow-sm flex-shrink-0 bg-[#2F5D50] flex items-center justify-center">
              <img
                src="https://faithwalk-journal.com/wp-content/uploads/2026/09/cropped-FaithWalk_Journal_app_icon_202606302133-180x180.jpeg"
                alt="FaithWalk Journal"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FAF7F2] group-hover:text-[#C5A46D] transition-colors">
                FaithWalk <span className="text-[#C5A46D]">Journal</span>
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest text-[#FAF7F2]/75 uppercase font-light -mt-0.5">
                Christian Digital Sanctuary
              </span>
            </div>
          </a>

          {/* Desktop Navigation: Home, Shop, Digital Apps, Free Starter Guide, My Account */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium" aria-label="Main Navigation">
            <a
              href="#home"
              onClick={handleHomeClick}
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded ${
                view === 'home'
                  ? 'text-[#C5A46D] font-bold border-b-2 border-[#C5A46D]'
                  : 'text-[#FAF7F2] hover:text-[#C5A46D]'
              }`}
            >
              Home
            </a>

            <a
              href="#shop"
              onClick={handleShopClick}
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded ${
                view === 'shop'
                  ? 'text-[#C5A46D] font-bold border-b-2 border-[#C5A46D]'
                  : 'text-[#FAF7F2]/90 hover:text-[#C5A46D]'
              }`}
            >
              Shop
            </a>

            <a
              href="#digital-apps"
              onClick={handleAppsClick}
              className="text-[#FAF7F2]/90 hover:text-[#C5A46D] font-medium transition-colors py-2 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Digital Apps</span>
            </a>

            <a
              href="#starter-guide"
              onClick={handleGuideClick}
              className="text-[#C5A46D] hover:text-[#DFCA95] font-semibold transition-colors py-2 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded"
            >
              <span>Free Starter Guide</span>
              <span className="bg-[#C5A46D]/20 text-[#C5A46D] text-[10px] font-bold px-1.5 py-0.5 rounded border border-[#C5A46D]/30">
                FREE
              </span>
            </a>

            <a
              href="#account"
              onClick={handleAccountClick}
              className={`transition-colors py-2 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded ${
                view === 'account'
                  ? 'text-[#C5A46D] font-bold border-b-2 border-[#C5A46D]'
                  : 'text-[#FAF7F2]/90 hover:text-[#C5A46D]'
              }`}
            >
              <User className="w-4 h-4 text-[#C5A46D]" />
              <span>{isLoggedIn ? (customer?.firstName || 'Personal Sanctuary') : 'My Account'}</span>
            </a>
          </nav>

          {/* Right Actions: Cart & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              type="button"
              onClick={handleCartClick}
              className="inline-flex items-center gap-2 bg-[#2F4F4F] hover:bg-[#173F32] text-[#FAF7F2] hover:text-[#C5A46D] px-3.5 py-2 rounded-full border border-[#C5A46D]/40 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] relative cursor-pointer"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#C5A46D]" aria-hidden="true" />
              <span className="text-sm font-medium hidden sm:inline">Cart</span>
              {cartTotalCount > 0 && (
                <span className="bg-[#C5A46D] text-[#173F32] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center -ml-0.5 shadow-xs">
                  {cartTotalCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#FAF7F2] hover:text-[#C5A46D] hover:bg-[#2F4F4F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#2F4F4F] bg-[#173F32] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1 text-base font-medium" aria-label="Mobile Navigation">
            <a
              href="#home"
              onClick={handleHomeClick}
              className={`px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                view === 'home'
                  ? 'bg-[#2F4F4F] text-[#C5A46D] font-bold'
                  : 'text-[#FAF7F2] hover:text-[#C5A46D] hover:bg-[#2F4F4F]/50'
              }`}
            >
              <span>Home</span>
            </a>

            <a
              href="#shop"
              onClick={handleShopClick}
              className={`px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                view === 'shop'
                  ? 'bg-[#2F4F4F] text-[#C5A46D] font-bold'
                  : 'text-[#FAF7F2] hover:text-[#C5A46D] hover:bg-[#2F4F4F]/50'
              }`}
            >
              <span>Shop Journals</span>
            </a>

            <a
              href="#digital-apps"
              onClick={handleAppsClick}
              className="text-[#FAF7F2] hover:text-[#C5A46D] hover:bg-[#2F4F4F]/50 px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                <span>FaithWalk Digital Apps</span>
              </div>
              <span className="text-[10px] bg-[#C5A46D]/20 text-[#C5A46D] font-bold px-2 py-0.5 rounded">
                NEW
              </span>
            </a>

            <a
              href="#starter-guide"
              onClick={handleGuideClick}
              className="text-[#C5A46D] font-semibold bg-[#2F4F4F]/40 px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Free Starter Guide</span>
              <span className="bg-[#C5A46D] text-[#173F32] text-xs font-bold px-2 py-0.5 rounded">
                FREE
              </span>
            </a>

            <a
              href="#account"
              onClick={handleAccountClick}
              className={`px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                view === 'account'
                  ? 'bg-[#2F4F4F] text-[#C5A46D] font-bold'
                  : 'text-[#FAF7F2] hover:text-[#C5A46D] hover:bg-[#2F4F4F]/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#C5A46D]" />
                <span>{isLoggedIn ? `Personal Sanctuary (${customer?.firstName || 'Pilgrim'})` : 'My Account'}</span>
              </div>
            </a>

            <a
              href="#cart"
              onClick={handleCartClick}
              className="text-[#FAF7F2] hover:text-[#C5A46D] hover:bg-[#2F4F4F]/50 px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between border-t border-[#2F4F4F]/40 pt-2"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#C5A46D]" aria-hidden="true" />
                <span>Shopping Cart</span>
              </div>
              {cartTotalCount > 0 && (
                <span className="bg-[#C5A46D] text-[#173F32] text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartTotalCount} items
                </span>
              )}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
