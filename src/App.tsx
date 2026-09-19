/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FreeStarterGuide } from './components/FreeStarterGuide';
import { ProductCatalogue } from './components/ProductCatalogue';
import { DigitalSanctuaryApps } from './components/DigitalSanctuaryApps';
import { WhyFaithWalk } from './components/WhyFaithWalk';
import { TrustDelivery } from './components/TrustDelivery';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ShopPage } from './components/ShopPage';
import { AccountPage } from './components/AccountPage';
import { CartDrawer } from './components/CartDrawer';
import { AppExperienceModal } from './components/AppExperienceModal';
import { AppProvider, useApp } from './context/AppContext';

function MainContent() {
  const {
    view,
    navigateToShop,
    navigateToStarterGuide,
    activeAppExperience,
    closeAppExperience,
    openAppExperience,
  } = useApp();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#173F32] font-sans antialiased selection:bg-[#C5A46D]/30 selection:text-[#173F32]">
      {/* 1. Website Header with Unified Ecosystem Navigation */}
      <Header />

      {/* Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Interactive App Sanctuary Modal (Live Experience for FaithWalk Daily & Companion) */}
      {activeAppExperience && (
        <AppExperienceModal
          appId={activeAppExperience}
          onClose={closeAppExperience}
        />
      )}

      {/* Main View Switcher */}
      {view === 'home' && (
        <main className="flex-grow">
          {/* 2. Edge-to-edge Hero Showcase with Cleaned PNG and Real Clickable Buttons */}
          <Hero
            onShopClick={navigateToShop}
            onFreeGuideClick={navigateToStarterGuide}
          />

          {/* 3. Free Starter Guide Invitation Section */}
          <FreeStarterGuide />

          {/* 4. Shop All Journals Product Catalogue */}
          <ProductCatalogue />

          {/* 5. NEW SECTION: FAITHWALK DIGITAL SANCTUARY (Two App Cards & Comparison Matrix) */}
          <DigitalSanctuaryApps
            onSelectApp={(appId) => openAppExperience(appId)}
          />

          {/* 6. Why FaithWalk: Read • Reflect • Pray • Live */}
          <WhyFaithWalk />

          {/* 7. Digital Delivery & Trust */}
          <TrustDelivery />

          {/* 8. Support & Contact Section */}
          <ContactSection />

          {/* 9. Final CTA Invitation */}
          <FinalCTA />
        </main>
      )}

      {view === 'shop' && <ShopPage />}

      {view === 'account' && <AccountPage />}

      {/* Clean, Compliant FaithWalk Footer */}
      <Footer onContactClick={scrollToContact} />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
