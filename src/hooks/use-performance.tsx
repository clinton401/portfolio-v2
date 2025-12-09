import { useContext } from "react";
import { PerformanceContext } from "../contexts/performance-provider";

export const usePerformance = () => {
  const ctx = useContext(PerformanceContext);
  if (!ctx) {
    throw new Error("usePerformance must be used within PerformanceProvider");
  }
  return ctx;
};
