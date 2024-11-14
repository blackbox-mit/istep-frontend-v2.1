"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const Dropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  const params = useParams<{ locale: string }>();

  const defaultLanguage = params.locale === "de" ? "DE" : "EN";
  const defaultLink = params.locale === "de" ? "/de" : "/en";
  const alternateLanguage = params.locale === "de" ? "EN" : "DE";
  const alternateLink = params.locale === "de" ? "/en" : "/de";

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
            <Link href={defaultLink}>
              <p className="p-2 hover:bg-orange hover:rounded-[24px] text-white text-p-sm">
                {defaultLanguage}
              </p>
            </Link>
          )}
          {!isHovered && (
            <p className="p-2 hover:bg-orange hover:rounded-[24px] text-white text-p-sm">
              {defaultLanguage}
            </p>
          )}
        </div>

        <div
          className={`ease-in-out duration-500 ${
            isHovered ? "max-h-[96px]" : "max-h-0"
          } overflow-hidden`}
        >
          <div className="text-center">
            <Link href={alternateLink}>
              <p className="p-2 hover:bg-orange hover:rounded-[24px] text-white text-p-sm cursor-pointer">
                {alternateLanguage}
              </p>
            </Link>
          </div>
          {/* Uncomment if needed
          <div className="text-center">
            <Link href="/sq">
              <p className="p-2 hover:bg-orange hover:rounded-[24px] text-white text-p-sm cursor-pointer">
                ALB
              </p>
            </Link>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
