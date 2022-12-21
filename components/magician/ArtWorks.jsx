import Image from "next/image";

import ticket1 from "../../public/assets/art-works/魔夜票正面.jpg";
import ticket2 from "../../public/assets/art-works/魔夜票背面.jpg";
import magicNightPoster from "../../public/assets/art-works/魔夜海報.jpg";
import coolCard1 from "../../public/assets/art-works/迎晚酷卡正面.jpg";
import coolCard2 from "../../public/assets/art-works/迎晚酷卡背面.jpg";
import welcomePoster from "../../public/assets/art-works/迎晚海報.jpg";
import logo from "../../public/assets/art-works/社套LOGO.jpg";
import weekend from "../../public/assets/art-works/周聚一.jpg";
import program1 from "../../public/assets/art-works/節目單正面.jpg";
import program2 from "../../public/assets/art-works/節目單背面.jpg";
import leaflet1 from "../../public/assets/art-works/黑白傳單1.jpg";
import leaflet2 from "../../public/assets/art-works/黑白傳單2.jpg";

const ArtWorks = () => {
  return (
    <section className="w-4/5 m-10">
      <h2 className="text-center">Other Works</h2>

      <div className="bg-black flex flex-col gap-y-2 p-4 md:p-8">
        <div className="w-full flex items-start justify-center gap-x-[2%] ">
          <div className="w-[37%] flex flex-col gap-y-2 md:gap-y-4">
            <Image src={ticket1} alt="魔夜票正面" />
            <Image src={ticket2} alt="魔夜票背面" />
          </div>
          <div className="w-[50%] flex">
            <Image src={magicNightPoster} alt="魔夜海報" />
          </div>
        </div>

        <div className="w-full flex items-end justify-center gap-x-[1%]">
          <div className="w-[20%] flex flex-col gap-y-2 md:gap-y-4">
            <Image src={coolCard1} alt="迎晚酷卡正面" />
            <Image src={coolCard2} alt="迎晚酷卡背面" />
          </div>
          <div className="w-[21%]">
            <Image src={welcomePoster} alt="迎晚海報" />
          </div>
          <div className="w-[22%] ">
            <Image src={weekend} alt="周聚一" />
          </div>
          <div className="w-[10%] flex flex-col gap-y-1 md:gap-y-2">
            <Image src={leaflet2} alt="黑白傳單2" />
            <Image src={leaflet1} alt="黑白傳單1" />
          </div>
          <div className="w-[12%] flex flex-col gap-y-1 md:gap-y-2">
            <Image src={program1} alt="節目單正面" />
            <Image src={program2} alt="節目單背面" />
            <Image src={logo} alt="社套LOGO" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtWorks;
