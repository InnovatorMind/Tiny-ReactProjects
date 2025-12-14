// import React from "react";
import styles from "../InputLoad.module.css";


const Demo2 = ({ setString }) => {
  let str = "";
  function setStr(data) {
    if (data !== "") {
      str = data;
    }
    console.log(str);
  }
  function submitStr() {
    event.preventDefault();
    setString(str);
  }

  return (
    <form className={styles.textForm}>
      <span>Show on Submit: </span>
      <input
        type="text"
        placeholder="Enter a number"
        onChange={(e) => setStr(e.target.value)}
      />
      <button className={styles["form-button"]} onClick={submitStr}>Submit</button>
    </form>
  );
};

export default Demo2;
