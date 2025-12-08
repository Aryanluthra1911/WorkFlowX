import React, { useEffect, useState } from 'react'
import { CheckSquare } from "lucide-react";
import { RxCross2 } from "react-icons/rx";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AssignTaskBlock = () => {
    const [open,setopen] = useState(false)
    return (
        <div className='h-[95%] w-[48%] bg-white rounded-2xl shadow-lg border-2 flex flex-col items-center justify-around border-t-[#2563eb] border-t-3'>
            <div className='h-[15%] w-[90%] flex gap-4 items-center'>
                <div className='w-[10%] h-[90%] rounded-xl bg-[#dbeafe] flex justify-center items-center'>
                    <CheckSquare className="h-7 w-7 shrink-0 text-[#2563eb] dark:text-neutral-200"/>
                </div>
                <div className='text-2xl font-semibold text-[#2563eb]'>Assign Task</div>
            </div>
            <div className='h-[8%] w-[90%]  text-[#747c86]'>
                Create and assign new tasks to team members
            </div>
            <div className=' h-[15%] w-[90%]'>
                <button onClick={()=>(setopen(true))} className='w-full h-[90%] text-white bg-[#2563eb] rounded-2xl text-lg font-semibold'>
                    + Assign New Task
                </button>
            </div>
            <div className='h-[8%] w-[90%] text-black font-semibold text-sm flex items-center'>
                Recent Tasks:
            </div>
            <div className=' bg-[#f9fafb] rounded-2xl h-[20%] w-[90%] flex flex-col justify-center items-start'>
                <div className='pl-5 text-sm font-bold'>Design Homepage</div>
                <div className='pl-5 text-sm font-semibold text-[#747c86]'>Assigned To: aryan</div>
            </div>
            <div className=' bg-[#f9fafb] rounded-2xl h-[20%] w-[90%]'>
                <div className='pl-5 text-sm font-bold'>Design Homepage</div>
                <div className='pl-5 text-sm font-semibold text-[#747c86]'>Assigned To: aryan</div>
            </div>
            {open && <TaskModel onClose={() => setopen(false)}/>}
        </div>
        
    )
}
function TaskModel({onClose}){
    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") onClose();
        }
            document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);
    return(
        <div className='fixed inset-0 z-50 flex justify-center items-center'>
            <div className='absolute inset-0 bg-black/40 backdrop-blur-sm'/>
            <div className='relative z-10 w-[50%] h-[65%]  mx-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 transform transition-all duration-200 flex flex-col items-center justify-around'>
                <div className='w-[95%] h-[10%] flex items-center justify-between'>
                    <div className='text-2xl font-bold h-full w-70 flex items-center '>Create New Task</div>
                    <div onClick={onClose} className='h-[90%] w-10 flex justify-center items-center rounded-xl'>
                        <RxCross2 className="h-6 w-6 shrink-0 text-gray-400 hover:text-black dark:text-neutral-200 transform transition-all duration-200"/>
                    </div>
                </div>
                <form className='w-[95%] h-[80%] flex flex-col items-center '>
                    <div className='w-full h-[88%] flex items-center justify-around'>
                        <div className='w-[50%] h-full flex flex-col justify-around items-center'>
                            <div className='w-[90%] h-[30%] bg-white grid gap-1'>
                                <Label>Task Title</Label>
                                <Input
                                    className={'bg-white'}
                                    id="title"
                                    type="text"
                                    placeholder="Enter title"
                                    required
                                />
                            </div>
                            <div className='w-[90%] h-[30%] bg-white grid gap-1'>
                                <Label>Due date</Label>
                                <Input
                                    className={'bg-white'}
                                    id="title"
                                    type="date"
                                    placeholder="date"
                                    required
                                />
                            </div>
                            <div className='w-[90%] h-[30%] bg-white grid gap-1'>
                                <Label>Description</Label>
                                <Input
                                    className={'bg-white '}
                                    id="title"
                                    type="text"
                                    placeholder="Enter description"
                                    required
                                />
                            </div>
                        </div>
                        <div className='w-[50%] h-full flex flex-col gap-4 items-center'>
                            <div className='w-[90%] h-[30%] bg-white grid gap-1'>
                                <Label>Assign To</Label>
                                <Input
                                    className={'bg-white'}
                                    id="title"
                                    type="text"
                                    placeholder="Member Name"
                                    required
                                />
                            </div>
                            
                            <div className='w-[90%] h-[30%] bg-white grid gap-1'>
                                <Label>Documents</Label>
                                <Input
                                    className={'bg-white'}
                                    id="title"
                                    type="file"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[12%] flex justify-around items-center'>
                        <button onClick={onClose} className='w-[40%] h-full rounded-2xl text-xl font-semibold border-gray-200 border hover:border-black transform transition-all duration-200'>
                            Cancel
                        </button>
                        <button className='transform transition-all duration-200 hover:border-black w-[40%] h-full bg-[#16a34a] text-white rounded-2xl text-xl font-semibold border '>
                            Create Task
                        </button>
                    </div>
                    
                </form>
            </div>
                
        </div>
    )
}

export default AssignTaskBlock