'use client'
import React from 'react'

const Notification_card = ({idx}) => {
    return (
        <div onClick={()=>{
            idx.status = 'seen'
        }} className='w-[90%] h-auto p-4 text-xl bg-white rounded-2xl border-l-4 border-[#2c84db] shadow-xl gap-2'>
            <div className='font-semibold flex justify-between items-center gap-4'>
                {idx.title} 
                {idx.status ==='seen'? <></>:
                    <div className='w-4 h-4 bg-[#3b82f6] rounded-2xl'>
                        
                    </div>
                }
            </div>
            <div className='text-lg text-[#9f9f9f]'>
                {idx.description}
            </div>
            <div className='text-sm text-[#9f9f9f] font-semibold'>
                {idx.time}
            </div>
        </div>
    )
}

export default Notification_card