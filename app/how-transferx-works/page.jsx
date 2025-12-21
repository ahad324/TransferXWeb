import HowItWorksContent from "@/views/HowItWorks";
import PageWrapper from "@/components/PageWrapper";

export const metadata = {
    title: "How TransferX Works | Secure Offline File Transfers",
    description: "Understand how TransferX simplifies offline file transfers for educational institutions. Explore its features and seamless integration process.",
    keywords: "TransferX, offline file transfer, exam software, client-server file sharing, mdns discovery, resumable upload, air-gapped transfer",
    alternates: {
        canonical: "https://transferx.netlify.app/how-transferx-works",
    },
    openGraph: {
        title: "How TransferX Works | Secure Offline File Transfers",
    },
};

export default function HowItWorks() {
    return (
        <PageWrapper>
            <HowItWorksContent />
        </PageWrapper>
    );
}
