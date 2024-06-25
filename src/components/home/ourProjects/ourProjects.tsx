import Carousel from "./carousel/carousel";
//import { useTranslation } from "@/app/i18n";

interface ourProjectsProps {
  ourProjects: {
    title: string;
    subTitle: string;
    text: string;
    text2: string;
  };
  lng: string;
}

export default async function OurProjects({
  ourProjects,
  lng,
}: ourProjectsProps) {
  /*const { t: projectsTranslation } = await useTranslation(lng, "projects", {
    returnObjects: true,
  });

  const projects = projectsTranslation("projects", { returnObjects: true });*/

  return (
    <div className="bg-yellow/40 ">
      <div className="md:py-24 py-12">
        <div className=" mb-6 text-yellow font-palanquin  container mx-auto px-8 lg:px-4">
          <h3 className="text-h-md md:text-h-lg ">{ourProjects.title}</h3>
          <p className="text-p-lg md:text-h-md font-thin ">
            {ourProjects.subTitle}
          </p>
        </div>
        <div className="md:mt-16 mt-8 container mx-auto px-8 lg:px-4">
          {/* <Carousel projects={projects} /> */}
        </div>
      </div>
    </div>
  );
}
