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
          "https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1.jpg"
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
