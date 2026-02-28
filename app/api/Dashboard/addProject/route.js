import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
    try{
        const body = await req.json();
        const {title,deadline,projectManager,projectManagerId,description,c_name,orgId} = body
        await prisma.project.create({
            data:{
                title,
                description,
                dueDate:deadline,
                projectManager,
                projectManagerId,
                companyName:c_name,
                orgId :orgId
            }
        })
        return NextResponse.json({success:true,message:'project created'})
    }catch(err){
        console.error("ADD PROJECT ERROR 👉", err);
        return NextResponse.json({message:"api error",success:false,message:"API falied"})
    }
}