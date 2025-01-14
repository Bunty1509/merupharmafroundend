import React, { useEffect, useState } from "react";
import medicineData from "../../assets/data/pharmaData.json";
import { useNavigate } from "react-router-dom";

const InputSuggesstions = ({ searchQuery, setSearchQuery }) => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);
  const [searchResults, setSearchResults] = useState([]);
  const nav = useNavigate();

  const routeProduct = (data) => {
    const encode = encodeURIComponent(data.name);
    setSearchQuery("");
    nav(`/searchProduct/${data.name}/${data.Product_id}`);
  };

  useEffect(() => {
    console.log("Search Word :", searchQuery);
    if (searchQuery !== "" && searchQuery.trim().length >= 3) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const queryParts = lowerCaseQuery.split(" ");
      // Filter the data list based on query parts
      // Filter the medicine data
      const filteredResults = medicineData.filter((item) =>
        queryParts.every(
          (part) =>
            item.name.toLowerCase().includes(part) || // Check if the name includes the part
            item.Product_id.toLowerCase().includes(part) || // Check if the Product_id includes the part
            item.salt_composition.toLowerCase().includes(part)
        )
      );

      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    console.log("Filter Results :", searchResults);
  }, [searchResults]);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isWideScreen
        ? searchResults.length > 0 && (
            <ul className="false Searchbar_searchResults__yEh7_">
              {searchResults.map((srcData, index) => (
                <li
                  key={`srcData_${index}`}
                  onClick={() => routeProduct(srcData)}
                >
                  <div className="MuiGrid-root Searchbar_searchtext__v_X4q platinumrx-rfnosa">
                    <div className="MuiGrid-root platinumrx-rfnosa">
                      <p>{srcData.name}</p>
                      <div className="MuiGrid-root Searchbar_drugForm__raSIj platinumrx-rfnosa">
                        {srcData.salt_composition}
                      </div>
                      <div className="MuiGrid-root Searchbar_drugForm__raSIj platinumrx-rfnosa">
                        {srcData.Packaging_Detail}
                      </div>
                    </div>
                  </div>
                  <p className="Searchbar_priceResult__INzLs">
                    MRP ₹{srcData.MRP}
                  </p>
                </li>
              ))}
            </ul>
          )
        : searchResults.length > 0 && (
            <ul className="Searchbar_search_bar_results__ZDY__ Searchbar_searchResults__yEh7_">
              {searchResults.map((srcMobData, index) => (
                <li
                  key={`srcMobData_${index}`}
                  onClick={() => routeProduct(srcMobData)}
                >
                  <div className="MuiGrid-root Searchbar_searchtext__v_X4q platinumrx-rfnosa">
                    <div className="MuiGrid-root platinumrx-1yqq5g6">
                      <p
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span>
                          <b>{srcMobData.name}</b>
                        </span>
                        <span style={{ marginTop: "5px" }}>
                          {srcMobData.salt_composition}
                        </span>
                      </p>
                      <div className="MuiGrid-root platinumrx-rfnosa">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="none"
                          viewBox="0 0 20 20"
                          className="Searchbar_Arrow__nqAkQ"
                        >
                          <path
                            stroke="#F44D4D"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m7.5 5 5 5-5 5"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
              ))}

              {/* <button
          className="Searchbar_see_results__g73wB prx_btn_1"
          style="margin-top: 10px"
        >
          See more results
        </button> */}
            </ul>
          )}
    </>
  );
};

export default InputSuggesstions;
