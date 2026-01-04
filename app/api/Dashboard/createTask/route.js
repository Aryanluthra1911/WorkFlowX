import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
    try{
        const body =  await req.json();
        const {title,companyName,description,assignedToId,assignedTo,dueDate} = body
        await prisma.task.create({
            data:{
                title,
                companyName,
                description,
                assignedTo,
                assignedToId,
                dueDate
            }
        })
        return NextResponse.json({success:true,message:"Task Created"})
    }catch{
        return NextResponse.json(
            {success:false,message:"API failed"}
        )
    }
}