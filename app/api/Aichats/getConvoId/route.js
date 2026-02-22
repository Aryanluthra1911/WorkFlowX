import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
    try{
        const { searchParams } = new URL(req.url);
        const email = searchParams.get('email');
        if (!email) {
            return NextResponse.json({
                success: false,
                message: "Email is required",
                data: null,
            });
        }
        const convo = await prisma.conversation.findFirst({
            where:{
                email:email
            },
            select:{
                id:true,
                expiresAt:true
            }
        })
        if(convo.expiresAt < new Date()){
            return NextResponse.json({message:'Conversation Expired',success:false})
        }
        return NextResponse.json({message:"fetched convo id",success:true,data:convo})
    }catch(err){
        return NextResponse.json({message:"api error",success:false,error:err})
    }
}