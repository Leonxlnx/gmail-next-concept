"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Floating blob shapes ────────────────────────────── */
function FloatingBlobs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Blue blob */}
            <div
                className="absolute -top-32 -right-32 w-[500px] h-[500px] animate-morph animate-float-slow opacity-[0.07]"
                style={{ background: "linear-gradient(135deg, #1A73E8, #4285F4)" }}
            />
            {/* Red blob */}
            <div
                className="absolute top-1/3 -left-40 w-[400px] h-[400px] animate-morph animate-float opacity-[0.05]"
                style={{
                    background: "linear-gradient(135deg, #EA4335, #FBBC04)",
                    animationDelay: "2s",
                }}
            />
            {/* Green blob */}
            <div
                className="absolute -bottom-20 right-1/4 w-[350px] h-[350px] animate-morph animate-float-slow opacity-[0.05]"
                style={{
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
        {
            from: "Google Workspace",
            subject: "Your workspace is ready to go",
            snippet: "Start collaborating with your team today...",
            time: "10:30 AM",
            starred: true,
            avatar: "#1A73E8",
            unread: true,
        },
        {
            from: "Cloud Storage",
            subject: "15 GB free storage — upgraded",
            snippet: "Your Google Drive has been upgraded with...",
            time: "9:15 AM",
            starred: false,
            avatar: "#34A853",
            unread: true,
        },
        {
            from: "Google Meet",
            subject: "Join your scheduled meeting",
            snippet: "Your meeting with the design team starts...",
            time: "Yesterday",
            starred: false,
            avatar: "#EA4335",
            unread: false,
        },
        {
            from: "Google Calendar",
            subject: "Reminder: Project review at 3 PM",
            snippet: "You have an upcoming event tomorrow at...",
            time: "Yesterday",
            starred: true,
            avatar: "#FBBC04",
            unread: false,
        },
        {
            from: "Security Alert",
            subject: "New sign-in from Chrome on Windows",
            snippet: "We noticed a new sign-in to your Google...",
            time: "Mon",
            starred: false,
            avatar: "#EA4335",
            unread: false,
        },
    ];

    return (
        <div className="w-full rounded-2xl overflow-hidden bg-white" style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.1)" }}>
            {/* Top bar */}
            <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ background: "#EA4335" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "#FBBC04" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "#34A853" }} />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 w-full max-w-md">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                        <span className="text-xs" style={{ color: "#9AA0A6" }}>Search mail</span>
                    </div>
                </div>
                <div className="w-7 h-7 rounded-full" style={{ background: "linear-gradient(135deg, #1A73E8, #4285F4)" }} />
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-100">
                <div className="flex items-center gap-2 px-5 py-2.5 border-b-2" style={{ borderColor: "#1A73E8" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#1A73E8"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                    <span className="text-xs font-semibold" style={{ color: "#1A73E8" }}>Primary</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 opacity-50">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#5F6368"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" /></svg>
                    <span className="text-xs font-medium" style={{ color: "#5F6368" }}>Promotions</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 opacity-50">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#5F6368"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    <span className="text-xs font-medium" style={{ color: "#5F6368" }}>Social</span>
                </div>
            </div>

            {/* Email list */}
            <div>
                {emails.map((email, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 px-5 py-3 border-b border-gray-50 transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
                        style={{ background: email.unread ? "rgba(26,115,232,0.04)" : "transparent" }}
                    >
                        {/* Avatar */}
                        <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{ background: email.avatar }}>
                            {email.from[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className={`text-sm truncate ${email.unread ? "font-bold" : "font-medium"}`} style={{ color: "var(--text-primary)", maxWidth: 140 }}>{email.from}</span>
                                <span className={`text-sm truncate ${email.unread ? "font-semibold" : "font-normal"}`} style={{ color: email.unread ? "var(--text-primary)" : "var(--text-secondary)" }}>— {email.subject}</span>
                            </div>
                            <p className="text-xs truncate mt-0.5" style={{ color: "var(--text-tertiary)" }}>{email.snippet}</p>
                        </div>
                        {/* Star */}
                        {email.starred && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBC04"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                        )}
                        <span className="text-xs flex-shrink-0" style={{ color: "var(--text-tertiary)" }}>{email.time}</span>
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
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 px-6"
            style={{ background: "linear-gradient(180deg, #F8F9FA 0%, #E8F0FE 40%, #FFFFFF 100%)" }}
        >
            <FloatingBlobs />

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{ y: textY }}
                className="relative z-10"
            >
                <div className="glass-strong inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
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
                style={{ y: textY, opacity }}
                className="text-center max-w-4xl relative z-10"
            >
                <h1 className="display-xl mb-6">
                    Inbox,{" "}
                    <span className="gradient-text">perfected.</span>
                </h1>
                <p className="body-l max-w-2xl mx-auto mb-10" style={{ color: "var(--text-secondary)" }}>
                    The email you know, reimagined with AI that writes, sorts, and protects — so you spend less time in your inbox and more time on what matters.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                        href="https://accounts.google.com/signup"
                        className="btn-pill btn-pill-primary no-underline text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        Create free account
                    </motion.a>
                    <motion.a
                        href="#features"
                        className="btn-pill btn-pill-secondary no-underline text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        See what's new
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </motion.a>
                </div>
            </motion.div>

            {/* Gmail Mockup */}
            <motion.div
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                style={{ y: mockupY }}
                className="relative z-10 mt-16 w-full max-w-3xl glow-blue rounded-2xl"
            >
                <GmailMockup />
            </motion.div>

            {/* Trusted by section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="relative z-10 mt-16 text-center"
            >
                <p className="micro-label mb-5" style={{ color: "var(--text-tertiary)" }}>
                    Trusted by 1.8 billion users worldwide
                </p>
                <div className="flex items-center justify-center gap-10 opacity-40">
                    {/* Google Product Icons */}
                    <img src="https://www.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png" alt="Google Drive" className="h-8 w-8 object-contain" />
                    <img src="https://www.gstatic.com/images/branding/product/2x/calendar_2020q4_48dp.png" alt="Google Calendar" className="h-8 w-8 object-contain" />
                    <img src="https://www.gstatic.com/images/branding/product/2x/meet_2020q4_48dp.png" alt="Google Meet" className="h-8 w-8 object-contain" />
                    <img src="https://www.gstatic.com/images/branding/product/2x/docs_2020q4_48dp.png" alt="Google Docs" className="h-8 w-8 object-contain" />
                    <img src="https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png" alt="Google Sheets" className="h-8 w-8 object-contain" />
                </div>
            </motion.div>
        </section>
    );
}
