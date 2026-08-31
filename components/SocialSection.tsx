import Link from "next/link";
import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function SocialSection() {
  const socialLinks = [
    {
      title: "Instagram",
      icon: <FaInstagram size={18} />,
      href: "#",
    },
    {
      title: "Telegram",
      icon: <FaTelegramPlane size={18} />,
      href: "#",
    },
    {
      title: "WhatsApp",
      icon: <FaWhatsapp size={18} />,
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedinIn size={18} />,
      href: "#",
    },
  ];
  return (
    <div className="flex gap-3 mt-4">
      {socialLinks.map((link) => (
        <Link key={link.title} href={link.href} aria-label={link.title}>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="div"
            className="bg-black text-white p-3 flex items-center justify-center"
          >
            {link.icon}
          </HoverBorderGradient>
        </Link>
      ))}
    </div>
  );
}
