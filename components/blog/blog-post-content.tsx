'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  featured_image?: string
  created_at: string
  updated_at: string
  views: number
  tags?: string[]
  author_id: string
}

interface BlogPostContentProps {
  post: BlogPost
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  // محاكاة محتوى المقال (في الواقع سيأتي من قاعدة البيانات)
  const mockContent = `
    <h2>مقدمة</h2>
    <p>في عالم التسويق الرقمي المتطور، أصبح من الضروري أن تواكب أحدث الاتجاهات والتقنيات لضمان نجاح مشروعك. في هذا المقال، سنستعرض أهم استراتيجيات التسويق الرقمي التي أثبتت فعاليتها في عام 2024.</p>
    
    <h2>1. التسويق بالمحتوى</h2>
    <p>التسويق بالمحتوى يعد من أقوى أدوات التسويق الرقمي. إنشاء محتوى قيم ومفيد يجذب جمهورك المستهدف ويبني الثقة معهم.</p>
    
    <h3>نصائح لإنشاء محتوى فعال:</h3>
    <ul>
      <li>حدد جمهورك المستهدف بوضوح</li>
      <li>استخدم الكلمات المفتاحية المناسبة</li>
      <li>اجعل المحتوى سهل القراءة والفهم</li>
      <li>أضف صور وفيديوهات جذابة</li>
    </ul>
    
    <h2>2. تحسين محركات البحث (SEO)</h2>
    <p>SEO هو العمود الفقري لأي استراتيجية تسويق رقمي ناجحة. بدون تحسين محركات البحث، لن يتمكن جمهورك من العثور على موقعك.</p>
    
    <h3>أهم عناصر SEO:</h3>
    <ol>
      <li>الكلمات المفتاحية المناسبة</li>
      <li>المحتوى عالي الجودة</li>
      <li>سرعة تحميل الموقع</li>
      <li>التصميم المتجاوب</li>
      <li>الروابط الخلفية</li>
    </ol>
    
    <h2>3. التسويق عبر السوشيال ميديا</h2>
    <p>السوشيال ميديا أصبحت منصة أساسية للتواصل مع العملاء وبناء مجتمع حول علامتك التجارية.</p>
    
    <blockquote>
      <p>"التسويق عبر السوشيال ميديا ليس مجرد نشر محتوى، بل بناء علاقات حقيقية مع جمهورك."</p>
    </blockquote>
    
    <h2>4. الإعلانات الممولة</h2>
    <p>الإعلانات الممولة تتيح لك الوصول إلى جمهور أوسع وزيادة المبيعات بشكل سريع. من المهم أن تخطط لحملاتك الإعلانية بعناية.</p>
    
    <h3>نصائح للإعلانات الممولة الناجحة:</h3>
    <ul>
      <li>حدد ميزانيتك بوضوح</li>
      <li>اختبر إعلانات مختلفة</li>
      <li>راقب النتائج باستمرار</li>
      <li>حسن إعلاناتك بناءً على البيانات</li>
    </ul>
    
    <h2>5. التسويق عبر البريد الإلكتروني</h2>
    <p>التسويق عبر البريد الإلكتروني لا يزال من أكثر قنوات التسويق فعالية. إنه يمنحك اتصال مباشر مع عملائك.</p>
    
    <h2>الخلاصة</h2>
    <p>التسويق الرقمي مجال متطور يتطلب التعلم المستمر والتكيف مع التغييرات. من خلال تطبيق هذه الاستراتيجيات، ستتمكن من بناء حضور قوي على الإنترنت وتحقيق أهدافك التجارية.</p>
    
    <p>تذكر أن النجاح في التسويق الرقمي يتطلب الصبر والاستمرارية. ابدأ بتطبيق استراتيجية واحدة ثم أضف المزيد تدريجياً.</p>
  `

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-sm overflow-hidden"
    >
      <div className="p-8 md:p-12">
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-blockquote:border-r-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-6 prose-blockquote:rounded-xl"
          dangerouslySetInnerHTML={{ __html: mockContent }}
        />
        
        {/* Author Bio */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                إ
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">إيهاب محمد</h3>
              <p className="text-gray-600 mb-3">
                مؤسس ومدير تنفيذي لوكالة ehabgm للتسويق الرقمي. خبير في التسويق الرقمي مع أكثر من 5 سنوات من الخبرة في مجال تطوير المواقع وإدارة السوشيال ميديا.
              </p>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a href="https://wa.me/201022679250" className="text-blue-600 hover:text-blue-700 font-medium">
                  تواصل معي
                </a>
                <a href="/about" className="text-blue-600 hover:text-blue-700 font-medium">
                  المزيد عني
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            هل تحتاج مساعدة في التسويق الرقمي؟
          </h3>
          <p className="text-gray-600 mb-6">
            فريق ehabgm جاهز لمساعدتك في تطوير استراتيجية تسويق رقمي ناجحة لمشروعك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/201022679250"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              احجز استشارة مجانية
            </a>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}