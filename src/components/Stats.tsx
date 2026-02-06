"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [inView, target]);

    // Format without locale to avoid period separators
    const formatted = target >= 1000
        ? `${(count / 1000).toFixed(count >= target ? 1 : 0)}B`
        : String(count);

    return (
        <span ref={ref}>
            {prefix}{target >= 1000 ? `${(count / 1000).toFixed(1)}` : count}{suffix}
        </span>
    );
}

const STATS = [
    { value: 1800, suffix: "B+", label: "Active users", color: "#1A73E8" },
    { value: 99, suffix: ".9%", label: "Spam blocked", color: "#EA4335" },
    { value: 15, suffix: " GB", label: "Free storage", color: "#34A853" },
    { value: 100, suffix: "M+", label: "Business customers", color: "#FBBC04" },
];

export default function Stats() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section style={{ padding: "80px 24px", background: "var(--bg-base)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <motion.div
                    ref={ref}
                    style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}
                    className="stats-grid"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            style={{
                                textAlign: "center", padding: "32px 16px",
                                borderRadius: 20, background: "var(--bg-surface)",
                                border: "1px solid rgba(0,0,0,0.04)",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.15 * i, duration: 0.5 }}
                        >
                            <div
                                style={{
                                    fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                                    fontWeight: 800, marginBottom: 8,
                                    color: stat.color, letterSpacing: "-1px",
                                }}
                            >
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <p style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", margin: 0 }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
