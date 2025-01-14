import React, { useState } from "react";
import wave from "../../assets/media/wave.png";
import { useNavigate } from "react-router-dom";
import InputSuggesstions from "./InputSuggesstions";

const HeaderSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchQuery.trim()) {
      const encodedQuery = encodeURIComponent(searchQuery);
      const lowerCaseQuery = searchQuery.toLowerCase();
      const queryParts = lowerCaseQuery.split(" ");

      // Find matching product by name or Product_id
      const findProduct = medicineData.find((medData) => {
        const lowerCaseNameParts = medData.name.toLowerCase().split(" ");
        const lowerCaseProductId = String(medData.Product_id).toLowerCase();

        // Check if query matches Product_id or parts of the name
        return (
          lowerCaseProductId.includes(lowerCaseQuery) || // Match Product_id
          queryParts.every((part) => lowerCaseNameParts.includes(part)) // Match all parts of the name
        );
      });

      // Redirect based on the result
      if (findProduct) {
        navigate(`/searchProduct/${encodedQuery}/${findProduct.Product_id}`);
      } else {
        navigate(`/nameSearchPage/${encodedQuery}`);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <div className="hero-section_heroSection__frxoZ">
        <div className="fullWidth">
          <div className="MuiGrid-root platinumrx-1eqg8k8">
            <div className="MuiGrid-root Searchbar_mainSearchContainer__1fEKT platinumrx-rfnosa">
              <div className="MuiGrid-root Searchbar_searchBar__nvN1E platinumrx-rfnosa">
                <div className="MuiGrid-root platinumrx-gz2xqh"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  fill="none"
                  viewBox="0 0 16 16"
                  className="Searchbar_searchIcon__Bf5SE"
                >
                  <path
                    // fill="#F44D4D"
                    fill="#036068"
                    fillRule="evenodd"
                    d="M4.814 1.251a6.583 6.583 0 0 1 7.974 9.769l2.096 2.096a1.25 1.25 0 0 1-1.768 1.768l-2.096-2.096A6.584 6.584 0 1 1 4.814 1.25m2.52 1.999a4.083 4.083 0 1 0 0 8.167 4.083 4.083 0 0 0 0-8.167"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                  viewBox="0 0 16 16"
                  className="Searchbar_searchIconMobile__LMi1_"
                >
                  <path
                    // fill="#F44D4D"
                    fill="#036068"
                    fillRule="evenodd"
                    d="M4.814 1.251a6.583 6.583 0 0 1 7.974 9.769l2.096 2.096a1.25 1.25 0 0 1-1.768 1.768l-2.096-2.096A6.584 6.584 0 1 1 4.814 1.25m2.52 1.999a4.083 4.083 0 1 0 0 8.167 4.083 4.083 0 0 0 0-8.167"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="MuiGrid-root platinumrx-14ft4qk">
                  &nbsp;&nbsp;
                </div>
                <div className="MuiGrid-root platinumrx-gz2xqh"> </div>
                <hr className="MuiDivider-root MuiDivider-middle MuiDivider-vertical MuiDivider-flexItem platinumrx-s1md9o" />
                <input
                  placeholder="Search your Medicines"
                  className="Searchbar_searchInput__x6r9u Searchbar_headerSearchInput__IGw_V"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress} // Trigger search on Enter key
                />
                {/* <span
                  style={{
                    cursor: "pointer",
                    display: searchQuery === "" ? "none" : "inline", // Use a ternary operator
                  }}
                  onClick={() => setSearchQuery("")}
                >
                  X
                </span> */}
                <button
                  className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium platinumrx-148fdm8"
                  tabindex="0"
                  type="button"
                  aria-label="clear-search"
                  style={{
                    cursor: "pointer",
                    display: searchQuery === "" ? "none" : "inline", // Use a ternary operator
                  }}
                  onClick={() => setSearchQuery("")}
                >
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall Searchbar_crossIcon__UPSzn platinumrx-1k33q06"
                    focusable="false"
                    // aria-hidden="true"
                    viewBox="0 0 24 24"
                    dataTestid="ClearIcon"
                  >
                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                  {/* <span className="MuiTouchRipple-root platinumrx-w0pj6f">
                    X
                  </span> */}
                </button>
                <button className="Searchbar_searchBtnLanding__HdOMy">
                  Search
                </button>
              </div>
              {searchQuery !== "" && <InputSuggesstions />}
            </div>
          </div>
        </div>
        <div className="Location_location__5iM6X">
          <p>
            Delivering to <span>HSR Layout</span>
          </p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 13 9"
              className="Location_location__dropicon__NFalN"
            >
              <path
                // fill="#FC5A5A"
                fill="#036068"
                d="M11.332.81a.94.94 0 0 1 .69-.31c.26 0 .508.111.691.31.091.097.163.213.213.34a1.13 1.13 0 0 1 0 .809q-.076.194-.213.34L7.192 8.192A.95.95 0 0 1 6.5 8.5a.95.95 0 0 1-.692-.309L.287 2.3a1.1 1.1 0 0 1-.212-.341 1.13 1.13 0 0 1 0-.808Q.149.958.287.809A.94.94 0 0 1 .977.5c.26 0 .508.111.691.31l4.834 4.83z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="hero-section_tagLine__uVf_7">
          Save upto 50% on Medicine Bills
        </div>
        <div className="hero-section_waveCont__V5fMC">
          <img
            alt="wave-animation"
            loading="lazy"
            width="184"
            height="13"
            decoding="async"
            className="hero-section_animated__f0Ub5"
            srcSet={`
        ${wave}?w=256&amp;q=80 1x,
        ${wave}?w=384&amp;q=80 2x
      `}
            src={`${wave}?w=384&amp;q=80`}
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </>
  );
};

export default HeaderSearch;
