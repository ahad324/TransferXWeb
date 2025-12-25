"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariants } from "@src/AnimationVariants";
import { FiBookOpen, FiBriefcase, FiVideo, FiWifi } from "react-icons/fi";
import { LuRocket } from "react-icons/lu";
import Link from "next/link";
import SectionWrapper from "@components/ui/SectionWrapper";
import Card from "@components/ui/Card";
import Button from "@components/ui/Button";

const Solutions = () => {
  const useCases = [
    {
      title: "Education & Exams",
      icon: <FiBookOpen size={40} className="text-[--primary-color]" />,
      desc: "Cheat-proof your exams. Collect files from 50+ students instantly without internet. The 'One-Click Collection' ensures no student is left behind.",
      highlight: "Perfect for: Computer Labs, Programming Contests"
    },
    {
      title: "Corporate Security",
      icon: <FiBriefcase size={40} className="text-[--primary-color]" />,
      desc: "Share sensitive internal documents without them ever touching the cloud. Air-gapped transfer ensures your data stays within the four walls of your office.",
      highlight: "Perfect for: Legal Firms, R&D Departments"
    },
    {
      title: "Creative Studios",
      icon: <FiVideo size={40} className="text-[--primary-color]" />,
      desc: "Move GigaBytes of raw footage or 3D assets in seconds. Saturate your local Gigabit bandwidth instead of waiting for cloud uploads.",
      highlight: "Perfect for: Video Editors, 3D Artists"
    },
    {
      title: "Events & Hackathons",
      icon: <FiWifi size={40} className="text-[--primary-color]" />,
      desc: "Zero-Setup Kiosk. Set up a submission receiver in seconds on any ad-hoc Wi-Fi. No heavy infrastructure or internet required.",
      highlight: "Perfect for: Hackathons, Workshops"
    }
  ];

  return (
    <div className="page-wrapper relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[--primary-color] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <SectionWrapper>
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Hero Section */}
          <motion.div className="text-center mb-20" variants={textVariants}>
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[--primary-color]/30 bg-[--primary-color]/10 text-[--primary-color] text-sm font-medium">
              Use Cases
            </div>
            <h1 className="heading leading-tight mb-6">
              One Tool, <span className="bg-clip-text text-transparent bg-gradient-to-r from-[--primary-color] to-blue-400">Infinite Possibilities</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 leading-relaxed">
              TransferX isn't just for exams. It's the universal standard for secure, high-speed, offline data collection across any industry.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                variants={textVariants}
                className="group relative overflow-hidden border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
              >
                {/* Hover Gradient Blob */}
                <div className="absolute inset-0 bg-gradient-to-br from-[--primary-color]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-[--primary-color]/10 text-[--primary-color] group-hover:scale-110 transition-transform duration-300">
                      {useCase.icon}
                    </div>
                    <div className="text-xs font-semibold text-blue-200 bg-blue-500/10 border border-blue-500/20 py-1.5 px-3 rounded-full">
                      {useCase.highlight.replace("Perfect for: ", "")}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-[--primary-color] transition-colors">{useCase.title}</h2>
                  <p className="text-base text-gray-400 leading-relaxed">{useCase.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-24 text-center relative overflow-hidden bg-gradient-to-b from-[--card-bg] to-transparent p-12 rounded-3xl border border-[--border-color]"
            variants={textVariants}
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[--primary-color]/50 to-transparent" />

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to secure your data flow?</h2>
            <p className="mb-8 text-lg opacity-80 max-w-xl mx-auto">Deploy TransferX in your environment today. No configuration required.</p>
            <span className="flex justify-center">
              <Link href="/download">
                <Button className="shadow-2xl shadow-[--primary-color]/20">
                  <LuRocket size={20} /> Get Started Now
                </Button>
              </Link>
            </span>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Solutions;
