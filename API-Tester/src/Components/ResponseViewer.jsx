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
    <div className="bg-gray-800 text-white p-4 rounded space-y-4 relative">
      <div className="text-green-400 font-semibold">
        ✅ Status: {status}
      </div>

      {time && (
        <div className="text-sm text-gray-400">
          ⏱️ Request Time: {time}
        </div>
      )}

      <div>
        <h4 className="text-yellow-400 font-semibold">Headers</h4>
        <pre className="text-sm">{JSON.stringify(headers, null, 2)}</pre>
      </div>

      <div>
        <h4 className="text-cyan-400 font-semibold">Body</h4>

        <button
          onClick={copyToClipboard}
          className="mb-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded"
        >
          📋 {copyStatus || "Copy Body"}
        </button>

        <SyntaxHighlighter language="json" style={oneDark}>
          {formatted}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ResponseViewer;
