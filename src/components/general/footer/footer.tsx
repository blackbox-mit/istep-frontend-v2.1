import Image from "next/image";
import logo from "@/assets/general/istep_logo_blau.png";
import DonateButton from "@/components/general/donateButton/donateButton";
import { useTranslations } from "next-intl";

export default function footer({ lng }: any) {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer"); // Access translations
  return (
    <div className="bg-yellow/60 rounded-t-3xl">
      <div className="container mx-auto pt-12 pb-8 px-8 lg:px-4">
        <Image
          src={logo}
          alt="Picture of the author"
          className="md:w-48 w-32"
        />

        <div className="mt-4 md:mt-8 font-palanquin flex md:flex-row flex-col justify-between ">
          <div className="">
            <p className="font-palanquin text-p-lg md:text-h-md text-darkblue">
              {t("contactSection.title")}
            </p>
            <p>iSTEP</p>
            <a href="mailto:info@istep.ch">info@istep.ch</a>
          </div>
          <div className="flex flex-col md:items-end items-start md:mt-0 mt-4">
            <p className="text-right mb-4 text-p-lg">{t("donation.text")}</p>

            <DonateButton />
          </div>
        </div>
        <hr className="h-0.5 my-4 w-full border-0 dark:bg-darkblue mr-2" />
        <div className="mt-4 md:mt-8 font-palanquin flex md:flex-row flex-col justify-between">
          <div>
            {/* here */}
            <p>
              © {currentYear} {t("copyright")}
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center cursor-pointer">
              <hr className="h-0.5 my-4 w-4 border-0 dark:bg-darkblue mr-2" />
              <a href="/iSTEP_Statuten.pdf" target="_blank" className="mr-2">
                {t("statuten")}
              </a>
            </div>
            <div className="flex items-center cursor-pointer">
              <hr className="h-0.5 my-4 w-4 border-0 dark:bg-darkblue mr-2" />
              <a href={"/" + lng + "/impressum"}>{t("impressum")}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
