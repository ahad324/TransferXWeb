"use client";
import React from "react";
import { textVariants } from "@src/AnimationVariants";
import Link from "next/link";
import {
  FiMail,
  FiAlertCircle,
  FiCheckCircle,
  FiServer,
  FiUsers,
  FiShield,
  FiWifi,
  FiLock
} from "react-icons/fi";
import SectionWrapper from "@components/ui/SectionWrapper";
import Card from "@components/ui/Card";
import Button from "@components/ui/Button";
import DevelopedBy from "@components/DevelopedBy";

const About = () => {

  return (
    <div className="page-wrapper">
      <SectionWrapper
        className="max-w-6xl mx-auto px-4 py-12 text-[--text-color] leading-relaxed"
      >
        <div className="w-full text-center mb-16">
          <h1 className="heading text-center leading-tight mb-6">
            Redefining Offline Data Logistics with{" "}
            <span className="hero_name">TransferX</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Welcome to TransferX – the standard for high-security, internet-free data collection.
            What started as a tool for exam security has evolved into a universal solution for
            managing massive file transfers in air-gapped environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="h-full border-[--error-color]/30 hover:border-[--error-color] bg-[--bg-dark]/50">
            <div className="flex items-center gap-3 mb-4 text-[--error-color]">
              <FiAlertCircle size={32} />
              <h2 className="text-2xl font-bold mb-0">The Challenge</h2>
            </div>
            <p className="opacity-90 leading-relaxed">
              Many universities face significant hurdles during computer-based exams.
              Submitting programming assignments or exams in labs can be inefficient and prone to errors.
              <br /><br />
              USB drives are slow and viral-prone. Shared folders are insecure. Internet-based solutions
              open the door to cheating and distractions.
            </p>
          </Card>

          <Card className="h-full border-[--success-color]/30 hover:border-[--success-color] bg-[--bg-dark]/50">
            <div className="flex items-center gap-3 mb-4 text-[--success-color]">
              <FiCheckCircle size={32} />
              <h2 className="text-2xl font-bold mb-0">The Solution</h2>
            </div>
            <p className="opacity-90 leading-relaxed">
              TransferX streamlines file submissions through a modern client-server model.
              This tool ensures seamless file transfers without the need for <strong>any</strong> internet connectivity.
              <br /><br />
              It boosts security, eliminates cheating vectors, and provides a drag-and-drop experience
              that just works.
            </p>
          </Card>
        </div>

        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Core Architecture</h2>
            <p className="opacity-80">Built for speed, security, and simplicity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hoverEffect={true} className="text-center p-6">
              <div className="inline-block p-4 rounded-full bg-[--primary-color]/10 text-[--primary-color] mb-4">
                <FiServer size={30} />
              </div>
              <h3 className="text-xl font-bold mb-2">Centralized Server</h3>
              <p className="text-sm opacity-80">Students submit directly to a central admin dashboard. No p2p confusion.</p>
            </Card>
            <Card hoverEffect={true} className="text-center p-6">
              <div className="inline-block p-4 rounded-full bg-[--primary-color]/10 text-[--primary-color] mb-4">
                <FiWifi size={30} />
              </div>
              <h3 className="text-xl font-bold mb-2">Zero-Config Discovery</h3>
              <p className="text-sm opacity-80">Powered by mDNS. Auto-detects the server instantly. No manual IP entry required.</p>
            </Card>
            <Card hoverEffect={true} className="text-center p-6">
              <div className="inline-block p-4 rounded-full bg-[--primary-color]/10 text-[--primary-color] mb-4">
                <FiLock size={30} />
              </div>
              <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
              <p className="text-sm opacity-80">End-to-end encryption (TLS 1.3) with mutual authentication. 100% offline and secure.</p>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-[--card-bg] to-[--bg-dark] p-10 mt-16 text-center border-[--primary-color]/20">
          <FiUsers size={40} className="mx-auto text-[--primary-color] mb-4" />
          <h2 className="text-3xl font-bold mb-6">Partnerships & Customization</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            We are actively deploying TransferX in universities, studios, and secure facilities.
            If you need a custom version for your specific workflow or security requirements, let's talk.
          </p>

          <span className="flex justify-center">
            <Link href="/contact" >
              <Button>
                <FiMail size={20} /> Contact US
              </Button>
            </Link>
          </span>
        </Card>

        <DevelopedBy />
      </SectionWrapper>
    </div>
  );
};

export default About;
