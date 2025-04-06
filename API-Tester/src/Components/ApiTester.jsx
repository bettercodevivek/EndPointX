import { useState } from "react";
import ApiForm from "./ApiForm";
import ResponseViewer from "./ResponseViewer";
import React from "react";
function ApiTester() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-4 sm:p-6 md:p-10">
  <div className="max-w-4xl mx-auto space-y-8">
    <header className="text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
        🚀 Visual API Tester
      </h1>
      <p className="text-gray-500 text-sm sm:text-base">
        Test your APIs with ease — fast, smart, and beautiful.
      </p>
    </header>

    <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-200">
      <ApiForm onSendRequest={handleSendRequest} />
    </div>

    {apiResponse && (
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-200">
        <ResponseViewer response={apiResponse} />
      </div>
    )}
  </div>
</div>

  );
}

export default ApiTester;
