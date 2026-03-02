import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req) {
    try {
        const { taskId, status } = await req.json();
        const updatedTask = await prisma.task.update({
            where: { id: taskId },
            data: { status }
        });
        return NextResponse.json({ success: true, data: updatedTask });
    }catch (error) {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}