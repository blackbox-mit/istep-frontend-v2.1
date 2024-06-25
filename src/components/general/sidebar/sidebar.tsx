import DonateButton from "@/components/general/donateButton/donateButton";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: any;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`transform top-0 right-0 pl-16 md:w-auto w-full h-full md:h-auto font-palanquin  bg-orange text-white fixed  pb-16 rounded-none md:rounded-l-3xl overflow-auto ease-in-out transition-all duration-300 z-30   ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="inline-flex justify-end items-center w-full mt-4 mb-4 pr-4">
          <div className="w-36 mr-4">
            <DonateButton />
          </div>

          <XMarkIcon
            className={`h-12 w-12 cursor-pointer`}
            onClick={toggleSidebar}
          />
        </div>
        <div className="text-h-md text-right mr-16 font-normal flex flex-col">
          <Link
            href={pathname.substring(0, 3) + "/projects"}
            className="mt-6 mb-6"
            onClick={toggleSidebar}
          >
            Usere Projekte
          </Link>
          <Link
            href={pathname.substring(0, 3) + "/about"}
            className="mt-6 mb-6"
            onClick={toggleSidebar}
          >
            Über Uns
          </Link>
          <Link
            href={pathname.substring(0, 3) + "/courses"}
            className="mt-6 mb-6"
            onClick={toggleSidebar}
          >
            Kurse
          </Link>
          <Link
            href={pathname.substring(0, 3) + "/blog"}
            className="mt-6 mb-6"
            onClick={toggleSidebar}
          >
            Blog
          </Link>
          <Link
            href={pathname.substring(0, 3) + "/contact"}
            className="mt-6 mb-6"
            onClick={toggleSidebar}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </>
  );
}
