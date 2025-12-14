import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const Card = ({ children, className, hoverEffect = true, ...props }) => {
    const baseStyles = "p-8 rounded-2xl bg-[--card-bg] border border-[--border-color] transition-all duration-300 shadow-lg";
    const hoverStyles = "hover:border-[--primary-color] hover:shadow-[--primary-color]/20 group";

    return (
        <motion.div
            className={twMerge(clsx(baseStyles, hoverEffect && hoverStyles, className))}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
