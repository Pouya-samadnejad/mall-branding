import { ChartLine, GoalIcon, PencilLine, Rocket, Search } from "lucide-react";
import ProcessCard from "./ProcessCard";
import { FadeIn } from "./FadeIn";

export default function ProccessSection() {
  return (
    <div className="flex flex-col items-center justify-center px-4 pb-10 md:px-8">
      {/* Header */}
      <FadeIn className="flex flex-col items-center justify-center px-2 text-center sm:px-10">
        <h2 className="text-primary">فرایند همکاری با ما</h2>
        <p>از تحلیل تا اجرا در کنار شما هستیم</p>
      </FadeIn>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-center gap-8 pt-8 sm:grid-cols-2 sm:gap-6 sm:pt-10 sm:[&>*:last-child:nth-child(odd)]:col-span-2 lg:flex lg:justify-center lg:gap-0 lg:pt-10">
        <FadeIn delay={0}>
          <ProcessCard
            step="01"
            title="تحلیل و تحقیق"
            description="بررسی بازار، مخاطبان و رقبا"
            icon={Search}
            line
          />
        </FadeIn>

        <FadeIn delay={0.12}>
          <ProcessCard
            step="02"
            title="استراتژی برند"
            description="تدوین استراتژی مناسب با اهداف برند"
            icon={GoalIcon}
            line
          />
        </FadeIn>

        <FadeIn delay={0.24}>
          <ProcessCard
            step="03"
            title="ایده و طراحی"
            description="خلق ایده و طراحی هویت و عناصر بصری"
            icon={PencilLine}
            line
          />
        </FadeIn>

        <FadeIn delay={0.36}>
          <ProcessCard
            step="04"
            title="اجرا و پیاده سازی"
            description="اجرای کمپین محیطی و عناصر برند"
            icon={Rocket}
            line
          />
        </FadeIn>

        <FadeIn delay={0.48}>
          <ProcessCard
            step="05"
            title="ارزیابی و رشد"
            description="ارزیابی نتایج و بهینه سازی برای رشد بیشتر برند"
            icon={ChartLine}
          />
        </FadeIn>
      </div>
    </div>
  );
}
