# دليل النشر - ehabgm Website

## 🚀 خيارات النشر

### 1. Vercel (مستحسن)

#### الخطوات:
1. **ربط المشروع بـ Vercel**
   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```

2. **إعداد متغيرات البيئة**
   - اذهب إلى Vercel Dashboard
   - اختر مشروعك
   - اذهب إلى Settings > Environment Variables
   - أضف جميع المتغيرات من `.env.example`

3. **إعدادات خاصة بـ Vercel**
   ```json
   // vercel.json
   {
     "framework": "nextjs",
     "buildCommand": "pnpm build",
     "devCommand": "pnpm dev",
     "installCommand": "pnpm install"
   }
   ```

### 2. Netlify

#### الخطوات:
1. **ربط المشروع**
   ```bash
   npm i -g netlify-cli
   netlify login
   netlify init
   ```

2. **إعدادات البناء**
   - Build command: `pnpm build`
   - Publish directory: `.next`
   - Node version: `18.x`

3. **إعداد متغيرات البيئة**
   - اذهب إلى Site settings > Environment variables
   - أضف جميع المتغيرات

### 3. Railway

#### الخطوات:
1. **ربط المشروع**
   ```bash
   npm i -g @railway/cli
   railway login
   railway init
   ```

2. **إعدادات Railway**
   ```toml
   # railway.toml
   [build]
   builder = "nixpacks"
   
   [deploy]
   startCommand = "pnpm start"
   ```

### 4. DigitalOcean App Platform

#### الخطوات:
1. **إنشاء App**
   - اذهب إلى DigitalOcean App Platform
   - اختر GitHub repository
   - اختر Next.js

2. **إعدادات البناء**
   - Build command: `pnpm build`
   - Run command: `pnpm start`
   - Node version: `18.x`

## 🗄️ إعداد قاعدة البيانات

### Supabase Production

1. **إنشاء مشروع جديد**
   - اذهب إلى [Supabase](https://supabase.com)
   - أنشئ مشروع جديد
   - اختر المنطقة الأقرب

2. **إعداد الجداول**
   ```sql
   -- تشغيل SQL في Supabase SQL Editor
   -- انسخ محتوى database-schema.sql
   ```

3. **إعداد Row Level Security (RLS)**
   ```sql
   -- تفعيل RLS
   ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
   ALTER TABLE services ENABLE ROW LEVEL SECURITY;
   ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
   
   -- سياسات الأمان
   CREATE POLICY "Public posts are viewable by everyone" ON blog_posts
     FOR SELECT USING (published = true);
   
   CREATE POLICY "Users can insert their own posts" ON blog_posts
     FOR INSERT WITH CHECK (auth.uid() = author_id);
   ```

4. **إعداد Google OAuth**
   - اذهب إلى Authentication > Providers
   - فعّل Google provider
   - أضف Client ID و Client Secret

## 🔧 إعدادات الإنتاج

### 1. متغيرات البيئة المطلوبة

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# App
NEXT_PUBLIC_APP_URL=https://ehabgm.online
NEXT_PUBLIC_APP_NAME=ehabgm Digital Marketing

# Contact
NEXT_PUBLIC_PHONE=+201022679250
NEXT_PUBLIC_EMAIL=info@ehabgm.online
NEXT_PUBLIC_WHATSAPP=https://wa.me/201022679250
```

### 2. إعدادات Next.js للإنتاج

```javascript
// next.config.mjs
const nextConfig = {
  output: 'standalone', // للـ Docker
  images: {
    domains: ['i.postimg.cc', 'images.unsplash.com'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
```

### 3. إعدادات الأمان

```javascript
// middleware.js
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  
  // حماية الصفحات الخاصة
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }
  }
  
  return res
}

export const config = {
  matcher: ['/dashboard/:path*', '/cms/:path*']
}
```

## 🐳 النشر باستخدام Docker

### 1. إنشاء Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN corepack enable pnpm && pnpm build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### 2. إنشاء docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
      - NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app
    restart: unless-stopped
```

### 3. تشغيل Docker

```bash
# بناء الصورة
docker build -t ehabgm-website .

# تشغيل الحاوية
docker run -p 3000:3000 ehabgm-website

# أو باستخدام docker-compose
docker-compose up -d
```

## 🔍 مراقبة الأداء

### 1. Vercel Analytics

```javascript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 2. Google Analytics 4

```javascript
// components/analytics/google-analytics.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function GoogleAnalytics() {
  return <GoogleAnalytics gaId="G-XXXXXXXXXX" />
}
```

### 3. مراقبة الأخطاء

```javascript
// lib/sentry.js
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
})
```

## 🚀 نصائح الأداء

### 1. تحسين الصور

```javascript
// next.config.mjs
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

### 2. تحسين الخطوط

```javascript
// app/layout.tsx
import { Cairo } from 'next/font/google'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  preload: true,
})
```

### 3. تحسين CSS

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
  },
}
```

## 🔐 الأمان

### 1. إعدادات الأمان

```javascript
// next.config.mjs
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### 2. حماية API Routes

```javascript
// app/api/protected/route.js
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function GET(request) {
  const supabase = createRouteHandlerClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  // منطق API هنا
}
```

## 📊 مراقبة الصحة

### 1. Health Check Endpoint

```javascript
// app/api/health/route.js
export async function GET() {
  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
}
```

### 2. مراقبة قاعدة البيانات

```javascript
// lib/health.js
import { supabase } from './supabase'

export async function checkDatabaseHealth() {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id')
      .limit(1)
    
    return { status: error ? 'error' : 'ok', error }
  } catch (error) {
    return { status: 'error', error: error.message }
  }
}
```

## 🎯 نصائح النشر

1. **اختبر محلياً أولاً**
   ```bash
   pnpm build
   pnpm start
   ```

2. **تحقق من الأداء**
   ```bash
   pnpm analyze
   ```

3. **اختبر SEO**
   - استخدم Google PageSpeed Insights
   - اختبر مع Lighthouse
   - تحقق من Structured Data

4. **راقب الأخطاء**
   - استخدم Sentry أو مشابه
   - راقب logs الخادم
   - تتبع metrics الأداء

5. **احتفظ بنسخة احتياطية**
   - نسخ احتياطية لقاعدة البيانات
   - نسخ احتياطية للكود
   - خطة استرداد الكوارث

---

**تم إعداد هذا الدليل بعناية لضمان نشر ناجح وآمن للموقع** 🚀