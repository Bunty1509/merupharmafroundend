import React, { useRef, useState } from "react";
import HomeSmallProduct from "./HomeSmallProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./swiper.css";

const HomeSmallProductSection = ({ medicineData }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [allProductData, setAllProductData] = useState(medicineData);
  return (
    <section className="container EveryDaySpecial_main__xqm46">
      <div className="EveryDaySpecial_swiper_container__1u_y7">
        <div className="swiper EveryDaySpecial_reviewsContainer__5ldZe">
          <button
            ref={prevButtonRef}
            className="custom-swiper-button prev-button"
          >
            ◀
          </button>
          <button
            ref={nextButtonRef}
            className="custom-swiper-button next-button"
          >
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
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false, // Autoplay resumes after interaction
            // }}
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
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              330: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 3,
              },
            }}
            // slidesPerView={3}
            // spaceBetween={20}
            // className="swiper-container"
          >
            {allProductData.map((singleData, index) => (
              <SwiperSlide key={`smallProduct_${index}`}>
                <HomeSmallProduct
                  name={singleData.name}
                  price={singleData.MRP}
                  data={singleData}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default HomeSmallProductSection;
