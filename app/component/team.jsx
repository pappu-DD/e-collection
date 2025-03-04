import React from "react";
import {
  TiContacts,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

export default function Team() {
  return (
    <div>
      <div className=" m-3 pb-3 bg-slate-500">
        <h1 className="text-center text-white  text-2xl font-extrabold m-10 border-b-2 p-5 border-orange-700">
          Team
        </h1>
        <div className="flex justify-center items-center flex-wrap">
          <div className="flex flex-col justify-center items-center rounded-lg py-8 px-16 md:p-10 m-2 bg-slate-700 shadow-xl">
            <img
              src="madhav.jpg"
              alt="image"
              width={200}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold p-2 text-green-600">
              Madhav Kumar
            </h1>
            <h1 className="text-white">Fullstack Developer</h1>
            <h2 className="text-white">(BC/22/012)</h2>
            <div className="flex flex-row gap-3 m-3">
              <TiSocialLinkedin className="text-2xl text-orange-600" />
              <TiSocialInstagram className="text-2xl text-orange-600" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center rounded-lg py-8 px-16 md:p-10 m-2 bg-slate-700 shadow-xl">
            <img
              src="pappu.jpg"
              alt="image"
              width={200}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold p-2 text-green-600">
              Pappu Kumar
            </h1>
            <h1 className="text-white">Fullstack Developer</h1>
            <h2 className="text-white">(BC/22/012)</h2>
            <div className="flex flex-row gap-3 m-3">
              <TiSocialLinkedin className="text-2xl text-orange-600" />
              <TiSocialInstagram className="text-2xl text-orange-600" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center rounded-lg py-8 px-16 md:p-10 m-2 bg-slate-700 shadow-xl">
            <img
              src="rajesh.jpg"
              alt="image"
              width={200}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold p-2 text-green-600">
              Rajesh Kumar
            </h1>
            <h1 className="text-white">Designer</h1>
            <h2 className="text-white">(BC/22/038)</h2>
            <div className="flex flex-row gap-3 m-3">
              <TiSocialLinkedin className="text-2xl text-orange-600" />
              <TiSocialInstagram className="text-2xl text-orange-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
