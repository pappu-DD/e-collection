import { LocateFixedIcon, LocateIcon } from "lucide-react";
import React from "react";
import { TiLocation, TiLocationArrow } from "react-icons/ti";

export default function LocationTrack() {
  return (
    <div className="pt-2 ">
      <div className="flex justify-center flex-col items-center border- border-blue-500 m-3 bg-green-300">
        <div className="flex flex-row items-center">
          <h1 className="text-2xl font-extrabold p-2">Location Tracking System</h1>
          <TiLocation className="text-2xl" />
        </div>
        <p className="p-1 text-center">
          We offter to track the members location within a specific area range
        </p>
        <div className="p-4 m-5">
          <img src="location.png" alt="image" className="  rounded-md shadow-xl shadow-amber-500"/>
        </div>
      </div>
    </div>
  );
}
