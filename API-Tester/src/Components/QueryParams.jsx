import React from "react";

const QueryParamsSection = ({ queryParams, setQueryParams }) => {
  const handleChange = (index, field, value) => {
    const newParams = [...queryParams];
    newParams[index][field] = value;
    setQueryParams(newParams);
  };

  const addParam = () => {
    setQueryParams([...queryParams, { key: "", value: "" }]);
  };

  const removeParam = (index) => {
    const newParams = [...queryParams];
    newParams.splice(index, 1);
    setQueryParams(newParams);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Query Parameters</h3>
      {queryParams.map((param, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            className="border p-1 rounded w-1/3"
            placeholder="Key"
            value={param.key}
            onChange={(e) => handleChange(index, "key", e.target.value)}
          />
          <input
            className="border p-1 rounded w-1/3"
            placeholder="Value"
            value={param.value}
            onChange={(e) => handleChange(index, "value", e.target.value)}
          />
          <button
            className="text-red-500"
            onClick={() => removeParam(index)}
          >
            ❌
          </button>
        </div>
      ))}
      <button onClick={addParam} className="text-blue-500 underline mt-1">
         Add Query Param
      </button>
    </div>
  );
};

export default QueryParamsSection;
