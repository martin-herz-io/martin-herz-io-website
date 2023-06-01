// React imports
import React from 'react';
import {Icon} from "./Icon";

// Component
export const OverviewSection: React.FC = () => {

    const l = [
        {
            name: "Full Stack Development",
            icon: "code-slash"
        },

        {
            name: "Webdesign",
            icon: "desktop"
        },
        {
            name: "Grafik & Corporate Design",
            icon: "brush"
        },
        {
            name: "Bild- & Videobearbeitung",
            icon: "cut"
        }
    ]

    // HTML Return
    return (
        <div className={"container rounded-6xl flex flex-col items-center gap-4"}>
            <h2 className={"font-light text-lg"}>{`— Überblick —`}</h2>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full"}>
                {l.map((item, index) => {
                   return (
                       <div key={index} className={"bg-zinc-800 rounded-3xl p-5 flex flex-col items-center justify-center gap-3"}>
                           <Icon name={item.icon} className={"w-16 opacity-60"} />
                           <p className={"text-xl"}>{item.name}</p>
                       </div>
                   )
                })}
            </div>
        </div>
    )
}