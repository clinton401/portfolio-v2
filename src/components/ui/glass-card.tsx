import {motion} from "motion/react";
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hover = false,
}) => {
  const CardComponent = hover ? motion.div : "div";
  const hoverProps = hover
    ? {
        whileHover: { y: -4, scale: 1.01 },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <CardComponent
      className={`glass-effect rounded-xl p-6 ${className}`}
      {...(hover ? hoverProps : {})}
    >
      {children}
    </CardComponent>
  );
};
