import React from 'react';
import { Sarabun } from 'next/font/google'
import { ThemeProvider } from "next-themes";
import HeadInject from '@/components/headInject'
import "./globals.css";
import { SLcontainer } from '@/components/ui/slContainer';
import { FooterSL } from '@/components/ui/footer';
import HeaderSL from '@/components/ui/header';

const sarabun = Sarabun({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sarabun",
 });

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Spillaboratoriet",
  description: "SL's kalender projekt",
};

export default function LandingPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" className={sarabun.variable} suppressHydrationWarning>
      {/* <link rel="preload" href="https://use.typekit.net/esb0zet.css" as="style" /> */}
      {/* <link rel="stylesheet" href="https://use.typekit.net/esb0zet.css" /> */}
      <HeadInject />
      <body className="w-full h-full m-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <div className='max-w-screen-xl max-h-fit m-auto'>
          <HeaderSL />
          <main id="mainContent" className="">
                <SLcontainer>
                      {children}
                </SLcontainer>
          </main>
          <FooterSL />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
