// pages/api/submitMessage.ts
import { db } from "@/configs/db.js";  // Import the db connection
import { userMessage } from "@/configs/schema.js";  // Import the schema
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { email, message } = req.body;  // Extract form data from the request body

      if (!email || !message) {
        return res.status(400).json({ error: "Email and message are required." });
      }

      // Insert the form data into the userMessage table
      await db.insert(userMessage).values({ email, message });

      res.status(200).json({ message: "Message submitted successfully!" });
    } catch (error) {
      console.error("Error inserting data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}