import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const posts = [
  {
    title: 'How solar panels can save you money in Mersin',
    category: 'Solar',
    date: 'March 27, 2026',
    image: 'https://picsum.photos/seed/solar-blog/800/600',
    desc: 'Exploring the benefits of solar energy in the sunny climate of Mersin and how Ozyildirim can help you transition.'
  },
  {
    title: 'How to fix common phone issues at home',
    category: 'Guides',
    date: 'March 25, 2026',
    image: 'https://picsum.photos/seed/blog1/800/600',
    desc: 'Simple tips and tricks to solve minor software glitches and performance issues without visiting a shop.'
  },
  {
    title: 'Best electronics to buy in 2026: A complete guide',
    category: 'Reviews',
    date: 'March 20, 2026',
    image: 'https://picsum.photos/seed/blog2/800/600',
    desc: 'Our expert picks for the best smartphones, laptops, and smart home devices this year.'
  },
  {
    title: 'How to choose a reliable repair service in Mersin',
    category: 'Tips',
    date: 'March 15, 2026',
    image: 'https://picsum.photos/seed/blog3/800/600',
    desc: 'What to look for when choosing a technician to ensure your device is in safe hands.'
  },
  {
    title: 'The future of smart home technology',
    category: 'Trends',
    date: 'March 10, 2026',
    image: 'https://picsum.photos/seed/blog4/800/600',
    desc: 'Exploring the latest innovations in home automation and how they can improve your daily life.'
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Tech Blog</h1>
          <p className="text-lg text-slate-600">Stay updated with the latest tech news, repair guides, and product reviews from our experts in Mersin.</p>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <div className="relative rounded-[40px] overflow-hidden aspect-[21/9] group cursor-pointer">
            <img 
              src="https://picsum.photos/seed/featured/1200/600" 
              alt="Featured" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8 md:p-16">
              <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full w-fit mb-6">FEATURED</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight">The Ultimate Guide to Laptop Maintenance and Longevity</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl hidden md:block">Learn how to keep your laptop running like new for years with our comprehensive maintenance checklist.</p>
              <button className="flex items-center text-white font-bold text-lg hover:text-orange-500 transition-colors">
                Read Article <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8 shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center text-sm text-slate-500 mb-4 font-medium">
                <span>{post.date}</span>
                <span className="mx-3">•</span>
                <span>5 min read</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {post.desc}
              </p>
              <div className="text-blue-600 font-bold flex items-center group-hover:translate-x-2 transition-transform">
                Read More <ArrowRight size={18} className="ml-2" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-24 bg-orange-500 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Subscribe to our newsletter</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Get the latest tech tips and exclusive offers delivered straight to your inbox.</p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-6 py-4 rounded-2xl text-slate-900 outline-none focus:ring-4 focus:ring-white/20 transition-all"
              />
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-black/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
