"use client";
import { ArrowDownIcon } from "@heroicons/react/20/solid";

export default function ScrollDown() {
  const scrollDown = () => {
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    window.scrollTo(0, viewportHeight);
  };

  return (
    <>
      <div
        className="absolute rounded-full pt-2 right-8 bottom-8 bg-yellow cursor-pointer"
        onClick={scrollDown}
      >
        <ArrowDownIcon
          className={`h-8 w-5 transform -translate-y-2 ml-[1px] hover:translate-y-0 transition-all duration-300 `}
          aria-hidden="true"
        />
      </div>
    </>
  );
}
