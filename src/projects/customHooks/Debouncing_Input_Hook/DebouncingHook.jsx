import React, { useState } from "react";
import { useDebounce } from "./hooks/useDebounce"; 

function SearchComponent() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);

  React.useEffect(() => {
    if (debouncedQuery) {
      console.log("Fetching results for:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700">Live Search</h1>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-80 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <p className="text-gray-500">
        Searching for: <span className="font-medium text-blue-600">{debouncedQuery}</span>
      </p>
    </div>
  );
}

export default SearchComponent;
