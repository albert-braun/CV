import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Reveal from "../Reveal/Reveal";

import "swiper/css/bundle";
import "./ProjectsSlider.css";

export default function Swipe({ arrProjects = [] }) {
  const half = Math.ceil(arrProjects.length / 2);
  const firstRowProjects = arrProjects.slice(0, half);
  const secondRowProjects = arrProjects.slice(half);

  return (
<section id="portfolios" className="w-full scroll-mt-[108px] bg-[#171719] py-12 md:py-21">
  <div className="max-w-[1240px] mx-auto px-4 mb-8 w-full flex justify-center ">
    <Reveal className="max-w-[440px]">
      <h3 className="uppercase text-[clamp(11px,1.5vw,14px)] text-gray-400 tracking-[clamp(1px,0.1vw,2px)]  mb-[0.5em]">Portfolios</h3>
 
      <h2 className="text-[#fff] text-[clamp(20px,2vw,32px)] font-bold tracking-wide mb-[0.3em]">My <span className="text-[#194BFD] ">completed projects</span></h2>
      <p className="text-gray-400 tracking-wide">Selected front-end work: shops, landings and UI kits built with React, HTML and CSS.</p>
    </Reveal>
  </div>

  <Reveal variant="fade" delay={160} className="relative w-full overflow-hidden pt-[32px] flex flex-col gap-[30px]">
    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
      <a
        href="https://github.com/albert-braun?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto px-6 py-3 rounded-full text-white font-medium text-[14px] bg-gradient-to-r from-[#194BFD] to-[#8B5CF6] hover:scale-105 transition-transform shadow-lg"
      >
        View all Projects
      </a>
    </div>

    <Swiper
      modules={[Autoplay]}
      direction="horizontal"
      loop={true}
      speed={10000}
      allowTouchMove={false}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false,
      }}
      slidesPerView={1.2}
      spaceBetween={32}
      breakpoints={{
        640: { slidesPerView: 2.2, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
      }}
      className="projects-swiper-top w-full"
    >
      {firstRowProjects.map((item, index) => (
        <SwiperSlide key={`${item.url}-top-${index}`}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full h-[269px] bg-[#16171d] rounded-[12px] border border-white/10 overflow-hidden opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            <img src={item.img} alt={item.title} className="w-full h-full object-cover object-top" />
            <span className="absolute inset-x-0 bottom-0 bg-black/55 px-3 py-2 text-left text-[13px] font-medium text-white">
              {item.title}
            </span>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>

    <Swiper
      modules={[Autoplay]}
      direction="horizontal"
      loop={true}
      speed={5000}
      allowTouchMove={false}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      slidesPerView={1.2}
      spaceBetween={32}
      breakpoints={{
        640: { slidesPerView: 2.2, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
      }}
      className="projects-swiper-bottom w-full"
    >
      {secondRowProjects.map((item, index) => (
        <SwiperSlide key={`${item.url}-bottom-${index}`}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full h-[269px] bg-[#16171d] rounded-[12px] border border-white/10 overflow-hidden opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            <img src={item.img} alt={item.title} className="w-full h-full object-cover object-top" />
            <span className="absolute inset-x-0 bottom-0 bg-black/55 px-3 py-2 text-left text-[13px] font-medium text-white">
              {item.title}
            </span>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  </Reveal>
</section>
  );
}
