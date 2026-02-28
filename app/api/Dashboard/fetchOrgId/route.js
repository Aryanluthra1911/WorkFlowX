import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
    try {
        const body = await req.json();
        const { org_name } = body
        console.log(org_name);
        const organisation = await prisma.organisation.upsert({
            where:{companyName:org_name},
            update:{},
            create:{
                companyName:org_name
            }
        })
        return NextResponse.json({success:true,orgId:organisation.id})
    } catch (error) {
        throw error
    }
}