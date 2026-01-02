import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request) {
    try{
        const { searchParams } = new URL(request.url);
        const cname = searchParams.get("cname");
        const users = await prisma.users.findMany({
            where:{c_name:cname,role: {in: ["Manager", "Member"]}}
        })
        console.log(users);
        return NextResponse.json(users)
    }catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
            { error: "Failed to fetch users" },
            { status: 500 }
        );
    }
}