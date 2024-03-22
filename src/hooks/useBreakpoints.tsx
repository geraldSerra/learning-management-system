import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

const useBreakpoints = (): Breakpoint => {
  const theme = useTheme();
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() => {
    return getCurrentBreakpoint(window.innerWidth, theme.breakpoints.values);
  });

  useEffect(() => {
    const handleResize = () => {
      const currentBreakpoint = getCurrentBreakpoint(
        window.innerWidth,
        theme.breakpoints.values
      );
      setBreakpoint(currentBreakpoint);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme.breakpoints.values]);

  return breakpoint;
};

const getCurrentBreakpoint = (
  windowWidth: number,
  breakpoints: Record<Breakpoint, number>
) => {
  if (windowWidth < breakpoints.sm) {
    return "xs";
  } else if (windowWidth < breakpoints.md) {
    return "sm";
  } else if (windowWidth < breakpoints.lg) {
    return "md";
  } else if (windowWidth < breakpoints.xl) {
    return "lg";
  } else {
    return "xl";
  }
};

export default useBreakpoints;
