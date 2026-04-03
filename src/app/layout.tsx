import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "@/styles/globals.css";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_NAME} — Architecting the Digital Frontier`,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} Studio`,
    description: SITE_DESCRIPTION,
    type: "website",
  },
};

import { BackgroundGlows } from "@/components/ui/BackgroundEffects";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        {/* Material Symbols for architectural icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased relative overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundGlows />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
