"use client";

import { useState } from "react";
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
            style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <motion.div
                style={{ margin: "0 auto", paddingLeft: 24, paddingRight: 24 }}
                animate={{
                    paddingTop: scrolled ? 8 : 16,
                    paddingBottom: scrolled ? 8 : 16,
                }}
                transition={{ duration: 0.4 }}
            >
                <motion.div
                    style={{
                        maxWidth: 1440, margin: "0 auto",
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        borderRadius: 999, borderStyle: "solid",
                    }}
                    animate={{
                        backgroundColor: scrolled ? "rgba(255,255,255,0.82)" : "rgba(255,255,255,0)",
                        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(0px)",
                        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.1)" : "0 0 0 rgba(0,0,0,0)",
                        padding: scrolled ? "10px 28px" : "14px 28px",
                        borderWidth: scrolled ? 1 : 0,
                        borderColor: scrolled ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0)",
                    }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                    {/* Logo */}
                    <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
                        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" alt="Gmail" width={32} height={32} style={{ width: 32, height: 32 }} />
                        <span style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.5px", color: "var(--text-primary)" }}>Gmail</span>
                    </a>

                    {/* Nav Links — desktop only */}
                    <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                style={{
                                    padding: "8px 16px", fontSize: 14, fontWeight: 500,
                                    borderRadius: 999, textDecoration: "none",
                                    color: "var(--text-secondary)", transition: "all 0.3s ease",
                                }}
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
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <a
                            href="https://accounts.google.com"
                            className="nav-signin-desktop"
                            style={{
                                fontSize: 14, fontWeight: 500, textDecoration: "none",
                                padding: "8px 16px", borderRadius: 999,
                                color: "var(--google-blue)", transition: "background 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(26,115,232,0.08)")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                        >
                            Sign in
                        </a>
                        <motion.a
                            href="https://accounts.google.com/signup"
                            className="btn-pill-primary"
                            style={{ fontSize: 14, padding: "10px 20px", textDecoration: "none" }}
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
