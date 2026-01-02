"use client";
import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
    IconArrowLeft,
    IconSettings,
    IconHelpCircle
} from "@tabler/icons-react";
import { LuActivity } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { MdSpaceDashboard,MdOutlineNotificationsActive } from "react-icons/md";
import { PiChatsCircleFill } from "react-icons/pi";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { FaUserPlus } from "react-icons/fa";

export function SidebarBlock() {
    const {data:session} = useSession();
    const [role,setrole] = useState();
    const router = useRouter()
    
    const admin_manager_links = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: (
                <MdSpaceDashboard  className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        {
            label: "Organisation",
            href: "/organisation",
            icon: (
                <LuUsers className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />          
            ),
        },
        {
            label: "Chats",
            href: "/chats",
            icon: (
                <PiChatsCircleFill className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />          
            ),
        },
        {
            label: "Notification",
            href: "/notification",
            icon: (
                <MdOutlineNotificationsActive className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />         
            ),
        },
        {
            label: "Profile",
            href: "/profile",
            icon: (
                <LuUser className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        {
            label: "Settings",
            href: "/settings",
            icon: (
                <IconSettings className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        {
            label: "User Activity",
            href: "/activity",
            icon: (
                <LuActivity className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        {
            label: "Add User",
            href: "/addUser",
            icon: (
                <FaUserPlus className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },

        {
            label: "Get Help",
            href: "/gethelp",
            icon: (
                <IconHelpCircle className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        
        {
            label: "Logout",
            href: "/signin",
            icon: (
                <IconArrowLeft className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
    ]
    const member_links = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: (
                <MdSpaceDashboard  className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        {
            label: "Organisation",
            href: "/organisation",
            icon: (
                <LuUsers className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />          
            ),
        },
        {
            label: "Chats",
            href: "/chats",
            icon: (
                <PiChatsCircleFill className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />          
            ),
        },
        {
            label: "Notification",
            href: "/notification",
            icon: (
                <MdOutlineNotificationsActive className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />         
            ),
        },
        {
            label: "Profile",
            href: "/profile",
            icon: (
                <LuUser className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        {
            label: "Settings",
            href: "/settings",
            icon: (
                <IconSettings className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        {
            label: "Get Help",
            href: "/gethelp",
            icon: (
                <IconHelpCircle className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
        {
            label: "Logout",
            href: "/signin",
            icon: (
                <IconArrowLeft className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />
            ),
        },
    ];
    useEffect(()=>{
        if(session){
            setrole(session.user.role)
        }
    },[session])
    const links = role==='Member' ? member_links : admin_manager_links
    const [open, setOpen] = useState(false);
    return (
        <div
            className={cn(
                " flex  max-w-7xl flex-1 flex-col overflow-hidden  md:flex-row dark:border-neutral-700 dark:bg-neutral-800 h-full w-full"
            )}
        >
            <Sidebar open={open} setOpen={setOpen} animate={false}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                        <>
                            <Logo/>
                        </>
                        <div className="mt-8 flex flex-col gap-3">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} onClick={(e)=>{
                                    link.label=== 'Logout' ? signOut({callbackUrl:'/signin'}): router.push(link.href)
                                }} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink 
                            onClick={()=>{
                                router.push('/profile')
                            }}
                            link={{
                                label: "Aryan Luthra",
                                icon: (
                                    <img
                                        src="https://assets.aceternity.com/manu.png"
                                        className="h-7 w-7 shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
            
        </div>
    );
}
export const Logo = () => {
    const router = useRouter()
    return (
        <div
            onClick={()=>{
                router.push('/dashboard')
            }}
            className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black justify-center"
        >
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium whitespace-pre text-white dark:text-[#052079] text-2xl"
            >
                WorkXflow
            </motion.span>
        </div>
    );
};
