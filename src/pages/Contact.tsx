import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Have a question about a product or need a repair quote? Our team in Mersin is ready to help you. Visit our store or contact us via any of the channels below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Our Location</h4>
                  <p className="text-slate-600">Atatürk Cd. No:123, 33000 Mersin, Turkey</p>
                  <a href="#" className="text-blue-600 font-bold text-sm hover:underline mt-2 block">View on Google Maps</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-600">+90 500 000 00 00</p>
                  <p className="text-slate-600">+90 324 000 00 00</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">WhatsApp</h4>
                  <p className="text-slate-600">Available 24/7 for quick support</p>
                  <a href="https://wa.me/905000000000" className="text-green-600 font-bold text-sm hover:underline mt-2 block">Start Chat Now</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Working Hours</h4>
                  <p className="text-slate-600">Mon - Sat: 09:00 - 20:00</p>
                  <p className="text-slate-600">Sun: 11:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-slate-100 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-slate-200"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Service Type</label>
                <select className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none">
                  <option>Product Inquiry</option>
                  <option>Repair Quote</option>
                  <option>Installation Service</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell us how we can help..." 
                  className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                Send Message <Send size={20} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
