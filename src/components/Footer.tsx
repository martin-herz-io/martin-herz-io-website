// React imports
import React from 'react';
import {Icon} from "./Icon";

// Component
export const Footer: React.FC = () => {

    // HTML Return
    return (
        <div className={"w-full bg-zinc-900 mt-auto text-center py-6"}>
            <p className={"text-sm md:text-base font-light opacity-60"}>
                © Copyright 2023 Martin-Andree Herz - All Rights Reserved.
            </p>
            <div className={"flex items-center justify-center gap-0.5 md:gap-1"}>
                <p className={"font-light text-xs md:text-sm opacity-60"}>
                    Made with Next.js, Tailwind CSS and
                </p>
                <Icon name={"heart"} className={"w-3.5 md:w-4 -translate-y-0.5 text-rose-500 animate-pulse"} />
                <p className={"font-light text-xs md:text-sm opacity-60"}>
                    by Martin-Andree Herz
                </p>
            </div>
            <div className={"flex items-center justify-center gap-1"}>
                <p className={"font-light text-xs md:text-sm opacity-60"}>
                    Hosted by
                </p>
                <a href={"https://bettervisuals.io/"} target={"_blank"} rel={"noopener noreferrer"} className={" text-xs md:text-sm text-[#9b57d5] decoration-2 hover:underline"}>
                    BetterVisuals
                </a>
            </div>
        </div>
    )
}