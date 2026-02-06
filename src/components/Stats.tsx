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

    return (
        <span ref={ref}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}

const STATS = [
    { value: 1800, suffix: "M+", label: "Active users", color: "#1A73E8" },
    { value: 99, suffix: ".9%", label: "Spam blocked", color: "#EA4335" },
    { value: 15, suffix: " GB", label: "Free storage", color: "#34A853" },
    { value: 100, suffix: "M+", label: "Business customers", color: "#FBBC04" },
];

export default function Stats() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="py-20 md:py-28 px-6" style={{ background: "var(--bg-base)" }}>
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    ref={ref}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.15 * i, duration: 0.5 }}
                        >
                            <div
                                className="text-4xl md:text-5xl font-extrabold mb-2"
                                style={{ color: stat.color, letterSpacing: "-1.5px" }}
                            >
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
