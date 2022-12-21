import React, { useEffect, useState } from "react";
import { TbFlower } from "react-icons/tb";

const YearBox = ({ children, title, left }) => {
  const boxOffset = left ? "md:right-40" : "md:left-40";
  const dotOffset = left ? "md:left-auto md:-right-11" : "";
  const lineOffset = left ? "md:-translate-x-16" : "";
  return (
    <div
      id={"year" + title}
      className={`relative w-64 bg-white my-3 p-3 rounded-xl opacity-0 ${boxOffset}`}
    >
      <div
        id="time-dot"
        className={`absolute bg-white p-1 rounded-full flex items-center -left-11 ${dotOffset}`}
      >
        <TbFlower className="text-pink-500 z-50" />
        <div className={`absolute w-16 h-2 bg-white z-0 ${lineOffset}`} />
      </div>
      <div>
        <h6 className="relative z-50 ">{title}</h6>
        {children}
      </div>
    </div>
  );
};

// icon 跟線的重疊方式
// [mobile] box w-64 對齊中間, icon 從 box 左邊位移, timeline 從中間位移
// [PC] 對齊中間即可

// one by one 出現的動畫用 id 控制
// 監控元素來讓動畫在進入 view 的時候播放
const Timeline = () => {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, owner) => {
        entries.forEach((entry) => {
          if (entry.target.id === "timeline") {
            if (entry.isIntersecting) {
              setAnimation("timeAnimation");
            } else {
              setAnimation("");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector("#timeline"));
  }, []);
  return (
    <section
      id="timeline"
      className="w-full bg-gradient-to-b from-black to-purple-800 "
    >
      <h3 className="text-center text-white my-3">Where magic happened...</h3>
      <div
        id={animation}
        className="relative w-full flex flex-col items-center"
      >
        {/* 畫兩條線，第一條用來當正中間參考點 */}
        <div className="absolute w-2 h-full bg-transparent">
          <div className="relative w-2 h-full right-40 bg-white md:right-0 z-0" />
        </div>

        <YearBox title={2016} left>
          <p>PSY 魔術大賽 高中組 1st prize</p>
          <p>附中迎新午會</p>
          <p>搖滾馬戲團 舞台魔術客串</p>
        </YearBox>
        <YearBox title={2017}>
          <p>808 魔術大賽</p>
          <p>附中校慶晚會</p>
          <p>FMRC 成發《K》</p>
        </YearBox>
        <YearBox title={2019} left>
          <p>資管之夜</p>
        </YearBox>
        <YearBox title={2020}>
          <p>台大魔幻之夜《魔物館驚魂夜》</p>
        </YearBox>
        <YearBox title={2021} left>
          <p>TMA 獨角獸行動 特別獎</p>
        </YearBox>
        <YearBox title={2022}>
          <p>NTUMAGIC 迎新晚會 壓軸演出</p>
        </YearBox>
      </div>
    </section>
  );
};

export default Timeline;
