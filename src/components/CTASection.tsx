"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTASection() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="download" style={{ padding: "96px 24px", position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #E8F0FE 0%, #F8F9FA 50%, #E8F0FE 100%)" }}>
            {/* Decorative blobs */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
                <div
                    className="animate-morph animate-float"
                    style={{ position: "absolute", top: -80, left: -80, width: 300, height: 300, opacity: 0.08, background: "linear-gradient(135deg, #1A73E8, #4285F4)" }}
                />
                <div
                    className="animate-morph animate-float-slow"
                    style={{ position: "absolute", bottom: -80, right: -80, width: 250, height: 250, opacity: 0.06, background: "linear-gradient(135deg, #EA4335, #FBBC04)", animationDelay: "3s" }}
                />
            </div>

            <motion.div
                ref={ref}
                style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                <h2 className="heading-l" style={{ marginBottom: 20 }}>
                    Ready to upgrade your{" "}
                    <span className="gradient-text">inbox?</span>
                </h2>
                <p className="body-l" style={{ color: "var(--text-secondary)", marginBottom: 40, maxWidth: 560, margin: "0 auto 40px auto" }}>
                    Join 1.8 billion people who trust Gmail every day. It&apos;s free, it&apos;s fast, and it&apos;s the smartest email on the planet.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 16 }}>
                    <motion.a
                        href="https://accounts.google.com/signup"
                        className="btn-pill btn-pill-primary"
                        style={{ textDecoration: "none", fontSize: 16 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        Get Gmail free
                    </motion.a>
                    <motion.a
                        href="https://workspace.google.com"
                        className="btn-pill btn-pill-secondary"
                        style={{ textDecoration: "none", fontSize: 16 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Gmail for business
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </motion.a>
                </div>

                {/* App badges */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginTop: 40, opacity: 0.6 }}>
                    <img
                        src="https://www.gstatic.com/images/branding/product/2x/play_prism_64dp.png"
                        alt="Google Play"
                        style={{ height: 32, width: "auto", objectFit: "contain" }}
                    />
                    <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="App Store"
                        style={{ height: 32, width: "auto", objectFit: "contain" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
