// React imports
import React from 'react';

// Component
export const RepositoryList: React.FC = () => {

    // Repository List from GitHub
    const [repositoryList, setRepositoryList] = React.useState<any[]>([])

    // Fetch Repository List
    React.useEffect(() => {
        fetch("https://api.github.com/users/martin-herz-io/repos")
            .then(response => response.json())
            .then(data => setRepositoryList(data))
    }, [])

    // HTML Return
    return (
        <div className={"container mx-auto rounded-6xl flex flex-col items-center gap-4"}>
            <h2 className={"font-light text-lg"}>— Meine Repositories —</h2>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"}>
                {repositoryList.map((repository, index) => {
                    return (
                        <div key={index} className={"bg-zinc-800 rounded-2xl p-5 flex flex-col gap-2"}>
                            <div className={"flex flex-row items-center justify-between"}>
                                <h3 className={"font-semibold text-xl text-zinc-300"}>{repository.name}</h3>

                                <a href={repository.html_url} target={"_blank"} rel={"noopener noreferrer"} className={"w-fit text-md font-regular text-zinc-300 hover:text-indigo-500 transition-all duration-300"}>
                                    Auf GitHub ansehen
                                </a>
                            </div>

                            <p className={"font-regular text-base text-zinc-400 mb-auto"}>{repository.description}</p>

                            <div className={"flex flex-row gap-2"}>
                                {repository.language && (
                                    <div className={"flex flex-row items-center gap-1"}>
                                        <div className={"w-3 h-3 rounded-full bg-zinc-300"}></div>
                                        <p className={"font-regular text-base text-zinc-400"}>{repository.language}</p>
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