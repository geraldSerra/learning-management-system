import "./Slider.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectFade } from "swiper/modules";
import useBreakpoints from "hooks/useBreakpoints";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ children }: any) => {
  const slides = [...children];

  const breakpoint = useBreakpoints();

  // const SlideNext = () => {
  //   const swiper = useSwiper();

  //   return (
  //     <button onClick={() => swiper.slideNext()}>
  //       Slide to the next slide
  //     </button>
  //   );
  // };

  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        slidesPerView={
          breakpoint === "xs" || breakpoint === "sm"
            ? "auto"
            : breakpoint === "md"
            ? 3
            : 4
        }
        spaceBetween={15}
        // slidesPerGroup={
        //   breakpoint === "xs" || breakpoint === "sm"
        //     ? 1
        //     : breakpoint === "md"
        //     ? 3
        //     : 4
        // }
        navigation={breakpoint === "xs" ? false : true}
        // pagination={{ clickable: true, dynamicBullets: true }}
        // loop={true}
      >
        <div className="swiper-container">
          {slides.map((slide) => (
            <SwiperSlide>{slide}</SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
