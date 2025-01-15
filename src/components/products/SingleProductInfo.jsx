import React, { useEffect, useState } from "react";
import ProductQuestion from "./ProductQuestion";

const SingleProductInfo = ({ productInfo }) => {
  const [tabs, setTabs] = useState([
    "benefits",
    "common_side_effect",
    "how_to_use",
    "How_it_works",
    "if_miss",
    "MANUFACTURER_ADDRESS",
  ]);
  const [tabNames, setTabNames] = useState({
    benefits: "Benefits",
    common_side_effect: "Side Effects",
    how_to_use: "How to use",
    How_it_works: "How it works",
    if_miss: "What if I forgot to take?",
    MANUFACTURER_ADDRESS: "Manufacturer Address",
  });
  const [data, setData] = useState({});
  const [tabContent, setTabContent] = useState({});
  const [activeTab, setActiveTab] = useState("benefits");
  useEffect(() => {
    if (productInfo.Product_id) {
      //   const keys = Object.keys(productInfo);
      setData(productInfo);
      //   setTabs(keys);
      setTabContent(productInfo);
    }
  }, [productInfo]);
  return (
    <>
      {data.Product_id && (
        <div>
          <div
            className="more-about_moreAboutContainer__3DyQC"
            style={{ marginTop: "20px" }}
          >
            <p>More About {data.name}</p>
            <div className="MuiTabs-root platinumrx-th6vv1">
              <div className="MuiTabs-scroller">
                {tabs.length > 0 &&
                  tabs.map((tab) => (
                    <button
                      key={tab}
                      className={`MuiTab-root ${
                        activeTab === tab ? "Mui-selected" : ""
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tabNames[tab]}
                    </button>
                  ))}
              </div>
              <div className="MuiTypography-root">{tabContent[activeTab]}</div>
            </div>
          </div>
          <div
            className="more-about_moreAboutContainer__3DyQC"
            style={{
              marginTop: "5px",

              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>Question and Answers for {data.name}</p>
            <div
              className="MuiTabs-root platinumrx-th6vv1"
              style={{ fontSize: "1rem" }}
            >
              {tabContent["Q_A"] !== null && tabContent["Q_A"] !== "" && (
                <ProductQuestion rawData={tabContent["Q_A"]} />
              )}
            </div>
          </div>
          <div className="MuiGrid-root platinumrx-rfnosa">
            <p className="MuiTypography-root MuiTypography-body1 platinumrx-n2kv6w">
              <b> Disclaimer</b>
            </p>
            <p className="MuiTypography-root MuiTypography-body1 platinumrx-sgchem">
              PlatinumRx is dedicated to delivering dependable and trustworthy
              information to empower our customers. However, the information
              presented here is solely for general informational purposes and
              should not be utilized for diagnosing, preventing, or treating
              health issues. It is not intended to establish a doctor-patient
              relationship or serve as a substitute for professional medical
              advice.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProductInfo;
