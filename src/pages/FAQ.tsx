import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "Do you offer solar panel installation?",
    answer: "Yes! Ozyildirim is a certified provider of solar energy solutions in Mersin. We handle everything from initial consultation and site assessment to professional installation and maintenance."
  },
  {
    question: "How long does a typical repair take?",
    answer: "Most common repairs, like screen or battery replacements, are completed within 1-2 hours. More complex issues like water damage or motherboard repairs may take 24-48 hours."
  },
  {
    question: "Do you provide a warranty on repairs?",
    answer: "Yes! We provide a comprehensive 1-year warranty on all replacement parts and labor. If the same issue recurs, we'll fix it for free."
  },
  {
    question: "Are your replacement parts original?",
    answer: "We use original parts whenever possible. In cases where original parts are not available, we use the highest quality certified alternatives that meet or exceed original specifications."
  },
  {
    question: "Do I need an appointment for a repair?",
    answer: "No appointment is necessary! You can walk into our Mersin store anytime during working hours. However, booking online or calling ahead can help us ensure we have the parts ready for you."
  },
  {
    question: "Can you recover data from a broken phone?",
    answer: "In most cases, yes. We have specialized tools to recover data from devices with broken screens, dead batteries, or even minor water damage."
  },
  {
    question: "Do you sell refurbished devices?",
    answer: "Yes, we have a selection of certified refurbished smartphones and laptops that have been rigorously tested and come with a 6-month warranty."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600">Everything you need to know about our services and products in Mersin.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-3xl transition-all ${
                activeIndex === idx ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 bg-white hover:border-slate-200'
              }`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex justify-between items-center text-left"
              >
                <span className="text-xl font-bold text-slate-900">{faq.question}</span>
                <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  activeIndex === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  {activeIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-lg text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-20 p-10 bg-slate-900 rounded-[40px] text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-slate-400 mb-8">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all">
              Contact Us
            </a>
            <a href="https://wa.me/905000000000" className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
