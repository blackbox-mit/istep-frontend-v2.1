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
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };

  return (
    <Swiper
      breakpoints={breakpoints}
      //slidesPerView={1.2}
      spaceBetween={20}
      initialSlide={1}
      centeredSlides={true}
      loop={false}
      modules={[Navigation]}
      className="w-full"
    >
      {projects.map((project: any, index: number) => (
        <SwiperSlide key={index}>
          <ProjectTeaser project={project} idx={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
