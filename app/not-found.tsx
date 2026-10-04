import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-125 w-125 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        <div className="relative">
          <h1
            className="
              text-[9rem]
              font-black
              leading-none
              tracking-tighter
              text-transparent
              bg-clip-text
              bg-linear-to-b
              from-primary
              via-primary/70
              to-stone-700
              drop-shadow-[0_0_30px_hsl(var(--primary)/0.2)]
              sm:text-[12rem]
            "
          >
            404
          </h1>

          <div className="absolute inset-x-10 bottom-0 -z-10 h-10 bg-primary/20 blur-3xl" />
        </div>

        <div className="mb-6 mt-2 h-px w-24 bg-linear-to-r from-transparent via-primary to-transparent" />

        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          این صفحه پیدا نشد
        </h2>

        <p className="mt-4 max-w-md text-sm leading-7 text-stone-400 sm:text-base">
          به نظر می‌رسد صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است آدرس
          آن تغییر کرده باشد.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-primary
              px-6
              py-3
              text-sm
              font-semibold
              text-black
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]
            "
          >
            <Home className="size-4" />
            بازگشت به صفحه اصلی
          </Link>

          <Link
            href="/contact-us"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-stone-800
              bg-stone-950/60
              px-6
              py-3
              text-sm
              font-medium
              text-stone-300
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-primary/40
              hover:text-primary
            "
          >
            تماس با ما
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="mt-16 flex items-center gap-3 text-xs text-stone-600">
          <span className="h-px w-8 bg-stone-800" />
          <span>MALL BRANDING</span>
          <span className="h-px w-8 bg-stone-800" />
        </div>
      </div>
    </main>
  );
}
