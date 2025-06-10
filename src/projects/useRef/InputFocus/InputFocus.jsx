import { useRef } from "react";
import styles from "./InputFocus.module.css";

function InputFocus() {
  const formRef = useRef(null); 
  const inputRef = useRef(null); 

  function handleFocus() {
    formRef.current.focus(); 
    setTimeout(() => inputRef.current.focus(), 1000); 
  }

  return (
    <div className={styles["outer-container"]}>
      <form ref={formRef} tabIndex="0" className={styles["form-container"]}>
        <input ref={inputRef} type="text" placeholder="Type here..." className="text-input" />
        <button type="submit" className={styles["form-button"]}>Submit Form</button>
      </form>
      <button type="button" onClick={handleFocus} className={styles["focus-button"]}>Click here To Focus</button>
    </div>
  );
}

export default InputFocus;
