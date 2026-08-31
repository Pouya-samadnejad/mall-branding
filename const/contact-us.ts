import { Mail, MapPin, PhoneCall } from "lucide-react";

export const HERO = {
  title: "تماس با ما",
  highlightTitle: "بیایید با هم، برندهای ماندگار بسازیم",
  description:
    "برای دریافت مشاوره، استعلام قیمت یا همکاری در پروژه‌های تبلیغات محیطی، با ما در ارتباط باشید.",
} as const;

export const contactData = [
  {
    title: "تلفن",
    value: "۰۲۱-۱۲۳۴۵۶۷۸",
    href: "tel:+982112345678",
    icon: PhoneCall,
  },
  {
    title: "موبایل",
    value: "۰۹۱۲-۱۲۳-۴۵۶۷",
    href: "tel:+989121234567",
    icon: PhoneCall,
  },
  {
    title: "ایمیل",
    value: "info@mallbranding.ir",
    href: "mailto:info@mallbranding.ir",
    icon: Mail,
  },
  {
    title: "آدرس",
    value: "تهران، خیابان میرداماد، میدان مادر، پلاک ۱۲، واحد ۴، طبقه ۳",
    href: "#",
    icon: MapPin,
  },
];
