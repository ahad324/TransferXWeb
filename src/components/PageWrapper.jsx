import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../AnimationVariants";

const PageWrapper = ({ children, className = "" }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`w-full ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
