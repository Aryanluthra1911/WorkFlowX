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

    
    return (
        <div className="h-screen w-screen flex">
            <div className="w-auto h-full shadow-md">
                <SidebarBlock />
            </div>

            <div className="w-full h-full">
                <div className="w-full h-[10%] border-b-2 flex items-center pl-3 text-3xl font-bold shadow-md">
                    
                </div>

                {children}
            </div>
        </div>
    );
}
