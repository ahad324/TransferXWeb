import { Poppins, Lobster } from "next/font/google";
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
    description: "TransferX - The Universal Offline Data Collection Tool. Secure, fast, and resumable file transfers for Exams, Corporate, and Creative Studios without internet.",
    keywords: "file transfer, local network, air-gapped, offline sharing, exam submission, resumable upload, mDNS, TransferX",
    authors: [{ name: "AbdulAhad" }],
    icons: {
        icon: "/logo.ico",
    },
    alternates: {
        canonical: "https://transferx.netlify.app/",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${poppins.variable} ${lobster.variable}`}>
            <body className="antialiased">
                <ClientLayout>
                    <Header />
                    <ScrollToTop />
                    {children}
                    <Footer />
                </ClientLayout>
            </body>
        </html>
    );
}
