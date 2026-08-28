import { LucideIcon, Sparkles } from "lucide-react";

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
  line?: boolean;
}

export default function ProcessCard({
  step,
  title,
  description,
  icon: Icon = Sparkles,
  className = "",
  line,
}: ProcessCardProps) {
  return (
    <div
      className={`mx-auto flex w-full max-w-xs flex-col items-start sm:max-w-none lg:mx-0 lg:w-fit lg:shrink-0 lg:h-72 ${className}`}
    >
      <div className="flex w-full items-center">
        <div className="relative flex size-16 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-[0_0_20px_hsl(var(--primary)/0.35)] sm:size-20">
          <div className="absolute inset-0 rounded-full bg-linear-to-tl from-black to-primary blur-md" />
          <Icon className="relative z-10 size-8 text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.8)] sm:size-10" />
        </div>
        {line && (
          <div className="mx-3 hidden h-px w-10 shrink-0 border-t border-dashed border-stone-700 sm:w-24 lg:block lg:w-40" />
        )}
      </div>
      <div className="pt-4 sm:pt-5">
        <p className="font-bold text-primary">{step}</p>
        <p className="font-bold text-primary">{title}</p>
        <p className="w-60 text-sm sm:w-40">{description}</p>
      </div>
    </div>
  );
}
