
"use client";

import React, { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => console.log("Razorpay script loaded"); 
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script when component unmounts
    };
  }, []);

  const plans = [
    {
      name: "FREE",
      price: 0,
      duration: "/ year",
      features: [
        "Basic Event Management",
        "Limited Ticket Generation",
        "Basic Analytics",
        "Email Support",
      ],
      buttonText: "Try Free",
      highlight: false,
    },
    {
      name: "PRO",
      price: 199,
      duration: "/ month",
      features: [
        "Advanced Event Management",
        "Unlimited Ticket Generation",
        "Detailed Analytics",
        "Priority Email Support",
        "Volunteer Management",
        "Custom Event Branding",
      ],
      buttonText: "Buy Now",
      highlight: true,
    },
    {
      name: "PREMIUM",
      price: 999,
      duration: "/ year",
      features: [
        "All PRO Features",
        "Custom Event Landing Page",
        "Dedicated Account Manager",
        "24/7 Support",
        "Exclusive Event Marketing Tools",
      ],
      buttonText: "Buy Now",
      highlight: false,
    },
  ];

  const handlePayment = async (amount) => {
    if (amount === 0) {
      alert("You have subscribed to the FREE plan!");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: amount * 100, // Convert to paisa
      currency: "INR",
      name: "Eventify",
      description: "Event Management Subscription",
      handler: function (response) {
        alert("Payment Successful! Transaction ID: " + response.razorpay_payment_id);
        window.location.href = "https://eventify-nine-ecru.vercel.app/"; // Redirect after payment
      },
      prefill: {
        name: "Your User",
        email: "user@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="min-h-screen bg-sky-200 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Choose Your Plan</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 w-80 rounded-xl shadow-lg bg-white text-center border-2 transition transform hover:scale-105 ${
              plan.highlight ? "border-yellow-500" : "border-gray-200"
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-700">{plan.name}</h2>
            <p className="text-3xl font-bold text-gray-900">₹{plan.price}</p>
            <p className="text-gray-600">{plan.duration}</p>
            <ul className="mt-4 text-gray-700 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center justify-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handlePayment(plan.price)}
              className={`mt-6 px-5 py-2 rounded-lg text-white w-full ${
                plan.highlight ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
