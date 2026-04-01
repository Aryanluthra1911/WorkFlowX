import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const memberId = Number(searchParams.get("memberId"));
        const projects = await prisma.project.findMany({
            where: {
                task: {
                    some: {
                        assignedToId: memberId,
                    },
                },
            },
            select: {
                title: true,
                description: true,
                status: true,
            },
        });
        return NextResponse.json({
            success: true,
            message: "projects fetched",
            projects,
        });
    } catch (error) {
        return NextResponse.json({ success: false, message: "API error" });
    }
}
