import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { motion } from "framer-motion";

const Button = ({
    children,
    className,
    variant = "primary",
    ...props
}) => {
    const baseStyles = "button md:text-lg px-8 py-3 flex items-center justify-center gap-2 transition-all duration-300";

    const variants = {
        primary: "primary", // Relies on global css .button.primary
        secondary: "secondary", // Relies on global css .button.secondary
        outline: "border border-[--primary-color] text-[--primary-color] hover:bg-[--primary-color] hover:text-white",
        ghost: "text-[--text-color] hover:bg-white/10",
    };

    return (
        <motion.button
            className={twMerge(clsx(baseStyles, variants[variant], className))}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
