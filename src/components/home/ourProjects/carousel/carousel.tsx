"use client";
import ProjectTeaser from "@/components/general/projectTeaser/projectTeaser";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function carousel({ projects }: { projects: any }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      spaceBetween={20}
      centeredSlides={isMobile}
      loop={isMobile}
      pagination={{
        clickable: true,
      }}
      navigation={true}
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
