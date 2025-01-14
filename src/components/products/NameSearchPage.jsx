import React, { useEffect, useState } from "react";
import saltImage from "../../assets/media/saltimage.png";
import chip2 from "../../assets/media/chip2.png";
import chip3 from "../../assets/media/chip3.png";
import NoProductInfo from "./NoProductInfo";
import { useParams } from "react-router-dom";
import medicineData from "../../assets/data/pharmaData.json";

const NameSearchPage = () => {
  const [data, setData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    console.log("Name : ", name);
    if (name !== "" && name.trim().length >= 3) {
      const lowerCaseQuery = name.toLowerCase();
      const queryParts = lowerCaseQuery.split(" ");

      // Filter the data list based on query parts
      // Filter the medicine data
      const filteredResults = medicineData.filter((item) =>
        queryParts.every(
          (part) =>
            item.name.toLowerCase().includes(part) || // Check if the name includes the part
            item.Product_id.toLowerCase().includes(part) || // Check if the Product_id includes the part
            item.salt_composition.toLowerCase().includes(part)
        )
      );

      setData(filteredResults);
    } else {
      setData([]);
    }
  }, [name]);
  return (
    <section>
      <div className="product-listing_container___XHEM">
        {data.length > 0 ? (
          <>
            <div className="product-listing_chipsContainer__4nBcx">
              <div className="product-listing_chip__uK7Zr">
                <img
                  alt=""
                  loading="lazy"
                  width="32"
                  height="32"
                  decoding="async"
                  className="product-listing_chipIcon__RWzS2"
                  style={{ color: "transparent" }}
                  srcSet={`
                ${saltImage}?w=32&amp;q=80 1x,
                ${saltImage}?w=64&amp;q=80 2x
              `}
                  src={`${saltImage}?w=64&amp;q=80`}
                />
                <p>
                  Exact Same
                  <br />
                  Composition
                </p>
              </div>
              <div className="product-listing_chip__uK7Zr">
                <img
                  alt=""
                  loading="lazy"
                  width="32"
                  height="32"
                  decoding="async"
                  className="product-listing_chipIcon__RWzS2"
                  style={{ color: "transparent" }}
                  srcSet={`
               ${chip2}?w=32&amp;q=80 1x,
                ${chip2}?w=64&amp;q=80 2x
              `}
                  src={chip2}
                />
                <p>
                  Upto 60%
                  <br />
                  Savings
                </p>
              </div>
              <div className="product-listing_chip__uK7Zr">
                <img
                  alt=""
                  loading="lazy"
                  width="32"
                  height="32"
                  decoding="async"
                  className="product-listing_chipIcon__RWzS2"
                  style={{ color: "transparent" }}
                  srcSet={`
                ${chip3}?w=32&amp;q=80 1x,
                ${chip3}?w=64&amp;q=80 2x
              `}
                  src="/_next/static/media/chip3.ae944398.png?w=64&amp;q=80"
                />
                <p>
                  Doctor
                  <br />
                  Approved
                </p>
              </div>
            </div>
            <div className="product-listing_stickyBanner__SMXnr">
              <div className="product-listing_RowHeader__xPwBq">
                <div className="product-listing_RowLeft__KA_kE">
                  You Searched
                </div>
                <div className="product-listing_RowRight__hlV7c">
                  Our Recommendation
                </div>
              </div>
            </div>
            {data.map((nameData, index) => (
              <div key={`nameData_${index}`}>
                <a
                  href={`/searchProduct/${encodeURIComponent(nameData.name)}/${
                    nameData.Product_id
                  }`}
                >
                  <div className="druglist-item_itemContainer__Uqt1t">
                    <div className="druglist-item_itemHeading__cWGyl">
                      <div className="druglist-item_saltMobileContainer__0R4yP">
                        <div className="druglist-item_saltMobileContainer__content__ILi6H">
                          <div className="druglist-item_saltMobileContainer__title__3zs9s">
                            <img
                              alt="Molecule"
                              loading="lazy"
                              width="32"
                              height="32"
                              decoding="async"
                              className="druglist-item_saltMobileContainer__icon__L13mN"
                              srcSet={`
                            ${saltImage}?w=32&amp;q=80 1x,
                            ${saltImage}?w=64&amp;q=80 2x
                          `}
                              src={`${saltImage}?w=64&amp;q=80`}
                              style={{ color: "transparent", display: "none" }}
                            />
                            <div className="druglist-item_saltMobileContainer__titleText__9UmPF">
                              Salt Composition in both
                            </div>
                          </div>
                          <div className="druglist-item_saltMobileContainer__composition__EsLOi">
                            <p className="druglist-item_saltMobileContainer__composition__less_salt__B_Gip">
                              {nameData.salt_composition}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="druglist-item_fullDetailsContainer__RCxNm">
                      <div className="druglist-item_genericMedicineDetails__rdmT5">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                          }}
                        >
                          <div className="druglist-item_contentContainer__OyI1B">
                            <div
                              className="druglist-item_imgContainer__3MOmx"
                              style={{
                                display: "flex",
                                alignItems: "flex-end",
                                flexWrap: "nowrap",
                              }}
                            >
                              <div
                                className="druglist-item_itemImg__KBvIo"
                                style={{
                                  backgroundImage:
                                    "url('https://platinumrxassets.blob.core.windows.net/platinumrx-assets/default_image.jpg')",
                                }}
                              ></div>
                            </div>
                            <div
                              className="druglist-item_itemDetails__JhI3f"
                              style={{ marginTop: "8px" }}
                            >
                              <div className="druglist-item_itemName__YnmLq">
                                {nameData.name}
                              </div>
                              <div className="druglist-item_genericManufacturerName__Du3NS">
                                {nameData.manufacturers}
                              </div>
                              <div className="druglist-item_Quantity__y1rmm">
                                {nameData.Packaging_Detail}
                              </div>
                              <div className="druglist-item_itemMrp__aSi9J">
                                MRP
                              </div>
                              <p className="druglist-item_genericPrice__0u9Ol">
                                ₹{nameData.MRP}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="druglist-item_substituteHeaderContainer__ezxIX"
                        style={{ width: "65%" }}
                      >
                        <div className="druglist-item_substituteMedicineDetails__0wLPq">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              flexDirection: "row",
                            }}
                          >
                            <div className="druglist-item_contentContainer__OyI1B">
                              <div
                                className="druglist-item_imgContainer__3MOmx"
                                style={{
                                  display: "flex",
                                  alignItems: "flex-end",
                                  flexWrap: "nowrap",
                                }}
                              >
                                <div
                                  className="druglist-item_itemImg__KBvIo"
                                  style={{
                                    backgroundImage:
                                      "url('https://flexipillstorage.blob.core.windows.net/meds-prescriptions/1544e6ad-26a2-40cc-8eb0-f57f735be98d.jpeg')",
                                  }}
                                ></div>
                              </div>
                              <div
                                className="druglist-item_itemDetails__JhI3f"
                                style={{ marginTop: "8px" }}
                              >
                                <div className="druglist-item_itemName__YnmLq">
                                  Rec {nameData.name}
                                </div>
                                <div className="druglist-item_substituteManufacturerName__fECQK">
                                  Meru Pharmaceuticals Ltd
                                </div>
                                <div className="druglist-item_Quantity__y1rmm">
                                  {nameData.Packaging_Detail}
                                </div>
                                <div
                                  className="druglist-item_addtoCartContainer__0XkUC"
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-end",
                                  }}
                                >
                                  <div className="druglist-item_substitutePriceContainer__75Y7h">
                                    <div className="druglist-item_substitutePrice__Qdsht">
                                      <p className="druglist-item_discountedPrice__ftOvo">
                                        ₹{nameData.MRP / 2}
                                      </p>
                                    </div>
                                    <p className="druglist-item_itemMrp__aSi9J">
                                      MRP ₹<span>{nameData.MRP}</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                                position: "relative",
                              }}
                            >
                              <div className="druglist-item_SavingLabel__B_Smj">
                                50% Savings
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="product-listing_divider__aiMpd"></div>
              </div>
            ))}
          </>
        ) : (
          <NoProductInfo />
        )}
      </div>
    </section>
  );
};

export default NameSearchPage;
