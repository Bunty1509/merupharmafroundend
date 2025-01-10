import React from "react";
import HomeSmallProduct from "./HomeSmallProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const HomeSmallProductSection = () => {
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
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
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
