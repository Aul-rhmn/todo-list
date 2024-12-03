import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Checklist from "./components/Checklist";
import ChecklistDetails from "./components/ChecklistDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/checklist/create" element={<Checklist />} />
        <Route path="/checklist/:checklistId" element={<ChecklistDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
