"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "@/assets/general/istep_logo_weiss.png";
import Dropdown from "@/components/general/dropdown/dropdown";
import DonateButton from "@/components/general/donateButton/donateButton";
import BurgerMenu from "@/components/general/burgerMenu/burgerMenu";
import Sidebar from "@/components/general/sidebar/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // Tracks navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks last scroll position

  const toggleSidebar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };

  useEffect(() => {
    // Disable scrolling when the sidebar is open
    if (sideBarIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling when sidebar is closed
    }

    // Clean up on component unmount or if the sidebar is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideBarIsOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past a threshold
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`h-[80px] bg-darkblue inline-flex items-center justify-between w-full pl-4 pr-4 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } fixed top-0 z-40`}
      >
        <div>
          <Link href={pathname.substring(0, 3)}>
            <Image src={logo} alt="Picture of the author" height={80} />
          </Link>
        </div>
        <div className="inline-flex items-center height-[80px]">
          <div className="mr-2">
            <Dropdown />
          </div>
          <div className="ml-2 mr-2 md:block hidden">
            <DonateButton />
          </div>
          <div className="ml-2" onClick={toggleSidebar}>
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
