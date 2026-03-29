"use client"
import React, { useEffect } from 'react'
import AssignTaskBlock from './AssignTaskBlock'
import AddNewProjectBlock from './AddNewProjectBlock'
import ProjectDetailBlock from './ProjectDetailBlock'
import usePageStore from '@/store/pages/usePageStore'

const Admin_dashboard = () => {
    const setTitle = usePageStore((state) => state.setTitle)
    useEffect(() => {
        setTitle("Admin Dashboard")
    }, [])
    return (
        <div className='w-full h-[90%] bg-[#f9fafb] flex flex-col items-center justify-evenly'>
            <div className=' h-[49%] w-full flex items-center justify-evenly'>
                <AssignTaskBlock/>
                <AddNewProjectBlock/>
            </div>
            <div className=' h-[49%] w-full flex items-center justify-evenly'>
                <ProjectDetailBlock/>
            </div>
        </div>
    )
}

export default Admin_dashboard