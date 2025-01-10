import React, { useEffect, useState } from "react";
import medicineData from "../../assets/data/pharmaData.json";

const ProductInfo = () => {
  const [activeTab, setActiveTab] = useState("Benefits");
  const [data, setData] = useState(medicineData);
  const [tabs, setTabs] = useState([
    "Benefits",
    "Side Effects",
    "How to use",
    "How it works",
    "What if I forget to take it?",
    "Manufacturer Address",
  ]);

  const [tabContent, setTabContent] = useState({
    Benefits:
      "In Treatment of Hair loss Minkesh Forte Soln 0.05 60ml is a medicine used to treat common hereditary hair loss. It can prevent further hair loss and help hair to re-grow. It works by increasing blood flow to the hair follicles on your scalp, which prevents hair cell death and also enhances new hair growth. It is most effective for baldness or thinning at the top of the scalp but less effective at the front or for receding hairline. Benefits are less likely if you have been bald for many years or have a large area of hair loss. Minkesh Forte Soln 0.05 60ml is not suitable for sudden or unexplained hair loss. It is considered a safe medicine. There are separate products for men and women and you should follow your doctor?s instructions carefully while using Minkesh Forte Soln 0.05 60ml. Regrowth of hair improves your appearance, boosts your confidence, and enhances your social life. Use it regularly to maintain hair growth and to get the maximum benefits. Consult your doctor if you notice any changes in the hair growth while using Minkesh Forte Soln 0.05 60ml.",
    "Side Effects": "Content about possible side effects.",
    "How to use": "Instructions on how to use the product.",
    "How it works": "Explanation of how the product works.",
    "What if I forget to take it?":
      "Guidelines on what to do if you miss a dose.",
    "Manufacturer Address": "Details about the manufacturer.",
  });
  useEffect(() => {
    const keys = Object.keys(data[0]);
    setTabs(keys);
    setTabContent(data[0]);
  }, [data]);
  return (
    <div>
      <div className="more-about_moreAboutContainer__3DyQC">
        <p>More About MINKESH FORTE</p>
        <div className="MuiTabs-root platinumrx-th6vv1">
          <div className="MuiTabs-scroller">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`MuiTab-root ${
                  activeTab === tab ? "Mui-selected" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="MuiTypography-root">{tabContent[activeTab]}</div>
        </div>
      </div>
      <div className="MuiGrid-root platinumrx-rfnosa">
        <p className="MuiTypography-root MuiTypography-body1 platinumrx-n2kv6w">
          <b> Disclaimer</b>
        </p>
        <p className="MuiTypography-root MuiTypography-body1 platinumrx-sgchem">
          PlatinumRx is dedicated to delivering dependable and trustworthy
          information to empower our customers. However, the information
          presented here is solely for general informational purposes and should
          not be utilized for diagnosing, preventing, or treating health issues.
          It is not intended to establish a doctor-patient relationship or serve
          as a substitute for professional medical advice.
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
