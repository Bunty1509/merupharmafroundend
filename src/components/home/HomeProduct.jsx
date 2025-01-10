import React from "react";
import whoIcon from "../../assets/media/whoIcon.png";
import { Link } from "react-router-dom";

const HomeProduct = ({ data }) => {
  return (
    <Link to={`/displaySingleProduct/${data.name}/${data.Product_id}`}>
      <div className="AdvantageSection_each_drug__25ixu">
        <div className="MuiGrid-root platinumrx-1eqg8k8">
          <div className="MuiGrid-root AdvantageDrugs_itemContainer__RhsPq platinumrx-rfnosa">
            <div className="MuiGrid-root AdvantageDrugs_itemHeading__Ha7LJ platinumrx-rfnosa">
              {/* <div className="MuiGrid-root platinumrx-rfnosa">
              {data.salt_composition}
            </div> */}
              <div className="MuiGrid-root platinumrx-rfnosa">
                {data.salt_composition.length > 40
                  ? `${data.salt_composition.substring(0, 37)}...`
                  : data.salt_composition}
              </div>
            </div>
            <div className="MuiGrid-root AdvantageDrugs_fullDetailsContainer__EZ5i2 platinumrx-rfnosa">
              <div className="MuiGrid-root AdvantageDrugs_genericMedicineDetails__ZlHGp platinumrx-rfnosa">
                <div className="MuiGrid-root platinumrx-h451k8">
                  <div className="MuiGrid-root platinumrx-evsbey">
                    <div
                      className="MuiGrid-root platinumrx-rfnosa"
                      style={{ color: "#000", fontWeight: "500" }}
                    >
                      Regular
                    </div>
                    <div
                      className="MuiGrid-root platinumrx-rfnosa"
                      style={{ display: "flex" }}
                    >
                      <div
                        className="MuiGrid-root AdvantageDrugs_itemImg__cZcZn platinumrx-rfnosa"
                        style={{
                          backgroundImage:
                            "url('https://flexipillstorage.blob.core.windows.net/meds-prescriptions/cdc3b3c2-726f-480f-9bf0-e1ddbe08f3a0_wm.png')",
                        }}
                      ></div>
                    </div>
                    <div
                      className="MuiGrid-root platinumrx-rfnosa"
                      style={{
                        wordBreak: "break-word",
                        width: "100%",
                        overflowWrap: "anywhere",
                      }}
                    >
                      <div className="MuiGrid-root platinumrx-1poemmr">
                        <div className="MuiGrid-root AdvantageDrugs_itemName__jQxqC platinumrx-rfnosa">
                          {data.name} {data.Qty}&#x27;s
                        </div>
                        <p className="AdvantageDrugs_manufacturerName__ZJQs8">
                          {data.manufacturers}
                        </p>
                        <div className="MuiGrid-root platinumrx-rfnosa">
                          <div className="MuiGrid-root AdvantageDrugs_packetSize__7kefs platinumrx-1u692ip">
                            {data.Package}
                            {" of "}
                            {/* {data.Qty}{" "}
                          {parseInt(data.Qty, 10) > 1
                            ? data.Product_Form
                            : `${data.Product_Form}'s`} */}
                            {Number(data.Qty) > 1
                              ? `${data.Qty} ${data.Product_Form}'s`
                              : `${data.Qty} ${data.Product_Form}`}
                          </div>
                          <div
                            className="MuiGrid-root platinumrx-rfnosa"
                            style={{ color: "#6d7478", fontSize: "10px" }}
                          >
                            MRP
                          </div>
                          <p className="AdvantageDrugs_genericPrice__SQ7OB">
                            ₹{data.MRP}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MuiGrid-root AdvantageDrugs_substituteHeaderContainer__7Z3LV platinumrx-1eqg8k8">
                <div className="MuiGrid-root platinumrx-rfnosa">
                  <div className="MuiGrid-root platinumrx-h451k8">
                    <div className="MuiGrid-root platinumrx-evsbey">
                      <div
                        className="MuiGrid-root platinumrx-rfnosa"
                        style={{ color: "#000", fontWeight: "500" }}
                      >
                        Recommended
                      </div>
                      <div
                        className="MuiGrid-root platinumrx-rfnosa"
                        style={{ display: "flex" }}
                      >
                        <div
                          className="MuiGrid-root AdvantageDrugs_itemImg__cZcZn platinumrx-rfnosa"
                          style={{
                            backgroundImage:
                              "url('https://flexipillstorage.blob.core.windows.net/meds-prescriptions/cdc3b3c2-726f-480f-9bf0-e1ddbe08f3a0_wm.png')",
                          }}
                        ></div>
                        <img
                          alt="Who Icon"
                          loading="lazy"
                          width="120"
                          height="42"
                          decoding="async"
                          data-nimg="1"
                          style={{
                            color: "transparent",
                            width: "60px",
                            height: "21px",
                            marginLeft: "4px",
                          }}
                          srcSet={`${whoIcon}?w=128&amp;q=80 1x,${whoIcon}?w=256&amp;q=80 2x`}
                          src={`${whoIcon}?w=32&amp;q=80`}
                        />
                      </div>
                      <div
                        className="MuiGrid-root platinumrx-rfnosa"
                        style={{
                          wordBreak: "break-word",
                          width: "100%",
                          overflowWrap: "anywhere",
                        }}
                      >
                        <div className="MuiGrid-root platinumrx-1poemmr">
                          <div className="MuiGrid-root AdvantageDrugs_itemName__jQxqC platinumrx-rfnosa">
                            Meru Pharma {data.salt_composition} {data.Qty}{" "}
                            {data.Product_Form}
                          </div>
                          <img
                            src="https://flexipillstorage.blob.core.windows.net/meds-prescriptions/b74ddd93-7c67-444a-be0f-05d2b4855cb9.png"
                            style={{ height: "20px", width: "auto" }}
                            alt="Meru Pharma"
                          />
                          <div className="MuiGrid-root AdvantageDrugs_substitutePriceContainer__KPPJd platinumrx-rfnosa">
                            <div className="MuiGrid-root platinumrx-1otbfh8">
                              <div className="MuiGrid-root AdvantageDrugs_packetSize__7kefs platinumrx-1u692ip">
                                {data.Package}
                                {" of "}
                                {/* {data.Qty}{" "}
                          {parseInt(data.Qty, 10) > 1
                            ? data.Product_Form
                            : `${data.Product_Form}'s`} */}
                                {Number(data.Qty) > 1
                                  ? `${data.Qty} ${data.Product_Form}'s`
                                  : `${data.Qty} ${data.Product_Form}`}
                              </div>
                              <div
                                className="MuiGrid-root platinumrx-rfnosa"
                                style={{
                                  color: "#6d7478",
                                  fontSize: "10px",
                                }}
                              >
                                Our Price
                              </div>
                              <div className="MuiGrid-root platinumrx-7i47d3">
                                <div className="MuiGrid-root AdvantageDrugs_substitutePrice__4mdqG platinumrx-rfnosa">
                                  ₹{data.MRP / 2}
                                </div>
                                <div className="MuiGrid-root AdvantageDrugs_discountPercentage__uVTKg platinumrx-rfnosa">
                                  50% OFF
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
        </div>
      </div>
    </Link>
  );
};

export default HomeProduct;
