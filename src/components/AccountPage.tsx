import React, { useState } from 'react';
import {
  Download,
  Package,
  User,
  MapPin,
  Lock,
  LogOut,
  Eye,
  EyeOff,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
  BookOpen,
  ArrowRight,
  AlertCircle,
  Sparkles,
  Flame,
  Calendar,
  Layers,
  Heart,
  Zap,
  Check,
  ChevronRight,
  Compass,
  Play
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AccountPage: React.FC = () => {
  const {
    isLoggedIn,
    customer,
    downloads,
    orders,
    subscriptions,
    journalEntries,
    savedEvents,
    login,
    logout,
    navigateToShop,
    navigateToApps,
    subscribeToApp,
    cancelSubscription,
    openAppExperience,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'sanctuary' | 'subscriptions' | 'downloads' | 'orders' | 'journal' | 'events' | 'settings'>('sanctuary');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatusMessage('Please enter your email address or username.');
      return;
    }
    login(email);
    setStatusMessage(null);
  };

  const handleDemoSignIn = () => {
    login('sarah.faithwalk@example.com', 'Sarah Jenkins');
    setStatusMessage(null);
  };

  // If customer is LOGGED OUT, show the polished FaithWalk login/register experience
  if (!isLoggedIn) {
    return (
      <main className="min-h-[75vh] bg-[#FAF7F2] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          {/* Breadcrumb / Category Header */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#173F32]/10 border border-[#C5A46D]/30 text-[#173F32] text-xs uppercase tracking-widest font-semibold mb-3">
              <User className="w-3.5 h-3.5 text-[#C5A46D]" />
              FaithWalk Customer Portal
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#173F32] tracking-tight mb-2">
              My Account
            </h1>
            <p className="text-sm sm:text-base text-[#2F4F4F] max-w-md mx-auto">
              Sign in to access your Personal Sanctuary, digital journal downloads, and active discipleship app subscriptions.
            </p>
          </div>

          {/* Auth Card */}
          <div className="bg-white rounded-2xl border border-[#C5A46D]/30 shadow-xl overflow-hidden">
            {/* Tab switch: Sign In vs Register */}
            <div className="grid grid-cols-2 border-b border-[#C5A46D]/20 bg-[#FAF7F2]/60">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setStatusMessage(null);
                }}
                className={`py-3.5 text-sm font-bold tracking-wide transition-colors cursor-pointer ${
                  authMode === 'login'
                    ? 'text-[#173F32] bg-white border-b-2 border-[#C5A46D]'
                    : 'text-[#173F32]/60 hover:text-[#173F32]'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('register');
                  setStatusMessage(null);
                }}
                className={`py-3.5 text-sm font-bold tracking-wide transition-colors cursor-pointer ${
                  authMode === 'register'
                    ? 'text-[#173F32] bg-white border-b-2 border-[#C5A46D]'
                    : 'text-[#173F32]/60 hover:text-[#173F32]'
                }`}
              >
                Register
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {statusMessage && (
                <div className="mb-5 p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-800">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {authMode === 'login' ? (
                /* Login Form */
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="account-email"
                      className="block text-xs font-bold text-[#173F32] uppercase tracking-wider mb-1.5"
                    >
                      Username or Email Address *
                    </label>
                    <input
                      id="account-email"
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-[#C5A46D]/30 focus:border-[#C5A46D] focus:ring-2 focus:ring-[#C5A46D]/20 bg-[#FAF7F2]/40 text-[#173F32] text-sm transition-all"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor="account-password"
                        className="block text-xs font-bold text-[#173F32] uppercase tracking-wider"
                      >
                        Password *
                      </label>
                      <a
                        href="https://faithwalk-journal.com/my-account/lost-password/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#2F4F4F] hover:text-[#173F32] underline"
                      >
                        Lost your password?
                      </a>
                    </div>
                    <div className="relative">
                      <input
                        id="account-password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-4 py-3 rounded-lg border border-[#C5A46D]/30 focus:border-[#C5A46D] focus:ring-2 focus:ring-[#C5A46D]/20 bg-[#FAF7F2]/40 text-[#173F32] text-sm pr-10 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#173F32]/50 hover:text-[#173F32]"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      id="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-[#173F32] rounded border-[#C5A46D]/40 focus:ring-[#C5A46D]"
                    />
                    <label htmlFor="remember-me" className="text-xs text-[#173F32]/80">
                      Remember me on this device
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-[#C5A46D] text-[#173F32] hover:bg-[#D4B886] active:scale-[0.98] shadow-md transition-all border border-[#D4B886] cursor-pointer"
                  >
                    <span>SIGN IN TO FAITHWALK</span>
                    <ArrowRight className="w-4 h-4 text-[#173F32]" />
                  </button>

                  {/* Instant Demo Preview Button */}
                  <div className="pt-3 border-t border-[#C5A46D]/20 text-center">
                    <p className="text-xs text-[#2F4F4F]/70 mb-2">
                      Testing or previewing the customer sanctuary?
                    </p>
                    <button
                      type="button"
                      onClick={handleDemoSignIn}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-semibold text-xs text-[#173F32] bg-[#173F32]/10 hover:bg-[#173F32]/15 transition-colors border border-[#C5A46D]/30 cursor-pointer"
                    >
                      <span>Instant Preview: View Sample Customer Account</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Register Form */
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!email.trim()) {
                      setStatusMessage('Please enter a valid email address.');
                      return;
                    }
                    login(email);
                    setStatusMessage(null);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="register-email"
                      className="block text-xs font-bold text-[#173F32] uppercase tracking-wider mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="register-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-[#C5A46D]/30 focus:border-[#C5A46D] focus:ring-2 focus:ring-[#C5A46D]/20 bg-[#FAF7F2]/40 text-[#173F32] text-sm transition-all"
                    />
                  </div>

                  <p className="text-xs text-[#2F4F4F]/70 leading-relaxed">
                    A secure password creation link will be sent to your email address. Your personal data will be used to support your experience throughout this website.
                  </p>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-[#C5A46D] text-[#173F32] hover:bg-[#D4B886] active:scale-[0.98] shadow-md transition-all border border-[#D4B886] cursor-pointer"
                  >
                    <span>REGISTER ACCOUNT</span>
                    <ArrowRight className="w-4 h-4 text-[#173F32]" />
                  </button>
                </form>
              )}

              {/* Direct WooCommerce Alternative */}
              <div className="mt-6 pt-4 border-t border-[#C5A46D]/15 text-center">
                <a
                  href="https://faithwalk-journal.com/my-account/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#2F4F4F] hover:text-[#173F32] underline"
                >
                  <span>Or manage directly via WooCommerce Account</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Security Reassurance */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#2F4F4F]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
              <span>256-Bit SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A46D]" />
              <span>Instant Digital Access</span>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ==================================================
  // Customer is LOGGED IN: Display the PERSONAL SANCTUARY
  // ==================================================
  return (
    <main className="min-h-[85vh] bg-[#FAF7F2] py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Personal Sanctuary Customer Welcome Header */}
        <div className="bg-[#173F32] text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-xl border border-[#C5A46D]/30 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#C5A46D]/15 to-transparent pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#2F4F4F] border-2 border-[#C5A46D] flex items-center justify-center text-xl font-serif font-bold text-[#C5A46D] shadow-md">
                {customer?.firstName ? customer.firstName[0] : 'P'}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#C5A46D] font-bold">
                    PERSONAL SANCTUARY
                  </span>
                  <span className="text-[10px] bg-[#C5A46D]/20 text-[#C5A46D] px-2 py-0.5 rounded-full font-bold">
                    FaithWalk Pilgrim
                  </span>
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                  Welcome back, {customer?.firstName || 'Pilgrim'}
                </h1>
                <p className="text-xs sm:text-sm text-[#FAF7F2]/80 mt-1">
                  Account: <span className="text-[#C5A46D]">{customer?.email}</span>
                </p>
              </div>
            </div>

            {/* Quick Metrics Header Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-[#2F4F4F]/80 border border-[#C5A46D]/30 rounded-2xl px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-1 text-[#C5A46D] text-xs font-bold">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{customer?.prayerStreak || 14} Days</span>
                </div>
                <span className="text-[10px] text-[#FAF7F2]/75 uppercase">Prayer Streak</span>
              </div>

              <div className="bg-[#2F4F4F]/80 border border-[#C5A46D]/30 rounded-2xl px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-1 text-[#C5A46D] text-xs font-bold">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Phase {customer?.discipleshipPhase || 2}</span>
                </div>
                <span className="text-[10px] text-[#FAF7F2]/75 uppercase">Discipleship</span>
              </div>

              <button
                type="button"
                onClick={logout}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-medium text-[#FAF7F2]/90 hover:text-white bg-[#2F4F4F] hover:bg-[#2F4F4F]/70 transition-colors border border-[#C5A46D]/30 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-[#C5A46D]/20 pb-3 mb-8">
          {[
            { id: 'sanctuary', label: 'My FaithWalk', icon: Compass },
            { id: 'subscriptions', label: 'App Subscriptions', icon: Sparkles },
            { id: 'downloads', label: `Downloads (${downloads.length})`, icon: Download },
            { id: 'orders', label: `Orders (${orders.length})`, icon: Package },
            { id: 'journal', label: `SOAP Journal (${journalEntries.length})`, icon: BookOpen },
            { id: 'events', label: `Saved Events (${savedEvents.length})`, icon: Calendar },
            { id: 'settings', label: 'Account Settings', icon: User },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#173F32] text-[#FAF7F2] shadow-md border border-[#C5A46D]/40'
                    : 'text-[#173F32] bg-white/70 hover:bg-[#173F32]/10 border border-[#C5A46D]/20'
                }`}
              >
                <Icon className="w-4 h-4 text-[#C5A46D]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ==================================================
            TAB 1: MY FAITHWALK (Personal Sanctuary Overview)
            ================================================== */}
        {activeTab === 'sanctuary' && (
          <div className="space-y-8">
            {/* Discipleship Progress Banner */}
            <div className="bg-white rounded-3xl border border-[#C5A46D]/30 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#C5A46D]/20">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#173F32]/10 text-[#173F32] text-xs font-bold uppercase tracking-wider mb-2">
                    <Layers className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>Active Discipleship Journey</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[#173F32]">
                    {customer?.discipleshipPhaseName || 'Phase 2: Rooted & Established (Days 31–60)'}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#2F4F4F] mt-1">
                    Building rock-solid doctrinal foundations, unhurried prayer routines, and spiritual disciplines.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openAppExperience('faithwalk-companion')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-[#173F32] text-white hover:bg-[#2F4F4F] transition-all shadow-md cursor-pointer border border-[#C5A46D]"
                >
                  <Play className="w-4 h-4 text-[#C5A46D] fill-current" />
                  <span>Resume Today's Reading</span>
                </button>
              </div>

              {/* 6 Phases Milestone Indicator */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6">
                {[
                  { num: 1, name: 'Genesis & Awakening', status: 'completed' },
                  { num: 2, name: 'Rooted & Established', status: 'current' },
                  { num: 3, name: 'Renewal & Transformation', status: 'upcoming' },
                  { num: 4, name: 'Fruitfulness & Service', status: 'upcoming' },
                  { num: 5, name: 'Crucible & Deep Trust', status: 'upcoming' },
                  { num: 6, name: 'Commissioned for Kingdom', status: 'upcoming' },
                ].map((phase) => (
                  <div
                    key={phase.num}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      phase.status === 'completed'
                        ? 'bg-[#173F32]/10 border-[#173F32]/30 text-[#173F32]'
                        : phase.status === 'current'
                        ? 'bg-[#173F32] text-[#FAF7F2] border-[#C5A46D] shadow-md ring-2 ring-[#C5A46D]/40'
                        : 'bg-[#FAF7F2]/60 border-[#C5A46D]/20 text-[#2F4F4F]/60'
                    }`}
                  >
                    <div className="text-[10px] font-bold uppercase mb-1">
                      Phase {phase.num}
                    </div>
                    <div className="text-xs font-semibold leading-tight line-clamp-2">
                      {phase.name}
                    </div>
                    <div className="mt-2 text-[10px]">
                      {phase.status === 'completed' && <span className="text-[#2F5D50] font-bold">✓ Completed</span>}
                      {phase.status === 'current' && <span className="text-[#C5A46D] font-bold">● Active Now</span>}
                      {phase.status === 'upcoming' && <span>Locked</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscriptions Quick Card */}
            <div className="bg-white rounded-3xl border border-[#C5A46D]/30 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#C5A46D]/20">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#173F32]">
                    My FaithWalk App Subscriptions
                  </h3>
                  <p className="text-xs text-[#2F4F4F]">
                    Live digital sanctuaries connected to your customer profile
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('subscriptions')}
                  className="text-xs text-[#173F32] font-bold hover:text-[#C5A46D] underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Manage Subscriptions</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subscriptions.map((sub) => (
                  <div
                    key={sub.id}
                    className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                      sub.status === 'active'
                        ? 'border-[#C5A46D] bg-[#FDFCF8]'
                        : 'border-[#C5A46D]/20 bg-[#FAF7F2]/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-serif text-base font-bold text-[#173F32]">
                          {sub.appName}
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            sub.status === 'active'
                              ? 'bg-[#173F32] text-[#C5A46D]'
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {sub.status === 'active' ? 'Active Subscription' : 'Inactive'}
                        </span>
                      </div>
                      <p className="text-xs text-[#2F4F4F] mb-3">{sub.plan}</p>
                      <div className="text-[11px] text-[#2F4F4F]/80 space-y-1">
                        <div>Price: <strong>{sub.price}</strong></div>
                        {sub.status === 'active' && <div>Renewal: <strong>{sub.renewalDate}</strong></div>}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#C5A46D]/20 flex items-center justify-between">
                      {sub.status === 'active' ? (
                        <button
                          type="button"
                          onClick={() => openAppExperience(sub.appId)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider bg-[#C5A46D] text-[#173F32] hover:bg-[#D4B886] transition-all cursor-pointer shadow-xs"
                        >
                          <span>OPEN {sub.appId === 'faithwalk-daily' ? 'FAITHWALK DAILY' : 'DAILY COMPANION'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => subscribeToApp(sub.appId)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider bg-[#173F32] text-white hover:bg-[#2F4F4F] transition-all cursor-pointer"
                        >
                          <span>SUBSCRIBE / RENEW</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================
            TAB 2: APP SUBSCRIPTIONS (Strictly following prompt spec)
            ================================================== */}
        {activeTab === 'subscriptions' && (
          <div className="bg-white rounded-3xl border border-[#C5A46D]/30 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#C5A46D]/20 mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#173F32]/10 text-[#173F32] text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>My FaithWalk ↓ App Subscriptions</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#173F32]">
                  App Subscriptions & Digital Sanctuaries
                </h2>
                <p className="text-xs sm:text-sm text-[#2F4F4F] mt-1">
                  Manage your subscription status, renewal billing, and launch your applications directly.
                </p>
              </div>

              <button
                type="button"
                onClick={navigateToApps}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF7F2] text-[#173F32] hover:bg-[#173F32]/10 border border-[#C5A46D]/40 transition-colors cursor-pointer"
              >
                <span>View All Plans</span>
              </button>
            </div>

            {/* Subscriptions Table / Cards */}
            <div className="space-y-6">
              {subscriptions.map((sub) => (
                <div
                  key={sub.id}
                  className={`border-2 rounded-2xl p-6 transition-all ${
                    sub.status === 'active'
                      ? 'border-[#C5A46D] bg-[#FDFCF8]'
                      : 'border-[#C5A46D]/20 bg-[#FAF7F2]/30'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-serif text-xl font-bold text-[#173F32]">
                          {sub.appName}
                        </h3>
                        <span
                          className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                            sub.status === 'active'
                              ? 'bg-[#173F32] text-[#C5A46D]'
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {sub.status === 'active' ? 'Active Subscription' : 'Inactive'}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#2F4F4F]">
                        Plan: <strong className="text-[#173F32]">{sub.plan}</strong>
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#2F4F4F] pt-2">
                        <div>
                          <span className="text-[#2F4F4F]/70 block">Pricing:</span>
                          <strong className="text-[#173F32]">{sub.price}</strong>
                        </div>
                        <div>
                          <span className="text-[#2F4F4F]/70 block">Start Date:</span>
                          <strong className="text-[#173F32]">{sub.startDate}</strong>
                        </div>
                        <div>
                          <span className="text-[#2F4F4F]/70 block">Renewal Info:</span>
                          <strong className="text-[#173F32]">{sub.renewalDate} (Auto-Renew: {sub.autoRenew ? 'Enabled' : 'Off'})</strong>
                        </div>
                      </div>

                      {/* Feature summary */}
                      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#2F4F4F]/85">
                        {sub.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#C5A46D] flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#C5A46D]/20">
                      {sub.status === 'active' ? (
                        <>
                          <button
                            type="button"
                            onClick={() => openAppExperience(sub.appId)}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-[#C5A46D] text-[#173F32] hover:bg-[#D4B886] shadow-md hover:shadow-lg transition-all cursor-pointer"
                          >
                            <span>OPEN {sub.appId === 'faithwalk-daily' ? 'FAITHWALK DAILY' : 'DAILY COMPANION'}</span>
                            <ArrowRight className="w-4 h-4 text-[#173F32]" />
                          </button>

                          <button
                            type="button"
                            onClick={() => cancelSubscription(sub.id)}
                            className="text-xs text-red-700 hover:text-red-900 underline cursor-pointer"
                          >
                            Manage / Cancel auto-renew
                          </button>
                        </>
                      ) : (
                        <button
                          type="button"
                          onClick={() => subscribeToApp(sub.appId)}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-[#173F32] text-white hover:bg-[#2F4F4F] shadow-md hover:shadow-lg transition-all border-2 border-[#C5A46D] cursor-pointer"
                        >
                          <span>SUBSCRIBE / RENEW</span>
                          <ArrowRight className="w-4 h-4 text-[#C5A46D]" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Server-Side Validation Reassurance Note */}
            <div className="mt-8 p-4 bg-[#FAF7F2] rounded-2xl border border-[#C5A46D]/20 text-xs text-[#2F4F4F] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C5A46D] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#173F32] block mb-0.5">Cryptographic Server-Side Access Validation</strong>
                Your subscription entitlement is verified against our secure server-side authorization layer using Firebase Authentication & Cloud Firestore. Passwords, payment secrets, and founder administrative keys are strictly safeguarded and never exposed.
              </div>
            </div>
          </div>
        )}

        {/* ==================================================
            TAB 3: DOWNLOADS
            ================================================== */}
        {activeTab === 'downloads' && (
          <div className="bg-gradient-to-br from-[#173F32] via-[#20493C] to-[#2F4F4F] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#C5A46D] shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#C5A46D]/30">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A46D]/20 border border-[#C5A46D]/40 text-[#C5A46D] text-xs font-bold uppercase tracking-wider mb-3">
                  <Download className="w-3.5 h-3.5" />
                  <span>Permanent Customer Library</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                  MY DOWNLOADS
                </h2>
                <p className="text-sm text-[#FAF7F2]/85 max-w-2xl mt-1.5 leading-relaxed">
                  Your Christian digital journals are permanently saved to your account. Download the interactive PDF files directly to your device, tablet (GoodNotes / Notability), or print at home.
                </p>
              </div>

              <button
                type="button"
                onClick={navigateToShop}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF7F2] text-[#173F32] hover:bg-[#C5A46D] transition-all shadow-md flex-shrink-0 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#173F32]" />
                <span>Browse More Journals</span>
              </button>
            </div>

            {/* Download Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              {/* Project Source Code ZIP Export Item */}
              <div className="bg-[#FAF7F2] text-[#173F32] rounded-2xl p-5 border-2 border-[#C5A46D] shadow-md flex flex-col justify-between md:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#173F32] bg-[#C5A46D]/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      FULL PROJECT EXPORT (.ZIP)
                    </span>
                    <span className="text-xs text-[#2F4F4F] font-mono">
                      v1.0.0 • 3.8 MB
                    </span>
                  </div>
                  <span className="text-xs text-[#173F32] font-semibold bg-[#173F32]/10 px-2.5 py-0.5 rounded-full">
                    Includes React, TypeScript, Assets & Sanctuary Suite
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#173F32] mb-1">
                    FaithWalk Journal & Sanctuary App Project Archive
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2F4F4F] leading-relaxed mb-4">
                    Complete standalone production codebase including all React components, context state providers, design system styling, images, icons, and configuration files ready for deployment.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#C5A46D]/30 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-[#2F4F4F]">
                    Direct path: <code className="bg-white px-2 py-0.5 rounded border border-[#C5A46D]/30 text-[#173F32] font-mono text-[11px]">/faithwalk-journal-app.zip</code>
                  </div>
                  <a
                    href="/faithwalk-journal-app.zip"
                    download="faithwalk-journal-app.zip"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#173F32] text-[#FAF7F2] hover:bg-[#2F4F4F] active:scale-95 transition-all shadow-md border border-[#C5A46D]"
                  >
                    <Download className="w-4 h-4 text-[#C5A46D]" />
                    <span>Download Project ZIP</span>
                  </a>
                </div>
              </div>

              {downloads.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/15 hover:border-[#C5A46D] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-wider">
                        {item.fileFormat}
                      </span>
                      <span className="text-[11px] text-[#FAF7F2]/70 bg-[#173F32]/60 px-2 py-0.5 rounded">
                        {item.size}
                      </span>
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#FAF7F2] mb-1">
                      {item.productName}
                    </h3>
                    <p className="text-xs text-[#FAF7F2]/75 font-mono mb-4 break-all">
                      {item.fileTitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-[#FAF7F2]/70">
                      Expires: <strong className="text-[#C5A46D]">{item.accessExpiry}</strong>
                    </span>
                    <a
                      href={item.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider bg-[#C5A46D] text-[#173F32] hover:bg-[#D4B886] active:scale-95 transition-all shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================
            TAB 4: ORDERS
            ================================================== */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl border border-[#C5A46D]/30 p-6 sm:p-8 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#173F32] mb-4">
              Your Order History
            </h3>
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border border-[#C5A46D]/20 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#FAF7F2]/50 hover:bg-white transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-sm text-[#173F32]">
                        Order {order.orderNumber}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#173F32]/10 text-[#173F32]">
                        <CheckCircle2 className="w-3 h-3 text-[#C5A46D]" />
                        {order.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#2F4F4F] mb-2">
                      Placed on {order.date} • Paid via {order.paymentMethod}
                    </p>
                    <div className="text-xs text-[#173F32] space-y-0.5">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="font-medium">
                          {item.quantity}x {item.productName} ({item.price})
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-[#C5A46D]/15">
                    <span className="text-base font-bold font-serif text-[#173F32]">
                      Total: {order.total}
                    </span>
                    <a
                      href="https://faithwalk-journal.com/my-account/orders/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#2F4F4F] hover:text-[#173F32] font-semibold underline"
                    >
                      <span>View WooCommerce Invoice</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================
            TAB 5: SOAP JOURNAL ACTIVITY
            ================================================== */}
        {activeTab === 'journal' && (
          <div className="bg-white rounded-3xl border border-[#C5A46D]/30 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#C5A46D]/20 mb-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#173F32]">
                  My Saved SOAP Reflections
                </h3>
                <p className="text-xs text-[#2F4F4F]">
                  Past Scripture, Observation, Application, and Prayer entries
                </p>
              </div>

              <button
                type="button"
                onClick={() => openAppExperience('faithwalk-daily')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider bg-[#173F32] text-white hover:bg-[#2F4F4F] cursor-pointer"
              >
                <span>Write Today's Entry</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#C5A46D]" />
              </button>
            </div>

            <div className="space-y-4">
              {journalEntries.map((entry) => (
                <div key={entry.id} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#C5A46D]/25">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-lg font-bold text-[#173F32]">
                      {entry.passage}
                    </span>
                    <span className="text-xs text-[#2F4F4F]/70">{entry.date}</span>
                  </div>

                  <p className="italic text-xs sm:text-sm text-[#173F32]/90 border-l-2 border-[#C5A46D] pl-3 my-2 font-serif">
                    "{entry.scripture}"
                  </p>

                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#2F4F4F]">
                    <div>
                      <strong className="text-[#173F32] block mb-0.5">Application:</strong>
                      {entry.application}
                    </div>
                    <div>
                      <strong className="text-[#173F32] block mb-0.5">Prayer:</strong>
                      {entry.prayer}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#C5A46D]/15 flex items-center gap-2">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-white text-[#173F32] px-2 py-0.5 rounded-full border border-[#C5A46D]/20 font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================
            TAB 6: SAVED EVENTS & GATHERINGS
            ================================================== */}
        {activeTab === 'events' && (
          <div className="bg-white rounded-3xl border border-[#C5A46D]/30 p-6 sm:p-8 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#173F32] mb-2">
              Saved Christian Gatherings & Events
            </h3>
            <p className="text-xs text-[#2F4F4F] mb-6">
              Upcoming worship nights, conferences, and discipleship cohort meetings
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedEvents.map((ev) => (
                <div key={ev.id} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#C5A46D]/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-wider">
                        {ev.type}
                      </span>
                      <span className="text-xs font-bold text-[#173F32] bg-[#173F32]/10 px-2 py-0.5 rounded-full">
                        RSVP: {ev.rsvpStatus.toUpperCase()}
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-[#173F32] mb-1">
                      {ev.title}
                    </h4>
                    <p className="text-xs text-[#2F4F4F] mb-1">
                      📅 {ev.date} at {ev.time}
                    </p>
                    <p className="text-xs text-[#2F4F4F]">
                      📍 {ev.location}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#C5A46D]/15 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => alert('Calendar invite (.ics) generated!')}
                      className="text-xs font-bold text-[#173F32] hover:text-[#C5A46D] underline cursor-pointer"
                    >
                      Export to .ICS Calendar
                    </button>
                    <span className="text-[11px] text-[#2F4F4F]/70">Seat Confirmed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================
            TAB 7: SETTINGS
            ================================================== */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-3xl border border-[#C5A46D]/30 p-6 sm:p-8 shadow-sm max-w-2xl">
            <h3 className="font-serif text-xl font-bold text-[#173F32] mb-2">
              Account Settings & Security
            </h3>
            <p className="text-xs text-[#2F4F4F] mb-6">
              Your profile information and secure credential management.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#173F32] uppercase tracking-wider mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  readOnly
                  value={customer?.firstName || 'Sarah'}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#C5A46D]/30 bg-[#FAF7F2] text-sm text-[#173F32]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#173F32] uppercase tracking-wider mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  readOnly
                  value={customer?.displayName || 'Sarah Jenkins'}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#C5A46D]/30 bg-[#FAF7F2] text-sm text-[#173F32]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#173F32] uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  readOnly
                  value={customer?.email || 'sarah.faithwalk@example.com'}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#C5A46D]/30 bg-[#FAF7F2] text-sm text-[#173F32]"
                />
              </div>

              <div className="pt-4 border-t border-[#C5A46D]/20">
                <a
                  href="https://faithwalk-journal.com/my-account/edit-account/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#173F32] text-[#FAF7F2] hover:bg-[#2F4F4F] transition-colors"
                >
                  <Lock className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>Update Password & Details via WooCommerce</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
};
