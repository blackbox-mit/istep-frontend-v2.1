"use client";
import ProjectTeaser from "@/components/general/projectTeaser/projectTeaser";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function carousel({ projects }: { projects: any }) {
  const breakpoints = {
    1: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    480: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3.2,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 2.8,
      spaceBetween: 40,
    },
  };

  return (
    <Swiper
      breakpoints={breakpoints}
      //slidesPerView={1.2}
      spaceBetween={20}
      initialSlide={0}
      centeredSlides={false}
      loop={false}
      pagination={true}
      modules={[Navigation, Pagination]}
      className="w-full"
    >
      {projects.map((project: any, index: number) => (
        <SwiperSlide key={index} className={"h-full"}>
          <ProjectTeaser project={project} idx={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
