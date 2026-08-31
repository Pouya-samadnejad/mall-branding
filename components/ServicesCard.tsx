import Link from "next/link";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import GlowBox from "./GlowBox";

interface ServicesCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  icon?: LucideIcon;
  iconClassName?: string;
}

export default function ServicesCard({
  title,
  description,
  image,
  href,
  icon: Icon,
  iconClassName,
}: ServicesCardProps) {
  return (
    <Link href={href} className="block h-full group">
      <GlowBox
        fillContent
        className="relative mx-auto h-72 w-full max-w-sm rounded-3xl sm:h-80 md:h-96 md:max-w-none md:w-72"
      >
        <div className="absolute inset-0 overflow-hidden rounded-3xl border border-stone-800 bg-black p-3 flex flex-col justify-end">
          <Image
            src={image}
            fill
            alt={title}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

          <div className="relative z-10 flex flex-col items-center gap-3 text-center">
            {Icon && (
              <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <Icon
                  className={`size-5 text-primary ${iconClassName ?? ""}`}
                />
              </div>
            )}

            <div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>

              <p className="mt-1 text-sm text-stone-400">{description}</p>
            </div>
          </div>
        </div>
      </GlowBox>
    </Link>
  );
}
