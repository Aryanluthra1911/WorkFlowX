'use client'
import ChatProfileCard from '@/components/ChatProfileCard'
import React, { useState } from 'react'
import { IoChatbubblesOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

const page = () => {
    const DM_data = [{name:'Aryan Luthra',id:'1',latest_message:'the api work is done'},{name:'Aryan Luthra',id:'2',latest_message:'the api work is done'},{name:'Aryan Luthra',id:'3',latest_message:'the api work is done'},{name:'Aryan Luthra',id:'4',latest_message:'the api work is done'},{name:'Aryan Luthra',id:'5',latest_message:'the api work is done'},{name:'Aryan Luthra',id:'6',latest_message:'the api work is done'}]
    
    const project_Group = [{name:'# backend-team',latest_message:'the api work is done',id:"10"},{name:'# backend-team',latest_message:'the api work is done',id:"11"},{name:'# backend-team',latest_message:'the api work is done',id:"10"},{name:'# backend-team',latest_message:'the api work is done',id:"11"}]
    
    const [id,setid] = useState(null)
    const chatdata =id<10 ? DM_data.filter(idx => idx.id === id) : project_Group.filter(idx=>idx.id===id)

    return (
        <div className='w-full h-[90%] bg-[#f9fafb] flex justify-around items-center'>
            <div className='w-[25%] h-full '>
                <div className='w-full h-[10%] flex justify-center items-center'>
                    <input type="text" placeholder='Search conversation...' className='w-[90%] h-[70%] border pl-3 outline-[#3498db] rounded-xl shadow-md font-semibold'/>
                </div>
                <div className="w-full h-[90%]  flex items-center flex-col overflow-y-auto no-scrollbar">
                    <div className="w-full bg-[#f8f9fa] text-[#9f9f9f] font-bold text-sm flex items-center pl-5 h-[5%] sticky top-0">
                        DIRECT MESSAGES
                    </div>
                    <div className=" w-[90%] flex-1 flex flex-col gap-3 items-center">
                        {DM_data.map((idx,key)=>{
                            return <ChatProfileCard key={key} idx={idx} id={id} setid={setid}/>
                        })}
                    </div>
                    <div className="w-full bg-[#f8f9fa] text-[#9f9f9f] font-bold text-sm flex items-center pl-5 h-[5%] sticky top-0">
                        PROJECT CHANNELS
                    </div>
                    <div className="w-[90%] h-[30%] flex-1 flex flex-col gap-3 items-center">
                        {project_Group.map((idx,key)=>{
                            return <ChatProfileCard key={key} idx={idx} id={id} setid={setid}/>
                        })}
                    </div>
                </div>

            </div>
            {id === null ? 
            <div className='w-[75%] h-full border-1 bg-[#e9ecef] flex flex-col items-center'>
                <div className='w-full h-[50%] flex justify-center items-end'>
                    <IoChatbubblesOutline className="h-40 w-40 shrink-0 text-[#f8f9fa] dark:text-neutral-200" />
                </div>
                <div className='w-full h-[20%]  text-2xl font-semibold flex justify-center items-center'>
                    Select a chat to start messaging
                </div>
                <div className='w-[50%] text-center h-[20%] text-gray-500 text-lg font-semibold flex justify-center items-start'>
                    Choose a conversation from the left sidebar or start a new chat
                </div>
            </div>: 
            <div className='w-[75%] h-full'>
                <div className='w-full h-[10%] flex items-center pl-5 gap-4'>
                    <div className=' h-[75%] bg-gradient-to-br from-cyan-400 to-indigo-900 w-12 rounded-4xl flex justify-center items-center text-white text-xl font-semibold'>
                        AL
                    </div>
                    <div className='text-2xl font-semibold h-full flex justify-start items-center w-[80%]'>
                        {console.log(chatdata)}
                        {chatdata[0].name}
                    </div>
                </div>
                <div className='w-full h-[80%] bg-[#e9ecef]'>
                </div>
                <div className='w-full h-[10%] bg-[#e9ecef] flex justify-evenly items-start'>
                    <input type="text"  placeholder='Type here...' className='w-[80%] h-[70%] flex justify-center hover:outline-2  outline-[#3498db] shadow-xl  bg-white rounded-2xl pl-4'/>
                    <button className='h-[70%] w-19 bg-sky-500 rounded-2xl shadow-xl flex justify-center hover:border-1 hover:border-black hover:scale-105 items-end pb-1.5'>
                        <FiSend size={30}  className='font-bold '/>
                    </button>
                </div>
            </div>
        }
        </div>
    )
}

export default page
