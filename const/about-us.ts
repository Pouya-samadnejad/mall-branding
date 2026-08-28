import {
  ChartNoAxesColumn,
  ChartNoAxesCombined,
  Crosshair,
  Gem,
  HeartHandshake,
  SmileIcon,
  Sparkles,
} from "lucide-react";

export const HERO = {
  title: "درباره ما",
  highlightTitle: "ما داستان برند شما را به تجربه‌ای ماندگار تبدیل می‌کنیم",
  description:
    "مال‌برندینگ از دل یک نگاه متفاوت متولد شد: با این باور که هر برند شایسته دیده شدن در بزرگ‌ترین و پراهمیت‌ترین فضاهای شهریست.",
} as const;
export const ABOUT = {
  eyebrow: "ما کی هستیم",
  heading: "تبدیل فضا به رسانه‌ای اثرگذار",
  paragraphs: [
    "ما در مال‌برندینگ؛ با ترکیب خلاقیت، استراتژی و تجربه در فضاهای لوکس تجاری؛ به برندها کمک می‌کنیم پیامشان را مؤثرتر، ماندگارتر و درست‌تر به مخاطبانشان منتقل کنند.",
    "تیم ما متشکل از متخصصانی است که در مسیر برندها قدم می‌گذارند تا هر کمپین؛ فراتر از یک تبلیغ ساده؛ به یک تجربه‌ی ماندگار تبدیل شود.",
  ],
} as const;

export const STATS = [
  { id: "mall", icon: ChartNoAxesColumn, label: "مرکز خرید", value: 40 },
  { id: "project", icon: ChartNoAxesCombined, label: "پروژه موفق", value: 350 },
  { id: "brand", icon: SmileIcon, label: "برند همراه", value: 120 },
] as const;

export const VALUES = {
  eyebrow: "ارزش های ما",
  heading: "آنچه به آن باور داریم",
} as const;

export const VALUES_LIST = [
  {
    id: "1",
    icon: HeartHandshake,
    label: " همکاری پایدار",
    value: "ما به رابطه های بلندمدت و رشد  مشترم باور داریم",
  },
  {
    id: "2",
    icon: Gem,
    label: "کیفیت برتر",
    value: "در اجرا؛ طراحی و پشتیبانی؛ هیچ چیز را فدا نمی کنیم",
  },
  {
    id: "3",
    icon: Crosshair,
    label: "استراتژی موثر",
    value: "هر تصمیم ما با استراتژی دقیق و تحلیل عمیق همراه است",
  },
  {
    id: "4",
    icon: Sparkles,
    label: "خلاقیت هدفمند",
    value: "ایده هایی خلاقانه بر پایه نیاز برند شما خلق می شوند",
  },
] as const;
