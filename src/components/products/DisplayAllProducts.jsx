import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import who from "../../assets/media/whoIcon.png";
import MedicineData from "../../assets/data/pharmaData.json";

const DisplayAllProducts = () => {
  const [data, setData] = useState(MedicineData);

  useEffect(() => {
    console.log("Data Length : ", data.length);
  }, [data]);

  return (
    <>
      <section className="container PdpComponent_pdp_page_container__AXnZ4">
        <div className="PdpComponent_pdp_page_container__content__ucx0m">
          <div className="drug-pdp-item_DrugPdpItem__pO8GN">
            <div className="drug-pdp-item_fullDetailsContainer__IuPM_">
              <div className="drug-pdp-item_genericContainer__WD0W6">
                <div className="drug-pdp-item_genericContainer__chip__7oyaH">
                  You Searched
                </div>
                <div
                  style={{ backgroundColor: "#ebebeb", borderRadius: "8px" }}
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
                            Minoxinol 5% w/v Solution
                          </div>
                          <div className="DesktopView_manufacturerNameContainer__XXerb">
                            <div className="DesktopView_manufacturerName__rQgKp">
                              Knoll Healthcare Pvt Ltd
                            </div>
                            <div className="DesktopView_divider__zOLQF"></div>
                            <div className="DesktopView_drugCategory__RYhK_">
                              Bottle of 60 ml
                            </div>
                          </div>
                          <div className="DesktopView_genricBelowCont__c7wew">
                            <div>
                              <template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING"></template>
                            </div>
                            <div className="DesktopView_genricBelowCont__boxAnimated__qX0xB">
                              <div className="DesktopView_genricBelowCont__arrowBox__PCM7Q">
                                We only sell the best substitute from top brands
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
                                      <stop stopColor="#19730A"></stop>
                                      <stop
                                        offset="1"
                                        stopColor="#25BC0D"
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
                          Minoxinol 5% w/v Solution
                        </div>
                        <div className="MobileView_drug_manufacturer_container__X1e37">
                          <div className="MobileView_manufacturerName__enxNQ">
                            Knoll Healthcare Pvt Ltd
                          </div>
                          <div className="MobileView_drugCategory__EWTxR">
                            Bottle of 60 ml
                          </div>
                        </div>
                        <div className="MobileView_genricBelowCont__POKNp">
                          <div className="MobileView_genricBelowCont__price_and_Assured__5bx_c">
                            <div className="drug-pdp-item_productPrice__s6uPn">
                              <div className="drug-pdp-item_priceContainer__tjypd">
                                <div>
                                  <p className="drug-pdp-item_genericPrice__Tlx6p">
                                    ₹750
                                  </p>
                                </div>
                              </div>
                              <div className="drug-pdp-item_unitPrice__WeO5v false">
                                ₹12.5 / ml
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
                              Minkesh Forte 5% Solution 60ml
                            </div>
                            <div className="DesktopView_manufacturerNameContainer__XXerb">
                              <div className="DesktopView_manufacturerName__rQgKp">
                                Dr. Morepen
                              </div>
                              <div className="DesktopView_divider__zOLQF"></div>
                              <div className="DesktopView_drugCategory__RYhK_">
                                Bottle of 60 ml
                              </div>
                            </div>
                            <div className="DesktopView_genricBelowCont__c7wew">
                              <div>
                                <template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING"></template>
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
                                        2,894+ Customers trust this
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
                                      fill="#F44D4D"
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
                                  <span style={{ fontWeight: "400" }}>Rx</span>
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
                                  fill="#F44D4D"
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
                            Minkesh Forte 5% Solution 60ml
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
                              Bottle of 60 ml
                            </div>
                          </div>
                          <div className="MobileView_genricBelowCont__POKNp">
                            <div className="MobileView_genricBelowCont__price_and_Assured__5bx_c">
                              <div className="drug-pdp-item_productPrice__s6uPn drug-pdp-item_isLoading___7_iS">
                                <h2></h2>
                                <p></p>
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
                                        fill="#F44D4D"
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
                                    fill="#F44D4D"
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
        </div>
        <div className="PdpComponent_pdp_page_container__content__ucx0m">
          <div className="drug-pdp-item_DrugPdpItem__pO8GN">
            {data.length > 0 &&
              data.map((singleData, id) => (
                <div
                  className="drug-pdp-item_fullDetailsContainer__IuPM_"
                  key={`med_${id}`}
                >
                  <div className="drug-pdp-item_genericContainer__WD0W6"></div>
                  <div className="drug-pdp-item_widthForNonGenric__eB5OS">
                    <div className="drug-pdp-item_conditionalsubstituteContainer__HdE1a">
                      <div
                        style={{ width: "calc(52% + 1px)" }}
                        className="drug-pdp-item_substituteContainer__chip__UHEBZ"
                      >
                        {singleData.Product_id}
                      </div>
                      <div className="drug-pdp-item_conditionalsubstituteContainer__details__xKbtc">
                        <div className="DesktopView_DesktopView__Zmv2L">
                          <div className="DesktopView_contentContainer__88Cqo">
                            <div>
                              <div className="DesktopView_headers__9DUKY">
                                <p>{singleData.Product_id}</p>
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
                                  {singleData.name}
                                </div>
                                <div className="DesktopView_manufacturerNameContainer__XXerb">
                                  <div className="DesktopView_manufacturerName__rQgKp">
                                    {singleData.manufacturers}
                                  </div>
                                  <div className="DesktopView_divider__zOLQF"></div>
                                  <div className="DesktopView_drugCategory__RYhK_">
                                    {singleData.Package}
                                    {" of "}
                                    {singleData.Qty} {singleData.Product_Form}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="DesktopView_substituteContainer__4Y0NF">
                              <div>
                                <div className="drug-pdp-item_brandAndAssured__QRxjJ">
                                  <div>
                                    <div>Marketed by</div>
                                    <p>{singleData.Marketer_details}</p>
                                    {/* <img
                                      className="drug-pdp-item_brandAndAssured__manufacturerLogo__fdTG2"
                                      src="https://flexipillstorage.blob.core.windows.net/brand-images/Morepen.png"
                                      alt="Dr. Morepen"
                                      loading="eager"
                                    /> */}
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
                                          fill="#F44D4D"
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
                                      fill="#F44D4D"
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
                                Minkesh Forte 5% Solution 60ml
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
                                  Bottle of 60 ml
                                </div>
                              </div>
                              <div className="MobileView_genricBelowCont__POKNp">
                                <div className="MobileView_genricBelowCont__price_and_Assured__5bx_c">
                                  <div className="drug-pdp-item_productPrice__s6uPn drug-pdp-item_isLoading___7_iS">
                                    <h2></h2>
                                    <p></p>
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
                                            fill="#F44D4D"
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
                                        fill="#F44D4D"
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
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DisplayAllProducts;
