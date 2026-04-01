'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const OrgansiationCard = ({idx}) => {
    const router = useRouter()
    return (
        <div onClick={()=>{
            router.push(`/organisation/${idx.id}`)
        }}className='w-[45%] h-[15%]  rounded-2xl bg-[#ffffff] transition-all duration-500 hover:scale-101 hover:shadow-lg shadow-xl mt-4 flex flex-col justify-center items-center border-b-4 border-r-4 border-gray-400 '>
            <div className='w-[90%] h-[40%] flex justify-around items-center'>
                <div className='w-13 h-13 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-2xl flex justify-center items-center font-semibold text-white'>
                    {idx.organisationName?.split(" ").slice(0, 2).map(word => word[0]).join("").toUpperCase()}
                </div>
                <div className='w-[80%] h-full flex justify-start items-center'>
                    <div className='w-full h-[45%] flex justify-start items-center text-xl font-semibold'>
                        {idx.organisationName.toUpperCase()}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default OrgansiationCard