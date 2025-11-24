"use client";

import Image, { StaticImageData as NextImageProps } from "next/image";
import { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function DonateQR({ titleQR, imageQR }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="rounded-3xl bg-white w-full shadow-2xl font-palanquin p-6 cursor-pointer">
        <div
          className="flex justify-between items-center h-12"
          onClick={() => setOpen(!open)}
        >
          <p className="text-h-sm ">{titleQR}</p>
          <ChevronDownIcon aria-hidden="true" className="w-12" />
        </div>
        {open && (
          <div className="flex justify-center">
            <Image
              src={imageQR.asset.url}
              alt="Picture of the author "
              className="object-contain pt-2 w-5/6 mt-8"
              height={400}
              width={400}
            />
          </div>
        )}
      </div>
    </>
  );
}
