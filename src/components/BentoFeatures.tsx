"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Card wrapper with scroll-reveal ─────────────────── */
function BentoCard({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            className={`bento-card ${className}`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
            {children}
        </motion.div>
    );
}

/* ──────────────────────────────────────────────────────── */
/*  Feature card data                                      */
/* ──────────────────────────────────────────────────────── */

/* Card 1 — AI Sorting (large, tall) */
function AICard() {
    const categories = [
        { label: "Primary", color: "#1A73E8", count: 12 },
        { label: "Social", color: "#EA4335", count: 8 },
        { label: "Promotions", color: "#34A853", count: 24 },
        { label: "Updates", color: "#FBBC04", count: 5 },
    ];

    return (
        <BentoCard className="bento-card-ai" delay={0.1}>
            <div style={{ padding: "32px" }}>
                <div className="micro-label" style={{ color: "var(--google-blue)", marginBottom: 12 }}>
                    AI-Powered
                </div>
                <h3 className="heading-m" style={{ color: "var(--text-primary)", marginBottom: 12 }}>
                    Intelligent sorting
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6, marginBottom: 32 }}>
                    Gmail learns what matters to you and automatically categorizes your emails — so your most important messages always rise to the top.
                </p>

                {/* Visual: animated category bars */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.label}
                            style={{ display: "flex", alignItems: "center", gap: 12 }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ width: 32, textAlign: "right" }}>
                                <span style={{ fontSize: 14, fontWeight: 700, color: cat.color }}>{cat.count}</span>
                            </div>
                            <div style={{ flex: 1, height: 28, borderRadius: 8, overflow: "hidden", background: "var(--bg-surface)" }}>
                                <motion.div
                                    style={{ height: "100%", borderRadius: 8, background: cat.color, opacity: 0.85 }}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${(cat.count / 30) * 100}%` }}
                                    transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                                    viewport={{ once: true }}
                                />
                            </div>
                            <span style={{ fontSize: 13, fontWeight: 500, width: 90, color: "var(--text-secondary)" }}>{cat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </BentoCard>
    );
}

/* Card 2 — 15 GB Storage */
function StorageCard() {
    return (
        <BentoCard className="bento-card-storage" delay={0.2}>
            <div style={{ padding: "32px" }}>
                <div className="micro-label" style={{ color: "var(--google-green)", marginBottom: 12 }}>
                    Storage
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>
                    15 GB free
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    Generous storage across Gmail, Drive, and Photos. Never worry about space.
                </p>

                {/* Visual: Storage ring */}
                <div style={{ marginTop: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="110" height="110" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="48" fill="none" stroke="#F1F3F4" strokeWidth="10" />
                        <motion.circle
                            cx="60" cy="60" r="48" fill="none" stroke="#34A853" strokeWidth="10"
                            strokeDasharray="301.6"
                            strokeLinecap="round"
                            style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
                            initial={{ strokeDashoffset: 301.6 }}
                            whileInView={{ strokeDashoffset: 301.6 * 0.65 }}
                            transition={{ delay: 0.5, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                            viewport={{ once: true }}
                        />
                        <text x="60" y="56" textAnchor="middle" fill="var(--text-primary)" fontSize="18" fontWeight="700">35%</text>
                        <text x="60" y="72" textAnchor="middle" fill="var(--text-secondary)" fontSize="11">used</text>
                    </svg>
                </div>
            </div>
        </BentoCard>
    );
}

/* Card 3 — Spam Protection */
function SpamCard() {
    return (
        <BentoCard className="bento-card-spam" delay={0.3}>
            <div style={{ padding: "32px" }}>
                <div className="micro-label" style={{ color: "var(--google-red)", marginBottom: 12 }}>
                    Protection
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>
                    99.9% spam-free
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    Advanced AI blocks phishing, malware, and spam before they reach your inbox.
                </p>

                {/* Shield icon */}
                <div style={{ marginTop: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <motion.div
                        style={{
                            width: 72, height: 72, borderRadius: 16,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: "linear-gradient(135deg, rgba(234,67,53,0.1), rgba(234,67,53,0.05))"
                        }}
                        whileInView={{ rotate: [0, -5, 5, 0], scale: [1, 1.05, 1] }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="#EA4335">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </BentoCard>
    );
}

/* Card 4 — Search (wide) */
function SearchCard() {
    return (
        <BentoCard className="bento-card-search" delay={0.4}>
            <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24 }}>
                    <div style={{ flex: 1, minWidth: 220 }}>
                        <div className="micro-label" style={{ color: "var(--google-blue)", marginBottom: 12 }}>
                            Search
                        </div>
                        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>
                            Find anything, instantly
                        </h3>
                        <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                            Google&apos;s world-class search, built into your inbox. Find emails, attachments, and contacts in milliseconds.
                        </p>
                    </div>

                    {/* Search bar visual */}
                    <div style={{ flex: 1, minWidth: 220, maxWidth: 360 }}>
                        <motion.div
                            style={{ borderRadius: 16, padding: 16, background: "var(--bg-surface)" }}
                            whileInView={{ boxShadow: ["0 0 0 rgba(26,115,232,0)", "0 0 0 3px rgba(26,115,232,0.15)", "0 0 0 rgba(26,115,232,0)"] }}
                            transition={{ delay: 0.6, duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                                <span style={{ fontSize: 13, color: "var(--text-tertiary)" }}>from:team has:attachment</span>
                            </div>
                            <div style={{ display: "flex", gap: 8 }}>
                                {["Date", "Has attachment", "From"].map((chip) => (
                                    <span key={chip} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 999, fontWeight: 500, background: "rgba(26,115,232,0.1)", color: "#1A73E8" }}>
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </BentoCard>
    );
}

/* Card 5 — Offline Mode */
function OfflineCard() {
    return (
        <BentoCard className="bento-card-offline" delay={0.5}>
            <div style={{ padding: "32px" }}>
                <div className="micro-label" style={{ color: "var(--google-yellow)", marginBottom: 12 }}>
                    Offline
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>
                    Works offline
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 24 }}>
                    Read, respond, and search — even without internet.
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <motion.div
                        style={{ position: "relative", width: 56, height: 56 }}
                        whileInView={{ rotate: 360 }}
                        transition={{ delay: 0.5, duration: 20, repeat: Infinity, ease: "linear" }}
                        viewport={{ once: true }}
                    >
                        <svg width="56" height="56" viewBox="0 0 64 64">
                            <circle cx="32" cy="32" r="24" fill="none" stroke="#FBBC04" strokeWidth="3" strokeDasharray="6 4" opacity="0.5" />
                            <circle cx="32" cy="32" r="7" fill="#FBBC04" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </BentoCard>
    );
}

/* Card 6 — Integrations */
function IntegrationsCard() {
    return (
        <BentoCard className="bento-card-integrations" delay={0.6}>
            <div style={{ padding: "32px" }}>
                <div className="micro-label" style={{ color: "var(--text-secondary)", marginBottom: 12 }}>
                    Integrations
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>
                    Your tools, connected
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 24 }}>
                    Calendar, Meet, Chat, Drive — all built right in.
                </p>

                {/* App icons grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                    {[
                        { src: "https://www.gstatic.com/images/branding/product/2x/calendar_2020q4_48dp.png", name: "Calendar" },
                        { src: "https://www.gstatic.com/images/branding/product/2x/meet_2020q4_48dp.png", name: "Meet" },
                        { src: "https://www.gstatic.com/images/branding/product/2x/chat_2020q4_48dp.png", name: "Chat" },
                        { src: "https://www.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png", name: "Drive" },
                    ].map((app, i) => (
                        <motion.div
                            key={app.name}
                            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-surface)" }}>
                                <img src={app.src} alt={app.name} width={24} height={24} style={{ width: 24, height: 24 }} />
                            </div>
                            <span style={{ fontSize: 10, fontWeight: 500, color: "var(--text-tertiary)" }}>{app.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </BentoCard>
    );
}

/* ── Main Bento Grid ─────────────────────────────────── */
export default function BentoFeatures() {
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

    return (
        <section id="features" style={{ padding: "96px 24px", background: "var(--bg-surface)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    style={{ textAlign: "center", marginBottom: 64 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="micro-label" style={{ color: "var(--google-blue)", marginBottom: 16 }}>Features</div>
                    <h2 className="heading-l" style={{ marginBottom: 16 }}>
                        Everything you need,{" "}
                        <span className="gradient-text">nothing you don&apos;t</span>
                    </h2>
                    <p className="body-l" style={{ color: "var(--text-secondary)", maxWidth: 560, margin: "0 auto" }}>
                        A smarter inbox that adapts to your workflow — from AI sorting to seamless integrations.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="bento-grid">
                    <AICard />
                    <StorageCard />
                    <SpamCard />
                    <SearchCard />
                    <OfflineCard />
                    <IntegrationsCard />
                </div>
            </div>
        </section>
    );
}
