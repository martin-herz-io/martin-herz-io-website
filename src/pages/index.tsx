// Next imports
import type { NextPage } from 'next'
import Head from 'next/head'

// Component imports
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {IntroSection} from "./components/IntroSection";
import {RepositoryList} from "./components/RepositoryList";

const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>{`Martin-Andree Herz`}</title>
            </Head>

            <main className={"flex flex-col gap-20 min-h-screen"}>

                <Header/>

                <IntroSection />

                <RepositoryList />

                <Footer />

            </main>
        </>
    )
}

export default Home