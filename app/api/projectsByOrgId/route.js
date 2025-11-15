import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
    try {
        const url = new URL(req.url);
        const orgid = parseInt(url.searchParams.get("orgid"));
        if (!orgid) {
            return NextResponse.json({ error: "orgid is required" }, { status: 400 });
        }
        const projects = await prisma.organisation.findUnique({
            where: { id: orgid }
        });
        return NextResponse.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        return NextResponse.json(
            { error: "Failed to fetch projects" },
            { status: 500 }
        );
    }
}
