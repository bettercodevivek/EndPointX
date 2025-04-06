import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ResponseViewer = ({ response }) => {
    if (!response) return null;
  
    if (response.error) {
      return (
        <div className="bg-red-100 text-red-700 p-4 rounded">
          ❌ Error: {response.error}
        </div>
      );
    }
  
    const { data, status, headers } = response;
  
    return (
      <div className="bg-gray-800 text-white p-4 rounded space-y-4">
        <div className="text-green-400 font-semibold">
          ✅ Status: {status}
        </div>
  
        <div>
          <h4 className="text-yellow-400 font-semibold">Headers</h4>
          <pre className="text-sm">{JSON.stringify(headers, null, 2)}</pre>
        </div>
  
        <div>
          <h4 className="text-cyan-400 font-semibold">Body</h4>
          <SyntaxHighlighter language="json" style={oneDark}>
            {typeof data === "object" ? JSON.stringify(data, null, 2) : data}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  };
  

export default ResponseViewer;
