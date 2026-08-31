import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ContactInfoProps {
  title: string;
  value: string;
  href: string;
  icon: LucideIcon;
  className?: string;
}

export default function ContactInfo({
  title,
  value,
  href,
  icon: Icon,
  className,
}: ContactInfoProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex size-16 items-center justify-center rounded-full border border-primary/20 bg-linear-to-b from-primary/10 to-black/20 shadow-[0_0_20px_hsl(var(--primary)/0.35)]">
        <Icon className="size-6 text-primary" />
      </div>

      <div className="space-y-1">
        <p className="text-sm font-medium text-primary">{title}</p>

        <Link
          href={href}
          className="text-stone-200 transition-colors hover:text-white"
        >
          {value}
        </Link>
      </div>
    </div>
  );
}
