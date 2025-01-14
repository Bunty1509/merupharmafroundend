import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Moleculer from "../../assets/media/Moleculer.png";
import who from "../../assets/media/whoIcon.png";
import certification1 from "../../assets/media/certification1.png";
import certification2 from "../../assets/media/certification2.png";
import certification3 from "../../assets/media/certification3.png";
import ProductInfo from "./ProductInfo";
import medicineData from "../../assets/data/pharmaData.json";
import NoProductInfo from "./NoProductInfo";

const SearchProduct = () => {
  const { name, productId } = useParams();
  const [data, setData] = useState({});
  const [recData, setRecommendData] = useState({});
  useEffect(() => {
    const findProduct = medicineData.filter(
      (medData) => medData.Product_id === productId
    );

    if (findProduct.length > 0) {
      setData(findProduct[0]);
      setRecommendData(findProduct[0]);
    }
  }, [productId]);
  return (
    <>
      <section className="container PdpComponent_pdp_page_container__AXnZ4">
        {data.Product_id ? (
          <>
            <div className="PdpComponent_pdp_page_container__content__ucx0m">
              <div className="drug-pdp-item_DrugPdpItem__pO8GN">
                <div className="drug-pdp-item_headertext__OfshM">
                  We recommend
                  <span style={{ color: "#219653" }}>
                    {" "}
                    Recommand {recData.name}{" "}
                  </span>{" "}
                  instead of
                  <span style={{ color: "var(--primary-color)" }}>
                    {" "}
                    {data.name}{" "}
                  </span>
                  . Exact salt composition from top brand
                </div>
                <div className="drug-pdp-item_headerCotainerMobile__Cf8Kl">
                  <div className="drug-pdp-item_headerCotainerMobile__savings__0Vvfl">
                    <div>
                      <div className="drug-pdp-item_headerCotainerMobile__savings__heading__3ynUB">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="none"
                          viewBox="0 0 67 24"
                          className="drug-pdp-item_headerCotainerMobile__savings__icon__OiEHq"
                        >
                          <path
                            fill="#509854"
                            d="M.5 4.174A4.174 4.174 0 0 1 4.674 0H56.82c1.33 0 2.58.633 3.366 1.706l5.586 7.618a4.17 4.17 0 0 1 .05 4.867l-5.64 8.033A4.17 4.17 0 0 1 56.764 24H4.674A4.174 4.174 0 0 1 .5 19.826z"
                          ></path>
                          <g fill="#fff" stroke="#2A882F">
                            <path d="M52 14.9h.5v-.5c0-3.755-2.458-6.382-5.65-6.382-3.142 0-5.91 2.714-5.91 5.889 0 3.273 2.727 5.84 6.309 5.84 2.536 0 4.276-1.094 5.15-2.814l.218-.43-.422-.234-2.211-1.223-.262-.145zm-6.712 0h4.166l-.17.38q-.227.518-.65.777c-.287.177-.68.29-1.22.29-.722 0-1.245-.23-1.6-.571a2.04 2.04 0 0 1-.526-.875Zm.035-2.67c.094-.252.223-.469.381-.639.258-.277.614-.455 1.098-.455.447 0 .788.17 1.03.44.154.172.277.393.355.654zM33.14 19.203l.127.31h3.609l.128-.309L41.26 8.945l.287-.691h-4.0040000000000004l-.125.315-2.209 5.542-2.128-5.537-.123-.32h-4.336l.285.69zM24.235 18.948v.565h4.104v-6.971c0-1.495-.466-2.655-1.363-3.431-.884-.765-2.113-1.093-3.511-1.093-2.236 0-4.3.814-5.22 2.627l-.213.419.405.238 2.117 1.247.479.283.23-.507c.246-.541.822-.906 1.802-.906.49 0 .75.098.882.202.11.087.194.23.194.521 0 .172-.029.254-.05.293-.018.032-.048.069-.131.11a1.8 1.8 0 0 1-.456.135c-.218.043-.481.077-.807.119-1.027.128-2.25.311-3.22.8-.493.248-.943.585-1.269 1.055-.33.475-.511 1.055-.511 1.747 0 1.014.377 1.872 1.087 2.468.7.587 1.672.879 2.8.879 1.062 0 1.96-.263 2.65-.8Zm-1.04-3.604.011-.001c.358-.051.689-.11.982-.22v.101c0 .618-.18.99-.413 1.21-.24.226-.607.36-1.11.36-.413 0-.631-.096-.74-.19-.098-.084-.17-.219-.17-.462 0-.166.04-.268.09-.339a.7.7 0 0 1 .271-.212c.282-.14.668-.198 1.078-.247ZM4.152 16.541l-.258.295.224.321c.616.885 1.602 1.53 2.7 1.952 1.103.424 2.358.639 3.566.639 3.899 0 6.685-2.304 6.685-5.488 0-1.215-.409-2.26-1.196-3.074-.779-.806-1.896-1.354-3.267-1.65l-1.858-.4-.004-.001c-.582-.121-.953-.296-1.174-.496-.2-.182-.309-.413-.309-.756 0-.384.148-.691.424-.913.287-.23.754-.399 1.428-.399 1.175 0 2.354.517 2.92 1.395l.335.52.438-.438 2.187-2.188.292-.292-.231-.342c-1.071-1.58-3.455-2.478-5.8-2.478-3.742 0-6.544 2.31-6.544 5.512 0 1.2.395 2.24 1.177 3.052.775.805 1.893 1.352 3.287 1.648l1.857.4h.002c.622.132.997.326 1.212.533.2.193.296.428.296.743 0 .383-.146.68-.425.895-.294.226-.78.393-1.497.393-1.433 0-2.906-.635-3.636-1.67l-.366-.518-.419.476z"></path>
                          </g>
                          <circle
                            cx="57.891"
                            cy="12"
                            r="2.87"
                            fill="#fff"
                            stroke="#106A15"
                            strokeWidth="0.522"
                          ></circle>
                        </svg>
                        50%
                        <p className="drug-pdp-item_headerCotainerMobile__savings__subHeading__pOl4b">
                          with Substitute Medicine
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="drug-pdp-item_headerCotainerMobile__divider__jU_jP"></div>
                  <div className="drug-pdp-item_headerCotainerMobile__salt__ZXtKx">
                    <p className="drug-pdp-item_headerCotainerMobile__salt__same__3qiZ5">
                      100% Same
                    </p>
                    <p className="RoatatingText_words_wrapper__TS3mD">
                      <span className="RoatatingText_words__Nqk4K">
                        <span className="RoatatingText_rotatingText_adjective__qdEtl RoatatingText_current__mlmat">
                          Salt Composition
                        </span>
                        <span className="RoatatingText_rotatingText_adjective__qdEtl RoatatingText_next__bA4bB">
                          Effectiveness
                        </span>
                        <span className="RoatatingText_rotatingText_adjective__qdEtl">
                          Strength
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="SaltContainer_saltMobileContainer__hHry4">
                      <div className="SaltContainer_saltMobileContainer__content__6nYRW">
                        <div className="SaltContainer_saltMobileContainer__title__6oONw">
                          <img
                            alt="Molecule"
                            loading="lazy"
                            width="112"
                            height="112"
                            decoding="async"
                            // data-nimg="1"
                            className="SaltContainer_saltMobileContainer__icon__Qjd4A"
                            style={{ color: "transparent" }}
                            srcSet={`
                        ${Moleculer}?w=128&amp;q=80 1x,
                         ${Moleculer}?w=256&amp;q=80 2x
                        `}
                            src={`${Moleculer}?w=256&amp;q=80`}
                          />
                          Salt Composition in both
                        </div>
                        <div className="SaltContainer_saltMobileContainer__composition__gAgOG">
                          <p className="SaltContainer_saltMobileContainer__composition__less_salt__8sJEb">
                            {data.salt_composition}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="SaltContainer_saltContainer__L35Ri">
                      <div className="SaltContainer_saltContainer__content__j20Fk">
                        <div className="SaltContainer_saltContainer__title__29nHv">
                          <img
                            alt="Molecule"
                            loading="lazy"
                            width="112"
                            height="112"
                            decoding="async"
                            // data-nimg="1"
                            style={{
                              color: "transparent",
                              width: "28px",
                              height: "28px",
                            }}
                            srcSet={`
                          ${Moleculer}?w=128&amp;q=80 1x,
                          ${Moleculer}?w=256&amp;q=80 2x
                        `}
                            src={`${Moleculer}?w=256&amp;q=80`}
                          />
                          Salt Composition
                        </div>
                        <div className="SaltContainer_saltContainer__composition__t6kdN">
                          <p className="MuiTypography-root MuiTypography-body1 SaltContainer_saltContainer__composition__less_salt__i43Dd platinumrx-1rj2rce">
                            {data.salt_composition}
                            <span
                              style={{ color: "#68757d", fontWeight: "400" }}
                            >
                              (same for both)
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="drug-pdp-item_fullDetailsContainer__IuPM_">
                  <div className="drug-pdp-item_genericContainer__WD0W6">
                    <div className="drug-pdp-item_genericContainer__chip__7oyaH">
                      You Searched
                    </div>
                    <div
                      style={{
                        backgroundColor: "#ebebeb",
                        borderRadius: "8px",
                      }}
                      className="drug-pdp-item_genericContainer__details__GWGi5"
                    >
                      <div className="DesktopView_DesktopView__Zmv2L">
                        <div className="DesktopView_contentContainer__88Cqo">
                          <div>
                            <div className="DesktopView_headers__9DUKY">
                              <p>You Searched</p>
                              <div className="DesktopView_discountChip__TMURL">
                                <div>Prescription Required</div>
                              </div>
                            </div>
                            <div
                              className="DesktopView_imgContainer__TTSOT"
                              style={{ placeContent: "center" }}
                            >
                              <div className="DesktopView_itemImg__yveJ8">
                                <div className="swiper">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide DesktopView_image__Mnr0t">
                                      <img
                                        src="https://platinumrxassets.blob.core.windows.net/platinumrx-assets/default_image.jpg"
                                        alt="Minoxinol 5% w/v Solution"
                                        loading="lazy"
                                        // fetchPriority="high"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-pagination"></div>
                                </div>
                              </div>
                            </div>
                            <div className="DesktopView_textContainer__WKx2r">
                              <div className="DesktopView_displayName__SfqwH">
                                {data.name}
                              </div>
                              <div className="DesktopView_manufacturerNameContainer__XXerb">
                                <div className="DesktopView_manufacturerName__rQgKp">
                                  {data.manufacturers}
                                </div>
                                <div className="DesktopView_divider__zOLQF"></div>
                                <div className="DesktopView_drugCategory__RYhK_">
                                  {data.name} {data.Qty}
                                  {Number(data.Qty) > 1 && `'s`}
                                </div>
                              </div>
                              <div className="DesktopView_genricBelowCont__c7wew">
                                <div>
                                  <div className="drug-pdp-item_productPrice__s6uPn">
                                    <div className="drug-pdp-item_priceContainer__tjypd">
                                      <div>
                                        <p className="drug-pdp-item_genericPrice__Tlx6p">
                                          ₹{data.MRP}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="drug-pdp-item_unitPrice__WeO5v false">
                                      ₹ {data.MRP / data.Qty} / ml
                                    </div>
                                  </div>
                                </div>
                                <div className="DesktopView_genricBelowCont__boxAnimated__qX0xB">
                                  <div className="DesktopView_genricBelowCont__arrowBox__PCM7Q">
                                    We only sell the best substitute from top
                                    brands
                                  </div>
                                  <div className="DesktopView_arrowAnimation__arrow__pxRoV DesktopView_arrowAnimation__arrowAnimated__L8b7U">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="96"
                                      height="27"
                                      fill="none"
                                      viewBox="0 0 96 27"
                                    >
                                      <path
                                        fill="url(#arrow_svg__a)"
                                        d="M.43.81c3.753 8.813 25.716 21.379 41.658 24.238 17.254 3.1 27.29 1.681 48.14-6.936-.365 1.345-.702 2.392-.93 3.457-.247 1.16-.487 2.341-.53 3.518-.018.367.592.996.99 1.07.386.066 1.113-.328 1.268-.702 1.367-3.205 2.66-6.44 3.92-9.692.42-1.083.059-1.918-1.13-2.275-4.373-1.308-8.736-2.676-13.14-3.897-1.035-.288-2.218-.072-3.634-.093.969 2.943 3.432 2.734 5.142 3.593 1.802.912 3.77 1.497 6.085 2.392-5.84 3.534-11.651 5.66-17.76 6.879-22.443 4.48-42.576-1.068-60.83-14.368-2.377-1.73-4.556-3.736-6.845-5.59-.616-.5-1.327-.888-2.397-1.594z"
                                      ></path>
                                      <defs>
                                        <linearGradient
                                          id="arrow_svg__a"
                                          x1="88.768"
                                          x2="4.12"
                                          y1="20.51"
                                          y2="7.68"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stop-color="#19730A"></stop>
                                          <stop
                                            offset="1"
                                            stop-color="#25BC0D"
                                          ></stop>
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="MobileView_mobileView__o_zez">
                        <div>
                          <div className="MobileView_imgContainer__Ne3ID">
                            <div className="DesktopView_itemImg__yveJ8">
                              <div className="swiper">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide DesktopView_image__Mnr0t">
                                    <img
                                      src="https://platinumrxassets.blob.core.windows.net/platinumrx-assets/default_image.jpg"
                                      alt="Minoxinol 5% w/v Solution"
                                      loading="lazy"
                                      // fetchPriority="high"
                                    />
                                  </div>
                                </div>
                                <div className="swiper-pagination"></div>
                              </div>
                            </div>
                          </div>
                          <div className="MobileView_textContainer__VXMVH">
                            <div className="MobileView_displayName__3sqND">
                              {data.name}
                            </div>
                            <div className="MobileView_drug_manufacturer_container__X1e37">
                              <div className="MobileView_manufacturerName__enxNQ">
                                {data.manufacturers}
                              </div>
                              <div className="MobileView_drugCategory__EWTxR">
                                {data.name} {data.Qty}
                                {Number(data.Qty) > 1 && `'s`}
                              </div>
                            </div>
                            <div className="MobileView_genricBelowCont__POKNp">
                              <div className="MobileView_genricBelowCont__price_and_Assured__5bx_c">
                                <div className="drug-pdp-item_productPrice__s6uPn">
                                  <div className="drug-pdp-item_priceContainer__tjypd">
                                    <div>
                                      <p className="drug-pdp-item_genericPrice__Tlx6p">
                                        ₹{data.MRP}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="drug-pdp-item_unitPrice__WeO5v false">
                                    ₹{data.MRP / data.Qty} / {data.Product_Form}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="drug-pdp-item_widthForNonGenric__eB5OS">
                    <div className="drug-pdp-item_conditionalsubstituteContainer__HdE1a">
                      <div
                        style={{ width: "calc(52% + 1px)" }}
                        className="drug-pdp-item_substituteContainer__chip__UHEBZ"
                      >
                        Our Recommendation
                      </div>
                      <div className="drug-pdp-item_conditionalsubstituteContainer__details__xKbtc">
                        <div className="DesktopView_DesktopView__Zmv2L">
                          <div className="DesktopView_contentContainer__88Cqo">
                            <div>
                              <div className="DesktopView_headers__9DUKY">
                                <p>Our Recommendation</p>
                              </div>
                              <div
                                className="DesktopView_imgContainer__TTSOT"
                                style={{ placeContent: "center" }}
                              >
                                <div className="DesktopView_itemImg__yveJ8">
                                  <div className="swiper">
                                    <div className="swiper-wrapper">
                                      <div className="swiper-slide DesktopView_image__Mnr0t">
                                        <img
                                          src="https://flexipillstorage.blob.core.windows.net/meds-prescriptions/c7b84a22-d74e-47c6-8d72-7eca12825508_cswm"
                                          alt="Minkesh Forte 5% Solution 60ml"
                                          loading="lazy"
                                          // fetchPriority="high"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="DesktopView_textContainer__WKx2r">
                                <div className="DesktopView_displayName__SfqwH">
                                  Recommended {recData.name}
                                </div>
                                <div className="DesktopView_manufacturerNameContainer__XXerb">
                                  <div className="DesktopView_manufacturerName__rQgKp">
                                    Recommended {recData.manufacturers}
                                  </div>
                                  <div className="DesktopView_divider__zOLQF"></div>
                                  <div className="DesktopView_drugCategory__RYhK_">
                                    Recommended {recData.name} {recData.Qty}
                                    {Number(recData.Qty) > 1 && `'s`}
                                  </div>
                                </div>
                                <div className="DesktopView_genricBelowCont__c7wew">
                                  <div>
                                    <div className="drug-pdp-item_productPrice__s6uPn">
                                      <div className="drug-pdp-item_priceContainer__tjypd">
                                        <p className="drug-pdp-item_substitutePrice__yIVMU">
                                          ₹{data.MRP / 2}
                                        </p>
                                        <div>
                                          <p className="drug-pdp-item_itemMrp__U2B8Q">
                                            MRP ₹<span>{data.MRP}</span>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="drug-pdp-item_unitPrice__WeO5v false">
                                        ₹{data.MRP / (2 * data.Qty)} / ml
                                        <div className="drug-pdp-item_discountLabel__DM5Y6">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="64"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 56 20"
                                          >
                                            <path
                                              fill="#509854"
                                              d="M.427 3.478A3.48 3.48 0 0 1 3.905 0H47.36c1.108 0 2.15.528 2.804 1.421L54.82 7.77a3.48 3.48 0 0 1 .041 4.055l-4.7 6.695A3.48 3.48 0 0 1 47.313 20H3.905A3.48 3.48 0 0 1 .427 16.52z"
                                            ></path>
                                            <circle
                                              cx="48.251"
                                              cy="9.999"
                                              r="2.391"
                                              fill="#fff"
                                              stroke="#106A15"
                                              stroke-width="0.435"
                                            ></circle>
                                          </svg>
                                          <p className="drug-pdp-item_discountLabelText__X5bK2">
                                            50% OFF
                                          </p>
                                        </div>
                                      </div>
                                      <div className="drug-pdp-item_SavingLabel__cUg1g">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          fill="none"
                                          viewBox="0 0 23 22"
                                        >
                                          <path
                                            fill="#fff"
                                            d="m19.323 11 1.012-1.749A.917.917 0 0 0 20 7.999l-1.75-1.012V4.97a.917.917 0 0 0-.917-.917h-2.016l-1.011-1.75a.92.92 0 0 0-.913-.45.9.9 0 0 0-.34.115l-1.75 1.012-1.75-1.013a.917.917 0 0 0-1.253.336l-1.012 1.75H5.272a.917.917 0 0 0-.916.917v2.016L2.605 7.998A.915.915 0 0 0 2.27 9.25L3.282 11 2.27 12.749a.92.92 0 0 0 .334 1.253l1.75 1.012v2.016a.917.917 0 0 0 .917.916h2.017L8.3 19.698a.93.93 0 0 0 .794.459c.16 0 .318-.043.459-.124l1.749-1.012 1.75 1.012a.917.917 0 0 0 1.253-.335l1.011-1.75h2.016a.917.917 0 0 0 .916-.917v-2.016L20 14.002a.92.92 0 0 0 .335-1.253zM9.01 6.408a1.375 1.375 0 1 1 0 2.75 1.375 1.375 0 0 1 0-2.75m.275 8.8-1.466-1.1 5.5-7.333 1.466 1.1zm4.309.366a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751"
                                          ></path>
                                        </svg>
                                        64% More Savings
                                      </div>
                                    </div>
                                    <div>
                                      <div className="customer-trust_purchased_frequency__s0OL2">
                                        <div className="customer-trust_who_cont__onCYN">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            fill="none"
                                            viewBox="0 0 16 15"
                                          >
                                            <path
                                              fill="#509854"
                                              d="M8.62 8c1.035 0 1.875.84 1.875 1.875l-.001.935c.128 2.296-1.64 3.441-4.919 3.441-3.268 0-5.075-1.13-5.075-3.408v-.968C.5 8.839 1.34 8 2.375 8zm5 0c1.036 0 1.876.84 1.876 1.875l-.002.658c.114 2.06-1.449 3.092-4.304 3.092q-.583 0-1.093-.057c.671-.62 1.03-1.46 1.029-2.522l-.008-.27.002-.901c0-.747-.328-1.417-.847-1.876zM5.5.5a3.126 3.126 0 1 1 0 6.251A3.126 3.126 0 0 1 5.5.5m6.25 1.25a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
                                            ></path>
                                          </svg>
                                          <p className="customer-trust_random_value__u_x0W">
                                            2,950+ Customers trust this
                                          </p>
                                        </div>
                                        <div className="customer-trust_divider__Dk6cQ"></div>
                                        <div className="customer-trust_who_cont__onCYN">
                                          <img
                                            alt="who"
                                            loading="lazy"
                                            width="16"
                                            height="16"
                                            decoding="async"
                                            data-nimg="1"
                                            className="customer-trust_purchased_frequency__icon__9WNbN"
                                            srcSet={`
              ${who}?w=16&amp;q=80 1x,
              ${who}?w=32&amp;q=80 2x
            `}
                                            src={`${who}?w=32&amp;q=80`}
                                            style={{ color: "transparent" }}
                                          />
                                          <p className="customer-trust_who_text__W_7aD">
                                            WHO GMP Certified
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="DesktopView_substituteContainer__4Y0NF">
                              <div>
                                <div className="drug-pdp-item_brandAndAssured__QRxjJ">
                                  <div>
                                    <div>Marketed by</div>
                                    <img
                                      className="drug-pdp-item_brandAndAssured__manufacturerLogo__fdTG2"
                                      src="https://flexipillstorage.blob.core.windows.net/brand-images/Morepen.png"
                                      alt="Dr. Morepen"
                                      loading="eager"
                                    />
                                  </div>
                                  <hr className="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem platinumrx-1d7q5f8" />
                                  <div>
                                    <p>Assured by</p>
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        fontWeight: "300",
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        fill="none"
                                        viewBox="0 0 19 24"
                                        className="drug-pdp-item_brandAndAssured__PlatinumShield__qjePn"
                                      >
                                        <path
                                          fill="#036068"
                                          fillRule="evenodd"
                                          d="M.503 4.378c-1.237 9.514 1.691 17.908 8.996 19.25 7.305-1.342 10.239-9.736 8.996-19.25C15.33 3.511 12.332 2.328 9.5.371 6.666 2.327 3.67 3.511.503 4.378"
                                          clipRule="evenodd"
                                        ></path>
                                        <path
                                          fill="#fff"
                                          d="M6.676 13.945h-.349c-1.068 0-1.934-.915-1.934-2.035v-.027c0-1.12.866-2.034 1.934-2.034h.233c.169 0 .312.148.312.327a.32.32 0 0 1-.312.328h-.233c-.724 0-1.316.618-1.316 1.385v.026c0 .761.592 1.385 1.316 1.385h.349c.17 0 .312.148.312.328a.32.32 0 0 1-.312.328zM9.579 10.51h-1.84a.32.32 0 0 1-.312-.328.32.32 0 0 1 .312-.328h1.84c.729 0 1.321-.624 1.321-1.39s-.592-1.39-1.321-1.39h-.233c-.73 0-1.321.624-1.321 1.39v.518a.32.32 0 0 1-.312.328.32.32 0 0 1-.312-.328v-.518c0-1.131.872-2.046 1.945-2.046h.233c1.073 0 1.945.92 1.945 2.046s-.872 2.046-1.945 2.046M12.628 13.945h-.254a.323.323 0 0 1-.312-.328.32.32 0 0 1 .312-.327h.254c.724 0 1.316-.619 1.316-1.385v-.026c0-.762-.592-1.385-1.316-1.385h-.344a.323.323 0 0 1-.312-.328.32.32 0 0 1 .312-.328h.344c1.067 0 1.94.915 1.94 2.035v.027c0 1.12-.873 2.035-1.94 2.035zM9.626 17.386h-.222c-1.068 0-1.935-.92-1.935-2.045s.867-2.046 1.935-2.046h1.93c.168 0 .311.148.311.328a.32.32 0 0 1-.312.328h-1.93c-.723 0-1.315.623-1.315 1.39s.592 1.39 1.316 1.39h.222c.724 0 1.316-.624 1.316-1.39v-.518a.32.32 0 0 1 .312-.328.32.32 0 0 1 .312.328v.518c0 1.13-.867 2.045-1.935 2.045z"
                                        ></path>
                                      </svg>
                                      Platinum
                                      <span style={{ fontWeight: "400" }}>
                                        Rx
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="drug-pdp-item_brandAndAssuredMobile__z40x8">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    fill="none"
                                    viewBox="0 0 19 24"
                                    className="drug-pdp-item_brandAndAssuredMobile__icon__mPJUp"
                                  >
                                    <path
                                      fill="#036068"
                                      fillRule="evenodd"
                                      d="M.503 4.378c-1.237 9.514 1.691 17.908 8.996 19.25 7.305-1.342 10.239-9.736 8.996-19.25C15.33 3.511 12.332 2.328 9.5.371 6.666 2.327 3.67 3.511.503 4.378"
                                      clipRule="evenodd"
                                    ></path>
                                    <path
                                      fill="#fff"
                                      d="M6.676 13.945h-.349c-1.068 0-1.934-.915-1.934-2.035v-.027c0-1.12.866-2.034 1.934-2.034h.233c.169 0 .312.148.312.327a.32.32 0 0 1-.312.328h-.233c-.724 0-1.316.618-1.316 1.385v.026c0 .761.592 1.385 1.316 1.385h.349c.17 0 .312.148.312.328a.32.32 0 0 1-.312.328zM9.579 10.51h-1.84a.32.32 0 0 1-.312-.328.32.32 0 0 1 .312-.328h1.84c.729 0 1.321-.624 1.321-1.39s-.592-1.39-1.321-1.39h-.233c-.73 0-1.321.624-1.321 1.39v.518a.32.32 0 0 1-.312.328.32.32 0 0 1-.312-.328v-.518c0-1.131.872-2.046 1.945-2.046h.233c1.073 0 1.945.92 1.945 2.046s-.872 2.046-1.945 2.046M12.628 13.945h-.254a.323.323 0 0 1-.312-.328.32.32 0 0 1 .312-.327h.254c.724 0 1.316-.619 1.316-1.385v-.026c0-.762-.592-1.385-1.316-1.385h-.344a.323.323 0 0 1-.312-.328.32.32 0 0 1 .312-.328h.344c1.067 0 1.94.915 1.94 2.035v.027c0 1.12-.873 2.035-1.94 2.035zM9.626 17.386h-.222c-1.068 0-1.935-.92-1.935-2.045s.867-2.046 1.935-2.046h1.93c.168 0 .311.148.311.328a.32.32 0 0 1-.312.328h-1.93c-.723 0-1.315.623-1.315 1.39s.592 1.39 1.316 1.39h.222c.724 0 1.316-.624 1.316-1.39v-.518a.32.32 0 0 1 .312-.328.32.32 0 0 1 .312.328v.518c0 1.13-.867 2.045-1.935 2.045z"
                                    ></path>
                                  </svg>
                                  PlatinumRx <br />
                                  Assured
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="MobileView_mobileView__o_zez">
                          <div>
                            <div className="MobileView_imgContainer__Ne3ID">
                              <div className="DesktopView_itemImg__yveJ8">
                                <div className="swiper">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide DesktopView_image__Mnr0t">
                                      <img
                                        src="https://flexipillstorage.blob.core.windows.net/meds-prescriptions/c7b84a22-d74e-47c6-8d72-7eca12825508_cswm"
                                        alt="Minkesh Forte 5% Solution 60ml"
                                        loading="lazy"
                                        // fetchPriority="high"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-pagination"></div>
                                </div>
                              </div>
                            </div>
                            <div className="MobileView_textContainer__VXMVH">
                              <div className="MobileView_displayName__3sqND">
                                Recommended {recData.name}
                              </div>
                              <div className="MobileView_drug_manufacturer_container__X1e37">
                                <img
                                  alt="Dr. Morepen"
                                  loading="lazy"
                                  width="300"
                                  height="300"
                                  decoding="async"
                                  // data-nimg="1"
                                  className="MobileView_manufacturerLogo__pT6P1"
                                  style={{ color: "transparent" }}
                                  srcSet="
                                https://flexitest.gumlet.io/brand-images/Morepen.png?w=384&amp;q=80 1x,
                                https://flexitest.gumlet.io/brand-images/Morepen.png?w=640&amp;q=80 2x
                              "
                                  src="https://flexitest.gumlet.io/brand-images/Morepen.png?w=640&amp;q=80"
                                />
                                <div className="MobileView_drugCategory__EWTxR">
                                  Recommended {recData.name} {recData.Qty}
                                  {Number(recData.Qty) > 1 && `'s`}
                                </div>
                              </div>
                              <div className="MobileView_genricBelowCont__POKNp">
                                <div className="MobileView_genricBelowCont__price_and_Assured__5bx_c">
                                  <div className="drug-pdp-item_productPrice__s6uPn">
                                    <div className="drug-pdp-item_priceContainer__tjypd">
                                      <p className="drug-pdp-item_substitutePrice__yIVMU">
                                        ₹264
                                      </p>
                                      <div>
                                        <p className="drug-pdp-item_itemMrp__U2B8Q">
                                          MRP ₹<span>880</span>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="drug-pdp-item_unitPrice__WeO5v false">
                                      ₹4.4 / ml
                                      <div className="drug-pdp-item_discountLabel__DM5Y6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="64"
                                          height="24"
                                          fill="none"
                                          viewBox="0 0 56 20"
                                        >
                                          <path
                                            fill="#509854"
                                            d="M.427 3.478A3.48 3.48 0 0 1 3.905 0H47.36c1.108 0 2.15.528 2.804 1.421L54.82 7.77a3.48 3.48 0 0 1 .041 4.055l-4.7 6.695A3.48 3.48 0 0 1 47.313 20H3.905A3.48 3.48 0 0 1 .427 16.52z"
                                          ></path>
                                          <circle
                                            cx="48.251"
                                            cy="9.999"
                                            r="2.391"
                                            fill="#fff"
                                            stroke="#106A15"
                                            strokeWidth="0.435"
                                          ></circle>
                                        </svg>
                                        <p className="drug-pdp-item_discountLabelText__X5bK2">
                                          64% OFF
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="drug-pdp-item_brandAndAssured__QRxjJ">
                                    <div>
                                      <div>Marketed by</div>
                                      <img
                                        className="drug-pdp-item_brandAndAssured__manufacturerLogo__fdTG2"
                                        src="https://flexipillstorage.blob.core.windows.net/brand-images/Morepen.png"
                                        alt="Dr. Morepen"
                                        loading="lazy"
                                      />
                                    </div>
                                    <hr className="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem platinumrx-1d7q5f8" />
                                    <div>
                                      <p>Assured by</p>
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          fontWeight: "300",
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1em"
                                          height="1em"
                                          fill="none"
                                          viewBox="0 0 19 24"
                                          className="drug-pdp-item_brandAndAssured__PlatinumShield__qjePn"
                                        >
                                          <path
                                            fill="#036068"
                                            fillRule="evenodd"
                                            d="M.503 4.378c-1.237 9.514 1.691 17.908 8.996 19.25 7.305-1.342 10.239-9.736 8.996-19.25C15.33 3.511 12.332 2.328 9.5.371 6.666 2.327 3.67 3.511.503 4.378"
                                            clipRule="evenodd"
                                          ></path>
                                          <path
                                            fill="#fff"
                                            d="M6.676 13.945h-.349c-1.068 0-1.934-.915-1.934-2.035v-.027c0-1.12.866-2.034 1.934-2.034h.233c.169 0 .312.148.312.327a.32.32 0 0 1-.312.328h-.233c-.724 0-1.316.618-1.316 1.385v.026c0 .761.592 1.385 1.316 1.385h.349c.17 0 .312.148.312.328a.32.32 0 0 1-.312.328zM9.579 10.51h-1.84a.32.32 0 0 1-.312-.328.32.32 0 0 1 .312-.328h1.84c.729 0 1.321-.624 1.321-1.39s-.592-1.39-1.321-1.39h-.233c-.73 0-1.321.624-1.321 1.39v.518a.32.32 0 0 1-.312.328.32.32 0 0 1-.312-.328v-.518c0-1.131.872-2.046 1.945-2.046h.233c1.073 0 1.945.92 1.945 2.046s-.872 2.046-1.945 2.046M12.628 13.945h-.254a.323.323 0 0 1-.312-.328.32.32 0 0 1 .312-.327h.254c.724 0 1.316-.619 1.316-1.385v-.026c0-.762-.592-1.385-1.316-1.385h-.344a.323.323 0 0 1-.312-.328.32.32 0 0 1 .312-.328h.344c1.067 0 1.94.915 1.94 2.035v.027c0 1.12-.873 2.035-1.94 2.035zM9.626 17.386h-.222c-1.068 0-1.935-.92-1.935-2.045s.867-2.046 1.935-2.046h1.93c.168 0 .311.148.311.328a.32.32 0 0 1-.312.328h-1.93c-.723 0-1.315.623-1.315 1.39s.592 1.39 1.316 1.39h.222c.724 0 1.316-.624 1.316-1.39v-.518a.32.32 0 0 1 .312-.328.32.32 0 0 1 .312.328v.518c0 1.13-.867 2.045-1.935 2.045z"
                                          ></path>
                                        </svg>
                                        MeruPharma
                                        <span style={{ fontWeight: "400" }}>
                                          Rx
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="drug-pdp-item_brandAndAssuredMobile__z40x8">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1em"
                                      height="1em"
                                      fill="none"
                                      viewBox="0 0 19 24"
                                      className="drug-pdp-item_brandAndAssuredMobile__icon__mPJUp"
                                    >
                                      <path
                                        fill="#036068"
                                        fillRule="evenodd"
                                        d="M.503 4.378c-1.237 9.514 1.691 17.908 8.996 19.25 7.305-1.342 10.239-9.736 8.996-19.25C15.33 3.511 12.332 2.328 9.5.371 6.666 2.327 3.67 3.511.503 4.378"
                                        clipRule="evenodd"
                                      ></path>
                                      <path
                                        fill="#fff"
                                        d="M6.676 13.945h-.349c-1.068 0-1.934-.915-1.934-2.035v-.027c0-1.12.866-2.034 1.934-2.034h.233c.169 0 .312.148.312.327a.32.32 0 0 1-.312.328h-.233c-.724 0-1.316.618-1.316 1.385v.026c0 .761.592 1.385 1.316 1.385h.349c.17 0 .312.148.312.328a.32.32 0 0 1-.312.328zM9.579 10.51h-1.84a.32.32 0 0 1-.312-.328.32.32 0 0 1 .312-.328h1.84c.729 0 1.321-.624 1.321-1.39s-.592-1.39-1.321-1.39h-.233c-.73 0-1.321.624-1.321 1.39v.518a.32.32 0 0 1-.312.328.32.32 0 0 1-.312-.328v-.518c0-1.131.872-2.046 1.945-2.046h.233c1.073 0 1.945.92 1.945 2.046s-.872 2.046-1.945 2.046M12.628 13.945h-.254a.323.323 0 0 1-.312-.328.32.32 0 0 1 .312-.327h.254c.724 0 1.316-.619 1.316-1.385v-.026c0-.762-.592-1.385-1.316-1.385h-.344a.323.323 0 0 1-.312-.328.32.32 0 0 1 .312-.328h.344c1.067 0 1.94.915 1.94 2.035v.027c0 1.12-.873 2.035-1.94 2.035zM9.626 17.386h-.222c-1.068 0-1.935-.92-1.935-2.045s.867-2.046 1.935-2.046h1.93c.168 0 .311.148.311.328a.32.32 0 0 1-.312.328h-1.93c-.723 0-1.315.623-1.315 1.39s.592 1.39 1.316 1.39h.222c.724 0 1.316-.624 1.316-1.39v-.518a.32.32 0 0 1 .312-.328.32.32 0 0 1 .312.328v.518c0 1.13-.867 2.045-1.935 2.045z"
                                      ></path>
                                    </svg>
                                    MeruPharmaRx <br />
                                    Assured
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="MobileView_substitute_cotainer__YwT_Y">
                            <div className="MobileView_AddContainer__kpN5Q">
                              <div className="customer-trust_purchased_frequency__s0OL2">
                                <div className="customer-trust_who_cont__onCYN">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    fill="none"
                                    viewBox="0 0 16 15"
                                  >
                                    <path
                                      fill="#509854"
                                      d="M8.62 8c1.035 0 1.875.84 1.875 1.875l-.001.935c.128 2.296-1.64 3.441-4.919 3.441-3.268 0-5.075-1.13-5.075-3.408v-.968C.5 8.839 1.34 8 2.375 8zm5 0c1.036 0 1.876.84 1.876 1.875l-.002.658c.114 2.06-1.449 3.092-4.304 3.092q-.583 0-1.093-.057c.671-.62 1.03-1.46 1.029-2.522l-.008-.27.002-.901c0-.747-.328-1.417-.847-1.876zM5.5.5a3.126 3.126 0 1 1 0 6.251A3.126 3.126 0 0 1 5.5.5m6.25 1.25a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
                                    ></path>
                                  </svg>
                                  <p className="customer-trust_random_value__u_x0W">
                                    2,894+ trust this
                                  </p>
                                </div>
                                <div className="customer-trust_divider__Dk6cQ"></div>
                                <div className="customer-trust_who_cont__onCYN">
                                  <img
                                    alt="who"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    decoding="async"
                                    // data-nimg="1"
                                    className="customer-trust_purchased_frequency__icon__9WNbN"
                                    style={{ color: "transparent" }}
                                    srcSet={`
                                  ${who}?w=16&amp;q=80 1x,
                                  ${who}?w=32&amp;q=80 2x
                                `}
                                    src={`${who}?w=32&amp;q=80`}
                                  />
                                  <p className="customer-trust_who_text__W_7aD">
                                    WHO GMP Certified
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="similar-details_flexEnd__pRZOm similar-details_SimilarDetailsCont__RI3Iy">
                  <div className="similar-details_SDBelowCont__snxKR">
                    <div className="onlyDesktop">
                      <div className="similar-details_CertificateTitleCont__u5jzc">
                        <div className="similar-details_CertificateTitle__n_BKL">
                          All Our Medicines are
                        </div>
                      </div>
                      <div className="similar-details_WhoCont__Snjr8">
                        <div className="similar-details_mobile_certification__content__EOGiK">
                          <img
                            alt="who icon"
                            loading="lazy"
                            width="120"
                            height="120"
                            decoding="async"
                            // data-nimg="1"
                            className="similar-details_mobile_certification__content__icon__UUf1K"
                            style={{ color: "transparent", margin: "4px" }}
                            srcSet={`
                          ${certification1}?w=128&amp;q=80 1x,
                          ${certification1}?w=256&amp;q=80 2x
                        `}
                            src={`${certification1}?w=256&amp;q=80`}
                          />
                          <p>
                            WHO GMP <br />
                            Certified
                          </p>
                        </div>
                        <div className="similar-details_mobile_certification__content__EOGiK">
                          <img
                            alt="return Image"
                            loading="lazy"
                            width="120"
                            height="120"
                            decoding="async"
                            // data-nimg="1"
                            className="similar-details_mobile_certification__content__icon__UUf1K"
                            style={{ color: "transparent" }}
                            srcSet={`
                          ${certification2}?w=128&amp;q=80 1x,
                          ${certification2}?w=256&amp;q=80 2x
                        `}
                            src={`${certification2}?w=256&amp;q=80`}
                          />
                          <p>
                            15 Days Easy <br />
                            Returns
                          </p>
                        </div>
                        <div className="similar-details_mobile_certification__content__EOGiK">
                          <img
                            alt="Long Expiry"
                            loading="lazy"
                            width="120"
                            height="120"
                            decoding="async"
                            // data-nimg="1"
                            className="similar-details_mobile_certification__content__icon__UUf1K"
                            style={{ color: "transparent" }}
                            srcSet={`
                            ${certification3}?w=128&amp;q=80 1x,
                            ${certification3}?w=256&amp;q=80 2x
                          `}
                            src={`${certification3}?w=256&amp;q=80`}
                          />
                          <p>
                            Long Expiry
                            <br />
                            (&gt;8 Months)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="similar-details_mobile_certification__UqOAu">
                      <div className="similar-details_mobile_certification__content__EOGiK">
                        <img
                          alt="who icon"
                          loading="lazy"
                          width="60"
                          height="60"
                          decoding="async"
                          // data-nimg="1"
                          className="similar-details_mobile_certification__content__icon__UUf1K"
                          style={{ color: "transparent" }}
                          srcSet={`
                        ${certification1}?w=64&amp;q=80  1x,
                        ${certification1}?w=128&amp;q=80 2x
                      `}
                          src={`${certification1}?w=128&amp;q=80`}
                        />
                        <p>
                          WHO GMP <br />
                          Certified
                        </p>
                      </div>
                      <div className="similar-details_mobile_certification__content__EOGiK">
                        <img
                          alt="return Image"
                          loading="lazy"
                          width="60"
                          height="60"
                          decoding="async"
                          // data-nimg="1"
                          className="similar-details_mobile_certification__content__icon__UUf1K"
                          style={{ color: "transparent" }}
                          srcSet={`
                        ${certification2}?w=64&amp;q=80  1x,
                        ${certification2}?w=128&amp;q=80 2x
                      `}
                          src={`${certification2}?w=128&amp;q=80`}
                        />
                        <p>
                          15 Days Easy <br />
                          Returns
                        </p>
                      </div>
                      <div className="similar-details_mobile_certification__content__EOGiK">
                        <img
                          alt="Long Expiry"
                          loading="lazy"
                          width="60"
                          height="60"
                          decoding="async"
                          // data-nimg="1"
                          className="similar-details_mobile_certification__content__icon__UUf1K"
                          style={{ color: "transparent" }}
                          srcSet={`
                        ${certification3}?w=64&amp;q=80  1x,
                        ${certification3}?w=128&amp;q=80 2x
                      `}
                          src={`${certification3}?w=128&amp;q=80`}
                        />
                        <p>
                          Long Expiry
                          <br />
                          (&gt;8 Months)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ProductInfo productInfo={data} />
          </>
        ) : (
          <NoProductInfo />
        )}
      </section>
    </>
  );
};

export default SearchProduct;
