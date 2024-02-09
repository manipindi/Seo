import React from "react";
import styles from "./index.module.css";

export const Note = ({ onChange, textAreaValue }) => {
  return (
    <div className={styles.notes_wrapper}>
      <h1>Notes</h1>
      <textarea onChange={onChange} value={textAreaValue} rows="5" className={styles.text_area} />
    </div>
  );
};
