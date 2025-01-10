import React, { useRef, useState } from "react";
import HomeProduct from "./HomeProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./swiper.css";

const HomeProductSection = ({ medicineData }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [allProductData, setAllProductData] = useState(medicineData);
  const [data, setData] = useState(medicineData[0]);
  return (
    <section className="container AdvantageSection_main__xh83o">
      <div className="landing-page_landing__sectionHeader__X632i">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="1em"
          height="1em"
          fill="none"
          viewBox="0 0 24 24"
          className="landing-page_landing__sectionIcon__8JaKV"
        >
          <path fill="url(#Sheild_svg__a)" d="M0 0h24v24H0z"></path>
          <defs>
            <pattern
              id="Sheild_svg__a"
              width="1"
              height="1"
              patternContentUnits="objectBoundingBox"
            >
              <use
                xlinkHref="#Sheild_svg__b"
                transform="matrix(.0013 0 0 .0013 -.045 -.045)"
              ></use>
            </pattern>
          </defs>
        </svg>
        <p className="landing-page_landing__sectionTitle__maj1m undefined">
          The Meru PharmaRx Advantage
        </p>
      </div>

      <div className="AdvantageSection_swiper_container__umaiP">
        <div className="swiper AdvantageSection_reviewsContainer__ZBxfl">
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
            // slidesPerView={4}
            breakpoints={{
              768: {
                slidesPerView: 2, // For screens between 768px and 1067px
              },
              1068: {
                slidesPerView: 3, // For screens between 1068px and 1400px
              },
              1401: {
                slidesPerView: 4, // For screens above 1400px
              },
            }}
          >
            {allProductData.map((singleData, index) => (
              <SwiperSlide key={`Product_${index}`}>
                <HomeProduct data={singleData} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const HomeProductSections = () => {
  return (
    <div>
      <SwiperSlide>
        <div className="AdvantageSection_swiper_container__umaiP">
          <div className="swiper AdvantageSection_reviewsContainer__ZBxfl">
            {/* <div className="swiper-wrapper"> */}
            <HomeProduct data={data} />
            {/* </div> */}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="AdvantageSection_swiper_container__umaiP">
          <div className="swiper AdvantageSection_reviewsContainer__ZBxfl">
            {/* <div className="swiper-wrapper"> */}
            <HomeProduct data={data} />
            {/* </div> */}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="AdvantageSection_swiper_container__umaiP">
          <div className="swiper AdvantageSection_reviewsContainer__ZBxfl">
            {/* <div className="swiper-wrapper"> */}
            <HomeProduct data={data} />
            {/* </div> */}
          </div>
        </div>
      </SwiperSlide>
    </div>
  );
};

export default HomeProductSection;
