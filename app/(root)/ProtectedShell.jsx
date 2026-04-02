"use client";
import { SidebarBlock } from "@/components/SidebarBlock";
import usePageStore from "@/store/pages/usePageStore";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function ProtectedShell({ children }) {
    const title = usePageStore((state) => state.title);
    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname);
    const [history, setHistory] = useState([]);
    const [index, setIndex] = useState(-1);
    useEffect(() => {
        setHistory((prev) => {
            const currentIndex = index;
            if (prev[currentIndex] === pathname) return prev;
            const newHistory = prev.slice(0, currentIndex + 1);
            newHistory.push(pathname);
            setIndex(newHistory.length - 1);
            return newHistory;
        });

        setIndex((prev) => prev + 1);
    }, [pathname]);
    const goBackward = () => {
        if (index < 0) return;
        const newIndex = index - 1;
        setIndex(newIndex);
        router.replace(history[newIndex]);
        console.log( index);
    };
    return (
        <div className="h-screen w-screen flex">
            <div className="w-auto h-full shadow-md">
                <SidebarBlock />
            </div>
            <div className="w-full h-full">
                <div className="w-full h-[10%] border-b-2 flex items-center justify-evenly pl-3 text-3xl font-bold shadow-md">
                    <div className="w-[80%] h-full flex items-center">
                        {title}
                    </div>
                    <div className="w-[12%] h-full flex items-center justify-evenly">
                        <button
                            onClick={() => goBackward()}
                            className={`w-10 h-10 border rounded-full flex items-center justify-center
                            `}
                        >
                            <FaArrowLeft size={20} />
                        </button>
                        <button
                            onClick={() => router.forward()}
                            className={`w-10 h-10 border rounded-full flex items-center justify-center 
                            `}
                        >
                            <FaArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {children}
            </div>
        </div>
    );
}
