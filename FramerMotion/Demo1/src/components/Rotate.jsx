import { motion } from "motion/react";

export default function Rotate() {
    console.log(motion);
  return (
    <>
      <motion.ul animate={{ rotate: 360 }}>Spped</motion.ul>
      
      <motion.div
        style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        Spped
      </motion.div>

      <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }}>
        Click here....
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
      >
        Click here...
      </motion.button>
    </>
  );
}

/**
 * ==============   Styles   ================
 */

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
};
