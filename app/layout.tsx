import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Navigation & Hero Gallery", description: "Twenty-seven responsive navbars and twenty hero sections built with React and Tailwind CSS.", other: { "codex-preview": "development" }, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
