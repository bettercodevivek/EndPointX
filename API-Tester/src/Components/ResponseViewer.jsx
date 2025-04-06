import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ResponseViewer = ({ response }) => {
  const [copyStatus, setCopyStatus] = useState("");

  if (!response) return null;

  if (response.error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded">
        ❌ Error: {response.error}
        {response.time && (
          <div className="text-xs mt-2 text-gray-600">⏱️ Took {response.time}</div>
        )}
      </div>
    );
  }

  const { data, status, headers, time } = response;

  const formatted =
    typeof data === "object" ? JSON.stringify(data, null, 2) : data;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formatted);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(""), 2000);
    } catch (err) {
      setCopyStatus("Failed to copy");
    }
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md space-y-6 max-w-3xl mx-auto mt-8">
    {/* Status */}
    <div className="flex flex-wrap justify-between items-center">
      <span className="text-green-400 font-semibold text-lg">✅ Status: {status}</span>
      {time && (
        <span className="text-sm text-gray-400">⏱️ Time: {time}</span>
      )}
    </div>
  
    {/* Headers */}
    <div>
      <h4 className="text-yellow-400 font-semibold mb-1">📦 Headers</h4>
      <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm border border-gray-700">
        <pre className="whitespace-pre-wrap break-all">
          {JSON.stringify(headers, null, 2)}
        </pre>
      </div>
    </div>
  
    {/* Body */}
    <div>
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-cyan-400 font-semibold">📄 Response Body</h4>
        <button
          onClick={copyToClipboard}
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-1.5 rounded-lg transition"
        >
          📋 {copyStatus || "Copy JSON"}
        </button>
      </div>
  
      <div className="rounded-lg overflow-hidden border border-gray-700">
        <SyntaxHighlighter language="json" style={oneDark} customStyle={{ margin: 0, background: "transparent" }}>
          {formatted}
        </SyntaxHighlighter>
      </div>
    </div>
  </div>
  
  );
};

export default ResponseViewer;
