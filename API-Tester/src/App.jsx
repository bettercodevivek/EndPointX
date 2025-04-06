import { useState } from "react";
import ApiForm from "./Components/ApiForm";
import ResponseViewer from "./Components/ResponseViewer";
import React from "react";
function App() {
  const [apiResponse, setApiResponse] = useState(null);

  const handleSendRequest = async ({ url, method, body }) => {
    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        ...(method !== "GET" && { body }),
      });
  
      const contentType = response.headers.get("content-type");
      const data = contentType?.includes("application/json")
        ? await response.json()
        : await response.text();
  
      setApiResponse({
        data,
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
      });
    } catch (error) {
      setApiResponse({ error: error.message });
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Visual API Tester</h1>
      <ApiForm onSendRequest={handleSendRequest} />
      <ResponseViewer response={apiResponse} />
    </div>
  );
}

export default App;
