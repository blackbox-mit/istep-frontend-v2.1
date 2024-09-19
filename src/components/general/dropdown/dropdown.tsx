"use client";
import { useState } from "react";
import Link from "next/link";

const Dropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative z-30 w-14 h-[80px]">
      <div
        className="absolute mt-[20px] left-1/2 transform -translate-x-1/2  bg-yellow font-palanquin rounded-t-[24px] rounded-b-[24px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="cursor-pointer text-center"
          onClick={() => setIsHovered(true)}
        >
          {isHovered && (
            <Link href="/de">
              <p className="p-2 hover:bg-orange hover:rounded-[24px] text-white text-p-sm">
                DE
              </p>
            </Link>
          )}
          {!isHovered && (
            <p className="p-2 hover:bg-orange hover:rounded-[24px] text-white text-p-sm">
              DE
            </p>
          )}
        </div>

        <div
          className={`ease-in-out duration-500 ${
            isHovered ? "max-h-[96px]" : "max-h-0"
          } overflow-hidden`}
        >
          <div className="text-center">
            <Link href="/en">
              <p className="p-2 hover:bg-orange hover:rounded-[24px] text-white text-p-sm cursor-pointer">
                EN
              </p>
            </Link>
          </div>
          <div className="text-center">
            <Link href="/sq">
              <p className="p-2 hover:bg-orange hover:rounded-[24px] text-white text-p-sm cursor-pointer">
                ALB
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
