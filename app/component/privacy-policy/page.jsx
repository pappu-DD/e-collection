"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 flex flex-col items-center py-10 px-6">
      <div className="max-w-4xl bg-sky-200 p-10 rounded-2xl shadow-2xl border border-gray-300">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">Privacy Policy</h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
        </p>
        
        <div className="space-y-8">
          <section>
            <h3 className="text-3xl font-bold text-gray-800">🔍 Information We Collect</h3>
            <p className="text-gray-700 mt-2 text-lg">
              We collect personal information like name, email, phone number, and
              payment details when you register or make a purchase.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-gray-800">💡 How We Use Your Information</h3>
            <ul className="list-disc pl-6 text-gray-700 mt-2 text-lg space-y-2">
              <li>To process payments and manage your account.</li>
              <li>To send you updates, offers, and support.</li>
              <li>To improve our services and provide a better experience.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-gray-800">🔒 Data Protection</h3>
            <p className="text-gray-700 mt-2 text-lg">
              We implement security measures to protect your data. Your payment
              transactions are encrypted and secured by trusted payment gateways.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-gray-800">🔗 Third-Party Services</h3>
            <p className="text-gray-700 mt-2 text-lg">
              We may use third-party services like Razorpay for payments. Their privacy
              policies apply to their respective services.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-gray-800">🔄 Changes to This Policy</h3>
            <p className="text-gray-700 mt-2 text-lg">
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-gray-800">📩 Contact Us</h3>
            <p className="text-gray-700 mt-2 text-lg">
              If you have any questions, please contact us at
              <span className="text-blue-600 font-semibold"> support@eventify.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
