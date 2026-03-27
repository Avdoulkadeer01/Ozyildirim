import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  ShoppingBag, 
  Wrench, 
  Info, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Clock, 
  Award, 
  CheckCircle2,
  Facebook,
  Instagram,
  Twitter,
  Search,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
        <StickyActions />
      </div>
    </Router>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
