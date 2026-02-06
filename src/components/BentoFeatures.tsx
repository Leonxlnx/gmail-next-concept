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
        <BentoCard className="p-8 md:p-10 row-span-2" delay={0.1}>
            <div className="micro-label mb-3" style={{ color: "var(--google-blue)" }}>
                AI-Powered
            </div>
            <h3 className="heading-m mb-3" style={{ color: "var(--text-primary)" }}>
                Intelligent sorting
            </h3>
            <p className="body-l mb-8" style={{ color: "var(--text-secondary)", fontSize: 16 }}>
                Gmail learns what matters to you and automatically categorizes your emails — so your most important messages always rise to the top.
            </p>

            {/* Visual: animated category bars */}
            <div className="space-y-4">
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.label}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-10 text-right">
                            <span className="text-sm font-bold" style={{ color: cat.color }}>{cat.count}</span>
                        </div>
                        <div className="flex-1 h-8 rounded-lg overflow-hidden" style={{ background: "var(--bg-surface)" }}>
                            <motion.div
                                className="h-full rounded-lg"
                                style={{ background: cat.color, opacity: 0.85 }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${(cat.count / 30) * 100}%` }}
                                transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                                viewport={{ once: true }}
                            />
                        </div>
                        <span className="text-sm font-medium w-24" style={{ color: "var(--text-secondary)" }}>{cat.label}</span>
                    </motion.div>
                ))}
            </div>
        </BentoCard>
    );
}

/* Card 2 — 15 GB Storage */
function StorageCard() {
    return (
        <BentoCard className="p-8 md:p-10 relative overflow-hidden" delay={0.2}>
            <div className="micro-label mb-3" style={{ color: "var(--google-green)" }}>
                Storage
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                15 GB free
            </h3>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Generous storage across Gmail, Drive, and Photos. Never worry about space.
            </p>

            {/* Visual: Storage ring */}
            <div className="mt-6 flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-sm">
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
                    <text x="60" y="56" textAnchor="middle" className="text-sm font-bold" fill="var(--text-primary)" fontSize="18">35%</text>
                    <text x="60" y="72" textAnchor="middle" className="text-xs" fill="var(--text-secondary)" fontSize="11">used</text>
                </svg>
            </div>
        </BentoCard>
    );
}

/* Card 3 — Spam Protection */
function SpamCard() {
    return (
        <BentoCard className="p-8 md:p-10 relative" delay={0.3}>
            <div className="micro-label mb-3" style={{ color: "var(--google-red)" }}>
                Protection
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                99.9% spam-free
            </h3>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Advanced AI blocks phishing, malware, and spam before they reach your inbox.
            </p>

            {/* Shield icon */}
            <div className="mt-6 flex items-center justify-center">
                <motion.div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, rgba(234,67,53,0.1), rgba(234,67,53,0.05))" }}
                    whileInView={{ rotate: [0, -5, 5, 0], scale: [1, 1.05, 1] }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="#EA4335">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                    </svg>
                </motion.div>
            </div>
        </BentoCard>
    );
}

/* Card 4 — Search (wide) */
function SearchCard() {
    return (
        <BentoCard className="p-8 md:p-10 col-span-1 md:col-span-2" delay={0.4}>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                    <div className="micro-label mb-3" style={{ color: "var(--google-blue)" }}>
                        Search
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                        Find anything, instantly
                    </h3>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Google's world-class search, built into your inbox. Find emails, attachments, and contacts in milliseconds.
                    </p>
                </div>

                {/* Search bar visual */}
                <div className="flex-1 max-w-md">
                    <motion.div
                        className="rounded-2xl p-4"
                        style={{ background: "var(--bg-surface)" }}
                        whileInView={{ boxShadow: ["0 0 0 rgba(26,115,232,0)", "0 0 0 3px rgba(26,115,232,0.15)", "0 0 0 rgba(26,115,232,0)"] }}
                        transition={{ delay: 0.6, duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                            <span className="text-sm" style={{ color: "var(--text-tertiary)" }}>from:team has:attachment</span>
                        </div>
                        <div className="flex gap-2">
                            {["Date", "Has attachment", "From"].map((chip) => (
                                <span key={chip} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "rgba(26,115,232,0.1)", color: "#1A73E8" }}>
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </BentoCard>
    );
}

/* Card 5 — Offline Mode */
function OfflineCard() {
    return (
        <BentoCard className="p-8 md:p-10" delay={0.5}>
            <div className="micro-label mb-3" style={{ color: "var(--google-yellow)" }}>
                Offline
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                Works offline
            </h3>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                Read, respond, and search — even without internet.
            </p>
            <div className="flex items-center justify-center">
                <motion.div
                    className="relative w-16 h-16"
                    whileInView={{ rotate: 360 }}
                    transition={{ delay: 0.5, duration: 20, repeat: Infinity, ease: "linear" }}
                    viewport={{ once: true }}
                >
                    <svg width="64" height="64" viewBox="0 0 64 64">
                        <circle cx="32" cy="32" r="28" fill="none" stroke="#FBBC04" strokeWidth="3" strokeDasharray="6 4" opacity="0.5" />
                        <circle cx="32" cy="32" r="8" fill="#FBBC04" />
                    </svg>
                </motion.div>
            </div>
        </BentoCard>
    );
}

/* Card 6 — Integrations */
function IntegrationsCard() {
    return (
        <BentoCard className="p-8 md:p-10" delay={0.6}>
            <div className="micro-label mb-3" style={{ color: "var(--text-secondary)" }}>
                Integrations
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                Your tools, connected
            </h3>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                Calendar, Meet, Chat, Drive — all built right in.
            </p>

            {/* App icons grid */}
            <div className="grid grid-cols-4 gap-3">
                {[
                    { src: "https://www.gstatic.com/images/branding/product/2x/calendar_2020q4_48dp.png", name: "Calendar" },
                    { src: "https://www.gstatic.com/images/branding/product/2x/meet_2020q4_48dp.png", name: "Meet" },
                    { src: "https://www.gstatic.com/images/branding/product/2x/chat_2020q4_48dp.png", name: "Chat" },
                    { src: "https://www.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png", name: "Drive" },
                ].map((app, i) => (
                    <motion.div
                        key={app.name}
                        className="flex flex-col items-center gap-1.5"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--bg-surface)" }}>
                            <img src={app.src} alt={app.name} className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-medium" style={{ color: "var(--text-tertiary)" }}>{app.name}</span>
                    </motion.div>
                ))}
            </div>
        </BentoCard>
    );
}

/* ── Main Bento Grid ─────────────────────────────────── */
export default function BentoFeatures() {
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

    return (
        <section id="features" className="py-24 md:py-32 px-6" style={{ background: "var(--bg-surface)" }}>
            <div className="max-w-[1200px] mx-auto">
                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="micro-label mb-4" style={{ color: "var(--google-blue)" }}>Features</div>
                    <h2 className="heading-l mb-4">
                        Everything you need,{" "}
                        <span className="gradient-text">nothing you don&apos;t</span>
                    </h2>
                    <p className="body-l max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                        A smarter inbox that adapts to your workflow — from AI sorting to seamless integrations.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {/* Row 1: AI (tall, 1 col) + Storage + Spam (stacked, 1 col each) */}
                    <AICard />
                    <StorageCard />
                    <SpamCard />

                    {/* Row 2: Search (wide, 2 cols) + Offline */}
                    <SearchCard />
                    <OfflineCard />

                    {/* Row 3: Integrations */}
                    <IntegrationsCard />
                </div>
            </div>
        </section>
    );
}
