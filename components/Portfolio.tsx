
import React from 'react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-right">
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">معرض الإبداع</h2>
            <h3 className="text-4xl font-black text-secondary">نماذج من أعمالنا السابقة</h3>
          </div>
          <button className="px-8 py-3 rounded-2xl border border-gray-200 font-bold text-secondary hover:bg-gray-50 transition-colors">
            شاهد المعرض الكامل
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PORTFOLIO.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] mb-6">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                   <span className="bg-white text-secondary px-6 py-2 rounded-full font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                     استعراض الملف
                   </span>
                </div>
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-md text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-black text-secondary mb-2 px-2 group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-gray-500 text-sm px-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
