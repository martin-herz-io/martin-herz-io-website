// React imports
import React, {useEffect, useState} from 'react';

// Component
export const Header: React.FC = () => {

    // Get Name from github
    const [name, setName] = useState<string | null>(null)

    // Fetch profile
    useEffect(() => {
        fetch("https://api.github.com/users/martin-herz-io")
            .then((response) => response.json())
            .then((data) => {
                setName(data.name);
            })
    }, []);

    // HTML Return
    return (
        <div className={"width-full bg-zinc-900"}>
            <div className={"container mx-auto py-8 flex flex-col md:flex-row items-center"}>
                <div className={""}>
                    <h1 className={"text-2xl font-semibold mt-0.5 text-zinc-300"}>{name}</h1>
                </div>

                <div className={"md:ml-auto flex gap-3 items-center"}>
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