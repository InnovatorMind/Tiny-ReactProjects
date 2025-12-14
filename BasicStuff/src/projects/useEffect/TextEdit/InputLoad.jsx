import { useState } from "react";
import Demo1 from "./components/Demo1.jsx";
import Demo2 from "./components/Demo2.jsx";
import styles from "./InputLoad.module.css";


const InputLoad = () => {
  const [string, setString] = useState("");


  return (
    <div id={styles.inputText}>
      <p className={styles.text}>Text: <span>{string}</span></p>
      
      <Demo1 string={string} setString = {setString} />    
      <Demo2 setString = {setString} />    
    </div>
  );
};

export default InputLoad;
