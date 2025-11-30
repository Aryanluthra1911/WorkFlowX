"use client";

import { SidebarBlock } from "@/components/SidebarBlock";
import { usePathname } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function ProtectedShell({ children }) {
    const pathname = usePathname();

    let currentPath = capitalize(pathname.split("/")[1]) || "Home";
    if (currentPath === "Dashboard") currentPath = "Dashboard Overview";

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
