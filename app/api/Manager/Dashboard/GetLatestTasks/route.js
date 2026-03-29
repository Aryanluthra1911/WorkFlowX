import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
    try{
        const { searchParams } = new URL(req.url);
        const managedById = searchParams.get('managedById');
        const tasks = await prisma.task.findMany({
            where:{
                project: {
                    projectManagerId: Number(managedById)
                }
            },
            orderBy:{
                createdAt:"desc",
            },
            take:2,
        })
        return NextResponse.json({
            success: true,
            data: tasks
        });
    }catch(err){
        return NextResponse.json({message:"api error",success:false,error:err})
    }
}