'use client'
import React, { useState } from 'react'

const ChatProfileCard = ({idx,id,setid}) => {
    const active = id===idx.id
    return (
        <div onClick={()=>{
            setid(idx.id)
        }} className={`w-full min-h-12 ${active?'border-[#2c84db] border-l-4 bg-[#ececec] scale-105':'border-transparent hover:scale-105 hover:bg-[#f2f2f2]              transition-all duration-300 ease-in-out'} rounded-xl  flex justify-around items-center flex-col`}>
            <div className='w-[90%] h-[45%] text-md font font-bold flex items-center'>
                {idx.name}
            </div>
            <div className='w-[90%] h-[45%] text-sm font-semibold text-[#9a9a9a] flex items-center'>
                {idx.latest_message}
            </div>
        </div>
    )
}

export default ChatProfileCard