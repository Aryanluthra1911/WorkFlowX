"use client"
import api from '@/lib/axios';
import useUserStore from '@/store/user/useUserstore';
import React, { useEffect, useState } from 'react'
import { LuClipboardCheck } from "react-icons/lu";
const TaskDetailBlock = () => {
    const [tasks,setTasks] = useState([]);
    const [loading,setLoading] = useState(true)
    const user = useUserStore((state)=>state.user);

    useEffect(()=>{
        const FetchTaskDetails = async()=>{
            try {
                const res =  await api.get("/Manager/Dashboard/GetTaskDetails",{params:{managerId:user?.id}})
                setTasks(res.data.tasks)
            } catch (error) {
                console.log("route error")
            }
            finally{
                setLoading(false)
            }
        }
        FetchTaskDetails()
    },[user])
    if(loading){
        return <div className='h-[95%] w-[48%] bg-white rounded-2xl shadow-lg border-2 flex flex-col items-center justify-around border-t-[#0d9488] border-t-3'>
            <div className='h-[15%] w-[90%] flex gap-4 items-center'>
                <div className='w-[10%] h-[90%] rounded-xl bg-[#ccfbf1] flex justify-center items-center'>
                    <LuClipboardCheck  className="h-7 w-7 shrink-0 text-[#0d9488] dark:text-neutral-200"/>
                </div>
                <div className='text-2xl font-semibold text-[#0d9488]'>Task Details</div>
            </div>
            <div className='w-[95%] h-[5%] border-b-2 rounded-2xl flex justify-around items-center'>
                <div className='w-[40%] h-full text-xs font-light flex items-center justify-center '>Title</div>
                <div className='w-[15%] h-full text-xs font-light flex items-center justify-center '>Deadline</div>
                <div className='w-[25%] h-full text-xs font-light flex items-center justify-center '>Assigned To</div>
                <div className='w-[20%] h-full text-xs font-light flex items-center justify-center '>Status</div>
            </div>
            <div className='h-[75%] w-[95%] overflow-y-auto no-scrollbar space-y-2'>
                {Array.from({ length: 9}).map((_, index) => (
                    <div key={index} className='w-[100%] h-10 border-2 rounded-2xl flex justify-around items-center bg-gray-300  animate-pulse [animation-duration:1s]'/>
                ))}
            </div>
        </div>
    }
    return (
        <div className='h-[95%] w-[48%] bg-white rounded-2xl shadow-lg border-2 flex flex-col items-center justify-around border-t-[#0d9488] border-t-3'>
            <div className='h-[15%] w-[90%] flex gap-4 items-center'>
                <div className='w-[10%] h-[90%] rounded-xl bg-[#ccfbf1] flex justify-center items-center'>
                    <LuClipboardCheck  className="h-7 w-7 shrink-0 text-[#0d9488] dark:text-neutral-200"/>
                </div>
                <div className='text-2xl font-semibold text-[#0d9488]'>Task Details</div>
            </div>
            <div className='w-[95%] h-[5%] pb-2 border-b-2 rounded-2xl flex justify-around items-center'>
                <div className='w-[40%] h-full text-xs font-semibold flex items-center justify-center '>Title</div>
                <div className='w-[15%] h-full text-xs font-semibold flex items-center justify-center '>Deadline</div>
                <div className='w-[25%] h-full text-xs font-semibold flex items-center justify-center '>Assigned To</div>
                <div className='w-[20%] h-full text-xs font-semibold flex items-center justify-center '>Status</div>
            </div>
            <div className='h-[75%] w-[95%] overflow-y-auto no-scrollbar space-y-2'>
                {tasks?.length===0 ? <div className='text-md text-gray-400 w-full h-full flex items-center justify-center'>
                    No Task Found
                </div>:
                tasks.map((idx,key)=>(
                    <div key={key} className='bg-[#f9fafb] w-[100%] h-10 border-2 rounded-2xl flex justify-around items-center'>
                        <div className='w-[40%] h-full text-xs  flex items-center justify-center font-light'>{idx.title}</div>
                        <div className='w-[15%] h-full text-xs flex items-center justify-center font-light'>{idx.dueDate}</div>
                        <div className='w-[25%] h-full text-xs flex items-center justify-center font-light'>{idx.assignedTo}</div>
                        <div className='w-[20%] h-full text-xs flex items-center justify-center font-light'>{idx.status}</div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default TaskDetailBlock