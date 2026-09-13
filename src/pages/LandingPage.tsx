import { useState, useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Book, Sparkles, CheckCircle2, ChevronDown, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);
  
  // Form State
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ firstName?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Form Validation Logic
  const validate = () => {
    const newErrors: typeof errors = {};
    if (!firstName.trim()) {
      newErrors.firstName = 'Please enter your first name.';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submission Logic
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setApiError('');
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      // Mock API submission delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // On success, redirect to thank-you page
      navigate('/thank-you');
    } catch (err) {
      setApiError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "Is this guide really free?",
      answer: "Yes, it is 100% free. We want to help you build a solid foundation for your daily walk with God without any barriers."
    },
    {
      question: "Do I need a physical journal to use this?",
      answer: "Not at all. This is a digital guide designed to help you build the rhythm. You can use any notebook or digital note-taking app alongside it."
    },
    {
      question: "How long will this take me each day?",
      answer: "The FaithWalk rhythm is designed to be simple and intentional, taking just 10-15 minutes of your day to center your heart on Truth."
    }
  ];

  return (
    <div className="min-h-screen bg-ivory font-inter text-deep selection:bg-heritage selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative px-6 py-20 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-forest/10 text-forest font-semibold text-sm mb-8 tracking-wide uppercase">
          Free Digital Download
        </div>
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-forest leading-tight mb-6">
          Discover the Simple Rhythm to a Deeper Faith
        </h1>
        <p className="text-xl md:text-2xl text-deep/80 mb-10 max-w-2xl leading-relaxed">
          Download the free <strong className="font-semibold text-deep">FaithWalk Journey Starter Guide</strong> and build a daily habit of Scripture, reflection, prayer, and gratitude.
        </p>
        <button 
          onClick={scrollToForm}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-heritage hover:bg-heritage/90 text-white font-bold rounded-lg transition-all text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          GET MY FREE GUIDE
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* 2. EMPATHY / PROBLEM */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest mb-6">
            Do you ever feel like your faith is on autopilot?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            Life gets overwhelmingly busy. Between work, family, and endless distractions, it's easy to lose the daily connection we desire with God. 
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We want to read Scripture, but we don't know where to start. We want to pray, but the words escape us. <strong className="text-deep font-semibold">You are not alone in this struggle.</strong>
          </p>
        </div>
      </section>

      {/* 3. SOLUTION & 4. BENEFITS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest mb-4">
              Enter the FaithWalk Rhythm
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The Starter Guide removes the guesswork and overwhelm, providing a clear, simple structure that fits into any season of life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Book className="w-7 h-7 text-forest" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-deep mb-3">Guided Structure</h3>
              <p className="text-gray-600">No more guessing what to read. Follow a clear path through Scripture.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-7 h-7 text-forest" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-deep mb-3">Deeper Connection</h3>
              <p className="text-gray-600">Meaningful prompts for prayer and gratitude that transform your mindset.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-14 h-14 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-7 h-7 text-forest" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-deep mb-3">Peace of Mind</h3>
              <p className="text-gray-600">Start your day grounded in Truth, ready to face whatever comes your way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 3-STEP PLAN */}
      <section className="bg-forest text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16 text-ivory">
            Your Journey in 3 Simple Steps
          </h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/20">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-forest bg-heritage text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 ml-6 md:ml-0">
                <h3 className="font-playfair font-bold text-xl mb-2 text-heritage">Download the Guide</h3>
                <p className="text-ivory/80">Claim your 100% free digital copy and open it on your favorite device.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-forest bg-heritage text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 ml-6 md:ml-0">
                <h3 className="font-playfair font-bold text-xl mb-2 text-heritage">Set Aside 10 Minutes</h3>
                <p className="text-ivory/80">Find a quiet moment in your day to pause, breathe, and open your heart.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-forest bg-heritage text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 ml-6 md:ml-0">
                <h3 className="font-playfair font-bold text-xl mb-2 text-heritage">Experience Renewal</h3>
                <p className="text-ivory/80">Step into the rest of your day with the peace and confidence of His presence.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. LEAD CAPTURE FORM */}
      <section ref={formRef} className="py-24 px-6 bg-white scroll-mt-10">
        <div className="max-w-2xl mx-auto bg-ivory rounded-3xl p-8 md:p-12 shadow-xl border border-heritage/20 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest mb-4">
            Where should we send your guide?
          </h2>
          <p className="text-gray-600 mb-8">
            Enter your details below to get instant access to the free Starter Guide.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
            
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-deep mb-1.5">First Name</label>
              <input 
                type="text" 
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:outline-none transition-shadow ${errors.firstName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-forest focus:ring-forest/20'}`}
                disabled={isSubmitting}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-deep mb-1.5">Email Address</label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your best email address"
                className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:outline-none transition-shadow ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-forest focus:ring-forest/20'}`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.email}</p>
              )}
            </div>

            {apiError && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-medium text-center">
                {apiError}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-heritage hover:bg-heritage/90 text-white font-bold rounded-lg transition-all text-lg shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  SUBMITTING...
                </>
              ) : (
                'GET MY FREE GUIDE'
              )}
            </button>
            <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              We respect your privacy. No spam ever.
            </p>
          </form>
        </div>
      </section>

      {/* 7. WHO FAITHWALK IS FOR */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest mb-10">
            Who is this for?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <CheckCircle2 className="w-6 h-6 text-heritage shrink-0 mt-0.5" />
              <p className="text-gray-700 font-medium">Christians feeling overwhelmed and seeking a simpler, more intentional daily faith rhythm.</p>
            </div>
            <div className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <CheckCircle2 className="w-6 h-6 text-heritage shrink-0 mt-0.5" />
              <p className="text-gray-700 font-medium">New believers wanting a guided, easy-to-follow introduction to daily quiet time.</p>
            </div>
            <div className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <CheckCircle2 className="w-6 h-6 text-heritage shrink-0 mt-0.5" />
              <p className="text-gray-700 font-medium">Busy parents and professionals who need a short but deeply meaningful daily practice.</p>
            </div>
            <div className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <CheckCircle2 className="w-6 h-6 text-heritage shrink-0 mt-0.5" />
              <p className="text-gray-700 font-medium">Anyone looking to move beyond "check-the-box" religion into genuine relationship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRUST SECTION */}
      <section className="bg-forest text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <Heart className="w-10 h-10 text-heritage mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-ivory">
            Built on Truth. Designed for Real Life.
          </h2>
          <p className="text-lg text-ivory/80 leading-relaxed italic">
            "Join thousands of others who have discovered the peace of a daily FaithWalk rhythm. Grounded purely in Scripture, free from guilt, and focused on genuine connection."
          </p>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 focus:outline-none"
                >
                  <span className="font-semibold text-deep text-lg">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-heritage transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="p-6 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-24 px-6 text-center bg-ivory border-t border-heritage/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-forest mb-6">
            Your daily rhythm awaits.
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            One day, one prayer, one step at a time.
          </p>
          <button 
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-heritage hover:bg-heritage/90 text-white font-bold rounded-lg transition-all text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            GET MY FREE GUIDE
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
      
    </div>
  );
}
