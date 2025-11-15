'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OrgansiationCard from '@/components/OrgansiationCard';
const page = () => {
    const [organisations, setorganisations] = useState([]); 
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetchOrganisation = async ()=>{
            try{
                const response = await axios.get('/api/organisation');
                setorganisations(response.data)
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchOrganisation()
    },[])
    if (loading) return <div className='w-full h-[90%] bg-[#f9fafb] flex flex-col justify-around items-center text-2xl font-semibold'>Loading...</div>;
    return (
        <div className='w-full h-[90%] bg-[#f9fafb] flex justify-evenly items-start overflow-y-auto flex-wrap'>
            {console.log(organisations)}
            {organisations.map((idx,key)=>{
                return <OrgansiationCard key={key} idx={idx}/>
            })}
        </div>
    )
}

export default page
