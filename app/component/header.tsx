import { Button } from "@/components/ui/button";
import { Toggle } from "@radix-ui/react-toggle";
import Link from "next/link";
import { TiThMenuOutline } from "react-icons/ti";

export default function Header() {
  return (
    <div className=" flex justify-between items-center p-3 bg-amber-600">
      <div className="flex justify-between md:flex">
        <div className="flex items-center relative">
          <h1 className="text-2xl font-extrabold">E-Collection</h1>
        </div>
      </div>
      <div>
        <ul className="hidden md:flex">
          <Link href={"/event-dashboard"} className="p-2 text-white font-bold">
            Event Dashboard
          </Link>
          <Link href={"/home"} className="p-2 text-white font-bold">
            Home
          </Link>
          <Link href={"/fund-collection"} className="p-2 text-white font-bold">
            <Toggle>Fund Collection</Toggle>
          </Link>
          <Link href={"/task-management"} className="p-2 text-white font-bold">
            Task Management
          </Link>
        </ul>
      </div>
      <button className="md:hidden mr-3">
        <TiThMenuOutline />
      </button>
      <div className=" hidden md:flex">
        <Button className=" bg-green-600">
          <Link href={"/controlEvent"} className="p-2 text-white font-bold">
            Control Event
          </Link>
        </Button>
      </div>
      <div className="hidden md:flex">
        <Button>login</Button>
        
      </div>
    </div>
  );
}
