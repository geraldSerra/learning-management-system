import "./Slider.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { SlideCard } from "components";
import useBreakpoints from "hooks/useBreakpoints";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { createPortal } from "react-dom";

const sliders = [1, 2, 3, 4, 5, 6, 7, 8];

const Slider = () => {
  const breakpoint = useBreakpoints();

  const swipperWrap = document.getElementById(
    "swiper-wrapper-e685b2f57838a9df"
  );

  const SlidePrev = () => {
    const swiper = useSwiper();

    return (
      <div>
        {swipperWrap &&
          createPortal(
            <button onClick={() => swiper.slidePrev()}>
              Slide to the prev slide
            </button>,
            swipperWrap
          )}
      </div>
    );
  };

  const SlideNext = () => {
    const swiper = useSwiper();

    return (
      <button onClick={() => swiper.slideNext()}>
        Slide to the next slide
      </button>
    );
  };

  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={30}
        slidesPerView={
          breakpoint === "xs" || breakpoint === "sm"
            ? 2
            : breakpoint === "md"
            ? 3
            : 4
        }
        slidesPerGroup={
          breakpoint === "xs" || breakpoint === "sm"
            ? 2
            : breakpoint === "md"
            ? 3
            : 4
        }
        navigation={breakpoint === "xs" ? false : true}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        //   onSwiper={(swiper: any) => console.log(swiper)}
        //   onSlideChange={() => console.log("slide change")}
      >
        {sliders.map((_) => (
          <SwiperSlide>
            <SlideCard />
          </SwiperSlide>
        ))}
        <SlidePrev />
      </Swiper>
    </div>
  );
};

export default Slider;
