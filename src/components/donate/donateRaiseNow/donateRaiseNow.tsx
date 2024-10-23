"use client";
import Image, { StaticImageData as NextImageProps } from "next/image";

import { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Script from "next/script";

interface donateRaiseNowProps {}

export default function DonateRaiseNow({}: donateRaiseNowProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="rounded-3xl bg-white w-full shadow-2xl font-palanquin p-8 cursor-pointer">
        <div
          className={`flex justify-between items-center h-12 ${
            open ? "mb-6" : ""
          } `}
          onClick={() => setOpen(!open)}
        >
          <p className="text-h-sm ">Donate RaiseNow</p>

          <ChevronDownIcon aria-hidden="true" className="w-12" />
        </div>
        {open && (
          <iframe
            src="https://donate.raisenow.io/zbvxd"
            width="100%"
            height="1400px"
            frameBorder="0"
          ></iframe>
        )}
      </div>
    </>
  );
}
