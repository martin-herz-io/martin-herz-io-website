// Next imports
import React from "react";
import type { NextPage } from 'next'
import Head from 'next/head'

// Component imports
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {IntroSection} from "../components/IntroSection";
import {RepositoryList} from "../components/RepositoryList";
import {LogoCarousel} from "../components/LogoCarousel";
import {OverviewSection} from "../components/OverviewSection";

const Home: NextPage = () => {

    return (
        <>
            <Head>
                <title>{`Martin-Andree Herz`}</title>
                <link rel="icon" href="/Logo/Icon/colored-black.png" />
            </Head>

            <main className={"flex flex-col gap-16 md:gap-40 min-h-screen"}>

                <Header/>

                <IntroSection />

                <OverviewSection />

                <LogoCarousel
                    title={"Meine Projekte"}
                    logos={[
                        "/projects/bettervisuals.png",
                        "/projects/diamod.png",
                        "/projects/catcrypter.png",
                    ]}
                />

                <LogoCarousel
                    title={"Meine Kenntnisse"}
                    logos={[
                        "/knowledge/typescript.png",
                        "/knowledge/react.png",
                        "/knowledge/nextjs.png",
                        "/knowledge/nodejs.png",
                        "/knowledge/mariadb.png",
                        "/knowledge/git.png",
                        "/knowledge/vanilla-web.png",
                    ]}
                />

                <LogoCarousel
                    title={"Meine Tools"}
                    logos={[
                        "/tools/creative-cloud.png",
                        "/tools/figma.svg",
                        "/tools/webstorm.png",
                        "/tools/datagrip.png",
                        "/tools/postman.svg",
                        "/tools/github.png",
                    ]}
                />

                <RepositoryList />

                <Footer />

            </main>
        </>
    )
}

export default Home