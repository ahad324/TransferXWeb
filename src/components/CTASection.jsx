"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiDownloadCloud } from "react-icons/fi";
import Button from "@components/ui/Button";
import { buttonVariants, textVariants } from "@src/AnimationVariants";
import SectionWrapper from "@components/ui/SectionWrapper";

const CTASection = () => {
    return (
        <SectionWrapper id="cta-section" className="py-20 min-h-fit relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(var(--primary-rgb),0.05)] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
                <motion.h2
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6"
                >
                    Ready to Supercharge Your Workflow?
                </motion.h2>

                <motion.p
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Experience the fastest, most secure way to collect files offline. No internet, no limits—just pure speed.
                </motion.p>

                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <Link href="/download">
                        <Button
                            variants={buttonVariants}
                            className="px-8 py-4 text-lg"
                        >
                            <FiDownloadCloud className="mr-2" size={24} />
                            Get TransferX
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default CTASection;
