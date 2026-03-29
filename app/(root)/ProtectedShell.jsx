"use client";
import { SidebarBlock } from "@/components/SidebarBlock";
import usePageStore from "@/store/pages/usePageStore";
import "react-toastify/dist/ReactToastify.css";

export default function ProtectedShell({ children }) {
    const title = usePageStore((state) => state.title)
    const setTitle = usePageStore((state) => state.setTitle)
    return (
        <div className="h-screen w-screen flex">
            <div className="w-auto h-full shadow-md">
                <SidebarBlock />
            </div>
            <div className="w-full h-full">
                <div className="w-full h-[10%] border-b-2 flex items-center pl-3 text-3xl font-bold shadow-md">
                    {title}
                </div>

                {children}
            </div>
        </div>
    );
}
