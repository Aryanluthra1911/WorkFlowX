'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const OrgansiationCard = ({idx}) => {
    const router = useRouter()
    return (
        <div onClick={()=>{
            console.log(idx.companyName)
            router.push(`/organisation/${idx.id}`)
        }}
        className='w-[45%] h-[25%]  rounded-2xl bg-[#ffffff]transition-all duration-300 
            hover:scale-103 hover:shadow-lg shadow-xl mt-4 flex flex-col justify-center items-center border-l-4 border-[#2c84db] '>
            <div className='w-[90%] h-[40%] flex justify-around items-center'>
                <div className='w-15 h-15 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl'>

                </div>
                <div className='w-[80%] h-full'>
                    <div className='w-full h-[45%] flex justify-start items-center text-xl font-semibold'>
                        {idx.companyName}
                    </div>
                    <div className='w-full h-[45%] text-xs text-[#8a8a8a] flex justify-start items-center font-semibold'>
                        {idx.category}
                    </div>
                    
                </div>
                
            </div>
            <div className='w-full h-[50%] flex justify-around items-center '>
                <div className='w-[40%] h-full flex flex-col justify-around items-center'>
                    <div className='text-[#7a7a7a] text-lg font-semibold'>
                        Projects
                    </div>
                    <div className='text-[#7a7a7a] font-semibold'>
                        4
                    </div>
                </div>
                <div className='w-[40%] h-full flex flex-col justify-around items-center'>
                    <div className='text-[#7a7a7a] text-lg font-semibold'>
                        Active projects
                    </div>
                    <div className='text-[#7a7a7a] font-semibold'>
                        2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrgansiationCard