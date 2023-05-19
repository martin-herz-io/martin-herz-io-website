// React imports
import React from 'react';

// Properties
export type Props = {
    title: string,
    logos: string[],
}

// Component
export const LogoCarousel: React.FC<Props> = ({title, logos}) => {

    // HTML Return
    return (
        <div className={"md:container flex flex-col items-center gap-4"}>
            <h2 className={"font-light text-lg"}>{`— ${title} —`}</h2>
            <div className={"w-full bg-zinc-800 py-12 md:py-16 md:rounded-full marquee-hover-pause overflow-hidden"}>
                <div className={"marquee opacity-50"}>
                    <div className={"marquee-content"}>
                        {logos.map((logo, index) => {
                            return (
                                <img key={index} alt={logo} src={logo} className={"h-6 md:h-8 saturate-0"} />
                            )
                        })}
                    </div>
                    <div className={"marquee-content"} aria-hidden={true}>
                        {logos.map((logo, index) => {
                            return (
                                <img key={index} alt={logo} src={logo} className={"h-6 md:h-8 saturate-0"} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}