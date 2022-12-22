import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <>
      <section className="w-full">
        <div className="w-full min-h-screen relative">
          <Image
            src="/assets/main_back.jpg"
            alt="表演照"
            fill // it will set the image to absolute
            style={{ objectFit: "cover", objectPosition: "20%" }}
            sizes="100vw"
            as="style"
          />
          <div className="absolute text-white bottom-[20%] left-1/3 lg:bottom-1/3  lg:left-[55%]">
            <h3>Yu-Chun Hsieh</h3>
            <h3 className="font-normal">魔術|舞台展演</h3>
          </div>
        </div>
      </section>
      <section className="w-full h-[80vh] bg-gradient-to-b from-purple-800 to-black text-white flex flex-col items-center justify-center">
        <h3 className="relative md:right-[20vw] font-shadows font-normal">
          I don't play magic...
        </h3>
        <h3 className="relative md:top-16  md:left-[10vw] font-shadows font-normal">
          because it happens in your heart!
        </h3>
      </section>
    </>
  );
};

export default Landing;
