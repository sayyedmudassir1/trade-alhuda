import type { Metadata } from "next";
import "./globals.css";
import { Google_Sans_Flex, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/header/Header";
import { Footer } from "@/components/site-footer";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Al - Huda Import & Export",
  description: "Al-Huda Import and Export",
};

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  variable: "--font-google-sans-flex",
  adjustFontFallback: false,
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", googleSansFlex.className, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background flex flex-col">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
