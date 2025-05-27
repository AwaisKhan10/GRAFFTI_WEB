import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";
import SignUpForm from "../components/login/SignUpForm";     // ✅ Make sure this file exists
import ForgotPassword from "../components/login/ForgotPassword"; // ✅ Make sure this file exists
import Home from "./Home2";
import Home2 from "./Home2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
