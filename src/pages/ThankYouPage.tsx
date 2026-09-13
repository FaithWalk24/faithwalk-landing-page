import { BookOpen, ArrowRight } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-ivory">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-forest mb-4">
          WELCOME TO FAITHWALK
        </h1>
        <p className="text-xl md:text-2xl text-deep mb-8 font-inter">
          Your journey has begun.
        </p>
        
        {/* Mock download link */}
        <button 
          className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-forest hover:bg-deep text-white font-semibold rounded-lg transition-colors text-lg mb-12 shadow-md hover:shadow-lg cursor-pointer"
          onClick={() => { alert('Downloading your guide (mock action)...'); }}
        >
          <BookOpen className="w-5 h-5" />
          DOWNLOAD MY FREE GUIDE
        </button>
        
        <div className="pt-10 border-t border-gray-100">
          <h2 className="text-2xl font-playfair font-semibold text-deep mb-4">
            Ready to take your next step?
          </h2>
          <p className="text-gray-600 mb-8 font-inter">
            Dive deeper into building a daily rhythm with our full physical journal.
          </p>
          <a 
            href="https://faithwalk-journal.com/products/faithwalk-journey-starter-guide" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-heritage hover:opacity-90 text-white font-semibold rounded-lg transition-all text-lg shadow-lg hover:shadow-xl"
          >
            EXPLORE THE 30-DAY FAITHWALK
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
