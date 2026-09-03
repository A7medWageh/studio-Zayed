# Studio Zayed

## Design system guide

الصور المرفقة هي مرجع النظام البصري. القاعدة الأساسية: كل المسافات مبنية على مضاعفات `4px`، وكل الألوان والخطوط تمر من خلال tokens في أول ملف [css/style.css](css/style.css).

### Typography

- الخط الأساسي: `IBM Plex Sans Arabic`.
- `--font-display-1` إلى `--font-display-3`: عناوين العرض الكبيرة.
- `--font-heading-1` إلى `--font-heading-6`: عناوين الأقسام والكروت.
- `--font-body`: النصوص العادية.
- `--font-button`: نصوص الأزرار.

### Colors

- `--color-primary-900` إلى `--color-primary-100`: البرتقالي الأساسي، من الأغمق إلى الأفتح.
- `--color-success-*`: درجات الرمادي المستخدمة في Success.
- `--color-gray-*`: Gray Scale العام للنصوص والخلفيات والحدود.
- `--primary`: لون التطبيق الأساسي الحالي، ومربوط بـ `--color-primary-500`.

### Spacing and layout

استخدم `--space-1` إلى `--space-24` بدل كتابة أرقام جديدة. شبكة سطح المكتب `12` عمودًا بهامش `120px` وgutter `40px`. شبكة الموبايل `4` أعمدة بهامش وgutter مقدارهما `16px`.

### Buttons

للفريمات الجديدة استخدم:

- `.btn .btn-primary`: زر الإجراء الأساسي البرتقالي.
- `.btn .btn-secondary`: زر ثانوي بحد برتقالي.
- `.btn .btn-ghost`: زر شفاف بحد خفيف.

الكلاسات الموجودة في الصفحة الحالية (`.pill-button`, `.quote-button`, `.gold-button`) تظل خاصة بأجزاء الصفحة الحالية، ولا يتم تغييرها أثناء بناء فريم جديد إلا عند الحاجة.

### طريقة تنفيذ الفريم الجاي

1. ابدأ بعمل section له اسم واضح، مثل `.services-section`، وضع داخله `.content-wrap`.
2. حدّد توزيع العناصر أولًا باستخدام grid: `repeat(12, minmax(0, 1fr))` للديسكتوب، ثم `repeat(4, minmax(0, 1fr))` للموبايل.
3. استخدم `gap` و`padding` من `--space-*`، وليس قيمًا عشوائية.
4. سمِّ العنصر حسب وظيفته: `.service-card`, `.service-title`, `.service-text`.
5. اربط الألوان بـ `--color-primary-*` أو `--color-gray-*`، ثم اختبر الموبايل قبل الانتقال للفريم التالي.
