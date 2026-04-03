"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  type?: 1 | 2 | 3;
}

export default function SectionDivider({ type = 1 }: SectionDividerProps) {
  return (
    <div className="w-full flex justify-center py-2 px-6 overflow-hidden pointer-events-none select-none transition-all">
      <motion.div
        initial={{ opacity: 0, scaleX: 0.95 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-7xl w-full relative h-[40px] flex items-center justify-center"
      >
        {type === 1 && (
          <div className="w-full flex items-center justify-between gap-4">
             {/* Architectural Dash Line with a "Break" in the middle */}
             <div className="h-[1px] w-full flex-grow bg-primary/10 dashed-border"
                  style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px)', backgroundSize: '12px 1px' }} />
             
             {/* Visual Geometric Shape */}
             <div className="flex items-center rotate-45 gap-1">
                <div className="w-2.5 h-2.5 border border-primary/40 bg-primary/10" />
                <div className="w-1.5 h-1.5 bg-primary/30" />
             </div>

             <div className="h-[1px] w-full flex-grow bg-primary/10 dashed-border"
                  style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px)', backgroundSize: '12px 1px' }} />
          </div>
        )}

        {type === 2 && (
          <div className="w-full flex flex-col items-center">
             {/* Blueprint Matrix Grid (no labels) */}
             <div className="grid grid-cols-12 gap-1.5 opacity-20 group">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="w-[1.5px] h-[1.5px] bg-primary group-hover:scale-150 transition-transform duration-700" />
                ))}
             </div>
             {/* Very Subtle thin line below */}
             <div className="h-4 w-[1px] bg-gradient-to-b from-primary/30 to-transparent" />
          </div>
        )}

        {type === 3 && (
          <div className="w-full flex items-center gap-12 justify-center opacity-30">
             {/* Technical Corner Bracket Pair */}
             <div className="flex gap-[120px] md:gap-[240px]">
                <div className="w-12 h-4 border-l border-t border-primary/40 rounded-tl-xl" />
                <div className="w-12 h-4 border-r border-t border-primary/40 rounded-tr-xl" />
             </div>
             {/* Floating Target crosshair in center (without lines) */}
             <div className="absolute flex items-center justify-center">
                <div className="w-6 h-6 border border-primary/40 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-primary/60 rounded-full" />
                </div>
             </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
