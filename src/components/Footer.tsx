"use client";

const footerLinks = {
    "Product": ["Overview", "Features", "Security", "Pricing", "Gmail for Business"],
    "Resources": ["Help Center", "Community", "Blog", "Developer API", "System Status"],
    "Company": ["About Google", "Careers", "Press", "Investor Relations", "Contact"],
    "Legal": ["Privacy Policy", "Terms of Service", "Cookie Settings", "Accessibility"],
};

export default function Footer() {
    return (
        <footer style={{ padding: "64px 24px 48px 24px", borderTop: "1px solid rgba(0,0,0,0.06)", background: "var(--bg-base)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                {/* Top */}
                <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", gap: 32, marginBottom: 48 }} className="footer-grid">
                    {/* Brand */}
                    <div>
                        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", marginBottom: 16 }}>
                            <img
                                src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
                                alt="Gmail"
                                width={28}
                                height={28}
                            />
                            <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.5px", color: "var(--text-primary)" }}>
                                Gmail
                            </span>
                        </a>
                        <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>
                            The email experience<br />reimagined with AI.
                        </p>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 16, color: "var(--text-primary)" }}>
                                {category}
                            </h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            style={{ fontSize: 13, textDecoration: "none", color: "var(--text-secondary)", transition: "color 0.2s" }}
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
                <div style={{ height: 1, width: "100%", marginBottom: 32, background: "rgba(0,0,0,0.06)" }} />

                {/* Bottom */}
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <img
                            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_74x24dp.png"
                            alt="Google"
                            style={{ height: 20, width: "auto" }}
                        />
                    </div>
                    <p style={{ fontSize: 12, color: "var(--text-tertiary)", margin: 0 }}>
                        © {new Date().getFullYear()} Google LLC. All rights reserved.
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        {["Twitter", "YouTube", "LinkedIn"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                style={{ fontSize: 12, fontWeight: 500, textDecoration: "none", color: "var(--text-tertiary)", transition: "color 0.2s" }}
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
