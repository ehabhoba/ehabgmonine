# ehabgm - وكالة التسويق الرقمي

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)](https://supabase.com/)

موقع وكالة ehabgm للتسويق الرقمي - حلول تسويقية متكاملة من حلوان، القاهرة للعالم العربي.

## 🚀 المميزات

- **تصميم متجاوب**: يعمل بشكل مثالي على جميع الأجهزة والشاشات
- **محسن لمحركات البحث**: SEO متقدم وبيانات منظمة (Schema.org)
- **أداء عالي**: تحميل سريع وتحسينات الأداء
- **مصادقة متقدمة**: تسجيل دخول بجوجل عبر Supabase
- **لوحة تحكم المستخدمين**: إدارة المشاريع والخدمات
- **تتبع التحليلات**: Google Analytics و Facebook Pixel
- **PWA جاهز**: يعمل كتطبيق ويب تقدمي
- **دعم اللغة العربية**: RTL وخطوط عربية محسنة

## 🛠️ التقنيات المستخدمة

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Backend**: Supabase (Database, Auth, Storage)
- **Analytics**: Google Analytics, Facebook Pixel
- **Performance**: Web Vitals, Service Worker
- **Deployment**: Vercel

## 📦 التثبيت والإعداد

### المتطلبات الأساسية

- Node.js 18.0 أو أحدث
- npm أو pnpm
- حساب Supabase
- حساب Google Cloud (للمصادقة)

### خطوات التثبيت

1. **استنساخ المشروع**
```bash
git clone https://github.com/your-username/ehabgm-website.git
cd ehabgm-website
```

2. **تثبيت التبعيات**
```bash
npm install
# أو
pnpm install
```

3. **إعداد متغيرات البيئة**
```bash
cp .env.local.example .env.local
```

أضف المتغيرات التالية في `.env.local`:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
NEXT_PUBLIC_FB_PIXEL_ID=your_fb_pixel_id

# Site URL
NEXT_PUBLIC_SITE_URL=https://ehabgm.online
```

4. **إعداد قاعدة البيانات**
```bash
# تنفيذ SQL Schema في Supabase
# انسخ محتوى supabase-schema.sql وقم بتنفيذه في SQL Editor
```

5. **تشغيل المشروع**
```bash
npm run dev
# أو
pnpm dev
```

المشروع سيعمل على `http://localhost:3000`

## 🗄️ هيكل المشروع

```
├── app/                    # Next.js App Router
│   ├── (auth)/            # صفحات المصادقة
│   ├── dashboard/         # لوحة تحكم المستخدم
│   ├── services/          # صفحات الخدمات
│   └── layout.tsx         # التخطيط الرئيسي
├── components/            # مكونات React
│   ├── ui/               # مكونات الواجهة الأساسية
│   ├── auth-form.tsx     # نموذج المصادقة
│   └── ...
├── lib/                  # المكتبات والأدوات
│   ├── supabase.ts      # إعداد Supabase
│   └── utils.ts         # دوال مساعدة
├── public/              # الملفات العامة
└── styles/              # ملفات التنسيق
```

## 🔧 إعداد Supabase

### 1. إنشاء مشروع جديد
- اذهب إلى [Supabase Dashboard](https://app.supabase.com)
- أنشئ مشروع جديد
- احفظ URL و API Key

### 2. إعداد المصادقة
```sql
-- تفعيل Google OAuth في Authentication > Providers
-- أضف Google Client ID و Secret
```

### 3. إنشاء الجداول
```sql
-- نفذ محتوى supabase-schema.sql في SQL Editor
```

## 📊 التحليلات والتتبع

### Google Analytics
1. أنشئ خاصية GA4 جديدة
2. أضف Measurement ID في `.env.local`

### Facebook Pixel
1. أنشئ Pixel في Facebook Business Manager
2. أضف Pixel ID في `.env.local`

## 🚀 النشر على Vercel

1. **ربط المشروع**
```bash
npm install -g vercel
vercel login
vercel --prod
```

2. **إضافة متغيرات البيئة**
- اذهب إلى Vercel Dashboard
- أضف جميع متغيرات البيئة في Settings > Environment Variables

3. **إعداد النطاق المخصص**
- أضف النطاق في Settings > Domains
- أضف DNS records المطلوبة

## 🔐 الأمان

- **HTTPS**: مفعل بشكل تلقائي على Vercel
- **CSP Headers**: رؤوس الأمان محددة في `next.config.mjs`
- **RLS**: Row Level Security مفعل في Supabase
- **Environment Variables**: متغيرات البيئة محمية

## 📱 PWA (Progressive Web App)

المشروع يدعم PWA مع:
- Service Worker للتخزين المؤقت
- Manifest file للتثبيت
- دعم العمل بدون اتصال

## 🌐 تحسين محركات البحث (SEO)

- **Meta Tags**: محسنة لكل صفحة
- **Schema.org**: بيانات منظمة للأعمال المحلية
- **Sitemap**: خريطة موقع تلقائية
- **Robots.txt**: إعدادات الزحف
- **Open Graph**: دعم مشاركة وسائل التواصل

## 📞 التواصل والدعم

- **الهاتف**: +20 102 267 9250
- **الواتساب**: [wa.me/201022679250](https://wa.me/201022679250)
- **البريد الإلكتروني**: info@ehabgm.online
- **الموقع**: [ehabgm.online](https://ehabgm.online)

## 📝 الترخيص

هذا المشروع مملوك لوكالة ehabgm للتسويق الرقمي. جميع الحقوق محفوظة.

---

**تم التطوير بـ ❤️ في حلوان، القاهرة 🇪🇬**
