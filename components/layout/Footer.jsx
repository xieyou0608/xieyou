import React from "react";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col-reverse gap-y-10 md:flex-row justify-around p-5 bg-slate-600 text-white ">
      <div className="flex ji3">
        <div className="flex flex-col gap-y-3">
          <h4>謝侑均</h4>
          <p>臺大資管系 NTUIM 2018-2022</p>
          <p>Copyright © 2022 Yu-Chun Hsieh</p>
        </div>
      </div>
      <div className="flex flex-col ">
        <h4>Get in touch!</h4>
        <SocialLinks isFooter />
        <div className="hover:bg-slate-500 duration-500 rounded-xl pr-2">
          <MdEmail className="inline m-2" />
          <a href="mailto:xyc.hsieh@gmail.com">xyc.hsieh@gmail.com</a>
        </div>
        <div className="hover:bg-slate-500 duration-500 rounded-xl pr-2">
          <AiFillPhone className="inline m-2" />
          <a href="tel:+886-936268183">0936-268-183</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
