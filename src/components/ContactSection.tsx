import React, { useState } from 'react';
import { Mail, MessageSquare, CheckCircle, Send, X } from 'lucide-react';

interface ContactSectionProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isOpen = false, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#E8E2D5]" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#C8A96A]/30 shadow-lg p-8 sm:p-12">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-[#C8A96A] block mb-2">
              We are here to help
            </span>
            <h2 id="contact-heading" className="font-serif text-3xl font-bold text-[#173F32] tracking-tight">
              Contact FaithWalk Support
            </h2>
            <p className="mt-2 text-sm text-[#52635B] leading-relaxed">
              Have questions regarding digital PDF downloads, compatibility, or ordering? Reach out to our team below.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 px-4 bg-[#FAF7F2] rounded-2xl border border-[#C8A96A]/30">
              <div className="w-12 h-12 rounded-full bg-[#173F32] text-[#C8A96A] flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#173F32] mb-2">
                Thank You for Reaching Out
              </h3>
              <p className="text-sm text-[#52635B] max-w-md mx-auto mb-6">
                Your message has been received. Our team will get back to you promptly at {formData.email || 'your email'}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'General Question', message: '' });
                }}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#173F32] text-[#FAF7F2] hover:bg-[#2F5D50]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-[#173F32] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEC2] bg-[#FAF7F2]/40 text-[#173F32] text-sm focus:bg-white focus:outline-none focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A] transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-[#173F32] uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEC2] bg-[#FAF7F2]/40 text-[#173F32] text-sm focus:bg-white focus:outline-none focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A] transition-all"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold text-[#173F32] uppercase tracking-wider mb-1.5">
                  Subject / Topic
                </label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#D5CEC2] bg-[#FAF7F2]/40 text-[#173F32] text-sm focus:bg-white focus:outline-none focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A] transition-all"
                >
                  <option value="Free Starter Guide Inquiry">Free Starter Guide Assistance</option>
                  <option value="Download Help">Digital PDF Download Assistance</option>
                  <option value="Order Support">WooCommerce Order & PayFast Support</option>
                  <option value="General Question">General Feedback or Inquiries</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-[#173F32] uppercase tracking-wider mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#D5CEC2] bg-[#FAF7F2]/40 text-[#173F32] text-sm focus:bg-white focus:outline-none focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A] transition-all resize-y"
                  placeholder="How can we help you on your FaithWalk journey today?"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#173F32] text-[#FAF7F2] hover:bg-[#2F5D50] shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A]"
                >
                  <Send className="w-3.5 h-3.5 text-[#C8A96A]" />
                  <span>Send Message</span>
                </button>

                <p className="text-xs text-[#52635B] text-center sm:text-right">
                  Or email directly:{' '}
                  <a
                    href="mailto:support@faithwalk-journal.com"
                    className="font-bold text-[#173F32] hover:underline"
                  >
                    support@faithwalk-journal.com
                  </a>
                </p>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
