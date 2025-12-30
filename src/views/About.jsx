"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiArrowRight,
  FiCpu,
  FiGlobe,
  FiShield
} from "react-icons/fi";
import SectionWrapper from "@components/ui/SectionWrapper";
import Card from "@components/ui/Card";
import Button from "@components/ui/Button";
import DevelopedBy from "@components/DevelopedBy";
import { textVariants, cardVariants } from "@src/AnimationVariants";
import { Lobster } from "next/font/google"; // Assuming Lobster is available as per layout.jsx

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

const About = () => {
  return (
    <div className="page-wrapper min-h-screen">
      <SectionWrapper className="max-w-5xl mx-auto px-6 py-20 text-[--text-color]">

        {/* Simple, Professional Header */}
        <motion.div
          className="text-center mb-24"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            The <span className="hero_name">TransferX</span> Story
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            How a simple problem in an exam hall evolved into the standard for secure, offline data logistics.
          </p>
          <div className="w-24 h-1 bg-[--primary-color] mx-auto mt-8 rounded-full opacity-50"></div>
        </motion.div>

        {/* Narrative Flow - Chapter 1: The Spark */}
        <div className="relative border-l-2 border-gray-800 ml-4 md:ml-0 md:border-none space-y-24">

          {/* Chapter 1 */}
          <motion.div
            className="md:flex items-center justify-between gap-12 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hidden md:block w-1/2 text-right pr-12">
              <div className="inline-block p-6 rounded-3xl bg-[--card-bg] border border-gray-800 shadow-xl group-hover:border-[--primary-color]/30 transition-colors duration-500">
                <FiCpu size={48} className="text-[--primary-color]" />
              </div>
            </div>

            {/* Center Line Marker (Desktop) */}
            <div className="hidden md:flex absolute left-1/2 -ml-3 w-6 h-6 bg-[--primary-color] rounded-full shadow-[0_0_20px_rgba(var(--primary-color-rgb),0.5)] z-10 items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div className="pl-12 md:w-1/2 md:pl-12 relative">
              <div className="block md:hidden absolute -left-[41px] top-0 w-5 h-5 bg-[--primary-color] rounded-full border-4 border-[--bg-dark]"></div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-[--text-color]/40 font-serif italic text-4xl">01.</span>
                The Spark
              </h2>
              <p className="text-gray-300 leading-8 text-lg mb-6">
                It started in a university lab. Hundreds of students trying to submit exam files simultaneously.
                <br /><br />
                The Wi-Fi crashed. USB drives were passing viruses. The anxiety in the room was palpable.
                I realized that relying on the internet for local tasks wasn't just inefficient, it was a
                broken model.
              </p>
            </div>
          </motion.div>

          {/* Chapter 2 */}
          <motion.div
            className="md:flex flex-row-reverse items-center justify-between gap-12 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hidden md:block w-1/2 text-left pl-12">
              <div className="inline-block p-6 rounded-3xl bg-[--card-bg] border border-gray-800 shadow-xl group-hover:border-[--secondary-color]/30 transition-colors duration-500">
                <FiGlobe size={48} className="text-[--secondary-color]" />
              </div>
            </div>

            {/* Center Line Marker (Desktop) */}
            <div className="hidden md:flex absolute left-1/2 -ml-3 w-6 h-6 bg-[--bg-dark] border-2 border-[--secondary-color] rounded-full z-10 items-center justify-center">
            </div>

            <div className="pl-12 md:w-1/2 md:pr-12 md:text-right relative">
              <div className="block md:hidden absolute -left-[41px] top-0 w-5 h-5 bg-[--secondary-color] rounded-full border-4 border-[--bg-dark]"></div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 md:justify-end">
                <span className="text-[--text-color]/40 font-serif italic text-4xl">02.</span>
                The Pivot
              </h2>
              <p className="text-gray-300 leading-8 text-lg mb-6">
                I asked a simple question: <span className="text-white font-semibold italic">"Why does data need to travel around the world just to reach the computer next to me?"</span>
                <br /><br />
                I stripped away the external dependencies. No cloud. No complex servers. Just a secure
                Client-Server connection where only the receiver gets the files, preventing any
                student-to-student sharing or cheating.
              </p>
            </div>
          </motion.div>

          {/* Chapter 3 */}
          <motion.div
            className="md:flex items-center justify-between gap-12 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hidden md:block w-1/2 text-right pr-12">
              <div className="inline-block p-6 rounded-3xl bg-[--card-bg] border border-gray-800 shadow-xl group-hover:border-[--success-color]/30 transition-colors duration-500">
                <FiShield size={48} className="text-[--success-color]" />
              </div>
            </div>

            {/* Center Line Marker (Desktop) */}
            <div className="hidden md:flex absolute left-1/2 -ml-3 w-6 h-6 bg-[--success-color] rounded-full shadow-[0_0_20px_rgba(var(--success-color-rgb),0.5)] z-10 items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div className="pl-12 md:w-1/2 md:pl-12 relative">
              <div className="block md:hidden absolute -left-[41px] top-0 w-5 h-5 bg-[--success-color] rounded-full border-4 border-[--bg-dark]"></div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-[--text-color]/40 font-serif italic text-4xl">03.</span>
                The Standard
              </h2>
              <p className="text-gray-300 leading-8 text-lg mb-6">
                Today, TransferX isn't just an exam tool. It's the standard for air-gapped data logistics.
                <br /><br />
                From creative studios moving terabytes of render files to secure government facilities
                locking down sensitive transfers, I provide the pipe that just works.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Conclusion / CTA */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className={`text-4xl mb-8 ${lobster.className} text-gray-200`}>
            Join the offline revolution.
          </h3>
          <div className="flex flex-col justify-center items-center sm:flex-row justify-center gap-6">
            <Link href="/download">
              <Button className="px-8 py-4 text-lg">
                Get TransferX Now <FiArrowRight className="ml-2 inline" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="mt-24">
          <DevelopedBy />
        </div>

      </SectionWrapper>
    </div>
  );
};

export default About;
