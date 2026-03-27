import { Link } from 'react-router-dom';
import { ShoppingBag, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <ShoppingBag size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                OZYILDIRIM<span className="text-blue-600">TECH</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Reliable, fast, and affordable electronic and solar solutions in Mersin with expert support and guaranteed quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/products" className="hover:text-white transition-colors">Shop Products</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Repair Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Tech Blog</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-white transition-colors">Phone Repair</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Laptop Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Smart Home Setup</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Custom PC Building</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Data Recovery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-1" />
                <span>Atatürk Cd. No:123, Mersin, Turkey</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span>+90 500 000 00 00</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span>info@mersintech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 Ozyildirim Electronics & Solar. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
