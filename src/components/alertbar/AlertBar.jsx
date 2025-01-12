import React from "react";
import DownloadQR from "../../assets/media/DownloadQR.gif";
import AppleIcon from "../../assets/media/AppleIcon.png";
import PlayStoreIcon from "../../assets/media/PlayStoreIcon.png";

const AlertBar = () => {
  return (
    <div className="app-layout">
      <div className="AlertBar_AlertContainer__kNqBq">
        <div className="AlertBar_LeftSide__13VCo">
          <p className="AlertBar_AlertText__ZWdzG">
            Meru PharmaRx | <span> Best Pharmacy in Anantapur </span>
          </p>
          <div className="AlertBar_mobile_contianer__rgf6Z">
            <p className="AlertBar_AlertTextMobile__qjwvl">
              <b>Meru PharmaRx</b> <br />
              {/* in Anantapur */}
            </p>
            <div className="AlertBar_divider__mZDdW"></div>
            <p className="AlertBar_AlertTextMobileSpan__W0Tdl">
              Best Pharmacy <br />
              <b>in Anantapur</b>
            </p>
          </div>
        </div>
        {/* <div className="AlertBar_download__X_cdJ">
          <img
            alt=""
            loading="lazy"
            width="150"
            height="150"
            decoding="async"
            className="AlertBar_downloading__960Zt"
            style={{ color: "transparent", width: "24px", height: "24px" }}
            srcSet={`${DownloadQR}?w=256&q=80 1x, ${DownloadQR}?w=384&q=80 2x`}
            src={DownloadQR}
          />
          <p className="AlertBar_download__text__pmv7P">
            Download <span>Now</span>
          </p>
          <img
            alt="AppleIcon"
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            className="AlertBar_download__icon__9RBZm"
            style={{ color: "transparent" }}
            srcSet={`${AppleIcon}?w=32&amp;q=80 1x,
              ${AppleIcon}?w=48&amp;q=80 2x`}
            src={`${AppleIcon}?w=48&amp;q=80`}
          />
          <img
            alt="PlayStoreIcon"
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            className="AlertBar_download__icon__9RBZm"
            style={{ color: "transparent" }}
            srcSet={`${PlayStoreIcon}?w=32&amp;q=80 1x,
              ${PlayStoreIcon}?w=48&amp;q=80 2x`}
            src={`${PlayStoreIcon}?w=48&amp;q=80`}
          />
        </div> */}
      </div>
    </div>
  );
};

export default AlertBar;
