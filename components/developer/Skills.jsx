import Image from "next/image";
import { backendList, deployList, frontendList } from "./skillsData";

const SkillBox = ({ skill }) => {
  return (
    <div className="flex flex-col items-center shadow-xl p-3 m-1 rounded-xl gap-x-3 bg-white lg:m-2 lg:flex-row lg:w-1/2">
      <div className="relative aspect-square w-9">
        <Image
          src={skill.src}
          alt={skill.title}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 640px) 50vw, 20vw"
        />
      </div>
      <h5 className="text-gray-500 text-xs lg:text-base">{skill.title}</h5>
    </div>
  );
};

const SkillsRow = ({ skillsList }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {skillsList.map((skill) => (
        <SkillBox skill={skill} key={skill.title} />
      ))}
    </div>
  );
};

const SkillsCol = ({ skillsList }) => {
  return (
    <div className="flex flex-col items-center">
      {skillsList.map((skill) => (
        <SkillBox skill={skill} key={skill.title} />
      ))}
    </div>
  );
};

const Skills = () => {
  const combinedList = frontendList.concat(backendList).concat(deployList);
  return (
    <section
      id="skills"
      className="flex flex-col items-center w-full justify-center"
    >
      <h3>Skills</h3>
      {/* mobile only */}
      <div className="w-11/12 rounded-3xl bg-gray-100 p-5 lg:hidden">
        <SkillsRow skillsList={combinedList} />
      </div>
      {/* PC only */}
      <div className="hidden lg:grid grid-cols-3 w-4/5 rounded-3xl bg-gray-100 p-5">
        <SkillsCol skillsList={frontendList} />
        <SkillsCol skillsList={backendList} />
        <SkillsCol skillsList={deployList} />
      </div>
    </section>
  );
};

export default Skills;
