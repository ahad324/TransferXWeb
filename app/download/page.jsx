import DownloadContent from "@/views/Download";
import PageWrapper from "@/components/PageWrapper";

export const metadata = {
    title: "Download TransferX - Fast Offline File Transfer",
    description: "Download TransferX for Windows. Secure, fast, and offline file transfers for your local network.",
    keywords: "download transferx, file transfer software, offline file sharing, windows file transfer",
    alternates: {
        canonical: "https://transferx.netlify.app/download",
    },
    openGraph: {
        title: "Download TransferX | Secure Offline File Transfers",
    },
};

export default function Download() {
    return (
        <DownloadContent />
    );
}
