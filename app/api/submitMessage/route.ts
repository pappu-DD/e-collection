// app/api/submitMessage/route.ts
import { db } from "@/configs/db";
import { userMessage } from "@/configs/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";  // Import for future queries

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    // Insert data using Drizzle
    const result = await db
      .insert(userMessage)
      .values({ email, message })
      .returning();  // Get inserted record

    return NextResponse.json(
      { 
        success: true,
        data: result[0]  // Return the inserted record
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to submit message" },
      { status: 500 }
    );
  }
}