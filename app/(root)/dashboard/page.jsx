'use client'
import Admin_dashboard from '@/components/Admin_dashboard'
import Manger_dashboard from '@/components/Manger_dashboard'
import Member_dashboard from '@/components/Member_dashboard'
import api from '@/lib/axios'
import useUserStore from '@/store/user/useUserstore'

import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const page = () => {
    const {data:session}= useSession()
    const user = useUserStore((state)=>state.user);
    const setUser = useUserStore((state)=>state.setUser);
    
    useEffect(()=>{
        if(!session?.user?.email) return
        const fetchdata = async()=>{
            try {
                const res = await api.get('/Dashboard/fetchUserData' ,{params:{email:session.user.email}})
                setUser(res.data.data); 
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata()
    },[session])
    if(user?.role === 'Admin'){
        return <Admin_dashboard/>
    }
    else if(user?.role === 'Manager'){
        return <Manger_dashboard/>
    }
    else if(user?.role === 'Member'){
        return <Member_dashboard/>
    }
}

export default page