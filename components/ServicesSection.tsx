"use client";

import { motion } from "framer-motion";
import { services } from "@/const/services";
import ServicesCard from "./ServicesCard";
interface ServicesSectionProps {
  description?: string;
}
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function ServicesSection({ description }: ServicesSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-linear-to-b from-primary to-stone-700 p-px rounded-2xl sm:rounded-3xl md:rounded-4xl w-full z-40"
    >
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-4xl border border-primary/20 bg-black">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2">
          <div className="h-40 w-125 rounded-full bg-primary/40 blur-[90px]" />
        </div>

        <div className="relative z-10 p-4 text-center sm:p-6 md:p-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-3xl"
          >
            خدمات ما
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-stone-300"
          >
            {description
              ? description
              : "            راهکارهای یک پارچه برای دیده شدن برند شما در مراکز خرید"}
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4  2xl:grid-cols-5 xl:gap-2.5"
          >
            {services.map((s) => (
              <motion.div
                key={s.name}
                variants={itemVariants}
                className="w-full"
              >
                <ServicesCard
                  title={s.name}
                  image={s.image}
                  href={s.link}
                  description={s.description}
                  icon={s.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
