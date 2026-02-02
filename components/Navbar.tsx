
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-xl shadow-lg">
            <span className="material-symbols-outlined text-white text-2xl">school</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-secondary tracking-tight leading-none">إنجاز عُمان</span>
            <span className="text-[10px] text-primary font-bold uppercase tracking-widest mt-1">للتصميم التعليمي</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#home" className="text-sm font-bold text-secondary hover:text-primary transition-colors">الرئيسية</a>
          <a href="#services" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">خدماتنا</a>
          <a href="#portfolio" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">أعمالنا</a>
          <a href="#ejada" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">عن إجادة</a>
        </div>

        <button className="bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-secondary transition-all shadow-lg active:scale-95">
          تواصل معنا
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
