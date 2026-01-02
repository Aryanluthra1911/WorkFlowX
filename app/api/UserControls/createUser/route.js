import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";


export async function POST(req) {
    try{
        const body =  await req.json();
        const {name,email,cname,role,password,phoneno,years_of_experience,joining_date} = body
        const Emailexists = await prisma.users.findUnique({ where: { email } });
        if (Emailexists) {
            return NextResponse.json({success:false, message: "Email already exists" }, { status: 409 });
        }
        const hashedPass = await bcrypt.hash(password,10);
        await prisma.users.create({
            data:{
                name,email,role,password:hashedPass,phone:phoneno,joiningDate:joining_date,yearsOfExperience:years_of_experience,c_name:cname
            }
        })
        return NextResponse.json({success:true, message: "User Created"}, { status: 201 });
    }catch (error) {
        return NextResponse.json(
            { success: false, message: "Server Error" },
            { status: 500 }
        );
    }
} 