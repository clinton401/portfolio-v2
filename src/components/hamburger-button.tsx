import { motion } from "motion/react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative w-10 h-10 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <div className="w-6 h-5 cursor-pointer flex flex-col justify-between">
        {/* Top line */}
        <motion.span
          className="w-full h-0.3 bg-foreground origin-center"
          animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Middle line */}
        <motion.span
          className="w-full h-0.3 bg-foreground"
          animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Bottom line */}
        <motion.span
          className="w-full h-0.3 bg-foreground origin-center"
          animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </button>
  );
};
