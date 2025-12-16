import React from "react";
import Hero from "@components/Hero";
import Features from "@components/Features";
import DevelopedBy from "@components/DevelopedBy";
// import DownloadApps from "../components/DownloadApps"; // REMOVED
import DownloadsSection from "../components/DownloadsSection"; // NEW
import SEO from "@components/SEO";
import BentoBenchmarks from "../components/BentoBenchmarks";

const Home = () => {
  return (
    <>
      <SEO
        title="TransferX - Secure & Fast Offline File Transfers"
        description="TransferX - Secure, Fast, and Effortless File Transfers across your local network. Enjoy private, offline file sharing with drag-and-drop simplicity."
        keywords="file transfer, large file transfer, local network transfer, secure file transfer, send files online, free file transfer, TransferX"
        canonical="https://transferx.netlify.app/"
        ogTitle="TransferX | Secure Offline File Transfers for Exams and Labs"
      />
      <script type="application/ld+json">
        {`
            {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "TransferX",
                "description": "Secure, Fast and Effortless File Transfer across local network",
                 "applicationCategory": "Multimedia",
                 "operatingSystem": "Windows",
                 "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                },
               "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "100"
                },
                "publisher": {
                  "@type": "Organization",
                    "name":"AbdulAhad"
                }

            }
            `}
      </script>
      <div className="home-container page-wrapper">
        <Hero />
        <Features />
        <BentoBenchmarks />
        <DownloadsSection />
        <DevelopedBy />
      </div>
    </>
  );
};

export default Home;
