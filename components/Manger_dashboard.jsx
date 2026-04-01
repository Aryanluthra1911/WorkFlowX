import React, { useEffect } from 'react'
import AssignTaskBlock from './AssignTaskBlock'
import ProjectDetailBlock from './ProjectDetailBlock'
import TaskDetailBlock from './TaskDetailBlock'
import usePageStore from '@/store/pages/usePageStore'

const Manger_dashboard = () => {
    const setTitle = usePageStore((state) => state.setTitle)
    useEffect(() => {
        setTitle("Manager Dashboard")
    }, [])
    return (
        <div className='w-full h-[90%] bg-[#f9fafb] flex flex-col items-center justify-evenly'>
            <div className=' h-[49%] w-full flex items-center justify-evenly'>
                <TaskDetailBlock/>
                <AssignTaskBlock/>
            </div>
            <div className=' h-[49%] w-full flex items-center justify-evenly'>
                <ProjectDetailBlock/>
            </div>
        </div>
    )
}

export default Manger_dashboard