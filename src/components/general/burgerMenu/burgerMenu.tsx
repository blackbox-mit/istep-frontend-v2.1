"use client";

import { useState } from "react";

export default function BurgerMenu() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col justify-center ">
      <div className="relative ">
        <button
          className="w-12 h-10 relative focus:outline-none "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-10 absolute left-1/2 top-1/2   -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-1 w-10 rounded-full  transform transition duration-300 ease-in-out -translate-y-2.5 
                  ${isHovered ? "bg-yellow" : "bg-white"}
                  `}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-1 w-10    rounded-full transform transition duration-300 ease-in-out 
                  ${isHovered ? "bg-yellow" : "bg-white"}
                  `}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-1 w-10 transform  rounded-full transition duration-300 ease-in-out translate-y-2.5 
                  ${isHovered ? "bg-yellow" : "bg-white"}
                  `}
            ></span>
          </div>
        </button>
      </div>
    </div>
  );
}
