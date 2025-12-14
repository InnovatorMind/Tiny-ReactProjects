import React, { useState } from "react";

const Reports = () => {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Reports failed to render!");
  }

  return (
    <div>
      <h2>📊 Reports Section</h2>
      <button onClick={() => setCrash(true)}>Simulate Crash</button>
    </div>
  );
};

export default Reports;
