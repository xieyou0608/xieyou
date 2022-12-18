import React from "react";
import Image from "next/image";

const AboutMagic = () => {
  return (
    <>
      <section
        id="aboutMagic"
        className="relative w-full h-[40vh] md:h-[80vh] bg-black "
      >
        <div className="absolute w-1/2 h-full flex justify-center items-center z-50">
          <table>
            <tbody className="md:text-xl text-white md:[&_td]:p-3">
              <tr>
                <td>附中魔術社</td>
                <td>教學長</td>
              </tr>
              <tr>
                <td>台大魔術社</td>
                <td>公關長</td>
              </tr>
              <tr>
                <td>台大魔術社</td>
                <td>副社長</td>
              </tr>
              <tr>
                <td>演出經歷</td>
                <td>七年</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="absolute right-0 w-[100vw] h-full md:w-[50vw] md:right-[10vw]">
          <Image
            src="/assets/magic-portrait.jpg"
            alt="演出照"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw, (max-width: 768px) 70vw"
            className={"animate-fadeIn flex"}
            as="style"
          />
        </div>
      </section>
      <section className="w-full h-[20vh] bg-black border-none"></section>
    </>
  );
};

export default AboutMagic;
