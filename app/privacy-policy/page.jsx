import PrivacyPolicyContent from "@/views/PrivacyPolicy";
import PageWrapper from "@/components/PageWrapper";

export const metadata = {
    title: "Privacy Policy | TransferX",
    description: "Learn how TransferX protects your data with offline-first architecture, local-only storage, and mTLS encryption.",
    keywords: "privacy policy, offline data security, local file transfer privacy, mTLS encryption",
    alternates: {
        canonical: "https://transferx.netlify.app/privacy-policy",
    },
    openGraph: {
        title: "TransferX Privacy Policy | Your Data Stays Yours",
    },
};

export default function PrivacyPolicy() {
    return (
        <PageWrapper>
            <PrivacyPolicyContent />
        </PageWrapper>
    );
}
