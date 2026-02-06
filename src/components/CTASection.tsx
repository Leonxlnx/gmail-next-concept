"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTASection() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="download" className="py-24 md:py-32 px-6 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #E8F0FE 0%, #F8F9FA 50%, #E8F0FE 100%)" }}>
            {/* Decorative blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-20 -left-20 w-[300px] h-[300px] animate-morph animate-float opacity-[0.08]"
                    style={{ background: "linear-gradient(135deg, #1A73E8, #4285F4)" }}
                />
                <div
                    className="absolute -bottom-20 -right-20 w-[250px] h-[250px] animate-morph animate-float-slow opacity-[0.06]"
                    style={{ background: "linear-gradient(135deg, #EA4335, #FBBC04)", animationDelay: "3s" }}
                />
            </div>

            <motion.div
                ref={ref}
                className="max-w-3xl mx-auto text-center relative z-10"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                <h2 className="heading-l mb-5">
                    Ready to upgrade your{" "}
                    <span className="gradient-text">inbox?</span>
                </h2>
                <p className="body-l mb-10 max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                    Join 1.8 billion people who trust Gmail every day. It's free, it's fast, and it's the smartest email on the planet.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                        href="https://accounts.google.com/signup"
                        className="btn-pill btn-pill-primary no-underline text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        Get Gmail free
                    </motion.a>
                    <motion.a
                        href="https://workspace.google.com"
                        className="btn-pill btn-pill-secondary no-underline text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Gmail for business
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </motion.a>
                </div>

                {/* App badges */}
                <div className="flex items-center justify-center gap-6 mt-10 opacity-60">
                    <img
                        src="https://www.gstatic.com/images/branding/product/2x/play_prism_64dp.png"
                        alt="Google Play"
                        className="h-8 w-auto object-contain"
                    />
                    <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="App Store"
                        className="h-8 w-auto object-contain"
                    />
                </div>
            </motion.div>
        </section>
    );
}
