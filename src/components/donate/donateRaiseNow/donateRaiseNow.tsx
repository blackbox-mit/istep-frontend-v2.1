"use client";
import Image, { StaticImageData as NextImageProps } from "next/image";

import { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";

interface donateRaiseNowProps {}

export default function DonateRaiseNow({}: donateRaiseNowProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Donate.donateRaiseNow");
  return (
    <>
      <div className="rounded-3xl bg-white w-full shadow-2xl font-palanquin p-8 cursor-pointer">
        <div
          className={`flex justify-between items-center h-12 ${
            open ? "mb-6" : ""
          } `}
          onClick={() => setOpen(!open)}
        >
          <p className="text-h-sm mb-1">{t("title")}</p>

          <ChevronDownIcon aria-hidden="true" className="w-12" />
        </div>
        {open && (
          <div>
            <div>
              <p>{t("description")}</p>
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
