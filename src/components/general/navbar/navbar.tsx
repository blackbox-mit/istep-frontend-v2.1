"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/general/logo_1.png";
import Dropdown from "@/components/general/dropdown/dropdown";
import DonateButton from "@/components/general/donateButton/donateButton";
import BurgerMenu from "@/components/general/burgerMenu/burgerMenu";
import Sidebar from "@/components/general/sidebar/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  const toggleSidebar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };

  return (
    <>
      <div className="h-[80px] bg-darkblue inline-flex items-center justify-between w-full pl-4 pr-4">
        <div>
          <Link href={pathname.substring(0, 3)}>
            <Image
              src={logo}
              alt="Picture of the author"
              height={60}
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </Link>
        </div>
        <div className="inline-flex items-center height-[80px]">
          <div className=" mr-2">
            <Dropdown />
          </div>
          <div className="ml-2 mr-2 md:block hidden">
            <DonateButton />
          </div>
          <div
            className="ml-2"
            onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
          >
            <BurgerMenu />
          </div>
        </div>
      </div>
      <div>
        <Sidebar isOpen={sideBarIsOpen} toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
}
