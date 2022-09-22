import React from "react";

import Button from "./Button";

import styles from "../styles/Global";
import assets from "../assets";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockUpImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner}`}
    >
      <div
        className={`flex items-center w-11/12 sm:w-full minmd:w-3/4  ${
          !reverse ? styles.boxClass : styles.boxReverseClass
        } ${reverse ? styles.textRight : styles.textLeft}`}
      >
        <div
          className={`${styles.descDiv} ${
            !reverse ? "fadeLeftMini" : "fadeRightMini"
          }`}
        >
          <h1
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.h1Text
            }`}
          >
            {title}
          </h1>
          <p
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.descriptionText
            }`}
          >
            {description}
          </p>

          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/@ssiwach8888/nft-market?serviceType=classic&distribution=exxpo-go"
            ></Button>
          )}
        </div>

        <div
          className={`flex-1 ${styles.flexCenter} p-8 sm:px-0 ${
            !reverse ? "fadeRightMini" : "fadeLeftMini"
          }`}
        >
          <img alt="" src={mockUpImg} className={`${styles.sectionImg}`}></img>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
