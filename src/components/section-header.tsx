import { motion } from "motion/react";
import { rightAnimation } from "@/lib/framer-motion-utils";
import { cn } from "@/lib/utils"; // Optional: Good for merging classes if you have it

interface SectionHeaderProps {
  text: string;
  className?: string;
}

export const SectionHeader = ({ text, className }: SectionHeaderProps) => {
  return (
    <div className={cn("mb-16 overflow-hidden", className)}>
      <motion.h2
        variants={rightAnimation}
        className="font-fira font-black text-4xl  w-full text-right px-[5%] sm:text-5xl md:text-6xl text-white"
      >
        {text}
      </motion.h2>
      
      {/* Decorative Line */}
      <motion.div 
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="h-px mt-6 bg-gradient-to-l from-primary/50 via-border to-transparent" 
      />
    </div>
  );
};