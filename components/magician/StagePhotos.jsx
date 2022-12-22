import { useState } from "react";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const imgList = [
  "/assets/stage-photos/0.jpg",
  "/assets/stage-photos/1.jpg",
  "/assets/stage-photos/2.jpg",
  "/assets/stage-photos/3.jpg",
  "/assets/stage-photos/4.jpg",
  "/assets/stage-photos/5.jpg",
  "/assets/stage-photos/6.jpg",
  "/assets/stage-photos/7.jpg",
  "/assets/stage-photos/8.jpg",
];

const StagePhotos = () => {
  const [number, setNumber] = useState(0);
  const prevPhoto = () => {
    setNumber((prev) => {
      if (prev === 0) {
        return imgList.length - 1;
      } else {
        return prev - 1;
      }
    });
  };
  const nextPhoto = () => {
    setNumber((prev) => {
      if (prev === imgList.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };
  const choosePhoto = (index) => {
    setNumber(index);
  };

  return (
    <section id="stagePhotos" className="w-full m-10">
      <h2 className="text-center mb-5">Stage Photography</h2>
      <div className="w-full h-[30vh] md:h-[80vh] bg-black relative">
        {imgList.map((imgSrc, index) => (
          <Image
            key={index}
            src={imgSrc}
            alt="舞台照片"
            fill
            style={{ objectFit: "contain" }}
            sizes="100vw, (max-width:768px) 80vw"
            className={`${index === number ? "" : "opacity-0"} duration-500`}
          />
        ))}
        <button
          onClick={prevPhoto}
          className="w-1/4 h-full absolute left-0 flex justify-center items-center cursor-pointer"
        >
          <FaAngleLeft className="text-white text-3xl opacity-50" />
        </button>
        <button
          onClick={nextPhoto}
          className="w-1/4 h-full absolute right-0 flex justify-center items-center"
        >
          <FaAngleRight className="text-white text-3xl opacity-50" />
        </button>
        <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-x-2">
          {imgList.map((_, index) => (
            <button key={index} onClick={() => choosePhoto(index)}>
              <div
                className={`w-7 h-1 bg-white duration-500 ${
                  index === number ? "opacity-100" : "opacity-50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StagePhotos;
