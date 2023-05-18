// React imports
import React, {useEffect} from 'react';

// Component
export const IntroSection: React.FC = () => {

    // Current profile image
    const [profileImage, setProfileImage] = React.useState<string>("")

    // Fetch profile image
    useEffect(() => {
        fetch("https://api.github.com/users/martin-herz-io")
            .then((response) => response.json())
            .then((data) => {
                setProfileImage(data.avatar_url);
            })
    }, []);



    // Word changer
    const [index, setIndex] = React.useState<number>(0)
    const [displayText, setDisplayText] = React.useState<string>("")
    const words = [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Web Developer",
        "Web Designer",
        "Grafik Designer",
        "UI/UX Designer",
        "Brand Designer"
    ]

    // Change word every 4 seconds (random word)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(Math.floor(Math.random() * words.length));
        }, 3600);

        return () => clearInterval(interval);
    }, []);

    // Change display text on word change (write word)
    useEffect(() => {
        const word = words[index];
        let currentWord = "";
        let currentWordIndex = 0;

        const interval = setInterval(() => {
            if (currentWordIndex === word.length) {
                setDisplayText(word);
                clearInterval(interval);
                return;
            } else {
                currentWord += word[currentWordIndex];
                setDisplayText(currentWord);
                currentWordIndex++;
            }
        }, 100);

        return () => clearInterval(interval);
    }, [index]);



    // HTML Return
    return (
        <div className={"container mx-auto rounded-6xl flex flex-col items-center gap-4"}>
            <img src={profileImage} alt={"Profile image"} className={"w-36 h-36 rounded-full outline outline-offset-4 outline-2 outline-indigo-500 shadow-[0_20px_120px_-5px] shadow-indigo-500/50"} />

            <div className={"flex gap-1 mt-2"}>
                <p className={"text-zinc-300"}>Moin, ich bin</p>
                <p className={"text-indigo-500"}>Martin</p>
                <p>👋🏼</p>
            </div>

            <div className={"flex gap-1.5 text-2xl font-semibold"}>
                <p className={"text-zinc-300 pl-2"}>Ich bin ein</p>
                <p className={"text-indigo-500 tipping-point"}>{displayText}</p>
            </div>
        </div>
    )
}