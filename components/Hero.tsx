
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col lg:flex-row items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 arabesque-pattern pointer-events-none"></div>
      
      {/* Decorative Blob */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sage/40 rounded-full blur-[80px] -z-10"></div>

      <div className="flex-1 px-6 lg:px-20 z-10 text-right">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-gray-100 rounded-full mb-8">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span className="text-xs font-bold text-gray-500">متاح الآن لطلبات ترقيات ٢٠٢٤-٢٠٢٥</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-black text-secondary leading-[1.15] mb-8">
          ارتقي بمسيرتك <br/>
          التعليمية مع <span className="text-primary italic">ملف إنجاز</span> احترافي
        </h1>
        
        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
          نساعد المعلمات في سلطنة عمان على التميز في نظام <span className="font-bold text-secondary">"إجادة"</span> من خلال تصميم ملفات رقمية احترافية تبرز الإبداع وتضمن استحقاق الترقية.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto px-10 py-4 bg-primary text-secondary font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center justify-center gap-3">
            <span className="material-symbols-outlined">edit_square</span>
            اطلب ملفك الآن
          </button>
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-secondary font-bold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-3">
            رؤية النماذج
            <span className="material-symbols-outlined -scale-x-100">arrow_forward</span>
          </button>
        </div>

        <div className="mt-16 flex items-center gap-8 opacity-60">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-secondary">500+</span>
            <span className="text-xs font-bold">ملف إنجاز تم تسليمه</span>
          </div>
          <div className="w-px h-10 bg-gray-300"></div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-secondary">100%</span>
            <span className="text-xs font-bold">نسبة رضا المعلمات</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full lg:w-auto px-6 mt-12 lg:mt-0 relative">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-primary rounded-3xl opacity-20 rotate-12 -z-10"></div>
          <div className="bg-white p-4 rounded-[40px] shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa154da09f5b?auto=format&fit=crop&q=80&w=1200" 
              alt="Digital Education" 
              className="w-full h-auto rounded-[32px]"
            />
            {/* Overlay Info Card */}
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-3xl shadow-2xl max-w-xs hidden md:block">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span className="font-bold text-sm">متوافق مع معايير الوزارة</span>
              </div>
              <p className="text-xs text-gray-400">نلتزم بكافة معايير منظومة إجادة لقياس الأداء المعتمدة في سلطنة عمان.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
