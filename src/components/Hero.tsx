"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Floating blob shapes ────────────────────────────── */
function FloatingBlobs() {
    return (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
            <div
                className="animate-morph animate-float-slow"
                style={{
                    position: "absolute", top: -128, right: -128,
                    width: 500, height: 500, opacity: 0.07,
                    background: "linear-gradient(135deg, #1A73E8, #4285F4)",
                }}
            />
            <div
                className="animate-morph animate-float"
                style={{
                    position: "absolute", top: "33%", left: -160,
                    width: 400, height: 400, opacity: 0.05,
                    background: "linear-gradient(135deg, #EA4335, #FBBC04)",
                    animationDelay: "2s",
                }}
            />
            <div
                className="animate-morph animate-float-slow"
                style={{
                    position: "absolute", bottom: -80, right: "25%",
                    width: 350, height: 350, opacity: 0.05,
                    background: "linear-gradient(135deg, #34A853, #1A73E8)",
                    animationDelay: "4s",
                }}
            />
        </div>
    );
}

/* ── Gmail UI Mockup ─────────────────────────────────── */
function GmailMockup() {
    const emails = [
        { from: "Google Workspace", subject: "Your workspace is ready to go", snippet: "Start collaborating with your team today...", time: "10:30 AM", starred: true, avatar: "#1A73E8", unread: true },
        { from: "Cloud Storage", subject: "15 GB free storage — upgraded", snippet: "Your Google Drive has been upgraded with...", time: "9:15 AM", starred: false, avatar: "#34A853", unread: true },
        { from: "Google Meet", subject: "Join your scheduled meeting", snippet: "Your meeting with the design team starts...", time: "Yesterday", starred: false, avatar: "#EA4335", unread: false },
        { from: "Google Calendar", subject: "Reminder: Project review at 3 PM", snippet: "You have an upcoming event tomorrow at...", time: "Yesterday", starred: true, avatar: "#FBBC04", unread: false },
        { from: "Security Alert", subject: "New sign-in from Chrome on Windows", snippet: "We noticed a new sign-in to your Google...", time: "Mon", starred: false, avatar: "#EA4335", unread: false },
    ];

    return (
        <div style={{ width: "100%", borderRadius: 16, overflow: "hidden", background: "white", boxShadow: "0 25px 60px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.1)" }}>
            {/* Top bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", borderBottom: "1px solid #f1f3f4" }}>
                <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#EA4335" }} />
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FBBC04" }} />
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#34A853" }} />
                </div>
                <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#f1f3f4", borderRadius: 999, padding: "6px 16px", width: "100%", maxWidth: 400 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                        <span style={{ fontSize: 12, color: "#9AA0A6" }}>Search mail</span>
                    </div>
                </div>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #1A73E8, #4285F4)" }} />
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", borderBottom: "1px solid #f1f3f4" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", borderBottom: "2px solid #1A73E8" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#1A73E8"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#1A73E8" }}>Primary</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", opacity: 0.5 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#5F6368"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" /></svg>
                    <span style={{ fontSize: 12, fontWeight: 500, color: "#5F6368" }}>Promotions</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", opacity: 0.5 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#5F6368"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
                    <span style={{ fontSize: 12, fontWeight: 500, color: "#5F6368" }}>Social</span>
                </div>
            </div>

            {/* Email list */}
            <div>
                {emails.map((email, i) => (
                    <div
                        key={i}
                        style={{
                            display: "flex", alignItems: "center", gap: 12, padding: "12px 20px",
                            borderBottom: "1px solid #f8f9fa", cursor: "pointer",
                            background: email.unread ? "rgba(26,115,232,0.04)" : "transparent",
                        }}
                    >
                        <div style={{ width: 32, height: 32, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 12, fontWeight: 700, background: email.avatar }}>
                            {email.from[0]}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <span style={{ fontSize: 13, fontWeight: email.unread ? 700 : 500, color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 140 }}>{email.from}</span>
                                <span style={{ fontSize: 13, fontWeight: email.unread ? 600 : 400, color: email.unread ? "var(--text-primary)" : "var(--text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>— {email.subject}</span>
                            </div>
                            <p style={{ fontSize: 12, color: "var(--text-tertiary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: 2 }}>{email.snippet}</p>
                        </div>
                        {email.starred && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBC04"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                        )}
                        <span style={{ fontSize: 12, flexShrink: 0, color: "var(--text-tertiary)" }}>{email.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ── Hero Section ────────────────────────────────────── */
export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const mockupY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            style={{
                position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", overflow: "hidden",
                paddingTop: 120, paddingBottom: 64, paddingLeft: 24, paddingRight: 24,
                background: "linear-gradient(180deg, #F8F9FA 0%, #E8F0FE 40%, #FFFFFF 100%)",
            }}
        >
            <FloatingBlobs />

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{ y: textY, position: "relative", zIndex: 10 }}
            >
                <div className="glass-strong" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, marginBottom: 32 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#34A853", animation: "pulse-glow 2s ease-in-out infinite" }} />
                    <span className="micro-label" style={{ color: "var(--text-secondary)", fontSize: 11 }}>
                        Powered by Google AI
                    </span>
                </div>
            </motion.div>

            {/* Headline */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                style={{ y: textY, opacity, textAlign: "center", maxWidth: 900, position: "relative", zIndex: 10 }}
            >
                <h1 className="display-xl" style={{ marginBottom: 24 }}>
                    Inbox,{" "}
                    <span className="gradient-text">perfected.</span>
                </h1>
                <p className="body-l" style={{ color: "var(--text-secondary)", maxWidth: 640, margin: "0 auto 40px auto" }}>
                    The email you know, reimagined with AI that writes, sorts, and protects — so you spend less time in your inbox and more time on what matters.
                </p>

                {/* CTA Buttons */}
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 16 }}>
                    <motion.a
                        href="https://accounts.google.com/signup"
                        className="btn-pill btn-pill-primary"
                        style={{ textDecoration: "none", fontSize: 16 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        Create free account
                    </motion.a>
                    <motion.a
                        href="#features"
                        className="btn-pill btn-pill-secondary"
                        style={{ textDecoration: "none", fontSize: 16 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        See what&apos;s new
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </motion.a>
                </div>
            </motion.div>

            {/* Gmail Mockup */}
            <motion.div
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                style={{ y: mockupY, position: "relative", zIndex: 10, marginTop: 64, width: "100%", maxWidth: 720 }}
                className="glow-blue"
            >
                <GmailMockup />
            </motion.div>

            {/* Trusted by section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                style={{ position: "relative", zIndex: 10, marginTop: 64, textAlign: "center" }}
            >
                <p className="micro-label" style={{ color: "var(--text-tertiary)", marginBottom: 20 }}>
                    Trusted by 1.8 billion users worldwide
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, opacity: 0.4 }}>
                    <img src="https://www.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png" alt="Drive" style={{ height: 32, width: 32, objectFit: "contain" }} />
                    <img src="https://www.gstatic.com/images/branding/product/2x/calendar_2020q4_48dp.png" alt="Calendar" style={{ height: 32, width: 32, objectFit: "contain" }} />
                    <img src="https://www.gstatic.com/images/branding/product/2x/meet_2020q4_48dp.png" alt="Meet" style={{ height: 32, width: 32, objectFit: "contain" }} />
                    <img src="https://www.gstatic.com/images/branding/product/2x/docs_2020q4_48dp.png" alt="Docs" style={{ height: 32, width: 32, objectFit: "contain" }} />
                    <img src="https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png" alt="Sheets" style={{ height: 32, width: 32, objectFit: "contain" }} />
                </div>
            </motion.div>
        </section>
    );
}
