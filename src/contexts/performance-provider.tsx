

import  {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface PerformanceContextValue {
  performanceMode: boolean;
  setPerformanceMode: (value: boolean) => void;
}

 const PerformanceContext = createContext<PerformanceContextValue | undefined>(
  undefined
);

 const PerformanceProvider = ({ children }: { children: ReactNode }) => {
  const [performanceMode, setPerformanceMode] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setPerformanceMode(true);
    }
  }, []);

  return (
    <PerformanceContext.Provider
      value={{ performanceMode, setPerformanceMode }}
    >
      {children}
    </PerformanceContext.Provider>
  );
};

export { PerformanceContext, PerformanceProvider };