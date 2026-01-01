"use client";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@src/AnimationVariants";
import { twMerge } from "tailwind-merge";

const SectionWrapper = ({
    children,
    className,
    id,
    ...props
}) => {
    return (
        <motion.section
            id={id}
            className={twMerge("min-h-screen pt-32 md:pt-40 pb-20 px-4 md:px-8 text-[--text-color]", className)}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            {...props}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
