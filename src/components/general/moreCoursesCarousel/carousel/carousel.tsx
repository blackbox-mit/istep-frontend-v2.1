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
            index={0}
            image={differentCoursesImage}
            lng={"de"}
            link=""
            linkActive={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesTeaserElement
            title="Diverse Kurse"
            text="Mehr erfahren"
            index={1}
            image={differentCoursesImage}
            lng={"de"}
            link=""
            linkActive={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesTeaserElement
            title="Diverse Kurse"
            text="Mehr erfahren"
            index={2}
            image={differentCoursesImage}
            lng={"de"}
            link=""
            linkActive={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesTeaserElement
            title="Diverse Kurse"
            text="Mehr erfahren"
            index={2}
            image={differentCoursesImage}
            lng={"de"}
            link=""
            linkActive={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesTeaserElement
            title="Diverse Kurse"
            text="Mehr erfahren"
            index={3}
            image={differentCoursesImage}
            lng={"de"}
            link=""
            linkActive={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesTeaserElement
            title="Diverse Kurse"
            text="Mehr erfahren"
            index={4}
            image={differentCoursesImage}
            lng={"de"}
            link=""
            linkActive={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesTeaserElement
            title="Diverse Kurse"
            text="Mehr erfahren"
            index={5}
            image={differentCoursesImage}
            lng={"de"}
            link=""
            linkActive={false}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
