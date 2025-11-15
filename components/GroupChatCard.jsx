import React from 'react'

const GroupChatCard = ({idx,id,setid}) => {
    return (
        <div onClick={()=>{
            setid(idx.id)
        }} className={`w-full min-h-12 ${active?'border-[#2c84db] border-l-4 bg-[#ececec]':'border-transparent hover:bg-[#f2f2f2]              transition-all duration-300 ease-in-out'} rounded-xl flex justify-around items-center flex-col`}>
            <div className='w-[90%] h-[45%] text-md font font-bold flex items-center'>
                {idx.title}
            </div>
            <div className='w-[90%] h-[45%] text-sm font-semibold text-[#9a9a9a] flex items-center'>
                {idx.latest_message}
            </div>
        </div>
    )
}

export default GroupChatCard