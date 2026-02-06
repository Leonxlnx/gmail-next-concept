"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SECURITY_FEATURES = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#1A73E8">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
            </svg>
        ),
        title: "Advanced phishing protection",
        description:
            "Machine learning models analyze billions of signals to detect and block sophisticated phishing attempts before they reach your inbox.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#34A853">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
        ),
        title: "End-to-end encryption",
        description:
            "Your emails are encrypted in transit and at rest. With confidential mode, set expiration dates and revoke access anytime.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#EA4335">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
        ),
        title: "Safe browsing warnings",
        description:
            "Real-time warnings when you click links to dangerous websites or download suspicious attachments.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#FBBC04">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
        ),
        title: "Security checkup",
        description:
            "Simple, personalized security recommendations to keep your account protected and up-to-date.",
    },
];

export default function Security() {
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

    return (
        <section id="security" className="py-24 md:py-32 px-6" style={{ background: "var(--bg-surface)" }}>
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="micro-label mb-4" style={{ color: "var(--google-green)" }}>
                        Security
                    </div>
                    <h2 className="heading-l mb-4">
                        Protected at{" "}
                        <span className="gradient-text">every level</span>
                    </h2>
                    <p className="body-l max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                        Built on Google's world-class infrastructure, Gmail keeps your data safe with multiple layers of security.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {SECURITY_FEATURES.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            className="bento-card p-8 md:p-10"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                            viewport={{ once: true, margin: "-60px" }}
                        >
                            <motion.div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                                style={{ background: "var(--bg-surface)" }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                                {feature.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
