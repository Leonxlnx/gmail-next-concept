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

        // Show completion after a pause
        if (!showCompletion) {
            const timer = setTimeout(() => setShowCompletion(true), 600);
            return () => clearTimeout(timer);
        }

        // Move to next line
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
        <div ref={containerRef} className="rounded-2xl overflow-hidden" style={{ background: "white", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
            {/* Compose top bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>New Message</span>
                <div className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </div>
            </div>

            {/* To / Subject */}
            <div className="px-5 py-2 border-b border-gray-50">
                <div className="flex items-center gap-2 py-1.5">
                    <span className="text-sm" style={{ color: "var(--text-tertiary)" }}>To</span>
                    <span className="text-sm bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full font-medium">sarah@company.com</span>
                </div>
                <div className="flex items-center gap-2 py-1.5 border-t border-gray-50">
                    <span className="text-sm" style={{ color: "var(--text-tertiary)" }}>Subject</span>
                    <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Re: Q3 Roadmap Follow-up</span>
                </div>
            </div>

            {/* Email body with typing */}
            <div className="px-5 py-5 min-h-[180px]">
                {TYPING_LINES.map((line, i) => {
                    if (i > activeLine) return null;
                    const isActive = i === activeLine;
                    const visiblePrompt = isActive
                        ? line.prompt.slice(0, typedChars)
                        : line.prompt;
                    const shouldShowCompletion = isActive ? showCompletion : true;

                    return (
                        <div key={i} className="mb-1">
                            <span className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>
                                {visiblePrompt}
                            </span>
                            {isActive && typedChars < line.prompt.length && (
                                <span className="inline-block w-0.5 h-4 ml-0.5 align-middle animate-pulse" style={{ background: "#1A73E8" }} />
                            )}
                            {shouldShowCompletion && (
                                <motion.span
                                    className="text-sm"
                                    style={{ color: "var(--text-tertiary)" }}
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

                {/* Tab hint */}
                {showCompletion && activeLine < TYPING_LINES.length && (
                    <motion.div
                        className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-lg"
                        style={{ background: "var(--bg-surface)" }}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-gray-200 font-bold" style={{ color: "var(--text-secondary)", fontSize: 10 }}>Tab</span>
                        <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>to accept</span>
                    </motion.div>
                )}
            </div>

            {/* Toolbar */}
            <div className="flex items-center gap-3 px-5 py-3 border-t border-gray-100">
                <button className="btn-pill-primary !py-2 !px-5 text-sm">Send</button>
                <div className="flex items-center gap-2 ml-auto">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                </div>
            </div>
        </div>
    );
}

export default function SmartCompose() {
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

    return (
        <section id="smart-compose" className="py-24 md:py-32 px-6" style={{ background: "var(--bg-base)" }}>
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left — Text */}
                    <motion.div
                        ref={headerRef}
                        initial={{ opacity: 0, x: -40 }}
                        animate={headerInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="micro-label mb-4" style={{ color: "var(--google-blue)" }}>
                            Google AI
                        </div>
                        <h2 className="heading-l mb-5">
                            Write faster with{" "}
                            <span className="gradient-text">Smart Compose</span>
                        </h2>
                        <p className="body-l mb-8" style={{ color: "var(--text-secondary)" }}>
                            AI-powered suggestions that complete your sentences as you type. Gmail learns your style and offers
                            natural, personalized completions — saving you time on every email.
                        </p>

                        <div className="space-y-4">
                            {[
                                { icon: "⚡", title: "Contextual suggestions", desc: "Understands the conversation thread" },
                                { icon: "🎯", title: "Personalized to you", desc: "Learns your writing patterns over time" },
                                { icon: "🌍", title: "Multi-language", desc: "Works in English, Spanish, French, and more" },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    className="flex items-start gap-4 p-4 rounded-2xl transition-colors duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                    style={{ background: "transparent" }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-surface)"}
                                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <div>
                                        <h4 className="text-sm font-semibold mb-0.5" style={{ color: "var(--text-primary)" }}>{item.title}</h4>
                                        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
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
