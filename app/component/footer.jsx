"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

export default function Footer() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form data", formData);

    // send data
    try {
      const response = await fetch("/api/submitMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Message submitted successfully!");
        setFormData({});
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Failed to submit message:", error);
      alert("Failed to submit the message. Please try again later.");
    }
  };

  // Return the JSX outside of handleSubmit
  return (
    <div className="bg-yellow-200 m-3 mb-0">
      <div className="md:flex justify-between m-3 ">
        <div className="p-4 m-1 flex flex-col justify-center items-center">
          <img
            src="logo.jpg"
            width={150}
            alt="logo"
            className="rounded-full"
          />
          <h1 className="font-extrabold text-2xl">EVENTIFY</h1>
          <h1>Social links</h1>
          <div className="flex justify-center gap-2">
            <TiSocialInstagramCircular className="text-4xl" />
            <TiSocialFacebookCircular className="text-4xl" />
            <TiSocialLinkedinCircular className="text-4xl" />
            <TiSocialGithubCircular className="text-4xl" />
          </div>
        </div>
        <div className="p-4 flex flex-col items-center md:items-start">
          <h1 className="font-semibold">Support</h1>
          <ul className="flex flex-col items-center md:items-start">
            <li className="hover:text-green-600">
              <a href="#">Help Center</a>
            </li>
            <li className="hover:text-green-600">
              <a href="#">Contact Us</a>
            </li>
            <li className="hover:text-green-600">
              <a href="#">Documentation</a>
            </li>
            <li className="hover:text-green-600">
              <a href="#">Privacy & Policy</a>
            </li>
          </ul>
        </div>
        <div className="p-4 m-1 flex flex-col items-center md:items-start">
          <h1 className="font-semibold">Company</h1>
          <ul className="flex flex-col items-center md:items-start">
            <li className="hover:text-green-600">
              <a href="#">About</a>
            </li>
            <li className="hover:text-green-600">
              <a href="#">Careers</a>
            </li>
            <li className="hover:text-green-600">
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>
        <div className="p-4 m-1 flex flex-col items-center md:items-start">
          <h1 className="font-semibold">Contact</h1>
          <form onSubmit={handleSubmit}>
            <Input
              className="m-1 bg-slate-200"
              name="email"
              type="email"
              required
              placeholder="Email *"
              onChange={(e) =>
                handleInputChange(e.target.name, e.target.value)
              }
            />
            <textarea
              className="m-1 w-full h-32 p-4 rounded-lg border border-gray-300"
              required
              name="message"
              type="text"
              placeholder="Message"
              onChange={(e) =>
                handleInputChange(e.target.name, e.target.value)
              }
            />
            <Button>Submit</Button>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center bg-slate-950">
        <h1 className="p-4 text-white">
          © 2025 Eventify. All Rights Reserved.
        </h1>
      </div>
    </div>
  );
}
