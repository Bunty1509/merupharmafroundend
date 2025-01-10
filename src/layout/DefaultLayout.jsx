import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AppContent from "../components/AppContent";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <AppContent />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
