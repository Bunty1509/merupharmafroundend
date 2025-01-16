import AlertBar from "../alertbar/AlertBar";
import { Link } from "react-router-dom";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <>
      <AlertBar />
      <div className="Header_headerContainer__yOj4c Header_shadow_container__lUAO4 false">
        <div className="Header_searchbarContainer__nbACG">
          <div className="MuiGrid-root MuiGrid-item platinumrx-1crpodu">
            <Link to="/" className="onlyDesktop">
              <div className="MuiBox-root platinumrx-axw7ok">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1455_1616)">
                    <path
                      d="M9.97551 31.2849H8.44265C3.78712 31.2849 -0.00468445 27.4994 -0.00468445 22.8411V22.7367C-0.00468445 18.0831 3.78238 14.2929 8.44265 14.2929H9.45823C10.1701 14.2929 10.7491 14.8716 10.7491 15.5832C10.7491 16.2947 10.1701 16.8735 9.45823 16.8735H8.44265C5.21083 16.8735 2.58172 19.5015 2.58172 22.732V22.8363C2.58172 26.0668 5.21083 28.6949 8.44265 28.6949H9.97551C10.6874 28.6949 11.2663 29.2736 11.2663 29.9851C11.2663 30.6967 10.6874 31.2754 9.97551 31.2754"
                      fill="#F44D4D"
                    ></path>
                    <path
                      d="M23.6572 16.883H15.6038C14.892 16.883 14.313 16.3042 14.313 15.5927C14.313 14.8811 14.892 14.3024 15.6038 14.3024H23.6572C26.8891 14.3024 29.5182 11.6743 29.5182 8.44385C29.5182 5.21336 26.8891 2.58534 23.6572 2.58534H22.6512C19.4193 2.58534 16.7902 5.21336 16.7902 8.44385V10.5975C16.7902 11.3091 16.2113 11.8878 15.4994 11.8878C14.7876 11.8878 14.2086 11.3091 14.2086 10.5975V8.44385C14.2038 3.7855 17.9909 0 22.6512 0H23.6572C28.3128 0 32.1046 3.7855 32.1046 8.43911C32.1046 13.0927 28.3175 16.883 23.6572 16.883Z"
                      fill="#F44D4D"
                    ></path>
                    <path
                      d="M37.5528 31.3376H36.447C35.7352 31.3376 35.1562 30.7589 35.1562 30.0473C35.1562 29.3357 35.7352 28.757 36.447 28.757H37.5528C40.7846 28.757 43.4137 26.129 43.4137 22.8985V22.7941C43.4137 19.5637 40.7846 16.9356 37.5528 16.9356H36.0342C35.3223 16.9356 34.7433 16.3569 34.7433 15.6453C34.7433 14.9338 35.3223 14.355 36.0342 14.355H37.5528C42.2083 14.355 46.0001 18.1405 46.0001 22.7989V22.9032C46.0001 27.5568 42.2131 31.3471 37.5528 31.3471"
                      fill="#EA855E"
                    ></path>
                    <path
                      d="M23.4675 46H22.4851C17.8296 46 14.0378 42.2145 14.0378 37.5561C14.0378 32.8978 17.8248 29.117 22.4851 29.117H30.9752C31.687 29.117 32.266 29.6958 32.266 30.4073C32.266 31.1189 31.687 31.6976 30.9752 31.6976H22.4851C19.2533 31.6976 16.6242 34.3257 16.6242 37.5561C16.6242 40.7866 19.2533 43.4147 22.4851 43.4147H23.4675C26.6993 43.4147 29.3284 40.7866 29.3284 37.5561V35.4025C29.3284 34.6909 29.9074 34.1122 30.6192 34.1122C31.3311 34.1122 31.9101 34.6909 31.9101 35.4025V37.5561C31.9101 42.2098 28.123 46 23.4627 46"
                      fill="#EA855E"
                    ></path>
                  </g>
                  <defs>
                    {/* <clipPath id="clip0_1455_1616">
                      <rect width="46" height="46" fill="white"></rect>
                    </clipPath> */}
                  </defs>
                </svg>
                {/* <p style={{ display: "none" }}> */}
                <p>
                  Meru Pharma<span style={{ fontWeight: "400" }}>Rx</span>
                </p>
              </div>
            </Link>
            <div className="MuiGrid-root platinumrx-1eqg8k8">
              <div
                className="MuiGrid-root Searchbar_mainSearchContainer__1fEKT Searchbar_headerSearchContainer__o_ABq platinumrx-rfnosa"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    marginRight: "20px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link to="/">
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Searchbar_searchIconMobile__LMi1_"
                    >
                      <g clipPath="url(#clip0_1455_1616)">
                        <path
                          d="M9.97551 31.2849H8.44265C3.78712 31.2849 -0.00468445 27.4994 -0.00468445 22.8411V22.7367C-0.00468445 18.0831 3.78238 14.2929 8.44265 14.2929H9.45823C10.1701 14.2929 10.7491 14.8716 10.7491 15.5832C10.7491 16.2947 10.1701 16.8735 9.45823 16.8735H8.44265C5.21083 16.8735 2.58172 19.5015 2.58172 22.732V22.8363C2.58172 26.0668 5.21083 28.6949 8.44265 28.6949H9.97551C10.6874 28.6949 11.2663 29.2736 11.2663 29.9851C11.2663 30.6967 10.6874 31.2754 9.97551 31.2754"
                          fill="#F44D4D"
                        ></path>
                        <path
                          d="M23.6572 16.883H15.6038C14.892 16.883 14.313 16.3042 14.313 15.5927C14.313 14.8811 14.892 14.3024 15.6038 14.3024H23.6572C26.8891 14.3024 29.5182 11.6743 29.5182 8.44385C29.5182 5.21336 26.8891 2.58534 23.6572 2.58534H22.6512C19.4193 2.58534 16.7902 5.21336 16.7902 8.44385V10.5975C16.7902 11.3091 16.2113 11.8878 15.4994 11.8878C14.7876 11.8878 14.2086 11.3091 14.2086 10.5975V8.44385C14.2038 3.7855 17.9909 0 22.6512 0H23.6572C28.3128 0 32.1046 3.7855 32.1046 8.43911C32.1046 13.0927 28.3175 16.883 23.6572 16.883Z"
                          fill="#F44D4D"
                        ></path>
                        <path
                          d="M37.5528 31.3376H36.447C35.7352 31.3376 35.1562 30.7589 35.1562 30.0473C35.1562 29.3357 35.7352 28.757 36.447 28.757H37.5528C40.7846 28.757 43.4137 26.129 43.4137 22.8985V22.7941C43.4137 19.5637 40.7846 16.9356 37.5528 16.9356H36.0342C35.3223 16.9356 34.7433 16.3569 34.7433 15.6453C34.7433 14.9338 35.3223 14.355 36.0342 14.355H37.5528C42.2083 14.355 46.0001 18.1405 46.0001 22.7989V22.9032C46.0001 27.5568 42.2131 31.3471 37.5528 31.3471"
                          fill="#EA855E"
                        ></path>
                        <path
                          d="M23.4675 46H22.4851C17.8296 46 14.0378 42.2145 14.0378 37.5561C14.0378 32.8978 17.8248 29.117 22.4851 29.117H30.9752C31.687 29.117 32.266 29.6958 32.266 30.4073C32.266 31.1189 31.687 31.6976 30.9752 31.6976H22.4851C19.2533 31.6976 16.6242 34.3257 16.6242 37.5561C16.6242 40.7866 19.2533 43.4147 22.4851 43.4147H23.4675C26.6993 43.4147 29.3284 40.7866 29.3284 37.5561V35.4025C29.3284 34.6909 29.9074 34.1122 30.6192 34.1122C31.3311 34.1122 31.9101 34.6909 31.9101 35.4025V37.5561C31.9101 42.2098 28.123 46 23.4627 46"
                          fill="#EA855E"
                        ></path>
                      </g>
                      <defs>
                        {/* <clipPath id="clip0_1455_1616">
                      <rect width="46" height="46" fill="white"></rect>
                    </clipPath> */}
                      </defs>
                    </svg>
                  </Link>
                  <p
                    style={{ marginLeft: "4px" }}
                    className="Searchbar_searchIconMobile__LMi1_"
                  >
                    Meru Pharma
                    <span style={{ fontWeight: "400" }}>Rx</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="Header_rightContainer__htCj5"> */}
          {/* <p className="Header_btnLink__aprBe">How to order medicine</p>
            <a className="Header_btnLink__aprBe" href="/contact">
              Contact us
            </a>
            <span>
              <a className="Header_btnLink__aprBe" href="">
                Login
              </a>
            </span> */}
          {/* <div className="Header_rightIcons__lhB1w">
              <button className="Header_cartButton__Giyrb">
                <span className="MuiBadge-root Header_cartBadge__QETGe platinumrx-1rzb3uu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z"></path>
                    <path
                      fill="#53b7e8"
                      d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"
                    ></path>
                  </svg>
                  <span className="MuiBadge-badge MuiBadge-standard MuiBadge-invisible MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular platinumrx-1bp6xoa">
                    0
                  </span>
                </span>
              </button>
            </div> */}
          {/* </div> */}
        </div>
      </div>
      <HeaderSearch />
    </>
  );
};

export default Header;
