import SolutionsContent from "@/views/Solutions";
import PageWrapper from "@/components/PageWrapper";

export const metadata = {
    title: "TransferX Solutions | Universal Offline Data Collection",
    description: "Discover how TransferX solves secure file transfer challenges for Education, Enterprise, and Creative Professionals without internet.",
    keywords: "exam file collection, secure corporate transfer, offline file sharing, lan transfer software",
    alternates: {
        canonical: "https://transferx.netlify.app/solutions",
    },
    openGraph: {
        title: "TransferX Solutions | Secure & Fast Offline Transfers",
    },
};

export default function Solutions() {
    return (
        <PageWrapper>
            <SolutionsContent />
        </PageWrapper>
    );
}
