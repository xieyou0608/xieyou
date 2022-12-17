import Image from "next/image";
import SocialLinks from "./layout/SocialLinks";
import { GiButterflyFlower } from "react-icons/gi";
import { useRouter } from "next/router";

const Intro = () => {
  const router = useRouter();
  const magic = router.pathname === "/magician";
  const changePage = () => {
    if (!magic) {
      router.push("/magician");
    } else {
      router.push("/");
    }
  };

  return (
    <section
      id="intro"
      className="my-6 flex flex-col justify-center items-center"
    >
      <div className="relative">
        <Image
          src={magic ? "/assets/magic-portrait.jpg" : "/assets/portrait.jpg"}
          alt="個人照"
          width={500}
          height={500}
          className={`w-[50vmin] rounded-full animate-fadeIn z-0`}
          priority
          as="style"
        />
        <div
          onClick={changePage}
          className="absolute right-0 bottom-0 rounded-full p-2  bg-slate-700 hover:bg-green-800 hover:shadow-green-300 hover:shadow-xl duration-500 cursor-pointer group"
        >
          <GiButterflyFlower className="w-[5vmin] h-[5vmin] text-pink-300 group-hover:text-white" />
        </div>
      </div>
      <h1 className="font-[Raleway]">Yu-Chun Hsieh</h1>
      <h3>{magic ? "magician" : "Web Developer"}</h3>
      <SocialLinks />
    </section>
  );
};

export default Intro;
