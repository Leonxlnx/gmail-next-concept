"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 40);
    });

    const navLinks = [
        { label: "Features", href: "#features" },
        { label: "Security", href: "#security" },
        { label: "AI", href: "#smart-compose" },
        { label: "Download", href: "#download" },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <motion.div
                className="mx-auto transition-all duration-500"
                animate={{
                    paddingTop: scrolled ? 8 : 16,
                    paddingBottom: scrolled ? 8 : 16,
                    paddingLeft: 24,
                    paddingRight: 24,
                }}
            >
                <motion.div
                    className="max-w-[1440px] mx-auto flex items-center justify-between rounded-full px-6"
                    animate={{
                        backgroundColor: scrolled
                            ? "rgba(255,255,255,0.82)"
                            : "rgba(255,255,255,0)",
                        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(0px)",
                        boxShadow: scrolled
                            ? "0 2px 20px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.1)"
                            : "0 0 0 rgba(0,0,0,0)",
                        padding: scrolled ? "10px 28px" : "14px 28px",
                        borderWidth: scrolled ? 1 : 0,
                        borderColor: scrolled
                            ? "rgba(0,0,0,0.04)"
                            : "rgba(0,0,0,0)",
                    }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    style={{ borderStyle: "solid" }}
                >
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 no-underline">
                        <img
                            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
                            alt="Gmail"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                        <span className="text-[20px] font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                            Gmail
                        </span>
                    </a>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 no-underline"
                                style={{ color: "var(--text-secondary)" }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "var(--text-primary)";
                                    e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.04)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "var(--text-secondary)";
                                    e.currentTarget.style.backgroundColor = "transparent";
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://accounts.google.com"
                            className="hidden sm:inline-flex text-sm font-medium no-underline px-4 py-2 rounded-full transition-colors duration-300"
                            style={{ color: "var(--google-blue)" }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(26,115,232,0.08)")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                        >
                            Sign in
                        </a>
                        <motion.a
                            href="https://accounts.google.com/signup"
                            className="btn-pill-primary text-sm !py-2.5 !px-5 no-underline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Get Gmail free
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </motion.nav>
    );
}
