import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function PortfolioSection() {
  return (
    <div className="mx-4 my-10 flex w-auto flex-col gap-8 md:mx-10 md:my-20 lg:flex-row">
      <div className="w-full space-y-2 lg:w-1/5">
        <h2 className="text-primary">پروژه های منتخب</h2>
        <p>نگاهی به برخی پروژه ها که با افتخار اجرا کردیم</p>
        <Link
          href="/portfolio"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-primary bg-transparent px-4 py-2.5 text-center text-primary transition-all hover:bg-primary hover:text-black sm:mt-10 sm:w-auto sm:min-w-48"
        >
          مشاهده پروژه ها
          <MoveLeft />
        </Link>
      </div>
      <div className="min-h-48 w-full rounded-2xl border border-dashed border-stone-800 lg:w-4/5 lg:min-h-64" />
    </div>
  );
}
