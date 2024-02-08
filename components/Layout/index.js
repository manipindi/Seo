import React from "react";
import styles from "./index.module.css";
import SeoHead from "../SeoHead";

export const WithHeaderLayout = ({ children, heading, subtitle }) => {
  return (
    <div className={styles.with_header_wrapper}>
      <SeoHead
        title={`Posts Layout Title`}
        description={"A perfect place to explore the posts"}
        image={
          "https://english.mathrubhumi.com/image/contentid/policy:1.8705712:1688615785/Photo%20size(1).jpg"
        }
        name={"Posts Page"}
        type="posts"
      />
      <div className={styles.header_wrapper}>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.children_wrapper}>{children}</div>
    </div>
  );
};
