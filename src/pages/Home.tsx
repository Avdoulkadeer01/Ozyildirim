import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Wrench, MessageCircle, Star, CheckCircle2, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-50 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span>Electronics & Solar Experts in Mersin</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                <span className="text-blue-600">Ozyildirim</span> Electronics & Solar Solutions
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                Your trusted partner for expert repairs, premium gadgets, and professional solar panel installations in Mersin.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/services" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center shadow-xl shadow-blue-600/20 transition-all active:scale-95"
                >
                  Solar & Repairs <Wrench className="ml-2" size={20} />
                </Link>
                <Link 
                  to="/products" 
                  className="bg-white border-2 border-slate-200 hover:border-orange-500 hover:text-orange-600 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg flex items-center transition-all active:scale-95"
                >
                  Shop Tech <ShoppingBag className="ml-2" size={20} />
                </Link>
              </div>
              
              <div className="mt-10 flex items-center space-x-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      className="w-12 h-12 rounded-full border-4 border-white object-cover"
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex text-orange-400">
                    {[1, 2, 3, 4, 5].map((i) => <span key={i}>★</span>)}
                  </div>
                  <p className="text-sm font-bold text-slate-900">1,500+ Happy Customers in Mersin</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
                <img 
                  src="https://picsum.photos/seed/solar-mersin/800/600" 
                  alt="Solar Installation Mersin" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-white">
                      <Sun size={24} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium opacity-80">Solar Energy</p>
                      <p className="text-white font-bold">Expert Installation</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex justify-center font-bold text-2xl tracking-tighter italic">SAMSUNG</div>
            <div className="flex justify-center font-bold text-2xl tracking-tighter italic">APPLE</div>
            <div className="flex justify-center font-bold text-2xl tracking-tighter italic">HUAWEI</div>
            <div className="flex justify-center font-bold text-2xl tracking-tighter italic">TESLA SOLAR</div>
          </div>
        </div>
      </section>

      {/* Problem -> Solution Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Expert Repairs & Solar Energy Solutions.</h2>
            <p className="text-lg text-slate-600">From fixing your smartphone to powering your home with the sun, Ozyildirim is Mersin's all-in-one tech partner.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Solar Installation', 
                desc: 'Reduce your energy bills with professional solar panel setup for homes and businesses.',
                icon: <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6"><Sun size={24} /></div>
              },
              { 
                title: 'Tech Repairs', 
                desc: 'Phones, laptops, and tablets fixed fast with original parts and 1-year warranty.',
                icon: <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Wrench size={24} /></div>
              },
              { 
                title: 'Smart Home', 
                desc: 'Full home automation and security system installations for modern living.',
                icon: <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6"><CheckCircle2 size={24} /></div>
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all"
              >
                {item.icon}
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                <Link to="/services" className="text-blue-600 font-bold flex items-center hover:underline">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Latest Tech Arrivals</h2>
              <p className="text-slate-400 text-lg">Discover the newest gadgets and accessories at competitive prices in Mersin.</p>
            </div>
            <Link to="/products" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-800">
                  <img 
                    src={`https://picsum.photos/seed/product${i}/500/500`} 
                    alt="Product" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    New
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Tech Gadget {i}</h3>
                <p className="text-slate-400 mb-4">High-quality electronics with warranty.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-400">$299.00</span>
                  <button className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/ozyildirim-solar/600/800" 
                alt="Solar Installation" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-xl max-w-xs">
                <p className="text-4xl font-bold mb-2">20+</p>
                <p className="font-medium opacity-80 uppercase tracking-wider text-sm">Years of Combined Expertise</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Why Ozyildirim is the #1 Choice</h2>
              <div className="space-y-8">
                {[
                  { title: 'Solar Energy Experts', desc: 'Certified solar panel installers helping Mersin go green.', icon: <Sun className="text-orange-500" /> },
                  { title: 'Fast Tech Repairs', desc: 'Most electronics repairs are completed within the same day.', icon: <CheckCircle2 className="text-green-500" /> },
                  { title: '1-Year Warranty', desc: 'We stand behind our work with a full 1-year warranty on parts.', icon: <CheckCircle2 className="text-green-500" /> },
                  { title: 'Expert Technicians', desc: 'Certified professionals with years of experience.', icon: <CheckCircle2 className="text-green-500" /> },
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/about" className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700">
                  Read Our Full Story <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What Our Customers Say</h2>
            <div className="flex justify-center text-orange-400 mb-4">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} fill="currentColor" size={24} />)}
            </div>
            <p className="text-slate-600 text-lg">Real reviews from real people in Mersin.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ahmet Y.', role: 'Homeowner', text: 'Ozyildirim installed solar panels on my roof last month. My energy bills have dropped significantly! Excellent service.' },
              { name: 'Elif K.', role: 'Student', text: 'The best place to buy accessories. The staff is very helpful and the prices are very fair.' },
              { name: 'Mehmet S.', role: 'Tech Enthusiast', text: 'Professional repair shop. They used original parts for my iPhone screen replacement. 10/10.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${idx+10}/100/100`} alt={item.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500 skew-x-12 translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-12 md:p-20 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to go Solar or Fix your Tech?</h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">Get an instant quote or visit our store in Mersin today. We're here to help you get back online and powered up.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="tel:+905000000000" 
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-100 transition-all shadow-2xl shadow-black/20"
              >
                Call Now
              </a>
              <Link 
                to="/contact" 
                className="bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/40"
              >
                Get Instant Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
