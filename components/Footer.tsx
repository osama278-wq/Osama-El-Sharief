
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 arabesque-pattern pointer-events-none opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary p-2 rounded-xl">
                <span className="material-symbols-outlined text-white">school</span>
              </div>
              <span className="text-2xl font-black text-white">إنجاز عُمان</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              شريككم الموثوق في رحلة التميز التعليمي بسلطنة عمان. متخصصون في تحويل مسيرتك المهنية إلى قصة نجاح رقمية ملهمة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-xl">language</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-primary text-xs uppercase tracking-[0.2em] mb-8">روابط سريعة</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">منظومة إجادة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">وزارة التربية والتعليم</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-primary text-xs uppercase tracking-[0.2em] mb-8">خدماتنا</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">تصميم ملفات إنجاز</a></li>
              <li><a href="#" className="hover:text-white transition-colors">حقائب STEM</a></li>
              <li><a href="#" className="hover:text-white transition-colors">دروس تفاعلية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">دورات تدريبية</a></li>
            </ul>
          </div>

          <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
            <h4 className="font-black text-white text-lg mb-4">ابدأي رحلتك الآن</h4>
            <p className="text-gray-400 text-xs mb-8">اشتركي ليصلك جديد نماذج ملفات الإنجاز المعتمدة لعام ٢٠٢٥.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-white/10 border-none rounded-xl text-xs px-4 flex-1 focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-secondary p-3 rounded-xl">
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            © ٢٠٢٤ إنجاز عُمان للتصميم التعليمي. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="material-symbols-outlined text-primary text-sm">location_on</span>
              مسقط، سلطنة عمان
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="material-symbols-outlined text-primary text-sm">phone_iphone</span>
              ٩٦٨+ تواصل مباشر
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
