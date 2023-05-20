// React imports
import React from 'react';
import {Icon} from "./Icon";

// Import components


// Component
export const RepositoryList: React.FC = () => {

    // Repository List from GitHub
    const [repositoryList, setRepositoryList] = React.useState<any[]>([])

    // Fetch Repository List sort by last updated
    React.useEffect(() => {
        fetch("https://api.github.com/users/martin-herz-io/repos?sort=updated")
            .then(response => response.json())
            .then(data => setRepositoryList(data))
    }, [])

    // HTML Return
    return (
        <div className={"container rounded-6xl flex flex-col items-center gap-4"}>
            <h2 className={"font-light text-lg"}>— Meine Repositories —</h2>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"}>
                {repositoryList.map((repository, index) => {
                    return (
                        <div key={index} className={"bg-zinc-800 rounded-3xl p-5 flex flex-col gap-3"}>
                            <div className={"flex flex-row items-center justify-between"}>
                                <h3 className={"font-semibold text-xl text-zinc-300"}>{repository.name}</h3>

                                <a href={repository.html_url} target={"_blank"} rel={"noopener noreferrer"} className={"flex items-center gap-1 w-fit text-md font-regular text-zinc-300 hover:text-indigo-500 transition-all duration-300"}>
                                    <Icon name={"logo-github"} className={"w-5 -translate-y-0.5"} />
                                    GitHub
                                </a>
                            </div>

                            <p className={"font-regular text-base text-zinc-400 mb-auto"}>{repository.description}</p>

                            <div className={"flex flex-row flex-wrap gap-x-4 gap-y-2"}>
                                <div className={"flex flex-row items-center gap-1"}>
                                    <Icon name={"star"} className={"w-5 text-zinc-300"} />
                                    <p className={"font-regular text-sm text-zinc-300"}>{repository.stargazers_count}</p>
                                </div>

                                {repository.language && (
                                    <div className={"flex flex-row items-center gap-1"}>
                                        <Icon name={"code-slash"} className={"w-5 text-zinc-300"} />
                                        <p className={"font-regular text-sm text-zinc-300"}>{repository.language}</p>
                                    </div>
                                )}

                                {repository.license && (
                                    <div className={"flex flex-row items-center gap-1"}>
                                        <Icon name={"shield-checkmark"} className={"w-5 text-zinc-300"} />
                                        <p className={"font-regular text-sm text-zinc-300"}>{repository.license.spdx_id}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}