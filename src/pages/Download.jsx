import React from "react";
import DownloadsSection from "../components/DownloadsSection";
import SEO from "../components/SEO";

const Download = () => {
    return (
        <>
            <SEO
                title="Download TransferX - Fast Offline File Transfer"
                description="Download TransferX for Windows. Secure, fast, and offline file transfers for your local network."
                keywords="download transferx, file transfer software, offline file sharing, windows file transfer"
                canonical="https://transferx.netlify.app/download"
                ogTitle="Download TransferX | Secure Offline File Transfers"
            />
            <div className="pt-20">
                <DownloadsSection />
            </div>
        </>
    );
};

export default Download;
