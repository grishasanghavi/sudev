import BreakpointTracker from "@/components/BreakpointTracker";
import Footer from "@/components/home/Footer";
import { NavBar } from "@/components/home/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  weight: ["300", "700"]
});

export const metadata: Metadata = {
  title: "Sudev Industries | Steel Products & Fabrication in Nagpur",
  description:
    "Your trusted manufacturer of rolling shutters, steel windows, and fabrication solutions in Nagpur since 1999. Quality products with precise dimensions.",
  keywords:
    "rolling shutters nagpur, steel windows, door frames, fabrication services, steel products, construction materials, rolling shutter spares, window grills, centering plates, collapsible gates",
  authors: [{ name: "Sudev Industries" }],
  creator: "thesocialbling",
  publisher: "Sudev Industries",
  formatDetection: {
    email: true,
    address: true,
    telephone: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${onest.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Footer />
          <NextTopLoader
            showSpinner={false}
            color="hsl(var(--foreground))"
            zIndex={999}
            height={3}
          />
          {process.env.NODE_ENV === "development" && <BreakpointTracker />}
        </ThemeProvider>
      </body>
    </html>
  );
}
