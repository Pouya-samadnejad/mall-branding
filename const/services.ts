import {
  Megaphone,
  MonitorPlay,
  Handshake,
  Clapperboard,
  Container,
  DraftingCompass,
  FileCheckCorner,
  Lightbulb,
  MapPinCheck,
  Eye,
  Sparkles,
  Users,
  Package,
  Film,
  Palette,
  Box,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import outdoorHero from "@/public/tabliq-mohiti.webp";
import videoWallHero from "@/public/videoWall.webp";
import promotionHero from "@/public/sampling.webp";
import teaserHero from "@/public/teaser.webp";
import counterHero from "@/public/counter.webp";

export type ServiceReason = {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
};

export type Service = {
  slug: string;
  name: string;
  link: string;
  image: string;
  icon: LucideIcon;
  description: string;
  hero: {
    image: StaticImageData;
    title: string;
    highlightTitle: string;
    description: string;
  };
  info: {
    image: string;
    imageAlt: string;
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  reasons: {
    heading: string;
    items: ServiceReason[];
  };
};

export const services: Service[] = [
  {
    slug: "outdoor-advertising",
    name: "تبلیغات محیطی",
    link: "/services/outdoor-advertising",
    image: "/tabliqatMohiti.webp",
    icon: Megaphone,
    description:
      "اجرای کمپین‌های تبلیغات محیطی در مراکز خرید با هدف افزایش دیده‌شدن برند و جذب مخاطبان هدف.",
    hero: {
      image: outdoorHero,
      title: "خدمات ما",
      highlightTitle: "تبلیغات محیطی",
      description:
        "حضور قدرتمند برند شما در بهترین نقاط مراکز خرید، با طراحی و اجرای حرفه‌ای.",
    },
    info: {
      image: "/tabliqat-mohiti.webp",
      imageAlt: "تبلیغات محیطی در مرکز خرید",
      eyebrow: "تبلیغات محیطی",
      heading: "تبلیغات محیطی در مراکز خرید",
      paragraphs: [
        "تبلیغات محیطی در مال، فرصتی برای حضور قدرتمند برند شما در یکی از پرترددترین فضاهای شهری است؛ از بیلبورد و استند گرفته تا سازه‌های خلاقانه و تبلیغات داخل مرکز خرید، ما مسیر دیده‌شدن برندتان را از طراحی تا اجرا مدیریت می‌کنیم.",
        "تبلیغات محیطی یکی از مؤثرترین روش‌ها برای ایجاد ارتباط مستقیم با مخاطبان در فضای مراکز خرید است.",
        "با استفاده از فضاهای تبلیغاتی استراتژیک، می‌توان برند را در معرض دید هزاران مخاطب قرار داد و آگاهی از برند را افزایش داد.",
      ],
    },
    reasons: {
      heading: "چرا تبلیغات محیطی در مراکز خرید؟",
      items: [
        {
          id: "1",
          icon: FileCheckCorner,
          label: "پوشش گسترده",
          value: "حضور برند در نقاط پرردد و استراتژیک مراکز خرید",
        },
        {
          id: "2",
          icon: Lightbulb,
          label: "اجرای حرفه‌ای",
          value: "اجرای دقیق با استفاده از متریال و تکنولوژی باکیفیت",
        },
        {
          id: "3",
          icon: DraftingCompass,
          label: "طراحی خلاقانه",
          value: "طراحی متناسب با مکان، بصری و شخصیت برند شما",
        },
        {
          id: "4",
          icon: MapPinCheck,
          label: "انتخاب موقعیت مناسب",
          value: "شناسایی بهترین نقاط برای بیشترین میزان دیده شدن",
        },
      ],
    },
  },
  {
    slug: "video-wall",
    name: "ویدیو وال",
    link: "/services/video-wall",
    image: "/videoWall.webp",
    icon: MonitorPlay,
    description:
      "نمایش محتوای تبلیغاتی باکیفیت روی ویدیووال‌های مدرن برای خلق تجربه‌ای ماندگار و تاثیرگذار.",
    hero: {
      image: videoWallHero,
      title: "خدمات ما",
      highlightTitle: "ویدیو وال",
      description:
        "نمایشگرهای بزرگ و جذاب برای خلق تجربه‌ای متفاوت و ماندگار در مراکز خرید.",
    },
    info: {
      image: "/videoWall.webp",
      imageAlt: "ویدیو وال تبلیغاتی",
      eyebrow: "ویدیو وال",
      heading: "نمایش محتوای تبلیغاتی با ویدیو وال",
      paragraphs: [
        "ویدیو وال یکی از مدرن‌ترین روش‌های نمایش محتوای تبلیغاتی در مراکز خرید است.",
        "تصاویر باکیفیت و محتوای پویا باعث جلب توجه بیشتر مخاطبان و ایجاد تجربه‌ای متمایز برای برند می‌شوند.",
        "ما برنامه‌ریزی، تولید محتوا و اجرای نمایش را هماهنگ می‌کنیم تا پیام برند شما در بهترین زمان و مکان دیده شود.",
      ],
    },
    reasons: {
      heading: "چرا ویدیو وال در مراکز خرید؟",
      items: [
        {
          id: "1",
          icon: Eye,
          label: "جلب توجه فوری",
          value: "صفحه‌های بزرگ و درخشان در مسیر تردد مخاطبان",
        },
        {
          id: "2",
          icon: Sparkles,
          label: "محتوای پویا",
          value: "نمایش ویدیو، موشن و کمپین به‌صورت زنده و منعطف",
        },
        {
          id: "3",
          icon: Lightbulb,
          label: "کیفیت بالا",
          value: "وضوح تصویر مناسب برای فضاهای وسیع و پرنور مال",
        },
        {
          id: "4",
          icon: MapPinCheck,
          label: "موقعیت استراتژیک",
          value: "نصب در نقاط پرتردد برای بیشترین میزان دیده شدن",
        },
      ],
    },
  },
  {
    slug: "promotion",
    name: "پروموشن و سمپلینگ",
    link: "/services/promotion",
    image: "/sampling.webp",
    icon: Handshake,
    description:
      "برگزاری رویدادهای تعاملی، معرفی محصولات و توزیع نمونه برای ایجاد ارتباط مستقیم با مشتریان.",
    hero: {
      image: promotionHero,
      title: "خدمات ما",
      highlightTitle: "پروموشن و سمپلینگ",
      description:
        "ایجاد ارتباط مستقیم میان برند و مشتری از طریق تجربه، تعامل و معرفی محصول.",
    },
    info: {
      image: "/sampling.webp",
      imageAlt: "پروموشن و سمپلینگ",
      eyebrow: "پروموشن و سمپلینگ",
      heading: "تعامل مستقیم با مخاطبان",
      paragraphs: [
        "پروموشن و سمپلینگ فرصتی برای ایجاد تعامل مستقیم میان برند و مخاطبان فراهم می‌کند.",
        "این روش با ارائه تجربه واقعی از محصول، به افزایش اعتماد و شناخت بهتر برند کمک می‌کند.",
        "از طراحی فضا و اجرای رویداد تا آموزش پروموتر و مدیریت نمونه‌ها، تمام مسیر را با شما هماهنگ می‌کنیم.",
      ],
    },
    reasons: {
      heading: "چرا پروموشن و سمپلینگ؟",
      items: [
        {
          id: "1",
          icon: Users,
          label: "تعامل انسانی",
          value: "گفت‌وگوی مستقیم با مخاطب در لحظه تصمیم‌گیری",
        },
        {
          id: "2",
          icon: Package,
          label: "تجربه محصول",
          value: "امکان تست و لمس محصول پیش از خرید",
        },
        {
          id: "3",
          icon: Handshake,
          label: "افزایش اعتماد",
          value: "ساخت ارتباط واقعی و ماندگار با برند",
        },
        {
          id: "4",
          icon: MapPinCheck,
          label: "مخاطب هدف",
          value: "حضور در مال‌هایی که مشتری بالقوه شما از آن‌ها عبور می‌کند",
        },
      ],
    },
  },
  {
    slug: "teaser",
    name: "ساخت تیزر",
    link: "/services/teaser",
    image: "/teaser.webp",
    icon: Clapperboard,
    description:
      "تولید تیزرهای تبلیغاتی حرفه‌ای با روایت خلاقانه برای معرفی مؤثر برند و محصولات شما.",
    hero: {
      image: teaserHero,
      title: "خدمات ما",
      highlightTitle: "ساخت تیزر",
      description:
        "تولید محتوای ویدیویی جذاب برای معرفی حرفه‌ای برند و محصولات شما.",
    },
    info: {
      image: "/teaser.webp",
      imageAlt: "ساخت تیزر تبلیغاتی",
      eyebrow: "ساخت تیزر",
      heading: "ساخت تیزرهای تبلیغاتی خلاقانه",
      paragraphs: [
        "یک تیزر حرفه‌ای می‌تواند پیام برند را در کوتاه‌ترین زمان و با بیشترین تأثیر به مخاطب منتقل کند.",
        "ما با ترکیب ایده‌پردازی، فیلم‌برداری و تدوین، محتوایی متناسب با هویت برند تولید می‌کنیم.",
        "خروجی نهایی برای نمایش در ویدیووال، شبکه‌های اجتماعی و کمپین‌های محیطی آماده می‌شود.",
      ],
    },
    reasons: {
      heading: "چرا ساخت تیزر با ما؟",
      items: [
        {
          id: "1",
          icon: Film,
          label: "روایت خلاقانه",
          value: "ایده‌پردازی متناسب با شخصیت و هدف برند شما",
        },
        {
          id: "2",
          icon: Palette,
          label: "هویت بصری",
          value: "تصویرسازی هماهنگ با رنگ، لحن و فضای برند",
        },
        {
          id: "3",
          icon: Sparkles,
          label: "تولید حرفه‌ای",
          value: "فیلم‌برداری، صدا و تدوین با استاندارد تبلیغاتی",
        },
        {
          id: "4",
          icon: Eye,
          label: "تأثیر سریع",
          value: "پیام برند در چند ثانیه به ذهن مخاطب می‌نشیند",
        },
      ],
    },
  },
  {
    slug: "counter",
    name: "ساخت کانتر",
    link: "/services/counter",
    image: "/counter.webp",
    icon: Container,
    description:
      "طراحی و ساخت کانتینرهای تبلیغاتی اختصاصی برای اجرای کمپین‌های خلاقانه در مراکز خرید و فضاهای شهری.",
    hero: {
      image: counterHero,
      title: "خدمات ما",
      highlightTitle: "ساخت کانتر",
      description:
        "طراحی و اجرای سازه‌های اختصاصی برای ایجاد فضایی متفاوت، کاربردی و هماهنگ با برند.",
    },
    info: {
      image: "/counter.webp",
      imageAlt: "ساخت کانتر تبلیغاتی",
      eyebrow: "ساخت کانتر",
      heading: "طراحی و ساخت سازه‌های تبلیغاتی",
      paragraphs: [
        "کانتینرهای تبلیغاتی می‌توانند به‌عنوان فضایی اختصاصی برای معرفی و ارائه محصولات برند مورد استفاده قرار بگیرند.",
        "طراحی اختصاصی و اجرای حرفه‌ای این سازه‌ها، امکان ایجاد فضایی کاملاً هماهنگ با هویت بصری برند را فراهم می‌کند.",
        "از ایده و نقشه‌کشی تا ساخت و نصب در مرکز خرید، مسیر را یکپارچه مدیریت می‌کنیم.",
      ],
    },
    reasons: {
      heading: "چرا ساخت کانتر اختصاصی؟",
      items: [
        {
          id: "1",
          icon: Box,
          label: "فضای اختصاصی",
          value: "یک نقطه فیزیکی برای معرفی، فروش یا تجربه محصول",
        },
        {
          id: "2",
          icon: Palette,
          label: "طراحی برندمحور",
          value: "سازه‌ای که هویت بصری برند را کامل منعکس می‌کند",
        },
        {
          id: "3",
          icon: Wrench,
          label: "اجرای دقیق",
          value: "ساخت با متریال مناسب و نصب حرفه‌ای در محل",
        },
        {
          id: "4",
          icon: MapPinCheck,
          label: "انعطاف مکانی",
          value: "قابل استفاده در مراکز خرید و فضاهای پرتردد شهری",
        },
      ],
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
