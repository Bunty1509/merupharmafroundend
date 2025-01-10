import React, { Suspense, useState } from "react";
import "../src/assets/css/address.css";
import "../src/assets/css/advantage.css";
import "../src/assets/css/asksection.css";
import "../src/assets/css/brands.css";
import "../src/assets/css/categoryfooter.css";
import "../src/assets/css/font.css";
import "../src/assets/css/footer.css";
import "../src/assets/css/homelanding.css";
import "../src/assets/css/login.css";
import "../src/assets/css/main.css";
import "../src/assets/css/nodatapage.css";
import "../src/assets/css/noitemfound.css";
import "../src/assets/css/ordermodal.css";
import "../src/assets/css/pdpcomponent.css";
import "../src/assets/css/productlisting.css";
import "../src/assets/css/searchbar.css";
import "../src/assets/css/swiper.css";
import "../src/assets/css/videodrawer.css";
import "../src/assets/css/faq.css";
import "./index.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
