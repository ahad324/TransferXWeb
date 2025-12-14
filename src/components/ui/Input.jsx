import React from "react";
import { twMerge } from "tailwind-merge";

export const Input = ({
    label,
    id,
    className,
    error,
    ...props
}) => {
    return (
        <div className="flex flex-col gap-2 w-full items-start">
            {label && (
                <label htmlFor={id} className="text-sm font-medium opacity-90">
                    {label}
                </label>
            )}
            <input
                id={id}
                className={twMerge(
                    "bg-[--bg-dark] border border-[--border-color] rounded-lg px-4 py-3 focus:outline-none focus:border-[--primary-color] transition-colors w-full",
                    error && "border-red-500 focus:border-red-500",
                    className
                )}
                {...props}
            />
            {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
    );
};

export const Textarea = ({
    label,
    id,
    className,
    error,
    ...props
}) => {
    return (
        <div className="flex flex-col gap-2 w-full items-start">
            {label && (
                <label htmlFor={id} className="text-sm font-medium opacity-90">
                    {label}
                </label>
            )}
            <textarea
                id={id}
                className={twMerge(
                    "bg-[--bg-dark] border border-[--border-color] rounded-lg px-4 py-3 focus:outline-none focus:border-[--primary-color] transition-colors w-full min-h-[120px]",
                    error && "border-red-500 focus:border-red-500",
                    className
                )}
                {...props}
            />
            {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
    );
};
