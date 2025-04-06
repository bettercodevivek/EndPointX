import { useState } from "react";
import ApiForm from "./Components/ApiForm";
import ResponseViewer from "./Components/ResponseViewer";
import React from "react";
function App() {
  const [apiResponse, setApiResponse] = useState(null);

  const handleSendRequest = async ({ url, method, body }) => {
    const startTime = performance.now(); // start timer
    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        ...(method !== "GET" && { body })
      });
  
      const data = await response.json();
      const endTime = performance.now(); // end timer
  
      setApiResponse({
        data, // ✅ renamed from body
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        time: `${(endTime - startTime).toFixed(2)} ms`
      });
    } catch (error) {
      const endTime = performance.now();
      setApiResponse({
        error: error.message,
        time: `${(endTime - startTime).toFixed(2)} ms`
      });
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
