"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { cardVariants } from "@src/AnimationVariants";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", /* Added gap-6 for better spacing */
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full block rounded-3xl CardHoverBG"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card hovered={hoveredIndex === idx} className="shadow-lg">
            <div className="flex items-center justify-center">
              <div className="text-[3rem] mb-4 text-[var(--primary-color)] w-20 h-20">
                <img src={item.image} alt="image" />
              </div>
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children, hovered }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden  border bg-gray-800 border-white/[0.2] group-hover:border-slate-700 z-[1] relative transition-colors duration-300",
        { "bg-gray-700": hovered }, // Change background color on hover
        className
      )}
    >
      <div className="relative z-[5]">
        <div className="p-4">{children}</div>
      </div>
    </motion.div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h2
      className={cn(
        "text-[--text-color] font-bold tracking-wide mt-4 text-base",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-2 text-gray-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
