import React, { useState } from "react";
const ApiForm = ({ setApiResponse }) => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");
  const [headers, setHeaders] = useState([{ key: "", value: "" }]);

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
  
    try {
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
  
      // Add body only if it's a method that supports it
      if (["POST", "PUT", "PATCH"].includes(method) && body) {
        try {
          options.body = JSON.stringify(JSON.parse(body)); // Validate JSON
          if (!options.headers["Content-Type"]) {
            options.headers["Content-Type"] = "application/json";
          }
        } catch (err) {
          return setApiResponse({ error: "Invalid JSON in body" });
        }
      }
  
      const response = await fetch(url, options);
      const data = await response.json();
  
      setApiResponse(data);
    } catch (error) {
      setApiResponse({ error: error.message });
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Enter API URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <select
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>

      <div>
        <h3 className="font-semibold">Headers</h3>
        {headers.map((header, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Key"
              value={header.key}
              onChange={(e) => handleHeaderChange(index, "key", e.target.value)}
              className="p-2 border rounded w-1/2"
            />
            <input
              type="text"
              placeholder="Value"
              value={header.value}
              onChange={(e) => handleHeaderChange(index, "value", e.target.value)}
              className="p-2 border rounded w-1/2"
            />
          </div>
        ))}
        {["POST", "PUT", "PATCH"].includes(method) && (
  <div>
    <h3 className="font-semibold">Body (JSON)</h3>
    <textarea
      rows={6}
      placeholder='e.g. { "name": "John", "age": 30 }'
      value={body}
      onChange={(e) => setBody(e.target.value)}
      className="w-full p-2 border rounded font-mono"
    ></textarea>
  </div>
)}

        <button type="button" onClick={addHeaderField} className="text-blue-500">
          ➕ Add Header
        </button>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        🚀 Send Request
      </button>
    </form>
  );
};

export default ApiForm;
