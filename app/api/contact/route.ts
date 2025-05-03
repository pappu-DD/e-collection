import { NextResponse } from "next/server";
import { db } from "@/configs/db";
import { contact } from "@/configs/schema";

export async function POST(req: Request) {
    try {
      const body = await req.json();
      console.log("Received Data:", body);
  
      if (!body.subject || !body.email || !body.message) {
        console.log("Validation failed: Missing fields");
        return NextResponse.json({ message: "All fields are required." }, { status: 400 });
      }
  
      // Database Insert
      await db.insert(contact).values(body);
      return NextResponse.json({ message: "Message sent successfully!" }, { status: 201 });
  
    } catch (error) {
      console.error("Server Error:", error);
      return NextResponse.json({ message: "Internal server error." }, { status: 500 });
    }
  }
  