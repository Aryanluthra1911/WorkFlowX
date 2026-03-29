import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const managerId = searchParams.get('managerId');
        const tasks = await prisma.task.findMany({
            where: {
                project: {
                    projectManagerId: Number(managerId)
                }
            },
            select: {
                title: true,
                assignedTo: true,
                dueDate: true,
                status: true
            }
        })
        return NextResponse.json({sucess:true,message:"data fetched",tasks})
    } catch (error) {
        return NextResponse.json({sucess:false,message:"api error"})
    }
    
}