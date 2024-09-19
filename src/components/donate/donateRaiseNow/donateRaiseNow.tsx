"use client";
import Image, { StaticImageData as NextImageProps } from "next/image";

import { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Script from "next/script";

interface donateRaiseNowProps {}

export default function DonateRaiseNow({}: donateRaiseNowProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <>
      <div className="rounded-3xl bg-white w-full shadow-2xl font-palanquin p-8 cursor-pointer">
        <Script
          src="https://tamaro.raisenow.com/istep-b7da/latest/widget.js"
          onLoad={
            () => {
              //@ts-ignore
              window.rnw.tamaro.runWidget(buttonRef.current, {
                language: "en",
              });
              // console.log(window.rnw.tamaro.runWidget(buttonRef));
            }

            /* window.rnw.tamaro.runWidget(".rnw-widget-container", {
              language: "en", // You might need to replace this with the language from your store
            })*/
          }
        />
        <div
          className={`flex justify-between items-center h-12 ${
            open ? "mb-6" : ""
          } `}
          onClick={() => setOpen(!open)}
        >
          <p className="text-h-sm ">Donate RaiseNow</p>

          <ChevronDownIcon aria-hidden="true" className="w-12" />
        </div>

        <div
          ref={buttonRef}
          className={`rnw-widget-container ", ${open ? "visible" : "hidden"}`}
        />
      </div>
    </>
  );
}
