import React from "react";
import { motion } from "framer-motion";
import { textVariants } from "../AnimationVariants";
import SEO from "../components/SEO";
import SectionWrapper from "../components/ui/SectionWrapper";

const InstallerDocs = () => {
    return (
        <div className="page-wrapper">
            <SectionWrapper>
                <SEO
                    title="Installer Return Codes | TransferX"
                    description="Documentation for TransferX installer return codes and parameters for Microsoft Store deployment."
                    keywords="installer codes, return values, ms store, transferx docs"
                    canonical="https://transferx.netlify.app/docs/installer-error-codes"
                />

                <div className="max-w-4xl mx-auto px-4">
                    <motion.div className="mb-12" variants={textVariants}>
                        <h1 className="heading leading-tight mb-6">
                            Installer <span className="hero_name">Documentation</span>
                        </h1>
                        <p className="text-lg opacity-80 mb-4">
                            This page documents the standard return codes and parameters for the TransferX desktop application installer, primarily for automated deployment tools and the Microsoft Store.
                        </p>
                    </motion.div>

                    <motion.div className="space-y-12" variants={textVariants}>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[--primary-color]">Installer Parameters</h2>
                            <div className="bg-[--card-bg] p-6 rounded-xl border border-[--border-color]">
                                <p className="mb-4">
                                    The following command-line switches are supported for silent or automated installation:
                                </p>
                                <code className="block bg-[--background-color] p-4 rounded-lg font-mono text-sm mb-4 border border-[--border-color]">
                                    /VERYSILENT /SUPPRESSMSGBOXES /NORESTART
                                </code>
                                <ul className="list-disc list-inside space-y-2 opacity-90 ml-2">
                                    <li><strong>/VERYSILENT</strong>: Instructs the installer to be very silent. No progress window is displayed.</li>
                                    <li><strong>/SUPPRESSMSGBOXES</strong>: Suppresses message boxes. Only has an effect when combined with /SILENT or /VERYSILENT.</li>
                                    <li><strong>/NORESTART</strong>: Prevents the installer from restarting the system even if it was necessary.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-[--primary-color]">Return Codes</h2>
                            <div className="bg-[--card-bg] overflow-hidden rounded-xl border border-[--border-color]">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-[--background-color] border-b border-[--border-color]">
                                        <tr>
                                            <th className="p-4 font-semibold">Scenario</th>
                                            <th className="p-4 font-semibold">Return Code</th>
                                            <th className="p-4 font-semibold">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[--border-color]">
                                        <tr>
                                            <td className="p-4">Installation Successful</td>
                                            <td className="p-4 font-mono text-[--primary-color]">0</td>
                                            <td className="p-4 opacity-80">The installation completed successfully.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">Installation Cancelled</td>
                                            <td className="p-4 font-mono text-[--primary-color]">2</td>
                                            <td className="p-4 opacity-80">The user cancelled the installation process.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">Setup Failed / Fatal Error</td>
                                            <td className="p-4 font-mono text-[--primary-color]">1</td>
                                            <td className="p-4 opacity-80">General failure (e.g., disk full, initialization error).</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">Restart Required</td>
                                            <td className="p-4 font-mono text-[--primary-color]">4</td>
                                            <td className="p-4 opacity-80">Installation complete, but a system restart is required.</td>
                                        </tr>
                                         <tr>
                                             <td className="p-4">Installation in Progress</td>
                                             <td className="p-4 font-mono text-[--primary-color]">5</td>
                                             <td className="p-4 opacity-80">Another installation is already in progress.</td>
                                         </tr>
                                        <tr>
                                            <td className="p-4">Package Rejected</td>
                                            <td className="p-4 font-mono text-[--primary-color]">6</td>
                                            <td className="p-4 opacity-80">Installation prevented by security policy.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-4 text-sm opacity-60">
                                Note: These codes adhere to standard Inno Setup exit codes where applicable.
                            </p>
                        </section>

                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default InstallerDocs;
