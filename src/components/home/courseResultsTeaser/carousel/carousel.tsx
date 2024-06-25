"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import tempImage from "@/assets/placeholder/project.png";
import CoursesTeaserElement from "@/components/general/courseTeaserElement/courseTeaserElement";
import VideoImage from "@/assets/general/coursesIcons/video.png";
import FotographieImage from "@/assets/general/coursesIcons/photography.png";
import PraesentationImage from "@/assets/general/coursesIcons/presentation.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function carousel({ results, lng }: any) {
  const breakpoints = {
    1: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2.2,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 3.2,
      spaceBetween: 40,
    },
  };
  const resultsImage = [
    VideoImage,
    FotographieImage,
    PraesentationImage,
    PraesentationImage,
    PraesentationImage,
  ];

  return (
    <Swiper
      breakpoints={breakpoints}
      spaceBetween={20}
      initialSlide={1}
      centeredSlides={true}
      loop={true}
      modules={[Navigation]}
      className="w-full"
    >
      {results.map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <CoursesTeaserElement
            image={resultsImage[index]}
            bgColor={item.backgroundColor}
            imagePosition={item.imagePosition}
            title={item.title}
            text={item.moreText}
            link={"/" + item.link}
            lng={lng}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
