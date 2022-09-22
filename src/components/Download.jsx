import React from "react";

import styles from "../styles/Global";
import assets from "../assets";

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div className="flex flex-col items-center">
          <h1 className={`${styles.h1Text}`}>Download the source Code.</h1>
          <p className={`${styles.blackText} ${styles.pText}`}>
            Get the full source code on Github.
          </p>
        </div>

        <button
          type="button"
          className={`${styles.btnPrimary}`}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "";
          }}
        >
          Source Code
        </button>

        <div className={`${styles.flexCenter}`}>
          <img alt="" src={assets.scene} className={`${styles.fullImg}`} />
        </div>
      </div>
    </div>
  );
};

export default Download;
