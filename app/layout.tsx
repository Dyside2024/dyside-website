import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "DYSIDE | Site officiel";
const description = "Metalcore de Paris. Nouvel EP bientôt disponible.";

export const metadata: Metadata = {
  // Nécessaire pour que les images Open Graph aient une URL absolue
  metadataBase: new URL("https://dyside.fr"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "DYSIDE",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DYSIDE" }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
