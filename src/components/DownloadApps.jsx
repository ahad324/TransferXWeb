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
        downloadLink={"https://ahad324.github.io/TransferXClient/TransferX.exe"}
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
    </div>
  );
};

export default DownloadApps;
