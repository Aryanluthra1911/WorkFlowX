import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const managerId = searchParams.get('managerId')
        const organisations = await prisma.organisation.findMany({
            where:{
                projects: {
                    some: {
                        projectManagerId: Number(managerId)
                    }
                }
            }
        })
        return NextResponse.json(organisations);
    } catch (error) {
        console.error("Error fetching organisations:", error);
        return NextResponse.json(
            { error: "Failed to fetch organisations" },
            { status: 500 }
        );
    }
}
