import React from 'react';
import {
  User,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Download,
  Lock,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AccountPage: React.FC = () => {
  const { navigateToShop, navigateToApps } = useApp();

  const openSecureAccount = () => {
    window.location.href = 'https://faithwalk-journal.com/my-account/';
  };

  return (
    <main className="min-h-[75vh] bg-[#FAF7F2] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#173F32]/10 border border-[#C5A46D]/30 text-[#173F32] text-xs uppercase tracking-widest font-semibold mb-3">
            <User className="w-3.5 h-3.5 text-[#C5A46D]" />
            FaithWalk Customer Portal
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#173F32] mb-3">
            My FaithWalk Account
          </h1>

          <p className="text-sm sm:text-base text-[#2F4F4F] max-w-xl mx-auto">
            Access your secure FaithWalk customer account, purchases,
            digital downloads and account details.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#C5A46D]/30 shadow-xl overflow-hidden">

          <div className="bg-[#173F32] px-6 sm:px-8 py-7 text-center">
            <ShieldCheck className="w-10 h-10 text-[#C5A46D] mx-auto mb-3" />

            <h2 className="font-serif text-2xl font-bold text-[#FAF7F2]">
              Personal Sanctuary
            </h2>

            <p className="text-sm text-[#FAF7F2]/80 mt-2 max-w-lg mx-auto">
              Your customer authentication and digital purchases are securely
              managed through the official FaithWalk Journal store.
            </p>
          </div>

          <div className="p-6 sm:p-8">

            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-[#173F32] mb-2">
                Sign In or Create Your Account
              </h3>

              <p className="text-sm text-[#2F4F4F] mb-6 max-w-lg mx-auto">
                Continue to the secure FaithWalk account system to sign in,
                register, view orders or access your purchased downloads.
              </p>

              <button<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#C5A46D]/20">

  <button
    type="button"
    onClick={() => window.location.href = 'https://faithwalk-journal.com/my-account/downloads/'}
    className="rounded-2xl bg-[#FAF7F2] border border-[#C5A46D]/20 p-4 text-center hover:border-[#C5A46D] hover:shadow-md transition-all cursor-pointer"
  >
    <Download className="w-6 h-6 text-[#C5A46D] mx-auto mb-2" />
    <h4 className="font-bold text-sm text-[#173F32]">Downloads</h4>
    <p className="text-xs text-[#2F4F4F] mt-1">
      Access eligible purchased digital journals.
    </p>
  </button>

  <button
    type="button"
    onClick={() => window.location.href = 'https://faithwalk-journal.com/my-account/orders/'}
    className="rounded-2xl bg-[#FAF7F2] border border-[#C5A46D]/20 p-4 text-center hover:border-[#C5A46D] hover:shadow-md transition-all cursor-pointer"
  >
    <BookOpen className="w-6 h-6 text-[#C5A46D] mx-auto mb-2" />
    <h4 className="font-bold text-sm text-[#173F32]">Orders</h4>
    <p className="text-xs text-[#2F4F4F] mt-1">
      Review your FaithWalk Journal purchases.
    </p>
  </button>

  <button
    type="button"
    onClick={() => window.location.href = 'https://faithwalk-journal.com/my-account/edit-account/'}
    className="rounded-2xl bg-[#FAF7F2] border border-[#C5A46D]/20 p-4 text-center hover:border-[#C5A46D] hover:shadow-md transition-all cursor-pointer"
  >
    <User className="w-6 h-6 text-[#C5A46D] mx-auto mb-2" />
    <h4 className="font-bold text-sm text-[#173F32]">Account Details</h4>
    <p className="text-xs text-[#2F4F4F] mt-1">
      Manage your customer information securely.
    </p>
  </button>

</div>
                </p>
              </div>

              <div className="rounded-2xl bg-[#FAF7F2] border border-[#C5A46D]/20 p-4 text-center">
                <User className="w-6 h-6 text-[#C5A46D] mx-auto mb-2" />
                <h4 className="font-bold text-sm text-[#173F32]">
                  Account Details
                </h4>
                <p className="text-xs text-[#2F4F4F] mt-1">
                  Manage your customer information securely.
                </p>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">

              <button
                type="button"
                onClick={navigateToShop}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#173F32] text-white hover:bg-[#2F4F4F] transition-all"
              >
                Shop FaithWalk Journals
              </button>

              <button
                type="button"
                onClick={navigateToApps}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-[#C5A46D] text-[#173F32] hover:bg-[#FAF7F2] transition-all"
              >
                Explore Digital Apps
              </button>

            </div>

          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-6 text-xs text-[#2F4F4F]">

          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
            <span>Secure Account Connection</span>
          </div>

          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#C5A46D]" />
            <span>FaithWalk Journal Store</span>
          </div>

        </div>

      </div>
    </main>
  );
};
