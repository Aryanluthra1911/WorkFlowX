"use client";

import { SidebarBlock } from "@/components/SidebarBlock";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function ProtectedShell({ children }) {
    const {data:session,status} =  useSession()
    const pathname = usePathname();
    if (status === "loading") {
        return (
            <div className="h-screen w-screen flex items-center justify-center text-xl">
                Loading...
            </div>
        );
    }
    
    let currentPath = capitalize(pathname.split("/")[1]) || "Home";
    if (currentPath === "Dashboard"&&session.user.role === 'Member') currentPath = "Dashboard Overview";
    else if (currentPath === "Dashboard"&&session.user.role === 'Manager') currentPath = "Manager Overview";
    else if (currentPath === "Dashboard"&&session.user.role === 'Admin') currentPath = "Admin Dashboard";
    else if (currentPath === "AddUser") currentPath = "User Controls";
    return (
        <div className="h-screen w-screen flex">
            <div className="w-auto h-full shadow-md">
                <SidebarBlock />
            </div>

            <div className="w-full h-full">
                <div className="w-full h-[10%] border-b-2 flex items-center pl-3 text-3xl font-bold shadow-md">
                    {currentPath}
                </div>

                {children}
            </div>
        </div>
    );
}
