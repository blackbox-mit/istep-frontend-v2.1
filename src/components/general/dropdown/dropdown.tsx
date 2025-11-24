"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { use, useState } from "react";

export default function Dropdown({ locale }: { locale: any }) {
  const [isHovered, setIsHovered] = useState(false);

  const alternateLanguage = locale === "de" ? "EN" : "DE";
  return (
    <div className="relative z-30 w-14 h-[80px]">
      <div
        className="absolute mt-[20px] left-1/2 transform -translate-x-1/2 bg-yellow font-palanquin rounded-t-[24px] rounded-b-[24px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="cursor-pointer text-center"
          onClick={() => setIsHovered(true)}
        >
          {isHovered && (
            <Link href={locale}>
              <p className="p-2 px-4 hover:bg-orange hover:rounded-[24px] text-white text-p-sm">
                {locale.toUpperCase()}
              </p>
            </Link>
          )}
          {!isHovered && (
            <p className="p-2 px-4 hover:bg-orange hover:rounded-[24px] text-white text-p-sm">
              {locale.toUpperCase()}
            </p>
          )}
        </div>

        <div
          className={`ease-in-out duration-500 ${
            isHovered ? "max-h-[96px]" : "max-h-0"
          } overflow-hidden`}
        >
          <div className="text-center">
            <Link href={alternateLanguage.toLowerCase()}>
              <p className="p-2 px-4 hover:bg-orange hover:rounded-[24px] text-white text-p-sm cursor-pointer">
                {alternateLanguage}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
