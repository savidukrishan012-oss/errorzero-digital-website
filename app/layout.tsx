import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import SiteShell from "@/components/SiteShell";
import FixedLogoPlate from "@/components/FixedLogoPlate";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zyraxe",
  description: "Your digital services partner",
  other: {
    "google-site-verification": "google76e94b27de4e0a18",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
          return (
            <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
              <body>
                <CustomCursor />
                <FixedLogoPlate />
                <WhatsAppFloatingButton />
                <PageTransitionProvider>
                  <SiteShell>{children}</SiteShell>
                </PageTransitionProvider>
              </body>
            </html>
          );
}
