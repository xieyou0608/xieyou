import Image from "next/image";
import SocialLinks from "./layout/SocialLinks";

const Intro = () => {
  return (
    <section
      id="intro"
      className="my-6 flex flex-col justify-center items-center"
    >
      <Image
        src="/assets/portrait.jpg"
        alt="個人照"
        width={500}
        height={500}
        className="w-[50vmin] rounded-full"
        priority
        as="style"
      />
      <div className="ml-[10vmin] w-[50vmin]"></div>
      <h1 className="font-[Raleway]">Yu-Chun Hsieh</h1>
      <h3>Web Developer</h3>
      <SocialLinks />
    </section>
  );
};

export default Intro;
