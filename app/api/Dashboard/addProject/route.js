import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
    try{
        const body = await req.json();
        const {title,organisation,deadline,projectManager,projectManagerId,description} = body
        await prisma.project.create({
            data:{
                title,
                description,
                organisation,
                dueDate:deadline,
                projectManager,
                projectManagerId
            }
        })
        return NextResponse.json({success:true,message:'project created'})
    }catch{
        return NextResponse.json({success:false,message:"API falied"})
    }
}