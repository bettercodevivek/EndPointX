import React from "react";
export default function ResponseViewer({ response }) {
    return (
      <div className="mt-6 bg-gray-100 p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-2">Response:</h2>
        <pre className="whitespace-pre-wrap break-words">
          {response ? JSON.stringify(response, null, 2) : "No response yet..."}
        </pre>
      </div>
    );
  }
  