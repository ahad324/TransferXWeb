import AboutContent from "@/views/About";
import PageWrapper from "@/components/PageWrapper";

export const metadata = {
    title: "About TransferX | Secure Offline File Transfers for Education",
    description: "Explore TransferX – the innovative offline file transfer solution that simplifies exam file submissions and ensures secure data management for educational institutions.",
    keywords: "TransferX, offline file transfer, secure exam file submission, educational tech solutions, local network file transfer, exam automation, education innovation",
    alternates: {
        canonical: "https://transferx.netlify.app/about",
    },
    openGraph: {
        title: "About TransferX | Revolutionizing File Transfers in Education",
    },
};

export default function About() {
    return (
        <PageWrapper>
            <AboutContent />
        </PageWrapper>
    );
}
