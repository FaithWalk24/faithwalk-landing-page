import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Volume2,
  Sparkles,
  Flame,
  CheckCircle2,
  Calendar,
  Layers,
  Heart,
  Share2,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronRight,
  Send,
  MessageSquare
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface AppExperienceModalProps {
  appId: 'faithwalk-daily' | 'faithwalk-companion';
  onClose: () => void;
}

export const AppExperienceModal: React.FC<AppExperienceModalProps> = ({ appId, onClose }) => {
  const { isSubscribed, subscribeToApp, navigateToAccount } = useApp();
  const [activeScreen, setActiveScreen] = useState<'sanctuary' | 'soap' | 'curriculum' | 'community'>('sanctuary');
  const [translation, setTranslation] = useState<'NIV' | 'ESV' | 'NKJV' | 'CSB' | 'NLT'>('ESV');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // SOAP State
  const [soapScripture, setSoapScripture] = useState('Proverbs 3:5-6 — "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths."');
  const [soapObservation, setSoapObservation] = useState('Wholehearted trust requires surrendering my desire to control outcomes.');
  const [soapApplication, setSoapApplication] = useState('Today I will submit my anxiety about the future into prayer before making key decisions.');
  const [soapPrayer, setSoapPrayer] = useState('Lord, strengthen my faith today. Guide every step I take.');
  const [savedSoap, setSavedSoap] = useState(false);

  // Community prayer reactions
  const [prayers, setPrayers] = useState([
    { id: 1, author: 'Hannah M.', text: 'Praying for wisdom and peace in navigating a family health trial this week.', prayerCount: 18, hasPrayed: false },
    { id: 2, author: 'David K.', text: 'Praise report: God provided an open door for fellowship in our community!', prayerCount: 24, hasPrayed: true },
    { id: 3, author: 'Ruth S.', text: 'Seeking guidance as I step into Phase 3: Renewal & Transformation in my discipleship walk.', prayerCount: 12, hasPrayed: false },
  ]);

  const togglePrayer = (id: number) => {
    setPrayers((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              prayerCount: p.hasPrayed ? p.prayerCount - 1 : p.prayerCount + 1,
              hasPrayed: !p.hasPrayed,
            }
          : p
      )
    );
  };

  const handleSubscribe = () => {
    subscribeToApp(appId);
  };

  const isCompanion = appId === 'faithwalk-companion';
  const appName = isCompanion ? 'FaithWalk Daily Companion' : 'FaithWalk Daily';
  const price = isCompanion ? 'R149/month' : 'R79/month';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="bg-[#FDFCF8] rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl border-2 border-[#C5A46D] overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="app-modal-title"
      >
        {/* Modal Top Bar */}
        <div className="bg-[#173F32] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#C5A46D]/30 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#C5A46D] text-[#173F32] font-serif font-bold flex items-center justify-center text-sm shadow-xs">
              FW
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="app-modal-title" className="font-serif text-lg font-bold text-[#FAF7F2]">
                  {appName}
                </h2>
                <span className="text-[10px] bg-[#C5A46D]/20 text-[#C5A46D] font-bold px-2 py-0.5 rounded-full border border-[#C5A46D]/40 uppercase">
                  Digital Sanctuary
                </span>
              </div>
              <p className="text-xs text-[#FAF7F2]/75">
                {isCompanion ? '180-Day Discipleship & Transformation' : 'Personal Daily Spiritual Growth'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {!isSubscribed(appId) ? (
              <button
                type="button"
                onClick={handleSubscribe}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C5A46D] text-[#173F32] text-xs font-bold uppercase tracking-wider hover:bg-[#D4B886] transition-all shadow-xs cursor-pointer"
              >
                <span>Activate Access ({price})</span>
              </button>
            ) : (
              <span className="hidden sm:inline-flex items-center gap-1 text-xs text-[#C5A46D] font-bold bg-[#2F4F4F] px-3 py-1 rounded-full border border-[#C5A46D]/30">
                <CheckCircle2 className="w-3.5 h-3.5" /> Active Subscription
              </span>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#FAF7F2]/80 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D]"
              aria-label="Close interactive app modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Screen Tabs Bar */}
        <div className="bg-[#FAF7F2] border-b border-[#C5A46D]/20 px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 flex-shrink-0">
          <div className="flex items-center gap-1 sm:gap-2">
            {[
              { id: 'sanctuary', label: "Today's Sanctuary", icon: BookOpen },
              { id: 'soap', label: 'SOAP Journal Engine', icon: Sparkles },
              { id: 'curriculum', label: isCompanion ? '180-Day Curriculum' : '6-Phase Discipleship', icon: Layers },
              { id: 'community', label: 'Fellowship & Prayer', icon: Heart },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveScreen(tab.id as any)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeScreen === tab.id
                      ? 'bg-[#173F32] text-[#FAF7F2] shadow-xs'
                      : 'text-[#2F4F4F] hover:bg-[#173F32]/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-xs text-[#2F4F4F]">
            <Flame className="w-4 h-4 text-[#C5A46D]" />
            <span className="font-bold text-[#173F32]">14-Day Streak</span>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* SCREEN 1: TODAY'S SANCTUARY */}
          {activeScreen === 'sanctuary' && (
            <div className="space-y-6">
              {/* Scripture Meditation Card */}
              <div className="bg-white rounded-2xl border border-[#C5A46D]/30 p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#C5A46D]/20">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A46D]">Daily Scripture Anchor</span>
                    <h3 className="font-serif text-2xl font-bold text-[#173F32]">Proverbs 3:5–6</h3>
                  </div>

                  {/* Multi-translation switcher */}
                  <div className="flex items-center gap-1 bg-[#FAF7F2] p-1 rounded-xl border border-[#C5A46D]/20 self-start">
                    {(['ESV', 'NIV', 'NKJV', 'CSB', 'NLT'] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTranslation(t)}
                        className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                          translation === t ? 'bg-[#173F32] text-white' : 'text-[#2F4F4F] hover:text-[#173F32]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="my-6 pl-4 border-l-4 border-[#C5A46D] italic text-base sm:text-lg text-[#173F32] font-serif leading-relaxed">
                  "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths."
                </div>

                {/* Audio Contemplation Player Bar */}
                <div className="bg-[#FAF7F2] rounded-xl p-3.5 flex items-center justify-between gap-4 border border-[#C5A46D]/20">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="w-10 h-10 rounded-full bg-[#173F32] text-[#C5A46D] flex items-center justify-center shadow-xs hover:bg-[#2F4F4F] transition-all cursor-pointer"
                      aria-label="Play audio reflection"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <div>
                      <p className="text-xs font-bold text-[#173F32]">
                        {isPlayingAudio ? 'Playing Contemplative Audio...' : 'Listen to Audio Meditation'}
                      </p>
                      <p className="text-[10px] text-[#2F4F4F]">Guided spoken reflection & ambient worship cello (3:45)</p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-[#C5A46D] font-bold">
                    {isPlayingAudio ? '01:14 / 03:45' : '00:00 / 03:45'}
                  </span>
                </div>

                {/* Devotional Reflection */}
                <div className="mt-6 pt-4 border-t border-[#C5A46D]/15 text-sm text-[#2F4F4F] leading-relaxed space-y-3">
                  <h4 className="font-serif text-base font-bold text-[#173F32]">Devotional Meditation: The Relinquished Will</h4>
                  <p>
                    Solomon invites us into a trust that is wholehearted rather than conditional. Leaning on our own understanding feels safe because it gives the illusion of control, yet biblical faith asks us to lean our full spiritual weight upon the character and promises of God.
                  </p>
                  <p>
                    Today, acknowledge Him in the quiet moments before emails, meetings, and family discussions. Allow Him to make straight what human wisdom tends to tangle.
                  </p>
                </div>
              </div>

              {/* 4 Spiritual Disciplines Quick Commit */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: 'Daily Prayer', done: true, time: '15 min' },
                  { name: 'Scripture Study', done: true, time: '20 min' },
                  { name: 'Fasting & Solitude', done: false, time: 'Scheduled' },
                  { name: 'Service & Mercy', done: true, time: 'Acts of Love' },
                ].map((disc) => (
                  <div key={disc.name} className="p-3 bg-white rounded-xl border border-[#C5A46D]/20 shadow-xs flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#173F32] block">{disc.name}</span>
                      <span className="text-[10px] text-[#2F4F4F]/70">{disc.time}</span>
                    </div>
                    {disc.done ? (
                      <CheckCircle2 className="w-5 h-5 text-[#C5A46D]" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-[#C5A46D]/40" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SCREEN 2: SOAP JOURNAL */}
          {activeScreen === 'soap' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[#C5A46D]/30 p-6 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-[#C5A46D]/20 mb-5">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#173F32]">
                      Interactive SOAP Journal Entry
                    </h3>
                    <p className="text-xs text-[#2F4F4F]">
                      Scripture • Observation • Application • Prayer
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#C5A46D] bg-[#173F32] px-3 py-1 rounded-full">
                    Day 14 Entry
                  </span>
                </div>

                <div className="space-y-4">
                  {/* S */}
                  <div>
                    <label className="text-xs font-bold text-[#173F32] uppercase tracking-wider block mb-1">
                      <span className="text-[#C5A46D] font-extrabold mr-1">S</span> Scripture Passage
                    </label>
                    <textarea
                      value={soapScripture}
                      onChange={(e) => setSoapScripture(e.target.value)}
                      rows={2}
                      className="w-full p-3 rounded-xl border border-[#C5A46D]/30 bg-[#FDFCF8] text-xs sm:text-sm text-[#173F32] font-serif focus:ring-2 focus:ring-[#C5A46D]"
                    />
                  </div>

                  {/* O */}
                  <div>
                    <label className="text-xs font-bold text-[#173F32] uppercase tracking-wider block mb-1">
                      <span className="text-[#C5A46D] font-extrabold mr-1">O</span> Observation (What did God say?)
                    </label>
                    <textarea
                      value={soapObservation}
                      onChange={(e) => setSoapObservation(e.target.value)}
                      rows={2}
                      className="w-full p-3 rounded-xl border border-[#C5A46D]/30 bg-[#FDFCF8] text-xs sm:text-sm text-[#173F32] focus:ring-2 focus:ring-[#C5A46D]"
                    />
                  </div>

                  {/* A */}
                  <div>
                    <label className="text-xs font-bold text-[#173F32] uppercase tracking-wider block mb-1">
                      <span className="text-[#C5A46D] font-extrabold mr-1">A</span> Application (How does this apply to me today?)
                    </label>
                    <textarea
                      value={soapApplication}
                      onChange={(e) => setSoapApplication(e.target.value)}
                      rows={2}
                      className="w-full p-3 rounded-xl border border-[#C5A46D]/30 bg-[#FDFCF8] text-xs sm:text-sm text-[#173F32] focus:ring-2 focus:ring-[#C5A46D]"
                    />
                  </div>

                  {/* P */}
                  <div>
                    <label className="text-xs font-bold text-[#173F32] uppercase tracking-wider block mb-1">
                      <span className="text-[#C5A46D] font-extrabold mr-1">P</span> Prayer (Lifting my heart in response)
                    </label>
                    <textarea
                      value={soapPrayer}
                      onChange={(e) => setSoapPrayer(e.target.value)}
                      rows={2}
                      className="w-full p-3 rounded-xl border border-[#C5A46D]/30 bg-[#FDFCF8] text-xs sm:text-sm text-[#173F32] focus:ring-2 focus:ring-[#C5A46D]"
                    />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C5A46D]/20 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setSavedSoap(true);
                      setTimeout(() => setSavedSoap(false), 3000);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#173F32] text-white hover:bg-[#2F4F4F] transition-all cursor-pointer"
                  >
                    <span>{savedSoap ? 'Saved to Sanctuary!' : 'Save Journal Entry'}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D]" />
                  </button>

                  <span className="text-xs text-[#2F4F4F]/70">Auto-saved to Cloud Firestore</span>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 3: CURRICULUM */}
          {activeScreen === 'curriculum' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[#C5A46D]/30 p-6 shadow-sm">
                <div className="pb-4 border-b border-[#C5A46D]/20 mb-5">
                  <span className="text-[11px] font-bold text-[#C5A46D] uppercase tracking-wider">
                    {isCompanion ? '180-Day Transformation Curriculum' : '6-Phase Discipleship Journey'}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#173F32]">
                    Six Phases of Spiritual Maturity
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { phase: 1, name: 'Genesis & Awakening', days: 'Days 1–30', desc: 'Establishing personal intimacy, foundational repentance, and encountering the living Word.', current: true },
                    { phase: 2, name: 'Rooted & Established', days: 'Days 31–60', desc: 'Deepening spiritual disciplines, doctrine, prayer rhythms, and biblical discernment.', current: false },
                    { phase: 3, name: 'Renewal & Transformation', days: 'Days 61–90', desc: 'Renovating thought patterns, tearing down worldly strongholds, walking in Spirit-filled liberty.', current: false },
                    { phase: 4, name: 'Fruitfulness & Service', days: 'Days 91–120', desc: 'Cultivating the Fruit of the Spirit and actively serving within local church bodies.', current: false },
                    { phase: 5, name: 'Crucible & Deep Trust', days: 'Days 121–150', desc: 'Persevering through spiritual warfare, suffering, patient endurance, and mature surrender.', current: false },
                    { phase: 6, name: 'Commissioned for Kingdom', days: 'Days 151–180', desc: 'Discipling others, generational legacy, kingdom stewardship, and living as sent ambassadors.', current: false },
                  ].map((p) => (
                    <div
                      key={p.phase}
                      className={`p-4 rounded-2xl border transition-all ${
                        p.current
                          ? 'border-[#C5A46D] bg-[#173F32]/5 shadow-sm'
                          : 'border-[#C5A46D]/20 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-[#173F32]">
                          Phase {p.phase}: {p.name}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-[#C5A46D] bg-[#173F32] px-2 py-0.5 rounded-full">
                          {p.days}
                        </span>
                      </div>
                      <p className="text-xs text-[#2F4F4F] leading-relaxed mb-3">{p.desc}</p>
                      {p.current ? (
                        <div className="flex items-center gap-1.5 text-xs text-[#173F32] font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D]" /> Currently Active (Day 14)
                        </div>
                      ) : (
                        <span className="text-[11px] text-[#2F4F4F]/60">Upcoming Phase</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 4: COMMUNITY & FELLOWSHIP */}
          {activeScreen === 'community' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[#C5A46D]/30 p-6 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-[#C5A46D]/20 mb-5">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#173F32]">
                      Fellowship Prayer Wall
                    </h3>
                    <p className="text-xs text-[#2F4F4F]">
                      Lifting up one another in brotherly love and intercession
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => alert('Post Prayer Request modal')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#173F32] text-[#FAF7F2] text-xs font-bold cursor-pointer hover:bg-[#2F4F4F]"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>Share Prayer Need</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {prayers.map((prayer) => (
                    <div key={prayer.id} className="p-4 rounded-xl bg-[#FAF7F2] border border-[#C5A46D]/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#173F32]">{prayer.author}</span>
                        <span className="text-[10px] text-[#2F4F4F]/60">2 hours ago</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#173F32] leading-relaxed mb-3">
                        {prayer.text}
                      </p>
                      <button
                        type="button"
                        onClick={() => togglePrayer(prayer.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                          prayer.hasPrayed
                            ? 'bg-[#C5A46D] text-[#173F32]'
                            : 'bg-white border border-[#C5A46D]/30 text-[#173F32] hover:bg-[#C5A46D]/15'
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${prayer.hasPrayed ? 'fill-current' : ''}`} />
                        <span>{prayer.hasPrayed ? 'Prayed' : 'Pray for this'} ({prayer.prayerCount})</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Action Footer */}
        <div className="bg-[#FAF7F2] p-4 sm:p-6 border-t border-[#C5A46D]/20 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#2F4F4F]">
            <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
            <span>Encrypted cloud storage • Dedicated customer privacy • PayFast / Card subscription</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {!isSubscribed(appId) ? (
              <button
                type="button"
                onClick={handleSubscribe}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-[#C5A46D] text-[#173F32] hover:bg-[#D4B886] shadow-md transition-all cursor-pointer"
              >
                <span>SUBSCRIBE TO {appName} ({price})</span>
                <ArrowRight className="w-4 h-4 text-[#173F32]" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  navigateToAccount();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-[#173F32] text-white hover:bg-[#2F4F4F] shadow-md transition-all cursor-pointer"
              >
                <span>VIEW IN PERSONAL SANCTUARY</span>
                <ChevronRight className="w-4 h-4 text-[#C5A46D]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
