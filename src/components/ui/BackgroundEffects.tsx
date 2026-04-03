"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundGlows = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-surface transition-colors duration-500">
      {/* ─── Global Halos (The Nexenture Mix) ─── */}
      
      {/* Deep Indigo/Violet Core Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#3b49f4]/15 blur-[120px] rounded-full hidden dark:block"
      />

      {/* Electric Cyan Glow (Nexenture Signature) */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[-5%] w-[60%] h-[60%] bg-[#00f2ff]/10 blur-[150px] rounded-full hidden dark:block"
      />

      {/* ─── Light Mode Traditional Glows (Subtle/Clean) ─── */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00e5ff]/5 blur-[100px] rounded-full" />
      </div>
    </div>
  );
};

export const Spotlight = ({ className, fill }: { className?: string; fill?: string }) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] opacity-30 dark:opacity-50"
        style={{
          background: `radial-gradient(circle at center, ${fill || 'rgba(255, 255, 255, 0.15)'} 0%, transparent 70%)`
        }}
      />
    </div>
  );
};
