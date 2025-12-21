import ContactContent from "@/views/Contact";
import PageWrapper from "@/components/PageWrapper";

export const metadata = {
    title: "Contact TransferX | Get in Touch for Demos and Partnerships",
    description: "Contact TransferX for any inquiries or support. We are here to help you with your file transfer needs.",
    keywords: "TransferX contact, file transfer support, TransferX inquiries",
    alternates: {
        canonical: "https://transferx.netlify.app/contact",
    },
    openGraph: {
        title: "Contact TransferX | Get in Touch for Demos and Partnerships",
    },
};

export default function Contact() {
    return (
        <PageWrapper>
            <ContactContent />
        </PageWrapper>
    );
}
