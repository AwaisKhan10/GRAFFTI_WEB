//src/pages/PaymentPage.jsx
import React from "react";
import Payment from "../components/payment/Payment";
import YourChoice from "../components/payment/YourChoice";
import History from "../components/payment/History";

const PaymentPage = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto px-4">
                <Payment />
                <YourChoice />
                <History />
            </div>
        </div>
    );
};

export default PaymentPage;