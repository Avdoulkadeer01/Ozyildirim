import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function StickyActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      <motion.a
        href="https://wa.me/905000000000"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 cursor-pointer"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>
      
      <motion.a
        href="tel:+905000000000"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-600/40 cursor-pointer"
        title="Call Us Now"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
}
