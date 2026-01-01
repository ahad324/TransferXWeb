"use client";

import { ReactLenis } from "lenis/react";

export default function ClientLayout({ children }) {
    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    );
}
