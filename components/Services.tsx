
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">خدماتنا التخصصية</h2>
          <h3 className="text-4xl font-black text-secondary mb-6">حلول متكاملة للمصممين والتربويين</h3>
          <p className="text-gray-500">نقدم مجموعة واسعة من الخدمات المصممة خصيصاً لتلبية احتياجات الكوادر التعليمية في سلطنة عمان، مع التركيز على الجودة والتميز.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 bg-[#f8f8f6] rounded-[32px] hover:bg-secondary hover:translate-y-[-8px] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-secondary">
                  {service.icon}
                </span>
              </div>
              <h4 className="text-xl font-black text-secondary mb-4 group-hover:text-white">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400">
                {service.description}
              </p>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-primary font-bold text-sm flex items-center gap-2">
                  اكتشف المزيد
                  <span className="material-symbols-outlined text-sm -scale-x-100">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
