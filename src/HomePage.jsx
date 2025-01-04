import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AppSection from "./components/AppSection";
import About from "./components/About";
import Footer from "./components/Footer";
import { ClientImages, ServerImages } from "./Images";
import SEO from "./components/SEO";

const HomePage = () => {
  const clientFeatures = [
    "Files Zipping",
    "Auto-Connect",
    "Drag & Drop Functionality",
    "Real-Time Updates",
    "Dark/Light Theme",
  ];

  const serverFeatures = [
    "Manage Connections",
    "Monitor File Transfers",
    "User Management",
    "Real-Time Updates",
    "Customizable Settings",
  ];

  return (
    <div>
      <SEO
        title="Secure & Fast File Transfer | TransferX"
        description="Transfer large files securely and easily over your local network with TransferX. Drag & drop files, no account needed. Fast, secure, and reliable."
        keywords="file transfer, large file transfer, local network transfer, secure file transfer, send files online, free file transfer, TransferX"
        canonical="https://transferx.netlify.app/"
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
      <main>
        <Hero />
        <Features />

        <>
          <AppSection
            type="client"
            downloadLink={
              "https://ahad324.github.io/TransferXClient/TransferX.exe"
            }
            features={clientFeatures}
            images={ClientImages}
          />
          <AppSection
            type="server"
            downloadLink={
              "https://ahad324.github.io/TransferXServer/TransferXServer.exe"
            }
            features={serverFeatures}
            images={ServerImages}
          />
        </>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
