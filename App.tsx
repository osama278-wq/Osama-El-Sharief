
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import EjadaInfo from './components/EjadaInfo';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f8f6] font-arabic selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        
        {/* Statistics Bar */}
        <div className="bg-white py-12 border-y border-gray-100 relative z-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="block text-4xl font-black text-secondary mb-1">١٢+</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">سنة خبرة تربوية</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-black text-secondary mb-1">٨٥٠+</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">معلمة مستفيدة</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-black text-secondary mb-1">١٠٠٪</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">تطابق مع إجادة</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-black text-secondary mb-1">١٥+</span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">جائزة تصميم تعليمي</span>
            </div>
          </div>
        </div>

        <Services />
        <EjadaInfo />
        
        {/* Feature Section */}
        <section className="py-24 bg-secondary text-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black mb-6">هل أنتِ مستعدة للترقية القادمة؟</h2>
              <p className="text-gray-400 mb-8">انضمي إلى مئات المعلمات العمانيات اللواتي غيرن شكل ملفات إنجازهن وحصلن على التقدير الذي يستحقنه في نظام إجادة.</p>
              <button className="px-10 py-4 bg-primary text-secondary font-black rounded-2xl flex items-center gap-3">
                <span className="material-symbols-outlined">whatsapp</span>
                استشارة مجانية عبر واتساب
              </button>
            </div>
            <div className="relative">
              <div className="w-64 h-64 bg-primary/20 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <img 
                src="https://picsum.photos/seed/oman/400/400" 
                alt="Support" 
                className="w-48 h-48 rounded-[40px] rotate-3 relative z-10 border-4 border-white/10"
              />
            </div>
          </div>
        </section>

        <Portfolio />

        {/* Testimonials */}
        <section className="py-24 bg-[#f8f8f6]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center text-4xl font-black text-secondary mb-16">ماذا تقول المعلمات عنا؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { name: 'أ. فاطمة الرئيسي', role: 'معلمة علوم', content: 'الخدمة كانت سريعة والملف كان مبهراً جداً. المشرفة أعجبت جداً بطريقة عرض الأدلة.' },
                { name: 'أ. خولة المعمرية', role: 'معلم أول رياضيات', content: 'تصميم ملف إنجاز إجادة ساعدني في ترتيب أفكاري وأهدافي بشكل لم أكن أتخيله.' }
              ].map((t, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm relative">
                  <span className="material-symbols-outlined text-primary text-5xl absolute top-6 left-6 opacity-20">format_quote</span>
                  <p className="text-gray-600 mb-8 italic relative z-10">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-sage rounded-full overflow-hidden">
                       <img src={`https://picsum.photos/seed/${idx+10}/100/100`} alt={t.name} />
                    </div>
                    <div>
                      <h5 className="font-black text-secondary">{t.name}</h5>
                      <span className="text-[10px] text-primary font-bold">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button className="w-14 h-14 bg-primary text-secondary rounded-full shadow-2xl flex items-center justify-center animate-bounce">
          <span className="material-symbols-outlined text-3xl">chat</span>
        </button>
      </div>
    </div>
  );
}

export default App;
