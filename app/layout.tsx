import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3Motions | Pilates Bogor",
  description: "Thoughtful Pilates classes in Bogor and Sentul for women who want to move with confidence.",
  openGraph: { title: "3Motions | Elevate Your Movement", description: "Pilates classes in Bogor and Sentul.", images: [{ url: "/og.png", width: 1795, height: 940, alt: "3Motions Pilates" }] },
  twitter: { card: "summary_large_image", title: "3Motions | Elevate Your Movement", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
