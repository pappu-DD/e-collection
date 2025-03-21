import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

export default function Footer() {
  return (
    <div className="bg-yellow-200 m-3 mb-0">
      <div className="md:flex justify-between m-3 ">
        <div className="p-4  m-1 flex flex-col justify-center items-center">
          <img
            src="logo.jpg"
            width={150}
            alt="logo"
            className="rounded-full"
          />
          <h1 className="font-extrabold text-2xl">EVENTIFY</h1>
          <h1>Social links</h1>
          <div className="flex justify-center gap-2">
            <TiSocialInstagramCircular className="text-4xl " />
            <TiSocialFacebookCircular className="text-4xl " />
            <TiSocialLinkedinCircular className="text-4xl " />
            <TiSocialGithubCircular className="text-4xl " />
          </div>
        </div>
        <div className="p-4 flex flex-col items-center md:items-start">
          <h1 className="font-semibold">Support</h1>
          <ul className="flex flex-col items-center md:items-start">
            <li className="hover:text-green-600 ">
              <a href="#">Help Center</a>
            </li>
            <li className="hover:text-green-600 ">
              <a href="#">Contact Us</a>
            </li>
            <li className="hover:text-green-600 ">
              <a href="#">Documentation</a>
            </li>
            <li className="hover:text-green-600 ">
              <a href="#">Privacy & Policy</a>
            </li>
          </ul>
        </div>
        <div className="p-4 m-1  flex flex-col items-center md:items-start">
          <h1 className="font-semibold">Company</h1>
          <ul className="flex flex-col items-center md:items-start">
            <li className="hover:text-green-600 ">
              <a href="#">About</a>
            </li>
            <li className="hover:text-green-600 ">
              <a href="#">Careers</a>
            </li>
            <li className="hover:text-green-600 ">
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>
        <div className=" p-4 m-1 flex flex-col items-center md:items-start">
          <h1 className="font-semibold">Contact</h1>
          <form action="massage">
            <Input
              className="m-1 bg-slate-200"
              type="email"
              required
              placeholder="Email *"
            />
            <textarea
              className="m-1 w-full h-32 p-4 rounded-lg border border-gray-300"
              required
              placeholder="Message"
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
