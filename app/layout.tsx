import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rebirth and New Hope",
  description: "Embrace current opportunities. Stop dwelling on failures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
