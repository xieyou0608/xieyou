import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/layout/Navbar";
import Intro from "../components/Intro";
import Portfolios from "../components/developer/Portfolios";
import Skills from "../components/developer/Skills";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Yu-Chun Hsieh</title>
        <meta name="description" content="謝侑均的個人網站及作品集" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header id="top"></header>
      <Navbar />
      <main className="flex flex-col items-center gap-y-10 my-5">
        <Intro />
        <Portfolios />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
