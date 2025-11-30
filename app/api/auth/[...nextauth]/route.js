import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from 'bcrypt'

export const authOptions= {
    secret: process.env.NEXTAUTH_SECRET,
    session:{
        strategy:'jwt'
    },
    providers:[
        CredentialsProvider({
            name : "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials.password){
                    throw new Error('Email and password are required')
                }
                const user = await prisma.userData.findUnique({
                    where: { email: credentials.email },
                })
                if(!user){
                    throw new Error('user not found')
                }
                const isValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                );
                if (!isValid) {
                    throw new Error("Invalid password");
                }
                return {
                    id: String(user.id),
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    c_name: user.c_name,
                };
            }
        })
    ],
    pages:{
        signIn:"/signin"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.c_name = user.c_name;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id;
                session.user.role = token.role;
                session.user.c_name = token.c_name;
            }
            return session;
        },
    },
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };