import { useState } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  function incremnt() {
    console.log("hi");
    setCount((prevCount) => prevCount + 1);
  }

  function reset() {
    setCount(0);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className={styles.counter}>

      <p className={styles.text}  >{count}</p>
      <div className={`Counter1 ${styles.basicCounter}`}>
        <button className={styles.counterButton} onClick={incremnt}>Click..</button>
      </div>

      <div className={`Counter2 ${styles.basicCounter}`}>
        <button className={styles.counterButton} onClick={ incremnt }>Incremnt</button>
        <button className={styles.counterButton} onClick={ reset }>RESET</button>
        <button className={styles.counterButton} onClick={ decrement }>Decrement</button>
      </div>
      
    </div>
  );
};

export default Counter;
