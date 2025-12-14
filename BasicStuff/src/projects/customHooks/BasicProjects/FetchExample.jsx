import React from "react";
import { useFetch } from "./hooks/useFetch"; // Adjust path as needed
import styles from "./FetchExample.module.css"; // Import styles

function FetchExample() {
  const { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🔍 Fetched Data</h1>

      {loading && <p className={styles.loading}>Fetching data...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}

      <ul className={styles.list}>
        {data?.slice(0, 5).map((post) => (
          <li key={post.id} className={styles.listItem}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchExample;
