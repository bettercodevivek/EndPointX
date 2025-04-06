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

  const formatted =
    typeof response === "object"
      ? JSON.stringify(response, null, 2)
      : response;

  return (
<SyntaxHighlighter language="json" style={oneDark}>
  {formatted}
</SyntaxHighlighter>
  );
};

export default ResponseViewer;
