// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.png",
          link: "https://www.coursera.org/account/accomplishments/verify/76KNBUZPSTQA",
        },
        {
          title: "title",
          path: "/thumb2.png",
          link: "https://www.udemy.com/certificate/UC-05fb7faa-4d0c-4acb-a06b-be9655e956f2/",
        },
        {
          title: "title",
          path: "/thumb3.png",
          link: "https://www.cert.devtown.in/verify/1yQG8O",
        },
        {
          title: "title",
          path: "/thumb4.png",
          link: "https://www.cert.devtown.in/verify/hxFA5",
        },
      ],
    },
    // Add more slides as needed
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

//icons
import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center justify-center relative overflow-hidden">
                        <Image src={image.path} width={500} height={300} alt="" />
                        {/* overlay gradient and title */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items- center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div className="delay-100">VERIFY</div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">CERTIFICATE</div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight /></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
