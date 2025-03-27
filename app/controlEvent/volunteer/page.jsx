"use client";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Volunteer() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("/api/member");
        const data = await response.json();
        setMembers(data.members);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleRemove = async (id) => {
    try {
      console.log(`Removing member with ID: ${id}`);
      setMembers(members.filter((member) => member.id !== id));
    } catch (error) {
      console.error("Failed to remove member:", error);
    }
  };

  if (loading) {
    return <p className="text-center">Loading members...</p>;
  }

  return (
    <div>
      <div className="flex justify-between bg-slate-400 items-center p-1 rounded-md">
        <h1 className="text-xl font-semibold">Names of Members</h1>
        <Link href={"/controlEvent/volunteer/add-member"}>
          <Button className="bg-yellow-500">+ Add Members</Button>
        </Link>
      </div>

      <div className="m-4">
        {members.length === 0 ? (
          <p className="text-center">No members found. Add some members!</p>
        ) : (
          members.map((member) => (
            <div key={member.id}>
              <div className="border-2 border-blue-700 md:m-4 m-1 flex items-center justify-between gap-4 rounded-xl bg-green-100">
                <div className="flex items-center justify-between" >
                  <div className="m-2 rounded-full border-4 border-green-500">
                    <img
                      src="profile-image.png"
                      width={80}
                      className="rounded-full p-1"
                      alt="member img"
                    />
                  </div>
                  <div>
                    <h1 className="font-extrabold sm:text-lg text-orange-800">
                      {member.name}
                    </h1>
                    <p className="text-sm  font-bold border-b-2 border-gray-400">
                      POST :{" "}
                      <span className="text-blue-800">{member.post}</span>
                    </p>
                    <p className="text-sm  font-bold border-b-2 border-gray-400 ">
                      ID/ROLL :{" "}
                      <span className="text-blue-800">{member.id}</span>
                    </p>
                  </div>
                  {/* <p className="text-sm md:text-lg">
                  Status:{" "}
                  <span
                  className={`${
                    member.status === "Online" ? "text-green-800" : "text-red-300"
                    } font-semibold`}
                    >
                    {member.status}
                    </span>
                    </p> */}
                </div>
                <div>
                  <Button
                    variant="destructive"
                    className="p-1 md:p-2 m-3"
                    onClick={() => handleRemove(member.id)}
                  >
                    Remove <MdDeleteForever />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
