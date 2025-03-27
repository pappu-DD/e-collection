import { db } from "@/configs/db";
import { member } from "@/configs/schema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, id, name, post } = await req.json();
    
    if (!id || !email || !name || !post) {
      return NextResponse.json(
        { error: "id , email , name , post are required !" },
        { status: 400 }
      );
    }

    //insert data to database
    await db.insert(member).values({ id, name, email, post });
    return NextResponse.json({ message: "api- member is added sucessfully " });
  } catch (error) {
    console.log("Error insertion data :", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
