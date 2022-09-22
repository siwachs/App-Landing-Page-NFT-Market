import React from "react";

import styles from "../styles/Global";

const Button = ({ assetUrl, link }) => {
  return (
    <div
      className={`${styles.btnBlack}`}
      onClick={(e) => {
        e.preventDefault();
        window.open(link, "_blank");
      }}
    >
      <img alt="" src={assetUrl} className={`${styles.btnIcon}`}></img>

      <div
        className="flex flex-col justify-start"
        style={{ marginLeft: "1rem" }}
      >
        <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
      </div>
    </div>
  );
};

export default Button;
