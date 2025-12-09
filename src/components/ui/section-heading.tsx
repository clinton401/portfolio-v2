interface SectionHeadingProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  align = "left",
  className = "",
}) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <h2
      className={`font-fira font-black text-4xl sm:text-5xl lg:text-6xl text-[var(--text)] ${alignClasses[align]} ${className}`}
    >
      {children}
    </h2>
  );
};
