import React, { useEffect, useState } from "react";
import Moleculer from "../../assets/media/Moleculer.png";
import SingleProductInfo from "./SingleProductInfo";
import { useParams } from "react-router-dom";
import medicineData from "../../assets/data/pharmaData.json";
import NoProductInfo from "./NoProductInfo";

const DisplaySingleProduct = () => {
  const [data, setData] = useState({});
  const { name, productId } = useParams();

  useEffect(() => {
    const findProduct = medicineData.filter(
      (medData) => medData.Product_id === productId
    );

    if (findProduct.length > 0) {
      setData(findProduct[0]);
    }
  }, [productId]);

  return (
    <section className="container PdpComponent_pdp_page_container__AXnZ4">
      {data.Product_id ? (
        <>
          <div className="PdpComponent_pdp_page_container__content__ucx0m">
            <div className="drug-pdp-item_DrugPdpItem__pO8GN">
              <div className="drug-pdp-item_headertext__OfshM">
                Congrats! you have chosen the top branded substitute.
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
                          data-nimg="1"
                          className="SaltContainer_saltMobileContainer__icon__Qjd4A"
                          style={{ color: "transparent" }}
                          srcSet={`
                                              ${Moleculer}?w=128&amp;q=80 1x,
                      ${Moleculer}?w=256&amp;q=80 2x
                    `}
                          src={`${Moleculer}?w=256&amp;q=80`}
                        />
                        Salt Composition
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
                          data-nimg="1"
                          style={{
                            color: "transparent",
                            width: "28px",
                            height: "28px",
                          }}
                          srcSet={`
                      ${Moleculer}?w=128&amp;q=80 1x,
                      ${Moleculer}?w=256&amp;q=80 2x`}
                          src={`${Moleculer}?w=256&amp;q=80`}
                        />
                        Salt Composition
                      </div>
                      <div className="SaltContainer_saltContainer__composition__t6kdN">
                        <p className="MuiTypography-root MuiTypography-body1 SaltContainer_saltContainer__composition__less_salt__i43Dd platinumrx-1rj2rce">
                          {data.salt_composition}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="drug-pdp-item_fullDetailsContainer__IuPM_">
                <div className="drug-pdp-item_widthForGenric__zOgtM">
                  <div className="drug-pdp-item_substituteContainer__WDhUz">
                    <div className="drug-pdp-item_substituteContainer__details__kYxRs">
                      <div className="DesktopView_DesktopView__Zmv2L">
                        <div className="DesktopView_contentContainer__88Cqo">
                          <div>
                            <div className="DesktopView_headers__9DUKY">
                              <div className="DesktopView_discountChip__TMURL">
                                <div>Prescription Required</div>
                              </div>
                            </div>
                            <div
                              className="DesktopView_imgContainer__TTSOT"
                              style={{ placeContent: "space-between" }}
                            >
                              <div className="DesktopView_itemImg__yveJ8">
                                <div className="swiper">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide DesktopView_image__Mnr0t">
                                      <img
                                        src="https://flexipillstorage.blob.core.windows.net/meds-prescriptions/c66941f6-f70c-4c0e-a9eb-f00ea6cf1dd2_wm.png"
                                        alt="Glimda 2mg Tab 10s"
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
                                {data.name} {data.Qty}
                                {Number(data.Qty) > 1 && `'s`}
                              </div>
                              <div className="DesktopView_manufacturerNameContainer__XXerb">
                                <div className="DesktopView_manufacturerName__rQgKp">
                                  {data.manufacturers}
                                </div>
                                <div className="DesktopView_divider__zOLQF"></div>
                                <div className="DesktopView_drugCategory__RYhK_">
                                  {data.Package}
                                  {" of "}
                                  {Number(data.Qty) > 1
                                    ? `${data.Qty} ${data.Product_Form}'s`
                                    : `${data.Qty} ${data.Product_Form}`}
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
                                      ₹{data.MRP / (2 * data.Qty)} / Unit
                                      <div className="drug-pdp-item_discountLabel__DM5Y6">
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
                                      50% More Savings
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
                                    src="https://flexipillstorage.blob.core.windows.net/meds-prescriptions/b74ddd93-7c67-444a-be0f-05d2b4855cb9.png"
                                    alt="Cipla Ltd"
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
                                    Meru Pharma
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
                                Meru PharmaRx <br />
                                Assured
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="MobileView_mobileView__o_zez">
                        <div>
                          {/* <div className="MobileView_imgContainer__Ne3ID">
                        <div className="DesktopView_itemImg__yveJ8">
                          <div className="swiper">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide DesktopView_image__Mnr0t">
                                <img
                                  src="https://flexipillstorage.blob.core.windows.net/meds-prescriptions/c66941f6-f70c-4c0e-a9eb-f00ea6cf1dd2_wm.png"
                                  alt="Glimda 2mg Tab 10s"
                                  loading="lazy"
                                  fetchPriority="high"
                                />
                              </div>
                            </div>
                            <div className="swiper-pagination"></div>
                          </div>
                        </div>
                        <img
                          alt="PlatinumRx Hindi Video"
                          fetchPriority="high"
                          loading="eager"
                          width="444"
                          height="432"
                          decoding="async"
                          data-nimg="1"
                          className="MobileView_itemVideo__3dNQk"
                          style={{ color: "transparent" }}
                          srcSet="
                          /_next/static/media/Thumbnail.b16d6de8.jpg?w=640&amp;q=80  1x,
                          /_next/static/media/Thumbnail.b16d6de8.jpg?w=1080&amp;q=80 2x
                        "
                          src="/_next/static/media/Thumbnail.b16d6de8.jpg?w=1080&amp;q=80"
                        />
                      </div> */}
                          <div className="MobileView_textContainer__VXMVH">
                            <div className="MobileView_displayName__3sqND">
                              {data.name} {data.Qty}
                              {Number(data.Qty) > 1 && `'s`}
                            </div>
                            <div className="MobileView_drug_manufacturer_container__X1e37">
                              <img
                                alt="Cipla Ltd"
                                loading="lazy"
                                width="300"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                className="MobileView_manufacturerLogo__pT6P1"
                                style={{ color: "transparent" }}
                                srcSet="
                            https://flexitest.gumlet.io/meds-prescriptions/b74ddd93-7c67-444a-be0f-05d2b4855cb9.png?w=384&amp;q=80 1x,
                            https://flexitest.gumlet.io/meds-prescriptions/b74ddd93-7c67-444a-be0f-05d2b4855cb9.png?w=640&amp;q=80 2x
                          "
                                src="https://flexitest.gumlet.io/meds-prescriptions/b74ddd93-7c67-444a-be0f-05d2b4855cb9.png?w=640&amp;q=80"
                              />
                              <div className="MobileView_drugCategory__EWTxR">
                                {data.Package}
                                {" of "}
                                {Number(data.Qty) > 1
                                  ? `${data.Qty} ${data.Product_Form}'s`
                                  : `${data.Qty} ${data.Product_Form}`}
                              </div>
                            </div>
                            <div className="MobileView_genricBelowCont__POKNp">
                              <div className="MobileView_genricBelowCont__price_and_Assured__5bx_c">
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
                                    ₹{data.MRP / (2 * data.Qty)} / Unit
                                    <div className="drug-pdp-item_discountLabel__DM5Y6">
                                      <p className="drug-pdp-item_discountLabelText__X5bK2">
                                        50% OFF
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="drug-pdp-item_brandAndAssured__QRxjJ">
                                  <div>
                                    <div>Marketed by</div>
                                    <img
                                      className="drug-pdp-item_brandAndAssured__manufacturerLogo__fdTG2"
                                      src="https://flexipillstorage.blob.core.windows.net/meds-prescriptions/b74ddd93-7c67-444a-be0f-05d2b4855cb9.png"
                                      alt="Cipla Ltd"
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
                                      Meru Pharma
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
                                  Meru PharmaRx <br />
                                  Assured
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
          </div>
          <SingleProductInfo productInfo={data} />
        </>
      ) : (
        <NoProductInfo />
      )}
    </section>
  );
};

export default DisplaySingleProduct;
