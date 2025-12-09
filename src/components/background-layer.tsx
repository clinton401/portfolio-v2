

interface BackgroundLayerProps {
  performanceMode?: boolean;
}

export const BackgroundLayer: React.FC<BackgroundLayerProps> = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Unique mesh gradient - NO blur filters for performance */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(at 0% 0%, rgba(24, 169, 153, 0.05) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(214, 162, 90, 0.03) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(24, 169, 153, 0.04) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(214, 162, 90, 0.02) 0px, transparent 50%)
          `,
        }}
      />

      {/* {!performanceMode && (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(120deg, transparent 0%, var(--accent-glow) 50%, transparent 100%)",
            backgroundSize: "200% 200%",
            animation: "meshMove 20s ease infinite",
          }}
        />
      )} */}

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Fine grain */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
        }}
      />

      <style>{`
        @keyframes meshMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};