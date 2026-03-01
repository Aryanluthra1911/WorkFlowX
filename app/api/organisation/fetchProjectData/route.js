import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const projectId = Number(searchParams.get('projectId'))
        const project = await prisma.project.findUnique({
            where:{id:projectId},
            include:{
                task:true
            }
        }) 
        return NextResponse.json({success:true,data:project})
    } catch (error) {
        throw error
    }
}