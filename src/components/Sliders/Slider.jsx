import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../../../src/assets/banner-1.jpg";
import banner2 from "../../../src/assets/banner-2.jpg";
import banner3 from "../../../src/assets/banner-3.jpg";

const slides = [
  {
    image: banner1,
    title: "Hire Top Freelancers Instantly",
    subtitle: "Browse thousands of verified professionals for your next project.",
  },
  {
    image: banner2,
    title: "Turn Your Skills Into Income",
    subtitle: "Create a profile and start getting freelance jobs today.",
  },
  {
    image: banner3,
    title: "Your One-Stop Freelance Marketplace",
    subtitle: "Design, development, writing, marketing & more — all in one place.",
  },
];

const Slider = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={700}
        pagination={{ clickable: true }}
        className="w-full h-[40vh] lg:h-[70vh] mt-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24">
              <div className="w-full lg:w-1/2 h-full flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl max-w-md">
                  {slide.subtitle}
                </p>
              </div>
              <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                  className="w-full rounded-xl shadow-md"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
