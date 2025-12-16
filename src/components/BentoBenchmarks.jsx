import React from "react";
import { motion } from "framer-motion";
import { containerVariants, textVariants } from "../AnimationVariants";
import { FiCpu, FiHardDrive, FiWifi, FiZap, FiServer, FiActivity, FiShield, FiGlobe, FiClock, FiLock } from "react-icons/fi";
import "../styles/BentoBenchmarks.css";

const CircularGauge = ({ value, max, label, subLabel, color, delay, size = "normal" }) => {
    const radius = size === "large" ? 45 : 35;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / max) * circumference;

    return (
        <div className={`gauge-container ${size}`}>
            <div className="gauge-wrapper" style={{ width: size === 'large' ? 140 : 100, height: size === 'large' ? 140 : 100 }}>
                <svg className="gauge-svg" viewBox="0 0 100 100">
                    {/* Background Circle */}
                    <circle
                        className="gauge-bg"
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth={size === 'large' ? "6" : "8"}
                        fill="none"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                        className="gauge-progress"
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke={color}
                        strokeWidth={size === 'large' ? "6" : "8"}
                        strokeLinecap="round"
                        fill="none"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        transition={{ duration: 1.5, ease: "easeOut", delay }}
                        viewport={{ once: true }}
                        transform="rotate(-90 50 50)"
                    />
                    {/* Centered Text inside SVG */}
                    <text
                        x="50" y="45"
                        textAnchor="middle"
                        fill={color}
                        fontWeight="bold"
                        fontSize={size === 'large' ? "18" : "16"}
                        alignmentBaseline="middle"
                    >
                        {value}
                    </text>
                    <text
                        x="50" y="65"
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.5)"
                        fontSize={size === 'large' ? "8" : "8"}
                        alignmentBaseline="middle"
                    >
                        MB/s
                    </text>
                </svg>
            </div>
            <div className="gauge-label">
                <h3 style={{ fontSize: size === 'large' ? '1.2rem' : '0.9rem' }}>{label}</h3>
                {subLabel && <p>{subLabel}</p>}
            </div>
        </div>
    );
};

const MiniStat = ({ icon: Icon, title, desc, color }) => (
    <div className="mini-stat-item">
        <div className="mini-icon" style={{ backgroundColor: `${color}15`, color: color }}>
            <Icon size={16} />
        </div>
        <div className="mini-text">
            <h3>{title}</h3>
            <span>{desc}</span>
        </div>
    </div>
);

const BentoBenchmarks = () => {
    return (
        <section id="benchmarks" className="bento-section">
            <div className="bento-container">

                <motion.div
                    className="bento-header"
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <span className="sparkle-tag">PERFORMANCE ANALYSIS</span>
                    <h2 className="heading">
                        Zero Software <span className="hero_name">Limits</span>
                    </h2>
                    <p className="description">
                        TransferX runs on the metal. We utilize 100% of your hardware's physics.
                    </p>
                </motion.div>

                <div className="bento-grid">

                    {/* [1] ETHERNET: Hero (Left Column) */}
                    <motion.div
                        className="bento-card hero-ethernet"
                        variants={containerVariants} initial="hidden" whileInView="visible"
                    >
                        <div className="bento-top">
                            <div className="icon-badge cyan"><FiServer /></div>
                            <div className="status-badge">ACTIVE</div>
                        </div>

                        <div className="bento-center">
                            <CircularGauge
                                value={125}
                                max={125}
                                label="Gigabit LAN"
                                subLabel="Saturation Point"
                                color="#00E0FF"
                                delay={0.2}
                                size="large"
                            />
                        </div>

                        <div className="bento-footer">
                            <p>Transfer 50GB in ~6 minutes.</p>
                            <div className="mini-spec"><FiClock /> Latency &lt; 1ms</div>
                        </div>
                    </motion.div>

                    {/* [2] WIFI: Wide Row 1 (Right Top) */}
                    <motion.div
                        className="bento-card wide-wifi"
                        variants={containerVariants} initial="hidden" whileInView="visible"
                    >
                        <div className="content-left">
                            <div className="icon-badge green"><FiWifi /></div>
                            <div>
                                <h3>Wi-Fi 6 (5GHz)</h3>
                                <p>Cable-free speed.</p>
                            </div>
                        </div>
                        <div className="gauge-right">
                            <CircularGauge value={90} max={125} label="High Speed" subLabel="" color="#34d399" delay={0.4} />
                        </div>
                    </motion.div>

                    {/* [3] HOTSPOT: Row 2 Left (Right Bottom Left) */}
                    <motion.div
                        className="bento-card card-hotspot"
                        variants={containerVariants} initial="hidden" whileInView="visible"
                    >
                        <div className="icon-badge orange"><FiZap /></div>
                        <h3>Hotspot</h3>
                        <CircularGauge value={45} max={125} label="Reliable" subLabel="" color="#FFB020" delay={0.6} />
                    </motion.div>

                    {/* [4] QUAD GRID: Row 2 Right (Right Bottom Right) */}
                    {/* Transparent container holding 4 separate mini cards */}
                    <motion.div
                        className="card-quad-container"
                        variants={containerVariants} initial="hidden" whileInView="visible"
                    >
                        <div className="quad-grid">
                            <MiniStat icon={FiCpu} title="Adaptive" desc="Auto-Buffer" color="#5355d6" />
                            <MiniStat icon={FiHardDrive} title="Direct I/O" desc="Zero-Copy" color="#8b5cf6" />
                            <MiniStat icon={FiLock} title="TLS Security" desc="Encrypted" color="#10b981" />
                            <MiniStat icon={FiGlobe} title="vs Cloud" desc="20x Faster" color="#ef4444" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default BentoBenchmarks;
