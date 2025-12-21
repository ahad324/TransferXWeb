import InstallerDocsContent from "@/views/InstallerDocs";
import PageWrapper from "@/components/PageWrapper";

export const metadata = {
    title: "Installer Return Codes | TransferX",
    description: "Documentation for TransferX installer return codes and parameters for Microsoft Store deployment.",
    keywords: "installer codes, return values, ms store, transferx docs",
    alternates: {
        canonical: "https://transferx.netlify.app/docs/installer-error-codes",
    },
};

export default function InstallerDocs() {
    return (
        <PageWrapper>
            <InstallerDocsContent />
        </PageWrapper>
    );
}
