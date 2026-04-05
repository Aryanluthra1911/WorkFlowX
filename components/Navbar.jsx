import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { act, useState } from "react";
import { useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
const Navbar = ({ className }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const refs = useRef([]);
    const [style, setStyle] = useState({});
    const { status } = useSession()
    const navItems = [
        { title: "Home", link: "#home", id: 1 },
        { title: "Features", link: "#features", id: 2 },
        { title: "Roles", link: "#roles", id: 3 },
        { title: "Ai Assistant", link: "#aiAssistant", id: 4 },
        { title: "How It Works", link: "#howItWorks", id: 5 },
    ];
    const router = useRouter();
    const [active, setActive] = useState(1);
    useEffect(() => {
        const index = navItems.findIndex((item) => item.id === active);
        const el = refs.current[index];

        if (el) {
            setStyle({
                width: el.offsetWidth,
                left: el.offsetLeft,
            });
        }
    }, [active]);
    const GetStarted = ()=>{
        if(status === "authenticated"){
            router.push("/dashboard")
        }
        else{
            router.push("/register")
        }
    }
    return (
        <div className={className}>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
            </style>
            <nav className="w-full h-full bg-white px-6 md:px-12 lg:px-24 xl:px-40 py-4 flex items-center justify-between">
                <div onClick={()=>router.push("/")} className="text-3xl font-extrabold bg-linear-to-r from-zinc-950 to-zinc-500 text-transparent bg-clip-text ">
                    WorkXflow
                </div>
                <div className="hidden md:flex relative items-center bg-zinc-100 border border-zinc-200 rounded-full px-1 py-1 gap-2">
                    <div
                        className="absolute shadow-lg top-1 bottom-1 bg-white border-2 border-zinc-200 rounded-full transition-all duration-600 ease-in-out"
                        style={style}
                    />
                    {navItems.map((idx, key) => (
                        <div
                            key={key}
                            ref={(el) => (refs.current[key] = el)}
                            onClick={() => {
                                setActive(idx.id);
                                router.push(idx.link);
                            }}
                            className={`relative px-4 py-1.5 rounded-full text-sm z-10 cursor-pointer font-semibold transition-colors duration-300 ${
                                idx.id === active
                                    ? "text-zinc-800 font-bold"
                                    : "text-zinc-500 hover:text-zinc-400"
                            }`}
                        >
                            {idx.title}
                        </div>
                    ))}
                </div>
                <button onClick={()=>GetStarted()} className="hidden md:flex items-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 hover:text-zinc-200 text-sm pl-5 pr-2 py-2 rounded-full cursor-pointer border-0 font-semibold hover:-translate-y-1 transform transition-all duration-500">
                    Get started
                    <span className="size-7 rounded-full bg-white flex items-center justify-center">
                        <FaArrowRight size={15} className="text-black"/>
                    </span>
                </button>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1"
                >
                    <span
                        className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    ></span>
                </button>

                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 flex flex-col p-5 gap-1 md:hidden z-50">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href="#"
                                className={`px-4 py-2.5 rounded-lg text-sm ${item === "Products" ? "bg-zinc-50 font-medium text-zinc-800" : "text-zinc-500 hover:bg-zinc-50"}`}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="flex items-center justify-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer border-0 mt-3 w-fit">
                            Get started
                            <span className="size-7 rounded-full bg-white flex items-center justify-center">
                                <svg
                                    width="12"
                                    height="10"
                                    viewBox="0 0 12 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M.6 4.602h10m-4-4 4 4-4 4"
                                        stroke="#3f3f47"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
