
import { Service, PortfolioItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'تصميم ملفات إنجاز "إجادة"',
    description: 'بناء ملف رقمي متكامل يبرز أدائك المهني وفق معايير منظومة إجادة العمانية لضمان الترقية الوظيفية.',
    icon: 'verified',
  },
  {
    id: '2',
    title: 'تطوير مشاريع STEM',
    description: 'تصميم وتوثيق مبادرات العلوم والتكنولوجيا والهندسة والرياضيات بطريقة احترافية تظهر أثرك التعليمي.',
    icon: 'science',
  },
  {
    id: '3',
    title: 'خطط دروس تفاعلية',
    description: 'إعداد خطط دراسية متطورة تدمج التقنيات الحديثة وتتوافق مع المنهج العماني المحدث.',
    icon: 'auto_stories',
  },
  {
    id: '4',
    title: 'استشارات التميز التربوي',
    description: 'جلسات استشارية لتطوير مهارات التوثيق المهني وصياغة الأهداف الذكية لمنظومة إجادة.',
    icon: 'psychology',
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'ملف إنجاز معلمة علوم',
    category: 'نظام إجادة',
    imageUrl: 'https://picsum.photos/seed/edu1/800/600',
    description: 'توثيق شامل لمبادرات STEM ونتائج الطلاب لأحد متميزي وزارة التربية والتعليم.',
  },
  {
    id: '2',
    title: 'مشروع الطاقة المتجددة',
    category: 'STEM',
    imageUrl: 'https://picsum.photos/seed/edu2/800/600',
    description: 'تصميم تعليمي متكامل لمشروع طلابي حاز على جوائز محلية في الابتكار.',
  },
  {
    id: '3',
    title: 'حقيبة التدريس الرقمي',
    category: 'خطط تفاعلية',
    imageUrl: 'https://picsum.photos/seed/edu3/800/600',
    description: 'مجموعة من الدروس المحوسبة التي تدمج الواقع المعزز في المنهج المدرسي.',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'أ. مريم البلوشية',
    role: 'معلم أول لغة عربية',
    content: 'بفضل التصميم الاحترافي لملف الإنجاز، حصلت على تقييم ممتاز في منظومة إجادة وتم ترشيحي للترقية.',
    avatar: 'https://picsum.photos/seed/p1/100/100',
  },
  {
    id: '2',
    name: 'أ. سارة الجابري',
    role: 'معلمة فيزياء',
    content: 'دقة العمل وفهم متطلبات وزارة التربية والتعليم في عمان هي ما يميز هذا المصمم. عمل رائع!',
    avatar: 'https://picsum.photos/seed/p2/100/100',
  }
];
