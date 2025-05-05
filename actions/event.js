"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { eventSchema } from "@/app/lib/validators";
export async function createEvent( data ) {
     const { userId } = auth();
     if (!userId) {
          throw new Error("Not authenticated");
     }

     const validatedData = eventSchema.parse(data);

     const user = await db.user.findUnique({
             where: { clerkId: userId },
    })
    if (!user) {
        throw new Error("User not found");
    }
    const event = await db.event.create({
        data: {
            ...validatedData,
            userId: user.id,
        },
    });
    return event;
}

export async function getUserEvents() {
    const { userId } = auth();
    if (!userId) {
        throw new Error("Not authenticated");
    }

    const user = await db.user.findUnique({
        where: { clerkId: userId },
    });
    if (!user) {
        throw new Error("User not found");
    }
    const events = await db.event.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
        include: {
            _count: { 
                select: { bookings: true } },
        },
    });
    return { events, username: user.username };
}