import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";

interface IconButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  icon: React.ReactNode;
  "aria-label": string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className = "",
  ...props
}) => {
  return (
    <motion.button
      className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {icon}
    </motion.button>
  );
};
