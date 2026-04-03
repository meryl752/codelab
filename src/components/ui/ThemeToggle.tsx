"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-16 h-8 rounded-full bg-surface-container-high border border-outline-variant/30 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex items-center gap-4 px-1 py-1 rounded-full bg-surface-container-high border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 w-16 h-8 overflow-hidden shadow-inner"
      aria-label="Toggle Theme"
    >
      <motion.div
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="z-10 w-6 h-6 rounded-full bg-white dark:bg-primary shadow-sm flex items-center justify-center border border-black/5"
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-on-primary" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-primary" />
        )}
      </motion.div>
      
      <div className="absolute inset-0 flex items-center justify-between px-2.5 pointer-events-none">
        <Sun className={`w-3 h-3 transition-opacity duration-300 ${isDark ? 'opacity-20' : 'opacity-0'}`} />
        <Moon className={`w-3 h-3 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-20'}`} />
      </div>
    </button>
  );
}
