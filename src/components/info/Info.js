import React from "react";
import dp from "../../assets/dp.png";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGumroad } from "react-icons/si";

function Info() {
  return (
    <div className="max-w-lg bg-primary-color mx-auto p-5 rounded-2xl shadow-xl flex flex-col md:flex-row md:space-x-3">
      {/* Image Container */}
      <div className="flex flex-col justify-items-center items-center  md:w-3/4">
        <div className="h-full md:w-full space-y-3 group relative">
          <img src={dp} alt="" />
    
          {/* Icons Container */}
          <div className="flex w-full justify-around">
            <a
              href="https://github.com/VHSSatyendra"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.instagram.com/vhsbunny.art/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://vhsdesndev.gumroad.com/"
              target="_blank"
              rel="noreferrer"
            >
              <SiGumroad size={32} />
            </a>
          </div>
        </div>
      </div>
      {/* Info Container */}
      <div className="flex flex-col space-y-2 items-center mt-3 md:items-start md: space-y-[18px]">
        <h1 className="text-text-color text-lg font-bold md:text-3xl">
          VHS Satyendra
        </h1>
        <h4 className="text-text-color opacity-50 text-sm">
          3D Illustrator | Graphic Designer | Developer
        </h4>
        <p className="text-color font-thin text-xs text-center md:text-left">
          I am a passionate artist who loves to create amazing imaginative
          worlds. I use my creativity to bring my visions to life
        </p>
        <div className="flex flex-col  md:flex-row md:items-center md:space-x-2">
          <p className="text-color font-thin text-xs text-center md:text-left text-text-color opacity-50">
            Wanna know more ?
          </p>
          <a
            href="#"
            target="_blank"
            onClick={() => (window.location = "mailto:vhsdesndev@gmail.com")}
          >
            <h6 className="text-center md:text-sm underline text-link-color">
              vhsdesndev@gmail.com
            </h6>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
