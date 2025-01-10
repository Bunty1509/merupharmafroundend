import React from "react";
import { useNavigate } from "react-router-dom";
import HomeProduct from "../home/HomeProduct";
import HomeProductSection from "../home/HomeProductSection";
import HomeSmallProduct from "../home/HomeSmallProduct";
import HomeSmallProductSection from "../home/HomeSmallProductSection";

const Main = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/searchProduct");
  };

  return (
    <>
      <div>Main Product </div>
      <HomeProductSection />
      <HomeSmallProductSection />
      <button onClick={() => handleClick()}> Search</button>
    </>
  );
};

export default Main;
