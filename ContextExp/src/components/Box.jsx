import React, { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import BoxContext from "../Contexts/BoxContext";

const Box = () => {
  const { theme } = useContext(ThemeContext);
  const { color, changeBoxColor } = useContext(BoxContext);
  return (
    <>
      <div style={{
        background : color,
        borderColor : theme === "light" ? "#333" : "#fff",
        color : theme === "light" ? "#000" : "#fff",
        padding : "20px",
        marginTop : "20px",
        textAlign : "center",
        width : "150px",
        borderWidth : "2px",
        borderStyle : "solid",
        borderRadius : "8px",
        cursor : "pointer",
        marginLeft : "8px",
      }} 
      onClick={changeBoxColor}
      ></div>
    </>
  );
};

export default Box;
