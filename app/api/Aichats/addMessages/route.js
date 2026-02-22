import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
    try{
        const { conversationId,role,content } = await req.json()
        const conversation = await prisma.conversation.findUnique({
            where: { id: conversationId },
        });

        if(!conversation){
            return NextResponse.json({message:"Invalid conversation ID",success:false})
        }
        if(conversation.expiresAt < new Date()){
            return NextResponse.json({message:'Conversation Expired',success:false})
        }
        const message = await prisma.AiMessage.create({
            data:{
                conversationId,
                role,
                content,
            }
        });
        return NextResponse.json({message:'message added',success:true,data:message})
    }catch(err){
        return NextResponse.json({message:"api error",success:false,error:err})
    }
}