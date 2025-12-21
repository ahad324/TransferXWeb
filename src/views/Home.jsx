import React from "react";
import Hero from "@components/Hero";
import Features from "@components/Features";
import BentoBenchmarks from "@components/BentoBenchmarks";
import CTASection from "@components/CTASection";

const Home = () => {
  return (
    <>
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
        <CTASection />

      </div>
    </>
  );
};

export default Home;
