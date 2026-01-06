import { Poppins, Lobster } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

const lobster = Lobster({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-lobster",
});

export const metadata = {
    title: "TransferX - Secure & Fast Offline File Transfers",
    description: "TransferX - The Offline Data Collection Tool. Secure, fast, and resumable file transfers for Exams, Corporate, and Creative Studios without internet.",
    keywords: "file transfer, local network, air-gapped, offline sharing, exam submission, resumable upload, mDNS, TransferX",
    authors: [{ name: "AbdulAhad" }],
    icons: {
        icon: "/logo.ico",
    },
    alternates: {
        canonical: "https://transferx.netlify.app/",
    },
    verification: {
        google: "_t_voY5kuMVEL4CtmBOVDuZ0j6_MRBKwBxG5mDwkK90",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${poppins.variable} ${lobster.variable}`}>
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-27ZSNBMB0T"
                    strategy="afterInteractive"
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-27ZSNBMB0T');
          `}
                </Script>
            </head>
            <body className="antialiased flex flex-col min-h-screen">
                <ClientLayout>
                    <Header />
                    <ScrollToTop />
                    <main className="flex-grow min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </ClientLayout>
            </body>
        </html>
    );
}
