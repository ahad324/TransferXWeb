import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoWindows, IoCloudDownloadOutline, IoServerOutline, IoLaptopOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { ClientImages, ServerImages } from "@src/Images"; // Ensure correct import path
import { ImageSwiper } from "../components/ui/ImageSwipper";
import "../styles/DownloadsSection.css";

const DownloadsSection = () => {
    const [activeTab, setActiveTab] = useState("client"); // 'client' | 'server'

    const features = {
        client: [
            "Smart Resume Support",
            "Auto Folder Zipping",
            "Drag & Drop Upload",
            "Zero-Config Discovery",
            "Dark/Light Theme",
            "Hyper-Fast LAN Speed"
        ],
        server: [
            "Live Transfer Dashboard",
            "Connection Management",
            "Activity Logging (DB)",
            "Air-Gapped Security",
            "Customizable Limits",
            "Admin Controls"
        ]
    };

    const downloadLinks = {
        client: "https://github.com/ahad324/TransferXClient/releases/download/Installer/TransferXClient.exe",
        server: "https://github.com/ahad324/TransferXServer/releases/download/Installer/TransferXServer.exe"
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
                        <IoLaptopOutline className="tab-icon" /> Client App
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'server' ? 'active' : ''}`}
                        onClick={() => setActiveTab('server')}
                    >
                        <IoServerOutline className="tab-icon" /> Server App
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
                                        ? "The ultimate sender/receiver for daily use. Zero setup required. Just launch and transfer."
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
                                    <button
                                        className={`button primary ${activeTab}`}
                                        onClick={() => window.open(downloadLinks[activeTab], "_blank")}
                                    >
                                        <IoLogoWindows size={22} />
                                        <span>Download for Windows</span>
                                    </button>
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
