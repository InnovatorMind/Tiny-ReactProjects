import styles from "../InputLoad.module.css";

const Demo1 = ({ string, setString }) => {
  return (
    <form className={styles.textForm} >
      <span>Instant Show: </span>
      <input
        type="text"
        value={string}
        placeholder="Enter a number"
        onChange={(e) => setString(e.target.value)}
      />
    </form>
  );
};

export default Demo1;
