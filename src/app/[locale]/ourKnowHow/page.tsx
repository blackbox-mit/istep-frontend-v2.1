import Image from "next/image";
import titleImage from "@/assets/ourKnowHow/titleImage.png";
import ScrollDown from "@/components/general/scrollDown/scrollDown";
import DigitalSkills from "@/components/ourKnowHow/digitalSkills/digitalSkills";

import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import OtherSkills from "@/components/ourKnowHow/otherSkills/otherSkills";

export default function OurKnowHow({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("OurKnowHow");

  return (
    <main>
      <div className="min-h-[calc(100vh-80px)] z-10 w-full pb-8 md:-pd-0 ">
        <div className="bg-darkblue h-[calc(100vh-80px)]">
          <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
            <h1 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center">
              {t("mainTitle")}
            </h1>

            <div className="flex flex-col lg:flex-row mt-8">
              <div className="lg:w-2/5 w-full">
                <h4 className="text-white text-h-sm md:text-h-md mt-4 mb-4  md:text-left text-center font-palanquin !font-thin">
                  {t("subTitle")}
                </h4>
              </div>
              <div className="lg:w-3/5 w-full flex justify-center">
                <Image
                  src={titleImage}
                  alt="Picture of the author"
                  className="h-full object-contain "
                />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <ScrollDown />
          </div>
        </div>
      </div>

      <div className="container mx-auto md:pt-18 pt-12 px-8 lg:px-4 ">
        <DigitalSkills lng={locale} />
      </div>
      <div className="container mx-auto md:pt-18 pt-12 px-8 lg:px-4 pb-32">
        <OtherSkills lng={locale} />
      </div>
    </main>
  );
}
