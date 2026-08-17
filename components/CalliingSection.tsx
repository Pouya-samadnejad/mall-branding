"use client";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function CalliingSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="relative mx-4 flex w-[calc(100%-2rem)] max-w-5xl flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-primary bg-black px-4 py-8 sm:px-8 sm:py-10 md:mx-auto lg:flex-row lg:gap-5 lg:px-12"
    >
      <Spotlight />

      <motion.div
        variants={itemVariants}
        className="w-full space-y-3 text-center lg:w-1/2 lg:space-y-4 lg:text-right"
      >
        <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl lg:pl-10">
          <span className="block">آماده اید برند خود را در دل خرید</span>
          <span>به نمایش بگذارید</span>
        </h2>
        <p className="text-sm sm:text-base">
          بام ما تماس بگیرید و مشاوره رایگان دریافت کنید
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row lg:w-1/2"
      >
        <HoverBorderGradient
          containerClassName="rounded-full w-full"
          as="button"
          className="flex w-full items-center space-x-2 bg-black py-3 text-white sm:py-4"
        >
          <Link href="/contact-us" className="w-full">
            دریافت مشاوره
          </Link>
        </HoverBorderGradient>

        <Link
          href="/portfolio"
          className="w-full rounded-full border border-primary bg-transparent px-4 py-3 text-center text-primary transition-all hover:bg-primary hover:text-black sm:py-4"
        >
          مشاهده پروژه ها
        </Link>
      </motion.div>
    </motion.div>
  );
}
