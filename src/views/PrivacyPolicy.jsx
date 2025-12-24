"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariants } from "@src/AnimationVariants";
import SectionWrapper from "@components/ui/SectionWrapper";

const PrivacyPolicy = () => {
    return (
        <div className="page-wrapper">
            <SectionWrapper>

                <div className="max-w-4xl mx-auto px-4">
                    <motion.div className="mb-12" variants={textVariants}>
                        <h1 className="heading leading-tight mb-6">
                            Privacy <span className="hero_name">Policy</span>
                        </h1>
                        <p className="text-lg opacity-80 mb-4">
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                        <p className="text-lg leading-relaxed">
                            At TransferX, we believe privacy isn't just a feature; it's the foundation. Our architecture is designed to be <strong>offline-first</strong>, meaning your data never leaves your local network unless you explicitly interact with external update services. We do not track you, we do not sell your data, and we do not have access to your files.
                        </p>
                    </motion.div>

                    <motion.div className="space-y-12" variants={textVariants}>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[--primary-color]">1. Data Collection & Storage</h2>
                            <div className="bg-[--card-bg] p-6 rounded-xl border border-[--border-color]">
                                <p className="mb-4">
                                    TransferX operates on a <strong>Local Area Network (LAN)</strong> model. We minimize data collection to the absolute bare minimum required for technical functionality.
                                </p>
                                <ul className="list-disc list-inside space-y-2 opacity-90 ml-2">
                                    <li><strong>Personal Data:</strong> We do NOT collect names, emails, phone numbers, or any personally identifiable information.</li>
                                    <li><strong>Files:</strong> Files transferred using TransferX are sent directly between your devices (Client to Receiver). They are NOT uploaded to any cloud storage or third-party server.</li>
                                    <li><strong>Logs:</strong> Technical logs (e.g., `mdns_connections.log`, `receiver.log`) are generated and stored <strong>locally on your device</strong> for troubleshooting purposes only. You have full control to delete these at any time.</li>
                                    <li><strong>Databases:</strong> Application history is stored in a local SQLite database (`receiver_data.db`) on your machine. We cannot access this database.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[--primary-color]">2. Network Security & Encryption</h2>
                            <div className="bg-[--card-bg] p-6 rounded-xl border border-[--border-color]">
                                <p className="mb-4">
                                    Security is paramount for local transfers. We employ industry-standard encryption protocols to ensure your data remains confidential, even on open Wi-Fi networks.
                                </p>
                                <ul className="list-disc list-inside space-y-2 opacity-90 ml-2">
                                    <li><strong>mTLS (Mutual TLS):</strong> All communication between the TransferX Client and Receiver is encrypted using Mutual TLS 1.3. This ensures that both parties are authenticated and the channel is encrypted.</li>
                                    <li><strong>Local Certificates:</strong> We generate unique cryptographic certificates (`TransferX_CA.crt`, etc.) locally on your machine during setup to establish this secure trust.</li>
                                    <li><strong>No Middlemen:</strong> Since data travels directly over your LAN, there is no "man-in-the-middle" server to intercept your data.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[--primary-color]">3. External Communications</h2>
                            <div className="bg-[--card-bg] p-6 rounded-xl border border-[--border-color]">
                                <p className="mb-4">
                                    The application is designed to be completely offline.
                                </p>
                                <ul className="list-disc list-inside space-y-2 opacity-90 ml-2">
                                    <li><strong>Analytics:</strong> TransferX contains <strong>NO</strong> analytics SDKs, trackers, or telemetry beacons. We don't know how many files you transfer or what they are.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[--primary-color]">4. Your Choices</h2>
                            <div className="bg-[--card-bg] p-6 rounded-xl border border-[--border-color]">
                                <p className="opacity-90">
                                    Since all data is stored locally, you have complete control. You can clear your logs or delete the application to verify our claims. You are the sole owner of your data.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[--primary-color]">5. Contact Us</h2>
                            <div className="bg-[--card-bg] p-6 rounded-xl border border-[--border-color]">
                                <p className="opacity-90">
                                    If you have any questions about this Privacy Policy or the security of TransferX, please feel free to reach out via our GitHub repository or contact the developer directly.
                                </p>
                            </div>
                        </section>

                    </motion.div>
                </div>
            </SectionWrapper>
        </div>);
};

export default PrivacyPolicy;
