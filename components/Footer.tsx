import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { menuItems } from "@/const/menu";
import { services } from "@/const/services";
import { Phone, Mail, MapPin } from "lucide-react";
import SocialSection from "./SocialSection";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="grid w-full grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 md:gap-8 md:px-10 lg:grid-cols-3 lg:gap-0 lg:divide-x">
        <div className="px-0 lg:px-6 lg:first:pr-0">
          <Image
            src="/brandingMall-logo.png"
            alt="Branding Mall Logo"
            width={80}
            height={80}
          />

          <p className="text-sm mt-3">
            ما به برندها کمک می‌کنیم تا در مراکز خرید
          </p>

          <p className="text-sm">دیده شوند، در ذهن بمانند و انتخاب شوند</p>

          <SocialSection />
        </div>

        <div className="px-0 lg:px-6">
          <div className="grid grid-cols-2 gap-6 sm:gap-10">
            <div className="space-y-2">
              <h4 className="text-xl">دسترسی سریع</h4>

              <div className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="block text-sm hover:text-primary transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xl">خدمات</h4>

              <div className="space-y-1">
                {services.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="block text-sm hover:text-primary transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-0 lg:px-6">
          <h4 className="mb-4 text-xl">تماس با ما</h4>

          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-primary shrink-0" />

              <a
                href="tel:+989123456789"
                className="hover:text-primary transition-colors"
              >
                <span dir="ltr">0912 345 6789</span>
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Mail size={18} className="text-primary shrink-0" />

              <a
                href="mailto:info@koroushmall.com"
                className="hover:text-primary transition-colors break-all"
              >
                info@koroushmall.com
              </a>
            </li>

            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-primary shrink-0 mt-0.5" />

              <span>کوروش مال</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 px-6 md:px-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} تمامی حقوق برای مال برندینگ محفوظ است.
      </div>
    </footer>
  );
}
