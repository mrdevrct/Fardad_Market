"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
}

export default function MotionWrapper({
  children,
  variants,
  className,
}: MotionWrapperProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
