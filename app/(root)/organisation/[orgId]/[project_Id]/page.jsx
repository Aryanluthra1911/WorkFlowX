"use client"
import TaskCard from '@/components/TaskCard';
import api from '@/lib/axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaHourglassHalf } from "react-icons/fa";
import { FaBolt, FaCheck,FaPause,FaTimes } from "react-icons/fa";
const page = () => {
    const params = useParams();
    const { project_Id } = params;
    const [project,setproject] = useState([])
    const [tasks,settasks] = useState([])
    const columnData = [
        {title:"PENDING",  borderClr:"#fcd34d", bg:'#fffbeb',bg2:"#fef3c7",txtClr:'#b5540b',icon:FaHourglassHalf},
        {title:"ACTIVE",   borderClr:"#93c5fd", bg:'#eff6ff',bg2:"#dbeafe",txtClr:'#1d4ed8',icon:FaBolt},
        {title:"COMPLETED",borderClr:"#6ee7b7", bg:'#f0fdf6',bg2:"#d1fae5",txtClr:'#065f46',icon:FaCheck},
        {title:"ON_HOLD",  borderClr:"#c4b5fd", bg:'#faf5ff',bg2:"#ede9fe",txtClr:'#5b21b6',icon:FaPause},
        {title:"CANCELLED",borderClr:"#fca5a5", bg:'#fff1f1',bg2:"#fee2e2",txtClr:'#991b1b',icon:FaTimes}
    ]
    const [loading,setloading] = useState(false)
    useEffect(()=>{
        const fetchProjectData = async()=>{
            try {
                setloading(true)
                const res = await api.get(`/organisation/fetchProjectData?projectId=${project_Id}`)
                setproject(res.data.data)
                settasks(res.data.data.task)
                console.log(res.data.data.task)
            }catch (error) {
                console.log(error)
            }finally{
                setloading(false)
            }
        }
        fetchProjectData()
    },[])
    if(loading){
        return <div className='w-full h-[90%] bg-[#f3f4f6] flex justify-evenly items-center'>
            {columnData.map((idx,key)=>{
                const Icon=idx.icon
                const filteredTasks = tasks.filter(task=>task.status === idx.title)
                return <div idx={idx} key={key} className='w-[18%] h-[95%] bg-[#f3f4f6] border-2 border-[#e5e7eb] rounded-2xl flex flex-col items-center justify-evenly'>
                    <div style={{ backgroundColor: idx.bg ,color:idx.txtClr, borderColor:idx.borderClr ,borderBottomColor: idx.txtClr}} className={`w-full h-[7%] rounded-t-xl border-2 border-b-4 shadow-lg flex justify-evenly items-center`}>
                        <div className='w-[80%] h-full flex items-center justify-center  font-bold gap-2'>
                            <Icon size={13} style={{ color: idx.txtClr }} />
                            {idx.title}
                        </div>
                        <div style={{ backgroundColor: idx.bg2 ,color:idx.txtClr, borderColor:idx.borderClr}} className='w-[10%] h-[60%] flex items-center justify-center text-xs border rounded-full shadow-lg font-bold'> {filteredTasks.length}</div>
                    </div>
                    <div className='w-[93%] h-[92%] overflow-y-auto no-scrollbar space-y-3 pt-2'>
                        {Array.from({length:6}).map((_,index)=>(
                            <div key={index} className='w-full h-25 bg-gray-300 animate-pulse [animation-duration:900ms] rounded-xl border-r-2
                            border-b-2 border-gray-400 '></div>
                        ))}
                    </div>
                </div>
            })}
        </div>
    }
    return (
        <div className='w-full h-[90%] bg-[#f3f4f6] flex justify-evenly items-center'>
            {columnData.map((idx,key)=>{
                const Icon=idx.icon
                const filteredTasks = tasks.filter(task=>task.status === idx.title)
                return <div idx={idx} key={key} className='w-[18%] h-[95%] bg-[#f3f4f6] border-2 border-[#e5e7eb] rounded-2xl flex flex-col items-center justify-evenly'>
                    <div style={{ backgroundColor: idx.bg ,color:idx.txtClr, borderColor:idx.borderClr ,borderBottomColor: idx.txtClr}} className={`w-full h-[7%] rounded-t-xl border-2 border-b-4 shadow-lg flex justify-evenly items-center`}>
                        <div className='w-[80%] h-full flex items-center justify-center  font-bold gap-2'>
                            <Icon size={13} style={{ color: idx.txtClr }} />
                            {idx.title}
                        </div>
                        <div style={{ backgroundColor: idx.bg2 ,color:idx.txtClr, borderColor:idx.borderClr}} className='w-[10%] h-[60%] flex items-center justify-center text-xs border rounded-full shadow-lg font-bold'> {filteredTasks.length}</div>
                    </div>
                    <div className='w-[93%] h-[92%] overflow-y-auto no-scrollbar space-y-3 pt-2'>
                        {filteredTasks.map((idx2,key)=>{
                            return <TaskCard idx2={idx2} idx={idx} key={key}/>
                        })}
                    </div>
                </div>
            })}
        </div>
    )
}

export default page