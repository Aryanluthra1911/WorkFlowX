import React from 'react'

const ProjectDetailCard = ({idx}) => {
    return (
        <div className='w-full  min-h-10 border flex items-center bg-[#f9fafb] rounded-2xl'>
            <div className='w-[5%] h-full text-xs font-light flex items-center justify-center '>{idx.sno}</div>
            <div className='w-[30%] h-full text-xs font-light flex items-center justify-center '>{idx.title}</div>
            <div className='w-[10%] h-full text-xs font-light flex items-center justify-center '>{idx.deadline}</div>
            <div className='w-[25%] h-full text-xs font-light flex items-center justify-center '>{idx.organisation}</div>
            <div className='w-[10%] h-full text-xs font-light flex items-center justify-center '>{idx.managedBy}</div>
            <div className='w-[20%] h-full text-xs font-light flex items-center justify-evenly '>
                <div className='w-[80%] h-4 border rounded-2xl bg-white'>
                    <div style={{ width: `${idx.status}%` }} className="h-full bg-green-400 rounded-2xl"></div>
                </div>
                {idx.status}%
            </div>
        </div>
    )
}

export default ProjectDetailCard