"use client";
import Image, { StaticImageData as NextImageProps } from "next/image";
import { PortableText } from "@portabletext/react";

import { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface donateRaiseNowProps {
  titleCreditCard: string;
  textCreditCardRaw: any;
}

export default function DonateRaiseNow({
  titleCreditCard,
  textCreditCardRaw,
}: donateRaiseNowProps) {
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
          <p className="text-h-sm mb-1">{titleCreditCard}</p>

          <ChevronDownIcon aria-hidden="true" className="w-12" />
        </div>
        {open && (
          <div>
            <div>
              <PortableText
                value={textCreditCardRaw}
                components={{
                  list: ({ children, value }) => {
                    if (value.listItem === "bullet") {
                      return <ul className="list-disc pl-5">{children}</ul>;
                    }
                    if (value.listItem === "number") {
                      return <ol className="list-decimal pl-5">{children}</ol>;
                    }
                    return <ul className="pl-5">{children}</ul>;
                  },
                  listItem: ({ children }) => (
                    <li className="mb-1">{children}</li>
                  ),
                }}
              />
              <a
                href="https://www.raisenow.com/"
                className="font-bold underline"
              >
                RaiseNow
              </a>
            </div>
            <iframe
              src="https://donate.raisenow.io/zbvxd"
              width="100%"
              height="1400px"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
}
