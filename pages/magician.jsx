import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Landing from "../components/magician/Landing";
import AboutMagic from "../components/magician/AboutMagic";
import TimeLine from "../components/magician/Timeline";
import StagePhotos from "../components/magician/StagePhotos";
import MagicSkills from "../components/magician/MagicSkills";
import ArtWorks from "../components/magician/ArtWorks";

const magician = ({ fadingOut, setFadingOut }) => {
  return (
    <>
      <Head>
        <title>YJ</title>
        <meta name="description" content="謝侑均的個人網站及作品集" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <header id="top" />
      <section className="animate-curtainUp w-full fixed top-0 bg-black z-50" />
      <main className="flex flex-col items-center">
        <Landing />
        <AboutMagic />
        <TimeLine />
        <MagicSkills />
        <StagePhotos />
        <ArtWorks />
      </main>
      <Footer />
    </>
  );
};

export default magician;
