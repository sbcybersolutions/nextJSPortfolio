import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christian Salafia - Portfolio",
  description: "Full-stack developer & cybersecurity GRC practitioner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${firaCode.variable}`}
    >
      <body className="font-sans bg-neutral text-primary dark:bg-primary dark:text-neutral antialiased">
        {/* Providers MUST be here, wrapping ALL routes */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
