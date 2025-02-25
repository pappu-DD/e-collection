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
  const router = useRouter;

  const handleSumbit = async () => {
    router.back();
  };

  const [showDialog, setShowDialog] = useState(false);
  

  const handleChange = (event) => {
    if (event.target.value === "other") {
      setShowDialog(true);
    }
  };

  return (
    <div>
      <div className="border-2 border-red-600 p-2 mx-4 my-2 flex justify-center bg-orange-200 rounded-lg  shadow-inner">
        <h1 className="text-2xl font-bold text-blue-700">Adding Members</h1>
      </div>
      <div className="flex justify-center m-2 border-2 ">
        <form action="sumbit" onSubmit={handleSumbit}>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="name" />

            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />

            <Label htmlFor="id">ID</Label>
            <Input id="id" type="text" placeholder="id" />

            <Label htmlFor="post">POST</Label>
            <select name="post" id="post" onChange={handleChange}>
              <option value="headCoordinator">Event Coordinator</option>
              <option value="viceCoordinator">Vice Event Coordinator</option>
              <option value="disciplineHead">Discipline Head</option>
              <option value="mediaHead">Photography & Media Head</option>
              <option value="Volunteer">Volunteer</option>
              <option value="other">other</option>
            </select>
            {showDialog && (
              <dialog open>
                <Dialog open={showDialog} onOpenChange={setShowDialog}>
                  <DialogContent className="">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Post name
                        </Label>
                        <Input
                          id="name"
                          defaultValue="Pedro Duarte"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <br />
              </dialog>
            )}
          </div>
          <button type="sumbit">Sumbit</button>
        </form>
      </div>
      <div></div>
    </div>
  );
}
