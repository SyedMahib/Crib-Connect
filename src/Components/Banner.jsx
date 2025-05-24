import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
import Banner1 from "../assets/Banner-1.png";
import Banner2 from "../assets/Banner-2.jpg"
// import Banner3 from "../assets/Banner-3.png"

const Banner = () => {
  return (
    <div className="mt-10 mb-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper relative md:rounded-2xl"
      >
        <div className="absolute top-75 md:left-30 z-10 md:w-[60%] lg:w-[45%] space-y-3 text-center md:text-start">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Find your perfect roomate. Build your best life
          </h1>
          <p className="text-lg md:text-xl text-white font-medium md:w-[60%]">Discover compatible matches and create a home you'll love</p>
        </div>
        <SwiperSlide>
          <img src={Banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
