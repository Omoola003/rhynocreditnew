import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/utils/navbar";
import Footer from "@/components/utils/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Global SEO Metadata
export const metadata = {
  metadataBase: new URL("https://rhynocredit.com"),
  title: {
    default: "RhynoCredit — Fast, Flexible, and Secure Loans for Everyone",
    template: "%s | RhynoCredit",
  },
  description:
    "RhynoCredit offers fast, secure, and customer-focused financial solutions. Apply for personal, startup, or business loans — and grow with confidence.",
  keywords: [
    "RhynoCredit",
    "loans in Nigeria",
    "business loan",
    "startup funding",
    "personal loan",
    "SME financing",
    "investment platform",
    "CBN licensed lender",
  ],
  authors: [{ name: "RhynoCredit" }],
  creator: "RhynoCredit",
  publisher: "RhynoCredit",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://rhynocredit.com",
    title: "RhynoCredit — Fast, Flexible, and Secure Loans for Everyone",
    description:
      "Empowering individuals and businesses with reliable financial solutions designed for growth.",
    siteName: "RhynoCredit",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "RhynoCredit website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RhynoCredit",
    title: "RhynoCredit — Fast, Flexible, and Secure Loans for Everyone",
    description:
      "From personal loans to business growth funding, RhynoCredit provides fast, secure, and flexible financing.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://rhynocredit.com",
  },
  category: "Finance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-theme text-theme-text transition-colors duration-300`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
