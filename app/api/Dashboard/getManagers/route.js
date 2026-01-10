import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
    try{
        const { searchParams } = new URL(req.url);
        const c_name = searchParams.get('c_name');
        const manager = await prisma.users.findMany({where: {c_name: c_name,role:'Manager'}});
        return NextResponse.json(manager)
    }catch{
        return NextResponse.json(
            { success: false, message: "Server Error" },
            { status: 500 }
        );
    }
}