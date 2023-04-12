import React from "react";

function Footer() {
  return (
    <div
      className="footer d__flex justify__content__space__between pz-10"
      style={{ padding: "30px 400px", zIndex: "100" }}
    >
     
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2020 programmer Tilen Otieno. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
