"use client"
import { Input } from '@/components/ui/input'
import usePageStore from '@/store/pages/usePageStore'
import React, { useEffect, useState } from 'react'

const page = () => {
    const setActivePage = usePageStore((state)=>state.setActivePage)
    const setTitle = usePageStore((state)=>state.setTitle)
    useEffect(()=>{
        setActivePage("User Activity")
        setTitle("User Activity")
    },[])
    const data = [
        {name:"Aryan luthra", role:"Admin" , status:"Online",  onlineTime:"5h 42m", lastSeen:"Now"},
        {name:"Aryan luthra", role:"Admin" , status:"Online",  onlineTime:"5h 42m", lastSeen:"Now"},
        {name:"Aryan luthra", role:"Admin" , status:"Online",  onlineTime:"5h 42m", lastSeen:"Now"},
        {name:"Aryan luthra", role:"Admin" , status:"Online",  onlineTime:"5h 42m", lastSeen:"Now"},
        {name:"Aryan luthra", role:"Admin" , status:"Online",  onlineTime:"5h 42m", lastSeen:"Now"},
        {name:"Aryan luthra", role:"Admin" , status:"Online",  onlineTime:"5h 42m", lastSeen:"Now"},
        {name:"Aryan luthra", role:"Admin" , status:"Online",  onlineTime:"5h 42m", lastSeen:"Now"},
        {name:"Aryan luthra", role:"Admin" , status:"Online",  onlineTime:"5h 42m", lastSeen:"Now"},
        {name:"Aryan luthra", role:"Admin" , status:"Online",  onlineTime:"5h 42m", lastSeen:"Now"},
        {name:"Aryan luthra", role:"Admin" , status:"Online",  onlineTime:"5h 42m", lastSeen:"Now"},
        {name:"Aryan luthra", role:"Admin" , status:"Offline", onlineTime:"5h 42m", lastSeen:"Now"},
    ]
    const filter = [{title:"All",color:"",data:8},{title:"Online",color:"#22c55e",data:4},{title:"Away",color:"#f59e0b",data:2},{title:"Offline",color:"#d1d5db",data:2}]
    const columns = [{title:"user",space:"20%"},{title:"status",space:"15%"},{title:"online time",space:"20%"},{title:"activity",space:"20%"},{title:"last seen",space:"15%"}]
    
    const status = [{title:"Online",color:"#22c55e",bg:"#dcfce7"},{title:"Away",color:"#f59e0b",bg:"#fef9c3"},{title:"Offline",color:"#d1d5db",bg:"#f3f4f6"}]
    const [active,setactive] = useState('All')
    return (
        <div className='w-full h-[90%] bg-[#e9ecef] flex flex-col items-center justify-evenly'>
            <div className='w-[98%] h-[98%] bg-white rounded-2xl flex flex-col justify-between items-center'>
                <div className='w-full h-[8%] rounded-t-2xl flex items-center justify-between'>
                    <div className='w-[40%] h-full flex justify-evenly items-center'>
                        {filter.map((idx,key)=>{
                            return <div 
                            onClick={()=>{setactive(idx.title)}} 
                            idx={idx} 
                            key={key} 
                            className={`p-2 border-2 h-9 flex justify-center items-center rounded-2xl gap-2 transition-all duration-500 shadow-lg ${active===idx.title?"bg-[#1e293b] text-white border-white scale-110":""}`}>
                                {idx.title === "All"? 
                                <></>:
                                <div style={{backgroundColor:`${idx.color}`}} 
                                    className='w-2 h-2 rounded-full'/>
                                }
                                <div className='text-sm font-bold'>
                                    {idx.title}
                                </div>
                                <div className='text-xs text-[#9aa2ad] font-bold'>
                                    {idx.data}
                                </div>
                            </div>
                        })}
                    </div>
                    <div className='w-[40%] h-full flex justify-center items-center'>
                        <Input
                            className={'bg-gray-100 w-[90%] border-[#e5e5e5] border-1 shadow-lg '}
                            type="text"
                            placeholder="Search User..."/>
                    </div>
                </div>
                <div className='w-full h-[7%] flex bg-[#f8fafc] justify-around items-center'>
                    {columns.map((idx,key)=>{
                        return (
                            <div key={key} idx={idx} style={{width:`${idx.space}`}} className=' h-full text-[#94a3b8] font-bold flex text-sm items-center justify-start'>
                                {idx.title.toUpperCase()}
                            </div>
                        )
                    })}
                </div>
                <div className='w-full h-[85%] overflow-y-auto no-scrollbar space-y-2 '>
                    {data.map((idx,key)=>{
                        const statusColor = status.find((s)=>s.title === idx.status)
                        return (
                            <div key={key} className='w-full h-15 hover:bg-[#f8faff] transition-all duration-500 flex justify-around items-center'>
                                <div className='h-full w-[20%] flex gap-4 items-center justify-start'>
                                    <div className=' font-extrabold text-[#2563eb] w-11 h-11 border border-[#cbd9fa] rounded-lg flex items-center justify-center bg-[#e7edfd]'>
                                        {idx.name?.split(" ").slice(0, 2).map(word => word[0]).join("").toUpperCase()}
                                    </div>
                                    <div className='w-[80%] h-[60%] flex flex-col transition-all duration-500 items-start justify-center font-bold hover:text-[#2563eb] '>
                                        {idx.name}
                                        <div className='text-xs text-gray-400 font-semibold'>
                                            {idx.role}
                                        </div>
                                    </div>
                                </div>
                                <div className='h-full w-[15%] flex justify-start items-center '>
                                    <div style={{backgroundColor:`${statusColor.bg}`}} className='p-1.5 rounded-2xl text-sm flex items-center gap-1 font-semibold'>
                                        <div style={{backgroundColor:`${statusColor.color}`}} className='w-2 h-2 rounded-full'/>
                                        {idx.status}
                                    </div>
                                </div>
                                <div className='h-full w-[20%] flex justify-start items-center font-semibold'>
                                    {idx.onlineTime}
                                </div>
                                <div className='h-full w-[20%]'>

                                </div>
                                <div style={{color:`${statusColor.color}`}} className='h-full w-[15%] flex justify-start items-center font-bold gap-1 text-sm'>
                                    <div style={{backgroundColor:`${statusColor.color}`}} className='w-2 h-2 rounded-full'/>
                                    {idx.lastSeen}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default page