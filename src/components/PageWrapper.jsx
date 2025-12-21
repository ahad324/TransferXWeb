"use client";
import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "@src/AnimationVariants";

const PageWrapper = ({ children, className = "" }) => {
    return (
        <motion.main
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`w-full ${className}`}
        >
            {children}
        </motion.main>
    );
};

export default PageWrapper;
