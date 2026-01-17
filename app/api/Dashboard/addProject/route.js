import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
    try{
        const body = await req.json();
        const {title,organisation,deadline,projectManager,projectManagerId,description,c_name} = body
        await prisma.project.create({
            data:{
                title,
                description,
                organisation,
                dueDate:deadline,
                projectManager,
                projectManagerId,
                companyName:c_name
            }
        })
        return NextResponse.json({success:true,message:'project created'})
    }catch(err){
        console.error("ADD PROJECT ERROR 👉", err);
        return NextResponse.json({message:"api error",success:false,message:"API falied"})
    }
}