import { ShoppingBag, Search, Filter, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const categories = ['All', 'Smartphones', 'Laptops', 'Accessories', 'Components', 'Smart Home'];

const products = [
  { id: 1, name: 'iPhone 15 Pro Max', category: 'Smartphones', price: 1299, image: 'https://picsum.photos/seed/phone1/500/500' },
  { id: 2, name: 'MacBook Pro M3', category: 'Laptops', price: 1999, image: 'https://picsum.photos/seed/laptop1/500/500' },
  { id: 3, name: 'Wireless Earbuds Pro', category: 'Accessories', price: 199, image: 'https://picsum.photos/seed/audio1/500/500' },
  { id: 4, name: 'Smart Watch Series 9', category: 'Accessories', price: 399, image: 'https://picsum.photos/seed/watch1/500/500' },
  { id: 5, name: 'Gaming PC Build X', category: 'Components', price: 2499, image: 'https://picsum.photos/seed/pc1/500/500' },
  { id: 6, name: 'Smart Home Hub', category: 'Smart Home', price: 149, image: 'https://picsum.photos/seed/home1/500/500' },
  { id: 7, name: 'Mechanical Keyboard', category: 'Accessories', price: 129, image: 'https://picsum.photos/seed/kb1/500/500' },
  { id: 8, name: 'UltraWide Monitor', category: 'Components', price: 599, image: 'https://picsum.photos/seed/monitor1/500/500' },
];

export default function Products() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Shop Latest Tech</h1>
          <p className="text-lg text-slate-600 max-w-2xl">Browse our curated selection of high-quality electronics. All products come with a local warranty and expert support.</p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  cat === 'All' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-500 hover:text-white transition-colors">
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">{product.category}</p>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-extrabold text-slate-900">${product.price}</span>
                <span className="text-sm text-green-600 font-bold">In Stock</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination/Load More */}
        <div className="mt-16 text-center">
          <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
}
