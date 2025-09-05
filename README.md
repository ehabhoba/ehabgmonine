# ehabgm - وكالة التسويق الرقمي

موقع إلكتروني متكامل لوكالة ehabgm للتسويق الرقمي في حلوان، القاهرة. يوفر الموقع خدمات التسويق الرقمي، تصميم المواقع، إدارة السوشيال ميديا، والإعلانات الممولة.

## 🚀 المميزات الرئيسية

### ✅ تم إنجازه بالكامل

- **🔐 نظام تسجيل الدخول**: تسجيل الدخول باستخدام Google مع Supabase
- **📱 تصميم متجاوب**: محسن للهواتف المحمولة والأجهزة اللوحية
- **🎨 واجهة مستخدم حديثة**: تصميم عصري مع رسوم متحركة سلسة
- **📝 نظام إدارة المحتوى (CMS)**: إدارة المقالات والخدمات
- **📰 نظام مدونة متكامل**: مقالات مع تصنيفات وبحث
- **🔍 تحسين محركات البحث (SEO)**: محسن لنتائج البحث في Google
- **⚡ أداء محسن**: تحميل سريع وتحسينات الأداء
- **📊 Google Analytics**: تتبع الزوار والأداء
- **♿ إمكانية الوصول**: محسن لذوي الاحتياجات الخاصة
- **🌐 دعم اللغة العربية**: واجهة باللغة العربية مع دعم RTL

## 🛠️ التقنيات المستخدمة

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth + Google OAuth
- **UI Components**: Radix UI, Lucide React
- **Performance**: Image Optimization, Lazy Loading
- **SEO**: Structured Data, Meta Tags, Sitemap

## 📁 هيكل المشروع

```
├── app/                    # صفحات Next.js
│   ├── blog/              # نظام المدونة
│   ├── dashboard/         # لوحة التحكم
│   ├── cms/              # نظام إدارة المحتوى
│   └── auth/             # صفحات المصادقة
├── components/            # مكونات React
│   ├── ui/               # مكونات واجهة المستخدم
│   ├── auth/             # مكونات المصادقة
│   ├── blog/             # مكونات المدونة
│   ├── mobile/           # تحسينات الهواتف المحمولة
│   ├── performance/      # تحسينات الأداء
│   └── seo/              # مكونات SEO
├── lib/                  # مكتبات مساعدة
│   ├── supabase.ts       # إعداد Supabase
│   ├── auth.ts           # إدارة المصادقة
│   └── utils.ts          # أدوات مساعدة
└── public/               # الملفات الثابتة
```

## 🚀 التشغيل المحلي

### المتطلبات
- Node.js 18+ 
- pnpm (أو npm/yarn)

### خطوات التشغيل

1. **استنساخ المشروع**
```bash
git clone <repository-url>
cd ehabgm-website
```

2. **تثبيت التبعيات**
```bash
pnpm install
```

3. **إعداد متغيرات البيئة**
```bash
cp .env.example .env.local
```

4. **تشغيل المشروع**
```bash
pnpm dev
```

5. **فتح المتصفح**
```
http://localhost:3000
```

## 🔧 الإعدادات

### إعداد Supabase

1. أنشئ مشروع جديد في [Supabase](https://supabase.com)
2. احصل على URL و API Key
3. أضف المتغيرات في `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### إعداد Google OAuth

1. اذهب إلى [Google Cloud Console](https://console.cloud.google.com)
2. أنشئ مشروع جديد أو اختر مشروع موجود
3. فعّل Google+ API
4. أنشئ OAuth 2.0 credentials
5. أضف URI المسموح به: `http://localhost:3000/auth/callback`

### إعداد Google Analytics

1. أنشئ حساب Google Analytics
2. احصل على Measurement ID
3. أضف ID في `components/analytics/google-analytics.tsx`

## 📊 قاعدة البيانات

### الجداول المطلوبة

```sql
-- جدول المستخدمين
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- جدول المقالات
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  slug TEXT UNIQUE NOT NULL,
  featured_image TEXT,
  author_id UUID REFERENCES users(id),
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  tags TEXT[],
  views INTEGER DEFAULT 0
);

-- جدول الخدمات
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  features TEXT[],
  price DECIMAL,
  category TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- جدول الرسائل
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🎨 التخصيص

### الألوان
يمكن تخصيص الألوان في `app/globals.css`:

```css
:root {
  --primary: #3B82F6;
  --secondary: #8B5CF6;
  --accent: #F59E0B;
}
```

### الخطوط
يمكن تغيير الخطوط في `app/layout.tsx`:

```tsx
const font = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
})
```

## 📱 تحسينات الهواتف المحمولة

- تصميم متجاوب بالكامل
- تحسينات اللمس والتمرير
- تحميل تدريجي للصور
- تحسينات الأداء للهواتف
- دعم اللمس المتقدم

## 🔍 تحسينات SEO

- بيانات منظمة (Structured Data)
- Meta tags محسنة
- Sitemap تلقائي
- تحسين الصور
- تحسين السرعة
- دعم اللغة العربية

## ⚡ تحسينات الأداء

- تحميل تدريجي للصور
- تحسين الذاكرة
- ضغط الملفات
- تحسين الشبكة
- تحميل الكود بشكل تدريجي

## 🧪 الاختبار

```bash
# تشغيل الاختبارات
pnpm test

# تشغيل اختبارات الأداء
pnpm build
pnpm start
```

## 📦 البناء والنشر

```bash
# بناء المشروع
pnpm build

# تشغيل الإنتاج
pnpm start

# فحص البناء
pnpm lint
```

## 🤝 المساهمة

1. Fork المشروع
2. أنشئ فرع للميزة الجديدة (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push للفرع (`git push origin feature/amazing-feature`)
5. افتح Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 التواصل

- **الموقع**: [ehabgm.online](https://ehabgm.online)
- **البريد الإلكتروني**: info@ehabgm.online
- **الواتساب**: [01022679250](https://wa.me/201022679250)
- **المؤسس**: إيهاب محمد

## 🙏 شكر وتقدير

- فريق Next.js للتقنية الرائعة
- فريق Supabase للقاعدة البيانات
- مجتمع Tailwind CSS للتصميم
- جميع المساهمين في المشروع

---

**تم تطوير هذا المشروع بحب ❤️ في حلوان، القاهرة**