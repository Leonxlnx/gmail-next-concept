"use client";

const footerLinks = {
    "Product": ["Overview", "Features", "Security", "Pricing", "Gmail for Business"],
    "Resources": ["Help Center", "Community", "Blog", "Developer API", "System Status"],
    "Company": ["About Google", "Careers", "Press", "Investor Relations", "Contact"],
    "Legal": ["Privacy Policy", "Terms of Service", "Cookie Settings", "Accessibility"],
};

export default function Footer() {
    return (
        <footer className="py-16 md:py-20 px-6 border-t" style={{ borderColor: "rgba(0,0,0,0.06)", background: "var(--bg-base)" }}>
            <div className="max-w-[1200px] mx-auto">
                {/* Top */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 no-underline mb-4">
                            <img
                                src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
                                alt="Gmail"
                                width={28}
                                height={28}
                            />
                            <span className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                                Gmail
                            </span>
                        </a>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                            The email experience reimagined with AI.
                        </p>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                                {category}
                            </h4>
                            <ul className="space-y-2.5 list-none">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm no-underline transition-colors duration-200"
                                            style={{ color: "var(--text-secondary)" }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px w-full mb-8" style={{ background: "rgba(0,0,0,0.06)" }} />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_74x24dp.png"
                            alt="Google"
                            className="h-5 w-auto"
                        />
                    </div>
                    <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                        © {new Date().getFullYear()} Google LLC. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {/* Social placeholder using standard links */}
                        {["Twitter", "YouTube", "LinkedIn"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-xs font-medium no-underline transition-colors duration-200"
                                style={{ color: "var(--text-tertiary)" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
