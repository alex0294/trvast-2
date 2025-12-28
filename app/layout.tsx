import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import MouseTrail from "@/components/MouseTrail";

export const metadata: Metadata = {
  title: "浩瀚交易 - Haohan Trading",
  description: "精准·专业·高效的外汇交易训练营。",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh" className="dark">
      <body className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black">
        <MouseTrail />
        {children}
      </body>
    </html>
  );
}
