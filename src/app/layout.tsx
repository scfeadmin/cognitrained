import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cognitrained.com"),
  title: "Cognitrained | AI-Assisted Engineering Certification",
  description: "Certify the logic behind the prompt. Bridging the Judgment Gap in AI-assisted engineering through hardcore cognitive rewiring.",
  
  openGraph: {
    title: "Cognitrained | AI-Assisted Engineering Certification",
    description: "Train your thinking for AI-assisted engineering.",
    url: "https://cognitrained.com",
    siteName: "Cognitrained",
    images: [
      {
        url: "/cognitrained-black.png",
        width: 1200,
        height: 630,
        alt: "Cognitrained Branding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognitrained | AI-Assisted Engineering Certification",
    description: "Train your thinking for AI-assisted engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
