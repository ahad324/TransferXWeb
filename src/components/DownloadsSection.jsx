"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoWindows, IoCloudDownloadOutline, IoServerOutline, IoLaptopOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { ClientImages, ServerImages } from "@src/Images"; // Ensure correct import path
import { ImageSwiper } from "./ui/ImageSwipper";
import "../styles/DownloadsSection.css";

const DownloadsSection = () => {
    const [activeTab, setActiveTab] = useState("client"); // 'client' | 'server'

    const features = {
        client: [
            "Adaptive Speed Engine",
            "Automatic Compression",
            "Drag & Drop Support",
            "Zero-Config Discovery",
            "Dark & Light Themes",
            "High-Performance LAN"
        ],
        server: [
            "Traffic Control (File Limits)",
            "Live Transfer Dashboard",
            "Smart Config Tracking",
            "Full Activity Logging",
            "Air-Gapped Security",
            "Bandwidth Control",
        ]
    };

    const downloadLinks = {
        client: "https://apps.microsoft.com/detail/9PLN8SM7NKTD?referrer=appbadge&mode=mid",
        server: "https://apps.microsoft.com/detail/9N36MFVZCHW1?referrer=appbadge&mode=mid"
    };

    return (
        <section id="downloadapps" className="downloads-section">
            <div className="downloads-container">

                {/* Section Header */}
                <div className="downloads-header">
                    <h2 className="section-title">Get TransferX</h2>
                    <p className="section-subtitle">Choose your power. Run independently or manage the network.</p>
                </div>

                {/* Tab Switcher */}
                <div className="tabs-container">
                    <button
                        className={`tab-btn ${activeTab === 'client' ? 'active' : ''}`}
                        onClick={() => setActiveTab('client')}
                    >
                        <IoLaptopOutline className="tab-icon" /> Client
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'server' ? 'active' : ''}`}
                        onClick={() => setActiveTab('server')}
                    >
                        <IoServerOutline className="tab-icon" /> Server
                    </button>
                    {/* Sliding Background for Tabs */}
                    <motion.div
                        className="tab-indicator"
                        layoutId="tab-indicator"
                        animate={{
                            left: activeTab === 'client' ? '4px' : '50%',
                            width: 'calc(50% - 4px)'
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                </div>

                {/* Main Content Card (Animate Presence for switching) */}
                <div className="command-center-card">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            className="content-grid"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Left: Interactive Preview / Image */}
                            <div className="visual-column">
                                <div className={`glow-container ${activeTab}`}>
                                    <ImageSwiper images={activeTab === 'client' ? ClientImages : ServerImages} />
                                </div>
                            </div>

                            {/* Right: Info & Actions */}
                            <div className="info-column">
                                <div className="info-header">
                                    <h3>{activeTab === 'client' ? "TransferX Client" : "TransferX Server"}</h3>
                                </div>

                                <p className="app-desc-text">
                                    {activeTab === 'client'
                                        ? "The ultimate sender for daily use. Zero setup required. Just launch and transfer."
                                        : "The central nervous system. Monitor traffic, manage connections, and secure your network layer."
                                    }
                                </p>

                                {/* Mini Grid Features for Professional Look */}
                                <div className="features-mini-grid">
                                    {features[activeTab].map((feat, idx) => (
                                        <div key={idx} className="feat-pill">
                                            <FiCheckCircle className="feat-icon" /> {feat}
                                        </div>
                                    ))}
                                </div>

                                <div className="action-row">
                                    <a
                                        href={downloadLinks[activeTab]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="store-badge-link"
                                    >
                                        <img
                                            src="https://get.microsoft.com/images/en-us%20light.svg"
                                            alt="Get it from Microsoft Store"
                                            width="250"
                                            height="60"
                                            style={{ height: 'auto' }}
                                        />
                                    </a>
                                    <p className="os-note">Requires Windows 10/11 (64-bit)</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default DownloadsSection;
