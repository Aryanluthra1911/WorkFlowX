import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
    try {
        const body = await req.json();
        const { org_name , companyName } = body
        console.log(org_name,companyName);
        const organisation = await prisma.organisation.upsert({
            where:{organisationName:org_name},
            update:{},
            create:{
                organisationName:org_name,
                companyName:companyName,
            }
        })
        return NextResponse.json({success:true,orgId:organisation.id})
    } catch (error) {
        throw error
    }
}