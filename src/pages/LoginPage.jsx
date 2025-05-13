import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignupForm";
import ForgotPassword from "../components/ForgotPassword"


const LoginPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/signup" element={<SignUpForm />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default LoginPage;
