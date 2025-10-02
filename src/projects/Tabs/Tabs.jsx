import { useState } from "react";

export default function Tabs({ defaultValue, items }) {
  const [value, setValue] = useState(defaultValue ?? items[0].value);

  return (
    <div className="w-full py-8">
      {/* Tab buttons */}
      <div className="flex space-x-1 border-b border-gray-300">
        {items.map(({ label, value: itemValue }) => {
          const isActiveValue = itemValue === value;
        //   console.log(`${itemValue} ${value}`,itemValue === value)

          return (
            <button
              key={itemValue}
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors
                ${
                  isActiveValue
                    ? "bg-gray-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              onClick={() => setValue(itemValue)}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Tab panels */}
      <div className="p-4 bg-white text-black border border-t-0 border-gray-300 rounded-b-md shadow-sm">
        {items.map(({ panel, value: itemValue }) => (
          <div key={itemValue} hidden={itemValue !== value}>
            {/* {console.log(itemValue !== value)} */}
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}
