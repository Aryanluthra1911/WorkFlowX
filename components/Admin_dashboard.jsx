import React from 'react'
import AssignTaskBlock from './AssignTaskBlock'
import AddNewProjectBlock from './AddNewProjectBlock'
import ProjectDetailBlock from './ProjectDetailBlock'

const Admin_dashboard = () => {
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