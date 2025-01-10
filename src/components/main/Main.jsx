import React from "react";
import { useNavigate } from "react-router-dom";
import HomeProduct from "../home/HomeProduct";
import HomeProductSection from "../home/HomeProductSection";
import HomeSmallProduct from "../home/HomeSmallProduct";
import HomeSmallProductSection from "../home/HomeSmallProductSection";
import medicineData from "../../assets/data/pharmaData.json";

const Main = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/searchProduct");
  };
  const chunkSize = 10;
  const chunks = [];
  for (let i = 0; i < medicineData.length; i += chunkSize) {
    chunks.push(medicineData.slice(i, i + chunkSize));
  }

  return (
    <>
      {/* <HomeProductSection medicineData={medicineData} /> */}
      {chunks.map((chunk, index) => (
        <HomeProductSection key={index} medicineData={chunk} />
      ))}
      <HomeSmallProductSection />
    </>
  );
};

export default Main;
