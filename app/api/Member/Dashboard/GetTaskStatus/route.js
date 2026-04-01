import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const memberId = Number(searchParams.get('memberId'));
        const statusCount = await prisma.task.groupBy({
            by:["status"],
            where:{
                assignedToId:memberId
            },
            _count:{
                status:true
            }

        }) 
        return NextResponse.json({success:true,message:"task fetched",statusCount})
    } catch (error) {
        console.log(error);
        return NextResponse.json({success:false,message:"API error"})
    }
}