import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleClick = (event) => {
    // Prevent default behavior of the <a> tag (which is navigating)
    event.preventDefault();

    // Perform your custom logic (e.g., open a new window)
    // window.open("https://x.com/PlatinumRxIndia?s=20", "_blank");
  };
  return (
    <div className="MuiGrid-root MuiGrid-container container Footer_footerContent__sIDvd platinumrx-1d3bbye">
      <div className="MuiGrid-root Footer_leftFooterContainer__4DvG6 platinumrx-rfnosa">
        <div>
          <div className="MuiBox-root platinumrx-axw7ok">
            <svg
              width="46"
              height="46"
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
              {/* <defs>
                    <clipPath id="clip0_1455_1616">
                      <rect width="46" height="46" fill="white"></rect>
                    </clipPath>
                  </defs> */}
            </svg>
            <p style={{ fontSize: "28px" }}>
              Meru Pharma<span style={{ fontWeight: "400" }}>Rx</span>
            </p>
          </div>
          <p
            className="MuiTypography-root MuiTypography-body1 Footer_companyName__FmEFL platinumrx-1bx7d16"
            style={{ paddingTop: "12px" }}
          >
            SV Technologies Pvt. Ltd.
          </p>
        </div>
      </div>
      <div className="MuiGrid-root Footer_footerInfo__m8EQz platinumrx-rfnosa">
        <div className="MuiGrid-root Footer_footerInfoSection__Gp0JO platinumrx-rfnosa">
          <h4>Company</h4>
          <p>
            {/* <a href="/best-online-pharmacy"> */}
            Best Pharmacy in Anantapur, Andhra Pradesh, India
            {/* </a> */}
          </p>
          <p>
            {/* <a href="/buy-medicine-online-with-discount"> */}
            Buy Medicines Online With Discount
            {/* </a> */}
          </p>
          <p>
            {/* <a href="/privacy-policy">Privacy Policy</a> */}
            <Link to="/displayAllProducts">Display All Products</Link>
          </p>
          {/* <p>
            <a href="/legal-policy">Terms of Use</a>
          </p> */}
          {/* <p style={{ visibility: "hidden", marginTop: "0px" }}>
            <a href="/brands-with-us">Our Brands</a>
          </p> */}
          <div className="MuiGrid-root Footer_MobilesocialIcons__lA0IC platinumrx-rfnosa">
            <h4>Follow us on</h4>
            <div
              className="MuiGrid-root platinumrx-rfnosa"
              style={{ display: "flex", gap: "10px" }}
            >
              <div className="MuiGrid-root platinumrx-rfnosa">
                <a
                  onClick={handleClick}
                  // target="_blank"
                  // href="https://www.facebook.com/platinumrxofficial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      // fill="#53b7e8"
                      fill="#53b7e8"
                      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="MuiGrid-root platinumrx-rfnosa">
                <a
                  onClick={handleClick}
                  // target="_blank"
                  // href="https://www.youtube.com/channel/UCjNCUIi43D_Bk2i4BfMa3GA"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#53b7e8"
                      fillRule="evenodd"
                      d="M12 4c.855 0 1.732.022 2.582.058l1.004.048.961.057.9.061.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91q-.02.218-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063-.9.062-.962.057-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048-.961-.057-.9-.062-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91q.02-.218.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064.9-.061.962-.057 1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="MuiGrid-root platinumrx-rfnosa">
                <a
                  onClick={handleClick}
                  // target="_blank"
                  // href="https://www.instagram.com/platinumrxofficial/?utm_source=ig_web_button_share_sheet&amp;igshid=OGQ5ZDc2ODk2ZA=="
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#53b7e8"
                      d="M13.028 2.001q1.095-.004 2.189.022l.194.007c.224.008.445.018.712.03 1.064.05 1.79.218 2.427.465.66.254 1.216.598 1.772 1.154.508.5.902 1.104 1.153 1.771.247.637.415 1.364.465 2.428.012.266.022.488.03.712l.006.194q.026 1.095.023 2.188l.001.746v1.31q.004 1.095-.023 2.19l-.006.193c-.008.224-.018.445-.03.712-.05 1.064-.22 1.79-.466 2.427a4.9 4.9 0 0 1-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.427.465-.267.012-.488.022-.712.03l-.194.006q-1.095.027-2.189.023l-.746.001h-1.309q-1.095.004-2.189-.023l-.194-.006a60 60 0 0 1-.712-.03c-1.064-.05-1.79-.22-2.428-.466a4.9 4.9 0 0 1-1.771-1.153 4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.427l-.03-.712-.005-.194Q1.998 14.123 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.224.018-.446.03-.712.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.68a4.9 4.9 0 0 1 1.77-1.155c.638-.247 1.363-.415 2.428-.465l.712-.03.194-.005Q9.879 1.998 10.972 2zm-1.028 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6 3 3 0 1 1 0-6zm5.25-3.5a1.25 1.25 0 0 0 0 2.498 1.25 1.25 0 0 0 0-2.5z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="MuiGrid-root platinumrx-rfnosa">
                <a
                  onClick={handleClick}
                  // target="_blank" href="https://x.com/PlatinumRxIndia?s=20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#53b7e8"
                      d="M13.712 10.622 20.412 3h-1.588l-5.816 6.618L8.36 3H3l7.027 10.008L3 21h1.588l6.144-6.99L15.64 21H21z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="MuiGrid-root Footer_footerInfoSection__Gp0JO platinumrx-rfnosa">
          <h4>Contact Us</h4>
          <p>
            <a href="mailto:info@merupharma.com" target="_blank">
              info@merupharma.com
            </a>
          </p>
          <p>
            <a href="tel:+919063636606">+91 9063636606</a>
          </p>
        </div>
        <div className="MuiGrid-root Footer_socialIcons__hm0h4 platinumrx-rfnosa">
          <h4>Follow us on</h4>
          <div
            className="MuiGrid-root platinumrx-rfnosa"
            style={{ display: "flex", gap: "20px" }}
          >
            <div className="MuiGrid-root platinumrx-rfnosa">
              <a
                onClick={handleClick}
                // target="_blank"
                // href="https://www.facebook.com/platinumrxofficial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#53b7e8"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="MuiGrid-root platinumrx-rfnosa">
              <a
                onClick={handleClick}
                // target="_blank"
                // href="https://www.youtube.com/channel/UCjNCUIi43D_Bk2i4BfMa3GA"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#53b7e8"
                    fillRule="evenodd"
                    d="M12 4c.855 0 1.732.022 2.582.058l1.004.048.961.057.9.061.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91q-.02.218-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063-.9.062-.962.057-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048-.961-.057-.9-.062-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91q.02-.218.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064.9-.061.962-.057 1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="MuiGrid-root platinumrx-rfnosa">
              <a
                // target="_blank"
                onClick={handleClick}
                // href="https://www.instagram.com/platinumrxofficial/?utm_source=ig_web_button_share_sheet&amp;igshid=OGQ5ZDc2ODk2ZA=="
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#53b7e8"
                    d="M13.028 2.001q1.095-.004 2.189.022l.194.007c.224.008.445.018.712.03 1.064.05 1.79.218 2.427.465.66.254 1.216.598 1.772 1.154.508.5.902 1.104 1.153 1.771.247.637.415 1.364.465 2.428.012.266.022.488.03.712l.006.194q.026 1.095.023 2.188l.001.746v1.31q.004 1.095-.023 2.19l-.006.193c-.008.224-.018.445-.03.712-.05 1.064-.22 1.79-.466 2.427a4.9 4.9 0 0 1-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.427.465-.267.012-.488.022-.712.03l-.194.006q-1.095.027-2.189.023l-.746.001h-1.309q-1.095.004-2.189-.023l-.194-.006a60 60 0 0 1-.712-.03c-1.064-.05-1.79-.22-2.428-.466a4.9 4.9 0 0 1-1.771-1.153 4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.427l-.03-.712-.005-.194Q1.998 14.123 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.224.018-.446.03-.712.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.68a4.9 4.9 0 0 1 1.77-1.155c.638-.247 1.363-.415 2.428-.465l.712-.03.194-.005Q9.879 1.998 10.972 2zm-1.028 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6 3 3 0 1 1 0-6zm5.25-3.5a1.25 1.25 0 0 0 0 2.498 1.25 1.25 0 0 0 0-2.5z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="MuiGrid-root platinumrx-rfnosa">
              <a onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#53b7e8"
                    d="M13.712 10.622 20.412 3h-1.588l-5.816 6.618L8.36 3H3l7.027 10.008L3 21h1.588l6.144-6.99L15.64 21H21z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="MuiGrid-root Footer_appIcons__H20VO platinumrx-rfnosa">
        <a href="https://apps.apple.com/in/app/platinumrx/id6477701930">
          <img
            alt="applestore"
            loading="lazy"
            width="356"
            height="114"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent", width: "117px", height: "37px" }}
            srcSet="
                  ../next/static/media/AppStoreIcon.6086b904.png?w=384&amp;q=80 1x,
                  ../next/static/media/AppStoreIcon.6086b904.png?w=750&amp;q=80 2x
                "
            src="../next/static/media/AppStoreIcon.6086b904.png?w=750&amp;q=80"
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=in.platinumrx">
          <img
            alt="playstore"
            loading="lazy"
            width="356"
            height="110"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent", width: "123px", height: "37px" }}
            srcSet="
                  ../next/static/media/PlayStoreIcon.771694b0.png?w=384&amp;q=80 1x,
                  ../next/static/media/PlayStoreIcon.771694b0.png?w=750&amp;q=80 2x
                "
            src="../next/static/media/PlayStoreIcon.771694b0.png?w=750&amp;q=80"
          />
        </a>
      </div> */}
    </div>
  );
};

export default Footer;
