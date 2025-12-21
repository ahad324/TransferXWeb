import HomeContent from "@/views/Home";

export const metadata = {
    title: "TransferX - Secure & Fast Offline File Transfers",
    description: "TransferX - Secure, Fast, and Effortless File Transfers across your local network. Enjoy private, offline file sharing with drag-and-drop simplicity.",
    keywords: "file transfer, large file transfer, local network transfer, secure file transfer, send files online, free file transfer, TransferX",
    alternates: {
        canonical: "https://transferx.netlify.app/",
    },
    openGraph: {
        title: "TransferX | Secure Offline File Transfers for Exams and Labs",
    },
};

export default function Home() {
    return (
        <HomeContent />
    );
}
