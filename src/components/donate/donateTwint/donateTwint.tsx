"use client";
import { useState } from "react";
import Twint from "@/assets/donate/Twint.png";
import Image, { StaticImageData as NextImageProps } from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
interface donateTwintProps {}

export default function DonateTwint({}: donateTwintProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="rounded-3xl bg-white w-full shadow-2xl font-palanquin p-6 cursor-pointer">
        <div
          className="flex justify-between items-center h-12"
          onClick={() => setOpen(!open)}
        >
          <p className="text-h-sm ">Twint</p>
          <ChevronDownIcon aria-hidden="true" className="w-12" />
        </div>
        {open && (
          <div className="flex justify-center">
            <Image
              src={Twint}
              alt="Picture of the author "
              className="object-contain pt-2 w-1/4 mt-8"
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        )}
      </div>
    </>
  );
}
