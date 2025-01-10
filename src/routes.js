import React from "react";
const Main = React.lazy(() => import("./components/main/Main"));
const SearchProduct = React.lazy(() =>
  import("./components/products/SearchProduct")
);
const DispalyAllProducts = React.lazy(() =>
  import("./components/products/DisplayAllProducts")
);

const routes = [
  { path: "/", name: "Home", element: Main },
  { path: "/searchProduct", name: "SearchProduct", element: SearchProduct },
  {
    path: "/displayAllProducts",
    name: "Display All Products",
    element: DispalyAllProducts,
  },
];

export default routes;
