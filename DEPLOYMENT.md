# دليل النشر والإعداد - ehabgm Website

## ✅ قائمة المراجعة قبل النشر

### 1. إعداد Supabase

- [ ] إنشاء مشروع Supabase جديد
- [ ] تنفيذ SQL Schema من ملف `supabase-schema.sql`
- [ ] إعداد Google OAuth في Authentication > Providers
- [ ] تفعيل Row Level Security (RLS)
- [ ] إضافة URL الموقع في Authentication > URL Configuration

### 2. إعداد Google Cloud Console

- [ ] إنشاء مشروع جديد في Google Cloud Console
- [ ] تفعيل Google+ API
- [ ] إنشاء OAuth 2.0 credentials
- [ ] إضافة Authorized redirect URIs:
  - `https://your-domain.com/auth/callback`
  - `https://kcnsubwxwynckntemfqx.supabase.co/auth/v1/callback`

### 3. إعداد Analytics

#### Google Analytics
- [ ] إنشاء خاصية GA4 جديدة
- [ ] الحصول على Measurement ID
- [ ] إعداد Enhanced Ecommerce (اختياري)

#### Facebook Pixel
- [ ] إنشاء Pixel في Facebook Business Manager
- [ ] الحصول على Pixel ID
- [ ] إعداد Conversions API (اختياري)

### 4. متغيرات البيئة

إنشاء ملف `.env.local` مع المتغيرات التالية:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://kcnsubwxwynckntemfqx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjbnN1Ynd4d3luY2tudGVtZnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5OTQyNDUsImV4cCI6MjA2OTU3MDI0NX0.RBiOLn9cJkf_JOyLs54NHRmllfPTZM1UAFBanZkBYk8

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://ehabgm.online
```

### 5. النشر على Vercel

#### الطريقة الأولى: من خلال GitHub
1. رفع الكود إلى GitHub repository
2. ربط Repository بـ Vercel
3. إضافة متغيرات البيئة في Vercel Dashboard
4. النشر التلقائي

#### الطريقة الثانية: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### 6. إعداد النطاق المخصص

- [ ] إضافة النطاق في Vercel Dashboard
- [ ] إعداد DNS Records:
  - A Record: @ -> 76.76.19.61
  - CNAME Record: www -> cname.vercel-dns.com
- [ ] انتظار انتشار DNS (24-48 ساعة)
- [ ] تفعيل SSL Certificate (تلقائي)

### 7. اختبار ما بعد النشر

- [ ] اختبار تحميل الصفحة الرئيسية
- [ ] اختبار تسجيل الدخول بجوجل
- [ ] اختبار نموذج التواصل
- [ ] اختبار لوحة تحكم المستخدم
- [ ] اختبار الاستجابة على الهاتف المحمول
- [ ] فحص سرعة الموقع (PageSpeed Insights)
- [ ] فحص SEO (Search Console)

## 🔧 إعدادات متقدمة

### إعداد Google Search Console
1. إضافة الموقع في Search Console
2. رفع ملف sitemap.xml
3. مراقبة الفهرسة والأخطاء

### إعداد Google My Business
1. إنشاء أو تحديث ملف الأعمال
2. ربط الموقع الإلكتروني
3. إضافة الصور والمعلومات

### إعداد وسائل التواصل الاجتماعي
- [ ] Facebook Business Page
- [ ] Instagram Business Account
- [ ] LinkedIn Company Page
- [ ] YouTube Channel

## 📊 مراقبة الأداء

### أدوات المراقبة المطلوبة
- Google Analytics
- Google Search Console
- Facebook Analytics
- Vercel Analytics
- Supabase Dashboard

### مؤشرات الأداء الرئيسية (KPIs)
- عدد الزوار الشهري
- معدل التحويل
- سرعة تحميل الصفحات
- ترتيب الكلمات المفتاحية
- معدل الارتداد

## 🚨 استكشاف الأخطاء وإصلاحها

### مشاكل شائعة وحلولها

#### خطأ في الاتصال بـ Supabase
```bash
# التأكد من صحة متغيرات البيئة
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
```

#### خطأ في تسجيل الدخول بجوجل
- التأكد من إعداد OAuth URLs بشكل صحيح
- فحص Google Cloud Console credentials
- التأكد من تفعيل Google+ API

#### مشاكل في الأداء
- فحص Network tab في Developer Tools
- استخدام Lighthouse للتحليل
- مراجعة تحسينات الصور

### سجلات الأخطاء
- Vercel Function Logs
- Supabase Logs
- Browser Console Errors

## 📞 الدعم الفني

في حالة وجود مشاكل تقنية:

1. **مراجعة الوثائق**: README.md و DEPLOYMENT.md
2. **فحص السجلات**: Vercel و Supabase logs
3. **التواصل مع الدعم**:
   - WhatsApp: +20 102 267 9250
   - Email: info@ehabgm.online

## 🔄 تحديثات مستقبلية

### خطة التطوير
- [ ] إضافة المزيد من اللغات
- [ ] تطوير تطبيق الهاتف المحمول
- [ ] إضافة نظام الدفع الإلكتروني
- [ ] تطوير CRM متكامل
- [ ] إضافة الذكاء الاصطناعي للدردشة

### جدولة النسخ الاحتياطية
- نسخ احتياطية يومية لقاعدة البيانات
- نسخ احتياطية أسبوعية للملفات
- اختبار استعادة البيانات شهرياً

---

**آخر تحديث**: يناير 2025  
**الإصدار**: 1.0.0