import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gmail — Inbox, Perfected.",
  description:
    "The email experience reimagined. Intelligent, beautiful, and built for how you actually work.",
  icons: {
    icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
