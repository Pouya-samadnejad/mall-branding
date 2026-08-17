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
    link: "/services",
    image: "/tabliqatMohiti.webp",
    icon: Megaphone,
    description:
      "اجرای کمپین‌های تبلیغات محیطی در مراکز خرید با هدف افزایش دیده‌شدن برند و جذب مخاطبان هدف.",
  },
  {
    name: "ویدیو وال",
    link: "/portfolio",
    image: "/videoWall.webp",
    icon: MonitorPlay,
    description:
      "نمایش محتوای تبلیغاتی باکیفیت روی ویدیووال‌های مدرن برای خلق تجربه‌ای ماندگار و تاثیرگذار.",
  },
  {
    name: "پروموشن و سمپلینگ",
    link: "/about-us",
    image: "/sampling.webp",
    icon: Handshake,
    description:
      "برگزاری رویدادهای تعاملی، معرفی محصولات و توزیع نمونه برای ایجاد ارتباط مستقیم با مشتریان.",
  },
  {
    name: "ساخت تیزر",
    link: "/contact-us",
    image: "/teaser.webp",
    icon: Clapperboard,
    description:
      "تولید تیزرهای تبلیغاتی حرفه‌ای با روایت خلاقانه برای معرفی مؤثر برند و محصولات شما.",
  },
  {
    name: "ساخت کانتر",
    link: "#",
    image: "/counter.webp",
    icon: Container,
    description:
      "طراحی و ساخت کانتینرهای تبلیغاتی اختصاصی برای اجرای کمپین‌های خلاقانه در مراکز خرید و فضاهای شهری.",
  },
];
