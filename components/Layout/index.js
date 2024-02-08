import React from "react";
import styles from "./index.module.css";
import SeoHead from "../SeoHead";

export const WithHeaderLayout = ({ children, heading, subtitle }) => {
  return (
    <div className={styles.with_header_wrapper}>
      {/* <SeoHead
        title={`Posts Layout Title`}
        description={"A perfect place to explore the posts"}
        image={
          "https://images.hindustantimes.com/tech/img/2023/09/21/1600x900/fb_1695273515215_1695273522698.jpg"
        }
        name={"Posts Page"}
        type="posts"
      /> */}
      <div className={styles.header_wrapper}>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.children_wrapper}>{children}</div>
    </div>
  );
};
