import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { MdPreview } from "react-icons/md";

function Card(props) {
  return (
    <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden ">
        {/* Image */}
        <div className="h-64 overflow-hidden w-full">
          <img src={props.imageSrc} alt={props.imageSrc} className="object-cover w-full h-full ease-linear transform hover:scale-110 transition duration-500" />
        </div>
        {/* Content */}
        <div className="p-3 md:p-4">
          <div className="flex w-full justify-center  items-center font-medium md:justify-start">
            <h3 className="mr-5 amber-color">{props.name}</h3>
            <CgWebsite size={30} />
            {/* <FaMobileAlt size={25}/> */}
          </div>
          <div className="flex w-full items-center md:items-end flex-col md:flex-row mt-2">
            <p className="text-sm opacity-50 text-justify md:text-left md:text-xs w-3/2 md:mr-2">
            {props.desc}
            </p>

            <div className="flex justify-between w-1/4 md:w-[100px]">
              <a
                href={props.git}
                target="_blank"
                rel="noreferrer"
              >
                <FaCode size={28} />
              </a>
              <a
                href={props.live}
                target="_blank"
                rel="noreferrer"
                className='md:ml-3'
              >
                <MdPreview size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card