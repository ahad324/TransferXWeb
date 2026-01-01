"use client";
import React from "react";
import DownloadsSection from "../components/DownloadsSection";
import SectionWrapper from "@/components/ui/SectionWrapper";

const Download = () => {
    return (
        <div className="page-wrapper">
            <SectionWrapper>
                <DownloadsSection />
            </SectionWrapper>
        </div>
    );
};

export default Download;
