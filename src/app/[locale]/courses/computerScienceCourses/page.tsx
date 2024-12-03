import Image from "next/image";
import titleImage from "@/assets/home/titleImage.png";
import CoursesOverviewComputerScience from "@/components/courses/coursesOverview/coursesOverviewComputerScience";
import MoreCoursesCarousel from "@/components/general/moreCoursesCarousel/moreCoursesCarousel";

import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

interface detailCoursePageProps {
  params: {
    locale: string;
  };
}

export default function ComputerScienceCourses({
  params: { locale },
}: detailCoursePageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("ComputerScienceCourses");

  return (
    <main>
      <div className="min-h-[calc(100vh-0px)] bg-darkblue w-full flex items-center pb-8 md:-pd-0">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
          <h1 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center">
            {t("mainTitle")}
          </h1>

          <div className="flex flex-col lg:flex-row">
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
      </div>

      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <CoursesOverviewComputerScience lng={locale} />
      </div>
      {/* <div className="mb-24">
        <MoreCoursesCarousel />
      </div> */}
    </main>
  );
}
