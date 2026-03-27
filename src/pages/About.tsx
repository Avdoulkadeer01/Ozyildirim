import { CheckCircle2, Award, Users, ShieldCheck, Clock, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8">Our Story at <span className="text-blue-600">Ozyildirim</span></h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 2011, Ozyildirim began as a small repair shop with a simple mission: to provide the local community with reliable, high-quality electronic and energy services they could trust.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Over the last 15 years, we have grown into Mersin's leading electronics and solar hub, serving over 1,500 happy customers every year. Our expansion into solar energy solutions reflects our commitment to innovation and sustainable living in Mersin.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-black text-blue-600 mb-2">15+</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-black text-orange-500 mb-2">12k+</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Repairs Done</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/about-team/800/1000" 
              alt="Our Team" 
              className="rounded-[40px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex text-orange-400 mb-4">
                {[1, 2, 3, 4, 5].map((i) => <span key={i}>★</span>)}
              </div>
              <p className="text-slate-900 font-bold italic">"The most reliable tech shop in Mersin. They really know their stuff!"</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-slate-50 rounded-[50px] p-12 md:p-20 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">We believe in quality, transparency, and building long-term relationships with our customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Quality First', desc: 'We never compromise on parts. We use original or high-performance components for every repair.', icon: <ShieldCheck size={40} className="text-blue-600" /> },
              { title: 'Customer Trust', desc: 'Transparent pricing and clear communication. No hidden fees, ever.', icon: <Users size={40} className="text-orange-500" /> },
              { title: 'Expertise', desc: 'Our technicians are certified and undergo regular training on the latest tech.', icon: <Award size={40} className="text-purple-600" /> }
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Meet the Experts</h2>
              <p className="text-slate-600 text-lg">The passionate people behind Mersin's best tech service.</p>
            </div>
            <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
              Join Our Team
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Caner Demir', role: 'Founder & Lead Tech', img: 'https://picsum.photos/seed/team1/400/500' },
              { name: 'Ayşe Kaya', role: 'Store Manager', img: 'https://picsum.photos/seed/team2/400/500' },
              { name: 'Murat Yıldız', role: 'Hardware Specialist', img: 'https://picsum.photos/seed/team3/400/500' },
              { name: 'Selin Aksoy', role: 'Customer Support', img: 'https://picsum.photos/seed/team4/400/500' }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
