import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, canonical, ogImage, ogTitle }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage || "/assets/logo.svg"} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "TransferX",
          operatingSystem: "Windows, macOS",
          applicationCategory: "File Transfer",
          description:
            "TransferX allows secure, offline file transfers for educational institutions, streamlining exam submissions.",
          offers: {
            "@type": "Offer",
            price: "Free",
            priceCurrency: "USD",
          },
          url: "https://transferx.netlify.app/",
          image: "https://transferx.netlify.app/assets/logo.svg",
          author: {
            "@type": "Person",
            name: "Abdul Ahad",
          },
          publisher: {
            "@type": "Organization",
            name: "TransferX",
            logo: {
              "@type": "ImageObject",
              url: "https://transferx.netlify.app/assets/logo.svg",
            },
          },
        })}
      </script>

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || "/default-og-image.jpg"} />
    </Helmet>
  );
};

export default SEO;
