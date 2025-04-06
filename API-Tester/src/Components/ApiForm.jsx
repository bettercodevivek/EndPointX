import React, { useState } from "react";
import QueryParamsSection from "./QueryParams";
const ApiForm = ({ onSendRequest }) => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");
  const [headers, setHeaders] = useState([{ key: "", value: "" }]);
  const [queryParams, setQueryParams] = useState([{ key: "", value: "" }]);

  const handleHeaderChange = (index, field, value) => {
    const newHeaders = [...headers];
    newHeaders[index][field] = value;
    setHeaders(newHeaders);
  };

  const addHeaderField = () => {
    setHeaders([...headers, { key: "", value: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const headersObject = {};
    headers.forEach(({ key, value }) => {
      if (key && value) {
        headersObject[key] = value;
      }
    });
  
    const options = {
      method,
      headers: headersObject,
    };
  
    if (["POST", "PUT", "PATCH"].includes(method) && body) {
      try {
        options.body = JSON.stringify(JSON.parse(body)); // Validate JSON
        if (!options.headers["Content-Type"]) {
          options.headers["Content-Type"] = "application/json";
        }
      } catch (err) {
        return onSendRequest({ error: "Invalid JSON in body" });
      }
    }
  
    const searchParams = new URLSearchParams();
    queryParams.forEach(({ key, value }) => {
      if (key && value) {
        searchParams.append(key, value);
      }
    });
  
    const finalUrl = searchParams.toString()
      ? `${url}?${searchParams.toString()}`
      : url;
  
    // 🔥 Finally call parent handler
    onSendRequest({ url: finalUrl, method, body: options.body || null });
  };  
  
  return (
    <form
  onSubmit={handleSubmit}
  className="space-y-6 bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto"
>
  {/* URL Input + Method */}
  <div className="flex flex-col md:flex-row gap-4">
    <input
      type="text"
      placeholder="🔗 Enter API URL"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <select
      value={method}
      onChange={(e) => setMethod(e.target.value)}
      className="w-full md:w-40 p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="GET">GET</option>
      <option value="POST">POST</option>
      <option value="PUT">PUT</option>
      <option value="DELETE">DELETE</option>
    </select>
  </div>

  {/* Query Params */}
  <div>
    <QueryParamsSection
      queryParams={queryParams}
      setQueryParams={setQueryParams}
    />
  </div>

  {/* Headers Section */}
  <div>
    <h3 className="font-semibold text-lg mb-2">📋 Headers</h3>
    {headers.map((header, index) => (
      <div key={index} className="flex gap-2 mb-2">
        <input
          type="text"
          placeholder="Key"
          value={header.key}
          onChange={(e) =>
            handleHeaderChange(index, "key", e.target.value)
          }
          className="w-1/2 p-2 border rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Value"
          value={header.value}
          onChange={(e) =>
            handleHeaderChange(index, "value", e.target.value)
          }
          className="w-1/2 p-2 border rounded-lg focus:outline-none"
        />
      </div>
    ))}
    <button
      type="button"
      onClick={addHeaderField}
      className="text-blue-600 mt-1 hover:underline"
    >
      ➕ Add Header
    </button>
  </div>

  {/* Body Section */}
  {["POST", "PUT", "PATCH"].includes(method) && (
    <div>
      <h3 className="font-semibold text-lg mb-2">📝 Body (JSON)</h3>
      <textarea
        rows={6}
        placeholder='e.g. { "name": "John", "age": 30 }'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-3 border rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>
  )}

  {/* Submit Button */}
  <div className="text-center">
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
    >
      🚀 Send Request
    </button>
  </div>
</form>
  );
};

export default ApiForm;
