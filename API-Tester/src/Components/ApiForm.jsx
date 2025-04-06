import { useState } from "react";
import React from "react";
export default function ApiForm({ onSendRequest }) {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendRequest({ url, method, body });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow-md">
      <input
        type="text"
        placeholder="Enter API URL"
        className="w-full p-2 border rounded"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <select
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>DELETE</option>
      </select>
      {method !== "GET" && (
        <textarea
          placeholder="Request Body (JSON)"
          className="w-full p-2 border rounded"
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      )}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send Request 🚀
      </button>
    </form>
  );
}
