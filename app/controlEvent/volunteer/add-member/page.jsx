"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useRouter } from "next/navigation";

export default function AddMembers() {
  const router = useRouter(); // Fixed router issue

  // State to store form data
  const [formData, setFormData] = useState({});

  // Function to handle input changes
  const handleInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Logs all input data in console
    router.back(); // Navigates back
  };

  // State to manage dialog visibility
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div>
      {/* Title Section */}
      <div className="border-2 border-red-600 p-2 mx-4 my-2 flex justify-center bg-orange-200 rounded-lg shadow-inner">
        <h1 className="text-2xl font-bold text-blue-700">Adding Members</h1>
      </div>

      {/* Form Section */}
      <div className="flex justify-center m-2 border-2">
        <form onSubmit={handleSubmit}>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            {/* Name Input */}
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="Enter name"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />

            {/* Picture Input */}
            {/* <Label htmlFor="picture">Picture</Label>
            <Input
              id="picture"
              type="file"
              onChange={(e) => handleInputChange("picture", e.target.files[0])}
            /> */}

            {/* ID Input */}
            <Label htmlFor="id">ID</Label>
            <Input
              id="id"
              name="id"
              type="text"
              placeholder="Enter ID"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />

            {/* Post Selection */}
            <Label htmlFor="post">POST</Label>
            <select
              name="post"
              id="post"
              onChange={(e) => {
                handleInputChange("post", e.target.value);
                if (e.target.value === "other") {
                  setShowDialog(true);
                }
              }}
            >
              <option value="headCoordinator">Event Coordinator</option>
              <option value="viceCoordinator">Vice Event Coordinator</option>
              <option value="disciplineHead">Discipline Head</option>
              <option value="mediaHead">Photography & Media Head</option>
              <option value="volunteer">Volunteer</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Dialog for Custom Post */}
          {showDialog && (
            <Dialog open={showDialog} onOpenChange={setShowDialog}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Enter Custom Post Name</DialogTitle>
                  <DialogDescription>
                    Please enter a new post name and save.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="customPost" className="text-right">
                      Post Name
                    </Label>
                    <Input
                      id="customPost"
                      name="customPost"
                      placeholder="Enter post name"
                      className="col-span-3"
                      onChange={(e) =>
                        handleInputChange("post", e.target.value)
                      }
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={() => setShowDialog(false)}>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="border-2 rounded-sm p-2 bg-green-500 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
