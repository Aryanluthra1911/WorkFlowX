import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
    try{
        const body =  await req.json();
        const {title,companyName,description,assignedToId,assignedTo,dueDate,projectId} = body
        await prisma.task.create({
            data:{
                title,
                companyName,
                description,
                assignedTo,
                assignedToId,
                dueDate,
                projectId
            }
        })
        return NextResponse.json({success:true,message:"Task Created"})
    }catch(err){
        console.error("ADD PROJECT ERROR 👉", err);
        return NextResponse.json({message:"api error",success:false,message:"API falied"})
    }
}