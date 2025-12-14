import React from "react";
import AppSection from "@components/AppSection";
import { ClientImages, ServerImages } from "@src/Images";

const DownloadApps = () => {
  const clientFeatures = [
    "Smart Resume Support",
    "Auto Folder Zipping",
    "Drag & Drop Upload",
    "Zero-Config Discovery",
    "Dark/Light Theme",
  ];

  const serverFeatures = [
    "Live Transfer Dashboard",
    "Connection Management",
    "Activity Logging (DB)",
    "Air-Gapped Security",
    "Customizable Limits",
  ];

  return (
    <div id="downloadapps">
      <AppSection
        type="client"
        downloadLink={"https://github.com/ahad324/TransferXClient/releases/download/Installer/TransferX.exe"}
        features={clientFeatures}
        images={ClientImages}
      />
      <AppSection
        type="server"
        downloadLink={
          "https://github.com/ahad324/TransferXServer/releases/download/Installer/TransferXServer.exe"
        }
        features={serverFeatures}
        images={ServerImages}
      />
    </div>
  );
};

export default DownloadApps;
