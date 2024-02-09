import { Note } from "@/components/Note";
import styles from './index.module.css'
import { useState } from "react";

export default function FrontEnd() {
    const [textAreaValue, setTextAreaValue] = useState("")
    const handleTextAreaInput = (e) => {
       setTextAreaValue(e.target.value)
    }
  return (
    <div className={styles.content_wrapper}>
      <Note onChange={handleTextAreaInput} textAreaValue={textAreaValue}/>
    </div>
  );
}
