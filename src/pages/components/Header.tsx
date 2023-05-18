// React imports
import React from 'react';

// Component
export const Header: React.FC = () => {

    // HTML Return
    return (
        <div className={"width-full bg-zinc-900"}>
            <div className={"container mx-auto py-8 flex items-center"}>
                <div className={""}>
                    <h1 className={"text-2xl font-semibold mt-0.5 text-zinc-300"}>Martin-Andree Herz</h1>
                </div>

                <div className={"ml-auto flex gap-3 items-center"}>
                    <a href={"https://www.linkedin.com/in/martin-andree-herz-21909823a/"} target={"_blank"} rel={"noopener noreferrer"} className={"text-md font-semibold text-zinc-500 hover:text-indigo-500 transition-all duration-300"}>
                        LinkedIn
                    </a>

                    <p className={"cursor-default text-zinc-700 font-light text-2xl"}>/</p>

                    <a href={"https://github.com/martin-herz-io"} target={"_blank"} rel={"noopener noreferrer"} className={"text-md font-semibold text-zinc-500 hover:text-indigo-500 transition-all duration-300"}>
                        GitHub
                    </a>

                    <p className={"cursor-default text-zinc-700 font-light text-2xl"}>/</p>

                    <a href={"https://www.instagram.com/martin_herz.io/"} target={"_blank"} rel={"noopener noreferrer"} className={"text-md font-semibold text-zinc-500 hover:text-indigo-500 transition-all duration-300"}>
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    )
}