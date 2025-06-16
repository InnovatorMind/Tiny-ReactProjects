import React, { useState } from "react";
import { useDebounce } from "./hooks/useDebounce.js";
import styles from "./SearchComponent.module.css"; // Import styles

function SearchComponent() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);

  React.useEffect(() => {
    if (debouncedQuery) {
      console.log("Fetching results for:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🔍 Live Search</h1>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
      />
      <p className={styles.searchText}>
        Searching for: <span className={styles.highlight}>{debouncedQuery}</span>
      </p>
    </div>
  );
}

export default SearchComponent;
