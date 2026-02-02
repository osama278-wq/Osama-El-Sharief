
import React from 'react';

const EjadaInfo: React.FC = () => {
  return (
    <section id="ejada" className="py-24 bg-sage relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="relative">
             <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary rounded-[40px] -z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
               className="rounded-[40px] shadow-2xl"
               alt="Ejada System"
             />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 bg-primary text-secondary rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <span className="material-symbols-outlined text-4xl">emoji_events</span>
                </div>
             </div>
          </div>
        </div>

        <div className="flex-1 text-right">
          <span className="text-primary font-bold text-sm bg-white px-4 py-1.5 rounded-full shadow-sm mb-6 inline-block">منظومة إجادة العمانية</span>
          <h2 className="text-4xl font-black text-secondary mb-8 leading-tight">كيف يساعدك ملف الإنجاز المحترف في الترقية؟</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary">analytics</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">قياس أداء دقيق</h4>
                <p className="text-gray-500 text-sm">توفير أدلة ملموسة وموثقة رقمياً لكل هدف من أهدافك الوظيفية المسجلة في النظام.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary">visibility</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">إبراز المبادرات</h4>
                <p className="text-gray-500 text-sm">تحويل المشاريع الورقية إلى عروض رقمية تفاعلية تجذب انتباه المقيمين والمشرفين.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary">history_edu</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">الاحترافية المهنية</h4>
                <p className="text-gray-500 text-sm">الملف المصمم جيداً يعكس شخصية المعلمة المهتمة بالتطور التقني ومواكبة رؤية عمان ٢٠٤٠.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white/50 border border-white rounded-[32px] backdrop-blur-md">
            <p className="text-secondary font-bold italic">
              "لقد صممنا أكثر من ٣٠٠ ملف العام الماضي، وحصلت ٩٥٪ من المعلمات على تقييم امتياز في نظام إجادة."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EjadaInfo;
