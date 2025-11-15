'use client'
import React, { useEffect, useState, use } from 'react'
import axios from 'axios';
import Projectcard from '@/components/Projectcard';
const page = ({params}) => {
    const { projectInfo } = React.use(params); 
    const [info,setinfo]=useState([])
    const [projectdata,setprojectdata] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetch_data = async()=>{
            try{
                const response = await axios.get(`/api/projectsByOrgId?orgid=${projectInfo}`);
                console.log(response.data)
                setinfo(response.data)
                const data = JSON.parse(info.projects)
                console.log(data)
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetch_data()
        
    },[])
    // useEffect(()=>{
        
    // },[info])
    if (loading) return <div className='w-full h-[90%] bg-[#f9fafb] flex flex-col justify-around items-center text-2xl font-semibold'>Loading...</div>;
    const {projects} = info;
    return (
        <div className='w-full h-[90%] bg-[#f9fafb]'>
            {projects.map((idx,key)=>{
                return <h1 key={key}>hello</h1>
            })}
        </div>
    )
}

export default page