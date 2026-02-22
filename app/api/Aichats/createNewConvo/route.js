import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
    try{
        const { email } = await req.json();
        const conversation = await prisma.conversation.create({
            data:{
                email:email,
                expiresAt: new Date(Date.now() + 60 * 60 * 1000),
            }
        })
        return NextResponse.json({message:'created new convo id',success:true,conversationId:conversation.id})
    }catch(err){
        return NextResponse.json({message:"api error",success:false,error:err})
    }
}