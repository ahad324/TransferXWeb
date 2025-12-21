import NotFoundContent from "@/views/NotFound";
import PageWrapper from "@/components/PageWrapper";

export const metadata = {
    title: "404 | Page Not Found - TransferX",
    description: "Oops! The page you're looking for doesn't exist. Return to the homepage to explore TransferX.",
};

export default function NotFound() {
    return (
        <PageWrapper>
            <NotFoundContent />
        </PageWrapper>
    );
}
