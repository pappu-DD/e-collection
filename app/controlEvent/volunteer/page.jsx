import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Volunteer() {
  return (
    <div className="">
      <div className="flex justify-between  bg-slate-400 items-center p-1 rounded-md">
        <h1 className="text-xl font-semibold">Names of members</h1>
        
        <Link href={'/controlEvent/volunteer/add-member'}>
          <Button className="bg-cyan-500">+ Add Members</Button>
        </Link>
       
      </div>

      <div className="m-4">
        <div className="border-2 border-blue-700 md:m-4 m-1 flex items-center gap-4 rounded-xl bg-green-100">
          <div className="m-2 rounded-full border-4 border-green-500">
            <img
              src="member-img.png"
              width={80}
              className="rounded-full p-1"
              alt="member img"
            />
          </div>
          <div>
            <h1 className="font-semibold text-lg">Salman khan</h1>
            <p>POST : HOD</p>
            <p>
              ststus :{" "}
              <span className="text-green-800 font-semibold">Online</span>
            </p>
          </div>

          <Button variant="destructive">
            Remove
            <MdDeleteForever />
          </Button>
        </div>
        <div className="border-2 border-blue-700 md:m-4 m-1 flex items-center gap-4 rounded-xl bg-green-100">
          <div className="m-2 rounded-full border-4 border-green-500">
            <img
              src="member-img.png"
              width={80}
              className="rounded-full p-1"
              alt="member img"
            />
          </div>
          <div>
            <h1 className="font-semibold text-lg">Salman khan</h1>
            <p>POST : HOD</p>
            <p>
              ststus :{" "}
              <span className="text-green-800 font-semibold">Online</span>
            </p>
          </div>

          <Button variant="destructive">
            Remove
            <MdDeleteForever />
          </Button>
        </div>
        <div className="border-2 border-blue-700 md:m-4  m-1 flex items-center gap-4 rounded-xl bg-green-100">
          <div className="m-2 rounded-full border-4 border-green-500">
            <img
              src="member-img.png"
              width={80}
              className="rounded-full p-1"
              alt="member img"
            />
          </div>
          <div>
            <h1 className="font-semibold text-lg">Salman khan</h1>
            <p>POST : HOD</p>
            <p>
              ststus :{" "}
              <span className="text-green-800 font-semibold">Online</span>
            </p>
          </div>

          <Button variant="destructive">
            Remove
            <MdDeleteForever />
          </Button>
        </div>


        <div className="border-2 border-blue-700 md:m-4 m-1 flex items-center gap-4 rounded-xl bg-red-300">
          <div className="m-2 rounded-full border-4 border-gray-500">
            <img
              src="member-img.png"
              width={80}
              className="rounded-full p-1"
              alt="member img"
            />
          </div>
          <div>
            <h1 className="font-semibold text-lg">Salman khan</h1>
            <p>POST : HOD</p>
            <p>
              ststus :{" "}
              <span className="text-gray-500 font-semibold">Offline</span>
            </p>
          </div>

          <Button variant="destructive">
            Remove
            <MdDeleteForever />
          </Button>
        </div>
      </div>
    </div>
  );
}
