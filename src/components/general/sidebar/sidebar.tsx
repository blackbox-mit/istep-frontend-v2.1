import DonateButton from "@/components/general/donateButton/donateButton";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: any;
  navigation: any;
  donationText?: string;
}

export default function Sidebar({
  isOpen,
  toggleSidebar,
  navigation,
  donationText,
}: SidebarProps) {
  const pathname = usePathname();
  // todo
  // const t = useTranslations("Navigation"); // Access translations

  return (
    <>
      <div
        className={`transform top-0 right-0 pl-16 md:w-auto w-full h-full md:h-auto font-palanquin  bg-orange text-white fixed  pb-16 rounded-none md:rounded-l-3xl overflow-auto ease-in-out transition-all duration-300 z-40   ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="inline-flex justify-end items-center w-full mt-4 mb-4 pr-4">
          <div className="w-36 mr-4">
            <DonateButton
              toggleSidebar={toggleSidebar}
              donationText={donationText}
            />
          </div>

          <XMarkIcon
            className={`h-12 w-12 cursor-pointer`}
            onClick={toggleSidebar}
          />
        </div>
        <div className="text-h-md text-right mr-16 font-normal flex flex-col">
          {navigation.map((item: any, idx: number) => (
            <Link
              key={item.link}
              href={pathname.substring(0, 3) + (item.href ?? "")}
              className="mt-4 mb-4"
              onClick={toggleSidebar}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
