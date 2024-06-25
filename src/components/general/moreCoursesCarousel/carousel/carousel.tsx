"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import differentCoursesImage from "@/assets/general/coursesIcons/diverse_kurse.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CoursesTeaserElement from "@/components/general/courseTeaserElement/courseTeaserElement";

export default function carousel() {
  return (
    <div className="">
      <Swiper
        slidesPerView={3.2}
        spaceBetween={10}
        initialSlide={1}
        centeredSlides={true}
        slidesOffsetAfter={50}
        loop={true}
        modules={[Navigation]}
        className=" w-full "
      >
        <SwiperSlide>
          <CoursesTeaserElement
            title="Diverse Kurse"
            text="Mehr erfahren"
            bgColor={"bg-orange"}
            imagePosition="justify-start"
            image={differentCoursesImage}
            lng={"de"}
            link=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesTeaserElement
            title="Diverse Kurse"
            text="Mehr erfahren"
            bgColor="bg-orange"
            imagePosition="justify-start"
            image={differentCoursesImage}
            lng={"de"}
            link=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesTeaserElement
            title="Diverse Kurse"
            text="Mehr erfahren"
            bgColor="bg-orange"
            imagePosition="justify-start"
            image={differentCoursesImage}
            lng={"de"}
            link=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesTeaserElement
            title="Diverse Kurse"
            text="Mehr erfahren"
            bgColor="bg-orange"
            imagePosition="justify-start"
            image={differentCoursesImage}
            lng={"de"}
            link=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesTeaserElement
            title="Diverse Kurse"
            text="Mehr erfahren"
            bgColor="bg-orange"
            imagePosition="justify-start"
            image={differentCoursesImage}
            lng={"de"}
            link=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
