import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Intro from "../components/developer/Intro";
import Portfolio from "../components/developer/Portfolio";
import Skills from "../components/developer/Skills";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yu-Chun Hsieh</title>
        <meta name="description" content="謝侑均的個人網站及作品集" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <header id="top" />
      <section className="animate-curtainUp w-full fixed bottom-0 bg-blue-500 z-50" />
      <main className="flex flex-col items-center gap-y-10 my-5">
        <Intro />
        <Portfolio />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
