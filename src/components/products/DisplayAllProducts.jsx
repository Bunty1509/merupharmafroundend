import React, { useEffect, useState } from "react";
import saltImage from "../../assets/media/saltimage.png";
import medicineData from "../../assets/data/pharmaData.json";
import { useNavigate } from "react-router-dom";
import Pagination from "../pagination/Pagination";

const DisplayAllProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const nav = useNavigate();
  const totalPages = Math.ceil(medicineData.length / itemsPerPage);

  // Get current page data

  const [data, setData] = useState([]);

  const handlePage = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const routeProduct = (productData) => {
    nav(
      `/displaySingleProduct/${encodeURIComponent(productData.name)}/${
        productData.Product_id
      }`
    );
  };

  useEffect(() => {
    console.log("Page :", currentPage);

    if (currentPage >= 1) {
      const currentData = medicineData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );

      setData(currentData);
    } else {
      setData([]);
    }
  }, [currentPage]);
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <section>
      <div className="product-listing_container___XHEM">
        {data.length > 0
          ? data.map((item, index) => (
              <div
                key={index}
                onClick={() => routeProduct(item)}
                style={{ cursor: "pointer" }}
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
                            Salt Composition
                          </div>
                        </div>
                        <div className="druglist-item_saltMobileContainer__composition__EsLOi">
                          <p className="druglist-item_saltMobileContainer__composition__less_salt__B_Gip">
                            {item.salt_composition}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="druglist-item_fullDetailsContainer__RCxNm">
                    <div
                      className="druglist-item_substituteHeaderContainer__ezxIX"
                      style={{ width: "100%" }}
                    >
                      <div className="druglist-item_substituteMedicineDetails__0wLPq">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                          }}
                        >
                          <div className="druglist-item_genericContentCont__mg7Dq">
                            <div
                              className="druglist-item_imgContainer__3MOmx"
                              style={{
                                display: "flex",
                                flexFlow: "column",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
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
                            <div className="druglist-item_itemDetails__JhI3f">
                              <div className="druglist-item_itemName__YnmLq">
                                {item.name}
                              </div>
                              <div className="druglist-item_substituteManufacturerName__fECQK">
                                {item.manufacturers}
                              </div>
                              <div className="druglist-item_Quantity__y1rmm">
                                {item.Packaging_Detail}
                              </div>
                              <div
                                className=" "
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "flex-end",
                                }}
                              >
                                <div className="druglist-item_substitutePriceContainer__75Y7h">
                                  <div className="druglist-item_substitutePrice__Qdsht">
                                    <p className="druglist-item_discountedPrice__ftOvo">
                                      ₹{item.MRP / 2}
                                    </p>
                                    <div className="druglist-item_discountChip__qAfw_">
                                      <div>
                                        <svg
                                          width="20"
                                          height="20"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{
                                            verticalAlign: "text-bottom",
                                          }}
                                        >
                                          <path
                                            d="M17.2911 10L18.2111 8.41001C18.3217 8.21871 18.3517 7.99133 18.2947 7.77786C18.2377 7.5644 18.0982 7.38232 17.9069 7.27167L16.3153 6.35167V4.51834C16.3153 4.29733 16.2275 4.08537 16.0712 3.92909C15.9149 3.7728 15.703 3.68501 15.4819 3.68501H13.6494L12.7303 2.09417C12.6193 1.90327 12.4375 1.76376 12.2244 1.70584C12.1187 1.67719 12.0084 1.6698 11.8998 1.6841C11.7913 1.69841 11.6866 1.73412 11.5919 1.78917L10.0003 2.70917L8.40861 1.78834C8.21721 1.67784 7.98975 1.64789 7.77627 1.70509C7.5628 1.76229 7.38078 1.90195 7.27027 2.09334L6.35027 3.68501H4.51777C4.29676 3.68501 4.0848 3.7728 3.92852 3.92909C3.77224 4.08537 3.68444 4.29733 3.68444 4.51834V6.35084L2.09277 7.27084C1.9978 7.32547 1.91456 7.39833 1.84783 7.48523C1.7811 7.57212 1.7322 7.67135 1.70393 7.77721C1.67567 7.88306 1.6686 7.99346 1.68313 8.10206C1.69766 8.21065 1.73351 8.31531 1.78861 8.41001L2.70861 10L1.78861 11.59C1.6786 11.7815 1.64875 12.0087 1.70557 12.2221C1.76239 12.4355 1.90128 12.6178 2.09194 12.7292L3.68361 13.6492V15.4817C3.68361 15.7027 3.7714 15.9146 3.92768 16.0709C4.08396 16.2272 4.29593 16.315 4.51694 16.315H6.35027L7.27027 17.9067C7.34405 18.0328 7.44939 18.1375 7.57592 18.2106C7.70246 18.2836 7.84583 18.3225 7.99194 18.3233C8.13694 18.3233 8.28111 18.285 8.40944 18.2108L9.99944 17.2908L11.5911 18.2108C11.7825 18.3212 12.0098 18.3511 12.2232 18.2941C12.4366 18.2371 12.6186 18.0978 12.7294 17.9067L13.6486 16.315H15.4811C15.7021 16.315 15.9141 16.2272 16.0704 16.0709C16.2266 15.9146 16.3144 15.7027 16.3144 15.4817V13.6492L17.9061 12.7292C18.0009 12.6744 18.084 12.6014 18.1506 12.5145C18.2172 12.4276 18.266 12.3284 18.2943 12.2226C18.3225 12.1168 18.3296 12.0065 18.3152 11.898C18.3008 11.7894 18.2652 11.6848 18.2103 11.59L17.2911 10ZM7.91611 5.82501C8.24774 5.82512 8.56574 5.95696 8.80016 6.19154C9.03458 6.42612 9.16622 6.74421 9.16611 7.07584C9.166 7.40747 9.03415 7.72548 8.79957 7.9599C8.565 8.19432 8.2469 8.32595 7.91527 8.32584C7.58364 8.32573 7.26564 8.19388 7.03122 7.95931C6.7968 7.72473 6.66516 7.40664 6.66527 7.07501C6.66538 6.74338 6.79723 6.42537 7.03181 6.19095C7.26638 5.95653 7.58448 5.8249 7.91611 5.82501ZM8.16611 13.825L6.83277 12.8258L11.8328 6.15917L13.1661 7.15834L8.16611 13.825ZM12.0828 14.1583C11.9186 14.1583 11.756 14.1259 11.6043 14.063C11.4526 14.0001 11.3148 13.908 11.1987 13.7918C11.0826 13.6757 10.9906 13.5378 10.9278 13.3861C10.865 13.2343 10.8327 13.0717 10.8328 12.9075C10.8328 12.7433 10.8652 12.5807 10.9281 12.429C10.991 12.2773 11.0832 12.1395 11.1993 12.0235C11.3155 11.9074 11.4533 11.8153 11.6051 11.7525C11.7568 11.6897 11.9194 11.6575 12.0836 11.6575C12.4152 11.6576 12.7332 11.7895 12.9677 12.024C13.2021 12.2586 13.3337 12.5767 13.3336 12.9083C13.3335 13.24 13.2016 13.558 12.9671 13.7924C12.7325 14.0268 12.4144 14.1585 12.0828 14.1583Z"
                                            fill="#fff"
                                          ></path>
                                        </svg>
                                      </div>
                                      <div>50% OFF</div>
                                    </div>
                                  </div>
                                  <p className="druglist-item_itemMrp__aSi9J">
                                    MRP ₹<span>{item.MRP}</span>
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
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-listing_divider__aiMpd"></div>
              </div>
            ))
          : "No Data Found"}
      </div>
      {/* Pagination Buttons */}
      <div className="pagination">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePage}
        />
      </div>
    </section>
  );
};

export default DisplayAllProducts;
