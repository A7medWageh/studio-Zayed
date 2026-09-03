# Studio Zayed - دليل الشغل على أي فريم جديد

الملف ده هو القاموس العملي للمشروع. افتحه قبل ما تبدأ أي صفحة جديدة.

## القاعدة الكبيرة

- `Bootstrap` مسؤول عن تقسيم الصفحة والـ responsive.
- `CSS tokens` مسؤول عن المقاسات والألوان والخطوط.
- `Custom classes` مسؤول عن شكل ومحتوى المكوّن.
- `JavaScript` مسؤول عن التفاعل فقط.

ما تكتبش class جديدة قبل ما تشوف هل الاسم موجود في القاموس ده.

## الملفات

```text
index.html       الصفحة الرئيسية
services.html    صفحة الخدمات الجديدة، لو هتتعمل
css/style.css    كل الـ tokens والـ components
js/script.js    menu / tabs / accordion
assets-design/   الصور والأيقونات واللوجوهات
```

في الصفحة الجديدة، انسخ الـ `head` والـ Navbar والـ Footer من `index.html`، وغيّر محتوى `<main>` فقط.

## شكل أي صفحة

```html
<body>
  <div class="page-shell">
    <header class="site-header">
      Navbar
    </header>

    <main class="page-main">
      محتوى الفريم الجديد هنا
    </main>

    <footer class="site-footer">
      Footer
    </footer>
  </div>
</body>
```

## أسماء الـ layout

استخدم الأسماء دي بالترتيب:

```text
.page-shell       الغلاف العام
.page-main        المحتوى الرئيسي للصفحة
.container        Bootstrap container
.row              صف Bootstrap
.col-lg-*          أعمدة الديسكتوب
.col-md-*         أعمدة التابلت
.col-*            أعمدة الموبايل
```

مثال تقسيم 3 كروت:

```html
<div class="container">
  <div class="row g-4">
    <div class="col-lg-4 col-md-6 col-12">كارت</div>
    <div class="col-lg-4 col-md-6 col-12">كارت</div>
    <div class="col-lg-4 col-md-6 col-12">كارت</div>
  </div>
</div>
```

معناه:

```text
Desktop: 4 من 12 = 3 كروت
Tablet:  6 من 12 = كارتين
Mobile:  12 من 12 = كارت واحد
```

## أسماء section العامة

```text
.services-page-section  الغلاف الخارجي لفريم الخدمات
.section-header         عنوان section في المنتصف
.section-header-split   عنوان section ومعاه زر أو عنصر جانبي
.section-badge          الشارة الصغيرة فوق العنوان
.section-title          عنوان section
.section-lead           الوصف تحت العنوان
```

## أسماء الكروت

أي نوع كارت له اسم واحد يتكرر، وما تعملش رقم للكلاس:

```text
.service-card       كارت خدمة
.service-top        الصف العلوي للكارت
.service-number     رقم الخدمة
.service-icon-box   صندوق الأيقونة
.service-title      عنوان الخدمة
.service-text       وصف الخدمة
.feature-list       قائمة مميزات
.service-link       رابط اعرف المزيد
```

استخدم نفس الكارت لكل الخدمات. الاختلاف يكون في النص، الرقم، والأيقونة فقط.

## الأزرار

للصفحات الجديدة استخدم كلاسين على نفس العنصر:

```html
<a class="btn btn-primary" href="#contact">اطلب عرض</a>
<a class="btn btn-secondary" href="#services">اعرف المزيد</a>
<button class="btn btn-ghost" type="button">إلغاء</button>
```

```text
.btn             الأساس المشترك للحجم والشكل
.btn-primary     الإجراء الأساسي باللون البرتقالي
.btn-secondary   زر بحد برتقالي
.btn-ghost       زر شفاف بحد خفيف
```

الأسماء دي خاصة بالصفحات الجديدة. الأسماء التالية موجودة في الصفحة الحالية ولا تعيد استخدامها في فريم جديد إلا لو بتعدل الجزء القديم:

```text
.pill-button
.quote-button
.gold-button
```

## الـ tokens

### Spacing

استخدم tokens بدل أرقام جديدة:

```text
--space-1   4px
--space-2   8px
--space-3   12px
--space-4   16px
--space-5   20px
--space-6   24px
--space-7   28px
--space-8   32px
--space-9   36px
--space-10  40px
--space-12  48px
--space-14  56px
--space-16  64px
--space-20  80px
--space-24  96px
```

أمثلة:

```css
.service-card {
  padding: var(--space-8);
}

.service-grid {
  row-gap: var(--space-8);
  column-gap: var(--space-6);
}

.service-title {
  margin-bottom: var(--space-3);
}
```

### Typography

```text
--font-display-1  96px
--font-display-2  64px
--font-display-3  48px
--font-heading-1  40px
--font-heading-2  32px
--font-heading-3  28px
--font-heading-4  24px
--font-heading-5  20px
--font-heading-6  16px
--font-body       14px
--font-button     14px
```

الخط الأساسي هو `IBM Plex Sans Arabic`. استخدم `Inter` فقط للـ brand tagline أو النص اللاتيني الصغير.

### Colors

```text
--color-primary-900 ... --color-primary-100  البرتقالي
--color-gray-900 ... --color-gray-100        الرمادي العام
--color-success-900 ... --color-success-100  درجات Success الرمادية
--color-white                                الأبيض
```

أمثلة:

```css
color: var(--color-primary-500);
color: var(--color-gray-500);
background: var(--color-gray-900);
```

## طريقة بناء فريم جديد بإيدك

1. اعمل ملف الصفحة في نفس مستوى `index.html`، مثل `services.html`.
2. انسخ `head`، Navbar، وFooter من الصفحة الرئيسية.
3. خلي رابط الصفحة الحالية عليه `class="nav-link active"`.
4. حط المحتوى المختلف داخل `<main class="page-main">` فقط.
5. اعمل section باسم وظيفته، مثل `.services-page-section`.
6. حط داخله Bootstrap `.container` ثم `.row` ثم الأعمدة.
7. ابنِ كارت واحد فقط باسم `.service-card`.
8. ظبط الكارت باستخدام tokens.
9. كرر نفس الكارت وغيّر المحتوى فقط.
10. افتح الصفحة على Desktop وTablet وMobile.
11. بعد ما الشكل يثبت، أضف التفاعل في `js/script.js`.

## ممنوعات بسيطة

- ما تستخدمش `service-card-1` أو `service-card-2`.
- ما تحطش layout جديد داخل CSS لو Bootstrap يقدر يعمله.
- ما تكتبش `margin: 37px` أو `gap: 19px`؛ استخدم أقرب token.
- ما تغيّرش Navbar أو Footer أثناء بناء محتوى الصفحة.
- ما تحطش كود JavaScript داخل HTML.
- ما تستخدمش أسماء عامة جدًا مثل `.box` أو `.item`.

## checklist قبل ما تعتبر الفريم خلص

```text
[ ] Navbar نفسه موجود
[ ] Footer نفسه موجود
[ ] رابط الصفحة الحالية active
[ ] المحتوى داخل main فقط
[ ] استخدمت container / row / col
[ ] كل كارت له class واحدة قابلة للتكرار
[ ] المسافات من --space-*
[ ] الألوان من --color-*
[ ] الخطوط من --font-*
[ ] Desktop وTablet وMobile شغالين
[ ] لا يوجد class مرقّم أو اسم عام
```
