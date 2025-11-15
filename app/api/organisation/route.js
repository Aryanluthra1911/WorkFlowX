import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const organisations = await prisma.organisation.findMany()
        return NextResponse.json(organisations);
    } catch (error) {
        console.error("Error fetching organisations:", error);
        return NextResponse.json(
            { error: "Failed to fetch organisations" },
            { status: 500 }
        );
    }
}
