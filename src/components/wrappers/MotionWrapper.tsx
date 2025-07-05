/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  variants: any;
  className?: string;
  custom?: any; 
  keyProp?: string;
}

export default function MotionWrapper({
  children,
  variants,
  className,
  custom,
  keyProp,
}: MotionWrapperProps) {
  const pathname = usePathname();
  const animationKey = keyProp || pathname; 

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={animationKey}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={custom}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
