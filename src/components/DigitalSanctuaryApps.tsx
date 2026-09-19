import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  Calendar,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Heart,
  Volume2,
  Flame,
  Layers,
  Compass,
  Check,
  Lock,
  Zap,
  Clock,
  ChevronRight,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface DigitalSanctuaryAppsProps {
  onSelectApp?: (appId: 'faithwalk-daily' | 'faithwalk-companion') => void;
}

export const DigitalSanctuaryApps: React.FC<DigitalSanctuaryAppsProps> = ({ onSelectApp }) => {
  const { navigateToAccount, isLoggedIn, subscribeToApp, isSubscribed } = useApp();
  const [activeTab, setActiveTab] = useState<'all' | 'daily' | 'companion'>('all');

  const handleStartApp = (appId: 'faithwalk-daily' | 'faithwalk-companion') => {
    if (onSelectApp) {
      onSelectApp(appId);
    } else {
      subscribeToApp(appId);
      navigateToAccount();
    }
  };

  const handleLearnMore = (appId: 'faithwalk-daily' | 'faithwalk-companion') => {
    if (onSelectApp) {
      onSelectApp(appId);
    } else {
      const el = document.getElementById('app-comparison-matrix');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="digital-apps" className="py-20 sm:py-28 bg-[#FDFCF8] relative border-t border-[#C5A46D]/25" aria-labelledby="apps-heading">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C5A46D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#173F32]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F32]/10 text-[#173F32] text-xs font-bold uppercase tracking-widest mb-4 border border-[#C5A46D]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>FAITHWALK DIGITAL SANCTUARY</span>
          </div>

          <h2 id="apps-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173F32] tracking-tight leading-tight">
            Take Your FaithWalk Further
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#2F4F4F] font-sans leading-relaxed">
            Move beyond the journal into an interactive daily discipleship experience designed for Scripture, prayer, reflection, spiritual disciplines and Christian community.
          </p>

          <div className="mt-4 inline-flex items-center gap-3 text-xs text-[#2F4F4F]/80 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D]" /> Real-Time Discipleship
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D]" /> Secure Cloud Sanctuary
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D]" /> Cancel Anytime
            </span>
          </div>
        </div>

        {/* 2 Application Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch mb-20">
          
          {/* ==================================================
              APP 1 — FAITHWALK DAILY
              ================================================== */}
          <article
            id="app-faithwalk-daily"
            className="flex flex-col bg-white rounded-3xl border-2 border-[#C5A46D]/40 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
          >
            {/* Top Accent Band */}
            <div className="bg-[#173F32] text-[#FAF7F2] p-6 sm:p-8 border-b border-[#C5A46D]/30 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#C5A46D]/15 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A46D]/20 text-[#C5A46D] text-xs font-bold uppercase tracking-wider border border-[#C5A46D]/40">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Personal Sanctuary</span>
                </span>

                <div className="text-right">
                  <span className="text-xs text-[#FAF7F2]/75 uppercase tracking-wider block">Subscription Access</span>
                  <div className="flex items-baseline justify-end gap-1">
                    <span className="text-2xl sm:text-3xl font-bold font-serif text-[#C5A46D]">R79</span>
                    <span className="text-xs text-[#FAF7F2]/80">/ month</span>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2] tracking-tight">
                FaithWalk Daily
              </h3>
              <p className="mt-2 text-sm text-[#FAF7F2]/85 font-sans leading-relaxed">
                Focused personal spiritual-growth companion and digital sanctuary.
              </p>
            </div>

            {/* Feature Modules */}
            <div className="p-6 sm:p-8 flex-grow space-y-6 text-[#173F32] bg-[#FDFCF8]/60">
              
              {/* Daily Sanctuary */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold text-[#173F32] uppercase tracking-wider pb-2 border-b border-[#C5A46D]/20">
                  <BookOpen className="w-4 h-4 text-[#C5A46D]" />
                  <span>Daily Sanctuary</span>
                </h4>
                <ul className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2F4F4F]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A46D] flex-shrink-0" />
                    <span>Daily Scripture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A46D] flex-shrink-0" />
                    <span>AI Devotional Reflection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A46D] flex-shrink-0" />
                    <span>Audio Text-to-Speech</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A46D] flex-shrink-0" />
                    <span>Prayer Streak & Journey Progress</span>
                  </li>
                </ul>
              </div>

              {/* SOAP Journal */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold text-[#173F32] uppercase tracking-wider pb-2 border-b border-[#C5A46D]/20">
                  <Sparkles className="w-4 h-4 text-[#C5A46D]" />
                  <span>SOAP Journal Engine</span>
                </h4>
                <p className="mt-2 text-xs text-[#2F4F4F] leading-relaxed">
                  Full Scripture • Observation • Application • Prayer workflow with AI theological assistance, quick search, category filtering, and export.
                </p>
              </div>

              {/* Spiritual Disciplines & 6-Phase Discipleship */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-3.5 bg-white rounded-xl border border-[#C5A46D]/20 shadow-xs">
                  <h5 className="text-[11px] font-bold text-[#173F32] uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>Spiritual Disciplines</span>
                  </h5>
                  <p className="text-[11px] text-[#2F4F4F] leading-snug">
                    Daily Prayer, Scripture Study, Fasting & Solitude, Service & Mercy with 7-day consistency heatmap.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[#C5A46D]/20 shadow-xs">
                  <h5 className="text-[11px] font-bold text-[#173F32] uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>6-Phase Discipleship</span>
                  </h5>
                  <p className="text-[11px] text-[#2F4F4F] leading-snug">
                    Genesis & Awakening → Rooted → Renewal → Fruitfulness → Crucible → Commissioned for Kingdom.
                  </p>
                </div>
              </div>

              {/* Community & Events */}
              <div className="pt-2 border-t border-[#C5A46D]/15 flex items-center justify-between text-xs text-[#2F4F4F]">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#C5A46D]" />
                  Prayer Wall & Praise Reports
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#C5A46D]" />
                  Fellowship Discovery & RSVP
                </span>
              </div>

              {/* Architecture Badges */}
              <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#C5A46D]/20 text-[10px] text-[#2F4F4F]/85">
                <span className="font-bold text-[#173F32]">Secure Modern Stack:</span> React 18 • Vite • Tailwind • Firebase Auth • Cloud Firestore • Node.js / Express • Gemini AI
              </div>
            </div>

            {/* CTAs */}
            <div className="p-6 sm:p-8 bg-white border-t border-[#C5A46D]/20 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => handleStartApp('faithwalk-daily')}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#C5A46D] text-[#173F32] hover:bg-[#D4B886] transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
              >
                <span>{isSubscribed('faithwalk-daily') ? 'OPEN FAITHWALK DAILY' : 'START FAITHWALK DAILY'}</span>
                <ArrowRight className="w-4 h-4 text-[#173F32]" />
              </button>

              <button
                type="button"
                onClick={() => handleLearnMore('faithwalk-daily')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#FAF7F2] text-[#173F32] hover:bg-[#2F4F4F]/10 transition-colors border border-[#C5A46D]/40 cursor-pointer"
              >
                <span>LEARN MORE</span>
              </button>
            </div>
          </article>


          {/* ==================================================
              APP 2 — FAITHWALK DAILY COMPANION
              ================================================== */}
          <article
            id="app-faithwalk-companion"
            className="flex flex-col bg-white rounded-3xl border-2 border-[#173F32] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
          >
            {/* Top Featured Ribbon */}
            <div className="bg-[#C5A46D] text-[#173F32] text-[11px] font-extrabold uppercase tracking-widest text-center py-1.5 px-4 shadow-xs">
              Complete 180-Day Discipleship & Transformation Curriculum
            </div>

            {/* Top Header Band */}
            <div className="bg-[#173F32] text-[#FAF7F2] p-6 sm:p-8 border-b border-[#C5A46D]/30 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#C5A46D]/20 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A46D] text-[#173F32] text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#173F32]" />
                  <span>Flagship Curriculum</span>
                </span>

                <div className="text-right">
                  <span className="text-xs text-[#FAF7F2]/75 uppercase tracking-wider block">Subscription Access</span>
                  <div className="flex items-baseline justify-end gap-1">
                    <span className="text-2xl sm:text-3xl font-bold font-serif text-[#C5A46D]">R149</span>
                    <span className="text-xs text-[#FAF7F2]/80">/ month</span>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2] tracking-tight">
                FaithWalk Daily Companion
              </h3>
              <p className="mt-2 text-sm text-[#FAF7F2]/85 font-sans leading-relaxed">
                Complete discipleship, spiritual discipline, community and 180-day transformation platform.
              </p>
            </div>

            {/* Feature Modules */}
            <div className="p-6 sm:p-8 flex-grow space-y-6 text-[#173F32] bg-[#FDFCF8]/60">
              
              {/* 180-Day Curriculum Breakdown */}
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#C5A46D]/30 shadow-xs">
                <h4 className="text-xs font-bold text-[#173F32] uppercase tracking-wider flex items-center justify-between mb-3">
                  <span className="flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-[#C5A46D]" />
                    <span>180-Day Discipleship Curriculum</span>
                  </span>
                  <span className="text-[10px] text-[#C5A46D] font-extrabold bg-[#173F32] px-2 py-0.5 rounded-full">
                    6 PHASES
                  </span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-[#2F4F4F]">
                  <div className="bg-white p-2 rounded-lg border border-[#C5A46D]/20">
                    <span className="font-bold text-[#173F32] block">Phase 1 (Days 1–30)</span>
                    Genesis & Awakening
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-[#C5A46D]/20">
                    <span className="font-bold text-[#173F32] block">Phase 2 (Days 31–60)</span>
                    Rooted & Established
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-[#C5A46D]/20">
                    <span className="font-bold text-[#173F32] block">Phase 3 (Days 61–90)</span>
                    Renewal & Transformation
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-[#C5A46D]/20">
                    <span className="font-bold text-[#173F32] block">Phase 4 (Days 91–120)</span>
                    Fruitfulness & Service
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-[#C5A46D]/20">
                    <span className="font-bold text-[#173F32] block">Phase 5 (Days 121–150)</span>
                    Crucible & Deep Trust
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-[#C5A46D]/20">
                    <span className="font-bold text-[#173F32] block">Phase 6 (Days 151–180)</span>
                    Commissioned for Kingdom
                  </div>
                </div>
              </div>

              {/* Multi-Translation Scripture & Audio Experience */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-bold text-[#173F32] uppercase tracking-wider pb-2 border-b border-[#C5A46D]/20">
                  <BookOpen className="w-4 h-4 text-[#C5A46D]" />
                  <span>Scripture & SOAP Engine</span>
                </h4>
                <div className="mt-2 text-xs text-[#2F4F4F] space-y-1">
                  <p>
                    <strong className="text-[#173F32]">Multi-Translation:</strong> NIV • ESV • NKJV • CSB • NLT with devotional meditation, audio contemplation & daily action focus.
                  </p>
                  <p>
                    <strong className="text-[#173F32]">SOAP Companion:</strong> AI Scripture Companion, historical context, reflection prompts, tags, date filtering & export.
                  </p>
                </div>
              </div>

              {/* Spiritual Branches & Community */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 bg-white rounded-xl border border-[#C5A46D]/20 shadow-xs">
                  <h5 className="text-[11px] font-bold text-[#173F32] uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>Spiritual Branches</span>
                  </h5>
                  <p className="text-[11px] text-[#2F4F4F] leading-snug">
                    Prayer & Intercession, Scripture Study & Memorization, Fasting & Solitude, Service & Mercy with milestone badges.
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-[#C5A46D]/20 shadow-xs">
                  <h5 className="text-[11px] font-bold text-[#173F32] uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>Gatherings & Events</span>
                  </h5>
                  <p className="text-[11px] text-[#2F4F4F] leading-snug">
                    Local & global conferences, retreats, worship nights, RSVP, and .ICS calendar export.
                  </p>
                </div>
              </div>

              {/* Security & Admin Integrity */}
              <div className="bg-[#173F32]/5 p-3 rounded-xl border border-[#173F32]/20 text-[10px] text-[#2F4F4F]">
                <div className="flex items-center gap-1.5 font-bold text-[#173F32] mb-1">
                  <Lock className="w-3 h-3 text-[#C5A46D]" />
                  <span>Enterprise Church & Discipleship Security</span>
                </div>
                <span>Server-side authorization, secure session validation, HMAC-SHA256 JWT session architecture. Founder secrets never exposed.</span>
              </div>

            </div>

            {/* CTAs */}
            <div className="p-6 sm:p-8 bg-white border-t border-[#C5A46D]/20 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => handleStartApp('faithwalk-companion')}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#173F32] text-white hover:bg-[#2F4F4F] transition-all shadow-md hover:shadow-lg active:scale-[0.98] border-2 border-[#C5A46D] cursor-pointer"
              >
                <span>{isSubscribed('faithwalk-companion') ? 'OPEN DAILY COMPANION' : 'BEGIN THE 180-DAY JOURNEY'}</span>
                <ArrowRight className="w-4 h-4 text-[#C5A46D]" />
              </button>

              <button
                type="button"
                onClick={() => handleLearnMore('faithwalk-companion')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#FAF7F2] text-[#173F32] hover:bg-[#2F4F4F]/10 transition-colors border border-[#C5A46D]/40 cursor-pointer"
              >
                <span>EXPLORE DAILY COMPANION</span>
              </button>
            </div>
          </article>

        </div>


        {/* ==================================================
            APP COMPARISON MATRIX
            Directly beneath the app cards
            ================================================== */}
        <div id="app-comparison-matrix" className="bg-white rounded-3xl border border-[#C5A46D]/30 p-6 sm:p-10 shadow-lg">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#173F32]">
              Choose Your FaithWalk Companion
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#2F4F4F] font-sans">
              Both platforms share our core Christian discipleship values, Scripture grounding, and privacy security. Select the journey depth suited for your current season of faith.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-[#C5A46D]/40">
                  <th className="py-4 px-4 font-serif font-bold text-[#173F32] text-base">Key Dimension</th>
                  <th className="py-4 px-4 font-serif font-bold text-[#173F32] text-base bg-[#FDFCF8] rounded-t-xl">
                    <div>FaithWalk Daily</div>
                    <div className="text-xs font-sans font-normal text-[#C5A46D] font-bold">R79 / month</div>
                  </th>
                  <th className="py-4 px-4 font-serif font-bold text-[#173F32] text-base bg-[#173F32]/5 rounded-t-xl">
                    <div>FaithWalk Daily Companion</div>
                    <div className="text-xs font-sans font-normal text-[#C5A46D] font-bold">R149 / month</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C5A46D]/15 text-[#2F4F4F]">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#173F32]">Best Positioned As</td>
                  <td className="py-3.5 px-4 bg-[#FDFCF8] font-medium text-[#173F32]">
                    Personal daily spiritual growth and journaling.
                  </td>
                  <td className="py-3.5 px-4 bg-[#173F32]/5 font-medium text-[#173F32]">
                    Complete structured discipleship, community and 180-day transformation.
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#173F32]">Daily Scripture & Reflection</td>
                  <td className="py-3.5 px-4 bg-[#FDFCF8] text-[#173F32]">Standard Daily Passage + AI Meditation</td>
                  <td className="py-3.5 px-4 bg-[#173F32]/5 text-[#173F32]">5 Bible Translations (NIV, ESV, NKJV, CSB, NLT)</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#173F32]">Audio Contemplation</td>
                  <td className="py-3.5 px-4 bg-[#FDFCF8]">Text-to-Speech audio reader</td>
                  <td className="py-3.5 px-4 bg-[#173F32]/5">Guided contemplative audio meditations</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#173F32]">Curriculum Scope</td>
                  <td className="py-3.5 px-4 bg-[#FDFCF8]">6-Phase Discipleship Journey</td>
                  <td className="py-3.5 px-4 bg-[#173F32]/5 font-semibold text-[#173F32]">
                    Full 180-Day Day-by-Day Discipleship Curriculum
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#173F32]">SOAP Journal Engine</td>
                  <td className="py-3.5 px-4 bg-[#FDFCF8]">Interactive SOAP + AI Assistance</td>
                  <td className="py-3.5 px-4 bg-[#173F32]/5">Advanced Historical Context + Reflection Prompts + Export</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#173F32]">Spiritual Discipline Branches</td>
                  <td className="py-3.5 px-4 bg-[#FDFCF8]">4 Core Disciplines + 7-Day Heatmap</td>
                  <td className="py-3.5 px-4 bg-[#173F32]/5">4 Core Disciplines + Commits + Milestone Badges</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#173F32]">Community & Fellowship</td>
                  <td className="py-3.5 px-4 bg-[#FDFCF8]">Prayer Wall & Fellowship Teams</td>
                  <td className="py-3.5 px-4 bg-[#173F32]/5">Intercession Counters & Praise Reports</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#173F32]">Events & Gatherings</td>
                  <td className="py-3.5 px-4 bg-[#FDFCF8]">RSVP & Calendar Export</td>
                  <td className="py-3.5 px-4 bg-[#173F32]/5">Conferences, Retreats, Worship Nights + .ICS Export</td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#173F32]">Administrative CMS</td>
                  <td className="py-3.5 px-4 bg-[#FDFCF8] text-[#2F4F4F]/60">Standard User Access</td>
                  <td className="py-3.5 px-4 bg-[#173F32]/5 font-medium text-[#173F32]">
                    Administrative CMS & Gathering Publisher (for Leaders)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center pt-6 border-t border-[#C5A46D]/20">
            <p className="text-xs text-[#2F4F4F]/80">
              Need assistance selecting a subscription or gifting to a church team?{' '}
              <a href="#contact" className="text-[#173F32] font-bold underline underline-offset-4 hover:text-[#C5A46D]">
                Contact the FaithWalk Ministry Support team
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
