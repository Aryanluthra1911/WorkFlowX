import React from 'react'

const ProjectDetailCard = ({idx,sno}) => {
    const totalTasks = idx._count.task;
    const completedTasks = idx.task.length;
    const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    return (
        <div className='w-full  min-h-10 border flex items-center bg-[#f9fafb] rounded-2xl'>
            <div className='w-[5%] h-full text-xs font-light flex items-center justify-center '>{sno}</div>
            <div className='w-[30%] h-full text-xs font-light flex items-center justify-center '>{idx.title}</div>
            <div className='w-[10%] h-full text-xs font-light flex items-center justify-center '>{idx.dueDate}</div>
            <div className='w-[25%] h-full text-xs font-light flex items-center justify-center '>{idx.organisation}</div>
            <div className='w-[10%] h-full text-xs font-light flex items-center justify-center '>{idx.projectManager}</div>
            <div className='w-[20%] h-full text-xs font-light flex items-center justify-evenly '>
                <div className='w-[80%] h-4 border rounded-2xl bg-[#ffffff]'>
                    <div style={{ width: `${percentage}%` }} className="h-full bg-green-400 rounded-2xl"></div>
                </div>
                {percentage}%
            </div>
        </div>
    )
}

export default ProjectDetailCard