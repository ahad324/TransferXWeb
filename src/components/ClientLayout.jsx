"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial load like in the original App.jsx
        setIsLoading(false);
    }, []);

    return (
        <ReactLenis root>
            {isLoading ? (
                <Loader ClassName="h-screen w-full bg-[background-color]" />
            ) : (
                <>{children}</>
            )}
        </ReactLenis>
    );
}
