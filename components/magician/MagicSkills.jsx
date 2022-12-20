import React from "react";
import { FaMagic, FaGlassCheers, FaBookOpen } from "react-icons/fa";

const SkillBox = (props) => {
  return (
    <div className="flex flex-col items-center gap-y-3">{props.children}</div>
  );
};

const MagicSkills = () => {
  return (
    <section id="magicSkills" className="w-full p-10 text-center">
      <h2>Service</h2>
      <div className="flex flex-col md:flex-row justify-evenly">
        <SkillBox>
          <FaMagic className="text-8xl text-purple-700" />
          <h3>舞台魔術</h3>
          <p>
            現場5~10分鐘舞台秀
            <br />
            於燈光、音響的
            <br />
            廳堂舞台上演出
          </p>
        </SkillBox>
        <SkillBox>
          <FaGlassCheers className="text-8xl text-purple-700" />
          <h3>派對魔術</h3>
          <p>
            短至5分鐘長至1小時的
            <br />
            party互動魔術
            <br />
            舞會、酒會
            <br />
            節慶生日派對
          </p>
        </SkillBox>
        <SkillBox>
          <FaBookOpen className="text-8xl text-purple-700" />
          <h3>魔術教學</h3>
          <p>
            1~2小時
            <br />
            簡單小魔術教學
            <br />
            表演概念教學
          </p>
        </SkillBox>
      </div>
    </section>
  );
};

export default MagicSkills;
