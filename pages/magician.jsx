import Head from "next/head";
import Intro from "../components/Intro";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const magician = ({ fadingOut, setFadingOut }) => {
  return (
    <>
      <Head>
        <title>Magician YJ</title>
        <meta name="description" content="謝侑均的個人網站及作品集" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <header id="top" />
      <section className="animate-curtain w-full fixed top-0 bg-green-600 z-50" />
      <main className="flex flex-col items-center gap-y-10 my-5">
        <Intro />
      </main>
      <Footer />
    </>
  );
};

export default magician;
