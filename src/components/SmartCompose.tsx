"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const TYPING_LINES = [
    { prompt: "Hi Sarah, I wanted to follow up on", completion: " our meeting yesterday about the Q3 roadmap." },
    { prompt: "The key takeaways were", completion: " aligning on the product launch timeline and budget allocation." },
    { prompt: "Could we schedule a", completion: " 30-minute call this Thursday to finalize the details?" },
];

function TypingDemo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const inView = useInView(containerRef, { once: true, margin: "-100px" });
    const [activeLine, setActiveLine] = useState(0);
    const [typedChars, setTypedChars] = useState(0);
    const [showCompletion, setShowCompletion] = useState(false);

    useEffect(() => {
        if (!inView) return;
        setTypedChars(0);
        setShowCompletion(false);
        setActiveLine(0);
    }, [inView]);

    useEffect(() => {
        if (!inView) return;
        const currentLine = TYPING_LINES[activeLine];
        if (!currentLine) return;

        const totalChars = currentLine.prompt.length;

        if (typedChars < totalChars) {
            const timer = setTimeout(() => setTypedChars((c) => c + 1), 35);
            return () => clearTimeout(timer);
        }

        if (!showCompletion) {
            const timer = setTimeout(() => setShowCompletion(true), 600);
            return () => clearTimeout(timer);
        }

        if (activeLine < TYPING_LINES.length - 1) {
            const timer = setTimeout(() => {
                setActiveLine((l) => l + 1);
                setTypedChars(0);
                setShowCompletion(false);
            }, 1800);
            return () => clearTimeout(timer);
        }
    }, [inView, typedChars, showCompletion, activeLine]);

    return (
        <div ref={containerRef} style={{ borderRadius: 16, overflow: "hidden", background: "white", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
            {/* Compose top bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", borderBottom: "1px solid #f1f3f4" }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>New Message</span>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </div>
            </div>

            {/* To / Subject */}
            <div style={{ padding: "8px 20px", borderBottom: "1px solid #f8f9fa" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
                    <span style={{ fontSize: 13, color: "var(--text-tertiary)" }}>To</span>
                    <span style={{ fontSize: 13, background: "#E8F0FE", color: "#1A73E8", padding: "2px 10px", borderRadius: 999, fontWeight: 500 }}>sarah@company.com</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderTop: "1px solid #f8f9fa" }}>
                    <span style={{ fontSize: 13, color: "var(--text-tertiary)" }}>Subject</span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>Re: Q3 Roadmap Follow-up</span>
                </div>
            </div>

            {/* Email body with typing */}
            <div style={{ padding: "20px", minHeight: 180 }}>
                {TYPING_LINES.map((line, i) => {
                    if (i > activeLine) return null;
                    const isActive = i === activeLine;
                    const visiblePrompt = isActive ? line.prompt.slice(0, typedChars) : line.prompt;
                    const shouldShowCompletion = isActive ? showCompletion : true;

                    return (
                        <div key={i} style={{ marginBottom: 4 }}>
                            <span style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text-primary)" }}>
                                {visiblePrompt}
                            </span>
                            {isActive && typedChars < line.prompt.length && (
                                <span style={{ display: "inline-block", width: 2, height: 16, marginLeft: 2, verticalAlign: "middle", background: "#1A73E8", animation: "pulse-glow 1s ease-in-out infinite" }} />
                            )}
                            {shouldShowCompletion && (
                                <motion.span
                                    style={{ fontSize: 14, color: "var(--text-tertiary)" }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {line.completion}
                                </motion.span>
                            )}
                        </div>
                    );
                })}

                {showCompletion && activeLine < TYPING_LINES.length && (
                    <motion.div
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, padding: "6px 12px", borderRadius: 8, background: "var(--bg-surface)" }}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span style={{ fontSize: 10, fontFamily: "monospace", padding: "2px 6px", borderRadius: 4, background: "#E8EAED", fontWeight: 700, color: "var(--text-secondary)" }}>Tab</span>
                        <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>to accept</span>
                    </motion.div>
                )}
            </div>

            {/* Toolbar */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", borderTop: "1px solid #f1f3f4" }}>
                <button className="btn-pill-primary" style={{ padding: "8px 20px", fontSize: 14 }}>Send</button>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: "auto" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                </div>
            </div>
        </div>
    );
}

/* ── Feature icons (replacing emojis) ───────────────── */
const FeatureIcon = ({ type }: { type: string }) => {
    const icons: Record<string, React.ReactNode> = {
        contextual: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        personalized: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            </svg>
        ),
        multilang: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
    };
    return (
        <div style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-surface)", flexShrink: 0 }}>
            {icons[type]}
        </div>
    );
};

export default function SmartCompose() {
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

    const features = [
        { type: "contextual", title: "Contextual suggestions", desc: "Understands the conversation thread" },
        { type: "personalized", title: "Personalized to you", desc: "Learns your writing patterns over time" },
        { type: "multilang", title: "Multi-language", desc: "Works in English, Spanish, French, and more" },
    ];

    return (
        <section id="smart-compose" style={{ padding: "96px 24px", background: "var(--bg-base)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center" }} className="smart-compose-grid">
                    {/* Left — Text */}
                    <motion.div
                        ref={headerRef}
                        initial={{ opacity: 0, x: -40 }}
                        animate={headerInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="micro-label" style={{ color: "var(--google-blue)", marginBottom: 16 }}>
                            Google AI
                        </div>
                        <h2 className="heading-l" style={{ marginBottom: 20 }}>
                            Write faster with{" "}
                            <span className="gradient-text">Smart Compose</span>
                        </h2>
                        <p className="body-l" style={{ color: "var(--text-secondary)", marginBottom: 32 }}>
                            AI-powered suggestions that complete your sentences as you type. Gmail learns your style and offers
                            natural, personalized completions — saving you time on every email.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {features.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    style={{ display: "flex", alignItems: "center", gap: 16, padding: 16, borderRadius: 16, transition: "background 0.3s ease" }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-surface)"}
                                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                                >
                                    <FeatureIcon type={item.type} />
                                    <div>
                                        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 2, color: "var(--text-primary)" }}>{item.title}</h4>
                                        <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0 }}>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Typing Demo */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={headerInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <TypingDemo />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
