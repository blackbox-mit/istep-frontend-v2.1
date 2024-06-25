"use client";
import Image from "next/image";
import projcet from "@/assets/placeholder/project.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface projectProps {
  idx: number;
  project: {
    title: string;
    teaser: string;
    moreText: string;
    link: string;
  };
}

const projectTeaser = ({ project, idx }: projectProps) => {
  const bgColorOptions = ["#f2c494", "#fcdfb1", "#a4d1c3"];
  const bgColorStyle = {
    backgroundColor: bgColorOptions[idx % bgColorOptions.length],
  };

  const pathname = usePathname();

  return (
    <div
      style={bgColorStyle}
      className={`min-h-48 w-full rounded-3xl flex flex-col md:flex-row`}
    >
      <div className=" w-full md:w-1/2">
        <div className="p-8 md:pt-8 pt-6 font-palanquin">
          <h3
            className={`text-h-md md:text-h-l mb-2 md:mb-4  text-${
              ["orange", "yellow", "green"][idx % 3]
            }`}
          >
            {project.title}
          </h3>
          <p className="text-p-sm md:text-p-lg font-thin mb-2 md:mb-4 text-darkblue">
            {project.teaser}
          </p>
          <div className="flex items-center cursor-pointer">
            <hr className="h-0.5 my-4 w-4 border-0 dark:bg-darkblue mr-2" />
            <Link
              className="text-p-sm md:text-p-lg  !font-bold  text-darkblue"
              href={pathname.substring(0, 3) + "/projects/" + project.link}
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 order-first md:order-last">
        <Image
          src={projcet}
          alt={project.title}
          className="md:rounded-tr-3xl md:rounded-br-3xl  md:rounded-tl-none rounded-t-3xl md:rounded-bl-none object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default projectTeaser;
