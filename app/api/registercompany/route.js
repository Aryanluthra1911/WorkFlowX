import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name , c_name , email , password ,role } = body
        const Emailexists = await prisma.userData.findUnique({ where: { email } });
        const Companyexists = await prisma.userData.findFirst({
            where: { c_name }
        });
        if (Emailexists) {
            return NextResponse.json({success:false, message: "Email already exists" }, { status: 409 });
        }
        else if (Companyexists) {
            return NextResponse.json({success:false, message: "Company Name already exists" }, { status: 409 });
        }
        const hashedPass = await bcrypt.hash(password,10)
        await prisma.userData.create({
            data:{
                name,c_name,email,password:hashedPass,role
            }
        })
        return NextResponse.json({success:true, message: "Company Registered"}, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Server Error" },
            { status: 500 }
);
    }
}