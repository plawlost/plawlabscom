import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-pt-serif',
});

export const metadata: Metadata = {
  title: "Plaw Inc. — Build What's Yours",
  description: "We exist to give anyone a foundation of sovereign intelligence they can hold, shape, and deploy without compromise, permission, or backdoors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSerif.variable} font-serif antialiased`}>
        {children}
      </body>
    </html>
  );
}
