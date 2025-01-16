import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeProductSection from "../home/HomeProductSection";
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
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isWideScreen
        ? chunks.map((chunk, index) => (
            <HomeProductSection key={index} medicineData={chunk} />
          ))
        : chunks.map((chunk, index) => (
            <HomeSmallProductSection
              key={`small_${index}`}
              medicineData={chunk}
            />
          ))}
    </>
  );
};

export default Main;
