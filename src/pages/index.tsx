// Next imports
import type { NextPage } from 'next'
import Head from 'next/head'

// Component imports
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {IntroSection} from "./components/IntroSection";
import {RepositoryList} from "./components/RepositoryList";
import {LogoCarousel} from "./components/LogoCarousel";

const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>{`Martin-Andree Herz`}</title>
            </Head>

            <main className={"flex flex-col gap-16 md:gap-32 min-h-screen"}>

                <Header/>

                <IntroSection />

                <LogoCarousel
                    title={"Meine Projekte & Beteiligungen"}
                    logos={[
                        "/projects/bettervisuals.png",
                        "/projects/diamod.png",
                        "/projects/catcrypter.png",
                    ]}
                />

                <RepositoryList />

                <Footer />

            </main>
        </>
    )
}

export default Home