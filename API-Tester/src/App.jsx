import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApiTester from "./Components/ApiTester";
import LandingPage from "./Pages/LandingPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tester" element={<ApiTester />} />
      </Routes>
    </Router>
  );
}

export default App;
