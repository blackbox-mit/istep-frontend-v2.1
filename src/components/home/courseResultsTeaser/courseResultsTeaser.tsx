import TeaserIntroText from "@/components/general/teaserIntroText/teaserIntroText";
import Carousel from "./carousel/carousel";
//import { useTranslation } from "@/app/i18n";

interface courseResultsProps {
  results: {
    title: string;
    subTitle: string;
    text: string;
    theme: string;
    buttonText: string;
  };
  lng: string;
  idx?: number;
}

export default async function CourseResultsTeaser({
  results,
  lng,
  idx,
}: courseResultsProps) {
  /* const { t: resultsTranslation } = await useTranslation(lng, "results", {
    returnObjects: true,
  });

  const resultsCourse = resultsTranslation("results", { returnObjects: true });*/

  return (
    <>
      <div className=" md:py-24 py-12 px-8 lg:px-4 container mx-auto ">
        <TeaserIntroText
          title={results.title}
          subTitle={results.subTitle}
          text={results.text}
          theme={"orange"}
        />

        <div className="w-full mt-8">
          {/* <Carousel results={resultsCourse} lng={lng} /> */}
        </div>
        <div className="flex justify-end">
          <button className="bg-orange text-white px-6 py-2 rounded-full mt-8 font-palanquin ">
            {results.buttonText}
          </button>
        </div>
      </div>
    </>
  );
}
