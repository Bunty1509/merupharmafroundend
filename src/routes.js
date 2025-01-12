import React from "react";
const Main = React.lazy(() => import("./components/main/Main"));
const SearchProduct = React.lazy(() =>
  import("./components/products/SearchProduct")
);
const DispalyAllProducts = React.lazy(() =>
  import("./components/products/DisplayAllProducts")
);
const DispalySingleProduct = React.lazy(() =>
  import("./components/products/DisplaySingleProduct")
);
const NameSearchPage = React.lazy(() =>
  import("./components/products/NameSearchPage")
);

const routes = [
  { path: "/", name: "Home", element: Main },
  // { path: "/searchProduct", name: "SearchProduct", element: SearchProduct },
  // {
  //   path: "/displayAllProducts",
  //   name: "Display All Products",
  //   element: DispalyAllProducts,
  // },
  // {
  //   path: "/displaySingleProduct",
  //   name: "Display Single Product",
  //   element: DispalySingleProduct,
  // },
  {
    path: "/displaySingleProduct/:name/:productId",
    name: "Display Single Product",
    element: DispalySingleProduct,
  },
  {
    path: "/searchProduct/:name/:productId",
    name: "Search Product",
    element: SearchProduct,
  },
  // {
  //   path: "/nameSearchPage",
  //   name: "Name Search",
  //   element: NameSearchPage,
  // },
  {
    path: "/nameSearchPage/:name",
    name: "Name Search with Query",
    element: NameSearchPage,
  },
];

export default routes;
