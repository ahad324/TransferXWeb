"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ to, children, className, onClick, ...props }) => {
    const pathname = usePathname();
    const isActive = pathname === to;

    const resolvedClassName =
        typeof className === "function" ? className({ isActive }) : className;

    return (
        <Link href={to} className={resolvedClassName} onClick={onClick} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;
