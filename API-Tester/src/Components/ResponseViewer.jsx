import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ResponseViewer = ({ apiResponse }) => {
  if (!apiResponse) return null;

  if (apiResponse.error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded">
        ❌ Error: {apiResponse.error}
      </div>
    );
  }

  const formatted =
    typeof apiResponse === "object"
      ? JSON.stringify(apiResponse, null, 2)
      : apiResponse;

  return (
<SyntaxHighlighter language="json" style={oneDark}>
  {formatted}
</SyntaxHighlighter>
  );
};

export default ResponseViewer;
