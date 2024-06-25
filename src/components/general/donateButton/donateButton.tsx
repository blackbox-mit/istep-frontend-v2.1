"use client";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const CustomSelect = () => {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  return (
  
      <div
        className="rounded-full bg-yellow p-2 w-36 text-p-sm text-white font-palanquin relative transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
       
        <Link href={pathname.substring(0, 3)+'/donate'}>
        <p
          className={`transition-transform duration-300 text-center ${
            isHovered ? "translate-x-[-12px]" : ""
          }`}
        >
          Spenden
          
        </p>
        </Link>
      

        <ArrowRightIcon
          className={`h-5 w-5 ml-2 absolute transiton-all duration-300 top-1/2 -translate-y-1/2  ${
            isHovered ? "opacity-100 right-4" : "opacity-0 right-0"
          }`}
          aria-hidden="true"
        />
      </div>
 
  );
};

export default CustomSelect;
