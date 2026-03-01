import React, { useState } from 'react'

const TaskCard = ({idx,idx2}) => {
    const [hovered, setHovered] = useState(false);
    return (
        
        <div onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
            border: `${hovered ? `2px solid ${idx.borderClr}` : "1px solid #e5e7eb"}`,
            transition: "all 0.3s ease",
            boxShadow: hovered? `0 6px 20px rgba(0,0,0,0.1), 0 0 0 1px ${idx.borderClr}`: "0 1px 4px rgba(0,0,0,0.06)",
        }}
        className={`w-full h-auto bg-white rounded-xl border-2 transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col gap-2 items-center`}>
            <div className='w-[90%] h-auto font-bold text-sm flex items-center pt-3'>
                {idx2.title}
            </div>
            <div className='w-[90%] h-auto text-xs flex items-center pl-2 font-semibold text-gray-400'>
                {idx2.description}
            </div>
            <div className='w-[90%] h-auto  flex pb-2 gap-2 text-xs  items-center font-semibold'>
                <div  className='w-7 h-7 bg-[#2563eb] rounded-2xl border-2 flex justify-center items-center text-white text-sm font-semibold'>
                    {idx2.assignedTo?.split(" ").map(w => w[0]).join("").toUpperCase()}
                </div>
                {idx2.assignedTo.toUpperCase()}
            </div>
        </div>
    )
}

export default TaskCard