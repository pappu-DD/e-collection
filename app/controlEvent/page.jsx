import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Volunteer from "./volunteer/page";


export default function controlEvent() {
  return (
    <div className="m-3 px-3">
      <h1 className="text-xl font-bold m-2 text-red-700">
        Jharkhand Rai University
      </h1>
      <Tabs defaultValue="volunteer" className="">
        <TabsList>
          <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
          <TabsTrigger value="control">Control</TabsTrigger>
        </TabsList>
        <TabsContent value="volunteer">
          <Volunteer/>
        </TabsContent>
        <TabsContent value="admin">
          <h1 className="text-2xl font-extrabold"> Admin</h1>
        </TabsContent>
        <TabsContent value="control">
          <h1 className="text-2xl font-extrabold"> Control</h1>
        </TabsContent>
      </Tabs>
    </div>

  );
}
