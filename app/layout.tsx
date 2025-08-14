import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { PageTransition } from "./components/page-transition/page-transition";
import { Navigation } from "./navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morkalork DEV",
  description: "A developers portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <PageTransition>
            <Navigation />
            {children}
          </PageTransition>
        </Providers>
      </body>
    </html>
  );
}
