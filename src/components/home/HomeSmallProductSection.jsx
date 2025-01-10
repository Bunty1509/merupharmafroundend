import React, { useRef } from "react";
import HomeSmallProduct from "./HomeSmallProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./swiper.css";

const HomeSmallProductSection = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    <section className="container EveryDaySpecial_main__xqm46">
      <div className="landing-page_landing__sectionHeader__X632i">
        <img
          alt="Every Day Low Icon"
          loading="lazy"
          width="40"
          height="40"
          decoding="async"
          className="landing-page_landing__sectionIcon__8JaKV"
          style={{ color: "transparent" }}
          src="/_next/static/media/EveryDayLow.7dc9ec3b.png?w=96&amp;q=80"
        />
        <p className="landing-page_landing__sectionTitle__maj1m undefined">
          Everyday low price!
        </p>
      </div>
      <button ref={prevButtonRef} className="custom-swiper-button prev-button">
        ◀
      </button>
      <button ref={nextButtonRef} className="custom-swiper-button next-button">
        ▶
      </button>
      <Swiper
        // modules={[Navigation]}
        // slidesPerView={3}
        // spaceBetween={20}
        // navigation={{
        //   prevEl: prevButtonRef.current,
        //   nextEl: nextButtonRef.current,
        // }}
        // pagination={{ clickable: true }}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // Autoplay resumes after interaction
        }}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevButtonRef.current;
          swiper.params.navigation.nextEl = nextButtonRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        className="swiper-container"
      >
        <SwiperSlide>
          <HomeSmallProduct name="Cipla 1.0" price="32" />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSmallProduct name="Cipla 2.0" price="32" />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSmallProduct name="Cipla 3.0" price="32" />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSmallProduct name="Cipla 4.0" price="32" />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSmallProduct name="Cipla 5.0" price="32" />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSmallProduct name="Cipla 6.0" price="32" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default HomeSmallProductSection;
