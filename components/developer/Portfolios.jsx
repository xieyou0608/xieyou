import { portfoliosList } from "./portfoliosData";
import Image from "next/image";

const ChipLink = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl  mx-2 p-2 bg-green-500 hover:bg-green-600 active:bg-green-900 duration:500"
    >
      {props.children}
    </a>
  );
};

const Portfolios = () => {
  return (
    <section id="portfolios" className="w-full flex flex-col items-center">
      <h3 className="mb-3">Portfolios</h3>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 bg-gray-100 p-5 rounded-3xl justify-items-center w-11/12 lg:w-4/5 ">
        {portfoliosList.map((work) => (
          <div
            key={work.title}
            className="relative group rounded-xl aspect-[5/3] w-60 md:w-70 lg:w-80 shadow-xl shadow-gray-500 overflow-hidden"
          >
            <Image
              src={work.imgSrc}
              alt={work.title}
              fill // the image will be assigned absolute
              style={{ objectFit: "cover" }}
              quality={100}
              sizes="(max-width: 640px) 100vw,(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute w-full h-0 bg-opacity-80 bg-gray-700 duration-500  group-hover:h-full" />
            <footer className="absolute w-full p-5 top-1/2 text-center duration-500  opacity-0 text-white group-hover:-translate-y-1/2 group-hover:opacity-100 ">
              <h4 className="mb-3">{work.title}</h4>
              <ChipLink href={work.ghLink}>github</ChipLink>
              <ChipLink href={work.demoLink}>Demo</ChipLink>
            </footer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolios;
