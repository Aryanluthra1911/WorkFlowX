import React from 'react'
import { CheckSquare } from "lucide-react";
import { LuFileText } from "react-icons/lu";
import ProjectDetailCard from './ProjectDetailCard';

const ProjectDetailBlock = () => {
    const tasksData = [
  {
    sno: 1,
    title: "Website Redesign",
    deadline: "2025-12-15",
    organisation: "TechNova Pvt Ltd",
    managedBy: "Amit Sharma",
    status: 12,
  },
  {
    sno: 2,
    title: "Mobile App Testing",
    deadline: "2025-12-20",
    organisation: "CodeWave Solutions",
    managedBy: "Neha Verma",
    status: 56,
  },
  {
    sno: 3,
    title: "Database Migration",
    deadline: "2025-12-10",
    organisation: "DataCorp India",
    managedBy: "Rohit Mehta",
    status: 21,
  },
  {
    sno: 4,
    title: "UI/UX Audit",
    deadline: "2025-12-18",
    organisation: "DesignHub Studio",
    managedBy: "Simran Kaur",
    status: 92,
  },
  {
    sno: 5,
    title: "SEO Optimization",
    deadline: "2025-12-22",
    organisation: "GrowthMark Agency",
    managedBy: "Karan Malhotra",
    status: 17,
  },
  {
    sno: 5,
    title: "SEO Optimization",
    deadline: "2025-12-22",
    organisation: "GrowthMark Agency",
    managedBy: "Karan Malhotra",
    status: 19,
  },
];

    return (
        <div className='h-[95%] w-[97.5%] bg-white rounded-2xl flex items-center justify-evenly flex-col shadow-md border-2 border-t-[#a855f7] border-t-3'>
            <div className='w-[95%] h-[15%] flex gap-4 items-center'>
                <div className='w-[5%] h-[90%] rounded-xl bg-[#f3e8ff] flex justify-center items-center'>
                    <LuFileText className="h-7 w-7 shrink-0 text-[#a855f7] dark:text-neutral-200"/>
                </div>
                <div className='text-2xl font-semibold text-[#a855f7]'>Project Details</div>
            </div>
            <div className='w-[95%] h-[5%] border-b-2 pb-2 rounded-2xl flex '>
                <div className='w-[5%] h-full text-xs font-light flex items-center justify-center '>S no.</div>
                <div className='w-[30%] h-full text-xs font-light flex items-center justify-center '>title</div>
                <div className='w-[10%] h-full text-xs font-light flex items-center justify-center '>Deadline</div>
                <div className='w-[25%] h-full text-xs font-light flex items-center justify-center '>Organisation</div>
                <div className='w-[10%] h-full text-xs font-light flex items-center justify-center '>Managed By</div>
                <div className='w-[20%] h-full text-xs font-light flex items-center justify-center '>Status</div>
            </div>
            <div className='w-[95%] h-[70%] overflow-y-auto no-scrollbar space-y-2'>
                {tasksData.map((idx,key)=>{
                    return<ProjectDetailCard idx={idx} key={key}/>
                })}
            </div>
        </div>
    )
}

export default ProjectDetailBlock