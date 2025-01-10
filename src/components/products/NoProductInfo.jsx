import React from "react";

const NoProductInfo = () => {
  return (
    <div className="NoDataPage_no_data_page__XFC_b">
      <img
        alt="Medicine not available"
        loading="eager"
        width="400"
        height="400"
        decoding="async"
        className="NoDataPage_no_data_page__img__XMBwD"
        style={{ color: "transparent" }}
        srcSet="
      https://platinumrxassets.blob.core.windows.net/platinumrx-assets/NOdata.png?w=640&amp;q=80 1x,
      https://platinumrxassets.blob.core.windows.net/platinumrx-assets/NOdata.png?w=828&amp;q=80 2x
    "
        src="https://platinumrxassets.blob.core.windows.net/platinumrx-assets/NOdata.png?w=828&amp;q=80"
      />
      <p className="NoDataPage_no_data_page__text__0UEWH">
        ooh ho! we don’t have the product you are looking for
      </p>
      {/* <button
        className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary platinumrx-j8migb"
        type="button"
      >
        Search Different Medicine
        <span className="MuiTouchRipple-root platinumrx-w0pj6f"></span>
      </button> */}
    </div>
  );
};

export default NoProductInfo;
