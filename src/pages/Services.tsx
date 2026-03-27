import { Wrench, Smartphone, Laptop, Cpu, ShieldCheck, Clock, ArrowRight, MessageCircle, Sun } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Solar Panel Installation',
    icon: <Sun size={32} />,
    desc: 'Professional solar energy solutions for residential and commercial properties. Reduce your carbon footprint and save on energy bills.',
    price: 'Free Consultation',
    color: 'bg-orange-500'
  },
  {
    title: 'Smartphone Repair',
    icon: <Smartphone size={32} />,
    desc: 'Screen replacements, battery changes, charging port repairs, and water damage recovery for all major brands.',
    price: 'Starting from $29',
    color: 'bg-blue-500'
  },
  {
    title: 'Laptop & PC Service',
    icon: <Laptop size={32} />,
    desc: 'Hardware upgrades, screen repairs, keyboard replacements, and deep cleaning for MacBooks and Windows laptops.',
    price: 'Starting from $49',
    color: 'bg-blue-600'
  },
  {
    title: 'Smart Home Setup',
    icon: <ShieldCheck size={32} />,
    desc: 'Complete home automation, security cameras, and smart lighting installations for a modern, connected home.',
    price: 'Starting from $79',
    color: 'bg-green-500'
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Expert Repair Services</h1>
          <p className="text-lg text-slate-600">We provide fast, reliable, and guaranteed repairs for all your electronic devices in Mersin. Our certified technicians use only high-quality parts.</p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-100 rounded-[40px] p-10 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.desc}</p>
              <div className="flex justify-between items-center pt-8 border-t border-slate-50">
                <span className="text-blue-600 font-bold text-lg">{service.price}</span>
                <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-500 transition-all">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-slate-900 rounded-[50px] p-12 md:p-20 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Repair Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Simple, transparent, and efficient. Here is how we get your device back to life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Diagnose', desc: 'Free initial inspection to identify the issue.' },
              { step: '02', title: 'Repair', desc: 'Expert fix using high-quality replacement parts.' },
              { step: '03', title: 'Test', desc: 'Rigorous testing to ensure everything works perfectly.' },
              { step: '04', title: 'Deliver', desc: 'Pick up your device with a 1-year warranty.' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-white/10 mb-6">{item.step}</div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 text-blue-500 opacity-30">
                    <ArrowRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Need an instant quote?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/905000000000" className="bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center hover:bg-green-600 transition-all shadow-xl shadow-green-500/20">
              <MessageCircle className="mr-2" /> Chat on WhatsApp
            </a>
            <a href="tel:+905000000000" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
