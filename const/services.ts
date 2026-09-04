import {
  Megaphone,
  MonitorPlay,
  Handshake,
  Clapperboard,
  Container,
} from "lucide-react";

export const services = [
  {
    name: "تبلیغات محیطی",
    link: "/services/outdoor-advertising",
    image: "/tabliqatMohiti.webp",
    icon: Megaphone,
    description:
      "اجرای کمپین‌های تبلیغات محیطی در مراکز خرید با هدف افزایش دیده‌شدن برند و جذب مخاطبان هدف.",
  },
  {
    name: "ویدیو وال",
    link: "/services/video-wall",
    image: "/videoWall.webp",
    icon: MonitorPlay,
    description:
      "نمایش محتوای تبلیغاتی باکیفیت روی ویدیووال‌های مدرن برای خلق تجربه‌ای ماندگار و تاثیرگذار.",
  },
  {
    name: "پروموشن و سمپلینگ",
    link: "/services/promotion",
    image: "/sampling.webp",
    icon: Handshake,
    description:
      "برگزاری رویدادهای تعاملی، معرفی محصولات و توزیع نمونه برای ایجاد ارتباط مستقیم با مشتریان.",
  },
  {
    name: "ساخت تیزر",
    link: "/services/teaser",
    image: "/teaser.webp",
    icon: Clapperboard,
    description:
      "تولید تیزرهای تبلیغاتی حرفه‌ای با روایت خلاقانه برای معرفی مؤثر برند و محصولات شما.",
  },
  {
    name: "ساخت کانتر",
    link: "/services/counter",
    image: "/counter.webp",
    icon: Container,
    description:
      "طراحی و ساخت کانتینرهای تبلیغاتی اختصاصی برای اجرای کمپین‌های خلاقانه در مراکز خرید و فضاهای شهری.",
  },
];

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
};

export const servicesDetail: Service[] = [
  {
    slug: "tabliqat-mohiti",
    title: "تبلیغات محیطی",
    eyebrow: "تبلیغات محیطی",
    heading: "تبلیغات محیطی در مراکز خرید",
    description:
      "راهکاری مؤثر برای افزایش دیده‌شدن برند و ارتباط مستقیم با مخاطبان.",
    image: "/tabliqat-mohiti.webp",
    imageAlt: "تبلیغات محیطی در مرکز خرید",
    paragraphs: [
      "تبلیغات محیطی یکی از مؤثرترین روش‌ها برای ایجاد ارتباط مستقیم با مخاطبان در فضای مراکز خرید است.",
      "با استفاده از فضاهای تبلیغاتی استراتژیک، می‌توان برند را در معرض دید هزاران مخاطب قرار داد و آگاهی از برند را افزایش داد.",
    ],
  },

  {
    slug: "video-wall",
    title: "ویدیو وال",
    eyebrow: "ویدیو وال",
    heading: "نمایش محتوای تبلیغاتی با ویدیو وال",
    description: "نمایشگرهای بزرگ و جذاب برای ایجاد تجربه‌ای متفاوت و ماندگار.",
    image: "/video-wall.webp",
    imageAlt: "ویدیو وال تبلیغاتی",
    paragraphs: [
      "ویدیو وال یکی از مدرن‌ترین روش‌های نمایش محتوای تبلیغاتی در مراکز خرید است.",
      "تصاویر باکیفیت و محتوای پویا باعث جلب توجه بیشتر مخاطبان و ایجاد تجربه‌ای متمایز برای برند می‌شوند.",
    ],
  },

  {
    slug: "promotion-sampling",
    title: "پروموشن و سمپلینگ",
    eyebrow: "پروموشن و سمپلینگ",
    heading: "تعامل مستقیم با مخاطبان",
    description: "ایجاد ارتباط مستقیم میان برند و مشتری از طریق تجربه و تعامل.",
    image: "/promotion.webp",
    imageAlt: "پروموشن و سمپلینگ",
    paragraphs: [
      "پروموشن و سمپلینگ فرصتی برای ایجاد تعامل مستقیم میان برند و مخاطبان فراهم می‌کند.",
      "این روش با ارائه تجربه واقعی از محصول، به افزایش اعتماد و شناخت بهتر برند کمک می‌کند.",
    ],
  },

  {
    slug: "teaser-production",
    title: "ساخت تیزر",
    eyebrow: "ساخت تیزر",
    heading: "ساخت تیزرهای تبلیغاتی خلاقانه",
    description: "تولید محتوای ویدیویی جذاب برای معرفی حرفه‌ای برند و محصولات.",
    image: "/teaser.webp",
    imageAlt: "ساخت تیزر تبلیغاتی",
    paragraphs: [
      "یک تیزر حرفه‌ای می‌تواند پیام برند را در کوتاه‌ترین زمان و با بیشترین تأثیر به مخاطب منتقل کند.",
      "ما با ترکیب ایده‌پردازی، فیلم‌برداری و تدوین، محتوایی متناسب با هویت برند تولید می‌کنیم.",
    ],
  },

  {
    slug: "container",
    title: "ساخت کانتینر",
    eyebrow: "ساخت کانتینر",
    heading: "طراحی و ساخت سازه‌های تبلیغاتی",
    description: "طراحی سازه‌های اختصاصی برای ایجاد فضایی متفاوت و کاربردی.",
    image: "/container.webp",
    imageAlt: "ساخت کانتینر تبلیغاتی",
    paragraphs: [
      "کانتینرهای تبلیغاتی می‌توانند به‌عنوان فضایی اختصاصی برای معرفی و ارائه محصولات برند مورد استفاده قرار بگیرند.",
      "طراحی اختصاصی و اجرای حرفه‌ای این سازه‌ها، امکان ایجاد فضایی کاملاً هماهنگ با هویت بصری برند را فراهم می‌کند.",
    ],
  },
];
