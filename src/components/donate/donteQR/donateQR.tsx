"use client";

import Image, { StaticImageData as NextImageProps } from "next/image";
import { useState } from "react";
import QRImage from "@/assets/donate/QR-Rechnung.jpg";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface donateQRProps {
  lng: string;
}

export default function DonateQR({ lng }: donateQRProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="rounded-3xl bg-white w-full shadow-2xl font-palanquin p-6 cursor-pointer">
        <div
          className="flex justify-between items-center h-12"
          onClick={() => setOpen(!open)}
        >
          <p className="text-h-sm ">Donate QR</p>
          <ChevronDownIcon aria-hidden="true" className="w-12" />
        </div>
        {open && (
          <div className="flex justify-center">
            <Image
              src={QRImage}
              alt="Picture of the author "
              className="object-contain pt-2 w-5/6 mt-8"
            />
          </div>
        )}
      </div>
    </>
  );
}
