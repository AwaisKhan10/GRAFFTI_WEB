//src/components/payment/Payment.jsx
import React from "react";

const Payment = () => {
    return (
        <div className="text-white py-12 relative overflow-hidden">
            <div className="relative pb-72">
                <div className="top-10 w-52 bg-[#08117E] text-white font-italic px-10 py-2 rounded-3xl text-sm font-bold">
                    <p>ONLINE GRAFFITI</p>
                </div>
                {/* Blue circle - top right */}
                <div className="absolute right-32 top-0 w-32 h-32 bg-gradient-to-br from-[#190061] to-[#0A1B30] rounded-full z-0"></div>
            </div>

            {/* Blue circle - middle */}
            <div className="relative flex items-center justify-center">
                {/* Blue circle - behind the text */}
                <div className="absolute  w-32 h-32 bg-gradient-to-br from-[#190061] to-[#0A1B30] rounded-full z-0"></div>

                {/* Text - stays in place */}
                <h1 className="start-1 w-full text-4xl md:text-6xl mb-10 z-10 relative">
                    "Make the payment!!"
                </h1>
            </div>

            {/* Blue circle - background left */}
            <div className="absolute  top-[30rem] w-32 h-32 bg-gradient-to-br from-[#190061] to-[#0A1B30] rounded-full z-0"></div>

            <div className="relative flex flex-col space-y-10 md:flex-row gap-6">


                {/* Payment Form */}
                <div className="flex-1 w-full md:w-[681px] px-4 md:px-10 rounded-lg relative z-10">
                    <p className="mb-4 font-thin">
                        To get your art, input your card details to make payment. <br />
                        You will be redirected to your bank's authorization page.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <img src="../icons/Paypal.png" alt="PayPal" className="w-20" />
                        <img src="../icons/Visa.png" alt="Visa" className="w-20" />
                        <img src="../icons/Mastercard.png" alt="MasterCard" className="w-20" />
                        <img src="../icons/Diners.png" alt="Amex" className="w-20" />
                        <img src="../icons/Amex.png" alt="Amex" className="w-20" />
                    </div>
                    <form className="space-y-4 mt-4">
                        <div>
                            <h1>Cardholder's Name</h1>
                            <input
                                type="text"
                                placeholder="Tom mcmeikan"
                                className="w-full max-w-md p-3 rounded-lg text-black placeholder-[#A175FF] placeholder:text-xl font-light"
                            />
                        </div>

                        <div>
                            <h1>Card Number</h1>
                            <input
                                type="text"
                                placeholder="9870 3456 7890 6473"
                                className="w-full max-w-md p-3 rounded-lg text-black placeholder-[#A175FF] placeholder:text-xl font-light"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex gap-16">
                                <div>
                                    <h1>Expiry</h1>
                                    <input
                                        type="text"
                                        placeholder="03 / 25"
                                        className="w-48 p-3 rounded-lg text-black placeholder-[#A175FF] placeholder:text-xl font-light"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h1>CVC</h1>
                                    <input
                                        type="text"
                                        placeholder="654"
                                        className="w-48 p-3 rounded-lg text-black placeholder-[#A175FF] placeholder:text-xl font-light"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Blue circle under CVC */}
                        <div className="absolute left-60 mt-2 w-32 h-32 bg-gradient-to-br from-[#190061] to-[#0A1B30] rounded-full z-0"></div>

                        <div>
                            <h1>Discount Code</h1>
                            <div className="relative w-full max-w-md">
                                <input
                                    type="text"
                                    placeholder="Discount Code"
                                    className="w-full p-3 pr-20 rounded-lg text-black placeholder-[#A175FF] placeholder:text-xl font-light"
                                />
                                <button
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#9563FF] px-3 py-1 rounded-md text-sm hover:underline font-semibold"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#9563FF] px-20 p-3 mt-2 rounded-lg text-white font-semibold"
                        >
                            Pay
                        </button>
                    </form>
                </div>

                {/* Payment Summary */}
                <div className="w-full md:w-96 p-6 relative z-10">
                    <p className="mb-2">You're paying,</p>
                    <h2 className="text-4xl px-4 font-bold mb-4">$1.00</h2>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-2">
                            <div className="flex flex-col">
                                <span className="font-bold">Design type</span>
                                <span className="font-thin text-sm">Art name</span>
                            </div>
                            <div>
                                <span>$0.00</span>
                            </div>
                        </div>
                        <div className="flex justify-between py-4">
                            <span className="font-bold">Quantity</span>
                            <span>+ 1 -</span>
                        </div>
                        <div className="flex justify-between py-4">
                            <span className="font-bold">Discounts & Offers</span>
                            <span>$0.00</span>
                        </div>
                        <hr />
                        <div className="flex justify-between py-4">
                            <span className="font-bold">Tax</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <span className="font-bold">Total</span>
                            <span>$0.00</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blue circles - near bottom */}
            <div className="absolute right-10 bottom-32 w-32 h-32 bg-gradient-to-br from-[#190061] to-[#0A1B30] rounded-full z-0"></div>
            <div className="absolute left-24 bottom-10 w-32 h-32 bg-gradient-to-br from-[#190061] to-[#0A1B30] rounded-full z-0"></div>
        </div>
    );
};

export default Payment;
