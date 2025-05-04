import { db } from "@/lib/db";
import { events } from "@/configs/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";

// export async function PUT(
//   request: Request,
//   context: { params: { id: string } }
// ) {
//   try {
//     const { userId } = await auth();
//     if (!userId) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const { id } = context.params;
//     const body = await request.json();

//     const existingEvent = (
//       await db.select().from(events).where(eq(events.id, Number(id)))
//     )[0];

//     if (!existingEvent) {
//       return NextResponse.json({ error: "Event not found" }, { status: 404 });
//     }

//     if (existingEvent.clerkId !== userId) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//     }

//     const updatedEvent = await db
//       .update(events)
//       .set({
//         title: body.title,
//         description: body.description,
//         date: body.date,
//         time: body.time,
//         location: body.location,
//         ticketPrice: body.ticketPrice,
//         imageUrls: body.imageUrls,
//       })
//       .where(eq(events.id, Number(id)))
//       .returning();

//     return NextResponse.json({ success: true, event: updatedEvent[0] });
//   } catch (error) {
//     console.error("Error updating event:", error);
//     return NextResponse.json(
//       { error: "Failed to update event" },
//       { status: 500 }
//     );
//   }
// }

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = context.params;

    const existingEvent = (
      await db.select().from(events).where(eq(events.id, Number(id)))
    )[0];

    if (!existingEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    if (existingEvent.clerkId !== userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await db.delete(events).where(eq(events.id, Number(id)));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting event:", error);
    return NextResponse.json(
      { error: "Failed to delete event" },
      { status: 500 }
    );
  }
}
