import React from "react";
import HomeSmallProduct from "./HomeSmallProduct";

const HomeSmallProductSection = () => {
  return (
    <>
      <section className="container EveryDaySpecial_main__xqm46">
        <div className="landing-page_landing__sectionHeader__X632i">
          <img
            alt="Every Day Low Icon"
            loading="lazy"
            width="40"
            height="40"
            decoding="async"
            data-nimg="1"
            className="landing-page_landing__sectionIcon__8JaKV"
            style={{ color: "transparent" }}
            srcSet="
              /_next/static/media/EveryDayLow.7dc9ec3b.png?w=48&amp;q=80 1x,
              /_next/static/media/EveryDayLow.7dc9ec3b.png?w=96&amp;q=80 2x
            "
            src="/_next/static/media/EveryDayLow.7dc9ec3b.png?w=96&amp;q=80"
          />
          <p className="landing-page_landing__sectionTitle__maj1m undefined">
            Everyday low price!
          </p>
        </div>
        <div className="EveryDaySpecial_swiper_container__1u_y7">
          <div className="swiper EveryDaySpecial_reviewsContainer__5ldZe">
            <div className="swiper-wrapper">
              <HomeSmallProduct />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSmallProductSection;
