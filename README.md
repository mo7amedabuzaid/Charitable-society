# [اسم المشروع] — Frontend

واجهة مستخدم لمنصة [تبرعات / وصف المشروع] مبنية بـ **React 19** و **Vite** و **TypeScript**، وبتتكامل مع Backend مبني بـ Strapi 5.

## المميزات

- واجهة سريعة وRresponsive بالكامل (Tailwind CSS 4)
- إدارة الحالة العامة بـ Redux Toolkit
- Routing متعدد الصفحات بـ React Router
- جلب المحتوى (مقالات، حملات، ...) من Strapi API
- دفع إلكتروني آمن عن طريق Stripe
- تحسين الأداء تلقائياً بـ React Compiler
- [أضف مميزاتك: مثلاً نظام تبرع، مقالات، لوحة تحكم ...]

## التقنيات المستخدمة

| التقنية | الاستخدام |
|---|---|
| React 19 | بناء الواجهة |
| TypeScript | Type safety |
| Vite 8 | أداة البناء وسيرفر التطوير |
| Tailwind CSS 4 | التصميم |
| Redux Toolkit + React Redux | إدارة الحالة |
| React Router | التنقل بين الصفحات |
| Font Awesome | الأيقونات |
| ESLint | فحص جودة الكود |

## المتطلبات

- Node.js 20 أو أحدث
- npm
- تشغيل الـ Backend (Strapi) على `http://localhost:1337`

## التثبيت

```bash
git clone [رابط الريبو]
cd [اسم-الفولدر]
npm install
```

## متغيرات البيئة

أنشئ ملف `.env` في جذر المشروع:

```env
VITE_API_URL=http://localhost:1337/api
VITE_STRIPE_PUBLIC_KEY=pk_test_xxxxx
```

> استخدم المفتاح العام (Publishable) فقط في الـ Frontend، والمفتاح السري يفضل في الـ Backend.

## التشغيل

```bash
npm run dev       # سيرفر التطوير
npm run build     # بناء نسخة الإنتاج
npm run preview   # معاينة نسخة الإنتاج
npm run lint      # فحص الكود
```

## هيكل المشروع