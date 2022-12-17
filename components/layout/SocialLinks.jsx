import React from "react";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

import { GrDocumentText } from "react-icons/gr";
import { IoDocumentTextSharp } from "react-icons/io5";

const IconLink = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl rounded-full p-2 hover:bg-slate-400 duration-500"
    >
      {props.children}
    </a>
  );
};

const SocialLinks = ({ isFooter }) => {
  return (
    <div className="flex gap-x-2">
      <IconLink href="https://www.facebook.com/xieyou0608/">
        <AiFillFacebook className={isFooter ? "" : "text-blue-500"} />
      </IconLink>

      <IconLink href="https://www.instagram.com/xieyou.0608/">
        <AiFillInstagram className={isFooter ? "" : "text-pink-500"} />
      </IconLink>

      <IconLink href="https://github.com/xieyou0608">
        <AiFillGithub />
      </IconLink>

      <IconLink href="https://www.linkedin.com/in/%E4%BE%91%E5%9D%87-%E8%AC%9D-894035242/">
        <AiFillLinkedin className={isFooter ? "" : "text-blue-800"} />
      </IconLink>

      <IconLink href="https://docs.google.com/document/d/1LuGgbbBXte-ZW7YSt_dgEJ92pxIiCFlYSPOu_nvaOZw/edit?usp=sharing">
        <IoDocumentTextSharp />
      </IconLink>
    </div>
  );
};

export default SocialLinks;
