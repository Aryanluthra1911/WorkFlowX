import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
    try{
        const { searchParams } = new URL(req.url);
        const email = searchParams.get('email');
        const user = await prisma.users.findUnique({
            where:{
                email:email
            }
        })
        return NextResponse.json({success:true,status:100,message:"data fetched",data:user})
    }catch(err){
        throw err
        return NextResponse.json({success:false,status:400,message:"api error"})
    }
    
}