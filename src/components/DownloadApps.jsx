import React from "react";
import AppSection from "@components/AppSection";
import { ClientImages, ServerImages } from "@src/Images";

const DownloadApps = () => {
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
