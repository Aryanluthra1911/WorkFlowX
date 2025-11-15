'use client'
import Linechart from '@/components/Linechart'
import { Piechart_Block } from '@/components/Piechart_Block'
import SmallProjectCard from '@/components/SmallProjectCard'
import React from 'react'

const page = () => {
    return (
        <div className='w-full h-[90%] bg-[#f9fafb] flex flex-col justify-around items-center'>
            <div className='w-full h-[50%] flex justify-around items-center'>
                <Piechart_Block title={"Task Status Distribution"} className={'w-[25%] h-[90%]'}/>
                <Piechart_Block title={'Task Deadline Status'} className={'w-[25%] h-[90%]'}/>
                <div className='w-[45%] h-[90%] border-2 rounded-2xl bg-white flex flex-col items-center justify-around shadow-md'>
                    <div className='w-[90%] h-[15%] text-xl font-semibold flex items-center justify-center'>Ongoing Projects</div>
                    <div className='w-[90%] h-[70%] flex'>
                        <SmallProjectCard/>
                    </div>
                </div>
            </div>
            <div className='w-full h-[50%] flex justify-center items-center'>
                <Linechart className={'w-[98%] h-[95%]'}/>
            </div>
        </div>
    )
}

export default page