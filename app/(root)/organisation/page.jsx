'use client'
import React, { useEffect, useState } from 'react'
import OrgansiationCard from '@/components/OrgansiationCard';
import api from '@/lib/axios';
import { useSession } from 'next-auth/react';
const page = () => {
    const [organisations, setorganisations] = useState([]); 
    const [loading, setLoading] = useState(true);
    const {data:session} = useSession()

    useEffect(()=>{
        if (!session?.user?.c_name) return;
        const fetchOrganisation = async ()=>{
            try{
                const response = await api.get('/organisation/fetchOrganisations',{params:{companyName:session?.user?.c_name}});
                setorganisations(response.data)
            } catch (err) {
                console.error(err);
            }finally{
                setLoading(false)
            }
        }
        fetchOrganisation()
    },[session])
    if (loading) return <div className='w-full h-[90%] bg-[#f9fafb] flex justify-evenly items-start overflow-y-auto flex-wrap'>
        {Array.from({ length: 10}).map((_, index) => (
            <div key={index} className="w-[45%] h-[15%] animate-pulse [animation-duration:1s] rounded-2xl bg-[#ffffff] transition-all duration-300 hover:scale-103 hover:shadow-lg shadow-xl mt-4 flex flex-col justify-center items-center border-b-4 border-r-4 border-[#2c84db]">
                <div className="w-[90%] h-[40%] flex justify-around items-center ">
                    <div className='w-13 h-13 bg-gray-300 rounded-2xl animate-pulse [animation-duration:1s]'/>
                    <div className='w-[80%] h-full flex justify-start items-center'>
                        <div className='w-[70%] h-6 flex justify-start items-center text-xl font-semibold bg-gray-300 rounded animate-pulse [animation-duration:1s]'/>
                    </div>
                </div>
            </div>
        ))}
        
    </div>;
    return (
        <div className='w-full h-[90%] bg-[#f9fafb] flex justify-evenly items-start overflow-y-auto flex-wrap'>
            {organisations.map((idx,key)=>{
                return <OrgansiationCard key={key} idx={idx}/>
            })}
        </div>
    )
}

export default page
