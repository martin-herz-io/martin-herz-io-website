// React imports
import React, {useEffect} from 'react';

// Component
export const IntroSection: React.FC = () => {

    // Current profile image and name
    const [profileImage, setProfileImage] = React.useState<string>("")
    const [name, setName] = React.useState<string | null>(null)

    // Fetch profile image and name
    useEffect(() => {
        fetch("https://api.github.com/users/martin-herz-io")
            .then((response) => response.json())
            .then((data) => {
                // Set profile image
                setProfileImage(data.avatar_url);

                // Set first name
                setName(data.name.split(" ")[0].split("-")[0]);
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

    // Change word every 3.6 seconds (pick random word & not the same word twice)
    useEffect(() => {
        const interval = setInterval(() => {
            let newIndex = Math.floor(Math.random() * words.length);
            if (newIndex === index) {
                newIndex = Math.floor(Math.random() * words.length);
            }
            setIndex(newIndex);
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
        <div className={"container rounded-6xl flex flex-col items-center gap-4"}>
            <img src={profileImage} alt={"Profile image"} className={"w-36 h-36 rounded-full outline outline-offset-4 outline-2 outline-[#9b57d5] shadow-[0_20px_120px_-5px] shadow-[#9b57d5]/50"} />

            <div className={"flex gap-1 mt-2"}>
                <p className={"text-zinc-300"}>Moin, ich bin</p>
                <p className={"text-[#9b57d5]"}>{name}</p>
                <p>👋🏼</p>
            </div>

            <div className={"flex gap-1.5 text-2xl font-semibold"}>
                <p className={"text-zinc-300 pl-2"}>Ich bin ein</p>
                <p className={"text-[#9b57d5] tipping-point"}>{displayText}</p>
            </div>
        </div>
    )
}