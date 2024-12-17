"use client";

import CoursesTeaserElement from "@/components/general/courseTeaserElement/courseTeaserElement";
import VideoImage from "@/assets/general/coursesIcons/video.png";
import FotographieImage from "@/assets/general/coursesIcons/photography.png";
import PraesentationImage from "@/assets/general/coursesIcons/presentation.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function carousel({ results, lng }: any) {
  const resultsImage = [
    VideoImage,
    FotographieImage,
    PraesentationImage,
    PraesentationImage,
    PraesentationImage,
  ];

  return (
    <>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-8 ">
        {results.map((item: any, index: number) => (
          <div key={index}>
            <CoursesTeaserElement
              image={resultsImage[index]}
              bgColor={item.backgroundColor}
              imagePosition={item.imagePosition}
              title={item.title}
              text={item.moreText}
              link={"/" + item.link}
              lng={lng}
              linkActive={false}
            />
          </div>
        ))}
      </div>
    </>
  );
}
